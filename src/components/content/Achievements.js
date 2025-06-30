import React from 'react';
import { VscBriefcase } from 'react-icons/vsc';

const achievements = [
  {
    title: 'Led the Tech Web Team in NGC Club',
    description: 'Successfully led the team in the development and completion of a web-based project for the NGC Club, fostering collaboration and delivering results on time.'
  },
  // Add more achievements here if needed
];

const Achievements = () => (
  <div className="p-6">
    <div className="mb-4 text-lg font-bold flex items-center gap-2"><VscBriefcase /> Achievements</div>
    <div className="grid gap-4">
      {achievements.map((ach, idx) => (
        <div key={idx} className="bg-[#23232a] rounded-lg shadow p-4 flex flex-col gap-2">
          <div className="font-semibold text-yellow-300 text-base flex items-center gap-2">
            <VscBriefcase className="text-yellow-400" /> {ach.title}
          </div>
          <div className="text-gray-400 text-sm">{ach.description}</div>
        </div>
      ))}
    </div>
  </div>
);

export default Achievements; 