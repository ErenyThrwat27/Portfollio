import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = 80; 
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementTop - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const handleLetsTalk = () => {
    const contact = document.querySelector('#contact');
    if (contact) {
      const navbarHeight = 80;
      const elementTop = contact.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementTop - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // SVG كـ React component
  const LogoIcon = () => (
    <svg 
      width="40" 
      height="40" 
      viewBox="0 0 100 100" 
      className="rounded-full border-2 border-dark"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      
      <rect width="100" height="100" rx="15" fill="url(#logoGradient)" />
      
      <path 
        d="M25,25 L75,25 L75,35 L35,35 L35,50 L65,50 L65,60 L35,60 L35,75 L75,75 L75,85 L25,85 Z" 
        fill="white"
      />
    </svg>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg shadow-lg animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Name مع SVG */}
          <div className="flex items-center space-x-0.5">
            <LogoIcon />
            <span className="text-3xl font-heading font-bold text-dark">
              reny
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-gray-600 hover:text-dark font-medium text-lg transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={handleLetsTalk}
              className="px-8 py-3 bg-dark text-white font-semibold rounded-full hover:bg-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 transform"
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-dark hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-20 bg-white shadow-xl transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? 'opacity-100 translate-y-0 visible'
            : 'opacity-0 -translate-y-4 invisible'
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="block py-3 px-4 text-gray-700 hover:text-dark hover:bg-gray-50 rounded-lg text-lg font-medium transition-colors"
            >
              {item.name}
            </a>
          ))}
          <button
            onClick={() => {
              handleLetsTalk();
              setIsMenuOpen(false);
            }}
            className="w-full mt-4 px-6 py-3 bg-dark text-white font-semibold rounded-lg hover:bg-primary transition-colors duration-300"
          >
            Let's Talk
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
