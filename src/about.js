import React from 'react'
import Img from './image.js'
import SectionTitle from './SectionTitle.js'

const About = () => {
  return (
    <section id="about">
		<SectionTitle name="About" number="1"/>

		<div className="container-two">
			<div>
				<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem illum similique inventore illo omnis
					officiis rerum ipsam repellendus iste quas deleniti minus quisquam natus excepturi voluptas autem amet,
					ad praes4entium.</p>
				<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem illum similique inventore illo omnis
					officiis rerum ipsam repellendus iste quas deleniti minus quisquam natus excepturi voluptas autem amet,
					ad praesentium.</p>
				<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem illum similique inventore illo omnis
					officiis rerum
					ipsam repellendus iste quas deleniti minus quisquam natus excepturi voluptas autem amet, ad praesentium.
				</p>
				<div className="container-two">
					<ul>
						<li>HTML</li>
						<li>CSS</li>
						<li>JavaScript</li>
						<li>React</li>
					</ul>
					<ul>
						<li>PHP</li>
						<li>C++</li>
						<li>Java</li>
						<li>SQL</li>
					</ul>
				</div>
			</div>
         <Img id="profile" width={350} height={350} img_url="images/me.jpg"/>
		</div>
	</section>
  )
}

export default About 