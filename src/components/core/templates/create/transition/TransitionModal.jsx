import { AnimatePresence, motion } from 'framer-motion';
import useTemplateStore from '@/store/template';
import { closestCenter, DndContext, DragOverlay, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import NoData from '@/components/ui/NoData.jsx';
import { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import { cn } from '@nextui-org/react';
import { CSS } from '@dnd-kit/utilities';
import { RiCloseFill } from 'react-icons/ri';

const TransitionModal = () => {
  const isTransitionOpen = useTemplateStore((state) => state.template.isTransitionOpen);
  const [element, setElement] = useState(null);
  const page = useTemplateStore(({ template }) => template.pages.find((page) => page.id === template.activePage));
  const updatePage = useTemplateStore((state) => state.updatePage);
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const sensors = useSensors(useSensor(PointerSensor));
  const handleDragStart = (event) => {
    setElement(page.elements.find((obj) => obj.id === event.active.id));
  };

  const handleDragEnd = (event) => {
    setElement(null);
    const { active, over } = event;
    if (!over || active.id === over.id) {
      return;
    }
    const oldIndex = page.elements.findIndex((obj) => obj.id === active.id);
    const newIndex = page.elements.findIndex((obj) => obj.id === over.id);
    const reorderedElements = arrayMove(page.elements, oldIndex, newIndex);
    const updatedElements = reorderedElements.map((el, index) => ({
      ...el,
      style: {
        ...el.style,
        order: index + 1,
      },
    }));
    updatePage({ elements: updatedElements }, page.id);
  };

  return (
    <AnimatePresence>
      {isTransitionOpen && (
        <motion.div
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed right-8 top-5 w-full max-w-[370px] z-50"
        >
          <div className="bg-white dark:bg-default-50 border border-default-200 dark:border-default-100 w-full max-h-[500px] rounded-2xl overflow-y-auto shadow px-8 py-6">
            <div className="flex items-center justify-between mb-4">
              <p>Transition</p>
              <RiCloseFill color="red" size={20} onClick={() => updateTemplate({ isTransitionOpen: false })} />
            </div>
            <DndContext
              sensors={sensors}
              onDragEnd={handleDragEnd}
              onDragStart={handleDragStart}
              collisionDetection={closestCenter}
            >
              <SortableContext items={page?.elements || []} strategy={verticalListSortingStrategy}>
                {page?.elements?.length > 0 ? (
                  <div className="space-y-1">
                    {page.elements.map((element) => (
                      <TransitionElement key={element.id} element={element} />
                    ))}
                  </div>
                ) : (
                  <NoData text="No elements. Add some elements to the canvas" />
                )}
                <DragOverlay>{element ? <TransitionItem element={element} /> : null}</DragOverlay>
              </SortableContext>
            </DndContext>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TransitionModal;

const TransitionElement = ({ element, className }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: element.id,
    data: element.data,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <TransitionItem
      element={element}
      ref={setNodeRef}
      style={style}
      key={element.id}
      {...listeners}
      {...attributes}
      className={cn(className, { 'opacity-0': isDragging })}
    />
  );
};

TransitionElement.propTypes = {
  element: PropTypes.object,
  className: PropTypes.string,
};

const TransitionItem = forwardRef(({ element, className, ...props }, ref) => {
  const selectedElements = useTemplateStore((state) => state.template.selectedElements);
  const selectElements = useTemplateStore((state) => state.selectElements);
  const active = selectedElements.includes(element.id);

  return (
    <div
      ref={ref}
      className={cn('border-2 border-transparent rounded-3xl p-1 select-none', className, {
        'border-primary-500 dark:border-primary-400': active,
      })}
      {...props}
    >
      <div
        onClick={() => selectElements([element.id])}
        className={cn(
          'relative rounded-2xl pl-6 pr-4 py-2.5 flex items-center space-x-2 cursor-pointer justify-between',
          'bg-default-200/60 hover:bg-default-200 dark:bg-white/10 dark:hover:bg-white/15'
        )}
      >
        <div className="flex items-center space-x-2 overflow-hidden">
          <span className="truncate">{element.text}</span>
        </div>
      </div>
    </div>
  );
});

TransitionItem.displayName = 'TransitionItem';

TransitionItem.propTypes = {
  element: PropTypes.object,
  className: PropTypes.string,
};
