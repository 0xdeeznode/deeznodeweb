'use client'

import { useState, useEffect } from 'react';
import Magnetic from '@/components/sub/Magnetic'

const SubFooter = () => {
  
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
      {/* Last Bottom Content */}
      <div className='text-white w-full flex flex-row justify-between py-4'>
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

export default SubFooter