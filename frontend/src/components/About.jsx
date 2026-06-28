import React from 'react';
import { Code2, Zap, Users } from 'lucide-react';

const About = ({ isDark }) => {
  const highlights = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'Building complete solutions from frontend to backend with modern technologies and best practices.'
    },
    {
      icon: Zap,
      title: 'Performance Focused',
      description: 'Creating fast, responsive, and optimized applications that deliver excellent user experiences.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Working effectively in teams, communicating clearly, and contributing to collective success.'
    }
  ];

  return (
    <section id="about" className={`py-20 ${isDark ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className={`h-1 w-20 ${isDark ? 'bg-gradient-to-r from-cyan-400 to-blue-500' : 'bg-gradient-to-r from-blue-600 to-cyan-500'} mx-auto`}></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Image placeholder */}
          <div className="flex justify-center">
            <div className={`relative w-72 h-72 rounded-2xl overflow-hidden ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <div className="w-full h-full flex items-center justify-center">
                {/* <svg
                  className={`w-32 h-32 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg> */}
                <img src="../../public/profile.png" alt="my-profile" />
              </div>
            </div>
          </div>

          {/* Right side - About text */}
          <div>
            <h3 className="text-3xl font-bold mb-6">Creative Developer & Problem Solver</h3>
            
            <p className={`text-lg mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              I'm a passionate full-stack developer with expertise in building modern web applications. With a strong foundation in both frontend and backend technologies, I create seamless digital experiences that solve real-world problems.
            </p>

            <p className={`text-lg mb-6 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              My journey in tech has been driven by curiosity and a desire to continuously learn. I love working on challenging projects that push me to improve my skills and stay updated with the latest technologies.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${isDark ? 'bg-cyan-500/20' : 'bg-blue-100'}`}>
                  <span className={`text-lg font-bold ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Frontend Development</h4>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>React, Vue, Tailwind CSS, Responsive Design</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${isDark ? 'bg-cyan-500/20' : 'bg-blue-100'}`}>
                  <span className={`text-lg font-bold ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Backend Development</h4>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Node.js, Express, MongoDB, API Design</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${isDark ? 'bg-cyan-500/20' : 'bg-blue-100'}`}>
                  <span className={`text-lg font-bold ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Tools & Technologies</h4>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Git, Docker, AWS, PostgreSQL, Redis</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className={`p-8 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-2 ${
                  isDark 
                    ? 'bg-gray-900 border border-gray-700 hover:border-cyan-500/50' 
                    : 'bg-white border border-gray-200 hover:border-blue-500/50'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${isDark ? 'bg-cyan-500/20' : 'bg-blue-100'}`}>
                  <Icon className={`w-6 h-6 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`} />
                </div>
                <h4 className="text-xl font-bold mb-3">{highlight.title}</h4>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{highlight.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;