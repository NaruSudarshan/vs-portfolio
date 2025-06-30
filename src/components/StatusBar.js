import React from 'react';
import { VscRemote, VscSourceControl, VscCheck, VscBell } from 'react-icons/vsc';

const StatusBar = () => {
  return (
    <div className="h-6 bg-[#007acc] text-white flex items-center justify-between px-4 text-xs font-sans">
      <div className="flex items-center gap-2">
        <VscRemote />
        <span>main*</span>
        <VscSourceControl />
        <span>0↓ 1↑</span>
      </div>
      <div className="flex items-center gap-3">
        <span>Spaces: 2</span>
        <span>UTF-8</span>
        <span>CRLF</span>
        <span><VscCheck /> Prettier</span>
        <VscBell />
      </div>
    </div>
  );
};

export default StatusBar; 