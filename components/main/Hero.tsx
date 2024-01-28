import React from 'react'
import HeroContent from '../sub/HeroContent'
import Shapes from '../shapes/Shapes'

const Hero = () => {
  return (
    <section className='flex flex-col sm:flex-row h-full w-full px-10'>
      <Shapes />
      <HeroContent />
    </section>
  )
}

export default Hero