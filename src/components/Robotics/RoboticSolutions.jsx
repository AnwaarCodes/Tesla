import React from 'react'

const RoboticSolutions = () => {
  return (
    <>
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
    </>
  )
}

export default RoboticSolutions