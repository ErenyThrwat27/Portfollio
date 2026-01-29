import { ArrowDown } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import heroBg from '/src/assets/images/rm373batch2-09.jpg'
import DownloadCVButton from './DownloadCVButton';

// استيراد الأيقونات - تأكد من تثبيت react-icons: npm install react-icons
import { 
  SiLaravel, SiPhp, SiMysql, SiReact, SiTypescript, 
  SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiGit, 
  SiGithub, SiPostman, SiJira 
} from 'react-icons/si';
import { FaCode, FaKey, FaDatabase, FaMobileAlt, FaProjectDiagram } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';
import { CgWebsite } from 'react-icons/cg';

const Hero = () => {
  const techStack = [
    // Backend
    { name: 'Laravel', icon: <SiLaravel className="text-red-500" />, category: 'backend' },
    { name: 'PHP', icon: <SiPhp className="text-purple-500" />, category: 'backend' },
    { name: 'MySQL', icon: <SiMysql className="text-blue-500" />, category: 'backend' },
    { name: 'RESTful APIs', icon: <TbApi className="text-green-500" />, category: 'backend' },
    { name: 'Authentication', icon: <FaKey className="text-yellow-500" />, category: 'backend' },
    { name: 'Authorization', icon: <FaKey className="text-orange-500" />, category: 'backend' },
    { name: 'CRUD Operations', icon: <FaDatabase className="text-cyan-500" />, category: 'backend' },
    
    // Frontend
    { name: 'React', icon: <SiReact className="text-cyan-400" />, category: 'frontend' },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" />, category: 'frontend' },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" />, category: 'frontend' },
    { name: 'HTML5', icon: <SiHtml5 className="text-orange-500" />, category: 'frontend' },
    { name: 'CSS3', icon: <SiCss3 className="text-blue-500" />, category: 'frontend' },
    { name: 'TailwindCSS', icon: <SiTailwindcss className="text-teal-400" />, category: 'frontend' },
    { name: 'Responsive Design', icon: <FaMobileAlt className="text-pink-500" />, category: 'frontend' },
    
    // Tools & Practices
    { name: 'Git', icon: <SiGit className="text-orange-600" />, category: 'tools' },
    { name: 'GitHub', icon: <SiGithub className="text-gray-800 dark:text-gray-200" />, category: 'tools' },
    { name: 'Postman', icon: <SiPostman className="text-orange-500" />, category: 'tools' },
    { name: 'Apidog', icon: <TbApi className="text-purple-600" />, category: 'tools' },
    { name: 'Jira', icon: <SiJira className="text-blue-500" />, category: 'tools' },
    { name: 'API Integration', icon: <FaProjectDiagram className="text-green-600" />, category: 'tools' },
    { name: 'Agile/Scrum', icon: <CgWebsite className="text-indigo-500" />, category: 'tools' }
  ];
  
  const titles = [
    'Full Stack Engineer',
    'Frontend Developer',
    'Backend Developer'
  ]
  
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [showAllTech, setShowAllTech] = useState(false)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [titles.length])
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // التقنيات المعروضة بناءً على حجم الشاشة
  const displayedTech = isMobile && !showAllTech 
    ? techStack.slice(0, 8) 
    : techStack

  return (
    <motion.section
       id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* طبقة تظليل متدرجة */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent pointer-events-none z-0" />
      
      {/* طبقة إضافية للظلام في الأسفل */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-0" />

      <div className="w-full max-w-6xl mx-auto relative z-10 py-12 md:py-0">
        {/* العنوان الرئيسي */}
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }}
        >
          <h1 className="text-4xl pt-12 md:pt-40 sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white">
            HI, I'M <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400 inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >Ereny Thrwat</motion.span>
          </h1>
        </motion.div>
        
        {/* العنوان المتغير */}
        <div className="relative h-12 md:h-14 mb-8 md:mb-8">
          <AnimatePresence mode="wait">
            <motion.h2
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute text-xl sm:text-2xl md:text-3xl text-gray-200 font-medium"
            >
              {titles[currentIndex]}
            </motion.h2>
          </AnimatePresence>
        </div>
        
        {/* الوصف */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9, ease: "easeOut" }}
          className="text-base md:text-xl text-gray-300 max-w-3xl mb-8 md:mb-8 leading-relaxed"
        >
          Full Stack Developer specializing in building modern web applications with Laravel, React, and TypeScript. 
          Passionate about creating scalable solutions and exceptional user experiences.
        </motion.p>
        
        {/* التقنيات */}
        <motion.div 
          className="mb-8 md:mb-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h3 className="text-gray-300 mb-3 md:mb-4 text-sm md:text-base font-medium">
            Technologies I work with:
          </h3>
          
          <div className="flex flex-wrap gap-2 md:gap-3">
            {displayedTech.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ scale: 0, opacity: 0, rotate: -10 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ 
                  delay: 0.7 + (index * 0.03), 
                  type: "spring", 
                  stiffness: 150, 
                  damping: 12, 
                  mass: 0.5 
                }}
                whileHover={{ 
                  scale: 1.08, 
                  y: -4, 
                  backgroundColor: "rgba(59, 130, 246, 0.25)", 
                  borderColor: "rgba(59, 130, 246, 0.6)", 
                  transition: { duration: 0.2, ease: "easeOut" } 
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:border-blue-400 cursor-default select-none text-gray-100 font-medium transition-all duration-200 shadow-sm"
                title={tech.name}
              >
                <span className="text-base md:text-lg">{tech.icon}</span>
                <span className="hidden sm:inline">{tech.name}</span>
              </motion.span>
            ))}
          </div>
          
          {/* زر عرض المزيد/القليل للموبايل */}
          {isMobile && techStack.length > 8 && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              onClick={() => setShowAllTech(!showAllTech)}
              className="mt-3 px-4 py-1.5 text-xs bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-gray-300 hover:bg-white/15 hover:text-white transition-all duration-200"
            >
              {showAllTech ? 'Show Less' : `+${techStack.length - 8} More`}
            </motion.button>
          )}
        </motion.div>
        
        {/* الأزرار */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-12 md:mb-20"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.9, ease: "easeOut" }}
        >
          <motion.a
            whileHover={{ 
              scale: 1.08, 
              y: -4, 
              boxShadow: "0 20px 40px -15px rgba(59, 130, 246, 0.4)" 
            }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            href="#projects"
            className="px-8 py-3 sm:px-10 sm:py-4 bg-primary hover:bg-blue-800 text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 text-center text-base sm:text-lg shadow-lg shadow-blue-500/30"
          >
            View Projects
          </motion.a>
          
          {/* <motion.a
            whileHover={{ 
              scale: 1.08, 
              y: -4, 
              boxShadow: "0 20px 40px -15px rgba(255, 255, 255, 0.15)" 
            }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            href="#contact"
            className="px-8 py-3 sm:px-10 sm:py-4 bg-transparent border border-gray-300 hover:border-white text-gray-300 hover:text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 text-center text-base sm:text-lg"
          >
            Contact Me
          </motion.a> */}

          <DownloadCVButton 
    variant="outline" 
    className="px-8 py-3 sm:px-10 sm:py-4"
  />
        </motion.div>
        
        {/* رمز التمرير - يظهر فقط على الشاشات المتوسطة والكبيرة */}
        <motion.div 
          className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
          animate={{ y: [0, 12, 0] }}
          transition={{ 
            repeat: Infinity, 
            duration: 2.5, 
            ease: "easeInOut", 
            times: [0, 0.5, 1] 
          }}
        >
          <ArrowDown className="w-8 h-8 text-gray-300/70" />
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Hero