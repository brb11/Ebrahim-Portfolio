import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const socials = [
  { 
    href: 'https://www.facebook.com/share/19MBHHQ6Kd/', 
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H6v4h4v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
    ),
    label: 'Facebook'
  },
  { 
    href: 'https://github.com/brb11/brb11', 
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
    label: 'Github'
  },
  { 
    href: 'https://wa.me/+967734050875', 
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
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Logo and Social Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Ebrahim F. Basha
            </h3>
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

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <button onClick={() => handleNavigation('home')} className="hover:text-white transition-colors duration-300 text-sm">Home</button>
            <button onClick={() => handleNavigation('about')} className="hover:text-white transition-colors duration-300 text-sm">About</button>
            <button onClick={() => handleNavigation('skills')} className="hover:text-white transition-colors duration-300 text-sm">Skills</button>
            <button onClick={() => handleNavigation('services')} className="hover:text-white transition-colors duration-300 text-sm">Services</button>
            <button onClick={() => handleNavigation('projects')} className="hover:text-white transition-colors duration-300 text-sm">Projects</button>
            <button onClick={() => handleNavigation('contact')} className="hover:text-white transition-colors duration-300 text-sm">Contact</button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-end">
            <div className="space-y-2">
              <p className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                brhoombasha111@gmail.com
              </p>
              <p className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Yemen (Temporary)
              </p>
              <p className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Available 24/7
              </p>
            </div>
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