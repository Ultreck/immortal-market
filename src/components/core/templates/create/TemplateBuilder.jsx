import Canvas from './Canvas.jsx';
import { DndContext, MouseSensor, useSensor, useSensors } from '@dnd-kit/core';
import { restrictToWindowEdges } from '@dnd-kit/modifiers';
import useTemplateStore from '@/store/template.js';
import { roundToNearestTen } from '@/lib/utils.js';
import StatusBar from '@/components/core/templates/create/StatusBar.jsx';
import Sidebar from '@/components/core/templates/create/Sidebar.jsx';

const getElementDistanceFromTop = (element) => {
  let distance = 0;
  while (element) {
    distance += element.offsetTop;
    element = element.offsetParent;
  }
  return distance;
};

const TemplateBuilder = () => {
  const sensors = useSensors(useSensor(MouseSensor));
  const getElement = useTemplateStore((state) => state.getElement);
  const getElementPage = useTemplateStore((state) => state.getElementPage);
  const addElements = useTemplateStore((state) => state.addElements);
  const updateElements = useTemplateStore((state) => state.updateElements);

  const handleDragEnd = (event) => {
    const { active, over, delta, activatorEvent, collisions } = event;
    if (over && over.id.startsWith('frame-') && active.data.current.type === 'image') {
      const id = over.id.replace('frame-', '');
      const element = getElement(id);
      const page = getElementPage(id);
      if (element && page) {
        const el = {
          ...element,
          children: [
            {
              ...active.data.current,
              x: 0,
              y: 0,
              width: element.width,
              height: element.height,
              id: crypto.randomUUID(),
            },
          ],
        };
        updateElements([el], page.id);
      }
    } else if (over && collisions.some((i) => i.id.startsWith('canvas'))) {
      const id = collisions.find((i) => i.id.startsWith('canvas')).id;
      const node = document.getElementById(id);
      const page = id.replace('canvas-', '');
      const canvasRect = node.getBoundingClientRect();
      const distanceFromTop = getElementDistanceFromTop(node);
      const x = Math.max(roundToNearestTen(activatorEvent.x + delta.x - canvasRect.left), 0);
      const y = Math.max(roundToNearestTen(activatorEvent.y + delta.y - distanceFromTop), 0);
      const el = { ...active.data.current, x, y, id: crypto.randomUUID() };
      addElements([el], page);
    }
  };

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd} modifiers={[restrictToWindowEdges]}>
      <div className="grid grid-cols-[420px_1fr] gap-0 h-screen overflow-hidden ">
        <Sidebar />
        <div className="flex flex-col overflow-hidden relative">
          <Canvas />
          <StatusBar />
        </div>
      </div>
    </DndContext>
  );
};

export default TemplateBuilder;
