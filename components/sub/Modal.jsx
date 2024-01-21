
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { scaleAnimation } from '@/utils/motion'
import Image from 'next/image';
import React from 'react'

const Modal = ({modal, projects}) => {

    const { active, index } = modal;

    const modalContainer = useRef(null);
    const cursor = useRef(null);
    const cursorLabel = useRef(null);
  
    useEffect( () => {
      
        //Move Container
      let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {duration: 0.8, ease: "power3"})
      let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {duration: 0.8, ease: "power3"})
      
      //Move cursor
      let xMoveCursor = gsap.quickTo(cursor.current, "left", {duration: 0.5, ease: "power3"})
      let yMoveCursor = gsap.quickTo(cursor.current, "top", {duration: 0.5, ease: "power3"})
  
      //Move cursor label
      let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {duration: 0.45, ease: "power3"})
      let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {duration: 0.45, ease: "power3"})
  
      window.addEventListener('mousemove', (e) => {
        const { pageX, pageY } = e;
        xMoveContainer(pageX)
        yMoveContainer(pageY)
        xMoveCursor(pageX)
        yMoveCursor(pageY)
        xMoveCursorLabel(pageX)
        yMoveCursorLabel(pageY)
      })
    }, [])

  return (
    <>
        <motion.div ref={modalContainer} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} className='h-80 w-96 absolute bg-white overflow-hidden pointer-events-none flex items-center justify-center'>
            <div style={{top: index * -100 + "%"}} className='h-full w-full absolute transition-top duration-500 ease-in-out'>
                {
                    projects.map( (project, index) => {
                    const { src, color } = project
                    return <div className='h-full w-full flex items-center justify-center' style={{backgroundColor: color}} key={`modal_${index}`}>
                        <Image 
                        src={`/${src}`}
                        width={300}
                        height={0}
                        alt="image"
                        className='h-auto'
                        />
                    </div>
                })
                }
            </div>
        </motion.div>
        <motion.div ref={cursor} className='flex items-center justify-center text-sm pointer-events-none w-20 h-20 rounded-[50%] bg-[#455CE9] text-white absolute z-2' variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}></motion.div>
        <motion.div ref={cursorLabel} className='bg-transparent flex items-center justify-center text-sm pointer-events-none w-20 h-20 rounded-[50%] bg-[#455CE9] text-white absolute z-2' variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>View</motion.div>
    </>
  )
}

export default Modal