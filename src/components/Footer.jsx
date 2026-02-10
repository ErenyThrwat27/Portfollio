import React from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  Code,
  Calendar,
  ExternalLink,
  Github,
  Mail,
  MessageCircle,
  MapPin,
  Cpu
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // إعدادات واتساب
  const whatsappNumber = "+201227333061";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}`;

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      url: 'https://github.com/erenythrwat27',
      color: 'hover:text-white hover:bg-gray-800',
      bgColor: 'bg-gray-900'
    },
    {
      name: 'LinkedIn',
      icon: <ExternalLink className="w-5 h-5" />,
      url: 'https://www.linkedin.com/in/ereny-thrwat-745629320/',
      color: 'hover:text-blue-400 hover:bg-blue-900/50',
      bgColor: 'bg-gray-900'
    },
    {
      name: 'WhatsApp',
      icon: <MessageCircle className="w-5 h-5" />,
      url: whatsappUrl,
      color: 'hover:text-green-400 hover:bg-green-900/50',
      bgColor: 'bg-gray-900',
      badge: true
    },
    {
      name: 'Email',
      icon: <Mail className="w-5 h-5" />,
      url: 'mailto:ereny.thrwat27@gmail.com',
      color: 'hover:text-red-400 hover:bg-red-900/50',
      bgColor: 'bg-gray-900'
    }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      // حساب الموقع مع تعويض ارتفاع النافبار
      const navbarHeight = 80; // نفس ارتفاع النافبار
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementTop - navbarHeight;

      // استخدام window.scrollTo مع behavior smooth
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const technologies = [
    'PHP',
    'Laravel',
    'JavaScript',
    'React.js',
    'Tailwind CSS',
    'TypeScript'
  ];

  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-b from-gray-900/50 to-black mt-4">
      {/* Wave Design */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-cyan-400 opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-primary to-cyan-400 rounded-lg">
                <Code className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                  Ereny Tharwat
                </h3>
                <p className="text-gray-400 text-sm">Full Stack Developer</p>
              </div>
            </div>
            
            <p className="text-gray-500 text-sm leading-relaxed">
              Building modern web applications with cutting-edge technologies. 
              Passionate about creating efficient, scalable solutions.
            </p>
            
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <MapPin className="w-4 h-4" />
              <span>AL Minya, Egypt</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white flex items-center gap-2">
              <Cpu className="w-5 h-5 text-blue-400" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center gap-2 group cursor-pointer"
                  >
                    <div className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Technologies */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-gray-800/50 text-gray-300 rounded-full text-xs border border-gray-700 hover:border-blue-500/50 hover:text-blue-300 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="pt-4">
              <h4 className="text-lg font-semibold text-white mb-3">Connect</h4>
              <div className="flex gap-3">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-xl ${link.bgColor} ${link.color} border border-gray-800 transition-all duration-300 relative`}
                    aria-label={link.name}
                  >
                    {link.icon}
                    {link.badge && (
                      <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
                    )}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-600 text-sm">
              © {currentYear} Ereny Tharwat. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Built with <Heart className="w-3 h-3 text-red-500 inline mx-1 animate-pulse" /> 
              and passion in Minya
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Calendar className="w-4 h-4" />
              <span>1+ Year Experience</span>
            </div>
            
            <div className="text-gray-500 text-sm">
              <span className="text-blue-400">v1.0</span>
              <span className="mx-2">•</span>
              Last updated: <span className="text-blue-400">Feb 2026</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-4 right-4 opacity-10">
        <Code className="w-24 h-24" />
      </div>
    </footer>
  );
};

export default Footer;