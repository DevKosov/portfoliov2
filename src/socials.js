import React from 'react';
import FeatherIcon from 'feather-icons-react';

const LeftSocials = () => {

   return (
    <div id="socials">
      <ul>
         <a href="https://www.linkedin.com/in/altin-rrahmani-3a547a228" target={'_blank'} rel="noreferrer">
            <li>
               <FeatherIcon icon={'linkedin'} className={'socials'}/>
            </li>
         </a>
         <a href="https://github.com/DevKosov" target={'_blank'} rel="noreferrer">
            <li>
               <FeatherIcon icon={'github'} className={'socials'}/>
            </li>
         </a>
         <a href="https://codepen.io/DevKosov" target={'_blank'} rel="noreferrer">
            <li>
               <FeatherIcon icon={'codepen'} className={'socials'}/>
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