import Editor from './Editor.jsx';
import { DndContext, MouseSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { restrictToWindowEdges } from '@dnd-kit/modifiers';
import { roundToNearestTen } from '@/lib/utils.js';
import StatusBar from '@/components/core/templates/create/footer/StatusBar.jsx';
import Sidebar from '@/components/core/templates/create/sidebar/Sidebar.jsx';
import CommentModal from './comment/CommentsModal.jsx';
import useDesignStore from '@/store/design.js';

const getElementDistanceFromTop = (element) => {
  let distance = 0;
  while (element) {
    distance += element.offsetTop;
    element = element.offsetParent;
  }
  return distance;
};

const DesignBuilder = () => {
  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(PointerSensor, { activationConstraint: { distance: 0.01 } })
  );
  const getElement = useDesignStore((state) => state.getElement);
  const createElements = useDesignStore((state) => state.createElements);
  const createElementsAndGroup = useDesignStore((state) => state.createElementsAndGroup);

  const handleDragEnd = (event) => {
    const { active, over, delta, activatorEvent, collisions } = event;
    if (over && over.id.startsWith('frame/')) {
      const [, n, id] = over.id.split('/');
      const element = getElement(id);
      if (element) {
        const el = {
          ...element,
          children: [
            ...element.children,
            {
              ...active.data.current,
              position: {
                x: 0,
                y: 0,
              },
              rotation: 0,
              size: {
                width: element.size.width,
                height: element.size.height,
              },
              frame: +n,
            },
          ],
        };
        console.log(el);
        // TODO: Handle dragging into frame
      }
    } else if (over && collisions.some((i) => i.id.startsWith('canvas'))) {
      const id = collisions.find((i) => i.id.startsWith('canvas')).id;
      const node = document.getElementById(id);
      const page = id.replace('canvas-', '');
      const canvasRect = node.getBoundingClientRect();
      const distanceFromTop = getElementDistanceFromTop(node);
      const x = Math.max(roundToNearestTen(activatorEvent.x + delta.x - canvasRect.left), 0);
      const y = Math.max(roundToNearestTen(activatorEvent.y + delta.y - distanceFromTop), 0);
      if (Array.isArray(active.data.current)) {
        createElementsAndGroup(page, active.data.current, { x, y });
      } else {
        createElements(page, [{ ...active.data.current, position: { x, y } }]);
      }
    }
  };

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd} modifiers={[restrictToWindowEdges]}>
      <div className="grid grid-cols-[auto_1fr] gap-0 h-screen overflow-hidden">
        <Sidebar />
        <div className="flex flex-col overflow-hidden relative bg-default-100 dark:bg-zinc-950">
          <Editor />
          <StatusBar />
        </div>
      </div>

      <CommentModal />
    </DndContext>
  );
};

export default DesignBuilder;
