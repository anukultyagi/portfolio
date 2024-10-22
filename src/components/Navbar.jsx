"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { brandName } from "@/data";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const Navbar = () => {
    const pathname = usePathname();
    const [navOpen, setNavOpen] = useState(false); // State for mobile menu toggle

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    return (
        <div className={`${pathname === "/" ? "cursor-none" : ""}`}>
            <nav className="container max-w-6xl mx-auto p-3 flex items-center justify-between">
                <div className="hover:dark:text-white hover:text-zinc-800">
                    <Link
                        className={`text-xl dark:text-zinc-400 text-zinc-700 hover:dark:text-white hover:text-zinc-900 
                        ${pathname === "/" ? "cursor-none" : ""
                            }`}
                        href="/"
                    >
                        {brandName}
                    </Link>
                </div>

                {/* Theme Switcher always visible */}
                <div className="flex items-center space-x-4">
                    <ThemeSwitcher className={`${pathname === "/" ? "cursor-none" : ""} flex items-center pl-1 dark:text-zinc-400 hover:dark:text-white text-zinc-700`} />
                    {/* Hamburger Icon */}
                    <div className="md:hidden">
                        <button
                            className="flex items-center justify-center focus:outline-none text-zinc-700 dark:text-white"
                            onClick={toggleNav}
                        >
                            {navOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        stroke="currentColor"
                                        d="M3 6h18M3 12h18m-9 6h9"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Full navigation for larger screens */}
                <ul className="hidden md:flex gap-5 items-center">
                    <li className="dark:text-zinc-400 text-zinc-700 hover:dark:text-white hover:text-zinc-900">
                        <Link
                            className={`flex items-center pl-1 ${pathname === "/" ? "cursor-none" : ""} ${pathname === "/about"
                                ? "dark:text-white text-zinc-900"
                                : "dark:text-zinc-400 hover:dark:text-white text-zinc-700"
                                }`}
                            href="/about"
                        >
                            about
                        </Link>
                    </li>
                    <li className="dark:text-zinc-400 text-zinc-700 hover:dark:text-white hover:text-zinc-900">
                        <Link
                            className={`flex items-center pl-1 ${pathname === "/" ? "cursor-none" : ""} ${pathname === "/work"
                                ? "dark:text-white text-zinc-900"
                                : "dark:text-zinc-400 hover:dark:text-white text-zinc-700"
                                }`}
                            href="/work"
                        >
                            work
                        </Link>
                    </li>
                    <li className="dark:text-zinc-400 text-zinc-700 hover:dark:text-white hover:text-zinc-900">
                        <Link
                            className={`flex items-center pl-1 ${pathname === "/" ? "cursor-none" : ""} ${pathname === "/contact"
                                ? "dark:text-white text-zinc-900"
                                : "dark:text-zinc-400 hover:dark:text-white text-zinc-700"
                                }`}
                            href="/contact"
                        >
                            contact
                        </Link>
                    </li>
                </ul>

                {/* Mobile Menu */}
                <ul
                    className={`md:hidden fixed left-0 top-0 w-[60%] h-full bg-zinc-100 dark:bg-zinc-900 ease-in-out duration-300 transform ${navOpen ? "translate-x-0" : "-translate-x-full"
                        } z-50 flex flex-col items-start p-5 space-y-6`}
                >
                    <li className="dark:text-zinc-400 text-zinc-700 hover:dark:text-white hover:text-zinc-900">
                        <Link
                            className={`flex items-center pl-1 ${pathname === "/about"
                                ? "dark:text-white text-zinc-900"
                                : "dark:text-zinc-400 hover:dark:text-white text-zinc-700"
                                }`}
                            href="/about"
                            onClick={() => setNavOpen(false)} // Close menu on click
                        >
                            about
                        </Link>
                    </li>
                    <li className="dark:text-zinc-400 text-zinc-700 hover:dark:text-white hover:text-zinc-900">
                        <Link
                            className={`flex items-center pl-1 ${pathname === "/work"
                                ? "dark:text-white text-zinc-900"
                                : "dark:text-zinc-400 hover:dark:text-white text-zinc-700"
                                }`}
                            href="/work"
                            onClick={() => setNavOpen(false)}
                        >
                            work
                        </Link>
                    </li>
                    <li className="dark:text-zinc-400 text-zinc-700 hover:dark:text-white hover:text-zinc-900">
                        <Link
                            className={`flex items-center pl-1 ${pathname === "/contact"
                                ? "dark:text-white text-zinc-900"
                                : "dark:text-zinc-400 hover:dark:text-white text-zinc-700"
                                }`}
                            href="/contact"
                            onClick={() => setNavOpen(false)}
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
