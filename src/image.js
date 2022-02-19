import React from 'react'

const Img = (props) => {
   const {id,img_url,width,height} = props;

   const radius = Math.sqrt(Math.pow(width,2) + Math.pow(height,2));

   const mouseOver = (image) =>{
      image.target.parentElement.firstChild.firstChild.firstChild.setAttribute("r",`0`);
   }
   const mouseOut = (image) =>{
      image.target.parentElement.firstChild.firstChild.firstChild.setAttribute("r",`${radius}`);
   }

	return (
      <div>
         <div className="filterImg">
            <div className="imgg" style={{ backgroundImage: `url(${img_url})`, width: width, height: height }} ></div>
            <svg className="theImage" data-id={"shape"+id} width={width} height={height} viewBox={"0 "+ "0 "+ width + " " + height} onMouseOver={mouseOver.bind(this)} onMouseOut={mouseOut.bind(this)}>
               <defs>
                  <clipPath id={"shape" + id}>
                     <circle className="circleClip" cy={height / 2} cx={width / 2} r={radius} />
                  </clipPath>
               </defs>
               <rect className="bottom" width={width} height={height} />
               <rect className="filler" width={width} height={height} clipPath={"url(#shape"+ id +")"}/>
            </svg>
         </div>
      </div>
	)
}


export default Img