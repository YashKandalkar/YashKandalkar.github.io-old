import React from 'react';
import './RightTab.css';
import useWindowDimensions from '../useWindowDimentions';

import { 
    motion, 
    useMotionValue, 
    useTransform
} from 'framer-motion';

                              
const RightTab = () => {
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
        x: [
            dragConstraints.bottom,
            dragConstraints.bottom - 30, 
            dragConstraints.bottom
        ]
    }

    const x = useMotionValue(dragConstraints.bottom)
    const opacity = useTransform(
        x,
        [width*0.5, width - 20],
        [0.75, 0]
    );
   
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
            />
            <motion.div
                className="right-tab-content"
                style={{opacity, x}}
                drag="x"
            >
            </motion.div>
        </div>
    )
}


export default RightTab;