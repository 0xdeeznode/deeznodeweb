import Bio from '@/components/main/Bio'
import Education from '@/components/main/Education'
import React from 'react'

const Home = () => {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col'>
        <Bio />
      </div>
    </main>
  )
}

export default Home
