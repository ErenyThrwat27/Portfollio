import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Code, 
  Shield, 
  Zap, 
  Cpu,
  TrendingUp,
  Layers,
  Lock,
  Activity,
  Heart,
  Calendar,
  Award,
  Users
} from 'lucide-react'

const About = () => {
  const stats = [
    { 
      number: 15, 
      label: 'Projects Completed', 
      suffix: '+', 
      animate: true,
      icon: <Code className="w-6 h-6" />,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    { 
      number: 1, 
      label: 'Years Experience', 
      suffix: '+', 
      animate: false,
      icon: <Calendar className="w-6 h-6" />,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10'
    },
    { 
      number: 100, 
      label: 'Client Satisfaction', 
      suffix: '%', 
      animate: true,
      icon: <Heart className="w-6 h-6" />,
      color: 'text-red-400',
      bgColor: 'bg-red-500/10'
    },
    { 
      number: 12, 
      label: 'Technologies Mastered', 
      suffix: '+', 
      animate: true,
      icon: <Cpu className="w-6 h-6" />,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10'
    },
  ]

  const [counters, setCounters] = useState([0, 0, 0, 0])
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const animateCounters = () => {
      stats.forEach((stat, index) => {
        if (stat.animate) {
          let startValue = 0
          const endValue = stat.number
          const duration = 1500
          const incrementTime = Math.floor(duration / endValue)
          
          const counter = setInterval(() => {
            startValue += 1
            setCounters(prev => {
              const newCounters = [...prev]
              newCounters[index] = startValue
              return newCounters
            })
            
            if (startValue >= endValue) {
              clearInterval(counter)
            }
          }, incrementTime)
        }
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            animateCounters()
          }
        })
      },
      { threshold: 0.3 }
    )

    const statsElement = document.querySelector('#stats-container')
    if (statsElement) {
      observer.observe(statsElement)
    }

    return () => {
      if (statsElement) {
        observer.unobserve(statsElement)
      }
    }
  }, [hasAnimated])

  const principles = [
    {
      title: 'Clean Architecture',
      desc: 'Scalable, maintainable code following best practices',
      icon: <Layers className="w-8 h-8" />,
      color: 'from-blue-500/20 to-blue-700/20',
      iconColor: 'text-blue-400',
      borderColor: 'border-blue-500/20'
    },
    {
      title: 'Secure Systems',
      desc: 'Robust authentication and data protection',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-green-500/20 to-green-700/20',
      iconColor: 'text-green-400',
      borderColor: 'border-green-500/20'
    },
    {
      title: 'API Integration',
      desc: 'Seamless third-party and RESTful API connections',
      icon: <Cpu className="w-8 h-8" />,
      color: 'from-purple-500/20 to-purple-700/20',
      iconColor: 'text-purple-400',
      borderColor: 'border-purple-500/20'
    },
    {
      title: 'Performance',
      desc: 'Optimized applications with real-time capabilities',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-orange-500/20 to-orange-700/20',
      iconColor: 'text-orange-400',
      borderColor: 'border-orange-500/20'
    },
  ]

  return (
    <section id="about" className="py-20">
      <div className="flex items-center gap-3 mb-12">
        <div className="bg-gradient-to-br from-primary to-cyan-400 p-3 rounded-xl">
          <Users className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-4xl font-bold">About Me</h2>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-12">
        {/* النص */}
        <div className="space-y-6">
  <p className="text-gray-300 leading-relaxed">
    Full Stack Developer with <strong>1+ year</strong> of hands-on professional experience 
    within collaborative development teams, building <strong>scalable and production-ready web applications</strong> 
    using <strong>React, TypeScript, TailwindCSS, Laravel, PHP, and MySQL</strong>.
  </p>
  <p className="text-gray-300 leading-relaxed">
    Experienced in <strong>optimizing application performance</strong>, developing 
    <strong> secure authentication systems</strong>, designing <strong>RESTful APIs</strong>, 
    integrating <strong>third-party services</strong>, and building <strong>real-time dashboards</strong>.
  </p>
  <p className="text-gray-300 leading-relaxed">
    Proven ability to <strong>solve real-world technical challenges</strong> and deliver 
    <strong> high-quality, user-focused solutions</strong> through Agile team-based development.
  </p>
  <p className="text-gray-300 leading-relaxed">
    Selected from <strong>10,000+ global applicants</strong> for the 
    <strong> Women Techsters Bootcamp 2025</strong> — a testament to my technical 
    capabilities and dedication to growth in the tech industry.
  </p>
  <p className="text-gray-300 leading-relaxed">
    Passionate about creating <strong>efficient, scalable solutions</strong> that solve real-world 
    problems while maintaining clean code architecture and exceptional user experiences.
  </p>
</div>
        
        {/* الإحصاءات */}
        <div id="stats-container" className="grid grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-colors"
            >
              <div className={`inline-flex items-center justify-center p-3 rounded-lg ${stat.bgColor} mb-4`}>
                <div className={stat.color}>
                  {stat.icon}
                </div>
              </div>
              
              <div className="text-3xl font-bold text-white mb-2">
                {stat.animate 
                  ? (hasAnimated ? counters[index] : 0)
                  : stat.number
                }{stat.suffix}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* المبادئ */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        {principles.map((principle, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white/5 to-transparent 
                      p-6 rounded-xl border border-white/10
                      hover:transform hover:-translate-y-1 transition-all duration-300
                      hover:shadow-lg hover:shadow-blue-500/10"
          >
            {/* الأيقونة */}
            <div className={`inline-flex items-center justify-center p-3 rounded-lg 
                          bg-gradient-to-br ${principle.color} mb-4 border ${principle.borderColor}`}>
              <div className={principle.iconColor}>
                {principle.icon}
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-3 text-white">{principle.title}</h3>
            <p className="text-gray-400">{principle.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default About