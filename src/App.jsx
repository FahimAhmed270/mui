import React from 'react'
import Companies from './Component/Companies'
import Details from './Component/Details'
import Footer from './Component/Footer'
import GetStarted from './Component/GetStarted'
import Guide from './Component/Guide'
import Hero from './Component/Hero'
import Properties from './Component/Properties'

const App = () => {
  return (
    <>
      <Hero/>
      <Companies/>
      <Guide/>
      <Properties/>
      <Details/>
      <GetStarted/>
      <Footer/>
    </>
  )
}

export default App
