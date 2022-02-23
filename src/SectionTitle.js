import React from 'react'

const SectionTitle = (props) => {
   const {number,name} = props;

  return (
    <div className="container-two">
      <h3><span>0{number}.</span> {name} </h3>
      <svg className="titleRect" viewBox="0 0 250 1" width="250" height="1">
         <rect width="250" height="1" className="rect" />
      </svg>
   </div>
  )
}

export default SectionTitle