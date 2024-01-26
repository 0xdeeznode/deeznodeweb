import React from 'react'
import { LanguagesFrameworks, ToolsPlatforms, Databases } from '@/constants'
import SkillCard from '@/components/sub/SkillCard'

const Skills = () => {
  return (
    <section className='flex flex-col items-center px-10'>
      <h1 className='text-white text-6xl font-bold'>Top Skills</h1>
      <SkillCard name='Javascript' src='javascript.svg'/>
        
    </section>
  )
}

export default Skills