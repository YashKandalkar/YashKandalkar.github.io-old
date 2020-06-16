import React, { useState, useEffect } from 'react';
import './RightTab.css';
import Projects from '../Projects/Projects'
import useWindowDimensions from '../useWindowDimentions';

import { 
    motion, 
    useMotionValue, 
    useTransform
} from 'framer-motion';

                              
const RightTab = ( {activeTab, onOpen, onClose} ) => {
    const { width } = useWindowDimensions();
    const [state, setState] = useState({open: false});

    const isPhone = (width <= 480);

    const dragConstraints = (isPhone)?
                            {
                                left: 0,
                                right: width - 30
                            }
                            :
                            {
                                left: width*0.5-30,
                                right: width - 30
                            }


    const dragTransition = { 
        bounceStiffness: 600, 
        bounceDamping: 30,
        // max: 0
    }

    let animate = {
        x: [
            dragConstraints.right,
            dragConstraints.right - 30, 
            dragConstraints.right
        ]
    }

    const x = useMotionValue(dragConstraints.right)
    const opacity = useTransform(
        x,
        [dragConstraints.left, dragConstraints.right],
        [1, 0]
    );


    if(activeTab !== 'RIGHT'){
        //x.set(dragConstraints.right)
    }


    useEffect(() => {
        function updateOpen() {
          if(x.get() <= dragConstraints.left){
            setState({open: true});

          } else{
            setState({open: false});
          }
        }

        const unsubscribeX = x.onChange(updateOpen)

        return () => {
          unsubscribeX()
        }
      }, [dragConstraints.left, x])

    const onTap = (event, info) => {
        if (x.current === dragConstraints.right){
            x.set(dragConstraints.left);
            setState({open: true});
            onOpen();
        }
        else if (x.current === dragConstraints.left){
            x.set(dragConstraints.right);
            setState({open: false});
            onClose();
        }
    }

    const onDrag = (event, info) => {
        if(x.current <= dragConstraints.left+40){
            setState({open: true});
        }
        else{
            setState({open: false});
        }
        if(x.current < dragConstraints.left){
            onOpen();
        }
        if(x.current === dragConstraints.right){
            onClose();
        }
    }
   
    return (
        <div className="right-tab">
            <motion.div
                className="right-tab-arrow"
                animate={animate}
                transition={{ ease: "easeOut", duration: 0.7, delay: 1 }}
                style={{x}}
                drag="x"
                dragConstraints={dragConstraints}
                dragElastic={0.2}
                dragTransition={dragTransition}
                dragMomentum={true}
                onTap={onTap}
                onDrag={onDrag}
            />
            <motion.div
                className="right-tab-content"
                style={{opacity, x}}
            >
                <Projects isOpen={state.open}/>
            </motion.div>
        </div>
    )
}


export default RightTab;