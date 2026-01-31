import React from 'react';
import { BriefcaseIcon } from '@heroicons/react/24/solid';

const experiences = [
  {
    title: 'Software Engineer (Odoo ERP)',
    company: 'New Vision Co.',
    location: "Riyadh, Saudi Arabia ",
    date: 'Oct 2025 – Present',
    description: [
      'Developed and customized Odoo ERP modules to support business workflows and operational requirements.',
      'Analyzed organizational needs and implemented scalable ERP solutions using Python and Odoo framework.',
      'Managed system security by configuring user roles, access rights, and record rules.',
      'Supported deployment, maintenance, and end-user technical support to ensure stable daily operations.',
    ],
  },
  {
    title: 'DBA & Back-End Developer',
    company: 'SOFA Co.',
    location: "Sana'a, Yemen",
    date: 'Jul 2024 – 2025',
    description: [
      'Managed and maintained enterprise databases including PostgreSQL, MongoDB, MinIO, and Elasticsearch to ensure reliability, scalability, and high performance.',
      'Developed backend services and secure RESTful APIs to support internal business applications and system integrations.',
      'Automated backup, recovery, and monitoring workflows using shell scripting, cron jobs.',
      'Implemented high availability solutions and optimized database performance through clustering, indexing, and query tuning.',
      'Designed and generated business and operational reports using Telerik Reporting to support data-driven decision-making.',
      'Provided ongoing technical support and troubleshooting for production backend systems and database operations.',
    ],
  },
  {
    title: 'Back-End Developer',
    company: 'TemmamLight Co.',
    location: "Sana'a, Yemen",
    date: 'Jan – Mar 2024',
    description: [
      'Completed hands-on backend development training using Laravel framework and PHP within a professional company environment.',
      'Built and tested RESTful APIs and backend components as part of real-world development tasks.',
      'Worked with MySQL databases for data modeling, CRUD operations, and query handling.',
      'Collaborated with the technical team to improve coding practices, debugging skills, and project workflow understanding.',
    ],
  },
  {
    title: 'UX/UI Designer',
    company: 'Devstation Co.',
    location: "Sana'a, Yemen",
    date: 'Aug – Nov 2022',
    description: [
      'Designed UI/UX layouts and prototypes for web and mobile applications using Adobe XD.',
      'Improved user experience through research, feedback, and usability-focused design decisions.',
      'Worked closely with development teams to deliver consistent and functional interfaces.',
    ],
  },
  {
    title: 'Graphic Designer',
    company: 'Freelance Work',
    location: '',
    date: 'Sept 2023 – 2025',
    description: [
      'Created logos, branding materials, and social media designs for freelance clients.',
      'Produced high-quality visuals using Adobe Photoshop and Illustrator with timely delivery.',
      'Managed client requirements, feedback cycles, and project completion.',
    ],
  },
  {
    title: 'Professional Projects',
    company: "Sana'a University",
    location: "Sana'a, Yemen",
    date: 'Sept 2021 – 2025',
    description: [
      'Developed multiple academic and real-world software projects as part of the Information Technology program.',
    ],
  },
  {
    title: 'Peer Educator & Youth Trainer',
    company: 'Youth Leadership Program & UNICEF',
    location: 'Ibb, Yemen',
    date: 'Feb 2019',
    description: [
      'Delivered youth training sessions focused on leadership, communication, and community development.',
      'Supported educational workshops and awareness activities in collaboration with UNICEF programs.',
    ],
  },
  {
    title: 'Community Awareness Facilitator',
    company: 'Arab Human Rights Foundation',
    location: 'Ibb, Yemen',
    date: 'Feb – Mar 2019',
    description: [
      'Conducted community awareness campaigns on human rights and social responsibility topics.',
      'Engaged with local communities through presentations, outreach, and educational sessions.',
      'Assisted in reporting and supporting program implementation activities.',
    ],
  },
  {
    title: 'Peer Educator',
    company: 'UNICEF',
    location: 'Ibb, Yemen',
    date: 'May – Aug 2018',
    description: [
      'Participated in youth education and awareness initiatives organized by UNICEF.',
      'Supported team coordination and engagement activities in schools and community centers.',
    ],
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
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1 mb-3">{exp.date}</div>
                {exp.description && exp.description.length > 0 && (
                  <ul className="mt-3 space-y-2 list-none pl-0">
                    {exp.description.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 flex items-start">
                        <span className="text-[#2C3E50] dark:text-[#bdc3c7] mr-2 flex-shrink-0 w-3 text-center">•</span>
                        <span className="text-justify flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 