import React from "react";
import Link from 'next/link'


const Footer = () => {
    return (
        <footer className="p-6 flex items-center justify-between">
            <Link
                className="text-zinc-800 dark:text-zinc-400 hover:text-black font-semibold dark:hover:text-white"
                href="/"
                previewlistener="true"
            >
                Anukul Tyagi.
            </Link>
            <ul className="flex gap-1 md:gap-3 items-center links">

                <li className="text-zinc-800 dark:text-zinc-400 hover:text-black dark:hover:text-white">
                    <Link
                        className="flex items-center px-1 "
                        aria-label="Github"
                        href="https://github.com/anukultyagi"
                        previewlistener="true"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M8 1.33333C7.12452 1.33333 6.25761 1.50577 5.44878 1.8408C4.63994 2.17583 3.90501 2.6669 3.28595 3.28595C2.03571 4.5362 1.33333 6.23189 1.33333 8C1.33333 10.9467 3.24667 13.4467 5.89333 14.3333C6.22667 14.3867 6.33333 14.18 6.33333 14V12.8733C4.48667 13.2733 4.09333 11.98 4.09333 11.98C3.78667 11.2067 3.35333 11 3.35333 11C2.74667 10.5867 3.4 10.6 3.4 10.6C4.06667 10.6467 4.42 11.2867 4.42 11.2867C5 12.3 5.98 12 6.36 11.84C6.42 11.4067 6.59333 11.1133 6.78 10.9467C5.3 10.78 3.74667 10.2067 3.74667 7.66667C3.74667 6.92667 4 6.33333 4.43333 5.86C4.36667 5.69333 4.13333 5 4.5 4.1C4.5 4.1 5.06 3.92 6.33333 4.78C6.86 4.63333 7.43333 4.56 8 4.56C8.56667 4.56 9.14 4.63333 9.66667 4.78C10.94 3.92 11.5 4.1 11.5 4.1C11.8667 5 11.6333 5.69333 11.5667 5.86C12 6.33333 12.2533 6.92667 12.2533 7.66667C12.2533 10.2133 10.6933 10.7733 9.20667 10.94C9.44667 11.1467 9.66667 11.5533 9.66667 12.1733V14C9.66667 14.18 9.77333 14.3933 10.1133 14.3333C12.76 13.44 14.6667 10.9467 14.6667 8C14.6667 7.12452 14.4942 6.25761 14.1592 5.44878C13.8242 4.63994 13.3331 3.90501 12.714 3.28595C12.095 2.6669 11.3601 2.17583 10.5512 1.8408C9.74239 1.50577 8.87548 1.33333 8 1.33333Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </Link>
                </li>
                <li className="text-zinc-800 dark:text-zinc-400 hover:text-black dark:hover:text-white">
                    <Link
                        className="flex items-center px-1"
                        aria-label="LinkedIn"
                        href="https://linkedin.com/in/tyagi-anukul"
                        previewlistener="true"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 16 16"

                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12.6667 2C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H12.6667ZM12.3333 12.3333V8.8C12.3333 8.2236 12.1044 7.6708 11.6968 7.26322C11.2892 6.85564 10.7364 6.62667 10.16 6.62667C9.59333 6.62667 8.93333 6.97333 8.61333 7.49333V6.75333H6.75333V12.3333H8.61333V9.04667C8.61333 8.53333 9.02667 8.11333 9.54 8.11333C9.78754 8.11333 10.0249 8.21167 10.2 8.3867C10.375 8.56173 10.4733 8.79913 10.4733 9.04667V12.3333H12.3333ZM4.58667 5.70667C4.88371 5.70667 5.16859 5.58867 5.37863 5.37863C5.58867 5.16859 5.70667 4.88371 5.70667 4.58667C5.70667 3.96667 5.20667 3.46 4.58667 3.46C4.28786 3.46 4.00128 3.5787 3.78999 3.78999C3.5787 4.00128 3.46 4.28786 3.46 4.58667C3.46 5.20667 3.96667 5.70667 4.58667 5.70667ZM5.51333 12.3333V6.75333H3.66667V12.3333H5.51333Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </Link>
                </li>
                <li className="text-zinc-800 dark:text-zinc-400 hover:text-black dark:hover:text-white">
                    <Link
                        className="flex items-center px-1 "
                        aria-label="Peerlist"
                        href="https://peerlist.io/anukul"
                        previewlistener="true"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 16 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6 11.9V5.1H8.66667C9.19707 5.1 9.7058 5.31493 10.0809 5.6975C10.4559 6.08008 10.6667 6.59896 10.6667 7.14C10.6667 7.68101 10.4559 8.19992 10.0809 8.58248C9.7058 8.96505 9.19707 9.18 8.66667 9.18H6"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path>
                            <path
                                d="M8 2.21C12.9333 2.21 14.1667 3.468 14.1667 8.5C14.1667 13.532 12.9333 14.79 8 14.79C3.06667 14.79 1.83334 13.532 1.83334 8.5C1.83334 3.468 3.06667 2.21 8 2.21Z"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path>
                        </svg>
                    </Link>
                </li>
                <li className="text-zinc-800 dark:text-zinc-400 hover:text-black dark:hover:text-white" >
                    <Link
                        className="flex items-center pl-1 "

                        aria-label="X/Twitter"
                        href="https://x.com/anukultyagi"
                        previewlistener="true"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 16 15"
                            fill=""
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11.8443 2H13.7609L9.57344 6.91724L14.5 13.6071H10.6427L7.62187 9.54922L4.16458 13.6071H2.24687L6.72604 8.34746L2 2.00054H5.95521L8.68594 5.7096L11.8443 2ZM11.1719 12.4289H12.2339L5.37812 3.11668H4.23854L11.1719 12.4289Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </Link>

                </li>
            </ul>
        </footer>
    );
};

export default Footer;
