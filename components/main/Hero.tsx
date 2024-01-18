import React from 'react'
import HeroContent from '../sub/HeroContent'
import Shapes from '../sub/Shapes'

const Hero = () => {
  return (
    <section className='flex flex-col md:flex-row h-full w-full px-8'>
      <Shapes />
      <HeroContent />
    </section>
  )
}

export default Hero