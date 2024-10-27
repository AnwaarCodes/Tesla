import React from 'react';
import gen4 from '../../assets/gen-4.mp4'
import AboutRobotics from './AboutRobotics';
import RoboticSolutions from './RoboticSolutions';
import RoboticCapabilities from './RoboticCapabilities';
import RoboticInnovation from './RoboticInnovation';
import FutureVision from './FutureVision';

const Robotics = () => {
  return (
    <div className="text-gray-800 font-sans">

      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white h-[500px] flex items-center justify-center">
        <video  
          src= {gen4}
          alt="Robotics video"
          className="absolute mt-[10px] inset-0 w-full min-h-full object-cover opacity-30">
        </video>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl font-bold mb-4">Tesla's Robotics and AI Integration</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Discover how Tesla is reshaping industries through cutting-edge robotics and artificial intelligence.
          </p>
        <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-200 ease-in-out hover:scale-105 hover:shadow-lg" onClick={() => window.location.href = '/about'}>
          Meet Us
        </button>
        </div>
      </div>

      <AboutRobotics/>
      <RoboticSolutions/>
      <RoboticCapabilities/>
      <RoboticInnovation/>
      <FutureVision/>

    </div>
  );
};

export default Robotics;
