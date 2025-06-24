import './App.css'
import { Routes, Route } from 'react-router-dom'
import Projects from './myproject/Projects'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Services from './components/sections/Services'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'
import ForsaJadiduhDetails from './myproject/details_project/forsahjadiduh/forsahjadiduh'
import Header from './components/sections/Header'
import Tools from './components/sections/Tools'
import Experience from './components/sections/Experience'
import SecurityEyeDetails from './myproject/details_project/Security_eye/Security_eye'
import EcommerceBackendDetails from './myproject/details_project/ecommerce_backend'

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-gray-100 dark:bg-[#181824] transition-colors duration-300">
      <Header />
      <main className="flex-1 w-full">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Experience />
              <div id="skills"><Skills /></div>
              <Tools />
              <div id="services"><Services /></div>
              <div id="projects"><Projects /></div>
              <div id="contact"><Contact /></div>
            </>
          } />
          <Route path="/details_project/forsahjadiduh" element={<ForsaJadiduhDetails />} />
          <Route path="/details_project/Security_eye" element={<SecurityEyeDetails />} />
          <Route path="/details_project/ecommerce_backend" element={<EcommerceBackendDetails />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
