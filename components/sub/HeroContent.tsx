'use client';
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const HeroContent = () => {
  return (
    <section>
        <motion.div
        initial='hidden'
        animate='visible'
        className='flex flex-row items-center justify-center px-10 mt-32 w-auto z-[20]'
        >
            <div className='h-full w-full flex flex-col gap-4 justify-center m-auto'>
                <motion.div 
                variants={slideInFromTop}
                className="Welcome-box py-[18px] px-[18px] border-[#7042f88b] opacity-[0.9]"
                >
                    <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
                    <h1 className='Welcome-text text-[16px]'>
                        Webdev & Design Portfolio
                    </h1>
                </motion.div>
                <motion.div
                variants={slideInFromLeft(0.5)}
                className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'
                >
                    <span>
                        Providing
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> the best </span>
                        poject experience
                    </span>
                </motion.div>
                <motion.p
                variants={slideInFromLeft(0.8)}
                className='text-lg text-gray-400 my-5 max-w-[600px]'
                >
                    I&apos;m a Web Developer with experience in Websites, Webapps, and Mobile. Check out my projects and skills.
                </motion.p>
                <motion.a
                variants={slideInFromLeft(1)}
                className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'
                >
                    Learn More!
                </motion.a>
            </div>
        </motion.div>
    </section>
  )
}

export default HeroContent