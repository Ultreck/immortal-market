import { closestCenter, DndContext, DragOverlay, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import LayerElement from './LayerElement.jsx';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useState } from 'react';
import LayerItem from '@/components/core/templates/create/sidebar/layout/layers/LayerItem.jsx';
import NoData from '@/components/ui/NoData.jsx';
import useDesignStore from '@/store/design';

const Layers = () => {
  const [element, setElement] = useState(null);
  const page = useDesignStore((state) => state.pages.find((page) => page.id === state.activePage));
  const elements = useDesignStore((state) => state.elements.filter((el) => el.page === page.id));
  const moveElementTo = useDesignStore((state) => state.moveElementTo);
  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragStart = (event) => {
    setElement(elements.find((obj) => obj.id === event.active.id));
  };

  const handleDragEnd = (event) => {
    setElement(null);
    const { active, over } = event;
    if (active.id !== over.id) {
      const overElement = elements.find((obj) => obj.id === over.id);
      moveElementTo(active.id, overElement.order);
    }
  };

  const sortedElements = [...elements].sort((a, b) => a.order - b.order);

  return (
    <DndContext
      sensors={sensors}
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
      collisionDetection={closestCenter}
    >
      <SortableContext items={sortedElements.map((el) => el.id)} strategy={verticalListSortingStrategy}>
        {elements?.length > 0 ? (
          <div className="space-y-2.5">
            {sortedElements.map((el) => (
              <LayerElement key={el.id} element={el} />
            ))}
          </div>
        ) : (
          <NoData text="No elements. Add some elements to the canvas" />
        )}
        <DragOverlay>{element ? <LayerItem element={element} /> : null}</DragOverlay>
      </SortableContext>
    </DndContext>
  );
};

export default Layers;
