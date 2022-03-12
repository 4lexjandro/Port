import React from 'react';
import {Email} from '../miniComponents/Email'
import Fader from '../miniComponents/Fader'
import  SocialMedia  from '../miniComponents/SocialMedia';




export const Contact = () => {
  return (
    <> 
        <div className="large"> 
        <Fader text=" Leave a message! "></Fader>
        </div>
        <div className="Contactpage">
        <Email/>
        <br/>
         
      <SocialMedia />
      </div>
      </>
      
  )
}


