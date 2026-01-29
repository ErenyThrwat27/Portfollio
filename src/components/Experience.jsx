import React from 'react'
import { motion } from 'framer-motion'
import { 
  Briefcase,
  Calendar,
  MapPin,
  GraduationCap,
  Award,
  Code,
  Users,
  Star,
  TrendingUp,
  ChevronRight,
  Zap,
  Target,
  Sparkles,
  Globe,
  Database,
  Smartphone,
  Heart,
  Cpu,
  BookOpen,
  Laptop
} from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Full Stack Developer',
      company: 'Freelance',
      period: 'Jan 2025 - Present',
      location: 'Remote',
      highlights: ['15+ Projects', 'RESTful APIs', 'Modern UI/UX', 'Database Design', 'DevOps'],
      icon: <Briefcase className="w-5 h-5" />,
      color: 'border-blue-500/40',
      bgColor: 'bg-gradient-to-br from-blue-500/10 to-cyan-500/10',
      accentColor: 'text-blue-400',
      projects: [
        { name: 'MedTek Health Platform', category: 'Health Tech', icon: <Heart className="w-3 h-3" /> },
        { name: 'Orion Design Engineering', category: 'Engineering', icon: <Globe className="w-3 h-3" /> },
        { name: 'E-commerce Platform (cityphone)', category: 'E-commerce', icon: <Smartphone className="w-3 h-3" /> },
        { name: 'Smart Pharm', category: 'Pharmacy', icon: <Database className="w-3 h-3" /> }
      ]
    },
    {
      id: 2,
      title: 'Tech4Dev WT Bootcamp',
      company: 'Women Techsters Bootcamp Cohort 4.1',
      period: 'NOV 2025',
      location: 'Tech4Dev Program',
      highlights: ['Frontend Development', 'UI/UX Design', 'Project Management', 'Mentorship'],
      icon: <Laptop className="w-5 h-5" />,
      color: 'border-purple-500/40',
      bgColor: 'bg-gradient-to-br from-purple-500/10 to-pink-500/10',
      accentColor: 'text-purple-400',
      projects: [
        { name: 'SafeHer Reporting Platform', category: 'Social Impact', icon: <Users className="w-3 h-3" /> }
      ]
    },
    {
      id: 3,
      title: 'Backend Developer Trainee',
      company: 'Huma-Volve',
      period: 'Mar 2025',
      location: 'Intensive Training Program',
      highlights: ['API Development', 'Team Collaboration', 'Agile Projects', 'Code Review'],
      icon: <Users className="w-5 h-5" />,
      color: 'border-indigo-500/40',
      bgColor: 'bg-gradient-to-br from-indigo-500/10 to-purple-500/10',
      accentColor: 'text-indigo-400',
      projects: [
        { name: 'Qiem API 2', category: 'E-commerce API', icon: <Code className="w-3 h-3" /> },
        { name: 'Re7lty API 2', category: 'Real Estate API', icon: <Code className="w-3 h-3" /> }
      ]
    },
    {
      id: 4,
      title: 'Bachelor of Science',
      company: 'Faculty of Science, Assiut University',
      period: 'Oct 2020 - Jun 2024',
      location: 'Assiut, Egypt',
      highlights: ['Honors Graduate', 'Tech Clubs', 'Research Projects', 'Academic Excellence'],
      icon: <Award className="w-5 h-5" />,
      color: 'border-emerald-500/40',
      bgColor: 'bg-gradient-to-br from-emerald-500/10 to-teal-500/10',
      accentColor: 'text-emerald-400'
    }
  ]

  const technicalSkills = [
    {
      category: 'Frontend Development',
      skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux'],
      color: 'from-blue-500/20 to-cyan-500/20',
      border: 'border-blue-500/30',
      icon: <Code className="w-5 h-5 text-blue-400" />
    },
    {
      category: 'Backend Development',
      skills: ['Node.js', 'Express.js', 'Python', 'REST APIs', 'MongoDB'],
      color: 'from-indigo-500/20 to-purple-500/20',
      border: 'border-indigo-500/30',
      icon: <Database className="w-5 h-5 text-indigo-400" />
    },
    {
      category: 'Tools & Technologies',
      skills: ['Git/GitHub', 'Docker', 'AWS', 'Firebase', 'PostgreSQL'],
      color: 'from-emerald-500/20 to-teal-500/20',
      border: 'border-emerald-500/30',
      icon: <Cpu className="w-5 h-5 text-emerald-400" />
    }
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="mb-16 text-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-gradient-to-r from-primary/10 to-cyan-500/10 rounded-full border border-primary/20"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Professional Journey</span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-white to-cyan-400 bg-clip-text text-transparent">
            Career Growth & Experience
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl">
            My journey through development, learning, and professional milestones
          </p>
        </motion.div>
      </div>

      {/* Timeline Section */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-indigo-500 to-emerald-500 transform -translate-x-1/2"></div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`relative group ${index % 2 === 0 ? 'lg:pr-1/2 lg:pl-0' : 'lg:pl-1/2 lg:pr-0'} px-4 lg:px-0`}
            >
              {/* Timeline Dot */}
              <div className="hidden lg:block absolute top-6 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-dark rounded-full border-4 border-primary z-10 group-hover:scale-125 group-hover:border-cyan-400 transition-all duration-300">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-primary to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content Card */}
              <div className={`relative ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}>
                {/* Card Shadow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-cyan-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                
                <div className={`relative ${exp.bgColor} border ${exp.color} rounded-2xl p-6 backdrop-blur-sm hover:border-primary/60 transition-all duration-500 group-hover:scale-[1.02]`}>
                  {/* Card Header */}
                  <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-start lg:items-center justify-between gap-4 mb-6`}>
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl ${exp.bgColor} border ${exp.color} group-hover:scale-110 transition-transform duration-300`}>
                        <div className={exp.accentColor}>
                          {exp.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <span className="text-gray-300">{exp.company}</span>
                          <div className="flex items-center gap-1 text-gray-500 text-sm">
                            <MapPin className="w-3 h-3 flex-shrink-0" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={`flex items-center gap-2 text-sm ${exp.accentColor} bg-gradient-to-r ${exp.bgColor} px-4 py-2 rounded-full border ${exp.color}`}>
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className={`flex ${index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'} flex-wrap gap-2 mb-6`}>
                    {exp.highlights.map((highlight, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                        viewport={{ once: true }}
                        className="px-3 py-1.5 bg-white/5 backdrop-blur-sm rounded-lg text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300 border border-white/10"
                      >
                        {highlight}
                      </motion.span>
                    ))}
                  </div>

                  {/* Project Highlights */}
                  {exp.projects && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      whileInView={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="mt-6 pt-6 border-t border-white/10"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Target className="w-4 h-4 text-gray-400" />
                          <span className="text-sm font-medium text-gray-300">
                            {exp.id === 1 ? 'Featured Projects:' : 
                             exp.id === 2 ? 'Bootcamp Project:' : 
                             exp.id === 3 ? 'Training Projects:' : 'Key Projects:'}
                          </span>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-primary transition-colors duration-300" />
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {exp.projects.map((project, idx) => (
                          <div
                            key={idx}
                            className="group/project relative p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300"
                          >
                            <div className="flex items-start gap-3">
                              <div className={`p-2 rounded-lg ${exp.bgColor} ${exp.color} border`}>
                                <div className={exp.accentColor}>
                                  {project.icon}
                                </div>
                              </div>
                              <div className="flex-1">
                                <h4 className="font-medium text-white text-sm mb-1">{project.name}</h4>
                                <div className="flex items-center gap-2">
                                  <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-gray-300">
                                    {project.category}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Technical Skills Section */}
      {/* <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <div className="text-start mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <Zap className="w-5 h-5 text-cyan-400" />
            <h3 className="text-2xl font-bold">Technical Expertise</h3>
          </div>
          <p className="text-gray-400 max-w-2xl">
            Technologies and tools I work with across full-stack development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {technicalSkills.map((skillCategory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${skillCategory.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className={`relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border ${skillCategory.border} hover:border-opacity-60 transition-all duration-500`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${skillCategory.color}`}>
                    {skillCategory.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white">{skillCategory.category}</h4>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skillCategory.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-white/5 text-gray-300 text-sm rounded-lg hover:bg-white/10 hover:text-white transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div> */}

      {/* Skills Summary */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-20 grid md:grid-cols-3 gap-6"
      >
        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative p-6 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-900/10 to-transparent backdrop-blur-sm hover:border-blue-400/40 transition-all duration-500">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Briefcase className="w-6 h-6 text-blue-400" />
            </div>
            <h4 className="text-lg font-bold mb-3">Full-Stack Development</h4>
            <p className="text-gray-400 text-sm">End-to-end development with modern frameworks, scalable architectures, and cloud deployment</p>
          </div>
        </div>

        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative p-6 rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-900/10 to-transparent backdrop-blur-sm hover:border-purple-400/40 transition-all duration-500">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Laptop className="w-6 h-6 text-purple-400" />
            </div>
            <h4 className="text-lg font-bold mb-3">Professional Training</h4>
            <p className="text-gray-400 text-sm">Formal training in frontend development through structured bootcamps and fellowship programs</p>
          </div>
        </div>

        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative p-6 rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-900/10 to-transparent backdrop-blur-sm hover:border-emerald-400/40 transition-all duration-500">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <BookOpen className="w-6 h-6 text-emerald-400" />
            </div>
            <h4 className="text-lg font-bold mb-3">Continuous Learning</h4>
            <p className="text-gray-400 text-sm">Always expanding skills through training, certifications, and staying updated with latest technologies</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Experience