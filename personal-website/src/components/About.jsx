import React from 'react'
import { Element } from "react-scroll";


const About = () => {
  return (
    <Element name="about" className="min-h-screen">
        <h1 className="font-bold mb-5 text-4xl p-0">An Overview.</h1>
        <p className="font-medium mb-10 max-w-4xl text-xl">
            Hey! I'm Anita Leung, a third-year Computer Science student at the University of British Columbia. Currently, I am a web developer at UBC AgroBot, an engineering design team that leverages AI and machine learning to advance agricultural technology. I'm incredibly passionate about design and development, and I love using my skills to solve challenging problems and bring creative ideas to life. Some of my interests include AI, front and backend development, and information security! 
        </p>
        <p className="font-medium max-w-4xl text-xl">
            When I'm not hunched over my laptop, you can find me outdoors hiking or dragonboating, capturing moments on my camera, or trying new restaurants! Feel free to read some more about my interests outside of software development by clicking here. I love to chat so please don't hesitate to reach out if you'd like to connect or share ideas!
        
        </p>
    </Element>
  )
}

export default About