import { useDraggable } from '@dnd-kit/core';
import PropTypes from 'prop-types';
import { RiCircleLine, RiFontFamily, RiHeading2, RiPieChart2Line } from 'react-icons/ri';
import { Tab, Tabs } from '@nextui-org/react';
import { useState } from 'react';
import { mergeRefs } from '@/lib/utils.js';

const DraggableElement = ({ element }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging, setActivatorNodeRef } = useDraggable({
    id: element.id,
    data: element.data,
  });
  const style = transform ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` } : undefined;

  return (
    <div
      className="relative bg-default-200/60 hover:bg-default-200 dark:bg-default-50/80 dark:hover:bg-default-100 rounded-xl px-4 py-6"
      ref={mergeRefs(setNodeRef, setActivatorNodeRef)}
      {...listeners}
      {...attributes}
    >
      <div className="cursor-grab flex flex-col items-center justify-center pointer-events-none">
        <span>{element.icon}</span>
        <span className="mt-1">{element.name}</span>
      </div>
      {isDragging && (
        <div
          className="absolute z-[1] top-0 left-0 bg-default-200/60 dark:bg-default-50/80 flex items-center space-x-2 px-4 py-2 w-full rounded-xl"
          style={{ ...style }}
        >
          {element.icon}
          <span>{element.name}</span>
        </div>
      )}
    </div>
  );
};

DraggableElement.propTypes = {
  element: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    data: PropTypes.shape({
      type: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }),
  }),
};

const Sidebar = () => {
  const [tab, setTab] = useState('elements');

  const elements = [
    {
      id: 'heading',
      type: 'heading',
      name: 'Heading',
      icon: <RiHeading2 size="20" />,
      data: { type: 'heading', text: 'Heading', width: 400, height: 36 },
    },
    {
      id: 'text',
      type: 'text',
      name: 'Text',
      icon: <RiFontFamily size="20" />,
      data: { type: 'text', text: 'Text', width: 300, height: 20 },
    },
    {
      id: 'chart',
      type: 'chart',
      name: 'Chart',
      icon: <RiPieChart2Line size="20" />,
      data: { type: 'chart', text: 'Chart', width: 400, height: 400 },
    },
    {
      id: 'logo',
      type: 'logo',
      name: 'Logo',
      icon: <RiCircleLine size="20" />,
      data: { type: 'logo', text: 'Logo', width: 120, height: 0 },
    },
  ];

  return (
    <div className="h-full border-r border-default-200 dark:border-default-100">
      <div className="px-8 py-6">
        <Tabs aria-label="Template tabs" className="mb-6" radius="full" selectedKey={tab} onSelectionChange={setTab}>
          <Tab key="elements" title="Elements" className="text-base" />
          <Tab key="layers" title="Layers" className="text-base" isDisabled />
        </Tabs>
        <div className="grid grid-cols-2 gap-4">
          {elements.map((element) => (
            <DraggableElement key={element.id} element={element} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
