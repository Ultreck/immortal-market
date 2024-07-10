import useTemplateStore from '@/store/template.js';
import { closestCenter, DndContext, DragOverlay, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import LayerElement from './LayerElement';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useState } from 'react';
import LayerItem from '@/components/core/templates/create/LayerItem.jsx';

const Layers = () => {
  const [element, setElement] = useState(null);
  const elements = useTemplateStore((state) => state.template.elements);
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragStart = (event) => {
    setElement(elements.find((obj) => obj.id === event.active.id));
  };

  const handleDragEnd = (event) => {
    setElement(null);
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = elements.findIndex((obj) => obj.id === active.id);
      const newIndex = elements.findIndex((obj) => obj.id === over.id);
      updateTemplate({ elements: arrayMove(elements, oldIndex, newIndex) });
    }
  };

  return (
    <div className="px-4 py-4">
      <DndContext
        sensors={sensors}
        onDragEnd={handleDragEnd}
        onDragStart={handleDragStart}
        collisionDetection={closestCenter}
      >
        <SortableContext items={elements} strategy={verticalListSortingStrategy}>
          {elements.length > 0 ? (
            <div className="space-y-1">
              {elements.map((element) => (
                <LayerElement key={element.id} element={element} />
              ))}
            </div>
          ) : (
            <div className="py-20">
              <p className="text-center text-sm opacity-80 max-w-[200px] mx-auto">
                No elements. Add some elements to the canvas
              </p>
            </div>
          )}
          <DragOverlay>{element ? <LayerItem element={element} /> : null}</DragOverlay>
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default Layers;
