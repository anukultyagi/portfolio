import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from '@/components/Button';

const ContactForm = () => {
    const [senderMessage, setSenderMessage] = useState('');
    const [senderEmail, setSenderEmail] = useState('');
    const [error, setError] = useState(false);
    const [successful, setSuccessful] = useState(false);

    const form = useRef();

    const sendEmailFormHandler = (e) => {
        e.preventDefault();

        // Validate input fields
        if (senderEmail === '' || senderMessage === '') {
            setError(true);
            return;
        } else {
            setError(false);
        }

        // Reset form fields after submission
        setSenderMessage('');
        setSenderEmail('');

        // Send email using EmailJS
        emailjs
            .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
                publicKey: process.env.NEXT_PUBLIC_USER_KEY,
            })
            .then(
                () => {
                    setSuccessful(true);
                    setTimeout(() => setSuccessful(false), 3000); // Hide success message after 3 seconds
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <form
            className="flex flex-col gap-5 p-3 sm:p-5 w-full sm:w-4/5"
            onSubmit={sendEmailFormHandler}
            ref={form}
        >
            <div className='flex flex-col gap-2'>
                <span className='text-lg text-zinc-400'>Dear Anukul Tyagi,</span>
                <textarea
                    className="bg-transparent border-b border-b-white outline-none resize-none"
                    rows="3"
                    name="user_message"
                    value={senderMessage}
                    onChange={(e) => setSenderMessage(e.target.value)}
                    placeholder="Your message..."
                />
            </div>
            <div className='flex flex-col gap-3'>
                <span className='text-lg text-zinc-400'>My mail :</span>
                <input
                    className="bg-transparent border-b border-b-white outline-none"
                    type="email"
                    name="user_email"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="Your email..."
                    required
                />
            </div>
            {error && <p className='text-red-400 text-sm'>*Please fill both values</p>}
            {successful && <p className='text-green-400 text-sm'>Sent successfully ✔</p>}
            <Button type='submit'>Send</Button>
        </form>
    );
};

export default ContactForm;
