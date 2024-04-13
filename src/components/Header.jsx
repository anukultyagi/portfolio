import React from 'react'

const Header = (props) => {
    const { onMouseEnter, onMouseLeave } = props
    return (
        <div>
            <div className='container max-w-6xl h-[calc(100vh-55px)] mx-auto flex justify-center items-center text-center'>
                <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className='select-none'>
                    <h1 className='mb-10 mx-1 sm:mx-auto  lg:text-9xl md:text-8xl sm:text-7xl text-6xl uppercase font-light leading-none -tracking-wider select-none ' >Anukul Tyagi</h1>
                    <p className='text-lg max-w-3xl mx-3 sm:mx-auto text-zinc-400 select-none'>"Based in Noida, I'm your go-to Frontend Developer, sculpting sleek and intuitive web experiences. Let's make your online dreams a reality!"</p>
                </div>
            </div>
        </div>

    )
}

export default Header


