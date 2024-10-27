import React from 'react'

const RoboticCapabilities = () => {
  return (
    <>
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
    </>
  )
}

export default RoboticCapabilities