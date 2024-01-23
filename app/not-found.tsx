'use client';
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div className='text-white flex flex-col justify-center items-center my-60 gap-5'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-6xl'>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist. Or Most Probably under work</p>
      </div>
      <Link className='cursor-pointer' href="/">
        <div className='p-5 border rounded-2xl bg-transparent hover:font-bold'>Go back to the home page</div>
      </Link>
    </div>
  )
}

export default Home