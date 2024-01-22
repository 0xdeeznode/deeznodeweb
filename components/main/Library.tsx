'use client';

import { projects } from '@/constants/index'
import { useState } from 'react';
import DeTitle from '@/components/sub/DeTitle'
import Project from '@/components/sub/Project'
import Modal from '@/components/sub/Modal'
import React from 'react'

const Library = () => {
  const [modal, setModal] = useState({active: false, index: 0})

  return (
    <section className='flex flex-col h-full items-center justify-center px-10 gap-14 my-36 z-20'>
      <DeTitle text='LIBRARY' />   
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