import { useState } from 'react';


import ProjectSection from './Sections/ProjectSection.jsx';
import SkillSection from './Sections/SkillSection.jsx';
import HeroSection from './Sections/HeroSection.jsx';
import AboutMe from './Sections/AboutMe.jsx';
import ContactMe from './Sections/ContactMe.jsx';


export default function Content() {

  return (
    <>
      <div className='h-16 md:h-20 w-full'></div>

      <HeroSection />

      <AboutMe />

      <SkillSection />

      <ProjectSection />

      <ContactMe />

    </>
  )
}