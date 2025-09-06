import React from 'react';
import myImage from '../../assets/porf_image.jpg';

const contacts = [
  {
    label: 'Email',
    value: 'ebrahim4biz@gmail.com',
    link: 'mailto:ebrahim4biz@gmail.com',
    icon: (
      <svg className="w-6 h-6 text-[#2C3E50]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'ebrahim-f-basha',
    link: 'https://www.linkedin.com/in/ebrahim-f-basha-7a6112372',
    icon: (
      <svg className="w-6 h-6 text-[#2C3E50]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.223 0H1.777C.797 0 0 .777 0 1.733v20.534C0 23.223.797 24 1.777 24h20.446c.98 0 1.777-.777 1.777-1.733V1.733C24 .777 23.203 0 22.223 0zM7.433 20.452H3.856V9h3.577v11.452zM5.645 7.433c-1.14 0-2.063-.925-2.063-2.065 0-1.138.923-2.063 2.063-2.063 1.14 0 2.063.925 2.063 2.063 0 1.14-.923 2.065-2.063 2.065zm14.77 13.019h-3.555v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z"/>
      </svg>
    ),
  },
  {
    label: 'Github',
    value: 'brb11',
    link: 'https://github.com/brb11/brb11',
    icon: (
      <svg className="w-6 h-6 text-[#2C3E50]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: 'Whatsapp',
    value: '+966560675331',
    link: 'https://wa.me/+966560675331',
    icon: (
      <svg className="w-6 h-6 text-[#2C3E50]" fill="currentColor" viewBox="0 0 16 16">
        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
      </svg>
    ),
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

const Contact = () => {
  return (
    <section className="min-h-screen py-20 bg-transparent transition-colors duration-300">
      <style>{fadeInUpStyle}</style>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#2C3E50] dark:text-[#596d79] mb-16 relative">
          Contact Me
        </h2>
        <div className="flex flex-col md:flex-row items-start md:items-stretch justify-center gap-12">
          <div className="flex flex-col gap-8 md:w-1/2 w-full">
            {contacts.map((c, idx) => (
              <a 
                key={idx} 
                href={c.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#eaeaea] dark:bg-[#23272f] rounded-2xl shadow-lg p-8 flex items-center gap-6 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fadeInUp hover:scale-[1.03] hover:shadow-2xl transform text-left md:text-left" style={{animationDelay: `${idx * 0.12}s`}}
              >
                {c.icon}
                <div className="flex flex-col items-start">
                  <div className="font-semibold text-lg text-gray-900 dark:text-gray-100">{c.label}</div>
                  <div className="text-base text-gray-500 dark:text-gray-400">{c.value}</div>
                </div>
              </a>
            ))}
          </div>
          <div className="md:w-1/2 w-full flex flex-col items-start mt-12 md:mt-0">
            <div className="bg-[#eaeaea] dark:bg-[#23272f] rounded-2xl shadow-lg p-8 w-full text-left transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 animate-fadeInUp hover:scale-[1.03] hover:shadow-2xl transform" style={{animationDelay: `${contacts.length * 0.12}s`}}>
              <img
                src={myImage}
                alt="Ebrahim F. Basha"
                className="w-28 h-28 rounded-full border-4 border-white dark:border-[#2C3E50] shadow mb-4 object-cover mx-0 md:mx-0"
              />
              <h3 className="text-xl font-semibold text-[#2C3E50] dark:text-gray-100">Ebrahim F. Basha</h3>
              <p className="text-base text-gray-500 dark:text-gray-400 mt-2">
                Open to new opportunities in Software Engineering, Back-End Development, and DevOps. Let's connect to discuss how I can contribute to your team or project with my technical expertise and passion for innovation.
              </p>
              <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                Based in: Riyadh, Saudi Arabia
                <br />
                Available: <span className="font-medium">24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 