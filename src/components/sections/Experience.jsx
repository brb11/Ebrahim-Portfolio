import React from 'react';

const experiences = [
  {
    title: 'DBA & Back-End Developer',
    company: 'SOFA CO.',
    location: 'Sana\'a, Yemen',
    date: 'Jul 2024 - 2025',
  },
  {
    title: 'Back-End Developer',
    company: 'TEMMAMLIGHT CO.',
    location: 'Sana\'a, Yemen',
    date: 'Nov 2023 - 2024',
  },
  {
    title: 'UX/UI Designer',
    company: 'DEVSTATION CO.',
    location: 'Sana\'a, Yemen',
    date: 'Sept 2022 - 2023',
  },
  {
    title: 'Graphic Designer',
    company: 'Freelance Work',
    location: '',
    date: 'Sept 2023 - Now',
  },
  {
    title: 'Professional Projects',
    company: 'Sana\'a University',
    location: 'Sana\'a, Yemen',
    date: 'Sept 2021 - 2025',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 min-h-screen bg-gradient-to-br from-[#f7f7fb] to-[#eaeaea] dark:from-[#181824] dark:to-[#23272f]">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#2C3E50] dark:text-[#bdc3c7] mb-14 tracking-tight drop-shadow-lg">
          My Experience
        </h2>
        <div className="flex flex-col gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="relative bg-white/90 dark:bg-[#23272f]/90 rounded-2xl shadow-xl border border-gray-200 dark:border-[#2C3E50]/30 p-6 flex flex-col md:flex-row md:items-center gap-4 hover:scale-[1.01] transition-transform duration-300"
            >
              <div className="flex-1">
                <div className="text-lg font-bold text-[#2C3E50] dark:text-[#bdc3c7]">{exp.title}</div>
                <div className="text-base text-gray-700 dark:text-gray-300">{exp.company}{exp.location && <span> &mdash; {exp.location}</span>}</div>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 md:text-right whitespace-nowrap">{exp.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 