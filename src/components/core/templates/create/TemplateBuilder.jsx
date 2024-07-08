import { useRef, useState } from 'react';
import Canvas from './Canvas.jsx';
import { DndContext, MouseSensor, useSensor, useSensors } from '@dnd-kit/core';
import { restrictToWindowEdges } from '@dnd-kit/modifiers';
import { Tab, Tabs } from '@nextui-org/react';
import Elements from '@/components/core/templates/create/Elements.jsx';
import Layers from '@/components/core/templates/create/Layers.jsx';
import ElementTools from '@/components/core/templates/create/tools/ElementTools.jsx';
import CanvasTools from '@/components/core/templates/create/tools/CanvasTools.jsx';
import useTemplateStore from '@/store/template.js';

const TemplateBuilder = () => {
  const canvas = useRef();
  const parent = useRef();
  const [tab, setTab] = useState('elements');
  const sensors = useSensors(useSensor(MouseSensor));
  const addElement = useTemplateStore((state) => state.addElement);
  const selectCanvas = useTemplateStore((state) => state.selectCanvas);

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
      addElement(el);
    }
  };

  const handleParentClick = (e) => {
    if (e.target === parent.current) selectCanvas(false);
  };

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd} modifiers={[restrictToWindowEdges]}>
      <div className="grid grid-cols-[280px_1fr] gap-0 h-screen overflow-hidden">
        <div className="h-full border-r border-default-200 dark:border-default-100">
          <div className="px-8 py-6">
            <Tabs
              aria-label="Template tabs"
              className="mb-6"
              radius="full"
              selectedKey={tab}
              onSelectionChange={setTab}
            >
              <Tab key="elements" title="Elements" className="text-base" />
              <Tab key="layers" title="Layers" className="text-base" />
            </Tabs>
            {tab === 'elements' && <Elements />}
            {tab === 'layers' && <Layers />}
          </div>
        </div>
        <div ref={parent} className="h-full flex flex-col" onClick={handleParentClick}>
          <div ref={canvas} className="my-auto mx-auto">
            <Canvas />
            <ElementTools />
            <CanvasTools />
          </div>
        </div>
      </div>
    </DndContext>
  );
};

export default TemplateBuilder;
