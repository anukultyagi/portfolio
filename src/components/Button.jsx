import React from 'react'

const Button = (props) => {
    const { className, onClick, children, type } = props
    return (
        // <button
        //     className={`${className} relative w-fit items-center justify-start inline-block overflow-hidden font-bold group border border-zinc-200 text-white hover:border-zinc-400 hover:text-zinc-400 py-2 px-6`}
        //     type={type}>
        //     <span className="w-32 h-32 rounded-full rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
        //     <span className="absolute top-0 left-0 w-full h-48  -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100  group-hover:-translate-x-8"></span>
        //     <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">{children}</span>
        //     <span className="absolute inset-0 border border-white "></span>
        // </button>
        <button className={`${className} relative flex items-center w-fit py-2 px-6 justify-center overflow-hidden border dark:border-zinc-200 border-zinc-400 text-black dark:text-white hover:border-zinc-400 hover:text-white dark:hover:text-black transition-all 
                    before:absolute before:h-0 before:w-0 
                    before:rounded-full dark:before:bg-white before:bg-black
                    before:duration-500 before:ease-out 
                    hover:before:h-56
                    hover:before:w-56
                    `}>
            <span className="relative z-10 w-full ">{children}</span>
        </button>

    )
}

export default Button