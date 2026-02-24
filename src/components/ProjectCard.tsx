
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  isExpanded: boolean;
  onToggle: () => void;
  onViewDetails: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isExpanded, onToggle, onViewDetails }) => {
  return (
    <div 
      onClick={onToggle}
      className={`
        relative overflow-hidden cursor-pointer transition-all duration-700 ease-in-out
        ${isExpanded ? 'col-span-full' : 'col-span-1'}
        ${isExpanded ? 'shadow-2xl z-10' : 'shadow-sm hover:shadow-xl hover:-translate-y-1 z-0'}
        rounded-3xl
      `}
      style={{ backgroundColor: project.color }}
    >
      <div className={`flex flex-col ${isExpanded ? 'md:flex-row' : 'flex-col'} h-full`}>
        {/* Image Area */}
        <div className={`
          relative overflow-hidden transition-all duration-700
          ${isExpanded ? 'md:w-[60%] aspect-video md:min-h-[500px]' : 'w-full aspect-square'}
        `}>
          <img 
            src={project.imageUrl} 
            alt={project.title}
            className={`w-full h-full object-cover transition-transform duration-1000 ${isExpanded ? 'scale-105' : 'scale-100'}`}
          />
        </div>

        {/* Content Area */}
        <div className={`p-8 md:p-12 flex flex-col justify-center transition-all duration-500 ${isExpanded ? 'md:w-[40%]' : 'w-full'}`}>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map(tag => (
              <span key={tag} className="bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-600">
                {tag}
              </span>
            ))}
          </div>
          
          <h3 className={`font-bold mb-4 leading-tight transition-all duration-500 ${isExpanded ? 'text-3xl md:text-5xl' : 'text-xl md:text-2xl'}`}>
            {project.title}
          </h3>
          <p className="text-gray-600 mb-8 leading-relaxed font-medium">
            {project.subtitle}
          </p>

          {isExpanded && (
            <div className="space-y-8 mt-4 animate-in fade-in slide-in-from-bottom duration-700">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <h4 className="text-sm font-bold text-[#8e7f68] uppercase tracking-widest mb-2">Overview</h4>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>
                </div>
              </div>
              
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onViewDetails(project);
                }}
                className="w-full py-4 bg-white/20 text-[#8e7f68] rounded-xl font-bold hover:bg-white/40 transition-all transform hover:shadow-lg outline-none border-none backdrop-blur-sm"
              >
                프로젝트 상세보기
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
