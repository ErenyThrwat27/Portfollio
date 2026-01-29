import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Navbar from './components/Navbar'
// import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop' 

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar/>
        <Hero />
        <About />
        {/* <Skills /> */}
        <Projects />
        <Experience />
        <Contact />
        <ScrollToTop /> 
      </div>
      <Footer />
    </div>
  )
}

export default App