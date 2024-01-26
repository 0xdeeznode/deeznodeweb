import React from 'react'
import { LanguagesFrameworks, ToolsPlatforms, Databases, TopSkills } from '@/constants'
import SkillCard from '@/components/sub/SkillCard'

const Skills = () => {
  return (
    <section className='flex flex-col items-center px-5 sm:px-10 gap-12'>
      <h1 className='text-white text-6xl font-bold'>Top Skills</h1>
      <div className='grid grid-cols-3 sm:flex gap-5 z-20'>
        {
          TopSkills.map(({skill_name, image}, index) => (
            <SkillCard key={index} name={skill_name} src={image} />
          ))
        }
      </div>
    </section>
  )
}

export default Skills