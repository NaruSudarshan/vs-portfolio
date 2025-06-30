import React from 'react';
import { VscMail, VscGithub, VscLinkExternal } from 'react-icons/vsc';

const Contact = () => (
  <div className="p-6">
    <div className="mb-4 text-lg font-bold flex items-center gap-2"><VscMail /> Contact</div>
    <div className="bg-[#23232a] rounded-lg shadow p-4 flex flex-col gap-3">
      <a href="mailto:narusudarshanreddy09@gmail.com" className="flex items-center gap-2 text-blue-300 hover:text-blue-100" target="_blank" rel="noopener noreferrer">
        <VscMail /> narusudarshanreddy09@gmail.com
      </a>
      <a href="https://www.linkedin.com/in/sudarshan2709/" className="flex items-center gap-2 text-blue-300 hover:text-blue-100" target="_blank" rel="noopener noreferrer">
        <VscLinkExternal /> LinkedIn
      </a>
      <a href="https://github.com/NaruSudarshan" className="flex items-center gap-2 text-blue-300 hover:text-blue-100" target="_blank" rel="noopener noreferrer">
        <VscGithub /> GitHub
      </a>
    </div>
  </div>
);

export default Contact; 