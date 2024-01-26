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
      {/* Menu Bar */}
      <div className='flex flex-col gap-5 justify-center items-center sm:gap-0 sm:flex-row sm:justify-between px-4'>
        <div className='flex flex-start gap-6 text-white font-bold'>
          <Magnetic>
            <button className='Welcome-box cursor-pointer p-6'>
              All
            </button>
          </Magnetic>
          <Magnetic>
            <button className='Welcome-box cursor-pointer p-6'>
              Design
            </button>
          </Magnetic>
          <Magnetic>
            <button className='Welcome-box cursor-pointer p-6'>
              Development
            </button>
          </Magnetic>
        </div>
        <div className='flex gap-6 text-white'>
          <Magnetic>
            <button className='Welcome-box cursor-pointer p-6'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
              </svg>
            </button>
          </Magnetic>
          <Magnetic>
            <button className='Welcome-box cursor-pointer p-6'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
              </svg>
            </button>
          </Magnetic>
        </div>
        {/* Indicators */}
      </div>
      <div className='flex justify-between px-40'>
        <p className='text-white text-xl sm:text-base'>Client</p>
        <p className='text-white hidden sm:flex'>Services</p>
      </div>
    </div>
  )
}

export default LibHeading