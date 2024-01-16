'use client';

import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight } from '@/utils/motion'
import Image from 'next/image';

const Bio = () => {
  return (
    <section>
        <motion.div
        initial='hidden'
        animate='visible'
        className='flex md:flex-row flex-col items-center justify-center px-10 mt-28 w-auto z-[20] mb-12'
        >
            <motion.div variants={slideInFromLeft(0.5)} className="overflow-hidden rounded-3xl border-2 border-slate-700 z-[20]">
                <Image
                className='md:w-auto md:h-auto w-[180px] h-[240px]'
                src='/pfpAlan.jpg'
                alt='Alan profile picture'
                width={360}
                height={479}
                />
            </motion.div>
            <div className='h-full w-auto flex flex-col gap-2 justify-center m-auto'>
                <motion.div
                variants={slideInFromRight(0.5)}
                className='flex flex-col gap-6 mt-6 md:text-8xl text-5xl font-bold text-white max-w-[600px] w-auto h-auto'
                >
                    <span>
                        About
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> Alan </span>
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
                    As a self-taught developer, I found my calling in blending artistic flair with technical skill. My journey has led me to specialize in front-end development, where I craft interactive experiences that are not just functional, but also visually stunning.
                    When I'm not coding, you'll find me exploring the web3 I am a crypto and NFTs enthusiast.
                </motion.p>
                <motion.p
                variants={slideInFromRight(0.8)}
                className='md:text-lg text-base text-gray-400 my-1 max-w-[600px]'
                >
                    Join me as I continue to push the boundaries of what's possible in my digital world!
                </motion.p>
                <motion.a
                variants={slideInFromRight(1)}
                className='py-2 my-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'
                >
                    Resume
                </motion.a>
            </div>
        </motion.div>
    </section>
  )
}

export default Bio