import React, { useState, useEffect } from "react";
import ActivityBar from './components/ActivityBar';
import Sidebar from './components/Sidebar';
import FileTabs from './components/FileTabs';
import Editor from './components/Editor';
import StatusBar from './components/StatusBar';

function App() {
  const [openFile, setOpenFile] = useState(null);
  const [openTabs, setOpenTabs] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Auto-open about me on first load
  useEffect(() => {
    setOpenFile("AboutMe.md");
    setOpenTabs(["AboutMe.md"]);
  }, []);

  const handleFileClick = (fileName) => {
    setOpenFile(fileName);
    if (window.innerWidth < 768) { // md breakpoint
      setSidebarOpen(false);
    }
    if (!openTabs.includes(fileName)) {
      setOpenTabs([...openTabs, fileName]);
    }
  };

  const handleCloseTab = (fileName, e) => {
    e.stopPropagation();
    const idx = openTabs.indexOf(fileName);
    const newTabs = openTabs.filter((f) => f !== fileName);
    setOpenTabs(newTabs);
    if (openFile === fileName) {
      setOpenFile(newTabs[idx - 1] || newTabs[0] || null);
    }
  };

  return (
    <div className="flex flex-col h-screen w-full bg-[#1e1e1e] text-gray-300 font-mono">
      <div className="flex flex-1 overflow-hidden">
        <ActivityBar />
        
        {/* Sidebar container */}
        <div
          className={`z-20 fixed md:static top-0 left-12 md:left-0 h-full w-64 bg-[#252526] border-r border-black flex flex-col transition-transform duration-200 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0`}
        >
          <div className="hidden md:flex items-center justify-between p-2.5 text-xs text-gray-400 border-b border-black">
            <span>EXPLORER</span>
          </div>
          <Sidebar openFile={openFile} handleFileClick={handleFileClick} />
        </div>
        
        {/* Main Area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Mobile Header */}
          <div className="flex items-center justify-between h-10 px-4 bg-[#333333] border-b border-black md:hidden">
            <button
              className="text-white text-xl focus:outline-none"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle sidebar"
            >
              ☰
            </button>
            <span className="font-semibold text-sm">{openFile || 'my-portfolio'}</span>
          </div>
          
          <FileTabs 
            openTabs={openTabs} 
            openFile={openFile} 
            setOpenFile={setOpenFile} 
            handleCloseTab={handleCloseTab} 
            setOpenTabs={setOpenTabs}
          />
          
          <Editor openFile={openFile} />
          
          <StatusBar />
        </div>
      </div>
      
      {/* Overlay for mobile sidebar */}
      {sidebarOpen && window.innerWidth < 768 && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-10 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
