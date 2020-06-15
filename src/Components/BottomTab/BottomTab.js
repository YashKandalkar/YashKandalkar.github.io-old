import React from 'react';
import './BottomTab.css';
import useWindowDimensions from '../useWindowDimentions';

import { 
    motion, 
    useMotionValue, 
    useTransform
} from 'framer-motion';

                              
const BottomTab = () => {
    const { height, width } = useWindowDimensions();
    const isPhone = (width <= 480);

    const dragConstraints = (isPhone)?
                            {
                                top: 0,
                                bottom: height - 20
                            }
                            :
                            {
                                top: height*0.5,
                                bottom: height - 20
                            }


    const dragTransition = { 
        bounceStiffness: 600, 
        bounceDamping: 30,
        // max: 0
    }

    let animate = {
        y: [
            dragConstraints.bottom,
            dragConstraints.bottom - 30, 
            dragConstraints.bottom
        ]
    }

    let y = useMotionValue(dragConstraints.bottom)
    const opacity = useTransform(
        y,
        [dragConstraints.top, dragConstraints.bottom],
        [1, 0]
    );

    const onTap = (event, info) => {
        if (y.current === dragConstraints.bottom){
            y.set(dragConstraints.top)
        }
        else if (y.current === dragConstraints.top){
            y.set(dragConstraints.bottom)
        }
    }
   
    return (
        <div className="bottom-tab">
            <motion.div
                className="bottom-tab-arrow"
                animate={animate}
                transition={{ ease: "easeOut", duration: 0.7, delay: 2 }}
                style={{y}}
                drag="y"
                dragConstraints={dragConstraints}
                dragElastic={0.2}
                dragTransition={dragTransition}
                onTap={onTap}
                //onDrag={(e, info)=>}
            />
            <motion.div
                className="bottom-tab-content"
                style={{opacity, y}}
            >
            </motion.div>
        </div>
    )
}


export default BottomTab;