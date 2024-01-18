'use client';

import React from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Techlist = () => {
    gsap.registerPlugin(ScrollTrigger);

  return (
    <section className='w-full px-8 my-24'>
        <div className='text-6xl font-bold text-white'>
            <span>
                Tech I Use
            </span>
        </div>
    </section>
  )
}

export default Techlist