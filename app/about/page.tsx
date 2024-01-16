import Bio from '@/components/main/Bio'
import Education from '@/components/main/Education'
import Skills from '@/components/main/Skills'
import React from 'react'

const Home = () => {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col'>
        <Bio />
        <Skills />
        <Education />
      </div>
    </main>
  )
}

export default Home
