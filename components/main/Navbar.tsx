'use client';

import Link from "next/link";
import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [navBar, setNavBar] = useState(false);
  
  const handleNav = () => {
    setNavBar(!navBar)
  }

  return (
    <nav className="w-full h-14 fixed top-0 shadow-lg shadow-[#2A0E61]/50 backdrop-blur-md z-50 px-8 py-8">
      <div className="w-full h-full flex flex-row items-center justify-between gap-2">
        <Link
          href="/"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer"
          />
          <span className="font-bold hidden md:block text-gray-300">
            0xDeezNode 
          </span>
        </Link>

        <div className="w-60 h-28 hidden md:flex flex-row items-center justify-between">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-5 py-3 rounded-full text-gray-200">
            <Link href="/about" className="cursor-pointer">
              About Me
            </Link>
            <Link href="/projects" className="cursor-pointer">
              Projects
            </Link>
          </div>
        </div>

        <div className="flex flex-row md:gap-5 gap-2 w-40">
          {Socials.map((social, index) => (
            <a className="mx-auto" key={index} href={social.url} target="_blank" rel="noopener noreferrer">
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={35}
                height={35}
              />
            </a>
          ))}
        </div>
        {/* MOBILE BUTTON */}
        <div onClick={handleNav} className="sm:hidden text-white cursor-pointer z-[20]">
          {navBar ? 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
            : 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
            </svg>          
          }
        </div>
        {/* MOBILE MENU */}
        <div className={navBar ? 'sm:hidden absolute top-0 right-0 flex justify-center items-center w-60 h-80 bg-black text-center ease-in duration-300' : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'}>
          <ul>
            <li className='p-4 text-4xl text-white'>
              <Link href='/about' onClick={handleNav}>About Me</Link>
            </li>
            <li className='p-4 text-4xl text-white'>
              <Link href='/projects' onClick={handleNav}>Projects</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;