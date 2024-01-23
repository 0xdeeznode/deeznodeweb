'use client'
import React from 'react'
import Magnetic from '@/components/sub/Magnetic'

const Footer = () => {
  return (
    <footer className='relative flex flex-col h-full w-full px-10 z-20 bg-slate-800/10 backdrop-blur-sm'>
      <div className='my-14'>
        <div className='flex flex-col gap-2 justify-center items-center'>
          <h3 className='text-white font-bold text-5xl mx-auto'>Let's Work Together</h3>
          <div className='border w-1/2 '/>
        </div>
        <div className='flex flex-row my-5'>
          <div className='border h-[1px] w-96' />
          <div className='w-40 h-36 bg-neutral-400 rounded-full border-slate-500 '>Get in Touch</div>
        </div>
        <div className='flex flex-row items-center my-5 gap-5'>
          <Magnetic>
            <p className='Welcome-box text-slate-300 p-14'>nalanarud@gmail.com</p>
          </Magnetic>
          <Magnetic>
            <p className='Welcome-box text-slate-300 p-14'>+57 319 432-3144</p>
          </Magnetic>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer