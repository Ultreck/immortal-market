import useTemplateStore from '@/store/template.js';
import { closestCenter, DndContext, DragOverlay, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import LayerElement from './LayerElement';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useState } from 'react';
import LayerItem from '@/components/core/templates/create/LayerItem.jsx';

const Layers = () => {
  const [element, setElement] = useState(null);
  const page = useTemplateStore(({ template }) => template.pages.find((page) => page.id === template.activePage));
  const updatePage = useTemplateStore((state) => state.updatePage);

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragStart = (event) => {
    setElement(page.elements.find((obj) => obj.id === event.active.id));
  };

  const handleDragEnd = (event) => {
    setElement(null);
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = page.elements.findIndex((obj) => obj.id === active.id);
      const newIndex = page.elements.findIndex((obj) => obj.id === over.id);
      updatePage({ elements: arrayMove(page.elements, oldIndex, newIndex) }, page.id);
    }
  };

  return (
    <DndContext
      sensors={sensors}
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
      collisionDetection={closestCenter}
    >
      <SortableContext items={page.elements} strategy={verticalListSortingStrategy}>
        {page.elements.length > 0 ? (
          <div className="space-y-1">
            {page.elements.map((element) => (
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
  );
};

export default Layers;
