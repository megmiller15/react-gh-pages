import React from 'react';
import './skills.scss'


export default function Skills () {
  return (
    <div className = "skills" id="skills-section">
      <div className = "skills-top">
        <div className = "intro skills skills-box">
          <h2 className = "skills-hed">About me  </h2>
          <p className = "skills-text"> I graduated from La Salle University with a Bachelor's Degree in Information Technology.</p> 
          <p className = "skills-text"> For the past 2 years I've been applying my web design & development skills to maintain & build search engine & user friendly websites. </p>
          <p className="skills-text"> Front End Web Development is where I've been trying to hone my skills by teaching myself new frameworks & design practices like ReactJS.</p>
        </div>
        <div className = "skills skills-box">
          <div className = "cog-icon">
            <h2 className = "skills-hed"> Skills </h2>
          </div>
          <div className = "two-skills-lists">
          <div className = "left-skills-list">
            <ul className = "skills-list">
              <li>HTML5/CSS3/SCSS</li>
              <li>JavaScript/JQuery </li>
              <li>SQL </li>
               <li>React </li>
               <li> Node </li>
                <li> Git/Github </li>
                <li> Fetch/asynchronous API calls </li>
                <li>Bootstrap</li>
                <li>PHP</li>
               

            </ul>
          </div>

          <div className = "right-skills-list">
            <ul className = "skills-list">
              
              <li>Test-driven development </li>
              <li>Adobe Photoshop </li>
              <li>Adobe After Effects </li>
              <li>WordPress</li>
              <li>Shopify</li>
              <li>Magento</li>
              <li>Google Analytics</li>
              <li>Google Adwords</li>
              <li>Google Tag Manager</li>
              

            </ul>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}