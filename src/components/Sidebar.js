import React from 'react';
import { VscFolder, VscFileCode, VscFile, VscJson } from 'react-icons/vsc';
import { files } from '../data/files';

const getFileIcon = (fileName) => {
  if (fileName.endsWith('.js')) return <VscFileCode className="text-yellow-400" />;
  if (fileName.endsWith('.json')) return <VscJson className="text-orange-400" />;
  if (fileName.endsWith('.md')) return <VscFile className="text-blue-400" />;
  return <VscFile />;
};

const FileTree = ({ items, openFile, handleFileClick, level = 0 }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.name} className="flex flex-col">
          <div
            className={`cursor-pointer px-2 py-0.5 rounded flex items-center gap-1 hover:bg-[#2a2d2e] ${openFile === item.name ? "bg-[#2a2d2e]" : ""}`}
            style={{ paddingLeft: `${level * 16 + 8}px` }}
            onClick={() => item.type === 'file' && handleFileClick(item.name)}
          >
            {item.type === 'folder' ? <VscFolder className="text-blue-400" /> : getFileIcon(item.name)}
            <span>{item.name}</span>
          </div>
          {item.children && (
            <FileTree items={item.children} openFile={openFile} handleFileClick={handleFileClick} level={level + 1} />
          )}
        </li>
      ))}
    </ul>
  );
};

const Sidebar = ({ openFile, handleFileClick }) => {
  return (
    <div className="flex-1 p-2">
      <div className="text-xs text-gray-400 mb-2 tracking-widest uppercase px-2">Explorer</div>
      <FileTree items={files} openFile={openFile} handleFileClick={handleFileClick} />
      <div className="mt-6 ml-2">
        <a
          href="/Sudarshan_sweIntern.pdf"
          download
          className="flex items-center text-xs text-blue-400 hover:underline hover:text-blue-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="mr-1">⬇️</span> Download Resume
        </a>
      </div>
    </div>
  );
};

export default Sidebar; 