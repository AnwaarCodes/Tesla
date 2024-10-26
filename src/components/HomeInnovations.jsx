// Import required modules
import React from 'react';
import teslacarO from '../assets/tesla-carO.jpg'
import teslacar1 from '../assets/bb.png'
import teslacar2 from '../assets/humanoid-robot.png'
import teslacar3 from '../assets/thisisengineering.jpg'
import { motion } from "framer-motion";
const InnovationSection = () => {
  return (
    <motion.section 
      className="relative text-white py-20 bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      transition={{ duration: 5 }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={teslacar1} 
          alt="Tesla Innovation Background"
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Innovation Meets Sustainability</h2>
        <p className="text-lg mb-12">
          Discover the power of electric performance, sustainable design, and cutting-edge technology.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    
          <motion.div 
            className="bg-gray-800 bg-opacity-70 p-6 rounded-lg transform transition-transform hover:scale-105"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 3 }}
          >
            <h3 className="text-2xl font-semibold mb-3">Electric Power, Uncompromised Performance</h3>
            <img
              src={teslacarO}
              alt="Powertrain Performance"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <p className="text-base mb-4">
              Experience unparalleled torque and power in Tesla’s fully electric powertrain, crafted to deliver performance
              without compromise.
            </p>
            <a href="https://www.tesla.com/models/design" target="_blank" rel="noopener noreferrer" className="text-blue-400 font-semibold">Explore Performance</a>
          </motion.div>

          <motion.div 
            className="bg-gray-800 bg-opacity-70 p-6 rounded-lg transform transition-transform hover:scale-105"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 3 }}
          >
            <h3 className="text-2xl font-semibold mb-3">Built for a Greener Tomorrow</h3>
            <img
              src={teslacar2}
              alt="Sustainable Design"
              className="w-full h-40 object-cover rounded-lg pt-2 z-50 mb-4"
            />
            <p className="text-base mb-4 ">
              From the inside out, Tesla's designs integrate eco-friendly materials to create cars with a smaller environmental
              footprint.
            </p>
            <a href="https://www.tesla.com/sustainability" target="_blank" rel="noopener noreferrer" className="text-blue-400 font-semibold">Learn More About Sustainability</a>
          </motion.div>

          <motion.div 
            className="bg-gray-800 bg-opacity-70 p-6 rounded-lg transform transition-transform hover:scale-105"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 3 }}
          >
            <h3 className="text-2xl font-semibold mb-3">Tomorrow's Technology, Today</h3>
            <img
              src={teslacar3}
              alt="Cutting-Edge Technology"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <p className="text-base mb-4">
              Tesla’s AI and Autopilot technologies are redefining the future of driving. Explore our latest tech innovations.
            </p>
            <a href="https://www.tesla.com/autopilot" target="_blank" rel="noopener noreferrer" className="text-blue-400 font-semibold">See Our Technology</a>
          </motion.div>
        </div>

        <div className="mt-12">
          <a href="https://www.tesla.com" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-colors">
            Discover Tesla's Innovations
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default InnovationSection;
