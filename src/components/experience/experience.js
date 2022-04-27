import React, { useState } from 'react'
import SectionTitle from '../../SectionTitle'
import Exp from './Exp'

const experiences = [
   {
      state: 'tab0',
      title: 'MVP',
      titleComp: "- Stage d'informatique - IUT2 - Université Grenoble Alpes",
      duration: '10 semaines',
      position: 'Developpeur Web',
      shortdescription:
         'MVP développe des applications spécifiques, mobiles, web, conformément aux attentes de ses clients.',
      duties: [
         `Creation de l'interaction-Homme-Machine d'un application mobile.`
      ],
      team: 0,
      languages: ['JS', 'CSS', 'HTML'],
      year: '2022 - Actuellement',
      github: '',
   },
   {
      state: 'tab1',
      title: 'Tech-A-Way',
      titleComp: "- Projet d'informatique - IUT2 - Université Grenoble Alpes",
      duration: '6 semaines',
      position: 'Developpeur Back-end',
      shortdescription:
         'Tech a Way est une start-up qui intervient sur le secteur du recrutement tech, en France et partout en Europe.',
      duties: [
         'Création et configuration du serveur VPS avec le Stack LAPP (Linux, Apache, PostgreSQL, PHP).',
         'Création des toutes les méthodes CRUD (Create, Read, Update, Delete) en PHP.',
         'Administrateur de la base de donnees, creation des tables, modification des tables.',
         'Sécurité du site web.',
         'Animation des contenus avec GSAP, JS et SVG.',
      ],
      team: 7,
      languages: ['PHP', 'PostgreSQL', 'JS', 'SVG', 'Gitlabs'],
      year: '2021',
      github: '',
   },
   {
      state: 'tab2',
      title: 'Genconf',
      titleComp: "- Projet d'informatique - IUT2 - Université Grenoble Alpes",
      duration: '2 semaines',
      position: 'Developpeur Java - Chef de Projet',
      shortdescription: 'Genconf est une platforme de gestion des conferences.',
      duties: [
         'Conception de la platforme avec Visual Paradigm.',
         "Création de l'Interface Homme Machine (IHM)."
      ],
      team: 4,
      languages: ['JAVA', 'JAVA Swing', 'Gitlabs'],
      year: '2020',
   },
   {
      state: 'tab3',
      title: 'CHAL',
      titleComp:
         '- Centre Hospitalier Alpes Léman - Stage - Lycée Paul Héroult',
      duration: '8 semaines',
      position: 'Technicien Informatique et Reseaux',
      shortdescription:
         'Le Centre Hospitalier Alpes Léman (CHAL) est un établissement public de santé, installé sur son nouveau site depuis février 2012. Historiquement, le CHAL est issu de la fusion des Centres Hospitaliers d’Annemasse et de Bonneville.',
      duties: [
         `Participer à l'Installation et configuration de switches sur le nouveau bâtiment du CHAL.`,
         "Maintenance du Système d'information.",
      ],
      languages: [],
      year: '2019',
   },
   {
      state: 'tab4',
      title: 'Forum des métiers',
      titleComp: "- Stage d'informatique - Lycée Paul Héroult",
      duration: '6 semaines',
      position: 'Developpeur Front-end',
      shortdescription:
         "Le forum des métiers de Saint Jean de Maurienne est un événement annuel qui s'organise par la Communauté de Communes Cœur de Maurienne Arvan, la Mission Locale Jeune Pays de Maurienne, et le Point Information Jeunesse de la 3CMA.",
      duties: [
         'Première expérience dans le développement web.',
         'Création en autonomie d\'une "Landing Page" de ce forum.',
         "Création d'une carte interactive en SVG et JS. (Morphing SVG).",
      ],
      languages: ['HTML5', 'SCSS', 'JS', 'SVG'],
      year: '2018',
   },
]

const Experience = () => {
   const [activeTab, setActiveTab] = useState('tab1')

   return (
      <section id='experience'>
         <SectionTitle name='Experience' number='2' />

         <div className='experience'>
            <aside>
               <ul>
                  {experiences.map((ex) => {
                     return (
                        <li
                           className={activeTab === ex.state ? 'activeTab' : ''}
                           onClick={() => setActiveTab(ex.state)}
                           key={ex.state}
                        >
                           {ex.title}
                        </li>
                     )
                  })}
               </ul>
            </aside>
            <div id='experienceContentZone'>
               {experiences.map((exp) => (
                  <Exp
                     cs={activeTab === exp.state ? 'activeTab' : 'tabContent'}
                     key={exp.state}
                     title={exp.title}
                     titleComp={exp.titleComp}
                     shortdescription={exp.shortdescription}
                     description={exp.description}
                     duties={exp.duties}
                     duration={exp.duration}
                     team={exp.team}
                     languages={exp.languages}
                     position={exp.position}
                     year={exp.year}
                  />
               ))}
            </div>
         </div>
      </section>
   )
}

export default Experience
