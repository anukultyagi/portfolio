"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { brandName } from "@/data";
import ThemeSwitcher from '@/components/ThemeSwitcher';

const Navbar = () => {
    const pathname = usePathname();

    return (
        <div className={`${pathname === '/' ? 'cursor-none' : ''}`}>
            <nav className={`container max-w-6xl mx-auto p-3 flex items-center justify-between`}>
                <div className="hover:dark:text-white hover:text-zinc-800">
                    <Link
                        className={`text-xl dark:text-zinc-400 text-zinc-700 hover:dark:text-white hover:text-zinc-900 ${pathname === '/' ? 'cursor-none' : ''}`}
                        href="/"
                    >
                        {brandName}
                    </Link>
                </div>
                <ul className="flex gap-2 md:gap-5 items-center">
                    <li className="dark:text-zinc-400 text-zinc-700 hover:dark:text-white hover:text-zinc-900">
                        <Link
                            className={`flex items-center pl-1 ${pathname === '/about' ? 'dark:text-white text-zinc-900' : 'dark:text-zinc-400 hover:dark:text-white text-zinc-700'} ${pathname === '/' ? 'cursor-none' : ''}`}
                            href="/about"
                        >
                            about
                        </Link>
                    </li>
                    <li className="dark:text-zinc-400 text-zinc-700 hover:dark:text-white hover:text-zinc-900">
                        <Link
                            className={`flex items-center pl-1 ${pathname === '/work' ? 'dark:text-white text-zinc-900' : 'dark:text-zinc-400 hover:dark:text-white text-zinc-700'} ${pathname === '/' ? 'cursor-none' : ''}`}
                            href="/work"
                        >
                            work
                        </Link>
                    </li>
                    <li className="dark:text-zinc-400 text-zinc-700 hover:dark:text-white hover:text-zinc-900">
                        <Link
                            className={`flex items-center pl-1 ${pathname === '/contact' ? 'dark:text-white text-zinc-900' : 'dark:text-zinc-400 hover:dark:text-white text-zinc-700'} ${pathname === '/' ? 'cursor-none' : ''}`}
                            href="/contact"
                        >
                            contact
                        </Link>
                    </li>
                    <li>
                        <ThemeSwitcher
                            className={`flex items-center pl-1 ${pathname === '/contact' ? 'dark:text-white text-zinc-900' : 'dark:text-zinc-400  hover:dark:text-white text-zinc-700'} ${pathname === '/' ? 'cursor-none' : ''}`}
                        />
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
