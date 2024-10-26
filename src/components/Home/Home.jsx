import React, { useState, useEffect, useRef } from 'react'
import humanoid from '../../assets/humanoid-robot.png'
import gen3 from '../../assets/gen-3.mp4'
import { FaRobot, FaBrain, FaLightbulb, FaCode } from 'react-icons/fa'
import HomePage from './HomePage'
import HomeDetails from './HomeDetails';
import InnovationSection from './HomeInnovations';
import HomeScrollerText from './HomeScrollerText';
import HomeFooter from './HomeFooter';

const Home = () => {
  const [count, setCount] = useState(0);
  const [animationStage, setAnimationStage] = useState(0);
  const circleRef = useRef(null);
  const countDisplayRef = useRef(null);
  const [iconPositions, setIconPositions] = useState([100, 100, 100, 100]);
  const [selectedIcon, setSelectedIcon] = useState(null);
  
  const iconInfo = {
    FaRobot: "AI-powered robots are revolutionizing industries.",
    FaBrain: "Machine learning mimics human cognitive functions.",
    FaLightbulb: "Innovation drives the future of technology.",
    FaCode: "Coding is the language of the digital age."
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => {
        const newCount = (prevCount + 1) % 61;
        if (circleRef.current && countDisplayRef.current) {
          circleRef.current.style.strokeDashoffset = 283 - (283 * newCount) / 60;
          countDisplayRef.current.textContent = newCount;
        }
        return newCount;
      });
    }, 1000);
    
    const animationTimer = setInterval(() => {
      setAnimationStage(prev => Math.min(prev + 1, 5));
    }, 500);

    const iconAnimationTimer = setInterval(() => {
      setIconPositions(prev => {
        const newPositions = [...prev];
        const nextIconToMove = newPositions.findIndex(pos => pos > 0);
        if (nextIconToMove !== -1) {
          newPositions[nextIconToMove] = Math.max(0, newPositions[nextIconToMove] - 25);
        }
        return newPositions;
      });
    }, 200);

    return () => {
      clearInterval(interval);
      clearInterval(animationTimer);
      clearInterval(iconAnimationTimer);
    };
  }, []);

  const handleIconClick = (iconName) => {
    setSelectedIcon(iconName);
  };
  
  return (
    <>
    <div className="relative h-screen w-full flex items-center justify-center">
      <div className='absolute inset-0 flex items-end justify-center overflow-hidden'>
        <img src={humanoid} alt="humanoid" className='w-[830px] h-[500px] object-cover' style={{ animation: 'moveAndRotateRobot 10s ease-in-out forwards' }} />
      </div>
      <style>
        {`
          @keyframes moveAndRotateRobot {
            0% { transform: translateY(100%) rotateY(0deg); }
            50% { transform: translateY(0) rotateY(0deg); }
            75% { transform: translateY(0) rotateY(10deg); }
            100% { transform: translateY(0) rotateY(20deg); }
          }
          @keyframes slideInFromLeft {
            from { transform: translateX(-100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}
      </style>  
     
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60"></div>
    
      <div className="absolute left-[5%] top-[25%] flex flex-col items-start justify-center z-10 px-6">
        {['Creative', 'Intelligence'].map((text, index) => (
          <h1 key={index} className={`text-4xl md:text-3xl lg:text-4xl font-${index === 0 ? 'bold' : 'medium'} text-white mb-${index === 0 ? '4' : '6'} font-${index === 0 ? 'serif' : 'sans'} drop-shadow-md leading-tight ${animationStage >= index + 1 ? 'animate-[slideInFromLeft_1s_ease-out_forwards]' : 'opacity-0'}`}>
            {text}
          </h1>
        ))}
        <p className={`text-lg md:text-sm lg:text-[16px] text-white max-w-xl drop-shadow-md mb-4 mt-4 w-[70%] lg:leading-tight ${animationStage >= 3 ? 'animate-[slideInFromLeft_1s_ease-out_forwards]' : 'opacity-0'}`}>
          Unleash the power of generative AI to redefine creativity and innovation. Explore the limitless possibilities of technologies
        </p>
        <button className={`px-4 py-2 text-[10px] font-normal text-white bg-black rounded-full hover:bg-gray-950 border border-green-900 transition ${animationStage >= 4 ? 'animate-[slideInFromLeft_1s_ease-out_forwards]' : 'opacity-0'}`}>
          Get Started
        </button>
        <div className={`relative w-32 h-32 mt-8 ${animationStage >= 5 ? 'animate-[slideInFromLeft_1s_ease-out_forwards]' : 'opacity-0'}`}>
          <svg className="w-full h-32" viewBox="0 0 100 100">
            <circle className="text-gray-700" strokeWidth="4" stroke="currentColor" fill="transparent" r="45" cx="50" cy="50" />
            <circle ref={circleRef} className="text-green-950" strokeWidth="4" strokeDasharray="283" strokeDashoffset="283" stroke="currentColor" fill="transparent" r="45" cx="50" cy="50" style={{ transition: 'stroke-dashoffset 1s linear' }} />
          </svg>
          <div ref={countDisplayRef} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-gray-400">
            {count}
          </div>
        </div>
      </div>    
      <div className={`absolute right-[10%] bottom-[5%] ${animationStage >= 5 ? 'animate-[fadeIn_10s_ease-out_forwards]' : 'opacity-0'}`}>
        <div className="h-[180px] w-[270px] overflow-hidden">
          <video autoPlay loop muted className="h-full w-full object-cover">
            <source src={gen3} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="absolute right-[4%] top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 border border-green-950 rounded-full p-2">
        {[FaRobot, FaBrain, FaLightbulb, FaCode].map((Icon, index) => (
          <div 
            key={index} 
            className="w-4 h-4 border border-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-green-950 hover:border-green-950 hover:scale-110 cursor-pointer"
            style={{ transform: `translateX(${iconPositions[index]}%)`, transition: 'transform 0.5s ease-out' }}
            onClick={() => handleIconClick(Icon.name)}
          >
            <Icon className="text-white text-xs transition-all duration-300 hover:text-green-400" />
          </div>
        ))}
      </div>
      {selectedIcon && (
        <div className="absolute left-1/2 bottom-[10%] transform -translate-x-1/2 bg-black bg-opacity-80 text-white p-4 rounded-md">
          {iconInfo[selectedIcon]}
        </div>
      )}
    </div>
     <HomeScrollerText/>
     <HomePage />     
     <HomeDetails />
     <InnovationSection/>
     <HomeFooter/>
     </>
  )
}

export default Home