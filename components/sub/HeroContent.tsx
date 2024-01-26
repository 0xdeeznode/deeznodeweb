'use client';

import React, { useEffect, useRef } from 'react'
import gsap from "gsap";


const HeroContent = () => {
    const component = useRef(null);

    useEffect(() => {
      let ctx = gsap.context(() => {
        // create as many GSAP animations and/or ScrollTriggers here as you want...
        gsap
          .timeline()
          .fromTo(
            ".heading-animation",
            { x: -100, opacity: 0, rotate: -10 },
            {
              x:0,
              rotate:0,
              opacity: 1,
  
              ease: "rough",
              duration: 0.6,
              stagger: { each: 0.2 },
            },
          )
          .fromTo(
            ".subHead-animation",
            {
              y: 20,
              opacity: 0,
              scale: 1.5,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              scale: 1,
              ease: "elastic.out(1,0.3)",
            },
          );
      }, component);
      return () => ctx.revert(); // cleanup!
    }, []);


  return (
    <div ref={component} className='flex items-center justify-center md:mt-32 z-20'>
      <div className='h-full w-full flex flex-col gap-3 justify-center m-auto'>
          <div aria-label='Transforming ideas into elegant web solutions'
          className='heading-animation opacity-0 sm:text-6xl text-5xl gap-2 font-bold text-white max-w-[600px] w-auto h-auto'
          >
              <span className='heading-animation'>Transforming</span>
              <span className='heading-animation text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> Ideas </span>
              <span className='heading-animation'>Into</span>
              <span className='heading-animation text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> Elegant </span>
              <span className='heading-animation'>Web Solutions</span>
          </div>
          <p className='subHead-animation Welcome-box opacity-0 text-lg text-gray-400 my-5 max-w-lg h-auto p-6 text-ellipsis'>
              I&apos;m a Web Developer with experience in Websites, Webapps, and Mobile. Check out my projects and skills.
          </p>
      </div>
    </div>
  )
}

export default HeroContent