import React from "react";
import "./About.css";
import me from "../img/eileen.png";

const About = () => {
    return (
        <div className="description">
            <img src={me}></img>
            <p>Hi, it's so nice to meet you! 
                    I'm a senior studying Cognitive Science and Human Computer Interaction at Carnegie Mellon University. 
                    I'm interested in creating experiences that leave happy memories with people who interact with my work. 
                    I am currently looking for full-time jobs. 
                    <br></br><br></br> 
                    In my free time I like to draw, play some tunes on the guitar, watch food videos, and ballroom dance.
                    <br></br><br></br> 
                    Browse some of my work and feel free to reach out!</p>
        </div>
    );
  };
  
export default About;