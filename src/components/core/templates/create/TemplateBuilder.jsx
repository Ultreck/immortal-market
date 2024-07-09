import { createElement, useRef, useState } from 'react';
import Canvas from './Canvas.jsx';
import { DndContext, MouseSensor, useSensor, useSensors } from '@dnd-kit/core';
import { restrictToWindowEdges } from '@dnd-kit/modifiers';
import Elements from '@/components/core/templates/create/Elements.jsx';
import Layers from '@/components/core/templates/create/Layers.jsx';
import ElementTools from '@/components/core/templates/create/tools/ElementTools.jsx';
import CanvasTools from '@/components/core/templates/create/tools/CanvasTools.jsx';
import useTemplateStore from '@/store/template.js';
import { TbLayoutList } from 'react-icons/tb';
import { cn } from '@/lib/utils.js';
import { RiShapesFill } from 'react-icons/ri';

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
      <div className="grid grid-cols-[440px_1fr] gap-0 h-screen overflow-hidden">
        <div className="h-full border-r border-default-200 dark:border-default-100">
          <div className="grid grid-cols-[130px_1fr] h-screen overflow-y-auto">
            <div className="px-6 py-5 h-full space-y-3">
              {[
                { icon: RiShapesFill, title: 'Elements', key: 'elements' },
                { icon: TbLayoutList, title: 'Layers', key: 'layers' },
              ].map((element) => {
                const active = tab === element.key;
                return (
                  <div
                    key={element.key}
                    className={cn('flex flex-col items-center justify-center py-4 rounded-2xl', {
                      'bg-default-200 dark:bg-default-100': active,
                      'hover:bg-default-200 hover:dark:bg-default-100 cursor-pointer': !active,
                    })}
                    onClick={() => setTab(element.key)}
                  >
                    {createElement(element.icon, { size: '24' })}
                    <p className="text-sm mt-1">{element.title}</p>
                  </div>
                );
              })}
            </div>
            <div className="pr-8 py-6">
              <div className="border rounded-2xl border-default-200 dark:border-default-100 bg-default-50">
                {tab === 'elements' && <Elements />}
                {tab === 'layers' && <Layers />}
              </div>
            </div>
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
