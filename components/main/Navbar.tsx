'use client';

import Link from "next/link";
import Image from "next/image";
import { Socials } from "@/constants";
import React, { useState } from "react";
import { gsap } from 'gsap';
import Magnetic from '@/components/sub/Magnetic'

const Navbar = () => {
  const [navBar, setNavBar] = useState(false);
  const handleNav = () => {
    setNavBar(!navBar)
      if (navBar) {
        gsap.to('.menu',{y:-210, duration:1.5, display:'hidden', ease:"bounce"})
      } else {
        gsap.to('.menu',{y:65, duration:1.5, display:'flex', ease:"bounce"})
      }
  }

  return (
    <nav className="w-full h-12 fixed top-0 shadow-lg shadow-[#2A0E61]/50 backdrop-blur-md z-50 p-8">
      <div className="w-full h-full flex flex-row items-center justify-between gap-2">
        <Magnetic>
          <Link
            href="/"
            className="sm:w-52 w-auto flex flex-row items-center"
          >
              <Image
                src="/NavLogo.svg"
                alt="logo"
                width={50}
                height={50}
                className="cursor-pointer"
              />
              <p className="font-bold hidden md:flex text-gray-300">
                0xDeezNode
              </p>
          </Link>
        </Magnetic>

        <Magnetic>
          <div className="w-72 h-20 hidden md:flex flex-row items-center justify-between">
            <div className="text-md flex items-center justify-between gap-2 w-full h-auto border border-[#7042f861] bg-[#0300145e] px-5 py-2 rounded-full text-gray-100">
              <Link href="/about" className="cursor-pointer">
                About
              </Link>
              <Link href="/projects" className="cursor-pointer">
                Work
              </Link>
              <div className="cursor-default">
                Contact
              </div>
            </div>
          </div>
        </Magnetic>

        <div className="flex flex-row md:gap-5 gap-2 w-36">
          {Socials.map((social, index) => (
            <a className="mx-auto" key={index} href={social.url} target="_blank" rel="noopener noreferrer">
              <Magnetic>
                <Image
                  src={social.src}
                  alt={social.name}
                  key={social.name}
                  width={30}
                  height={30}
                />
              </Magnetic>
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
      </div>
      {/* MOBILE MENU */}
      <div className={`menu hidden absolute top-0 left-0 right-0 justify-center items-center px-4 w-full h-52 shadow-lg shadow-[#2A0E61]/50 bg-[#030014e8] backdrop-blur-md z-50 text-center rounded-3xl`}>
        <ul className="w-full">
          <li className='p-3 text-3xl text-white hover:font-bold ease-in duration-300'>
            <Link href='/about' onClick={handleNav}>About</Link>
          </li>
          <li className='p-3 text-3xl text-white hover:font-bold ease-in duration-300'>
            <Link href='/projects' onClick={handleNav}>Work</Link>
          </li>
          <li className='p-3 text-3xl text-white hover:font-bold ease-in duration-300'>
            <Link href='/contact' onClick={handleNav}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;