'use client';
import React from 'react'

const Project = ({index, title, refe, setModal}) => {

    return (
        <a href={refe} target="_blank" rel="noopener noreferrer" className='group flex flex-col sm:flex-row w-full text-white items-center px-24'>
            <div onMouseEnter={() => {setModal({active: true, index})}} onMouseLeave={() => {setModal({active: false, index})}} className='group flex flex-col sm:flex-row w-full text-white justify-between items-center py-12 px-24 border-t border-b border-gray-200 cursor-pointer transition-all duration-200 hover:opacity-50'>
                <h2 className='text-4xl m-0 transform translate-x-0 group-hover:translate-x-[-10px] transition-all duration-200'>{title}</h2>
                <p className='hidden sm:flex transform translate-x-0 group-hover:translate-x-[10px] transition-all duration-200'>Design & Development</p>
            </div>
        </a>
    )
}

export default Project