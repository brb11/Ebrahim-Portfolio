import React from 'react';
import { FaMedal, FaSuitcase, FaHeadset, FaBullseye } from "react-icons/fa";

// Add custom animation styles
const fadeInUpStyle = `
@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fadeInUp {
  animation: fadeInUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
}
`;

const About = () => {
  return (
    <section id="about" className="py-16 bg-transparent transition-colors duration-300">
      <style>{fadeInUpStyle}</style>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#2C3E50] dark:text-[#596d79] mb-16 relative">
          About Me
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <div className="w-full lg:w-1/2" dir="rtl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
              {/* Experience */}
              <div className="bg-[#eaeaea] dark:bg-[#23272f] rounded-2xl shadow-lg p-8 flex flex-col items-center border border-gray-100 dark:border-gray-700 h-full min-h-[120px] animate-fadeInUp hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 transform" style={{animationDelay: '0s'}}>
                <FaMedal className="text-4xl text-[#2C3E50] dark:text-[#bdc3c7] mb-4" />
                <span className="font-bold text-xl text-gray-900 dark:text-gray-100 mb-1 text-center">Experience</span>
                <span className="text-gray-500 dark:text-gray-400 text-base text-center">4 Years </span>
              </div>
              {/* Completed Projects */}
              <div className="bg-[#eaeaea] dark:bg-[#23272f] rounded-2xl shadow-lg p-8 flex flex-col items-center border border-gray-100 dark:border-gray-700 h-full min-h-[120px] animate-fadeInUp hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 transform" style={{animationDelay: '0.12s'}}>
                <FaSuitcase className="text-4xl text-[#2C3E50] dark:text-[#bdc3c7] mb-4" />
                <span className="font-bold text-xl text-gray-900 dark:text-gray-100 mb-1 text-center">Completed </span>
                <span className="text-gray-500 dark:text-gray-400 text-base text-center">7+ Projects</span>
              </div>
              {/* Focus */}
              <div className="bg-[#eaeaea] dark:bg-[#23272f] rounded-2xl shadow-lg p-8 flex flex-col items-center border border-gray-100 dark:border-gray-700 h-full min-h-[120px] animate-fadeInUp hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 transform" style={{animationDelay: '0.24s'}}>
                <FaBullseye className="text-4xl text-[#2C3E50] dark:text-[#bdc3c7] mb-4" />
                <span className="font-bold text-xl text-gray-900 dark:text-gray-100 mb-1 text-center">Focus</span>
                <span className="text-gray-500 dark:text-gray-400 text-base text-center">Quality, Speed, Clean Code</span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-full">
            <div className="bg-[#eaeaea] dark:bg-[#23272f] rounded-2xl shadow-lg p-8 h-full min-h-[220px] flex items-center animate-fadeInUp hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 transform" style={{animationDelay: '0.36s'}}>
              <p className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed text-center w-full">
                With a background in IT and hands-on experience across multiple roles, I have developed a strong ability to bridge business needs with technical solutions. My journey has taken me from database and back-end development to DevOps and infrastructure, allowing me to approach challenges from multiple perspectives. I thrive in collaborative environments, value continuous learning, and am dedicated to delivering reliable, innovative results that drive organizational success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 