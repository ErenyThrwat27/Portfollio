import { ArrowDown, Mail, Phone, MapPin, Calendar, Sparkles, Code, Server, Zap, ChevronRight, MessageSquare, Download, Award, Users, Target, ChevronRight as ChevronRightIcon } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

// استيراد الأيقونات
import { 
  SiLaravel, SiPhp, SiMysql, SiReact, SiTypescript, 
  SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiGit, 
  SiGithub, SiPostman, SiJira
} from 'react-icons/si';

const Hero = () => {
  // References للحركات
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  // التأثير الكتابي للعناوين
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ['Full Stack Developer', 'Laravel Expert', 'React Specialist', 'Problem Solver'];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setDisplayedText(
        isDeleting
          ? fullText.substring(0, displayedText.length - 1)
          : fullText.substring(0, displayedText.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && displayedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, loopNum]);

  // نقاط التميز
  // const highlights = [
  //   {
  //     icon: <Zap className="w-5 h-5" />,
  //     title: 'Performance Focused',
  //     description: 'Optimized applications with measurable impact',
  //     color: 'from-yellow-500/10 to-amber-500/5',
  //     border: 'border-yellow-500/20',
  //     iconColor: 'text-yellow-400'
  //   },
  //   {
  //     icon: <Award className="w-5 h-5" />,
  //     title: 'Award-Winning',
  //     description: 'Selected from 10,000+ applicants',
  //     color: 'from-green-500/10 to-emerald-500/5',
  //     border: 'border-green-500/20',
  //     iconColor: 'text-green-400'
  //   },
  //   {
  //     icon: <Target className="w-5 h-5" />,
  //     title: 'Results Driven',
  //     description: 'Delivering measurable business value',
  //     color: 'from-blue-500/10 to-blue-600/5',
  //     border: 'border-blue-500/20',
  //     iconColor: 'text-blue-400'
  //   },
  //   {
  //     icon: <Users className="w-5 h-5" />,
  //     title: 'Team Player',
  //     description: 'Experienced in Agile team environments',
  //     color: 'from-purple-500/10 to-purple-600/5',
  //     border: 'border-purple-500/20',
  //     iconColor: 'text-purple-400'
  //   }
  // ];

  // التأثيرات الحركية
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 12 }
    }
  };

  // تنزيل السيرة الذاتية
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Ereny_Thrwat_CV.pdf';
    link.download = 'Ereny_Thrwat_Full_Stack_Developer.pdf';
    link.click();
  };

  return (
    <section 
      ref={ref}
      id="home" 
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"
    >
      {/* خلفية متحركة متطورة */}
      <div className="absolute inset-0 overflow-hidden">
        {/* تأثيرات بلوب متحركة */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-cyan-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        
        {/* شبكة خلفية */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]"></div>
        
        {/* خطوط متحركة */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
        </div>
      </div>

      {/* محتوى رئيسي */}
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="w-full max-w-7xl mx-auto py-12 lg:py-20"
        >
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* العمود الأيسر */}
            <div className="lg:col-span-7">
              <motion.div variants={itemVariants} className="mb-8">
                {/* Badge - متاح للعمل */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 via-blue-500/10 to-cyan-500/20 border border-blue-500/30 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 animate-pulse"></div>
                    <span className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                      Available for Opportunities
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* العنوان الرئيسي */}
              <motion.div variants={itemVariants} className="mb-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                  <span className="block text-gray-300">Hello, I'm</span>
                  <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-[length:200%_auto] animate-gradient">
                    Ereny Thrwat
                  </span>
                </h1>
              </motion.div>

              {/* العنوان المتحرك */}
              <motion.div variants={itemVariants} className="mb-8">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold min-h-[3.5rem]">
                  <span className="text-gray-400">I'm a </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 ml-2">
                    {displayedText}
                  </span>
                  <span className="ml-1 w-1 h-12 bg-cyan-400 inline-block animate-pulse"></span>
                </div>
              </motion.div>

              {/* الوصف */}
              <motion.div variants={itemVariants} className="mb-10">
                <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
                  Passionate Full Stack Developer specializing in building scalable web applications 
                  with <span className="text-blue-300 font-medium">Laravel</span> and <span className="text-cyan-300 font-medium">React</span>. 
                  I transform complex problems into elegant, high-performance solutions that deliver exceptional user experiences.
                </p>
              </motion.div>

              {/* إشارة للتقنيات */}
              <motion.div variants={itemVariants} className="mb-8">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-gray-900/50 to-gray-950/50 border border-gray-800/50 backdrop-blur-sm">
                  <ChevronRightIcon className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">
                    Expert in modern web technologies including <span className="text-blue-300">Laravel</span>, <span className="text-cyan-300">React</span>, 
                    <span className="text-purple-300"> TypeScript</span>, and full-stack development
                  </span>
                </div>
              </motion.div>

              {/* نقاط التميز */}
              {/* <motion.div variants={itemVariants} className="mb-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {highlights.map((highlight, index) => (
                    <div 
                      key={index}
                      className={`p-4 rounded-xl bg-gradient-to-br ${highlight.color} border ${highlight.border} backdrop-blur-sm hover:scale-[1.02] transition-transform duration-300`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`p-2 rounded-lg ${highlight.border}`}>
                          <div className={highlight.iconColor}>
                            {highlight.icon}
                          </div>
                        </div>
                        <h4 className="font-semibold text-white">{highlight.title}</h4>
                      </div>
                      <p className="text-sm text-gray-400 pl-11">
                        {highlight.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div> */}

              {/* أزرار CTA */}
              {/* أزرار CTA - النسخة المحسنة للجوال */}
<motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 mb-12">
  {/* زر المشاريع - رئيسي */}
  <motion.a
    href="#projects"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="group relative px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold overflow-hidden flex-1 min-h-[56px] flex items-center justify-center"
  >
    <span className="relative flex items-center justify-center gap-3">
      <Sparkles className="w-5 h-5" />
      <span>View Projects</span>
    </span>
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
  </motion.a>

  {/* زر التواصل - ثانوي */}
  <motion.a
    href="#contact"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold hover:bg-white/20 hover:border-white/30 transition-all flex-1 min-h-[56px] flex items-center justify-center gap-3"
  >
    <MessageSquare className="w-5 h-5 flex-shrink-0" />
    <span>Contact Me</span>
  </motion.a>

  {/* تنزيل السيرة الذاتية - بحد خارجي */}
  <motion.button
    onClick={handleDownloadCV}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-6 py-4 rounded-xl border-2 border-gray-600 hover:border-cyan-500 text-gray-300 hover:text-white transition-all flex-1 min-h-[56px] flex items-center justify-center gap-3"
  >
    <Download className="w-5 h-5 flex-shrink-0" />
    <span>Download CV</span>
  </motion.button>
</motion.div>

{/* CTA للتواصل - تحسين للجوال */}
<motion.div 
  variants={itemVariants}
  className="p-4 sm:p-6 rounded-2xl w-full bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-500/30 backdrop-blur-sm mb-6"
>
  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
    <div className="flex items-center gap-3 mb-3 sm:mb-0">
      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
      <div>
        <h4 className="font-semibold text-white text-sm sm:text-base">Ready to Collaborate?</h4>
        <p className="text-xs sm:text-sm text-gray-400">Let's build something amazing</p>
      </div>
    </div>
    <div className="flex gap-2 w-full sm:w-auto">
      <a 
        href="mailto:ereny.thrwat27@gmail.com"
        className="flex-1 sm:flex-none px-3 sm:px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors min-h-[40px]"
        aria-label="Send Email"
      >
        <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
        <span>Email</span>
      </a>
      <a 
        href="tel:+201227333061"
        className="flex-1 sm:flex-none px-3 sm:px-4 py-2 bg-green-500/20 hover:bg-green-500/30 rounded-lg text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors min-h-[40px]"
        aria-label="Call Me"
      >
        <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
        <span>Call</span>
      </a>
    </div>
  </div>
</motion.div>

              
            </div>

            {/* العمود الأيمن */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-6"
              >
                {/* بطاقة التقنيات */}
                <div className="p-8 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800/50 shadow-2xl">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Code className="w-6 h-6 text-cyan-400" />
                    Tech Stack
                  </h3>
                  
                  <div className="space-y-6">
                    {/* Frontend */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
                        <h4 className="font-semibold text-gray-300">Frontend</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {['React JS', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'TailwindCSS'].map((tech, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 * index }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="px-3 py-2 bg-cyan-500/10 text-cyan-300 rounded-lg text-sm font-medium border border-cyan-500/20 hover:border-cyan-500/40 transition-all cursor-default"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Backend */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse"></div>
                        <h4 className="font-semibold text-gray-300">Backend</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {['Laravel', 'PHP', 'MySQL', 'REST APIs', 'Authentication'].map((tech, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 * index + 0.1 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="px-3 py-2 bg-red-500/10 text-red-300 rounded-lg text-sm font-medium border border-red-500/20 hover:border-red-500/40 transition-all cursor-default"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Tools */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                        <h4 className="font-semibold text-gray-300">Tools & Methods</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {['Git', 'GitHub', 'APIdog','Jira', 'Agile/Scrum', 'API Integration'].map((tech, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 * index + 0.2 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="px-3 py-2 bg-green-500/10 text-green-300 rounded-lg text-sm font-medium border border-green-500/20 hover:border-green-500/40 transition-all cursor-default"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* بطاقة التواجد */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/20 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-white mb-1">Currently Available</h4>
                      <p className="text-sm text-cyan-300">For freelance & full-time roles</p>
                    </div>
                    <div className="flex gap-2">
                      <a 
                        href="https://linkedin.com/in/ereny-thrwat-745629320"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                      <a 
                        href="https://github.com/ErenyThrwat27"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                        aria-label="GitHub"
                      >
                        <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                  
                  {/* معلومات سريعة */}
                  <div className="mt-4 pt-4 border-t border-blue-500/20">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="text-center">
                        <div className="text-lg font-bold text-white">1+</div>
                        <div className="text-xs text-gray-400">Years Experience</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-white">15+</div>
                        <div className="text-xs text-gray-400">Projects</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* مؤشر التمرير */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-400">Scroll to explore</span>
          <ArrowDown className="w-6 h-6 text-cyan-400 animate-bounce" />
        </div>
      </motion.div>

      {/* إضافة أنماط CSS مخصصة */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
          background-size: 200% auto;
        }
      `}</style>
    </section>
  );
};

export default Hero;