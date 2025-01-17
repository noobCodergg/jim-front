import React from 'react';

const SkillSection = () => {
  const skill = [
    {
      name: "WANT AN EXPERT",
      icon: "With multiple years of experience, I can design functional buildings",
    },
    {
      name: "UNLIMITED REVISIONS",
      icon: "My work is to bring your dream to life, so I will provide as much revisions as you need Support",
    },
    {
      name: "LET'S DISCUSS",
      icon: "Let's connect so we can discuss about the next masterpiece you want to build",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto text-center px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skill.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-700"
            >
              <div className="text-center text-lg font-medium text-green-400 mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
