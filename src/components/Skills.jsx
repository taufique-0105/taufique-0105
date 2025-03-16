// File: src/components/Skills.jsx
import React from 'react';
import { Code, Layout, Database, Terminal, GitBranch, Server } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code size={24} className="text-purple-500" />,
      skills: [
        { name: 'Java', level: 85 },
        { name: 'C', level: 80 },
        { name: 'JavaScript', level: 65 },
      ],
    },
    {
      title: 'Frontend Development',
      icon: <Layout size={24} className="text-purple-500" />,
      skills: [
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 85 },
        { name: 'Bootstrap', level: 80 },
        { name: 'Tailwind CSS', level: 75 },
        { name: 'React.js', level: 60 },
      ],
    },
    {
      title: 'Tools & Platforms',
      icon: <Terminal size={24} className="text-purple-500" />,
      skills: [
        { name: 'VS Code', level: 90 },
        { name: 'Cursor', level: 85 },
        { name: 'MySQL Workbench', level: 75 },
        { name: 'Microsoft Office', level: 85 },
      ],
    },
    {
      title: 'Version Control',
      icon: <GitBranch size={24} className="text-purple-500" />,
      skills: [
        { name: 'Git', level: 80 },
        { name: 'GitHub', level: 80 },
      ],
    },
    {
      title: 'Other Skills',
      icon: <Server size={24} className="text-purple-500" />,
      skills: [
        { name: 'SAP ISU', level: 70 },
        { name: 'Problem Solving', level: 85 },
        { name: 'Team Collaboration', level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              My Skills
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Here are the technologies and skills I've acquired through my education, projects, and internship experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-[#1E1E1E] rounded-lg p-6 shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="bg-purple-500/20 p-2 rounded-lg mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-200">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-[#2D2D2D] rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2.5 rounded-full"
                        style={{ width: `${skill.level}%` }}
                        ></div>

                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;