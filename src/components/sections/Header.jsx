import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { AiFillHome } from "react-icons/ai";
import { FaInfoCircle, FaTools, FaHandshake, FaLaptopCode } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsSun, BsMoon } from "react-icons/bs";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const navigate = useNavigate();
  const location = useLocation();

  // دالة للتنقل إلى القسم المحدد
  const handleNavigation = (section) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {  
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <header className={`fixed top-0 left-0 w-full z-50 bg-[#34495E]/90 dark:bg-[#181824]/90 shadow-md transition-all duration-300 ${          isScrolled ? 'h-16' : 'h-20'
      }`}>
      <div className={`w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between transition-all duration-300 ${
        isScrolled ? 'h-16' : 'h-20'
      }`}>
        
        <div className={`text-white dark:text-gray-200 hover:text-[#2C3E50] font-medium transition-colors duration-300 relative group ${
          isScrolled ? 'text-xl md:text-2xl' : 'text-xl md:text-2xl'
        } ml-2 md:ml-6`}>
          Ebrahim-Portfolio
        </div>
{/* 
        <div className={`text-white dark:text-gray-200 hover:text-[#2C3E50] font-medium transition-colors duration-300 relative group ${
          isScrolled ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'
        } ml-2 md:ml-6`}>
          Suhil-Portfolio
        </div> */}




        <div className="flex items-center gap-8">
          <button
            className="text-2xl text-gray-400 hover:text-[#2C3E50] transition md:hidden"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <BsMoon className="w-6 h-6" /> : <BsSun className="w-6 h-6" />}
          </button>
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => handleNavigation('home')} className="text-white dark:text-gray-200 hover:text-[#2C3E50] font-medium transition-colors duration-300 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2C3E50] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => handleNavigation('about')} className="text-white dark:text-gray-200 hover:text-[#2C3E50] font-medium transition-colors duration-300 relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2C3E50] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => handleNavigation('experience')} className="text-white dark:text-gray-200 hover:text-[#2C3E50] font-medium transition-colors duration-300 relative group">
              Experience
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2C3E50] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => handleNavigation('skills')} className="text-white dark:text-gray-200 hover:text-[#2C3E50] font-medium transition-colors duration-300 relative group">
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2C3E50] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => handleNavigation('tools')} className="text-white dark:text-gray-200 hover:text-[#2C3E50] font-medium transition-colors duration-300 relative group">
              Tools
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2C3E50] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => handleNavigation('services')} className="text-white dark:text-gray-200 hover:text-[#2C3E50] font-medium transition-colors duration-300 relative group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2C3E50] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => handleNavigation('projects')} className="text-white dark:text-gray-200 hover:text-[#2C3E50] font-medium transition-colors duration-300 relative group">
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2C3E50] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => handleNavigation('contact')} className="text-white dark:text-gray-200 hover:text-[#2C3E50] font-medium transition-colors duration-300 relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2C3E50] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              className="ml-4 text-2xl text-gray-400 hover:text-[#2C3E50] transition"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <BsMoon className="w-6 h-6" /> : <BsSun className="w-6 h-6" />}
            </button>
          </nav>
        </div>
      </div>
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-white/90 dark:bg-[#181824]/90 rounded-2xl shadow-lg flex justify-between items-center px-6 py-2 w-[90%] max-w-md md:hidden z-50">
        <button onClick={() => handleNavigation('home')} className="text-2xl text-gray-700 dark:text-gray-200 hover:text-[#2C3E50] transition-colors"><AiFillHome /></button>
        <button onClick={() => handleNavigation('about')} className="text-2xl text-gray-700 dark:text-gray-200 hover:text-[#2C3E50] transition-colors"><FaInfoCircle /></button>
        <button onClick={() => handleNavigation('experience')} className="text-2xl text-gray-700 dark:text-gray-200 hover:text-[#2C3E50] transition-colors"><FaLaptopCode /></button>
        <button onClick={() => handleNavigation('skills')} className="text-2xl text-gray-700 dark:text-gray-200 hover:text-[#2C3E50] transition-colors"><FaTools /></button>
        <button onClick={() => handleNavigation('tools')} className="text-2xl text-gray-700 dark:text-gray-200 hover:text-[#2C3E50] transition-colors"><FaTools /></button>
        <button onClick={() => handleNavigation('services')} className="text-2xl text-gray-700 dark:text-gray-200 hover:text-[#2C3E50] transition-colors"><FaHandshake /></button>
        <button onClick={() => handleNavigation('projects')} className="text-2xl text-gray-700 dark:text-gray-200 hover:text-[#2C3E50] transition-colors"><FaLaptopCode /></button>
        <button onClick={() => handleNavigation('contact')} className="text-2xl text-gray-700 dark:text-gray-200 hover:text-[#2C3E50] transition-colors"><MdEmail /></button>
      </nav>
    </header>
  )
}
export default Header