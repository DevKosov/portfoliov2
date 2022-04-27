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
import Footer from "./Footer";

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

ReactDOM.render(
   <React.StrictMode>
      <Footer/>
   </React.StrictMode>,
   document.getElementById('footer')
)
gsap.timeline().to('#top', {
      duration: 1,
      attr: {
         points: '0 862.2 431.1 0 561.8 0 623.6 123.4 254.6 862.2 0 862.2',
      },
      ease: Power1.easeOut,
   }).to('#upper', {
      duration: 0.75,
      attr: {
         points: '503.7 377.5 554 478.2 800.8 478.2 627.1 130.4 503.7 377.5',
      },
      ease: Power1.easeOut,
   }).to('#bottom', {
      duration: 0.75,
      attr: {
         points: '746.1 862.2 647.4 664.8 895.1 664.8 992.8 862.2 746.1 862.22',
      },
      ease: Power1.easeOut,
   })

gsap.timeline()
   .fromTo('nav', {opacity: 0,top:-50}, {opacity: 1, top:0,duration: 0.3,ease: Power1.easeOut})
   .fromTo('#main>h3',{opacity: 0,left:-50}, {opacity: 1, left:0,duration: 0.3,ease: Power1.easeOut})
   .fromTo('#main>h1',{opacity: 0,left:-50}, {opacity: 1, left:0,duration: 0.3,ease: Power1.easeOut})
   .fromTo('#main>h2',{opacity: 0,left:-50}, {opacity: 1, left:0,duration: 0.3,ease: Power1.easeOut})
   .fromTo('#main>p',{opacity: 0,left:-50}, {opacity: 1, left:0,duration: 0.3,ease: Power1.easeOut})
   .fromTo('#socials',{opacity: 0,left:-50}, {opacity: 1, left:'3em',duration: 0.3,ease: Power1.easeOut})
   .fromTo('#email',{opacity: 0,right:-50}, {opacity: 1, right:'3em',duration: 0.3,ease: Power1.easeOut})
