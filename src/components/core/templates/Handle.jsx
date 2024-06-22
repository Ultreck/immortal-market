import { cn } from '@/lib/utils.js';
import PropType from 'prop-types';
import { RiDraggable } from 'react-icons/ri';

const Handle = ({ placement = 'outside' }) => {
  return (
    <div
      className={cn(
        'absolute hidden group-hover:flex pb-1',
        { 'top-2 right-2': placement === 'inside' },
        { 'bottom-[calc(100%)] right-0 w-full justify-center': placement === 'outside' }
      )}
    >
      <div className="handle bg-default-200 w-max h-max px-[0.5] py-1 rounded-full cursor-grab rotate-[90deg]">
        <RiDraggable size="12" />
      </div>
    </div>
  );
};

Handle.propTypes = {
  placement: PropType.oneOf(['inside', 'outside']),
};

export default Handle;
