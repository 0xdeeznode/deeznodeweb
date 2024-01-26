import React from 'react'
import ServoCards from '@/components/sub/ServoCards'
import { servoInfo } from '@/constants/index'

const Services = () => {
  return (
    <section className='flex flex-col h-full w-full px-5 sm:px-20 my-24 gap-8'>
      <div>
        <h1 className='text-white text-5xl'>
          I can help you with<span>...</span>
        </h1>
      </div>
      <div className='flex flex-col sm:flex-row gap-16'>
        {
          servoInfo.map(({title, text}, index) => (
            <ServoCards key={index} title={title} info={text} index={index+1}/>
          ))
        }
      </div>
    </section>
  )
}

export default Services