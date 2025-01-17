import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import AboutSection from '../Components/AboutSection'
import Footer from '../Components/Footer'
import SkillSection from '../Components/SkillSection'
import DiagonalTextSection from '../Components/DiagonalTextSection'
import Graphcomponent from '../Components/GraphComponent'
import "@fontsource/raleway"; // Defaults to weight 400
import "@fontsource/raleway/500.css"; // Optional: other weights
import Border from '../Components/Border'
import Projects from '../Components/Projects'

const Main = () => {
  return (
    <div className='bg-gray-600'>
      <Navbar/>
      <HeroSection/>
      <SkillSection/>
      <AboutSection/>
      <DiagonalTextSection/>
      <Graphcomponent/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default Main
