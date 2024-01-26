'use client';

import Image from 'next/image'
import React from 'react'
import Magnetic from '@/components/sub/Magnetic'

const SkillCard = ({name, src}) => {
  return (
    <div className='Welcome-box w-28 h-28 rounded-xl p-3'>
      <Magnetic>
        <div className='flex flex-col justify-center items-center'>
            <Image
            width={65}
            height={65}
            src={`/${src}`}
            alt={`${name} icon`}
            />
            <p className='text-white font-bold'>
                {name}
            </p>
        </div>
      </Magnetic>
    </div>
  )
}

export default SkillCard