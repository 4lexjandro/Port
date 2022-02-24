import React from 'react'
import Resume from './gallery/Resume.pdf'







const About = () => {
      return (
          <div className="aboutpage">

            
        
             I'm a web developer that enjoys being part of a team and welcomes the challeges life places in my crosshairs.
             Creating websites fascinates me and I plan to be doing this for the longhaul

            <br />
            <br />
            In my freetime I enjoy playing videos games. I'm a big fan of food and cooking.
            A cooking website with a few of my recipes coming soon <br />
            <br />If you would like to see my resume, download it below and please feel free to network with me via social media.
            <br />
            <br />

            <a href={Resume} download="Resume.pdf"> My Resume </a>

          
                   
          </div>
      )
  };

export default About;