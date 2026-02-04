import './App.css'
import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Navbar from './components/Navbar'
import Experience from './components/Experience'
import Contact from './components/contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop' 
import Certifications from './components/Certifications' 

function App() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // محاكاة تحميل تدريجي
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setLoading(false), 300)
          return 100
        }
        return prev + 10
      })
    }, 150)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Loader */}
      {loading && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-950">
          
          
          
          {/* الجزء الثاني: الدوائر في المنتصف */}
          <div className="mb-8">
            <div className="relative w-32 h-32">
              {/* الدائرة الخارجية */}
              <div className="absolute inset-0 border border-blue-500/30 rounded-full animate-spin-slow" />
              
              {/* النقاط الثلاث */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full shadow-lg shadow-blue-500/50" />
              </div>
              <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2">
                <div className="w-5 h-5 bg-gradient-to-br from-indigo-500 to-blue-400 rounded-full shadow-lg shadow-indigo-500/50" />
              </div>
              <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2">
                <div className="w-5 h-5 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-lg shadow-cyan-500/50" />
              </div>
              
              {/* نقطة مركزية */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-8 h-8 bg-gradient-to-br from-white to-gray-300 rounded-full animate-ping" />
              </div>
            </div>
          </div>

          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Ereny Tharwat Naseef
            </h2>
            <p className="text-gray-400 mt-1">Portfolio is Loading</p>
          </div>
          
          {/* الجزء الثالث: شريط التقدم في الأسفل */}
          <div className="text-center">
            <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden mx-auto mb-2">
              <div className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 animate-progress" />
            </div>
            {/* <p className="text-sm text-gray-400">{progress}%</p> */}
          </div>

          <style>{`
            @keyframes spin-slow {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            @keyframes progress {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(100%); }
            }
            @keyframes gradient {
              0%, 100% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
            }
            .animate-spin-slow {
              animation: spin-slow 3s linear infinite;
            }
            .animate-progress {
              animation: progress 1.5s ease-in-out infinite;
            }
            .animate-gradient {
              animation: gradient 3s ease infinite;
            }
          `}</style>
        </div>
      )}
      
      {/* المحتوى الرئيسي */}
      <div className={`transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <div className="min-h-screen bg-gradient-to-b from-dark to-gray-900 text-white">
          <Navbar/>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Certifications /> 
            <Contact />
            <ScrollToTop /> 
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
