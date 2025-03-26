import React from 'react'
import About from '../Shared/Components/About/About'
import HelmetComponent from './Helmet/HelmetProvider'

function Abouts() {
  return (
    <>
      <HelmetComponent title="About - International Journal of Quantum Computing and AI" />
      <About />
    </>
  )
}

export default Abouts