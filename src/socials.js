import React from 'react';
import Linkedin from './svg/linkedin.js'

const LeftSocials = () => {
  return (
    <div id="socials">
      <ul>
         <a href="#main">
            <li>
            <Linkedin className="socials" />
            </li>
         </a>
         <a href="#main">
            <li>
            <Linkedin className="socials" />
            </li>
         </a>
         <a href="#main">
            <li>
            <Linkedin className="socials" />
            </li>
         </a>
         <a href="#main">
            <li>
            <Linkedin className="socials" />
            </li>
         </a>
      </ul>
      <svg viewBox="0 0 1 100" width="1" height="100">
         <rect width="1" height="100" className="rect" />
      </svg>
    </div>
  )
}

const Email = () =>{
   return(
      <div id="email">
        <ul>
          <a href="mailTo:Altin_Rrahmani@live.com">
            <li>Altin_Rrahmani@live.com</li>
          </a>
        </ul>
        <svg viewBox="0 0 1 100" width="1" height="100">
          <rect width="1" height="100" className="rect" />
        </svg>
      </div>
   )
}

const Socials = () =>{
   return(
      <div>
         <LeftSocials/>
         <Email/>
      </div>
   )
}

export default Socials