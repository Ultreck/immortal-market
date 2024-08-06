import Canvas from './Canvas.jsx';
import { DndContext, MouseSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
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
  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(PointerSensor, { activationConstraint: { distance: 0.01 } })
  );
  const getElement = useTemplateStore((state) => state.getElement);
  const getElementPage = useTemplateStore((state) => state.getElementPage);
  const addElements = useTemplateStore((state) => state.addElements);
  const updateElements = useTemplateStore((state) => state.updateElements);

  const handleDragEnd = (event) => {
    const { active, over, delta, activatorEvent, collisions } = event;
    if (over && over.id.startsWith('frame/') && active.data.current.type === 'image') {
      const [, n, id] = over.id.split('/');
      const element = getElement(id);
      const page = getElementPage(id);
      if (element && page) {
        const el = {
          ...element,
          children: [
            ...element.children,
            {
              ...active.data.current,
              x: 0,
              y: 0,
              rotate: 0,
              width: element.width,
              height: element.height,
              id: crypto.randomUUID(),
              frame: +n,
            },
          ],
        };
        updateElements([el], page.id, true);
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
      <div className="grid grid-cols-[380px_1fr] gap-0 h-screen overflow-hidden">
        <Sidebar />
        <div className="flex flex-col overflow-hidden relative bg-default-100 dark:bg-zinc-950">
          <Canvas />
          <StatusBar />
        </div>
      </div>
    </DndContext>
  );
};

export default TemplateBuilder;
