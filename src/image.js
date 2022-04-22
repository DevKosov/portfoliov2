import React from 'react'

const Img = (props) => {
   const { id, img_url, width, height, href } = props;

   const radius = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));

   const mouseOver = (image) => {
      image.target.parentElement.firstChild.firstChild.firstChild.setAttribute("r", `0`);
   }
   const mouseOut = (image) => {
      image.target.parentElement.firstChild.firstChild.firstChild.setAttribute("r", `${radius}`);
   }

   const ConditionalWrapper = ({ condition, wrapper, children }) => condition ? wrapper(children) : children;


   const viewBox = `0 0 ${width} ${height}`;
   return (
      <div>
         <ConditionalWrapper
            condition={href}
            wrapper={children => <a target="blank" href={href}>{children}</a>}
         >
            <div className="filterImg" >

               <div className="imgg" style={{ backgroundImage: `url(${img_url})`, width: width, height: height }}></div>
               <svg className="theImage" data-id={"shape" + id} width={width} height={height} viewBox={viewBox} onMouseOver={mouseOver.bind(this)} onMouseOut={mouseOut.bind(this)}>
                  <defs>
                     <clipPath id={"shape" + id}>
                        <circle className="circleClip" cy={height / 2} cx={width / 2} r={radius} />
                     </clipPath>
                  </defs>
                  <rect className="bottom" width={width} height={height} />
                  <rect className="filler" width={width} height={height} clipPath={"url(#shape" + id + ")"} />
               </svg>
               <div className="bgSquare" style={{ width: width - 20, height: height - 20 }}></div>
            </div>
         </ConditionalWrapper>
      </div>

   )
}


export default Img