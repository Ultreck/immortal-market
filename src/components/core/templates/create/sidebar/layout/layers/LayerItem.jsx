import { forwardRef } from 'react';
import { cn } from '@/lib/utils.js';
import { Button } from '@heroui/react';
import { RiCloseFill } from 'react-icons/ri';
import PropTypes from 'prop-types';
import useDesignStore from '@/store/design';

const LayerItem = forwardRef(({ element, className, ...props }, ref) => {
  const selectedElements = useDesignStore((state) => state.selectedElements);
  const selectElements = useDesignStore((state) => state.selectElements);
  const deleteElements = useDesignStore((state) => state.deleteElements);
  const selected = selectedElements.includes(element.id);

  return (
    <div ref={ref} {...props}>
      <div
        onClick={() => selectElements([element.id])}
        className={cn(
          'relative rounded-2xl pl-6 pr-4 py-2 flex items-center space-x-2 cursor-pointer justify-between',
          'bg-default-200/60 hover:bg-default-200 dark:bg-white/10 dark:hover:bg-white/15',
          { 'bg-primary-500 dark:bg-primary-100': selected }
        )}
      >
        <div className="flex items-center space-x-2 overflow-hidden">
          <span className="truncate">{element.text}</span>
        </div>
        <Button isIconOnly variant="light" size="sm" radius="full">
          <RiCloseFill size={20} className="block" onClick={() => deleteElements([element.id])} />
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
