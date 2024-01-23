import React from 'react'

const ServoCards = ({ index, title, info}) => {
  return (
    <div className='flex flex-col w-[360px] gap-10'>
        <div className='flex flex-col gap-6'>
            <div className='text-slate-300'>0{index}</div>
            <div className='w-full border h-[1px] border-slate-300'/>
        </div>
        <div className='flex flex-col gap-11 text-white'>
            <h3 className='text-3xl'>{title}</h3>
            <p>{info}</p>
        </div>
    </div>
  )
}

export default ServoCards