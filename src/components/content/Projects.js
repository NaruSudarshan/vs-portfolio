import React from 'react';
import { VscRepo, VscLinkExternal } from 'react-icons/vsc';

const projects = [
  {
    title: 'Hotel Booking Application',
    description: 'A full-stack web app for NGC club to search, book, and manage hotel reservations. Features real-time availability, user authentication, and a responsive UI.',
    role: 'Team Lead',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap'],
    github: null,
  },
  {
    title: 'Project Management Application',
    description: 'A collaborative MERN stack project for managing tasks, scheduling, and team collaboration. Built as part of a full stack certification course.',
    role: 'Frontend Developer',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap'],
    github: null,
  },
  {
    title: 'Eisenhower Matrix Productivity App',
    description: 'A minimal productivity app to organize tasks by urgency and importance. Supports offline and cloud sync, quadrant-based task management, and dark mode.',
    role: null,
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'OAuth 2.0'],
    github: 'https://github.com/NaruSudarshan/Eisenhower_Matrix',
  },
];

const Projects = () => (
  <div className="p-6">
    <div className="mb-4 text-lg font-bold flex items-center gap-2"><VscRepo /> Projects</div>
    <div className="grid gap-4">
      {projects.map((proj, idx) => (
        <div key={idx} className="bg-[#23232a] rounded-lg shadow p-4 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-blue-300 text-base">{proj.title}</span>
            {proj.github && (
              <a href={proj.github} target="_blank" rel="noopener noreferrer" className="ml-1 text-blue-400 hover:text-blue-200" title="GitHub">
                <VscLinkExternal />
              </a>
            )}
          </div>
          <div className="text-gray-400 text-sm">{proj.description}</div>
          {proj.role && <div className="text-gray-500 text-xs">Role: {proj.role}</div>}
          <div className="flex flex-wrap gap-2 mt-1">
            {proj.tech.map((tech, i) => (
              <span key={i} className="bg-[#1e1e1e] text-xs text-blue-200 px-2 py-0.5 rounded font-mono border border-[#333]">{tech}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Projects; 