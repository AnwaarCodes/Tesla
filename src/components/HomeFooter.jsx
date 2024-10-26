import React from 'react';

const HomeFooter = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        {/* Company Logo or Name */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold">TESLA X AI</h1>
          <p className="text-gray-400">Innovating the Future</p>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-5 -ml-28 text-gray-400">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <a href="#privacy" className="hover:text-white">Privacy Policy</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://twitter.com" className="hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://facebook.com" className="hover:text-white">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://instagram.com" className="hover:text-white">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default HomeFooter;
