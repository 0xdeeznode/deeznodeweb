'use client'
import React from 'react'
import Magnetic from '@/components/sub/Magnetic'

const Footer = () => {
  return (
    <footer className='relative flex flex-col h-full w-full sm:px-20 px-10 z-20 bg-slate-800/10 backdrop-blur-sm mt-28 rounded-3xl'>
      <div className='py-14'>
        {/* Header */}
        <div className='flex flex-col gap-2 justify-start text-start'>
          <h3 className='text-white font-bold text-5xl'>Let's Work Together</h3>
          <div className='border w-1/2 '/>
        </div>
        {/* Content */}
        <div className='relative flex flex-col items-center mt-16 justify-end'>
          <div className='absolute top-1/2 left-[65%] transform -translate-x-1/2 -translate-y-1/2 w-[70%] border-t-2' />
          <Magnetic>
            <div className='w-[150px] h-[145px] bg-gradient-to-br from-neutral-300 to-neutral-500 rounded-full border-slate-500 z-10 flex justify-center items-center shadow-md'>
              <p className='text-white font-bold hover:scale-125 hover:font-extrabold transition-all duration-300 cursor-pointer'>Get in Touch</p>
            </div>
          </Magnetic>
        </div>
        {/* SubContent */}
        <div className='flex flex-row items-center my-5 gap-10 w-full'>
          <Magnetic>
            <p className='Welcome-box text-slate-300 p-14'>nalanarud@gmail.com</p>
          </Magnetic>
          <Magnetic>
            <p className='Welcome-box text-slate-300 p-14'>+57 319 432-3144</p>
          </Magnetic>
        </div>
      </div>
      {/* Last Bottom Content */}
      <div className='text-white w-full flex flex-row justify-between mb-8'>
        <ul className='flex flex-row gap-7'>
          <ul className='flex flex-col justify-start gap-2'>
            <li className='text-slate-400'>Version</li>
            <Magnetic>
              <li>2023 &copy; edition</li>
            </Magnetic>
          </ul>
          <ul className='flex flex-col justify-start gap-2'>
            <li className='text-slate-400'>Local Time</li>
            <Magnetic>
              <li>GMT-5</li>
            </Magnetic>
          </ul>
        </ul>
        <ul className='flex flex-col gap-2 justify-start'>
          <li className='text-slate-400 '>Socials</li>
          <ul className='flex flex-row gap-5'>
            <li>X</li>
            <li>X</li>
            <li>X</li>
          </ul>
        </ul>
      </div>
    </footer>
  )
}

export default Footer