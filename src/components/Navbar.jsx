"use client"
import React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'



const Navbar = () => {
    const pathname = usePathname()
    const brandName = '<anukul />'

    return (
        <div className={`${pathname === '/' ? 'cursor-none' : ''}`}>
            <nav className={`container max-w-6xl mx-auto p-3 flex items-center justify-between `}>
                <div className="hover:text-white">
                    <Link
                        className={`text-xl text-zinc-400 hover:text-white ${pathname === '/' ? 'cursor-none' : ''}`}
                        href="/"
                        previewlistener="true"
                    >
                        {brandName}
                    </Link>
                </div>
                <ul className="flex gap-2 md:gap-5">
                    <li className="text-zinc-400 hover:text-white">
                        <Link
                            className={`flex items-center hover:text-white pl-1 ${pathname === '/about' ? 'text-white' : 'text-zinc-400'} ${pathname === '/' ? 'cursor-none' : ''}`}
                            href="/about"
                            previewlistener="true"
                        >
                            about
                        </Link>
                    </li>
                    <li className="text-zinc-400 hover:text-white">
                        <Link
                            className={`flex items-center pl-1 hover:text-white ${pathname === '/work' ? 'text-white' : 'text-zinc-400'} ${pathname === '/' ? 'cursor-none' : ''}`}
                            href="/work"
                            previewlistener="true"
                        >
                            work
                        </Link>
                    </li>
                    <li className="text-zinc-400 hover:text-white">
                        <Link
                            className={`flex items-center pl-1 hover:text-white ${pathname === '/contact' ? 'text-white' : 'text-zinc-400'} ${pathname === '/' ? 'cursor-none' : ''}`}
                            href="/contact"
                            previewlistener="true"
                        >
                            contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
