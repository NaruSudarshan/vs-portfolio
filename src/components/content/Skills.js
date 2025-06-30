import React from 'react';
import { VscSymbolMethod, VscServerProcess, VscCloud, VscGlobe, VscOrganization } from 'react-icons/vsc';

const skills = [
  {
    category: 'Programming Languages',
    icon: <VscSymbolMethod className="text-yellow-300" />,
    items: ['Java', 'JavaScript'],
  },
  {
    category: 'Web Development',
    icon: <VscGlobe className="text-blue-300" />,
    items: ['MERN Stack', 'Bootstrap'],
  },
  {
    category: 'Database Management',
    icon: <VscServerProcess className="text-green-300" />,
    items: ['MySQL', 'MongoDB'],
  },
  {
    category: 'Cloud Computing',
    icon: <VscCloud className="text-purple-300" />,
    items: ['AWS Cloud Architect'],
  },
  {
    category: 'Languages',
    icon: <VscOrganization className="text-pink-300" />,
    items: ['English', 'Hindi', 'Telugu', 'Kannada'],
  },
];

const Skills = () => (
  <div className="p-6">
    <div className="mb-4 text-lg font-bold flex items-center gap-2"><VscSymbolMethod /> Skills</div>
    <div className="grid gap-4">
      {skills.map((group, idx) => (
        <div key={idx} className="bg-[#23232a] rounded-lg shadow p-4">
          <div className="font-semibold text-blue-200 flex items-center gap-2 mb-2">{group.icon} {group.category}</div>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item, i) => (
              <span key={i} className="bg-[#1e1e1e] text-xs text-blue-100 px-2 py-0.5 rounded font-mono border border-[#333]">{item}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Skills; 