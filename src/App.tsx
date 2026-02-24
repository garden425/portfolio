
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import ToolStack from './components/ToolStack';
import Contact from './components/Contact';
import ProjectDetailView from './components/ProjectDetailView';
import { Project } from './types';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ProjectsSection onViewDetails={handleViewDetails} />
        <ToolStack />
        <Contact />
      </main>
      
      {selectedProject && (
        <ProjectDetailView 
          project={selectedProject} 
          onClose={handleCloseDetails} 
        />
      )}

      <footer className="h-32 bg-white flex items-center justify-center border-t border-gray-50">
        <p className="text-gray-300 font-black uppercase tracking-[0.4em] text-[9px] text-center">
          © 2026 KIM JUNG WON . ALL RIGHTS RESERVED
        </p>
      </footer>
    </div>
  );
};

export default App;
