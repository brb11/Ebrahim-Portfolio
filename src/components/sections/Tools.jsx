import React from 'react';
import { FaTools, FaDatabase, FaCloud, FaCode, FaCogs, FaPalette, FaClipboardList } from 'react-icons/fa';

const tools = [
  {
    category: 'Development & IDEs',
    icon: <FaCode className="text-2xl text-[#2C3E50] dark:text-[#bdc3c7] mr-2" />,
    items: [
      'VS Code',
      'SQL Server Management Studio (SSMS)',
      'SQL Developer',
      'phpMyAdmin',
      'C free',
      'Kibana',
      'ArcGIS Desktop',
      'DrawIO',
      'Packet Tracer',
    ],
  },
  {
    category: 'Database & Clustering Tools',
    icon: <FaDatabase className="text-2xl text-[#2C3E50] dark:text-[#bdc3c7] mr-2" />,
    items: [
      'Patroni',
      'Percona Backup for MongoDB (PBM)',
      'MongoDB Compass',
    ],
  },
  {
    category: 'API & Testing Tools',
    icon: <FaClipboardList className="text-2xl text-[#2C3E50] dark:text-[#bdc3c7] mr-2" />,
    items: [
      'Postman',
      'Thunder Client',
    ],
  },
  {
    category: 'Cloud & Infrastructure',
    icon: <FaCloud className="text-2xl text-[#2C3E50] dark:text-[#bdc3c7] mr-2" />,
    items: [
      'MinIO Console',
      'Kubernetes Dashboard',
      'Kubectl',
    ],
  },
  {
    category: 'DevOps & Automation',
    icon: <FaCogs className="text-2xl text-[#2C3E50] dark:text-[#bdc3c7] mr-2" />,
    items: [
      'Shell Scripting',
      'HAProxy',
      'etcd',
      'PgAgent',
      'Cron Jobs',
    ],
  },
  {
    category: 'Design Tools',
    icon: <FaPalette className="text-2xl text-[#2C3E50] dark:text-[#bdc3c7] mr-2" />,
    items: [
      'Adobe Photoshop',
      'Adobe XD',
      'Adobe Illustrator',
    ],
  },
  {
    category: 'Productivity Tools',
    icon: <FaTools className="text-2xl text-[#2C3E50] dark:text-[#bdc3c7] mr-2" />,
    items: [
      'Microsoft Office (Word, Excel, PowerPoint)',
    ],
  },
];

const Tools = () => {
  return (
    <section id="tools" className="py-20 min-h-screen bg-gradient-to-br from-[#f7f7fb] to-[#eaeaea] dark:from-[#181824] dark:to-[#23272f]">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#2C3E50] dark:text-[#bdc3c7] mb-14 tracking-tight drop-shadow-lg">
          My Tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((group, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-gradient-to-tr from-white/90 to-[#eaeaea]/80 dark:from-[#23272f]/90 dark:to-[#181824]/80 shadow-2xl p-8 border border-gray-200 dark:border-[#2C3E50]/30 flex flex-col gap-4 hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="flex items-center mb-2">
                {group.icon}
                <h3 className="text-lg font-bold text-[#2C3E50] dark:text-[#bdc3c7] tracking-wide">
                  {group.category}
                </h3>
              </div>
              <ul className="space-y-2 mt-2">
                {group.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-gray-700 dark:text-gray-300 text-base pl-2 relative before:content-[''] before:mr-2 before:font-bold group-hover:text-[#2C3E50] dark:group-hover:text-[#bdc3c7] transition-colors"
                  >
                    <span className="inline-block w-2 h-2 rounded-full bg-[#2C3E50] dark:bg-[#bdc3c7] mr-3 align-middle"></span>
                    {item}
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

export default Tools; 