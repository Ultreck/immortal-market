import { createElement, forwardRef } from 'react';
import useTemplateStore from '@/store/template.js';
import { icons } from '@/lib/elements.js';
import { cn } from '@/lib/utils.js';
import { Button } from '@nextui-org/react';
import { RiCloseFill } from 'react-icons/ri';
import PropTypes from 'prop-types';

const LayerItem = forwardRef(({ element, className, ...props }, ref) => {
  const selected = useTemplateStore((state) => state.template.selected);
  const selectElement = useTemplateStore((state) => state.selectElement);
  const deleteElement = useTemplateStore((state) => state.deleteElement);

  const icon = icons[element.type];
  const active = element.id === selected;

  return (
    <div
      ref={ref}
      className={cn('border-2 border-transparent rounded-2xl p-1 select-none', className, {
        'border-primary-500 dark:border-primary-400': active,
      })}
      {...props}
    >
      <div
        onClick={() => {
          alert(element.id);
          return selectElement(element.id);
        }}
        className={cn(
          'relative rounded-xl px-4 py-2 flex items-center space-x-2 cursor-pointer justify-between',
          'bg-default-200/60 hover:bg-default-200 dark:bg-default-100/50 dark:hover:bg-default-100'
        )}
      >
        <div className="flex items-center space-x-2 overflow-hidden">
          <span className="opacity-60">{createElement(icon, { size: 20 })}</span>
          <span className="truncate">{element.text}</span>
        </div>
        <Button isIconOnly variant="light" size="sm" radius="full">
          <RiCloseFill size={20} className="block" onClick={() => deleteElement(element.id)} />
        </Button>
      </div>
    </div>
  );
});

LayerItem.displayName = 'LayerItem';

LayerItem.propTypes = {
  element: PropTypes.object,
  className: PropTypes.string,
};

export default LayerItem;
