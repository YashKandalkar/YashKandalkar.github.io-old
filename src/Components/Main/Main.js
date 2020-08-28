import React from 'react';
import './Main.css'
import { motion } from 'framer-motion';

const Main = () => {
    const variants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        },
        hidden: {
            opacity: 1,
            y: '200px'
        }
    }
    return (
        <div id="main">
            <motion.div 
                id="main-content"
            >
                <motion.div 
                    className="top"
                    initial={"hidden"}
                    animate={"visible"}
                    variants={variants}
                >
                    <motion.div className="greetings">
                        About ME
                    </motion.div>
                </motion.div>
                <motion.div 
                    className="about-me"
                    initial={"hidden"}
                    animate={"visible"}
                    variants={variants}
                >
                    <div style={{textAlign: 'right'}}>Hey, hello there!</div>
                    <div>
                        I am Yash Kandalkar. I started coding when I was
                        16. I started out with Python since it is very easy to learn 
                        for a beginner and also teaches many programming principles.
                        I started solving simple problems in Python and learning about
                        different data structures and algorithms. I was learning on <a 
                        href="https://www.sololearn.com" target='_blank' 
                        rel='noopener noreferrer'>SoloLearn</a> and doing their 
                        challenges, it was a lot of fun! With this new found knowledge, 
                        I took part in CoDecode - A coding competition organised by IIT 
                        Bombay, one of the best institutes in India.
                        I was sure I would atleast qualify in the qualification round.
                        When I entered the examination room, most of the participants
                        were from 3rd, 4th year. Neverthless, I gave the exam,
                        and waited for the results. I did not qualify. I wasn't too sad 
                        though. I thought this was my first competition, and I had a lot
                        to learn. During this time, I was in 12th. The decisive year for
                        Indian students. I was already in an integrated class for JEE 
                        preparation. I still think I shouldn't have joined that class.
                        But going to that class for 2 years made me realize that colleges
                        really doesn't matter all that much. Everything depends on your
                        skills. But in our society, everybody - especially parents, think
                        that if their child is in IIT, he will definetely get a good job,
                        and his future will definetely flourish. While that is obviously 
                        true for some children, it is definetely not true for everyone.
                        Even if you are not in the best college, you can still get the 
                        best job if you have the right skills. So I started giving less
                        time to studying and more time towards learning new things about 
                        programming. I even started learning about IoT after seeing 
                        a friend of mine making cool things. I just started learning
                        anything that looked interesting to me. So after some time I 
                        started learning Web Development. I made many projects (which 
                        are still not completed because of my lazy a$$). I recently
                        completed <a href="https://www.udemy.com/share/101WcUBUUScFZTQ3o=/"
                        target='_blank' rel='noopener noreferrer'>this</a> course
                        from Udemy, which had a lot of knowledge about the new 
                        technologies which companies use. I could only make this website
                        because of that course. <br />
                        Apart from spending most of my time learning new things, I also 
                        watch some anime or play video games when I have time. I had a 
                        long "PUBG Phase" too :P <br />
                        So, that's all about me. One last thing I'd like to tell students
                        of 11th or 12th or even FY is that don't wait for your college 
                        / school to teach you something. Learn things on your own but don't 
                        completely drop out of schools or colleges since that is important too.
                        The internet already has everything you need. Search the thing you're 
                        interested in and start learning. <br />
                        I always copy-paste this quote whenever I have a chance-
                        <span className="quote">Don’t let schooling interfere with your 
                        education.<br /> - Mark Twain</span>

                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Main;