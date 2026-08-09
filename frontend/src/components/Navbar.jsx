import React, { useState } from 'react';
import { Menu, X, Sun, Moon, Download } from 'lucide-react';

const Navbar = ({ isDark, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];


  const handleResumeDownload = () => {
    // Update this URL with your actual resume URL
    const resumeUrl = '/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'My_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className={`fixed w-full top-0 z-50 ${isDark ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-md border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <div className={`w-10 h-10 rounded-full ${isDark ? 'bg-gradient-to-br from-cyan-400 to-blue-500' : 'bg-gradient-to-br from-blue-500 to-cyan-400'} flex items-center justify-center`}>
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className={`text-xl font-bold hidden sm:inline ${isDark ? 'text-white' : 'text-gray-900'}`}>Portfolio</span>
          </a>

          <h1>Sumedh</h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`transition-colors duration-300 ${isDark ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-600 hover:text-blue-600'}`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            {/* Resume Download Button */}
            <button
              onClick={handleResumeDownload}
              className={`hidden sm:flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                isDark 
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/50' 
                  : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-blue-500/50'
              }`}
            >
              <Download size={18} />
              <span className="text-sm font-medium">Resume</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors duration-300 ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden pb-4 ${isDark ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`block px-4 py-2 rounded transition-colors duration-300 ${isDark ? 'text-gray-300 hover:text-cyan-400 hover:bg-gray-700' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                handleResumeDownload();
                setIsMenuOpen(false);
              }}
              className={`w-full mt-2 mx-4 flex items-center justify-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                isDark 
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white' 
                  : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
              }`}
            >
              <Download size={18} />
              <span>Download Resume</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;