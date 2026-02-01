// Projects.jsx - مع جميع المشاريع من السيرة الذاتية
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Globe, Users, Clock, Award, Zap, Code, ChevronRight, Sparkles, Phone, Building, Shield, Car, Home, ShoppingCart, Cloud, ClipboardCheck, Heart, Lock, MessageSquare, BookOpen, GraduationCap, Database, Server, Cpu } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const projects = [
    {
      id: 1,
      title: 'SafeHer Reporting Platform',
      status: 'completed',
      year: '2025',
      type: ['team', 'bootcamp', 'frontend', 'training'],
      category: 'web',
      description: 'Secure anonymous reporting system with multilingual support, emergency features, and encrypted communications for women safety. Award-winning project from Women Techsters Bootcamp.',
      tags: ['React', 'JavaScript', 'HTML5', 'CSS3', 'REST APIs', 'Team Project', 'Women Safety', 'Bootcamp'],
      metrics: {
        'Award': '🏆 Top Project',
        'Languages': '3',
        'Type': 'Bootcamp'
      },
      links: {
        live: 'https://safeher-ten.vercel.app',
        github: '#'
      },
      icon: '🛡️',
      iconComponent: <Shield className="w-8 h-8" />,
      gradient: 'bg-gradient-to-br from-pink-500/20 via-rose-600/15 to-red-500/10',
      role: 'Frontend Developer',
      duration: '6 weeks',
      company: 'Women Techsters Bootcamp',
      highlights: [
        'Multilingual support (3 languages)',
        'Secure anonymous reporting system',
        'Top Final Project Award'
      ],
      award: true,
      training: true
    },
    {
      id: 2,
      title: 'CityPhone Platform',
      status: 'completed',
      year: '2025-2026',
      type: ['team', 'frontend', 'professional','freelance'],
      category: 'web',
      description: 'Cross-functional Agile team project focusing on e-commerce platform. Led performance optimization, reduced page load time by ~40% through refactored state management and centralized API calls.',
      tags: ['React', 'TypeScript', 'TailwindCSS', 'REST APIs', 'Git', 'Agile/Scrum', 'Performance', 'State Management'],
      metrics: {
        'Load Time': '-40%',
        'Team Size': 'Agile Team',
        'Duration': '3 Months'
      },
      links: {
        live: 'https://cityphone.sa7ret-elqalam.blog/ar/login',
        admin: 'https://system.cityphonesa.com/dashboard'
      },
      icon: '📱',
      iconComponent: <Phone className="w-8 h-8" />,
      gradient: 'bg-gradient-to-br from-blue-500/20 via-blue-600/15 to-cyan-500/10',
      role: 'Frontend Developer',
      duration: '3 months',
      company: 'Professional Project',
      highlights: [
        'Performance optimization after identifying bottlenecks',
        'Reduced unnecessary re-renders',
        'Collaborated with backend for API alignment'
      ]
    },
    {
      id: 3,
      title: 'MedTek Health Platform',
      status: 'completed',
      year: '2025',
      type: ['freelance', 'fullstack', 'team','frontend'],
      category: 'web',
      description: 'Large-scale healthcare marketplace with distributed team. Integrated RESTful APIs, implemented interactive dashboards, and fixed critical token scope issues.',
      tags: ['React', 'TypeScript', 'REST APIs', 'Charts', 'Git', 'UI/UX', 'Dashboards'],
      metrics: {
        'Team Size': '5 Members',
        'Data Errors': '-50%',
        'Duration': '4 Months'
      },
      links: {
        live: 'https://medtek.sa7ret-elqalam.blog',
        admin: 'https://med-tek.abaadre.com/admin/dashboard'
      },
      icon: '🩺',
      iconComponent: <Heart className="w-8 h-8" />,
      gradient: 'bg-gradient-to-br from-green-500/20 via-emerald-600/15 to-teal-500/10',
      role: 'Frontend Developer',
      duration: '4 months',
      company: 'Freelance',
      highlights: [
        'Advanced UX features for product creation',
        'Fixed critical token scope issue',
        'Interactive business dashboards'
      ]
    },
    {
      id: 4,
      title: 'Orion Design Engineering',
      status: 'completed',
      year: '2025',
      type: ['freelance', 'frontend', 'team'],
      category: 'web',
      description: 'Corporate website with responsive design. Translated Figma to React components, implemented lazy loading and image optimization.',
      tags: ['React', 'JavaScript', 'HTML5', 'CSS3', 'REST APIs', 'Figma', 'Performance'],
      metrics: {
        'Team Size': '3 Members',
        'Load Time': 'Optimized',
        'Experience': 'First API'
      },
      links: {
        live: 'https://oriondesigning.com'
      },
      icon: '🏢',
      iconComponent: <Building className="w-8 h-8" />,
      gradient: 'bg-gradient-to-br from-purple-500/20 via-purple-600/15 to-pink-500/10',
      role: 'Frontend Developer',
      duration: '2 months',
      company: 'Freelance',
      highlights: [
        'First professional REST API consumption',
        'Image optimization & lazy loading',
        'Client-driven requirements'
      ]
    },
    {
      id: 5,
      title: 'Car Rental Management System',
      status: 'completed',
      year: '2024-2025',
      type: ['fullstack', 'backend', 'personal'],
      category: 'backend',
      description: 'Full-stack system with cars, bookings, and user management. Optimized database queries, improved booking processing by 25%.',
      tags: ['Laravel', 'MySQL', 'RESTful APIs', 'Authentication', 'Database', 'Full Stack', 'Blade'],
      metrics: {
        'Processing': '+25%',
        'Backend': 'Laravel',
        'Database': 'MySQL'
      },
      links: {
        github: '#',
        demo: '#'
      },
      icon: '🚗',
      iconComponent: <Car className="w-8 h-8" />,
      gradient: 'bg-gradient-to-br from-orange-500/20 via-amber-600/15 to-yellow-500/10',
      role: 'Full Stack Developer',
      duration: 'Project',
      company: 'Personal Project',
      highlights: [
        'Optimized database queries',
        'RESTful APIs with authentication',
        'Role-based access control'
      ]
    },
    {
      id: 6,
      title: 'Re7lty API 2 & Qiem API 2',
      status: 'completed',
      year: '2025',
      type: ['backend', 'training', 'api'],
      category: 'backend',
      description: 'Backend API development and optimization during Huma-volve training. Improved server response time by 30%, integrated third-party services.',
      tags: ['Laravel', 'API Development', 'Optimization', 'Integration', 'REST', 'Production'],
      metrics: {
        'Response Time': '+30%',
        'Experience': 'Production-like',
        'Services': '3rd Party'
      },
      links: {
        documentation: '#',
        github: '#'
      },
      icon: '🏠',
      iconComponent: <Home className="w-8 h-8" />,
      gradient: 'bg-gradient-to-br from-red-500/20 via-rose-600/15 to-pink-500/10',
      role: 'Backend Developer',
      duration: '3 months',
      company: 'Huma-volve Training',
      highlights: [
        'API response time improved by 30%',
        'Third-party service integration',
        'Production edge cases handling'
      ],
      training: true
    },
    // {
    //   id: 7,
    //   title: 'Freelance Projects - Upwork',
    //   status: 'active',
    //   year: '2025-Present',
    //   type: ['freelance', 'frontend'],
    //   category: 'web',
    //   description: 'Multiple freelance projects on Upwork using React, JavaScript, Bootstrap. Translated client requirements into technical tasks.',
    //   tags: ['React', 'JavaScript', 'Bootstrap', 'HTML5', 'CSS3', 'Freelance', 'Client'],
    //   metrics: {
    //     'Projects': 'Multiple',
    //     'Platform': 'Upwork',
    //     'Client': 'Various'
    //   },
    //   links: {
    //     upwork: '#',
    //     portfolio: '#'
    //   },
    //   icon: '💼',
    //   iconComponent: <ClipboardCheck className="w-8 h-8" />,
    //   gradient: 'bg-gradient-to-br from-indigo-500/20 via-violet-600/15 to-purple-500/10',
    //   role: 'Frontend Developer',
    //   duration: 'Ongoing',
    //   company: 'Upwork Freelance',
    //   highlights: [
    //     'Client requirement analysis',
    //     'Independent task management',
    //     'Business needs delivery'
    //   ]
    // },
    {
      id: 8,
      title: 'Frontend Development Training - RTC',
      status: 'completed',
      year: '2024',
      type: ['training', 'frontend', 'education'],
      category: 'web',
      description: 'Comprehensive training in frontend development covering HTML5, CSS3, JavaScript and React.js fundamentals.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Training', 'Fundamentals'],
      metrics: {
        'Skills': '4 Core',
        'Level': 'Beginner-Intermediate',
        'Type': 'Training'
      },
      links: {
        certificate: '#',
        materials: '#'
      },
      icon: '📚',
      iconComponent: <BookOpen className="w-8 h-8" />,
      gradient: 'bg-gradient-to-br from-cyan-500/20 via-sky-600/15 to-blue-500/10',
      role: 'Trainee',
      duration: 'Course',
      company: 'RTC Training',
      highlights: [
        'HTML5 & CSS3 fundamentals',
        'JavaScript programming',
        'React.js basics'
      ],
      training: true
    },
    {
      id: 9,
      title: 'Backend Development - UN Women Scholarship',
      status: 'completed',
      year: '2024',
      type: ['training', 'backend', 'education'],
      category: 'backend',
      description: 'Advanced Laravel training covering MVC architecture, authentication, RESTful APIs, PHP fundamentals, and MySQL basics.',
      tags: ['Laravel', 'PHP', 'MySQL', 'MVC', 'Authentication', 'REST APIs'],
      metrics: {
        'Focus': 'Advanced Laravel',
        'Scholarship': 'UN Women',
        'Topics': '6+'
      },
      links: {
        certificate: '#',
        materials: '#'
      },
      icon: '🎓',
      iconComponent: <GraduationCap className="w-8 h-8" />,
      gradient: 'bg-gradient-to-br from-emerald-500/20 via-teal-600/15 to-green-500/10',
      role: 'Scholarship Student',
      duration: 'Course',
      company: 'UN Women Program',
      highlights: [
        'Advanced Laravel concepts',
        'MVC architecture',
        'RESTful API development'
      ],
      training: false
    },
    // {
    //   id: 10,
    //   title: 'C Programming - Gammal Tech',
    //   status: 'completed',
    //   year: '2024',
    //   type: ['training', 'fundamentals', 'education'],
    //   category: 'fundamentals',
    //   description: 'Fundamental programming concepts and C language training covering algorithms, data structures, and problem-solving.',
    //   tags: ['C Programming', 'Algorithms', 'Data Structures', 'Fundamentals'],
    //   metrics: {
    //     'Language': 'C',
    //     'Focus': 'Fundamentals',
    //     'Provider': 'Gammal Tech'
    //   },
    //   links: {
    //     certificate: '#',
    //     materials: '#'
    //   },
    //   icon: '⚙️',
    //   iconComponent: <Cpu className="w-8 h-8" />,
    //   gradient: 'bg-gradient-to-br from-gray-500/20 via-gray-600/15 to-slate-500/10',
    //   role: 'Student',
    //   duration: 'Course',
    //   company: 'Gammal Tech',
    //   highlights: [
    //     'Programming fundamentals',
    //     'C language syntax',
    //     'Problem-solving skills'
    //   ],
    //   training: true
    // },
    // {
    //   id: 11,
    //   title: 'Database Management - MySQL',
    //   status: 'completed',
    //   year: '2024-2025',
    //   type: ['backend', 'database', 'skills'],
    //   category: 'backend',
    //   description: 'Practical experience with MySQL database design, optimization, query writing, and integration with Laravel applications.',
    //   tags: ['MySQL', 'Database', 'Queries', 'Optimization', 'Laravel'],
    //   metrics: {
    //     'Experience': 'Practical',
    //     'Integration': 'Laravel',
    //     'Focus': 'Optimization'
    //   },
    //   links: {
    //     projects: '#',
    //     documentation: '#'
    //   },
    //   icon: '💾',
    //   iconComponent: <Database className="w-8 h-8" />,
    //   gradient: 'bg-gradient-to-br from-amber-500/20 via-orange-600/15 to-red-500/10',
    //   role: 'Developer',
    //   duration: 'Ongoing',
    //   company: 'Skill Development',
    //   highlights: [
    //     'Database design',
    //     'Query optimization',
    //     'Laravel integration'
    //   ]
    // }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'frontend', label: 'Frontend', icon: <Code className="w-4 h-4" /> },
    { id: 'backend', label: 'Backend', icon: <Cloud className="w-4 h-4" /> },
    
    { id: 'team', label: 'Team Projects', icon: <Users className="w-4 h-4" /> },
    { id: 'freelance', label: 'Freelance', icon: <Award className="w-4 h-4" /> },
    { id: 'training', label: 'Training', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'bootcamp', label: 'Bootcamp', icon: <GraduationCap className="w-4 h-4" /> }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => 
        project.type.includes(filter) || project.category === filter
      );

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 lg:mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">Professional & Training Portfolio</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 animate-gradient">Projects & Training</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive portfolio showcasing professional projects, training programs, and skill development
          </p>
        </motion.div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 lg:mb-12"
        >
          {[
            { label: 'Total Projects', value: '11+', color: 'text-blue-400', icon: <Award className="w-4 h-4" /> },
            { label: 'Performance Gain', value: 'Up to 40%', color: 'text-green-400', icon: <Zap className="w-4 h-4" /> },
            { label: 'Team Projects', value: '5+', color: 'text-purple-400', icon: <Users className="w-4 h-4" /> },
            { label: 'Training Programs', value: '4+', color: 'text-yellow-400', icon: <BookOpen className="w-4 h-4" /> }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-blue-500/30 transition-all group">
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-2 rounded-lg ${stat.color.replace('text-', 'bg-')}/20`}>
                  {stat.icon}
                </div>
                <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
              </div>
              <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 lg:mb-12"
        >
          {filters.map((filterItem) => (
            <button
              key={filterItem.id}
              onClick={() => setFilter(filterItem.id)}
              className={`group relative px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 overflow-hidden flex items-center gap-2 ${
                filter === filterItem.id
                  ? 'text-white shadow-lg shadow-blue-900/30'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                {filterItem.icon}
                {filterItem.label}
                {filter === filterItem.id && (
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></div>
                )}
              </span>
              {filter === filterItem.id && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </>
              )}
              {filter !== filterItem.id && (
                <div className="absolute inset-0 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors"></div>
              )}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-0.5 rounded-2xl blur opacity-0 group-hover:opacity-70 transition duration-500 ${
                hoveredCard === project.id ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : ''
              }`}></div>
              
              {/* Award Badge */}
              {project.award && (
                <div className="absolute -top-2 -right-2 z-20">
                  <div className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full text-xs font-bold text-white flex items-center gap-1 shadow-lg">
                    <Sparkles className="w-3 h-3" />
                    Award Winner
                  </div>
                </div>
              )}

              {/* Training Badge */}
              {project.training && (
                <div className="absolute -top-2 -left-2 z-20">
                  <div className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-xs font-bold text-white flex items-center gap-1 shadow-lg">
                    <BookOpen className="w-3 h-3" />
                    Training
                  </div>
                </div>
              )}
              
              {/* Project Card */}
              <div className="relative bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:border-blue-500/50 transition-all duration-500 h-full flex flex-col group-hover:shadow-2xl group-hover:shadow-blue-900/20">
                
                {/* Project Header */}
                <div className={`relative h-40 overflow-hidden ${project.gradient} p-6`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
                  </div>
                  
                  {/* Header Content */}
                  <div className="relative h-full flex flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                          <div className="text-white">
                            {project.iconComponent}
                          </div>
                        </div>
                        <div>
                          <div className="px-3 py-1 bg-black/40 backdrop-blur-sm rounded-full text-xs text-gray-300 mb-2">
                            {project.company}
                          </div>
                          <h3 className="text-lg font-bold text-white leading-tight">{project.title}</h3>
                        </div>
                      </div>
                      
                      {/* Status Badge */}
                      <div className={`px-2 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                        project.status === 'active'
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : project.training
                          ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                          : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      }`}>
                        {project.status === 'active' ? '🚀' : project.training ? '📚' : '✅'}
                      </div>
                    </div>
                    
                    {/* Year & Role */}
                    <div className="flex justify-between items-center">
                      <div className="text-xs text-gray-300">
                        {project.role}
                      </div>
                      <div className="px-2 py-1 bg-black/50 backdrop-blur-sm rounded text-xs text-white border border-white/10">
                        {project.year}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex-grow">
                  {/* Description */}
                  <p className="text-gray-300 text-xs mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 4).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs rounded-lg bg-gray-800/50 text-gray-300 border border-gray-700/50 hover:border-blue-500/50 hover:text-blue-300 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-1 text-xs rounded-lg bg-gray-800/30 text-gray-500 border border-gray-700/30">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-700/50">
                    {Object.entries(project.metrics).map(([key, value], idx) => (
                      <div key={idx} className="text-center group/metric">
                        <div className="text-sm font-bold text-white mb-0.5 group-hover/metric:text-blue-400 transition-colors">
                          {value}
                        </div>
                        <div className="text-xs text-gray-400 group-hover/metric:text-gray-300 transition-colors truncate">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer with Links */}
                <div className="p-4 pt-0">
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                    <div className="flex items-center gap-2">
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg text-xs font-medium text-white transition-all duration-300 shadow shadow-blue-900/30"
                        >
                          <Globe className="w-3 h-3" />
                          Live
                          <ChevronRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                        </a>
                      )}
                      {project.links.admin && (
                        <a
                          href={project.links.admin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg border border-gray-700/50 hover:border-blue-500/50 text-xs text-gray-300 hover:text-white transition-all"
                        >
                          Admin
                        </a>
                      )}
                      {project.links.certificate && (
                        <a
                          href={project.links.certificate}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 rounded-lg text-xs font-medium text-white transition-all duration-300 shadow shadow-purple-900/30"
                        >
                          <BookOpen className="w-3 h-3" />
                          Certificate
                          <ChevronRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                        </a>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-1">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg border border-gray-700/50 hover:border-blue-500/50 transition-all group/github"
                          aria-label="GitHub"
                        >
                          <Github className="w-4 h-4 text-gray-400 group-hover/github:text-white transition-colors" />
                        </a>
                      )}
                      <button 
                        className="p-1.5 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg border border-gray-700/50 hover:border-blue-500/50 transition-all group/details"
                        aria-label="View Details"
                      >
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover/details:text-blue-400 transition-colors" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12 lg:mt-16"
        >
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Comprehensive Developer Journey</h3>
            <p className="text-gray-300 mb-6">
              This portfolio showcases my journey from training programs to professional projects, 
              highlighting continuous learning and practical application of skills.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group relative px-8 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all overflow-hidden shadow-lg shadow-blue-900/30">
              <span className="relative flex items-center gap-2">
                View Detailed Case Studies
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <a 
              href="#contact"
              className="group relative px-8 py-3.5 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-gray-300 hover:text-white font-semibold rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all overflow-hidden"
            >
              <span className="relative flex items-center gap-2">
                Contact for Collaboration
                <MessageSquare className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Add custom styles for animations */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .bg-grid {
          background-image: linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Projects;