import React from 'react';
import { activityIcons } from '../data/activityIcons';

const ActivityBar = () => {
  return (
    <div className="hidden md:flex flex-col items-center justify-between w-12 bg-[#333333] text-[#cccccc] py-2">
      <div className="flex flex-col items-center space-y-2">
        {activityIcons.slice(0, 5).map((item, idx) => (
          <button
            key={item.label}
            className={`w-12 h-10 flex items-center justify-center text-2xl relative ${idx === 0 ? 'text-white' : 'hover:text-white'}`}
            title={item.label}
          >
            {idx === 0 && <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-white"></div>}
            {item.icon}
          </button>
        ))}
      </div>
      <div className="flex flex-col items-center space-y-2">
        {activityIcons.slice(5).map((item) => (
           <button
            key={item.label}
            className="w-12 h-10 flex items-center justify-center text-2xl hover:text-white"
            title={item.label}
          >
            {item.icon}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ActivityBar; 