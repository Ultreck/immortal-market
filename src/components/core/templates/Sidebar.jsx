import { useDraggable } from '@dnd-kit/core';
import PropTypes from 'prop-types';
import { RiFontFamily, RiPieChart2Line } from 'react-icons/ri';

const DraggableElement = ({ id, type, icon, name }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id,
    data: { type },
  });
  const style = transform ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` } : undefined;

  return (
    <div className="relative">
      <div
        ref={setNodeRef}
        {...listeners}
        {...attributes}
        className="cursor-grab border border-default-200 rounded-xl px-4 py-2 flex items-center space-x-2"
      >
        {icon}
        <span>{name}</span>
      </div>
      {isDragging && (
        <div
          className="absolute z-[1] top-0 left-0 border border-default-200 bg-background flex items-center space-x-2 px-4 py-2 w-full rounded-xl"
          style={{
            ...style,
          }}
        >
          {icon}
          <span>{name}</span>
        </div>
      )}
    </div>
  );
};

const Sidebar = () => {
  const elements = [
    {
      id: 'heading',
      type: 'heading',
      name: 'Heading',
      icon: <RiFontFamily size="20" />,
    },
    {
      id: 'text',
      type: 'text',
      name: 'Text',
      icon: <RiFontFamily size="20" />,
    },
    {
      id: 'chart',
      type: 'chart',
      name: 'Chart',
      icon: <RiPieChart2Line size="20" />,
    },
  ];
  return (
    <div>
      <div className="w-[200px] flex flex-col space-y-2">
        {elements.map((element) => (
          <DraggableElement key={element.id} {...element} />
        ))}
      </div>
    </div>
  );
};

DraggableElement.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  name: PropTypes.string.isRequired,
};

export default Sidebar;
