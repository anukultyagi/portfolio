import React, { useState, useEffect } from 'react';

const CursorEyeBall = () => {
    const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            console.log(e)
            setEyePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    console.log(eyePosition)
    return (
        <div className="flex justify-center gap-10 ">
            <div className=" bg-white h-40 w-40 rounded-full">
                <div className="w-8 h-8 bg-black rounded-full"
                >
                </div>
            </div>
            <div className="bg-white h-40 w-40 rounded-full">
                <div className=" w-8 h-8 bg-black rounded-full"
                >
                </div>
            </div>


        </div>
    );
};

export default CursorEyeBall;
