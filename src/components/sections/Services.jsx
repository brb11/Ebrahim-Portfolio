import React from 'react';

const services = [
  {
    title: 'Back-End Development',
    description: 'Design and implement robust, scalable server-side applications using Node.js (Express), PHP, Django, and Laravel. Develop secure RESTful APIs and integrate authentication systems (JWT, OAuth 2.0).',
    icon: (
      <svg className="w-10 h-10 text-[#2C3E50] mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        <path d="M17 12l5-3-5-3v6z"/>
      </svg>
    ),
  },
  {
    title: 'Database Design & Management',
    description: 'Model, optimize, and manage databases including PostgreSQL, MongoDB, SQL Server, MySQL, Redis, MinIO, and Elasticsearch. Ensure data integrity, high availability, and performance.',
    icon: (
      <svg className="w-10 h-10 text-[#2C3E50] mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 4h16v16H4z"/>
        <path d="M8 8h8v8H8z"/>
        <path d="M12 4v16"/>
      </svg>
    ),
  },
  {
    title: 'DevOps & Automation',
    description: 'Automate deployment, scaling, and monitoring using Docker, Kubernetes, and shell scripting. Implement CI/CD pipelines and backup automation for reliable operations.',
    icon: (
      <svg className="w-10 h-10 text-[#2C3E50] mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
  },
  {
    title: 'Cloud & Infrastructure',
    description: 'Design and manage cloud solutions with AWS, MinIO, and MongoDB Atlas. Configure storage architecture, network infrastructure, and ensure system reliability.',
    icon: (
      <svg className="w-10 h-10 text-[#2C3E50] mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="M2 10h20"/>
        <path d="M6 4v16"/>
        <path d="M18 4v16"/>
      </svg>
    ),
  },
  {
    title: 'System Analysis & High Availability',
    description: 'Analyze and document system requirements using UML diagrams. Implement high availability and clustering solutions (Patroni, etcd, HAProxy, VMware, Kubernetes).',
    icon: (
      <svg className="w-10 h-10 text-[#2C3E50] mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
  },
  {
    title: 'Reporting & Data Visualization',
    description: 'Create professional reports and dashboards using Telerik Reporting and data visualization tools to support business decision-making.',
    icon: (
      <svg className="w-10 h-10 text-[#2C3E50] mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 20V10"/>
        <path d="M18 20V4"/>
        <path d="M6 20v-4"/>
      </svg>
    ),
  },
  {
    title: 'IT Support & Network Administration',
    description: 'Provide support for Windows, Ubuntu, and Windows Server environments. Configure networks and troubleshoot using tools like Packet Tracer.',
    icon: (
      <svg className="w-10 h-10 text-[#2C3E50] mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8 12h8"/>
        <path d="M12 8v8"/>
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

const Services = () => {
  return (
    <section className="py-16 bg-transparent transition-colors duration-300">
      <style>{fadeInUpStyle}</style>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#2C3E50] dark:text-[#596d79] mb-16 relative">
          What I Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-[#eaeaea] dark:bg-[#23272f] rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-gray-100 dark:border-gray-700 animate-fadeInUp hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 transform" style={{animationDelay: `${idx * 0.12}s`}}>
              {service.icon}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{service.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 