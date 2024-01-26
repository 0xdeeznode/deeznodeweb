import Image from 'next/image'
import React from 'react'

const SkillCard = ({name, src}) => {
  return (
    <div className='Welcome-box w-[110px] h-[110px] rounded-xl'>
        <div className='flex flex-col justify-center items-center'>
            <p className='text-white font-bold'>
                {name}
            </p>
            <Image
            width={65}
            height={65}
            src={`/${src}`}
            />
        </div>
    </div>
  )
}

export default SkillCard