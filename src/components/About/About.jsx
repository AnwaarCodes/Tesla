import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import etvman from '../../assets/etvman.webp'
import etvman2 from '../../assets/etvman2.webp'
import femaleSpeaker from '../../assets/female-speaker.webp'

const About = () => {
  const [selectedBox, setSelectedBox] = useState(null);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const handleBoxClick = (index) => {
    setSelectedBox(selectedBox === index ? null : index);
  };

  const teamMembers = [
    {
      name: "Elon Musk",
      position: "CEO",
      info: "Visionary leader with over 20 years in the tech industry, driving innovations in electric vehicles and AI."
    },
    {
      name: "John Doe",
      position: "Head of AI Development",
      info: "Expert in machine learning and AI systems, leading projects that leverage cutting-edge technologies."
    },
    {
      name: "Jane Smith",
      position: "Lead Engineer",
      info: "Experienced engineer specializing in software development and robotics, passionate about transforming ideas into reality."
    }
  ];

  const missions = [
    { id: 1, text: "Innovate sustainable technologies for a cleaner planet.", info: "Our mission is to develop eco-friendly technologies that contribute to a sustainable future." },
    { id: 2, text: "Enhance AI capabilities to improve human life.", info: "We strive to enhance AI capabilities that positively impact healthcare, education, and more." },
    { id: 3, text: "Provide cutting-edge solutions for autonomous vehicles.", info: "Our focus is on developing solutions that make autonomous vehicles safer and more efficient." },
    { id: 4, text: "Foster a culture of innovation and collaboration.", info: "We encourage an environment where creativity and teamwork lead to groundbreaking innovations." }
  ];

  useEffect(() => {
    const animateCount = (target, setCount) => {
      let count = 0;
      const interval = setInterval(() => {
        if (count < target) {
          count += Math.ceil(target / 100);
          setCount(Math.min(count, target));
        } else {
          clearInterval(interval);
        }
      }, 20);
    };

    animateCount(1000, setCount1);
    animateCount(500, setCount2);
    animateCount(750, setCount3);
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">

      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center py-16 px-4 bg-gray-800 text-center"
      >
        <h1 className="text-4xl font-bold tracking-wide mb-4">About TESLA X AI</h1>
        <p className="text-lg max-w-2xl">
          At TESLA X AI, we are at the forefront of innovation, pushing the boundaries of technology and artificial intelligence to power the world of tomorrow.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="py-16 px-4"
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <motion.div
            className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-3xl font-semibold">{count1}</h2>
            <p className="mt-2">Years of Innovation</p>
          </motion.div>
          <motion.div
            className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-3xl font-semibold">{count2}</h2>
            <p className="mt-2">Expert Engineers</p>
          </motion.div>
          <motion.div
            className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-3xl font-semibold">{count3}</h2>
            <p className="mt-2">Projects Delivered Globally</p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="py-16 px-4 bg-gray-800"
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-10">Our Missions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {missions.map((mission) => (
              <motion.div
                key={mission.id}
                className="bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-red-600 cursor-pointer transition-colors duration-300"
                onClick={() => alert(mission.info)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: mission.id * 0.2 }}
              >
                <p className="text-lg">{mission.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="py-16 px-4"
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="mb-8 text-lg">
            Our team is composed of world-class engineers, data scientists, and innovators dedicated to creating the future of AI.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-gray-700 p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
                onClick={() => handleBoxClick(index)}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm mt-2">{member.position}</p>
                {selectedBox === index && (
                  <p className="mt-4 text-sm">{member.info}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="py-16 px-4 bg-gray-800"
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <p className="italic text-lg">"TESLA X AI transformed our business with cutting-edge AI solutions. Their innovation is unmatched!"</p>
              <p className="mt-4 text-sm font-semibold">- Alex Johnson, CEO of TechCorp</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <p className="italic text-lg">"Working with TESLA X AI has been a game-changer. Their team truly understands the future of technology."</p>
              <p className="mt-4 text-sm font-semibold">- Maria Thompson, CTO of InnovateX</p>
            </div>
          </div>
  
          <h3 className="text-3xl font-bold mt-8">Our Trusted Partners</h3>
          <div className="flex justify-center space-x-4 mt-4">
            <img src={etvman} alt="Client Logo 1" className="h-24 w-24 rounded-full" />
            <img src={etvman2} alt="Client Logo 2" className="ml-6 h-24 w-24 rounded-full " />
            <img src={femaleSpeaker} alt="Client Logo 3" className="ml-6 h-24 w-24 rounded-full" />
          </div>
        </div>
      </motion.section>

    
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="py-16 px-4 bg-gray-900 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Join Us in Shaping the Future</h2>
        <p className="mb-4">Be part of the future of technology and innovation. Let's create something extraordinary together!</p>
        <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-500 transition-colors duration-300">
          Get Involved
        </button>
      </motion.section>
    </div>
  );
};

export default About;
