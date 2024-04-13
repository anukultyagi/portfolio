"use client"
import ContactForm from '@/components/ContactForm';
import CursorEyeBall from '@/components/CursorEyeBall';
import React from 'react';


const Contact = () => {


    return (
        <div>
            <div className='container max-w-6xl mx-auto p-3'>
                <div className='my-5 flex flex-col gap-6 sm:gap-4 '>
                    <h1 className='sm:text-5xl text-3xl'>Get in Touch!!</h1>
                    <p className='sm:px-5 text-zinc-400 sm:text-end leading-7'>Reach out at <span className='text-white'>"anukultyagi321@gmail.com"</span></p>
                </div>
                <div className='flex md:flex-row flex-col my-10'>
                    <div className='sm:basis-1/2 p-5 hidden md:block'>
                        <CursorEyeBall />
                    </div>
                    <div className='sm:basis-1/2 p-2 sm:p-4  bg-zinc-800 rounded-xl'>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact