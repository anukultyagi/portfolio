import React, { useEffect, useState } from 'react';


const DarkModeSwitcher = (props) => {
    const [isDarkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode(prev => !prev);
    };

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [isDarkMode]);

    return (
        <button className={`${props.className} text-lg `} onClick={toggleDarkMode}>{isDarkMode ?
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class=" text-[#D4D4D4]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"></path></svg>
            :
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class=" text-[#1c1c1c]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"></path></svg>
        }</button>

    );
}

export default DarkModeSwitcher;
