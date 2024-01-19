'use client';

import React from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { techList } from '@/constants';
import { div } from 'three/examples/jsm/nodes/Nodes.js';


const Techlist = () => {
    gsap.registerPlugin(ScrollTrigger);

  return (
    <section className='w-full my-8'>
      <div className='flex flex-col gap-6 text-white z-40'>
        <h4 className='text-6xl font-bold px-8'>
          Tech I Use
        </h4>
        <div>
          {techList.map(({ tech_color, tech_name }, index) => (
            <div
            key={index}
            className='tech-row flex items-center justify-center gap-4 text-slate-700'
            >
              {Array.from({length:15}, (_, index) => (
                <span key={index} className='text-7xl font-extrabold uppercase tracking-tighter'
                style={{
                  color: index === 7 && tech_color ? tech_color :'inherit'
                }}
                >
                  {tech_name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Techlist