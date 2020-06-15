import React, { useState, useEffect } from 'react';
import './RightTab.css';
import Projects from '../Projects/Projects'
import useWindowDimensions from '../useWindowDimentions';

import { 
    motion, 
    useMotionValue, 
    useTransform
} from 'framer-motion';

                              
const RightTab = () => {
    const { width } = useWindowDimensions();
    const [open, setOpen] = useState(false);

    const isPhone = (width <= 480);

    const dragConstraints = (isPhone)?
                            {
                                left: 0,
                                right: width - 20
                            }
                            :
                            {
                                left: width*0.5-20,
                                right: width - 20
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

    useEffect(() => {
        function updateOpen() {
          if(x.get() <= dragConstraints.left){
            setOpen(true)
          } else{
            setOpen(false)
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
            setOpen(true);
            event.target.parentElement.style.zIndex = '999';
        }
        else if (x.current === dragConstraints.left){
            x.set(dragConstraints.right);
            setOpen(false);
            event.target.parentElement.style.zIndex = '0';
        }
    }

    const onDrag = (event, info) => {
        if(x.current <= dragConstraints.left+40){
            setOpen(true);
        }
        else{
            setOpen(false);
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
                <Projects isOpen={open}/>
            </motion.div>
        </div>
    )
}


export default RightTab;