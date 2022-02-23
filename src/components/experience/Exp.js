import React from 'react'

const Exp = (props) => {

   const { title, titleComp, shortdescription, year, position, duties, duration, team, languages, cs } = props;

   let i = 0;

   return (
      <div className={cs}>
         <h3>{title} {titleComp}</h3>
         <h4>{year}, {position} {(team) ? `- Team of : ${team}` : ""} - Duree : {duration}</h4>

         <h4>
            {languages.map((language, i, r) => {
               if (i + 1 === r.length) {
                  return (
                     <span key={++i}>{language} </span>
                  );

               } else {
                  return (
                     <span key={++i}>{language}, </span>
                  );
               }
            })}
         </h4>


         <p>{shortdescription}</p>
         <ul>
            {duties.map((duty) => (
               <li key={++i}>{duty}</li>
            ))}
         </ul>
      </div>
   )
}

export default Exp