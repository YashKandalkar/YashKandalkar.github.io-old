import React from 'react';
import './Projects.css';
import ProjectItem from '../ProjectItem/ProjectItem';
import { 
    motion
} from 'framer-motion';

const Projects = ({ isOpen }) => {
    const list = {
      visible: {
        opacity: 1,
        transition: {
          when: "beforeChildren",
          staggerChildren: 0.2,
        },
      },
      hidden: {
        opacity: 0,
        transition: {
          when: "afterChildren",
        },
      },
    }

    const item = {
        visible: {
            opacity: 1,
            x: 0,
        },
        hidden: {
            opacity: 0,
            x: 100,
        }
    }

    return(
        <div id="container">
            <div id="heading">
                {"My Projects"}
            </div>
            <motion.div 
                initial="hidden"
                animate={(isOpen)?"visible":"hidden"}
                variants={list}
                id='project-items-container'
            >
                <ProjectItem
                    name="Collabora"
                    description="A site to (Collabora)tively solve online MCQs!"
                    variant={item}
                    img={"/assets/collabora.webp"}
                    url={"https://github.com/YashKandalkar/Collabora"}
                />

                <ProjectItem 
                    name="Track Your Day"
                    description="A website to keep a track on your daily activities"
                    variant={item}
                    img={"/assets/track-your-day.webp"}
                    url={"https://YashKandalkar.github.io/track-your-day"}
                />

                <ProjectItem 
                    name="Canary"
                    description="A prototype site for streaming music"
                    variant={item}
                    img={"/assets/canary.webp"}
                    url={"https://YashKandalkar.github.io/canary"}
                />

                <ProjectItem 
                    name="Chat It Dude"
                    description="What's better than talking to someone who won't judge you?"
                    variant={item}
                    img={"/assets/chatitdude.webp"}
                    url={"http://chat-it-dude.herokuapp.com/"}
                />

                <ProjectItem 
                    name="Tachyons"
                    description="A hackathon project made to help illiterate people study financial policies"
                    variant={item}
                    img={"/assets/tachyons.webp"}
                    url={"https://YashKandalkar.github.io/tachyons"}
                />
                
            </motion.div>
        </div>
    )
}

export default Projects;