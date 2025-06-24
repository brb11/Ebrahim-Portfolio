import React from 'react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Security Eye – Integrated Security Reporting System",
      description: "A comprehensive platform for citizens, Ministry of Interior, and police to manage, verify, and process security reports with real-time notifications, AI-based identity verification, and advanced workflow automation.",
      role: "Led the development of robust database clusters using PostgreSQL for data management and Minio for scalable storage, and engineered the backend architecture with Django.",
      features: [
        "Citizen registration and AI-based selfie verification",
        "Incident reporting with media and GPS location",
        "Ministry dashboard for report review and routing",
        "Police department workflow and real-time status updates",
        "Legal responsibility confirmation and feedback system",
        "Periodic analytics and performance reports"
      ],
      link: "/details_project/Security_eye"
    },
    {
      title: "Forsa Jadiduh – Recruitment Management System",
      description:"is an e-recruitment platform that connects graduates with job opportunities and strengthens communication between employers and educational institutions.",
      features: [
        "Account management",
        "Real-time notifications",
        "Job search engine",
        "Graduate identification",
        "Interaction between companies and the college"
      ],
      role: "Led system analysis, developed comprehensive UML diagrams, and contributed to database design."
    },
    {
      title: "E-commerce App – Backend API",
      description: "A scalable and secure backend for an E-commerce application, providing robust RESTful APIs for product management, user authentication, and order processing, with comprehensive testing using Postman.",
      technologies: ["Node.js", "RESTful API", "Postman"],
      link: "/details_project/ecommerce_backend"
    },
  ];

  return (
    <section className="py-16 bg-transparent transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#2C3E50] dark:text-[#596d79] mb-16 relative">
        Some of my projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-[#eaeaea] dark:bg-[#23272f] rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100 group-hover:text-[#2C3E50] dark:group-hover:text-[#596d79] transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">{project.description}</p>
              {project.role && (
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  <span className="font-semibold">Role:</span> {project.role}
                </p>
              )}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies && project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gradient-to-r from-[#2C3E50]/10 to-[#2C3E50]/20 dark:from-[#596d79]/10 dark:to-[#596d79]/20 text-[#2C3E50] dark:text-[#596d79] rounded-full text-sm font-medium transition-all duration-300 group-hover:from-[#2C3E50]/20 group-hover:to-[#2C3E50]/30 dark:group-hover:from-[#596d79]/20 dark:group-hover:to-[#596d79]/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
             {project.title.includes("Forsa Jadiduh") && (
                 <button
                  onClick={() => navigate('/details_project/forsahjadiduh')}
                  className="mt-4 px-4 py-2 bg-[#2C3E50] text-white rounded-md hover:bg-[#1a252f] transition-all duration-300"
                >
                  View Project Details
                </button>
              )}

             {project.title.includes("E-Learning Platform") && (
                 <button
                  onClick={() => navigate('/details_project/e-learning')}
                  className="mt-4 px-4 py-2 bg-[#2C3E50] text-white rounded-md hover:bg-[#1a252f] transition-all duration-300"
                >
                  View Project Details
                  </button>
                
              )}

              {project.title.includes("Coffee App") && (
                <button
                  onClick={() => navigate('/details_project/coffee')}
                  className="mt-4 px-4 py-2 bg-[#2C3E50] text-white rounded-md hover:bg-[#1a252f] transition-all duration-300"
                >
                  View Project Details
                </button>
              )}

              {project.title.includes("Security Eye") && (
                <button
                  onClick={() => navigate('/details_project/Security_eye')}
                  className="mt-4 px-4 py-2 bg-[#2C3E50] text-white rounded-md hover:bg-[#1a252f] transition-all duration-300"
                >
                  View Project Details
                </button>
              )}

              {project.title.includes("E-commerce App") && (
                <button
                  onClick={() => navigate('/details_project/ecommerce_backend')}
                  className="mt-4 px-4 py-2 bg-[#2C3E50] text-white rounded-md hover:bg-[#1a252f] transition-all duration-300"
                >
                  View Project Details
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;