import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faGithub,
    faLinkedin,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

  export default function SocialMedia() {
    return (
      <div class="social-container">
        
        <a href="https://www.youtube.com/channel/UCoEzp7t1xdHp7ItsaD30N8w"
          className=" social">
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <br/><br/>
        <a href="https://github.com/4lexmendez"
          className="social">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a><br/>
        <br/>
        <a href="https://twitter.com/4lexmendez" className="social">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a><br/>
        <br/>
        <a href="https://www.linkedin.com/in/alexjandro-mendoza-17b28a19b/" className="social">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a><br/>
        <br/>

        <a href="https://www.instagram.com/4lexmendez/"
          className="social">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a><br/>
        <br/>
      </div>
    );
  }