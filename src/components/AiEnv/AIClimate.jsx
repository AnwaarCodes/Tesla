import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Importing motion from Framer Motion

const AIClimate = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX - 12, y: event.clientY - 12 });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center h-screen bg-black overflow-hidden">
      {/* Glowing Ball with Framer Motion */}
      <motion.div
        className="absolute z-[10000] bg-transparent border-green-950 border-2 rounded-full w-24 h-24 pointer-events-none"
        style={{
          boxShadow: '0 0 20px rgba(255, 255, 255, 0.6)',
        }}
        animate={{
          top: mousePos.y,
          left: mousePos.x,
        }}
        transition={{
          type: 'spring', 
          stiffness: 300, 
          damping: 20,
        }}
      ></motion.div>

      {/* Text with Torch Glow effect */}
      <div className="text-center font-plex font-bold text-[12vw] text-white leading-none">
        <div className="text-left wave-text cursor-default">Climate</div>
        <div className="text-left wave-text cursor-default">
          Journey{' '}
          <span
            className="relative group"
            onMouseEnter={() => {
              const ball = document.querySelector('.absolute');
              ball.style.boxShadow = '0 0 50px rgba(255, 255, 255, 1)';
            }}
            onMouseLeave={() => {
              const ball = document.querySelector('.absolute');
              ball.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.6)';
            }}
          >
            <span className="cursor-default wave-text text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 relative group-hover:animate-wave">
              Begins
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AIClimate;
