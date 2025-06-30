import React from 'react';
import { VscVerifiedFilled } from 'react-icons/vsc';

const certifications = [
  {
    title: 'MERN Full Stack Certification',
    provider: 'Ethnus',
    date: 'June 2024 - July 2024',
  },
  {
    title: 'AWS Academy Graduate - Cloud Foundations',
    provider: 'AWS Academy',
    date: '',
  },
  {
    title: 'AWS Academy Graduate - Cloud Architecting',
    provider: 'AWS Academy',
    date: '',
  },
  {
    title: 'DSA Course',
    provider: 'learnyard.com',
    date: 'Jan 2024',
  },
  {
    title: 'Web Development (CSI SPM WEB member)',
    provider: 'CSI Chapter Vit-AP',
    date: 'Sept 2022',
  },
];

const Certifications = () => (
  <div className="p-6">
    <div className="mb-4 text-lg font-bold flex items-center gap-2"><VscVerifiedFilled /> Certifications</div>
    <div className="grid gap-4">
      {certifications.map((cert, idx) => (
        <div key={idx} className="bg-[#23232a] rounded-lg shadow p-4 flex items-center gap-4">
          <VscVerifiedFilled className="text-green-400 text-2xl" />
          <div>
            <div className="font-semibold text-blue-300">{cert.title}</div>
            <div className="text-gray-400 text-sm">{cert.provider}{cert.date && ` | ${cert.date}`}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Certifications; 