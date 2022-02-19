import React from 'react'

const info = {
   name:"Altin",
   surname:"Rrahmani",
   shortDesc:"I'm a Computer Science Student.",
   description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptate ipsum dolorem at quidem, nullalabore. Voluptatem recusandae voluptas perferendis cum totam ipsa earum in perspiciatis? Delectus quidem quo maxime?"
}

const MainDisplay = () => {
  return (
    <section id="main">
		<h3>Hi, my name is</h3>
		<h1>{info.name + " " + info.surname}</h1>
		<h2>{info.shortDesc}</h2>
		<p>{info.description}</p>
	</section>
  )
}

export default MainDisplay