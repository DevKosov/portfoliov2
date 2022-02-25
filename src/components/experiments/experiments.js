import React from 'react'
import Experiment from './experiment'
import SectionTitle from '../../SectionTitle'

const list = [
   {
      key: 1,
      name: 'Menu SVG aléatoires',
      desc: "Animation de menu SVG avec calculs matriciels dans l'espace 2d.",
      image: 'images/1.png',
      languages: ['SVG', 'JS', 'GSAP', 'Maths'],
      link: 'https://codepen.io/DevKosov/pen/JjyMBbY',
   },
   {
      key: 2,
      name: 'Portfolio v2',
      desc: "Deuxieme portfolio que je n'ai pas fini.",
      image: 'images/2.png',
      languages: ['HTML5', 'SCSS', 'JS', 'JQuery'],
      link: 'https://codepen.io/DevKosov/pen/yxdYJz',
   },
   {
      key: 3,
      name: 'Menu créatif',
      desc: 'Un défi codepen hebdomadaire. Sujet menu.',
      image: 'images/3.png',
      languages: ['JQuery', 'SCSS', 'HTML5'],
      link: 'https://codepen.io/DevKosov/pen/abzjKxe',
   },
   {
      key: 4,
      name: 'Ensari Clock',
      desc: 'Une horloge en temps réel. ',
      image: 'images/4.png',
      languages: ['JS', 'SVG', 'Adobe Illustrator'],
      link: 'https://codepen.io/DevKosov/pen/KKwmmdZ',
   },
   {
      key: 7,
      name: 'Ping checker',
      desc: 'Evolution de la connexion internet tout au long de la semaine.',
      image: 'images/ping.png',
      languages: ['Python', 'MySQL', 'Grafana'],
      link: 'https://github.com/DevKosov/Ping_checker',
   },
   {
      key: 8,
      name: 'Kc-sound',
      desc: 'Mini projet. Objet 3D animation.',
      image: 'images/kc.png',
      languages: ['ThreeJS', 'JS', 'SCSS'],
      link: 'https://github.com/Kc-sound/Kc-sound.github.io',
   },
   {
      key: 5,
      name: 'Signature',
      desc: 'Animation de signature en JS.',
      image: 'images/5.png',
      languages: ['SVG', 'JS'],
      link: 'https://codepen.io/DevKosov/pen/dyPdNLB',
   },
   {
      key: 6,
      name: 'Plan Forum',
      desc: "Une 'carte' interactive en SVG",
      image: 'images/6.png',
      languages: ['SVG', 'JS', 'Adobe Illustrator'],
      link: 'https://codepen.io/DevKosov/pen/QoEeZE',
   },
   {
      key: 9,
      name: 'Deplacement du produit',
      desc: 'Page de deplacement du produit. Pour le cours de freecodecamp.',
      image: 'images/9.png',
      languages: ['HTML5', 'CSS', 'JS'],
      link: 'https://codepen.io/DevKosov/pen/GezWKx',
   },
]

const Experiments = () => {
   return (
      <section id='experiments'>
         <SectionTitle name='Experiments' number='3' />
         <div className='experimentItems'>
            {list.map((experiment) => (
               <Experiment
                  key={experiment.key}
                  id={experiment.key}
                  languages={experiment.languages}
                  name={experiment.name}
                  desc={experiment.desc}
                  image={experiment.image}
                  link={experiment.link}
               />
            ))}
         </div>
      </section>
   )
}

export default Experiments
