import React from 'react'
import Hero from "./components/Hero"
import Services from "./components/Services"
import Destinations from "./components/Destinations"
import About from "./components/About"

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Destinations />
      <About />
    </>
  )
}

export default HomePage