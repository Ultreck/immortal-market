import { useRef, useState } from 'react';
import Sidebar from './Sidebar';
import Canvas from './Canvas';
import { DndContext, MouseSensor, useSensor, useSensors } from '@dnd-kit/core';

const TemplateBuilder = () => {
  const canvas = useRef();
  const [elements, setElements] = useState([]);
  const sensors = useSensors(useSensor(MouseSensor));

  const handleDragEnd = (event) => {
    const { active, over, delta } = event;
    if (over && over.id === 'canvas') {
      const rect = canvas.current.getBoundingClientRect();
      const parentRect = canvas.current.parentElement.getBoundingClientRect();
      const left = rect.left - parentRect.left;
      const top = rect.top - parentRect.top;
      const el = {
        id: Date.now(),
        type: active.data.current.type,
        x: delta.x - left,
        y: delta.y - top,
      };
      setElements((prevElements) => [...prevElements, el]);
    }
  };

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
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
