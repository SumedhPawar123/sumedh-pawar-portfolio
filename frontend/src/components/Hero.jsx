import React from 'react';
import { ArrowRight, Computer, Link, Mail } from 'lucide-react';

const Hero = ({ isDark }) => {
  return (
    <section id="hero" className={`min-h-screen flex items-center justify-center ${isDark ? 'bg-gray-900' : 'bg-white'} relative overflow-hidden`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 left-10 w-72 h-72 ${isDark ? 'bg-cyan-500' : 'bg-blue-400'} opacity-20 rounded-full blur-3xl animate-pulse`}></div>
        <div className={`absolute bottom-10 right-10 w-72 h-72 ${isDark ? 'bg-blue-500' : 'bg-cyan-400'} opacity-20 rounded-full blur-3xl animate-pulse`}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center md:text-left animate-fadeInUp">
            <div className="mb-6 inline-block md:inline">
              <span className={`px-4 py-2 rounded-full text-sm font-semibold ${isDark ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'bg-blue-100 text-blue-600 border border-blue-300'}`}>
                Welcome to my portfolio
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm <span className={`${isDark ? 'bg-gradient-to-r from-cyan-400 to-blue-500' : 'bg-gradient-to-r from-blue-600 to-cyan-500'} bg-clip-text text-transparent`}>Sumedh Pawar</span>
            </h1>

            <p className={`text-xl md:text-2xl mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Full-Stack Developer | Creative Problem Solver | Tech Enthusiast
            </p>

            <p className={`text-lg mb-8 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
              I build modern web applications with React, Node.js, and cloud technologies. Passionate about creating beautiful, functional, and performant digital experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center md:justify-start">
              <button className={`px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                isDark 
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/50' 
                  : 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-lg hover:shadow-blue-500/50'
              }`}>
                View My Work <ArrowRight size={20} />
              </button>
              <a href="#contact" className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                isDark 
                  ? 'border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10' 
                  : 'border-2 border-blue-500 text-blue-600 hover:bg-blue-50'
              }`}>
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="#" className={`p-3 rounded-full transition-all duration-300 ${isDark ? 'bg-gray-800 text-cyan-400 hover:bg-gray-700 hover:text-white' : 'bg-gray-100 text-blue-600 hover:bg-gray-200'}`}>
                <Computer size={24} />
              </a>
              <a href="#" className={`p-3 rounded-full transition-all duration-300 ${isDark ? 'bg-gray-800 text-cyan-400 hover:bg-gray-700 hover:text-white' : 'bg-gray-100 text-blue-600 hover:bg-gray-200'}`}>
                <Link size={24} />
              </a>
              <a href="#" className={`p-3 rounded-full transition-all duration-300 ${isDark ? 'bg-gray-800 text-cyan-400 hover:bg-gray-700 hover:text-white' : 'bg-gray-100 text-blue-600 hover:bg-gray-200'}`}>
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="flex justify-center animate-fadeInDown">
            <div className={`relative w-80 h-80 rounded-2xl overflow-hidden border-4 ${isDark ? 'border-cyan-500/30' : 'border-blue-300'} shadow-2xl`}>
              {/* Placeholder for profile image */}
              <div className={`w-full h-full ${isDark ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-100 to-gray-200'} flex items-center justify-center`}>
                <div className="text-center">
                  {/* <svg
                    className={`w-32 h-32 mx-auto ${isDark ? 'text-gray-700' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  <p className={`mt-4 text-sm ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
                    Update with your photo
                  </p> */}
                  <img src="../../public/profile.png" alt="my-profile" />
                </div>
              </div>

              {/* Decorative elements */}
              <div className={`absolute -top-2 -right-2 w-24 h-24 rounded-full ${isDark ? 'bg-cyan-500/20' : 'bg-blue-400/20'} blur-2xl`}></div>
              <div className={`absolute -bottom-2 -left-2 w-24 h-24 rounded-full ${isDark ? 'bg-blue-500/20' : 'bg-cyan-400/20'} blur-2xl`}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className={`w-6 h-6 ${isDark ? 'text-cyan-400' : 'text-blue-500'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;