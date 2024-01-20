import React from 'react'
import HeroContent from '../sub/HeroContent'
import Shapes from '../sub/Shapes'
import { styles } from '@/styles'

const Hero = () => {
  return (
    <section className={`${styles.sectionP}`}>
      <Shapes />
      <HeroContent />
    </section>
  )
}

export default Hero