import React from "react";
import { User, GraduationCap, Briefcase, Code } from "lucide-react";
import profileImage from '../assets/img.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#121212] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Profile Image */}
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg">
            <img
              src= {profileImage} // Replace with your image
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* About Content */}
          <div className="flex-1">
            <p className="text-gray-300 text-lg mb-4">
              Hey there! 👋 I'm <span className="text-purple-400 font-bold">Taufique Alam Ansari</span>, a passionate 
              Computer Science student with a strong interest in **full-stack development** and **problem-solving**. 
              Currently pursuing my **B.Tech in Computer Science & Engineering** at **GIET, BPUT**.
            </p>

            <p className="text-gray-300 text-lg mb-4">
              I enjoy building **efficient, scalable, and user-friendly applications** using modern technologies like 
              <span className="text-purple-400"> React, Express.js, MongoDB, and Java.</span> 
              I'm also an active **competitive programmer** with a strong foundation in **DSA**.
            </p>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              <div className="flex items-center gap-3">
                <User className="text-purple-400" size={28} />
                <div>
                  <h4 className="text-lg font-bold">Name</h4>
                  <p className="text-gray-400">Taufique Alam Ansari</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <GraduationCap className="text-purple-400" size={28} />
                <div>
                  <h4 className="text-lg font-bold">Education</h4>
                  <p className="text-gray-400">B.Tech, CSE (2021-2025)</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Briefcase className="text-purple-400" size={28} />
                <div>
                  <h4 className="text-lg font-bold">Internship</h4>
                  <p className="text-gray-400">SAP ISU Intern at PCON Utilities Pvt. Ltd.</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Code className="text-purple-400" size={28} />
                <div>
                  <h4 className="text-lg font-bold">Skills</h4>
                  <p className="text-gray-400">Java, React, Express.js, MongoDB, DSA</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 py-3 px-6 rounded-lg font-bold text-white hover:opacity-80 transition"
              >
                Let's Connect 🚀
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
