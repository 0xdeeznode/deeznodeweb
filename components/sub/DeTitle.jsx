import React from 'react'
import Magnetic from '@/components/sub/Magnetic'

const DeTitle = ( {text} ) => {

  const characters = text.split('');

  return (
    <div className='flex '>
        {characters.map((char, index) => (
        <Magnetic><span className='text-5xl sm:text-7xl text-white font-bold' key={index}>{char}</span></Magnetic>
        ))}
    </div>
  )
}

export default DeTitle