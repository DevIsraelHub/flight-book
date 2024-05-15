import React from 'react'
import Hero from "./components/Hero"
import Services from "./components/Services"
import Destinations from "./components/Destinations"
import About from "./components/About"
import LearnMore from "./components/LearnMore"
import Faq from "./components/Faq"

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Destinations />
      <About />
      <LearnMore />
      <Faq />
    </>
  )
}

export default HomePage