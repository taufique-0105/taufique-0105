// File: src/components/Experience.jsx
import React from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const Experience = () => {
  const workExperience = [
    {
      id: 1,
      title: 'SAP ISU Production Support Intern',
      company: 'PCON Utilities Pvt. Ltd.',
      period: 'June 2024 - December 2024',
      description: [
        'Provided support in SAP ISU modules, troubleshooting and resolving utility issues.',
        'Collaborated with cross-functional teams for seamless system operations.',
        'Gained hands-on experience with utility management systems and workflows.',
        'Developed skills in analyzing and resolving production issues efficiently.'
      ],
      icon: <Briefcase size={24} className="text-purple-500" />
    }
  ];

  const education = [
    {
      id: 1,
      degree: 'B.Tech. in Computer Science and Engineering',
      institution: 'Gandhi Institute for Education & Technology (BPUT)',
      period: '2021 - 2025',
      description: 'Pursuing a Bachelor of Technology degree with a focus on computer science fundamentals, web development, and programming.',
      icon: <GraduationCap size={24} className="text-purple-500" />
    },
    {
      id: 2,
      degree: 'Intermediate (Higher Secondary)',
      institution: 'Jashipur Higher Secondary School (CHSE)',
      period: '2021',
      description: 'Completed intermediate education with 78% marks.',
      icon: <GraduationCap size={24} className="text-purple-500" />
    },
    {
      id: 3,
      degree: 'Matriculation',
      institution: 'Vikash Convent School (ICSE)',
      period: '2019',
      description: 'Completed matriculation with 80.2% marks.',
      icon: <GraduationCap size={24} className="text-purple-500" />
    }
  ];

  const achievements = [
    {
      id: 1,
      title: '1st Position in Coding Competition',
      organization: "Engineer's Day, GIET Coding Club",
      description: 'Won first place in a competitive coding challenge, demonstrating problem-solving abilities and programming skills.',
      icon: <Award size={24} className="text-purple-500" />
    },
    {
      id: 2,
      title: '1st Position in Poster Presentation',
      organization: "Engineer's Day, GIET Coding Club",
      description: 'Secured first position for innovative poster design and presentation on technological advancements.',
      icon: <Award size={24} className="text-purple-500" />
    },
    {
      id: 3,
      title: '3rd Position in Technical Seminar',
      organization: 'ELITE Club of GIET',
      description: 'Presented on "Multi-Spectral Graphene-Based Electro-Optical Surfaces" and received recognition for technical knowledge and presentation skills.',
      icon: <Award size={24} className="text-purple-500" />
    }
  ];

  return (
    <section id="experience" className="py-20 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Experience & Education
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </div>

        {/* Work Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-200 mb-6">Work Experience</h3>
          <div className="space-y-6">
            {workExperience.map((work) => (
              <div key={work.id} className="bg-[#1E1E1E] p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-purple-500/20 rounded-lg mr-3">{work.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold">{work.title}</h4>
                    <p className="text-gray-400">{work.company} • {work.period}</p>
                  </div>
                </div>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {work.description.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-200 mb-6">Education</h3>
          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.id} className="bg-[#1E1E1E] p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-purple-500/20 rounded-lg mr-3">{edu.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold">{edu.degree}</h4>
                    <p className="text-gray-400">{edu.institution} • {edu.period}</p>
                  </div>
                </div>
                <p className="text-gray-300">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-200 mb-6">Achievements</h3>
          <div className="space-y-6">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="bg-[#1E1E1E] p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-purple-500/20 rounded-lg mr-3">{achievement.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold">{achievement.title}</h4>
                    <p className="text-gray-400">{achievement.organization}</p>
                  </div>
                </div>
                <p className="text-gray-300">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
