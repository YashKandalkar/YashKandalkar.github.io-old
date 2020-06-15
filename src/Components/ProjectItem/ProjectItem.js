import React from 'react';
import './ProjectItem.css'
import { 
    motion
} from 'framer-motion';



const ProjectItem = ( {variant, name, description, img} ) => {
    

    return (
        <motion.div
            className="project-item"
            variants={variant}
        >
            <div className="preview">
                <img src={img} alt="preview"/>
            </div>
            <div className="content">
                <div className="title">{name}</div>
                <div className="description">{description}</div>
            </div>
        </motion.div>
    );
}

export default ProjectItem;