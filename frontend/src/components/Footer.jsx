import React from 'react';
import { Computer, Link, ArrowLeftRight , Mail, Heart } from 'lucide-react';

const Footer = ({ isDark }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Computer, href: '#', label: 'Computer' },
    { icon: Link, href: '#', label: 'Link' },
    { icon: ArrowLeftRight , href: '#', label: 'ArrowLeftRight ' },
    { icon: Mail, href: '#', label: 'Email' }
  ];

  return (
    <footer className={`${isDark ? 'bg-gray-900 border-t border-gray-800' : 'bg-gray-50 border-t border-gray-200'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className={`w-10 h-10 rounded-full ${isDark ? 'bg-gradient-to-br from-cyan-400 to-blue-500' : 'bg-gradient-to-br from-blue-500 to-cyan-400'} flex items-center justify-center mb-4`}>
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <h3 className="text-lg font-bold">Portfolio</h3>
            <p className={`text-sm mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Building digital experiences with code
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-center">
              <a href="#about" className={`text-sm transition-colors ${isDark ? 'text-gray-400 hover:text-cyan-400' : 'text-gray-600 hover:text-blue-600'}`}>
                About
              </a>
              <a href="#skills" className={`text-sm transition-colors ${isDark ? 'text-gray-400 hover:text-cyan-400' : 'text-gray-600 hover:text-blue-600'}`}>
                Skills
              </a>
              <a href="#projects" className={`text-sm transition-colors ${isDark ? 'text-gray-400 hover:text-cyan-400' : 'text-gray-600 hover:text-blue-600'}`}>
                Projects
              </a>
              <a href="#contact" className={`text-sm transition-colors ${isDark ? 'text-gray-400 hover:text-cyan-400' : 'text-gray-600 hover:text-blue-600'}`}>
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="font-semibold mb-4">Follow Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    aria-label={link.label}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      isDark
                        ? 'bg-gray-800 text-cyan-400 hover:bg-gray-700 hover:text-white'
                        : 'bg-gray-200 text-blue-600 hover:bg-gray-300 hover:text-blue-700'
                    }`}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={`h-px ${isDark ? 'bg-gray-800' : 'bg-gray-200'} my-8`}></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className={`text-sm flex items-center gap-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Made with <Heart size={16} className="text-red-500" /> © {currentYear} Your Name
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className={`transition-colors ${isDark ? 'text-gray-400 hover:text-cyan-400' : 'text-gray-600 hover:text-blue-600'}`}>
              Privacy Policy
            </a>
            <a href="#" className={`transition-colors ${isDark ? 'text-gray-400 hover:text-cyan-400' : 'text-gray-600 hover:text-blue-600'}`}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;