import React from 'react'

const Home = () => {
  return (
    <div className='text-white flex flex-col justify-center items-center my-60 gap-5 px-5 sm:px-10 z-50'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-6xl'>404 - Page Not Found</h1>
        <p className='text-wrap'>Sorry, the page you are looking for does not exist. Or Most Probably under work</p>
      </div>
      <a className='cursor-pointer' href="/">
        <div className='p-5 border rounded-2xl bg-transparent hover:font-bold z-50'>Go back to the home page</div>
      </a>
    </div>
  )
}

export default Home