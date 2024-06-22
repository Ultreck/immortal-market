import { useState } from 'react';
import Sidebar from './Sidebar';
import Canvas from './Canvas';
import { DndContext } from '@dnd-kit/core';

const TemplateBuilder = () => {
  const [elements, setElements] = useState([]);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (over) {
      setElements((prevElements) => [...prevElements, { id: active.id, type: active.data.current.type }]);
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="grid grid-cols-[200px_1fr] gap-4">
        <Sidebar />
        <Canvas elements={elements} />
      </div>
    </DndContext>
  );
};

export default TemplateBuilder;
