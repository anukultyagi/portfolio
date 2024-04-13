"use client";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// import resumeFile from './../../assets/resume.pdf'

const About = () => {
    return (
        <div>
            <div className="mx-auto container max-w-6xl p-3 py-10">
                <div className="">
                    <div className="md:mb-10 mb-6 select-none">
                        <motion.h1
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-6xl text-center text-white"
                        >
                            Hey there.
                        </motion.h1>
                    </div>
                    <div className="md:mb-28 mb-10">
                        <p className="text-zinc-400 leading-8">
                            Hey, I&apos;m <strong className="text-white">Anukul Tyagi</strong> . I'm all about making websites feel like
                            home. Based in <strong className="text-white">Noida</strong>, I'm here to bring a personal touch to the
                            digital space.
                            <br />
                            When I'm not coding, you can find me on the <strong className="text-white">volleyball</strong> court or
                            enjoying a game of <strong className="text-white">badminton</strong> . Sports keep me grounded and
                            inspired, ready to tackle any challenge that comes my way.
                            <br />
                            <br />
                            So, let's <strong className="text-white">collaborate</strong>  and create something amazing together!
                            Whether you're looking to refresh your website or start from
                            scratch, I'm here to turn your digital dreams into reality. Take a
                            peek at my portfolio, and let's make magic happen!
                        </p>
                    </div>
                    <div className="md:mb-28">
                        <section className=" flex flex-col gap-y-2">
                            <h1 className="text-xl md:text-3xl ">
                                Tech Stack
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 24 24"
                                    className="inline-block ml-2 text-zinc-400"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16.5,19 C17.8807119,19 19,17.8807119 19,16.5 C19,15.1192881 17.8807119,14 16.5,14 C15.1192881,14 14,15.1192881 14,16.5 C14,17.8807119 15.1192881,19 16.5,19 Z M10,5 L12,3 M7.5,10 C8.88071187,10 10,8.88071187 10,7.5 C10,6.11928813 8.88071187,5 7.5,5 C6.11928813,5 5,6.11928813 5,7.5 C5,8.88071187 6.11928813,10 7.5,10 Z M8,16 L16,8 M5.5,21 C6.88071187,21 8,19.8807119 8,18.5 C8,17.1192881 6.88071187,16 5.5,16 C4.11928813,16 3,17.1192881 3,18.5 C3,19.8807119 4.11928813,21 5.5,21 Z M18.5,8 C19.8807119,8 21,6.88071187 21,5.5 C21,4.11928813 19.8807119,3 18.5,3 C17.1192881,3 16,4.11928813 16,5.5 C16,6.88071187 17.1192881,8 18.5,8 Z M12,21 L14,19"
                                    ></path>
                                </svg>
                            </h1>
                            <p className="text-zinc-400">
                                A list of technologies/apps I use on a daily basis.
                            </p>
                            <div className="flex flex-wrap gap-4 my-4">
                                <div className="flex items-center px-4 py-1 text-sm border rounded-full border-border gap-x-2 ">
                                    <svg
                                        className=" text-zinc-400 hover:text-white"
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 512 512"
                                        height="28"
                                        width="28"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M64 32l34.936 403.213L255.769 480l157.245-44.854L448 32H64zm307.997 132h-184l3.991 51h176.008l-13.505 151.386-98.5 28.094-98.682-27.976L150.545 289h48.254l3.423 39.287 53.769 14.781 53.422-14.915L314.987 264H147.986l-12.571-149.589 240.789.016L371.997 164z"></path>
                                    </svg>
                                    HTML
                                </div>
                                <div className="flex items-center px-4 py-1 text-sm border rounded-full border-border gap-x-2 ">
                                    <svg
                                        className=" text-zinc-400 hover:text-white"
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 512 512"
                                        height="28"
                                        width="28"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M256.282 339.488zM64 32l34.946 403.219L255.767 480l157.259-44.85L448 32H64zm290.676 334.898l-98.607 28.125-98.458-28.248L150.864 289h48.253l3.433 39.562 53.586 15.163.132.273h.034l53.467-14.852L315.381 265H203l-4-50h120.646l4.396-51H140l-4-49h240.58l-21.904 251.898z"></path>
                                    </svg>
                                    CSS
                                </div>
                                <div className="flex items-center px-4 py-1 text-sm border rounded-full border-border gap-x-2 ">
                                    <svg
                                        className=" text-zinc-400 hover:text-white"
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 512 512"
                                        height="28"
                                        width="28"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M208 88.001h-80v212.498c0 52.58-18.032 67.261-49.412 67.261-14.705 0-27.948-2.521-38.25-6.063L32 423.904C46.7 428.966 69.259 432 86.907 432 158.955 432 208 398.129 208 301.02V88.001zM382.463 80C305.02 80 256 123.998 256 182.154c0 50.083 37.751 81.44 92.641 101.665 39.7 14.158 55.392 26.808 55.392 47.539 0 22.756-18.139 37.425-52.448 37.425-31.863 0-60.789-10.64-80.394-21.255v-.021L256 410.727c18.639 10.638 53.441 21.255 91.167 21.255C437.854 431.98 480 383.43 480 326.284c0-48.55-26.958-79.9-85.278-102.163-43.139-17.191-61.27-26.795-61.27-48.542 0-17.2 15.688-32.869 48.043-32.869 31.846 0 53.744 10.707 66.505 17.291l19.125-64C447.125 87.22 420.188 80 382.463 80z"></path>
                                    </svg>
                                    JavaScript
                                </div>

                                <div className="flex items-center px-4 py-1 text-sm border rounded-full border-border gap-x-2 ">
                                    <svg
                                        className=" text-zinc-400 hover:text-white"
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 24 24"
                                        height="28"
                                        width="28"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12.001 13.5001C11.1725 13.5001 10.501 12.8285 10.501 12.0001C10.501 11.1716 11.1725 10.5001 12.001 10.5001C12.8294 10.5001 13.501 11.1716 13.501 12.0001C13.501 12.8285 12.8294 13.5001 12.001 13.5001ZM11.4733 16.4945C11.6479 16.705 11.8239 16.908 12.001 17.103C12.178 16.908 12.3541 16.705 12.5286 16.4945C12.3538 16.4982 12.1779 16.5001 12.001 16.5001C11.824 16.5001 11.6481 16.4982 11.4733 16.4945ZM9.47837 16.3694C8.6762 16.2846 7.91035 16.1603 7.19268 16.0016C7.11832 16.3512 7.06134 16.6904 7.02243 17.0166C6.83358 18.6 7.09805 19.5617 7.50098 19.7943C7.9039 20.0269 8.86893 19.7751 10.1458 18.8199C10.4088 18.6231 10.6741 18.4042 10.9397 18.1649C10.4434 17.6228 9.95287 17.0217 9.47837 16.3694ZM16.8093 16.0016C16.0916 16.1603 15.3257 16.2846 14.5236 16.3694C14.0491 17.0217 13.5585 17.6228 13.0622 18.1649C13.3279 18.4042 13.5931 18.6231 13.8562 18.8199C15.133 19.7751 16.0981 20.0269 16.501 19.7943C16.9039 19.5617 17.1684 18.6 16.9795 17.0166C16.9406 16.6904 16.8836 16.3512 16.8093 16.0016ZM18.2598 15.6136C18.8364 18.2526 18.5328 20.3533 17.251 21.0933C15.9691 21.8334 13.9981 21.046 12.001 19.2271C10.0038 21.046 8.03282 21.8334 6.75098 21.0933C5.46913 20.3533 5.16555 18.2526 5.74217 15.6136C3.16842 14.7935 1.50098 13.4802 1.50098 12.0001C1.50098 10.5199 3.16842 9.20668 5.74217 8.38654C5.16555 5.74754 5.46913 3.64687 6.75098 2.9068C8.03282 2.16673 10.0038 2.95415 12.001 4.77302C13.9981 2.95415 15.9691 2.16673 17.251 2.9068C18.5328 3.64687 18.8364 5.74754 18.2598 8.38654C20.8335 9.20668 22.501 10.5199 22.501 12.0001C22.501 13.4802 20.8335 14.7935 18.2598 15.6136ZM10.9397 5.83521C10.6741 5.59597 10.4088 5.37703 10.1458 5.18024C8.86893 4.22499 7.9039 3.97321 7.50098 4.20584C7.09805 4.43847 6.83358 5.4001 7.02243 6.9835C7.06134 7.30969 7.11832 7.6489 7.19268 7.99857C7.91035 7.83985 8.6762 7.71556 9.47837 7.63078C9.95287 6.97848 10.4434 6.37737 10.9397 5.83521ZM14.5236 7.63078C15.3257 7.71556 16.0916 7.83985 16.8093 7.99857C16.8836 7.6489 16.9406 7.30969 16.9795 6.9835C17.1684 5.4001 16.9039 4.43847 16.501 4.20584C16.0981 3.97321 15.133 4.22499 13.8562 5.18024C13.5931 5.37703 13.3279 5.59597 13.0622 5.83521C13.5585 6.37737 14.0491 6.97848 14.5236 7.63078ZM12.5286 7.50565C12.3541 7.29515 12.178 7.09211 12.001 6.89711C11.8239 7.09211 11.6479 7.29515 11.4733 7.50565C11.6481 7.50194 11.824 7.50007 12.001 7.50007C12.1779 7.50007 12.3538 7.50194 12.5286 7.50565ZM8.37252 14.7042C8.28191 14.5547 8.19233 14.4033 8.10386 14.2501C8.01539 14.0968 7.92906 13.9435 7.84488 13.7903C7.74985 14.0467 7.66205 14.3007 7.58169 14.5515C7.83908 14.6074 8.10295 14.6583 8.37252 14.7042ZM10.3049 14.9377C10.8579 14.9788 11.4251 15.0001 12.001 15.0001C12.5769 15.0001 13.144 14.9788 13.697 14.9377C14.0091 14.4793 14.3111 13.9988 14.5991 13.5001C14.887 13.0013 15.1522 12.4995 15.393 12.0001C15.1522 11.5006 14.887 10.9988 14.5991 10.5001C14.3111 10.0013 14.0091 9.52081 13.697 9.06246C13.144 9.02133 12.5769 9.00007 12.001 9.00007C11.4251 9.00007 10.8579 9.02133 10.3049 9.06246C9.99283 9.52081 9.69086 10.0013 9.4029 10.5001C9.11494 10.9988 8.8498 11.5006 8.60892 12.0001C8.8498 12.4995 9.11494 13.0013 9.4029 13.5001C9.69086 13.9988 9.99283 14.4793 10.3049 14.9377ZM16.1571 10.2098C16.2521 9.9534 16.3399 9.6994 16.4203 9.44859C16.1629 9.39278 15.899 9.34182 15.6294 9.29591C15.72 9.44543 15.8096 9.59683 15.8981 9.75007C15.9866 9.9033 16.0729 10.0566 16.1571 10.2098ZM6.13143 9.83671C5.79142 9.94714 5.46917 10.0674 5.16723 10.1968C3.70154 10.825 3.00098 11.5348 3.00098 12.0001C3.00098 12.4653 3.70154 13.1752 5.16723 13.8033C5.46917 13.9327 5.79142 14.053 6.13143 14.1634C6.35281 13.4625 6.6281 12.7371 6.95576 12.0001C6.6281 11.263 6.35281 10.5376 6.13143 9.83671ZM7.58169 9.44859C7.66205 9.6994 7.74985 9.9534 7.84488 10.2098C7.92906 10.0566 8.01539 9.9033 8.10386 9.75007C8.19233 9.59683 8.28191 9.44543 8.37252 9.29591C8.10295 9.34182 7.83908 9.39278 7.58169 9.44859ZM17.8705 14.1634C18.2105 14.053 18.5328 13.9327 18.8347 13.8033C20.3004 13.1752 21.001 12.4653 21.001 12.0001C21.001 11.5348 20.3004 10.825 18.8347 10.1968C18.5328 10.0674 18.2105 9.94714 17.8705 9.83671C17.6491 10.5376 17.3739 11.263 17.0462 12.0001C17.3739 12.7371 17.6491 13.4625 17.8705 14.1634ZM16.4203 14.5515C16.3399 14.3007 16.2521 14.0467 16.1571 13.7903C16.0729 13.9435 15.9866 14.0968 15.8981 14.2501C15.8096 14.4033 15.72 14.5547 15.6294 14.7042C15.899 14.6583 16.1629 14.6074 16.4203 14.5515Z"></path>
                                    </svg>
                                    React
                                </div>
                                <div className="flex items-center px-4 py-1 text-sm border rounded-full border-border gap-x-2 ">
                                    <svg
                                        className=" text-zinc-400 hover:text-white"
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 448 512"
                                        height="28"
                                        width="28"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"></path>
                                    </svg>
                                    Node.js
                                </div>
                                <div className="flex items-center px-4 py-1 text-sm border rounded-full border-border gap-x-2 ">
                                    <svg
                                        className=" text-zinc-400 hover:text-white"
                                        stroke="currentColor"
                                        fill="none"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        height="28"
                                        width="28"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"></path>
                                        <path d="M15 12v-3"></path>
                                    </svg>
                                    Next.js
                                </div>
                                <div className="flex items-center px-4 py-1 text-sm border rounded-full border-border gap-x-2">
                                    <svg
                                        className=" text-zinc-400 hover:text-white"
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        role="img"
                                        viewBox="0 0 24 24"
                                        height="28"
                                        width="28"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path>
                                    </svg>
                                    TailwindCSS
                                </div>
                                <div className="flex items-center px-4 py-1 text-sm border rounded-full border-border gap-x-2 ">
                                    <svg
                                        className=" text-zinc-400 hover:text-white"
                                        width={28}
                                        height={28}
                                        viewBox="0 0 1.28 1.28"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M.892.469H.891L.89.466.913.328l.106.106L.908.48H.906L.891.469m.154-.008.113.113c.024.024.035.035.04.049L1.2.629.929.514.927.512.929.51Zm.15.205a.2.2 0 0 1-.037.042L1.03.836.865.802H.864Q.862.802.861.8A.05.05 0 0 0 .842.765V.762L.873.571V.57q0-.002.002-.003A.05.05 0 0 0 .909.548L.91.547h.003Zm-.194.199-.21.21.036-.221V.853L.829.852l.02-.015.003-.002h.001Zm-.255.254-.024.024L.46.765.459.763.46.762.462.758.463.757.465.755h.002l.29.06.002.001.001.001v.001a.05.05 0 0 0 .03.034v.003l-.043.265m-.049.049a.1.1 0 0 1-.039.03.06.06 0 0 1-.035 0c-.014-.004-.025-.016-.049-.04L.312.896.381.79.382.789h.003l.021.003.027-.005h.002l.001.001ZM.286.871l-.06-.06L.345.76h.001l.002.002v.001l.003.005v.001ZM.199.784.123.708.094.678l.232.048h.001q.002 0 .003.002Q.33.73.327.731H.326ZM.08.637.083.623C.087.609.099.598.123.574L.22.476l.135.195v.001q.002.001.001.003L.344.69.343.692H.342ZM.246.45.377.319l.164.069.002.002v.002L.542.405a.06.06 0 0 0 .017.041Q.56.448.558.449V.45L.425.656.424.657H.421L.405.655.39.657H.388L.387.656ZM.404.292l.17-.17C.598.098.609.087.623.082a.06.06 0 0 1 .035 0c.014.004.025.016.049.04l.037.037-.121.187-.001.001H.619L.601.344a.06.06 0 0 0-.038.013H.56L.404.291M.77.184l.112.112-.027.166v.001L.854.464H.853L.838.472.837.473.836.474H.835L.665.402.663.4.654.374V.373Q.652.371.653.369ZM.655.436l.159.067.002.002v.002L.815.515v.004L.813.521.458.672H.456Q.455.67.457.669V.668L.588.465.591.462h.001L.6.463A.06.06 0 0 0 .649.437L.65.436h.003M.472.704.831.551l.001.001.005.004.001.001.002.002V.56L.809.749V.75q0 .002-.002.003a.05.05 0 0 0-.04.025L.766.78H.764L.478.721.473.706"
                                            style={{
                                                fill: "currentColor",
                                            }}
                                        />
                                    </svg>
                                    Netlify
                                </div>
                                <div className="flex items-center px-4 py-1 text-sm border rounded-full border-border gap-x-2 ">
                                    <svg
                                        className=" text-zinc-400 hover:text-white"
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        role="img"
                                        viewBox="0 0 24 24"
                                        height="28"
                                        width="28"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"></path>
                                    </svg>
                                    VSCode
                                </div>
                                <div className="flex items-center px-4 py-1 text-sm border rounded-full border-border gap-x-2 ">
                                    <svg
                                        width="25px"
                                        height="25px"
                                        viewBox="0 0 24 24"
                                        dataName="Line Color"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            id="primary"
                                            d="M15,9H9A3,3,0,0,1,6,6H6A3,3,0,0,1,9,3h6a3,3,0,0,1,3,3h0A3,3,0,0,1,15,9ZM12,3H9A3,3,0,0,0,6,6H6A3,3,0,0,0,9,9h3Zm0,6H9a3,3,0,0,0-3,3H6a3,3,0,0,0,3,3h3Zm3,6h0a3,3,0,0,0,3-3h0a3,3,0,0,0-3-3h0a3,3,0,0,0-3,3h0A3,3,0,0,0,15,15Zm-3,0H9a3,3,0,0,0-3,3H6a3,3,0,0,0,3,3h3Z"
                                            style={{
                                                fill: "none",
                                                stroke: "#a1a1aa",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                            }}
                                        />
                                    </svg>
                                    Figma
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="">
                        <main className="min-h-[calc(100vh_-_132px)] ">
                            <h2 className="mb-5 text-xl md:text-3xl font-medium">Work</h2>
                            <p className="text-zinc-400">
                                I'm a <strong className="text-white">Frontend Developer</strong>{" "}
                                aspiring to make a mark in the world of web builders. My focus
                                is on creating solutions that solve real-life problems, whether
                                working{" "}
                                <b className="font-normal text-white">collaboratively</b> or{" "}
                                <b className="font-normal text-white">independently.</b>
                            </p>
                            <span className="mt-12 h-0 block"></span>
                            <div className="mb-8 ms-12">
                                <h2 className="text-xl font-medium">Aqusag Technologies</h2>
                                <p className="md:text-base text-zinc-400">Noida, India</p>
                                <div className="md:pl-8 positions mt-4">
                                    <div className="mt-4">
                                        <h3 className="md:text-lg">Frontend Developer</h3>
                                        <p className="text-sm text-zinc-400">
                                            Mar 2023 - Oct 2023 (Full-Time)
                                        </p>
                                        <p className="text-sm mt-3 list-item ml-3 text-zinc-400">
                                            Responsible for converting client's design requirements
                                            into functional and Aesthetic UI Layouts using HTML, CSS
                                            and JS.

                                        </p>
                                        <p className="text-sm mt-3 list-item ml-3 text-zinc-400">
                                            Gained an understanding and the importance of
                                            maintaining consistency and accessibility throughout the
                                            UI.
                                        </p>
                                        <p className="text-sm mt-3 list-item ml-3 text-zinc-400">
                                            Gained experience of using version control git that
                                            allowed me to collaborate effectively.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-8 ms-12">
                                <h2 className="text-xl font-medium">Freelancer</h2>
                                <p className="md:text-base text-zinc-400">Noida, India</p>
                                <div className="md:pl-8 positions mt-4">
                                    <div className="mt-4">
                                        <p className="text-sm text-zinc-400">
                                            Aug 2023 - present (Full-Time)
                                        </p>
                                        <p className="text-sm mt-3 list-item ml-3 text-zinc-400">
                                            In addition to my work as a Frontend Developer, I'm deeply involved in the freelance community.
                                        </p>
                                        <p className="text-sm mt-3 list-item ml-3 text-zinc-400">
                                            As a freelancer, I've collaborated with different developers across same domain , working on projects ranging from custom web development to API integrations.
                                        </p>
                                        <p className="text-sm mt-3 list-item ml-3 text-zinc-400">

                                            I take pride in delivering high-quality solutions that not only meet my client's needs but also exceed their expectations, maintaining clear communication and a strong commitment to deadlines.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </main>
                        {/* <div className="flex justify-center my-10">
                            <Link href="/resume.pdf" target="_blank" locale={false}>
                                <Button>Download Resume</Button>
                            </Link>
                        </div> */}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default About;
