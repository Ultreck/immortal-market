import { DragOverlay, useDraggable } from '@dnd-kit/core';
import { capitalize, mergeRefs } from '@/lib/utils.js';
import PropTypes from 'prop-types';
import { createElement } from 'react';
import elements from '@/lib/elements.js';
import { Accordion, AccordionItem } from '@nextui-org/react';

const Elements = () => {
  const groups = elements.reduce((acc, element) => {
    const group = acc.find((group) => group.key === element.group);
    if (group) {
      group.elements.push(element);
    } else {
      acc.push({
        key: element.group,
        title: capitalize(element.group),
        elements: [element],
      });
    }
    return acc;
  }, []);

  return (
    <div className="px-8">
      <Accordion
        variant="light"
        className="!px-0"
        defaultSelectedKeys={[groups[0].key]}
        itemClasses={{ heading: 'pt-2', content: 'pb-6' }}
      >
        {groups.map((group) => (
          <AccordionItem key={group.key} aria-label={group.title} title={capitalize(group.title)}>
            <div className="grid grid-cols-2 gap-4">
              {group.elements.map((element) => (
                <DraggableElement key={element.id} element={element} />
              ))}
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

const DraggableElement = ({ element }) => {
  const { attributes, listeners, setNodeRef, isDragging, setActivatorNodeRef } = useDraggable({
    id: element.id,
    data: element.data,
  });

  return (
    <div
      className="relative bg-default-200/60 hover:bg-default-200 dark:bg-default-100/80 dark:hover:bg-default-100 rounded-xl px-4 py-4"
      ref={mergeRefs(setNodeRef, setActivatorNodeRef)}
      {...listeners}
      {...attributes}
    >
      <div className="cursor-grab flex flex-col items-center justify-center pointer-events-none">
        <span>{createElement(element.icon, { size: 20 })}</span>
        <span className="mt-1">{element.name}</span>
      </div>
      <DragOverlay zIndex={1} dropAnimation={null}>
        {isDragging && (
          <div className="bg-default-200/60 dark:bg-default-50/80 flex items-center space-x-2 px-4 py-2 w-min rounded-xl">
            {createElement(element.icon, { size: 20 })}
            <span>{element.name}</span>
          </div>
        )}
      </DragOverlay>
    </div>
  );
};

DraggableElement.propTypes = {
  element: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.any.isRequired,
    data: PropTypes.shape({
      type: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }),
  }),
};

export default Elements;
