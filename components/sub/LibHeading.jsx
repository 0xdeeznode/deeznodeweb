'use client'
import React from 'react'
import Magnetic from '@/components/sub/Magnetic'

const LibHeading = () => {

  return (
    <div className='w-full h-fit flex flex-col justify-start gap-14 px-5 sm:px-10 z-20'>
      <h1 className='text-white text-4xl sm:text-6xl font-bold flex flex-col justify-start'>
        <span>Creating next level</span>
        <span>digital products</span>
      </h1>
      <div className='flex justify-between px-40'>
        <p className='text-white text-xl sm:text-base'>Client</p>
        <p className='text-white hidden sm:flex'>Services</p>
      </div>
    </div>
  )
}

export default LibHeading