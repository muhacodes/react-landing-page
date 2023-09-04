import React from 'react'
import Footer from '../components/Footer'
import Consultation from '../components/Consultation'
import Team from '../components/Team'
import Subscribe from '../components/Subscribe'
import Header from '../components/Header'
import Features from '../components/Features'
import Services from '../components/Services'
import Project from '../components/Project'

function Home() {
  return (
    <>
    <Header />
    <Features />
    <Services/>
    <Project />
    <Consultation />
    <Team />
    <Subscribe />
    <Footer />
    </>
  )
}

export default Home