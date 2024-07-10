import useTemplateStore from '@/store/template.js';
import { DndContext, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import LayerElement from './LayerElement';
import { SortableContext, arrayMove, verticalListSortingStrategy } from '@dnd-kit/sortable';

const Layers = () => {
  const elements = useTemplateStore((state) => state.template.elements);
  const setElements = useTemplateStore((state) => state.setElements);

  const sensors = useSensors(useSensor(PointerSensor));
  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = elements.findIndex((obj) => obj.id === active.id);
      const newIndex = elements.findIndex((obj) => obj.id === over.id);
      setElements(arrayMove(elements, oldIndex, newIndex));
    }
  }
  return (
    <div className="px-4 py-4">
      <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
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
        </SortableContext>
      </DndContext>
    </div>
  );
};

Layers.propTypes = {};

export default Layers;

