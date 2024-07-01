import { useRef, useState } from 'react';
import Canvas from './Canvas.jsx';
import { DndContext, MouseSensor, useSensor, useSensors } from '@dnd-kit/core';
import { restrictToWindowEdges } from '@dnd-kit/modifiers';
import { Tab, Tabs } from '@nextui-org/react';
import Elements from '@/components/core/templates/create/Elements.jsx';
import Layers from '@/components/core/templates/create/Layers.jsx';
import Tools from '@/components/core/templates/create/Tools.jsx';

const TemplateBuilder = () => {
  const canvas = useRef();
  const [id, setId] = useState(null);
  const [tab, setTab] = useState('elements');
  const [elements, setElements] = useState([]);
  const sensors = useSensors(useSensor(MouseSensor));

  const selected = elements.find((el) => el.id === id);

  const handleSelect = (v) => setId(v);

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
      handleSelect(el.id);
    }
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
            {tab === 'layers' && <Layers elements={elements} onSelect={handleSelect} current={id} />}
          </div>
        </div>
        <div className="h-full flex flex-col">
          <div ref={canvas} className="my-auto mx-auto">
            <Canvas
              current={id}
              elements={elements}
              onSelect={handleSelect}
              onChange={(element) => {
                setElements((prevElements) => prevElements.map((el) => (el.id === element.id ? element : el)));
              }}
            />
          </div>
        </div>

        <Tools
          element={selected}
          onChange={(element) => {
            setElements((prevElements) => prevElements.map((el) => (el.id === element.id ? element : el)));
          }}
        />
      </div>
    </DndContext>
  );
};

export default TemplateBuilder;
