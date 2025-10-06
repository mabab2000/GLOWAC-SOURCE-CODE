import { useState, useEffect } from 'react';
import { FaChartLine, FaUserClock, FaUserCheck } from 'react-icons/fa';

const AboutGlowac = () => {
  const [completedProjects, setCompletedProjects] = useState(0);
  const [experience, setExperience] = useState(0);
  const [happyClients, setHappyClients] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (completedProjects < 200) {
        setCompletedProjects((prevCount) => prevCount + 1);
      }
      if (experience < 10) {
        setExperience((prevCount) => prevCount + 1);
      }
      if (happyClients < 400) {
        setHappyClients((prevCount) => prevCount + 1);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [completedProjects, experience, happyClients]);

  return (
    <div className="container mx-auto flex flex-col items-center justify-center py-12 bg-[#f0f4f8] px-4 sm:px-6">
      <h1 className="text-4xl text-[#0d9488] font-bold mb-8 text-center">Our Impact</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center justify-center bg-white border border-[#0d9488] rounded-lg p-6 shadow-md">
          <div className="text-[#0d9488] text-6xl mb-4">
            <FaChartLine />
          </div>
          <h2 className="text-3xl text-[#0d9488] font-bold mb-4">Completed Projects</h2>
          <div className="text-6xl  text-black font-bold">{completedProjects}+</div>
        </div>
        <div className="flex flex-col items-center justify-center bg-white border border-[#0d9488] rounded-lg p-6 shadow-md">
          <div className="text-[#0d9488] text-6xl mb-4">
            <FaUserClock />
          </div>
          <h2 className="text-3xl text-[#0d9488] font-bold mb-4">Our Experience</h2>
          <div className="text-6xl  text-black  font-bold">{experience}+ Years</div>
        </div>
        <div className="flex flex-col items-center justify-center bg-white border border-[#0d9488] rounded-lg p-6 shadow-md">
          <div className="text-[#0d9488] text-6xl mb-4">
            <FaUserCheck />
          </div>
          <h2 className="text-3xl text-[#0d9488] font-bold mb-4">Happy Clients</h2>
          <div className="text-6xl  text-black font-bold">{happyClients}+</div>
        </div>
      </div>
    </div>
  );
};

export default AboutGlowac;
