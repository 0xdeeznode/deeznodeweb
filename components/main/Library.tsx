'use client';

import { projects } from '@/constants/index'
import { useState } from 'react';
import Project from '@/components/sub/Project'
import Modal from '@/components/sub/Modal'
import React from 'react'

const Library = ({heading=false}:any) => {
  const [modal, setModal] = useState({active: false, index: 0})

  return (
    <section className={`flex flex-col h-full items-center justify-center px-10 gap-14 ${heading?'my-24':'my-10'} z-20`}>
      {heading && <h1 className='text-white text-6xl font-bold'>{heading}</h1>}
      <div className='flex flex-col items-center justify-center w-full'>
        {
          projects.map( (project, index) => {
            return <Project index={index} title={project.title} setModal={setModal} key={index} />
          })
        }
      </div>
      <Modal modal={modal} projects={projects}/>
    </section>
  )
}

export default Library