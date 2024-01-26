'use client'

import React, { useState, useEffect } from 'react';
import Magnetic from '@/components/sub/Magnetic'

const Footer = () => {
  
  // State to store the current local time
  const [localTime, setLocalTime] = useState('');

  // function to update the local time
  const updateLocalTime = () => {
    // Get the current time in the desired timezone (GMT-5)
    const currentTime = new Date().toLocaleTimeString('en-US', {
      timeZone: 'America/New_York', // Adjust the timezone as needed
      hour12: false, // Use 24-hour format
      hour: '2-digit', // Display hours in two digits
      minute: '2-digit', // Display minutes in two digits
    });

    // Update the content of the element with the local time
    setLocalTime(currentTime);
  }

  // Use useEffect to update the local time on component amount and every second
  useEffect(() => {
    
    updateLocalTime(); // Initial update

    // Update the local time every minute
    const intervalId = setInterval(updateLocalTime, 60000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);

  },[]);


  return (
    <footer className='relative flex flex-col h-full w-full sm:px-20 px-10 z-20 bg-slate-800/10 backdrop-blur-sm mt-28 rounded-3xl'>
      <div className='py-14'>
        {/* Header */}
        <div className='flex flex-col gap-2 justify-start text-start'>
          <h3 className='text-white font-bold text-5xl'>Let&apos;s Work Together</h3>
          <div className='border w-1/2 '/>
        </div>
        {/* Content Circle */}
        <div className='relative flex flex-col items-center my-16 justify-end'>
          <div className='absolute top-1/2 left-[65%] transform -translate-x-1/2 -translate-y-1/2 w-[70%] border-t-2' />
          <Magnetic>
            <div className='w-[150px] h-[145px] bg-gradient-to-br from-neutral-300 to-neutral-500 rounded-full border-slate-500 z-10 flex justify-center items-center shadow-md'>
              <p className='text-white font-bold hover:scale-125 hover:font-extrabold transition-all duration-300 cursor-pointer'>Get in Touch</p>
            </div>
          </Magnetic>
        </div>
        {/* SubContent */}
        <div className='flex flex-col sm:flex-row items-center my-5 gap-5 sm:gap-10 w-full'>
          <Magnetic>
            <p className='Welcome-box text-slate-300 p-6'>nalanarud@gmail.com</p>
          </Magnetic>
          <Magnetic>
            <p className='Welcome-box text-slate-300 p-6'>+57 319 432-3144</p>
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
              <li>{localTime} GMT-5</li>
            </Magnetic>
          </ul>
        </ul>
        <ul className='flex flex-col gap-2 justify-start'>
          <li className='text-slate-400 '>Socials</li>
            <Magnetic>
              <a className='flex flex-row gap-5 cursor-pointer' target="_blank" rel="noopener noreferrer" href="https://twitter.com/0xdeeznode">
                <li>X</li>
                <li>X</li>
                <li>X</li>
              </a>
            </Magnetic>
        </ul>
      </div>
    </footer>
  )
}

export default Footer