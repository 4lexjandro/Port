import React, { Component } from 'react'
import Resume from './gallery/Resume.pdf'




export default class About extends Component{
  render() {
      return (
          <div className="aboutpage">
              <h1>About</h1>
              <p> Hello, my name is Alexjandro Mendoza and I'm currently a student pursuing a bachelors degree in Computer Science. 
              <br/>I have a passion for investing and would like to take my earnings from
               my career job to spend on rental properties. 
               <br/>I wish I had a mentor in the real estate field but 
              it seems like I will have to make mistakes on my own and network to meet people.
              <br/>I live in Yonkers and it sucks! However, I am grateful for having a roof over my head. 
              <br/> I'm into video games, food, technology, and I loved speeding on the highway 
               but these tickets are not fun so my speeding days are over. 
               <br/>Check out my highlights for some videos games in the highlights section!
               <br/>If you would like to see my resume, download it below 😁
                  <p>-AM</p>

                  <a href={Resume} download="Resume.pdf"> My Resume </a>

          
                   
              </p>
          </div>
      )
  }
}
