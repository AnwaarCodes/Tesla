import React, { useState, useEffect } from 'react'
import { FaRobot, FaCar, FaMicrochip, FaBolt } from 'react-icons/fa'
import tesla from '../../assets/tesla-f.jpg'
import teslaline from '../../assets/Tesla-lineup.png'
import teslacyber from '../../assets/cyberbackpack.jpg'
import teslapower from '../../assets/tesla-power.png'

const HomePage = () => {
  const [animationStage, setAnimationStage] = useState(0);
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    { icon: FaRobot, title: "Pioneering the Future of Clean Transportation", description: "Tesla has been at the forefront of electric vehicle innovation, creating sustainable and powerful alternatives to traditional cars. With an emphasis on zero emissions, the Model S, Model 3, Model X, and Model Y continue to set the standard for electric performance.", image: teslaline },
    { icon: FaCar, title: "A New Era of Self-Driving Capabilities", description: "Tesla's Autopilot and Full-Self Driving systems represent groundbreaking advancements in vehicle autonomy. Learn how this technology uses cameras, sensors, and advanced AI to make driving safer and more efficient.", image: tesla },
    { icon: FaMicrochip, title: "Beyond Cars: Tesla’s Vision for Sustainable Energy", description: "Tesla isn’t just about cars. Through products like Powerwall, Solar Roof, and utility-scale battery storage, Tesla aims to accelerate the world's transition to renewable energy.", image: teslacyber },
    { icon: FaBolt, title: "Innovating for Tomorrow, Today", description: "Tesla’s commitment to pushing the boundaries includes ongoing projects like the Cybertruck, Roadster, and Tesla Semi. Each of these projects promises to redefine expectations of performance, durability, and sustainability.", image: teslapower },
  ];

  useEffect(() => {
    const animationTimer = setInterval(() => {
      setAnimationStage(prev => Math.min(prev + 1, features.length));
    }, 500);

    return () => clearInterval(animationTimer);
  }, []);

  return (
    <div className='min-h-screen w-screen bg-black border-t border-green-950 text-white overflow-hidden'>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center animate-[fadeIn_1s_ease-out]">TESLA X AI: The Future of Automotive Intelligence</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`bg-gray-900 p-6 rounded-lg transition-all duration-500 transform hover:scale-105 cursor-pointer ${animationStage > index ? 'animate-[slideInFromLeft_1s_ease-out_forwards]' : 'opacity-0'}`}
                onClick={() => setSelectedFeature(feature)}
              >
                <feature.icon className="text-3xl mb-4 text-green-500" />
                <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-blue-900 opacity-20 animate-pulse"></div>
            <div className="relative z-10 h-full flex items-center justify-center">
              {selectedFeature ? (
                <div className="text-center p-8 bg-black bg-opacity-70 rounded-lg">
                  <selectedFeature.icon className="text-6xl mb-4 text-green-500 mx-auto" />
                  <h3 className="text-2xl font-bold mb-4">{selectedFeature.title}</h3>
                  <p className="text-lg mb-4">{selectedFeature.description}</p>
                  <div className="relative w-full h-64 rounded-lg overflow-hidden">
                    <img src={selectedFeature.image} alt={selectedFeature.title} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
                      <p className="text-white text-sm p-2">{selectedFeature.title}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-2xl font-light italic">Select a feature to learn more</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage