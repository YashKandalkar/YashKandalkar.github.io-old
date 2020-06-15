import React from 'react';
import './ContactMe.css';
import Icon from '../Icon/Icon'

import { 
    faInstagram,
    faGithub,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons';

import { 
    faEnvelope
} from '@fortawesome/free-regular-svg-icons';

import { 
    motion
} from 'framer-motion';

const ContactMe = () => {
    return (
        <div className="container">
            <div className="heading">
                <div className="main">
                    Let's chat!
                </div>
                <div className="sub-heading"> 
                    Contact me on any of my social media
                </div>
            </div>
            <motion.div 
                id="content"
            >
                <Icon 
                    icon={faInstagram} 
                    useclass='instagram' 
                    usehref='https://www.instagram.com/yash__kandalkar/'
                />
                <Icon 
                    icon={faGithub} 
                    useclass='github'
                    usehref='https://github.com/YashKandalkar/'
                />
                <Icon 
                    icon={faLinkedin} 
                    useclass='linkedin'
                    usehref='https://www.linkedin.com/in/yash-kandalkar-b5890b1aa/'
                />
                <Icon 
                    icon={faEnvelope} 
                    useclass='gmail'
                    usehref='mailto:yashsk.yk@gmail.com'
                />

            </motion.div>
        </div>
    );
}

export default ContactMe;