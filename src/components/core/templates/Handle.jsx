import { cn } from '@/lib/utils.js';
import PropType from 'prop-types';
import { RiDraggable } from 'react-icons/ri';

const Handle = ({ placement = 'outside' }) => {
  return (
    <div
      className={cn(
        'absolute flex pl-1 w-max',
        { 'top-2 right-2': placement === 'inside' },
        { 'top-0 left-full justify-center h-full pt-0 pl-2': placement === 'outside' }
      )}
    >
      <div className="handle bg-gray-300 text-black w-max h-max px-[1px] py-1 rounded-full cursor-grab">
        <RiDraggable size="16" />
      </div>
    </div>
  );
};

Handle.propTypes = {
  placement: PropType.oneOf(['inside', 'outside']),
};

export default Handle;
