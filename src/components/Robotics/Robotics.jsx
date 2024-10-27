import React from 'react';
import gen4 from '../../assets/gen-4.mp4'

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
        </div>
      </div>

      {/* About Section */}
      <div className="py-16 bg-gray-100 text-gray-800 px-6 ">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Tesla’s Robotics and AI</h2>
          <p className="text-lg leading-relaxed">
            Tesla’s advancements in AI and robotics focus on creating intelligent systems that push the boundaries
            of technology. From autonomous driving to humanoid robots, Tesla is at the forefront of innovation, creating
            solutions that integrate seamlessly with our daily lives and enhance safety, efficiency, and productivity.
          </p>
        </div>
      </div>

      {/* Robotic Solutions Section */}
      <div className="py-16 bg-white text-gray-800 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">Tesla’s Robotic Solutions</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Tesla Bot (Optimus)', description: 'A humanoid robot designed to perform repetitive tasks.', icon: '🤖', link: 'https://www.tesla.com/AI' },
              { title: 'Autopilot', description: 'Autonomous driving features for safer and more efficient travel.', icon: '🚗', link: 'https://www.tesla.com/autopilot' },
              { title: 'Full Self-Driving (FSD)', description: 'Advanced AI for fully autonomous driving.', icon: '🧠', link: 'https://www.tesla.com/support/autopilot' },
            ].map((solution, index) => (
              <div
                key={index}
                className="bg-gray-100 p-8 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105 cursor-pointer hover:shadow-xl hover:bg-gray-200"
                onClick={() => window.location.href = solution.link}
              >
                <div className="text-5xl mb-4">{solution.icon}</div>
                <h3 className="text-2xl font-semibold mb-2">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Capabilities Section */}
      <div className="py-16 bg-gray-50 text-gray-800 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Tesla’s AI Capabilities</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Neural Networks', description: 'Deep neural networks for intelligent processing.', icon: '🔗', link: 'https://www.tesla.com/autopilot' },
              { title: 'Dojo Supercomputer', description: 'High-performance computing for training AI models.', icon: '💻', link: 'https://en.wikipedia.org/wiki/Tesla_Dojo' },
              { title: 'Vision Processing', description: 'Vision-based AI for understanding and interpreting surroundings.', icon: '👁️', link: 'https://aicadium.ai/tesla-increases-productivity-with-computer-vision-ai' },
            ].map((capability, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105 cursor-pointer hover:shadow-xl hover:bg-gray-200"
                onClick={() => window.location.href = capability.link}
              >
                <div className="text-5xl mb-4">{capability.icon}</div>
                <h3 className="text-2xl font-semibold mb-2">{capability.title}</h3>
                <p className="text-gray-600">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Innovations Section */}
      <div className="py-16 bg-gray-100 text-gray-800 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Key Innovations in Robotics and AI</h2>
          <p className="text-lg leading-relaxed mb-10">
            Tesla continuously innovates, leading the field in AI and robotics with new technologies designed to improve
            human-robot interactions and enhance autonomous systems.
          </p>
          <ul className="space-y-4 text-left">
            <li className="text-xl">• Optimized energy efficiency for robotic movements</li>
            <li className="text-xl">• Advanced data processing with the Dojo supercomputer</li>
            <li className="text-xl">• Robust neural networks for autonomous decision-making</li>
          </ul>
        </div>
      </div>

      {/* Future Vision Section */}
      <div className="py-16 bg-gray-900 text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">The Future of Tesla Robotics and AI</h2>
          <p className="text-lg leading-relaxed">
            Tesla envisions a world where intelligent robots and AI systems become integral to daily life. The goal is to
            continue innovating and pushing the boundaries of what's possible with technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Robotics;
