import React from 'react';
import { VscMortarBoard } from 'react-icons/vsc';

const Education = () => (
  <div className="p-6">
    <div className="mb-4 text-lg font-bold flex items-center gap-2"><VscMortarBoard /> Education</div>
    <div className="bg-[#23232a] rounded-lg shadow p-4 mb-4">
      <div className="font-semibold text-blue-400">B. Tech in Computer Science</div>
      <div className="text-gray-300">VIT-AP, Amravati, Andhra Pradesh</div>
      <div className="text-gray-400 text-sm">Current CGPA: <span className="font-semibold">8.85</span></div>
      <div className="text-gray-400 text-sm">Expected Graduation: May 2026</div>
    </div>
    <div className="bg-[#23232a] rounded-lg shadow p-4">
      <div className="font-semibold text-blue-400">II PUC</div>
      <div className="text-gray-300">Narayana College, Bengaluru, Karnataka</div>
      <div className="text-gray-400 text-sm">Percentage: <span className="font-semibold">91.1%</span></div>
      <div className="text-gray-400 text-sm">Year of Graduation: 2022</div>
    </div>
  </div>
);

export default Education; 