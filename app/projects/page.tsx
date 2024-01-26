import Library from '@/components/main/Library'
import LibHeading from '@/components/sub/LibHeading'
import React from 'react'

const page = () => {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col mt-28'>
        <LibHeading />
        <Library />
      </div>
    </main>
  )
}

export default page