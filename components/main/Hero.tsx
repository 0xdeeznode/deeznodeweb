import React from 'react'
import HeroContent from '../sub/HeroContent'
import Shapes from '../sub/Shapes'

const Hero = () => {
  return (
    <div className='relative flex flex-col md:flex-row h-full w-full'>
        <HeroContent />
        <Shapes />
    </div>
  )
}

export default Hero