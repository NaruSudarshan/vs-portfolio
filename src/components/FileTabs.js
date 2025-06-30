import React from 'react';
import { VscFileCode, VscFile, VscJson } from 'react-icons/vsc';
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  useSortable,
  horizontalListSortingStrategy,
} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

const getFileIcon = (fileName) => {
  if (fileName.endsWith('.js')) return <VscFileCode className="text-yellow-400" />;
  if (fileName.endsWith('.json')) return <VscJson className="text-orange-400" />;
  if (fileName.endsWith('.md')) return <VscFile className="text-blue-400" />;
  return <VscFile />;
};

function SortableTab({id, tab, openFile, setOpenFile, handleCloseTab, listeners, attributes, isDragging, transform, transition}) {
  return (
    <div
      className={`flex items-center justify-between px-3 h-9 min-h-9 max-h-9 cursor-pointer border-r border-[#1e1e1e] text-sm select-none ${openFile === tab ? 'bg-[#1e1e1e] text-white border-t-2 border-t-blue-500' : 'text-gray-400 hover:bg-[#2a2d2e]'} ${isDragging ? 'opacity-70' : ''}`}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
        touchAction: 'none',
        height: '2.25rem', // h-9 in Tailwind (36px)
        minHeight: '2.25rem',
        maxHeight: '2.25rem',
      }}
      onClick={() => setOpenFile(tab)}
      {...attributes}
      {...listeners}
    >
      <div className="flex items-center gap-2">
        {getFileIcon(tab)}
        <span>{tab}</span>
      </div>
      <button
        className="ml-1 text-gray-400 hover:text-white hover:bg-[#333333] rounded p-0.5 text-xs"
        onClick={e => { e.stopPropagation(); handleCloseTab(tab, e); }}
        title="Close tab"
      >
        ✕
      </button>
    </div>
  );
}

function DraggableTab({id, ...props}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({id});
  return (
    <div ref={setNodeRef} style={{touchAction: 'none', height: '2.25rem', minHeight: '2.25rem', maxHeight: '2.25rem'}}>
      <SortableTab
        {...props}
        id={id}
        listeners={listeners}
        attributes={attributes}
        isDragging={isDragging}
        transform={transform}
        transition={transition}
      />
    </div>
  );
}

const FileTabs = ({ openTabs, openFile, setOpenFile, handleCloseTab, setOpenTabs }) => {
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
  );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={event => {
        const {active, over} = event;
        if (active.id !== over?.id) {
          const oldIndex = openTabs.indexOf(active.id);
          const newIndex = openTabs.indexOf(over.id);
          setOpenTabs(arrayMove(openTabs, oldIndex, newIndex));
        }
      }}
    >
      <SortableContext items={openTabs} strategy={horizontalListSortingStrategy}>
        <div className="flex h-9 bg-[#252526] items-end overflow-x-auto">
          {openTabs.map(tab => (
            <DraggableTab
              key={tab}
              id={tab}
              tab={tab}
              openFile={openFile}
              setOpenFile={setOpenFile}
              handleCloseTab={handleCloseTab}
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default FileTabs; 