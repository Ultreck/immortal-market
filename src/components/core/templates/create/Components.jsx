import { DragOverlay, useDraggable } from '@dnd-kit/core';
import { capitalize, cn, mergeRefs } from '@/lib/utils.js';
import PropTypes from 'prop-types';
import { createElement, useState } from 'react';
import elements from '@/lib/elements.jsx';
import { Tab, Tabs } from '@nextui-org/react';

const Components = () => {
  const [tab, setTab] = useState('design');

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
    <>
      <Tabs
        aria-label="Options"
        color="primary"
        radius="full"
        size="lg"
        classNames={{
          base: 'mb-6',
          tab: 'text-base px-4',
        }}
        selectedKey={tab}
        onSelectionChange={setTab}
      >
        <Tab key="design" title="Design" className="text-base" />
        <Tab key="data" title="Data" className="text-base" />
      </Tabs>
      <div className="space-y-8">
        {groups.map((group) => (
          <div key={group.key}>
            <h2 className="text-lg font-semibold mb-6">{capitalize(group.title)}</h2>
            <div className="grid grid-cols-2 gap-4">
              {group.elements.map((element) => (
                <DraggableElement
                  key={element.id}
                  element={element}
                  className={cn(
                    'relative bg-default-200 dark:bg-default-50 border border-default-300 dark:border-default-100 hover:bg-default-200 dark:hover:bg-default-100 rounded-2xl px-4 py-5',
                    { 'col-span-2 bg-transparent dark:bg-transparent text-default-700 px-6 py-4': element.preview },
                    { 'border-0': !element.preview }
                  )}
                  content={
                    element.preview || (
                      <div className="cursor-grab flex flex-col items-center justify-center pointer-events-none text-center h-full">
                        <span>{createElement(element.icon, { size: 20 })}</span>
                        <span className="text-sm leading-tight mt-2">{element.name}</span>
                      </div>
                    )
                  }
                  dragging={
                    element.preview ? (
                      <div className="px-6 py-6 text-default-100">{element.preview}</div>
                    ) : (
                      <div className="bg-default-200/60 dark:bg-default-50/80 flex items-center space-x-2 px-4 py-2 w-max rounded-2xl">
                        {createElement(element.icon, { size: 20 })}
                        <span className="text-sm">{element.name}</span>
                      </div>
                    )
                  }
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export const DraggableElement = ({ element, content, dragging, className }) => {
  const { attributes, listeners, setNodeRef, isDragging, setActivatorNodeRef } = useDraggable({
    id: element.id,
    data: element.data,
  });

  return (
    <div className={className} ref={mergeRefs(setNodeRef, setActivatorNodeRef)} {...listeners} {...attributes}>
      {content}
      <DragOverlay zIndex={1} dropAnimation={null}>
        {isDragging && dragging}
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
  content: PropTypes.any,
  dragging: PropTypes.any,
  className: PropTypes.string,
};

export default Components;
