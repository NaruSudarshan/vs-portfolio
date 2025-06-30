import React from 'react';
import AboutMe from './content/AboutMe';
import Projects from './content/Projects';
import Skills from './content/Skills';
import Education from './content/Education';
import Certifications from './content/Certifications';
import Achievements from './content/Achievements';
import Contact from './content/Contact';

const Welcome = () => <div className="p-6 text-gray-400">Welcome! Select a file from the explorer.</div>;

const LineNumbers = () => {
  return (
    <div className="w-12 text-right pr-4 text-gray-500 select-none">
      {Array.from({ length: 50 }).map((_, i) => (
        <div key={i}>{i + 1}</div>
      ))}
    </div>
  );
};

const Editor = ({ openFile }) => {
  const renderContent = () => {
    switch (openFile) {
      case "AboutMe.md":
        return <AboutMe />;
      case "Projects.js":
        return <Projects />;
      case "Skills.json":
        return <Skills />;
      case "Education.md":
        return <Education />;
      case "Certifications.md":
        return <Certifications />;
      case "Achievements.md":
        return <Achievements />;
      case "Contact.md":
        return <Contact />;
      default:
        return <Welcome />;
    }
  };

  return (
    <div className="flex-1 flex overflow-auto min-w-0 bg-[#1e1e1e]">
      <LineNumbers />
      <div className="flex-1">
        {renderContent()}
      </div>
    </div>
  );
};

export default Editor; 