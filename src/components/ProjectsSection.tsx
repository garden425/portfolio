
import React, { useState, useMemo } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import ProjectCard from './ProjectCard';

interface ProjectsSectionProps {
  onViewDetails: (project: Project) => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onViewDetails }) => {
  const [expandedId, setExpandedId] = useState<string | null>(PROJECTS[0].id);

  const handleToggle = (id: string) => {
    setExpandedId(id);
  };

  const sortedProjects = useMemo(() => {
    if (!expandedId) return PROJECTS;
    const expanded = PROJECTS.find(p => p.id === expandedId);
    const others = PROJECTS.filter(p => p.id !== expandedId);
    return expanded ? [expanded, ...others] : PROJECTS;
  }, [expandedId]);

  return (
    <section id="projects" className="py-32 bg-white px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">Projects</h2>
          <div className="w-16 h-1 bg-[#8e7f68] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start transition-all duration-500">
          {sortedProjects.map(project => (
            <ProjectCard 
              key={project.id}
              project={project}
              isExpanded={expandedId === project.id}
              onToggle={() => handleToggle(project.id)}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
