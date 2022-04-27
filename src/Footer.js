import React, {Component} from 'react';
import FeatherIcon from "feather-icons-react";
import SvgReact from "./svg/reactSVG";

class Footer extends Component {
   render() {
      return (
         <div>
            <div style={{textAlign:'center'}}>
               <h4 style={{display:"flex",justifyContent:'center',alignContent:'center'}}>Coded with <div>&nbsp;</div>
                  <FeatherIcon icon={"heart"} style={{fill:'red',height:'30px',}} /><div>&nbsp;</div> In <SvgReact className='react'/></h4>
               <div style={{display:"flex",justifyContent:'center',alignContent:'center'}}>
                  ©<h4>2022 - Copyright Altin Rrahmani</h4>
               </div>
            </div>
         </div>
      );
   }
}

export default Footer;