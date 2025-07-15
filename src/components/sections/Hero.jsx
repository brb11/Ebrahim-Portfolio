import React from 'react';
import myImage from '../../assets/porf_image.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center bg-transparent px-6 md:px-12 py-16 gap-10 relative overflow-hidden transition-colors duration-300 pt-24 md:pt-0">
      
      {/* خلفية متحركة */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#2C3E50]/5 dark:bg-[#2C3E50]/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#2C3E50]/5 dark:bg-[#2C3E50]/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      {/* محتوى النص */}
      <div className="flex-1 flex flex-col items-center justify-center text-center h-full relative z-10">
        <h2 className="text-sm md:text-base text-[#7f8c8d] dark:text-[#bdc3c7] font-semibold mb-2 tracking-widest opacity-0 slide-up animation-delay-200">
          Hello, I'm
        </h2>
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#2C3E50] dark:text-white mb-3 leading-tight opacity-0 slide-up animation-delay-400">
          Ebrahim F. Basha
        </h1>
        <h3 className="text-lg md:text-2xl text-[#2C3E50] dark:text-[#bdc3c7] font-semibold mb-5 opacity-0 slide-up animation-delay-600">
          IT Engineer
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-7 max-w-md text-sm md:text-base leading-relaxed opacity-0 slide-up animation-delay-800">
        Specialized in back-end development and database management.
I have hands-on experience in building flexible, high-performance technical solutions using tools like Node.js, PHP, PostgreSQL, Docker, and K8s.
I constantly strive to explore and apply the latest technologies to achieve tangible results and drive continuous improvement and innovation.        </p>

        {/* الأزرار */}
        <div className="flex flex-col sm:flex-row gap-3 mb-5 w-full sm:w-auto opacity-0 slide-up animation-delay-1000 justify-center">
          <a
            href="/Ebrahim F. Basha - CV.pdf"
            download
            className="px-8 py-3 rounded-full bg-[#2C3E50] text-white font-bold shadow-lg hover:bg-[#34495E] transition-all duration-300 hover:scale-105 text-sm md:text-base text-center"
          >
            Download CV
          </a>
          <a
            href="#about"
            className="px-8 py-3 rounded-full border-2 border-[#2C3E50] text-[#2C3E50] dark:text-[#bdc3c7] font-bold hover:bg-[#2C3E50] hover:text-white transition-all duration-300 hover:scale-105 text-sm md:text-base text-center"
          >
            About Me
          </a>
        </div>

        {/* الأيقونات الاجتماعية */}
        <div className="flex gap-4 justify-center opacity-0 slide-up animation-delay-1200">
          <a href="#" className="text-[#2C3E50] dark:text-[#bdc3c7] hover:text-[#34495E] transition text-2xl md:text-3xl hover:scale-110">
            <i className="fab fa-github"></i>
          </a>
          <a href="#" className="text-[#2C3E50] dark:text-[#bdc3c7] hover:text-[#34495E] transition text-2xl md:text-3xl hover:scale-110">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

      {/* الصورة الشخصية */}
      <div className="flex-1 flex justify-center items-center relative z-10">
        <div className="relative group opacity-0 fade-in">
          <img
            src={myImage}
            alt="avatar"
            className="rounded-full w-48 h-48 md:w-80 md:h-80 object-cover border-4 border-white dark:border-[#1a2530] shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:rotate-3"
          />
          <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#2C3E50]/20 to-[#34495E]/20 dark:from-[#2C3E50]/30 dark:to-[#34495E]/30 blur-2xl z-[-1] animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;