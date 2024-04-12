import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import Button from '@/components/Button'
const ContactForm = () => {

    const [senderMessage, setSenderMessage] = useState('')
    const [senderEmail, setSenderEmail] = useState('')
    const [error, setError] = useState(false)




    const form = useRef();
    const sendEmailFormHandler = (e) => {
        e.preventDefault();

        if (senderEmail === '' || senderMessage === '') {
            setError(true)
            return;
        } else {
            setSenderMessage('')
            setSenderEmail('')
            setError(false)
        }


        emailjs
            .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
                publicKey: process.env.NEXT_PUBLIC_USER_KEY,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    }

    const messageHandler = (e) => {
        setSenderMessage(e.target.value)
    }
    const emailHandler = (e) => {
        setSenderEmail(e.target.value)
    }
    return (
        <form className=" flex flex-col gap-5 p-5 w-full sm:w-4/5 " onSubmit={sendEmailFormHandler} ref={form}>
            <div className='flex flex-col gap-2'>
                <span className='text-lg text-zinc-400'>Dear Anukul Tyagi,</span>
                <textarea
                    className="bg-transparent border-b border-b-white outline-none resize-none"
                    rows="3"
                    name="user_message"
                    value={senderMessage}
                    onChange={messageHandler}>

                </textarea>
            </div>
            <div className='flex flex-col gap-3'>
                <span className='text-lg text-zinc-400'>My mail :</span>
                <input
                    className="bg-transparent border-b border-b-white outline-none" type="email"
                    name="user_email"
                    value={senderEmail}
                    onChange={emailHandler}
                />
            </div>
            {error ? <p className='text-red-400 text-sm'>*Please fill both values</p> : null}
            <Button className="" type='submit'>Send</Button>
        </form>
    )
}

export default ContactForm