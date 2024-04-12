import React from 'react'

const Header = (props) => {
    const { onMouseEnter, onMouseLeave } = props
    return (
        <div>
            <div className='container max-w-6xl h-[calc(100vh-55px)] mx-auto flex justify-center items-center text-center'>
                <div className='select-none'>
                    <h1 onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className='mb-10 lg:text-9xl md:text-8xl sm:text-7xl text-6xl uppercase font-light leading-none -tracking-wider select-none ' >Anukul Tyagi</h1>
                    <p className='text-lg max-w-3xl mx-auto text-zinc-400 select-none'>Hi, I’m Anukul Tyagi, A Passionate Web Designer and Webflow Maestro Crafting Visually Captivating Websites — based in Newyork and working worldwide.</p>
                </div>
            </div>
        </div>

    )
}

export default Header


// <div className="container max-w-6xl mx-auto">