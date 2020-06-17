import React from 'react';
import './BottomTab.css';
import useWindowDimensions from '../useWindowDimentions';
import ContactMe from '../ContactMe/ContactMe';

import { 
    motion, 
    useMotionValue, 
    useTransform
} from 'framer-motion';

                              
const BottomTab = ( {activeTab, onOpen} ) => {
    const { height, width } = useWindowDimensions();
    const isPhone = (width <= 480);

    const dragConstraints = (isPhone)?
                            {
                                top: 0,
                                bottom: height - 30
                            }
                            :
                            {
                                top: height*0.5 - 30,
                                bottom: height - 30
                            }


    const dragTransition = { 
        bounceStiffness: 600, 
        bounceDamping: 30,
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

    if(activeTab !== 'BOTTOM'){
        y.set(dragConstraints.bottom)
    }

    const onTap = (event, info) => {
        if (y.current === dragConstraints.bottom){
            y.set(dragConstraints.top)
            onOpen();
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
            />
            <motion.div
                className="bottom-tab-content"
                style={{opacity, y}}
            >
                <ContactMe />
            </motion.div>
        </div>
    )
}


export default BottomTab;