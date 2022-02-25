import React from 'react'
import Img from '../../image'

const Experiment = (props) => {
   const { name, desc, image, link, id, languages } = props

   return (
      <div className='expContent'>
         <Img
            id={`key${id}`}
            width={300}
            height={225}
            img_url={image}
            href={link}
         />
         <h3>{name}</h3>
         <h4>
            {languages.map((lang, i, r) => {
               if (i + 1 === r.length) {
                  return <span key={i}>{lang}</span>
               } else {
                  return <span key={i}>{lang}, </span>
               }
            })}
         </h4>
         <h4>{desc}</h4>
      </div>
   )
}

export default Experiment
