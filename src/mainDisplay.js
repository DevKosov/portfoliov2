import React from 'react'
import Eye from "./svg/eye";

const info = {
   name:"Altin",
   surname:"Rrahmani",
   shortDesc:"I am an interactive Front-End Student.",
   description:"Je suis étudiant en informatique à l'IUT 2 Université de Grenoble. Je fais des sites web et de multiples mini projets interactifs en Front-end et Back-end."
}

const MainDisplay = () => {
  return (
    <section id="main">
		<h3>Hi, my name is</h3>
		<h1>{info.name + " " + info.surname}</h1>
		<h2>{info.shortDesc}</h2>
		<p>{info.description}</p>
       <Eye/>
	</section>
  )
}

export default MainDisplay