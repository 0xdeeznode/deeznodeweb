import Bio from '@/components/main/Bio'
import Skills from '@/components/main/Skills'
import Services from '@/components/main/Services'
import React from 'react'
import Footer from '@/components/main/Footer'

const Home = () => {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col'>
        <Bio />
        <Services />
        <Skills />
        <Footer />
      </div>
    </main>
  )
}

export default Home
