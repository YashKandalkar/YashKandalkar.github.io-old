import React from 'react';
import './Projects.css';
import ProjectItem from '../ProjectItem/ProjectItem';
import { 
    motion
} from 'framer-motion';

// IMAGES
import tictactoe from '../../assets/tictactoe.png';
import canary from '../../assets/canary.png';
import chatitdude from '../../assets/chatitdude.png';
import tachyons from '../../assets/tachyons.png';

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
      visible: { opacity: 1, x: 0 },
      hidden: { opacity: 0, x: 100 },
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
                    name="Canary"
                    description="A prototype site for streaming music"
                    variant={item}
                    img={canary}
                />

                <ProjectItem 
                    name="Tic Tac Toe"
                    description="A multiplayer TicTacToe game using Firebase"
                    variant={item}
                    img={tictactoe}
                />
                
                <ProjectItem 
                    name="Chat It Dude"
                    description="What's better than talking to someone who won't judge you?"
                    variant={item}
                    img={chatitdude}
                />

                <ProjectItem 
                    name="Tachyons"
                    description="A hackathone project made to help illiterate people study financial policies"
                    variant={item}
                    img={tachyons}
                />
                
            </motion.div>
        </div>
    )
}

export default Projects;