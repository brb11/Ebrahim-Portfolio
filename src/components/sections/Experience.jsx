import React from 'react';
import { BriefcaseIcon } from '@heroicons/react/24/solid';

const experiences = [
  {
    title: 'Software Engineer (Odoo ERP)',
    company: 'New Vision Co.',
    location: "Riyadh, Saudi Arabia ",
    date: 'Oct 2025 – Present',
  },
  {
    title: 'DBA & Back-End Developer',
    company: 'SOFA Co.',
    location: "Sana'a, Yemen",
    date: 'Jul 2024 – 2025',
  },
  {
    title: 'Back-End Developer',
    company: 'TemmamLight Co.',
    location: "Sana'a, Yemen",
    date: 'Jan – Mar 2024',
  },
  {
    title: 'UX/UI Designer',
    company: 'Devstation Co.',
    location: "Sana'a, Yemen",
    date: 'Aug – Nov 2022',
  },
  {
    title: 'Graphic Designer',
    company: 'Freelance Work',
    location: '',
    date: 'Sept 2023 – 2025',
  },
  {
    title: 'Professional Projects',
    company: "Sana'a University",
    location: "Sana'a, Yemen",
    date: 'Sept 2021 – 2025',
  },
  {
    title: 'Peer Educator & Youth Trainer',
    company: 'Youth Leadership Program & UNICEF',
    location: 'Ibb, Yemen',
    date: 'Feb 2019',
  },
  {
    title: 'Community Awareness Facilitator',
    company: 'Arab Human Rights Foundation',
    location: 'Ibb, Yemen',
    date: 'Feb – Mar 2019',
  },
  {
    title: 'Peer Educator',
    company: 'UNICEF',
    location: 'Ibb, Yemen',
    date: 'May – Aug 2018',
  },
];

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

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-20 min-h-screen bg-gradient-to-br from-[#f7f7fb] to-[#eaeaea] dark:from-[#181824] dark:to-[#23272f]">
      {/* Inject animation keyframes */}
      <style>{fadeInUpStyle}</style>
      <div className="container mx-auto px-2 sm:px-4 max-w-full md:max-w-2xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-[#2C3E50] dark:text-[#bdc3c7] mb-10 md:mb-14 tracking-tight drop-shadow-lg">
          My Experience
        </h2>
        <div className="relative border-l-2 sm:border-l-4 border-[#2C3E50]/20 dark:border-[#bdc3c7]/20 pl-4 sm:pl-8 flex flex-col gap-8 md:gap-10">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`relative group animate-fadeInUp`}
              style={{ animationDelay: `${idx * 0.12}s` }}
            >
              {/* Timeline Dot */}
              <span className="absolute -left-3 sm:-left-5 top-2 w-3 h-3 sm:w-4 sm:h-4 bg-[#2C3E50] dark:bg-[#bdc3c7] rounded-full border-2 sm:border-4 border-white dark:border-[#23272f] shadow-md"></span>
              <div className="bg-white/90 dark:bg-[#23272f]/90 rounded-xl shadow-lg border border-gray-200 dark:border-[#2C3E50]/30 p-4 sm:p-6 hover:scale-[1.03] hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-2 mb-1">
                  <BriefcaseIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#2C3E50] dark:text-[#bdc3c7] opacity-80" />
                  <span className="text-base sm:text-lg font-semibold text-[#2C3E50] dark:text-[#bdc3c7]">{exp.title}</span>
                </div>
                <div className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium">
                  {exp.company}
                  {exp.location && <span className="text-xs sm:text-sm font-normal text-gray-500 dark:text-gray-400"> &nbsp;| {exp.location}</span>}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">{exp.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 