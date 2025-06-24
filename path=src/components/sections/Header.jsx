import React, { useState, useEffect } from 'react'
import { AiFillHome, AiOutlineUser, AiOutlineFundProjectionScreen, AiOutlineMail, AiOutlineAppstore, AiOutlineTool } from "react-icons/ai";

const navLinks = [
  { name: 'Home', href: '#home', icon: <AiFillHome /> },
  { name: 'About', href: '#about', icon: <AiOutlineUser /> },
  { name: 'Skills', href: '#skills', icon: <AiOutlineTool /> },
  { name: 'Services', href: '#services', icon: <AiOutlineAppstore /> },
  { name: 'Projects', href: '#projects', icon: <AiOutlineFundProjectionScreen /> },
  { name: 'Contact', href: '#contact', icon: <AiOutlineMail /> },
];

function Header() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-[#181824]/90 backdrop-blur shadow-sm transition-all duration-300">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Left: Logo/Name */}
        <div className="text-2xl md:text-3xl font-extrabold text-[#6c63ff] tracking-wide select-none">
          Portfolio
        </div>
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl text-gray-700 dark:text-gray-200 hover:text-[#6c63ff] transition"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
          <button
            className="ml-4 text-2xl text-gray-400 hover:text-[#6c63ff] transition"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </nav>
        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-2xl text-gray-500"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        {/* Mobile Nav Drawer */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black/40 z-50 flex">
            <div className="bg-white dark:bg-[#181824] w-64 p-6 flex flex-col gap-6 shadow-lg">
              <button
                className="self-end text-2xl mb-4"
                onClick={() => setMenuOpen(false)}
              >
                ×
              </button>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 dark:text-gray-200 font-medium hover:text-[#6c63ff] transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button
                className="mt-4 text-2xl text-gray-400 hover:text-[#6c63ff] transition"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {theme === 'light' ? '🌙' : '☀️'}
              </button>
            </div>
            <div className="flex-1" onClick={() => setMenuOpen(false)} />
          </div>
        )}
      </div>
      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-white/80 dark:bg-[#181824]/80 rounded-2xl shadow-lg px-6 py-2 flex gap-6 z-50 md:hidden">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-2xl text-gray-500 dark:text-gray-300 hover:text-[#6c63ff] transition"
            aria-label={link.name}
          >
            {link.icon}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Header 