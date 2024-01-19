'use client';

import React from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { techList } from '@/constants';


function Techlist() {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <section className='w-full sm:my-8 my-20'>
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
              {Array.from({ length: 15 }, (_, index) => (
                <React.Fragment key={index}>
                  <span key={index} className='sm:text-7xl text-6xl font-extrabold uppercase tracking-tighter'
                    style={{
                      color: index === 7 && tech_color ? tech_color : 'inherit'
                    }}
                  >
                    {tech_name}
                  </span>
                  <span className='text-3xl'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                  </span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Techlist