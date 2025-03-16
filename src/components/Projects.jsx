// File: src/components/Projects.jsx
import React, { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Your actual projects
  const projects = [
    {
      id: 1,
      title: 'Background Changer',
      description: 'A simple tool to dynamically change the background color with a click.',
      image: '/api/placeholder/600/400',
      category: 'JavaScript Utility',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      demoLink: 'https://github.com/taufique-0105/projects-with-react-and-tailwind/tree/main/01bgChanger',
      githubLink: 'https://github.com/taufique-0105/projects-with-react-and-tailwind/tree/main/01bgChanger',
      detailedDescription: 'This application allows users to change the background color dynamically by clicking a button. Built with HTML, CSS, and JavaScript.'
    },
    {
      id: 2,
      title: 'Password Generator',
      description: 'A secure password generator with customizable options.',
      image: '/api/placeholder/600/400',
      category: 'Web Utility',
      technologies: ['React', 'Tailwind CSS'],
      demoLink: 'https://github.com/taufique-0105/projects-with-react-and-tailwind/tree/main/02passwordGenerator',
      githubLink: 'https://github.com/taufique-0105/projects-with-react-and-tailwind/tree/main/02passwordGenerator',
      detailedDescription: 'Generates strong passwords with customizable length and character options. Built using React and Tailwind CSS.'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A personal portfolio website with a dark-themed UI.',
      image: '/api/placeholder/600/400',
      category: 'Web Development',
      technologies: ['React', 'Tailwind CSS'],
      demoLink: 'https://github.com/taufique-0105/projects-with-react-and-tailwind/tree/main/03portfolio',
      githubLink: 'https://github.com/taufique-0105/projects-with-react-and-tailwind/tree/main/03portfolio',
      detailedDescription: 'A modern portfolio showcasing projects, skills, and experience. Built using React and Tailwind CSS with a dark-themed, responsive design.'
    },
    {
      id: 4,
      title: 'Currency Converter',
      description: 'A real-time currency conversion tool using an API.',
      image: '/api/placeholder/600/400',
      category: 'API Integration',
      technologies: ['React', 'Tailwind CSS', 'REST API'],
      demoLink: 'https://github.com/taufique-0105/projects-with-react-and-tailwind/tree/main/04currencyConverter',
      githubLink: 'https://github.com/taufique-0105/projects-with-react-and-tailwind/tree/main/04currencyConverter',
      detailedDescription: 'Fetches real-time exchange rates and converts currencies. Built with React and Tailwind CSS.'
    },
    {
      id: 5,
      title: 'Cards Using API',
      description: 'Fetches and displays dynamic cards from an API.',
      image: '/api/placeholder/600/400',
      category: 'API Integration',
      technologies: ['React', 'Tailwind CSS', 'REST API'],
      demoLink: 'https://github.com/taufique-0105/projects-with-react-and-tailwind/tree/main/05cardsUsingAPI',
      githubLink: 'https://github.com/taufique-0105/projects-with-react-and-tailwind/tree/main/05cardsUsingAPI',
      detailedDescription: 'Displays dynamic card components with data fetched from an API. Built using React and Tailwind CSS.'
    },
    {
      id: 6,
      title: 'To-Do List Application',
      description: 'A task management app with CRUD functionality.',
      image: '/api/placeholder/600/400',
      category: 'Web Development',
      technologies: ['React', 'Tailwind CSS', 'Local Storage'],
      demoLink: 'https://github.com/taufique-0105/projects-with-react-and-tailwind/tree/main/06todoApp',
      githubLink: 'https://github.com/taufique-0105/projects-with-react-and-tailwind/tree/main/06todoApp',
      detailedDescription: 'A simple to-do list app with add, edit, delete, and mark-as-done functionality. Uses local storage for data persistence.'
    }
  ];

  // Open project details modal
  const openProjectDetails = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  // Close project details modal
  const closeProjectDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="py-20 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects. Click on a project to view more details.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#232323] rounded-lg overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => openProjectDetails(project)}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <span className="text-xs font-medium text-white bg-purple-600 px-3 py-1 rounded-tr-lg m-2">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm h-12 overflow-hidden">
                  {project.description}
                </p>

                <button
                  className="w-full py-2 rounded bg-purple-600 hover:bg-purple-700 transition-all duration-300 text-white font-medium"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-[#1E1E1E] rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                <button onClick={closeProjectDetails} className="text-gray-400 hover:text-white transition-colors duration-300">
                  <X size={24} />
                </button>
              </div>

              <p className="text-gray-300 mb-6">{selectedProject.detailedDescription}</p>

              <div className="flex flex-wrap gap-4">
                <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-[#333] hover:bg-[#444] transition-colors duration-300 rounded text-white font-medium">
                  <Github size={18} />
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
