import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const socials = [
  { 
    href: 'https://www.facebook.com/suhil.mohammed.2025?mibextid=ZbWKwL', 
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H6v4h4v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
    ),
    label: 'Facebook'
  },
  { 
    href: 'https://www.linkedin.com/in/suhil-mohammed-309b85324/', 
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.223 0H1.777C.797 0 0 .777 0 1.733v20.534C0 23.223.797 24 1.777 24h20.446c.98 0 1.777-.777 1.777-1.733V1.733C24 .777 23.203 0 22.223 0zM7.433 20.452H3.856V9h3.577v11.452zM5.645 7.433c-1.14 0-2.063-.925-2.063-2.065 0-1.138.923-2.063 2.063-2.063 1.14 0 2.063.925 2.063 2.063 0 1.14-.923 2.065-2.063 2.065zm14.77 13.019h-3.555v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z"/>
      </svg>
    ),
    label: 'LinkedIn'
  },
  { 
    href: 'https://wa.me/+967737775942', 
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
      </svg>
    ),
    label: 'WhatsApp'
  }
];

const Footer = () => {
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

  return (
    <footer className="relative bg-gradient-to-b from-[#2C3E50] to-[#1a2530] dark:from-[#1a2530] dark:to-[#0f172a] text-white py-8 w-full overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGMwLTIuMjA5IDEuNzkxLTQgNC00czQgMS43OTEgNCA0LTEuNzkxIDQtNCA0LTQtMS43OTEtNC00eiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=')]"></div> */}
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative">
        {/* Main Content */}
        <div className="flex flex-col items-center gap-8 mb-8">
          {/* Name */}
          <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Ebrahim F. Basha
          </h3>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <button onClick={() => handleNavigation('home')} className="hover:text-white transition-colors duration-300 text-sm">Home</button>
            <button onClick={() => handleNavigation('about')} className="hover:text-white transition-colors duration-300 text-sm">About</button>
            <button onClick={() => handleNavigation('skills')} className="hover:text-white transition-colors duration-300 text-sm">Skills</button>
            <button onClick={() => handleNavigation('services')} className="hover:text-white transition-colors duration-300 text-sm">Services</button>
            <button onClick={() => handleNavigation('projects')} className="hover:text-white transition-colors duration-300 text-sm">Projects</button>
            <button onClick={() => handleNavigation('contact')} className="hover:text-white transition-colors duration-300 text-sm">Contact</button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socials.map((s, idx) => (
              <a
                key={idx}
                href={s.href}
                className="bg-white/10 hover:bg-white/20 rounded-full p-2.5 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-6 border-t border-white/10">
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} Ebrahim F. Basha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 