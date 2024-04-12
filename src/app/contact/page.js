"use client"
import ContactForm from '@/components/ContactForm';
import CursorEyeBall from '@/components/CursorEyeBall';
import React from 'react';


const Contact = () => {


    return (
        <div>
            <div className='container max-w-6xl mx-auto p-3'>
                <div className='my-5 flex flex-col gap-4'>
                    <h1 className='text-5xl'>Get in Touch!!</h1>
                    <p className='px-5 text-zinc-400 text-end'>Reach out at "anukultyagi321@gmail.com"</p>
                </div>
                <div className='flex my-10'>
                    <div className='basis-1/2 p-5'>
                        <CursorEyeBall />
                    </div>
                    <div className='basis-1/2 p-4 bg-zinc-800 rounded-xl'>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact