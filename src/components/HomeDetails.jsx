import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaRobot, FaCar, FaBolt } from 'react-icons/fa'

const HomeDetails = () => {
  const [showDetails, setShowDetails] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)
  const [expandedOption, setExpandedOption] = useState(null)
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const handleOptionClick = (option) => {
    setShowDetails(true)
    setSelectedOption(option)
    setExpandedOption(null) 
  }

  const handleExpandOption = (option) => {
    setExpandedOption(option)
  }

  return (
    <div className='min-h-screen w-screen bg-black text-white'>
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className="border-t-[1px] border-white px-4 py-8"
    >
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Tesla X AI: Unlocking the Future</h1>
        <p className="text-lg text-gray-600 mb-8">Explore the cutting-edge technology and innovations that are shaping the future of transportation and beyond.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-1/3 p-4 bg-gray-100 rounded-lg shadow-md cursor-pointer ${expandedOption === 'Autonomous Vehicles' ? 'expanded' : ''}`}
          onClick={() => handleOptionClick('Autonomous Vehicles')}
        >
          <FaCar size={50} color="blue" />
          <h2 className="text-xl font-semibold text-gray-700">Autonomous Vehicles</h2>
          <p className="text-sm text-gray-500">Experience the thrill of self-driving cars, designed for safety and efficiency.</p>
          {expandedOption === 'Autonomous Vehicles' && (
            <div className="mt-4">
              <p className="text-sm text-gray-600">Autonomous vehicles are equipped with advanced sensors and AI algorithms to navigate roads safely and efficiently. This technology has the potential to reduce accidents and improve traffic flow.</p>
              <button className="px-4 py-2 bg-blue-500 text-white rounded mt-4" onClick={() => window.open('https://www.tesla.com/autopilot', '_blank')}>Get More Details</button>
            </div>
          )}
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-1/3 p-4 bg-gray-100 rounded-lg shadow-md cursor-pointer ${expandedOption === 'Artificial Intelligence' ? 'expanded' : ''}`}
          onClick={() => handleOptionClick('Artificial Intelligence')}
        >
          <FaRobot size={50} color="red" />
          <h2 className="text-xl font-semibold text-gray-700">Artificial Intelligence</h2>
          <p className="text-sm text-gray-500">Discover how AI is revolutionizing the automotive industry and beyond.</p>
          {expandedOption === 'Artificial Intelligence' && (
            <div className="mt-4">
              <p className="text-sm text-gray-600">AI is transforming the automotive industry by enabling vehicles to learn from their environment and make decisions in real-time. This technology has far-reaching implications for safety, efficiency, and innovation.</p>
              <button className="px-4 py-2 bg-blue-500 text-white rounded mt-4" onClick={() => window.open('https://www.tesla.com/ai',setShowDetails(false), '_blank')}>Get More Details</button>
            </div>
          )}
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-1/3 p-4 bg-gray-100 rounded-lg shadow-md cursor-pointer ${expandedOption === 'Sustainable Energy' ? 'expanded' : ''}`}
          onClick={() => handleOptionClick('Sustainable Energy')}
        >
          <FaBolt size={50} color="green" />
          <h2 className="text-xl font-semibold text-gray-700">Sustainable Energy</h2>
          <p className="text-sm text-gray-500">Learn about the eco-friendly solutions powering the future of transportation.</p>
          {expandedOption === 'Sustainable Energy' && (
            <div className="mt-4">
              <p className="text-sm text-gray-600">Tesla is committed to accelerating the world's transition to sustainable energy through electric vehicles, solar power, and energy storage. This vision is driving innovation and reducing our carbon footprint.</p>
              <button className="px-4 py-2 bg-blue-500 text-white rounded mt-4" onClick={() => window.open('https://www.tesla.com/sustainability', '_blank')}>Get More Details</button>
              <p className="text-sm text-gray-600 mt-4">Please note that you are about to leave this website and access external content. By clicking the button, you acknowledge that you have permission to access this content.</p>
            </div>
          )}
        </motion.div>
      </div>
      {showDetails && (
        <div className="relative w-80 h-60 ml-[500px] flex flex-col items-center justify-center bg-black text-white border-2 border-green-950 rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold text-gray-300 mb-4">What do you want to do?</h2>
          <div className="flex flex-col gap-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded mt-4" onClick={() => window.open('https://www.tesla.com/autopilot', '_blank',setShowDetails(false))}>Get More Details</button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => {
              handleExpandOption(selectedOption);
              setShowDetails(false);
            }}>Choose Info Here</button>
          </div>
        </div>
      )}
    </motion.div>
    </div>
  )
}

export default HomeDetails