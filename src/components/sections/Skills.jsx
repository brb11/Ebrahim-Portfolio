import React from 'react';

const skills = [
  {
    category: 'Back-End',
    items: [
      { name: 'Node.js (Express)', level: 'Advanced' },
      { name: 'PHP', level: 'Advanced' },
      { name: 'Django', level: 'Intermediate' },
      { name: 'Laravel', level: 'Intermediate' },
      { name: 'Odoo Development (current interest)', level: 'Intermediate' },
      { name: 'pocketbase', level: 'Intermediate' },
      { name: 'ORMs: Sequelize', level: 'Advanced' },
      { name: 'ORMs: Prisma', level: 'Intermediate' },
      { name: 'RESTful API Development', level: 'Advanced' },
      { name: 'Security: JWT', level: 'Intermediate' },
      { name: 'Security: OAuth 2.0', level: 'Intermediate' },
    ],
  },
  {
    category: 'Database & System Analysis',
    items: [
      { name: 'PostgreSQL', level: 'Advanced' },
      { name: 'MongoDB', level: 'Advanced' },
      { name: 'SQL Server', level: 'Advanced' },
      { name: 'Redis', level: 'Intermediate' },
      { name: 'MinIO', level: 'Advanced' },
      { name: 'Elasticsearch', level: 'Advanced' },
      { name: 'MySQL', level: 'Advanced' },
      { name: 'supabase', level: 'Intermediate' },
      { name: 'UML Diagrams', level: 'Intermediate' },
    ],
  },
  {
    category: 'DevOps & Automation',
    items: [
      { name: 'Docker', level: 'Advanced' },
      { name: 'Kubernetes', level: 'Intermediate' },
      { name: 'Shell Scripting', level: 'Intermediate' },
      { name: 'Backup Automation', level: 'Advanced' },
    ],
  },
  {
    category: 'Cloud & Infrastructure',
    items: [
      { name: 'AWS', level: 'Intermediate' },
      { name: 'MinIO', level: 'Advanced' },
      { name: 'MongoDB Atlas', level: 'Intermediate' },
      { name: 'Storage Architecture', level: 'Intermediate' },
      { name: 'Network Configuration', level: 'Intermediate' },
    ],
  },
  {
    category: 'Virtualization & High Availability',
    items: [
      { name: 'VMware', level: 'Advanced' },
      { name: 'DBs Clustering', level: 'Advanced' },
      { name: 'High Availability (Patroni + etcd + HAProxy)', level: 'Advanced' },
      { name: 'High Availability with Kubernetes', level: 'Advanced' },
    ],
  },
  {
    category: 'Front-End',
    items: [
      { name: 'HTML', level: 'Intermediate' },
      { name: 'CSS', level: 'Intermediate' },
      { name: 'JavaScript', level: 'Intermediate' },
    ],
  },
  {
    category: 'Desktop Development',
    items: [
      { name: 'C#', level: 'Intermediate' },
      { name: 'C++', level: 'Intermediate' },
    ],
  },
  {
    category: 'Design',
    items: [
      { name: 'Graphic Design', level: 'Intermediate' },
      { name: 'UX/UI Design', level: 'Intermediate' },
    ],
  },
  {
    category: 'GIS',
    items: [
      { name: 'ArcGIS', level: 'Intermediate' },
    ],
  },
  {
    category: 'Reporting',
    items: [
      { name: 'Telerik Reporting (Designer & Server)', level: 'Intermediate' },
    ],
  },
  {
    category: 'Networks & Systems',
    items: [
      { name: 'Windows', level: 'Advanced' },
      { name: 'Ubuntu', level: 'Advanced' },
      { name: 'Windows Server', level: 'Intermediate' },
      { name: 'Packet Tracer', level: 'Intermediate' },
    ],
  },
  {
    category: 'Microsoft Office',
    items: [
      { name: 'Word', level: 'Advanced' },
      { name: 'PowerPoint', level: 'Advanced' },
      { name: 'Excel', level: 'Advanced' },
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

const Skills = () => {
  // Function to convert skill level to percentage
  const getLevelPercentage = (level) => {
    switch (level.toLowerCase()) {
      case 'advanced':
        return '90%';
      case 'intermediate':
        return '70%';
      case 'beginner':
        return '40%';
      default:
        return '50%';
    }
  };

  return (
    <section className="py-16 bg-transparent transition-colors duration-300">
      <style>{fadeInUpStyle}</style>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#2C3E50] dark:text-[#596d79] mb-16 relative">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((group, idx) => (
            <div key={idx} className="bg-[#eaeaea] dark:bg-[#23272f] rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 animate-fadeInUp hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 transform" style={{animationDelay: `${idx * 0.12}s`}}>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">{group.category}</h3>
              <ul className="space-y-3">
                {group.items.map((item, i) => (
                  <li key={i} className="flex flex-col gap-1">
                    <div className="flex justify-between items-center text-gray-700 dark:text-gray-200">
                      <span>{item.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-semibold">{item.level}</span>
                    </div>
                    <div className="w-full h-2 bg-[#2C3E50]/5 dark:bg-[#2C3E50]/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-1000 ease-out bg-[#2C3E50] dark:bg-[#bdc3c7]"
                        style={{ width: getLevelPercentage(item.level), animation: 'slideIn 1s ease-out' }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 