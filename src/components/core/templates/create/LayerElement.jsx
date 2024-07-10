import { RiCloseFill } from 'react-icons/ri';
import { cn } from '@/lib/utils.js';
import { createElement } from 'react';
import { icons } from '@/lib/elements.js';
import { Button } from '@nextui-org/react';
import useTemplateStore from '@/store/template.js';
import PropTypes from 'prop-types';
import { useSortable } from '@dnd-kit/sortable';

const LayerElement = ({ element }) => {
  const selected = useTemplateStore((state) => state.template.selected);
  const selectElement = useTemplateStore((state) => state.selectElement);
  const deleteElement = useTemplateStore((state) => state.deleteElement);
  const active = element.id === selected;
  const icon = icons[element.type];

  const { attributes, listeners, setNodeRef, transform } = useSortable({
    id: element.id,
    data: element.data,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      key={element.id}
      className={cn('transition-all duration-200 border-2 border-transparent rounded-2xl p-1 select-none', {
        'border-primary-500 dark:border-primary-400': active,
      })}
      {...listeners}
      {...attributes}
    >
      <div
        className={cn(
          'relative rounded-xl px-4 py-2 flex items-center space-x-2 cursor-pointer justify-between',
          'bg-default-200/60 hover:bg-default-200 dark:bg-default-100/50 dark:hover:bg-default-100'
        )}
        onClick={() => selectElement(element.id)}
      >
        <div className="flex items-center space-x-2">
          <span className="opacity-60">{createElement(icon, { size: 20 })}</span>
          <span className="truncate">{element.text}</span>
        </div>
        <Button isIconOnly variant="light" size="sm" radius="full">
          <RiCloseFill size={20} className="block" onClick={() => deleteElement(element.id)} />
        </Button>
      </div>
    </div>
  );
};

LayerElement.propTypes = {
  element: PropTypes.object,
};

export default LayerElement;

