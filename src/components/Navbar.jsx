import React, { useState, useEffect } from 'react'
import { useLottie } from 'lottie-react';
import lottieIcon from '../assets/Animation - 1729757965696.json';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [navbarPosition, setNavbarPosition] = useState('-top-20');
    const [headingPosition, setHeadingPosition] = useState('-left-full');

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const options = {
      animationData: lottieIcon,
      loop: true,
      autoplay: true,
    };

    const { View } = useLottie(options);

    useEffect(() => {
      const headingTimer = setTimeout(() => {
        setHeadingPosition('left-0');
      }, 2000);

      const navbarTimer = setTimeout(() => {
        setNavbarPosition('top-0');
      }, 3000);

      return () => {
        clearTimeout(headingTimer);
        clearTimeout(navbarTimer);
      };
    }, []);

  return (
    <nav className={`flex justify-between items-center fixed left-0 z-[9999] p-4  lg:pl-24 lg:pr-11 text-white w-full h-20 bg-black bg-opacity-80 transition-all duration-500 ${navbarPosition}`}>
      <h1 className={`text-2xl text-white font-bold transition-all duration-500 ${headingPosition}`}>TESLA X AI</h1>
      <div className="relative">
        <button 
          className="flex items-center cursor-pointer rounded-full p-2 transition-all duration-300 hover:bg-gray-800"
          onClick={toggleMenu}
        >
          <div style={{ height: '50px', width: '50px', pointerEvents: 'none' }}>
            {View}
          </div>
        </button>
        {isOpen && (
          <ul className="absolute right-0 mt-2 w-48 py-2 bg-black rounded-md shadow-xl z-[10000]">
            <li><a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-800 transition-all duration-300 cursor-pointer">Home</a></li>
            <li><a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-800 transition-all duration-300 cursor-pointer">About</a></li>
            <li><a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-800 transition-all duration-300 cursor-pointer">Services</a></li>
            <li><a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-800 transition-all duration-300 cursor-pointer">Contact</a></li>
          </ul>
        )}
      </div>
    </nav>
  )
}

export default Navbar