import React from 'react'
import ReactDOM from 'react-dom'
import { gsap, Power1 } from 'gsap'
import Navbar from './navbar.js'
import Socials from './socials.js'
import MainDisplay from './mainDisplay.js'
import About from './about.js'
import Experience from './components/experience/experience.js'
import Experiments from './components/experiments/experiments.js'
import Contact from "./contact";

ReactDOM.render(
   <React.StrictMode>
      <Navbar />
   </React.StrictMode>,
   document.getElementById('NavbarZone')
)

ReactDOM.render(
   <React.StrictMode>
      <Socials />
   </React.StrictMode>,
   document.getElementById('SocialZone')
)

ReactDOM.render(
   <React.StrictMode>
      <MainDisplay />
      <About />
      <Experience />
      <Experiments />
      <Contact/>
   </React.StrictMode>,
   document.getElementById('DisplayZone')
)


gsap
   .timeline()
   .to('#top', {
      duration: 1,
      attr: {
         points: '0 862.2 431.1 0 561.8 0 623.6 123.4 254.6 862.2 0 862.2',
      },
      ease: Power1.easeOut,
   })
   .to('#upper', {
      duration: 0.75,
      attr: {
         points: '503.7 377.5 554 478.2 800.8 478.2 627.1 130.4 503.7 377.5',
      },
      ease: Power1.easeOut,
   })
   .to('#bottom', {
      duration: 0.75,
      attr: {
         points: '746.1 862.2 647.4 664.8 895.1 664.8 992.8 862.2 746.1 862.22',
      },
      ease: Power1.easeOut,
   })
