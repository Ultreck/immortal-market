import { useRef, useState } from 'react';
import Sidebar from './Sidebar';
import Canvas from './Canvas';
import { DndContext, MouseSensor, useSensor, useSensors } from '@dnd-kit/core';
import { restrictToWindowEdges } from '@dnd-kit/modifiers';

const TemplateBuilder = () => {
  const canvas = useRef();
  const [elements, setElements] = useState([]);
  const sensors = useSensors(useSensor(MouseSensor));

  const handleDragEnd = (event) => {
    const { active, over, delta, activatorEvent } = event;
    if (over && over.id === 'canvas') {
      const canvasRect = canvas.current.getBoundingClientRect();
      const x = activatorEvent.x + delta.x - canvasRect.left;
      const y = activatorEvent.y + delta.y - canvasRect.top;
      const el = {
        x,
        y,
        id: Date.now(),
        ...active.data.current,
      };
      setElements((prevElements) => [...prevElements, el]);
    }
  };

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd} modifiers={[restrictToWindowEdges]}>
      <div className="grid grid-cols-[280px_1fr] gap-0 h-screen overflow-hidden">
        <Sidebar />
        <div className="h-full flex flex-col">
          <div ref={canvas} className="my-auto mx-auto">
            <Canvas
              elements={elements}
              onChange={(element) => {
                setElements((prevElements) => prevElements.map((el) => (el.id === element.id ? element : el)));
              }}
            />
          </div>
        </div>
      </div>
    </DndContext>
  );
};

export default TemplateBuilder;
