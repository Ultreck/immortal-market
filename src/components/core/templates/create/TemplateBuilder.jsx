import { createElement, useRef, useState } from 'react';
import Canvas from './Canvas.jsx';
import { DndContext, MouseSensor, useSensor, useSensors } from '@dnd-kit/core';
import { restrictToWindowEdges } from '@dnd-kit/modifiers';
import Elements from '@/components/core/templates/create/Elements.jsx';
import Layers from '@/components/core/templates/create/Layers.jsx';
import useTemplateStore from '@/store/template.js';
import { TbLayoutList } from 'react-icons/tb';
import { cn, roundToNearestTen } from '@/lib/utils.js';
import { RiShapesFill } from 'react-icons/ri';

function getElementDistanceFromTop(element) {
  let distance = 0;

  while (element) {
    distance += element.offsetTop;
    element = element.offsetParent;
  }

  return distance;
}

const TemplateBuilder = () => {
  const canvas = useRef();
  const parent = useRef();
  const [tab, setTab] = useState('elements');
  const sensors = useSensors(useSensor(MouseSensor));
  const addElements = useTemplateStore((state) => state.addElements);
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);

  const handleDragEnd = (event) => {
    const { active, over, delta, activatorEvent } = event;
    if (over && over.id.startsWith('canvas')) {
      const node = document.getElementById(over.id);
      const page = over.id.replace('canvas-', '');
      const canvasRect = node.getBoundingClientRect();
      const distanceFromTop = getElementDistanceFromTop(node);
      const x = roundToNearestTen(activatorEvent.x + delta.x - canvasRect.left);
      const y = roundToNearestTen(activatorEvent.y + delta.y - distanceFromTop);
      const el = {
        x,
        y,
        id: crypto.randomUUID(),
        ...active.data.current,
      };
      addElements([el], page);
    }
  };

  const handleParentClick = (e) => {
    if (e.target === parent.current) updateTemplate({ selectedElements: [], selectedPage: null });
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
            <div className="pr-8 py-6 overflow-x-hidden">
              <div className="border rounded-2xl border-default-200 dark:border-default-100 bg-default-50">
                {tab === 'elements' && <Elements />}
                {tab === 'layers' && <Layers />}
              </div>
            </div>
          </div>
        </div>
        <div ref={parent} className="h-full overflow-y-auto" onClick={handleParentClick}>
          <div ref={canvas} className="mx-auto w-max py-10">
            <Canvas />
          </div>
        </div>
      </div>
    </DndContext>
  );
};

export default TemplateBuilder;
