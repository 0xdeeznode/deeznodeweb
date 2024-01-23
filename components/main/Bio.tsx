'use client';

import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight } from '@/utils/motion'
import Image from 'next/image';
 
const Bio = () => {
  return (
    <section>
        <motion.div
        className='flex flex-col sm:flex-row items-center justify-center px-20 mt-40 w-full z-[20]'
        initial="hidden"
        animate="visible"
        >        
            <motion.div variants={slideInFromLeft(0.5)} className="overflow-hidden rounded-3xl border-2 border-slate-700 z-[20]">
                <Image
                src='/pfpAlan.jpg'
                alt='Alan profile picture'
                width={360}
                height={479}
                />
            </motion.div>
            <div className='h-full w-auto flex flex-col gap-2 justify-center m-auto'>
                <motion.div
                variants={slideInFromRight(0.5)}
                className='flex flex-col gap-6 mt-6 md:text-7xl text-5xl font-bold text-white max-w-[600px] w-auto h-auto'
                >
                    <span>
                    Helping brands thrive in the
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> digital world </span>
                    </span>
                </motion.div>
                <motion.p
                variants={slideInFromRight(0.8)}
                className='md:text-lg text-base text-gray-400 my-1 max-w-[600px]'
                >
                    Hey, I&apos;m Alan! I grew up in Colombia and love all things creative. From the misty forests to the vibrant city streets, my surroundings have always fueled my passion for design and coding. 
                </motion.p>
                <motion.p
                variants={slideInFromRight(0.8)}
                className='md:text-lg text-base text-gray-400 my-1 max-w-[600px]'
                >
                    I partner with companies worldwide to deliver tailor-made solutions that redefine excellence. Each project is a journey to exceed expectations and set new benchmarks in quality.
                </motion.p>
            </div>
        </motion.div>               
    </section>
  )
}

export default Bio