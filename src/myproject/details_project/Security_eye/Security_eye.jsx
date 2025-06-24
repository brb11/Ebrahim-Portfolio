import React, { useState, useEffect } from 'react';

const SecurityEye = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Features' },
    { id: 'tech', label: 'Technologies' }
  ];

  useEffect(() => {
    document.title = "Security Eye - Project Details";
    return () => {
      document.title = "Portfolio";
    };
  }, []);

  return (
    <div className="min-h-screen bg-transparent relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#2C3E50]/5 dark:bg-[#2C3E50]/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#2C3E50]/5 dark:bg-[#2C3E50]/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>
      {/* Hero Section */}
      <div className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-transparent"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="flex flex-col items-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-extrabold text-[#2C3E50] dark:text-white animate-fade-in">
                Security Eye
              </h1>
              <p className="text-lg md:text-xl text-[#2C3E50] dark:text-[#bdc3c7] max-w-3xl mx-auto leading-relaxed">
                Integrated Security Reporting System
              </p>
            </div>
            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => window.location.href = '/'}
                className="px-6 py-2.5 rounded-full bg-[#2C3E50] text-white font-bold shadow-lg hover:bg-[#34495E] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <span>View All Projects</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button 
                onClick={() => window.location.href = '/#contact'}
                className="px-6 py-2.5 rounded-full border-2 border-[#2C3E50] text-[#2C3E50] dark:text-[#bdc3c7] font-bold hover:bg-[#2C3E50] hover:text-white transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <span>Contact Us</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Navigation Tabs */}
      <div className="sticky top-20 z-40 bg-[#34495E]/90 dark:bg-[#181824]/90 backdrop-blur-md shadow-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-8 py-4">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-[#2C3E50] text-white dark:bg-[#34495E]'
                    : 'text-white dark:text-gray-200 hover:text-[#2C3E50] hover:bg-white/10'
                }`}
              >
                {tab.id === 'overview' && <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>}
                {tab.id === 'features' && <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                {tab.id === 'tech' && <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Overview Section */}
        {activeTab === 'overview' && (
          <section className="space-y-8 md:space-y-12">
            <div className="bg-[#eaeaea] dark:bg-[#23272f] rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#2C3E50] dark:text-[#596d79]">
                Project Overview
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                In the "Security Eye" project, a comprehensive experience is provided for citizens (reporters), Ministry of Interior employees, and police departments (for handling reports).<br /><br />
                <b>Citizen Workflow:</b> The process begins when a citizen registers in the app for the first time, creating a new account by entering personal data such as name, national ID number, phone number, and uploading a photo of their ID card, along with a real-time selfie using the phone camera. AI verifies that the selfie is genuine and taken at the moment. The data is then reviewed by a Ministry of Interior employee. Once verified, the user can log in using their ID or phone number and password.<br /><br />
                After logging in, the citizen can report incidents, disputes, or other cases. The user opens the "Security Eye" app, clicks "Capture Now," and takes a photo or video of the incident. They then select the type of report (e.g., theft, assault), and the app automatically detects their location via GPS or allows manual selection on the map. The user provides a brief description and submits the report. A confirmation prompt appears, informing the user of legal responsibility for false reports. Upon confirmation, the report is sent to the Ministry of Interior, or can be saved temporarily if not urgent. Temporary reports can be sent or deleted automatically after a set time.<br /><br />
                <b>Ministry of Interior Workflow:</b> Upon receiving a new report notification, the system displays all details (media, location, description) on a dashboard. The responsible official reviews, analyzes, and either rejects or accepts the report, assigning it to the appropriate department. The citizen is notified of the report's acceptance and routing.<br /><br />
                <b>Police Department Workflow:</b> The assigned department receives the report, reviews all details, and either accepts or rejects it, notifying the Ministry of Interior. If rejected, the Ministry can reassign it. If accepted, the report moves to "In Progress," and security teams are dispatched to the location. The department updates the report status as it is handled, and the citizen receives real-time notifications (e.g., "Report received," "Being handled").<br /><br />
                <b>Closure & Feedback:</b> Once resolved, the department updates the status to "Handled." The Ministry of Interior can then close the report, and the citizen can rate the response based on speed and effectiveness. The Ministry dashboard provides periodic reports on team performance, report types, and locations, helping improve security and response operations.
              </p>
            </div>
          </section>
        )}
        {/* Features Section */}
        {activeTab === 'features' && (
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {[
              "Citizen registration with AI-based selfie verification",
              "Incident reporting with media (photo/video) and GPS location",
              "Ministry dashboard for report review, analysis, and routing",
              "Police department workflow for report acceptance, rejection, and handling",
              "Real-time notifications for all parties",
              "Temporary and urgent report handling",
              "Legal responsibility confirmation for false reports",
              "Feedback and rating system for citizens",
              "Periodic analytics and performance reports for Ministry of Interior"
            ].map((feature, index) => (
              <div key={index} className="bg-[#eaeaea] dark:bg-[#23272f] rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#2C3E50] dark:bg-[#34495E] rounded-lg flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{feature}</p>
                </div>
              </div>
            ))}
          </section>
        )}
        {/* Technologies Section */}
        {activeTab === 'tech' && (
          <section className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                { category: "Mobile App", tech: "Flutter", icon: "📱" },
                { category: "Frontend", tech: "React.js", icon: "💻" },
                { category: "Backend", tech: "Django, RESTful API", icon: "⚙️" },
                { category: "Database", tech: "Postgres Cluster", icon: "🗄️" },
                { category: "Storage", tech: "Minio Cluster", icon: "☁️" }
              ].map((item, index) => (
                <div key={index} className="bg-[#eaeaea] dark:bg-[#23272f] rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-[#2C3E50] dark:text-[#596d79]">{item.category}</h3>
                  <p className="text-gray-700 dark:text-gray-400">{item.tech}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default SecurityEye; 