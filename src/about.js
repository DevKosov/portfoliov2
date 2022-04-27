import React from 'react'
import Img from './image.js'
import SectionTitle from './SectionTitle.js'

const About = () => {
   return (
      <section id='about'>
         <SectionTitle name='About' number='1' />

         <div className='container-two'>
            <div>
               <p>
                  Bonjour ! Je m'appelle Altin et j'aime créer des objets qui vivent sur Internet.
                  Mon intérêt pour le développement Web a commencé en 2017 lorsque j'ai commencé à apprendre les bases
                  du HTML et du CSS en autonomie. Plus j'en apprenais, plus j'étais curieux de savoir comment les
                  applications Web complexes étaient faites.
               </p>
               <p>
                  Aujourd'hui, je suis étudiant en informatique à <b>l'Université de Grenoble Alpes (UGA).</b> Actuellement à la
                  recherche d'une <b>alternance Informatique</b> pour pouvoir continuer mes études en Licence
                  Professionnelle Métiers d'informatique Application Web (LP MI AW).
               </p>
               <p>
                  Je suis motivé et enthousiaste à l'idée d'apprendre de nouvelles technologies Web. Récemment,
                  j'ai commencé à apprendre <b>React</b> en autonomie donc j'ai décidé de faire ce portfolio avec.
               </p>
               <p>
                  Voici une liste des technologies avec lesquelles j'ai travaillé récemment :
               </p>
               <div className='container-two'>
                  <ul>
                     <li>JavaScript</li>
                     <li>React</li>
                     <li>SCSS</li>
                     <li>PHP</li>
                  </ul>
                  <ul>
                     <li>HTML</li>
                     <li>JAVA</li>
                     <li>C++</li>
                     <li>SQL</li>
                  </ul>
               </div>
            </div>
            <aside>
               <Img
                  id='profile'
                  width={350}
                  height={350}
                  img_url='images/me.jpg'
               />
            </aside>
         </div>
      </section>
   )
}

export default About
