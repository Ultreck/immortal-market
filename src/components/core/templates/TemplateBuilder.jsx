import { useRef, useState } from 'react';
import Sidebar from './Sidebar';
import Canvas from './Canvas';
import { DndContext } from '@dnd-kit/core';

const TemplateBuilder = () => {
  const [elements, setElements] = useState([]);
  const canvas = useRef();

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (over && over.id === 'canvas') {
      const el = {
        id: Date.now(),
        type: active.data.current.type,
      };
      setElements((prevElements) => [...prevElements, el]);
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="grid grid-cols-[200px_1fr] gap-6">
        <Sidebar />
        <div ref={canvas} className="w-max">
          <Canvas elements={elements} />
        </div>
      </div>
    </DndContext>
  );
};

export default TemplateBuilder;
