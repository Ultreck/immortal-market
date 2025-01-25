import { forwardRef } from 'react';
import useTemplateStore from '@/store/template.js';
import { cn } from '@/lib/utils.js';
import { Button } from '@heroui/react';
import { RiCloseFill } from 'react-icons/ri';
import PropTypes from 'prop-types';

const LayerItem = forwardRef(({ element, className, ...props }, ref) => {
  const selectedElements = useTemplateStore((state) => state.template.selectedElements);
  const selectElements = useTemplateStore((state) => state.selectElements);
  const deleteElements = useTemplateStore((state) => state.deleteElements);
  const activePage = useTemplateStore((state) => state.template.activePage);

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
        <Button isIconOnly variant="light" size="sm" radius="full">
          <RiCloseFill size={20} className="block" onClick={() => deleteElements([element.id], activePage)} />
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
