import Footer from '@/components/main/Footer'
import Library from '@/components/main/Library'
import LibHeading from '@/components/sub/LibHeading'
import React from 'react'

const Home = () => {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col mt-28'>
        <LibHeading />
        <Library />
        <Footer />
      </div>
    </main>
  )
}

export default Home