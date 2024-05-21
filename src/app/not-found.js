import React from 'react';
import Link from 'next/link';
import Button from '@/components/Button';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[calc(100vh-55px)] text-white">
            <h1 className="text-9xl font-bold mb-4">404</h1>
            <p className="text-2xl mb-8 text-zinc-400">Oops! The page you're looking for doesn't exist.</p>
            <Link href="/" >
                <Button>Go back to Home</Button>

            </Link>

        </div>
    );
};

export default NotFound;
