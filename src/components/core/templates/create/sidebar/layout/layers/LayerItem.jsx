import { cn } from '@/lib/utils.js';
import { Button } from '@heroui/react';
import { RiCloseFill } from 'react-icons/ri';
import PropTypes from 'prop-types';
import useDesignStore from '@/store/design';

const LayerItem = ({ element, ref, ...props }) => {
  const selectedElements = useDesignStore((state) => state.selectedElements);
  const selectElements = useDesignStore((state) => state.selectElements);
  const deleteElements = useDesignStore((state) => state.deleteElements);
  const selected = selectedElements.includes(element.key);

  return (
    <div ref={ref} {...props}>
      <div
        onClick={() => selectElements([element.key])}
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
          <RiCloseFill size={20} className="block" onClick={() => deleteElements([element.key])} />
        </Button>
      </div>
    </div>
  );
};

LayerItem.propTypes = {
  element: PropTypes.object,
  ref: PropTypes.any,
};

export default LayerItem;
