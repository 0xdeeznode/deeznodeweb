'use client'

import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';
import Magnetic from '@/components/sub/Magnetic'
import React from 'react'

const Contact = () => {

    const { register, handleSubmit } = useForm();

    function onSubmit(data) {
        sendEmail(data);
    }

  return (
    <section className='flex flex-col px-4 sm:px-52 gap-20 sm:gap-32 mt-28 z-20'>
        {/* Header */}
        <div className='flex flex-row justify-between items-center'>
            <h1 className='flex flex-col text-6xl text-white font-bold gap-1'>
                <span>Let&apos;s start a</span>
                <span>project together</span>
            </h1>
        </div>

        {/* FORM */}
        <div className='flex flex-col-reverse sm:flex-row gap-32'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-full sm:w-4/6' action="">
                <div className='flex flex-col h-auto border-t py-11 gap-7'>
                    <div className='flex gap-7'>
                        <p className='text-sm text-slate-400'>01</p>
                        <label htmlFor="name" className='text-white text-2xl'>What&apos;s your name?</label>
                    </div>
                    <input className='w-4/6 ml-9 text-xl text-white bg-transparent border-none outline-none p-3' id='name' name='name' type="text" placeholder='John Doe *' {...register('name', { required: true })}/>
                </div>

                <div className='flex flex-col h-auto border-t py-12 gap-7'>
                    <div className='text-white flex gap-7'>
                        <p className='text-sm text-slate-400'>02</p>
                        <label htmlFor="email" className='text-2xl'>What&apos;s your email?</label>
                    </div>
                    <input className='w-4/6 ml-9 text-xl text-white bg-transparent border-none outline-none p-3' id='email' name='email' type="email" placeholder='john@doe.com *' {...register('email', { required: true })}/>
                </div>

                <div className='flex flex-col h-auto border-t py-12 gap-7'>
                    <div className='text-white flex gap-7'>
                        <p className='text-sm text-slate-400'>03</p>
                        <label htmlFor="organization" className='text-2xl'>What&apos;s the name of your organization?</label>
                    </div>
                    <input className='w-4/6 ml-9 text-xl text-white bg-transparent border-none outline-none p-3' id='organization' name='organization' type="text" placeholder='John & Doe ®' {...register('organization', { required: false })}/>
                </div>

                <div className='flex flex-col h-auto border-t py-12 gap-7'>
                    <div className='text-white flex gap-7'>
                        <p className='text-sm text-slate-400'>04</p>
                        <label htmlFor="service" className='text-2xl'>What services are you looking for?</label>
                    </div>
                    <input className='w-4/6 ml-9 text-xl text-white bg-transparent border-none outline-none p-3' id='service' name='service' type="text" placeholder='Web Design, Web Development, Bots' {...register('service', { required: false })}/>
                </div>

                <div className='flex flex-col h-auto border-t border-b py-11 gap-7'>
                    <div className='text-white flex gap-7'>
                        <p className='text-sm text-slate-400'>05</p>
                        <label htmlFor="message" className='text-2xl'>Your message</label>
                    </div>
                    <textarea className='w-4/6 ml-9 text-xl text-white bg-transparent border-none outline-none p-3 resize-none' cols="30" rows="4" id='message' name='message' type="text" placeholder='Hello Alan, can you help me with... *' {...register('message', { required: true })}></textarea>
                </div>
                {/* Submit Button */}
                <div className='relative flex flex-col items-center justify-end py-12'>
                    <div className='absolute top-1/2 left-[65%] transform -translate-x-1/2 -translate-y-1/2 w-[70%] border-t-2' />
                    <Magnetic>
                        <button onClick={onSubmit} className='w-[150px] h-[145px] bg-gradient-to-br from-neutral-300 to-neutral-500 rounded-full border-slate-500 z-10 flex justify-center items-center shadow-md'>
                            <p className='text-white font-bold text-lg hover:scale-150 hover:font-extrabold transition-all duration-300 cursor-pointer'>Send</p>
                        </button>
                    </Magnetic>
                </div>
            </form>
            {/* Sibling Col */}
            <div className='flex flex-col gap-12'>
                <div className='flex flex-col gap-2'>
                    <p className='text-slate-400 text-xs'>CONTACT DETAILS</p>
                    <Magnetic>
                        <p className='text-white'>nalanarud@gmail.com</p>
                    </Magnetic>
                    <Magnetic>
                        <p className='text-white'>+57 319 432 3144</p>
                    </Magnetic>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-slate-400 text-xs'>BUSINESS DETAILS</p>
                    <p className='text-white'>Dev: 0xDeezWebsites</p>
                    <p className='text-white'>Location: UAE</p>
                </div>
                <div className='hidden sm:flex flex-col gap-2'>
                    <p className='text-slate-400 text-xs'>SOCIALS</p>
                    <Magnetic><a href='https://medium.com/@0xdeeznode' className='text-white'>Medium</a></Magnetic>
                    <Magnetic><a href='https://www.instagram.com/0xdeeznode/' className='text-white'>Instagram</a></Magnetic>
                    <Magnetic><a href='https://twitter.com/0xdeeznode' className='text-white'>Twitter</a></Magnetic>
                    <Magnetic><a href='https://www.linkedin.com/in/alangduran/' className='text-white'>LinkedIn</a></Magnetic>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact