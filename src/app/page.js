"use client"
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import { motion } from 'framer-motion';

const HomePage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);


    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scale = cursorVariant === 'text' ? 3 : 1;
  const mixBlendMode = cursorVariant === 'text' ? 'difference' : 'difference';
  const backgroundColor = 'white'

  return (
    <div className='cursor-none'>
      <Header
        onMouseEnter={() => setCursorVariant('text')}
        onMouseLeave={() => setCursorVariant('default')}
      />
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 10 * scale,
          height: 10 * scale,
          borderRadius: '50%',
          backgroundColor,
          pointerEvents: 'none',
          zIndex: 9999,
          scale,
          translateX: mousePosition.x - 10 * scale,
          translateY: mousePosition.y - 10 * scale,
          mixBlendMode,
          transition: 'scale 0.1s ease-in-out',
        }}
      />
    </div>
  );
};

export default HomePage;
