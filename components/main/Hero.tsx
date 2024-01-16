import React from 'react'
import HeroContent from '../sub/HeroContent'
import Shapes from '../sub/Shapes'

const Hero = () => {
  return (
    <section className='relative flex flex-col md:flex-row h-full w-full'>
      <HeroContent />
      <Shapes />
    </section>
  )
}

export default Hero