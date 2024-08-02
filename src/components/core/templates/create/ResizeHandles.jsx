import { cn } from '@/lib/utils.js';

export const getResizeHandles = ({ axis, ref, active }) => {
  if (['se', 'sw', 'ne', 'nw'].includes(axis)) {
    return (
      <div
        ref={ref}
        className={cn('absolute rounded-full bg-white shadow border border-gray-400 z-[10] w-[14px] h-[14px]', {
          '-right-[6px] -top-[6px] cursor-ne-resize': axis === 'ne',
          '-left-[6px] -top-[6px] cursor-nw-resize': axis === 'nw',
          '-left-[6px] -bottom-[6px] cursor-sw-resize': axis === 'sw',
          '-right-[6px] -bottom-[6px] cursor-se-resize': axis === 'se',
          hidden: !active,
        })}
      />
    );
  }
  if (['n', 's', 'e', 'w'].includes(axis)) {
    return (
      <div
        ref={ref}
        className={cn('absolute rounded-full bg-white shadow border border-gray-400 z-[10]', {
          '-top-[4px] left-1/2 -translate-x-1/2 w-[28px] h-[8px] cursor-n-resize': axis === 'n',
          '-bottom-[4px] left-1/2 -translate-x-1/2 w-[28px] h-[8px] cursor-s-resize': axis === 's',
          '-left-[4px] top-1/2 -translate-y-1/2 w-[8px] h-[28px] cursor-w-resize': axis === 'w',
          '-right-[4px] top-1/2 -translate-y-1/2 w-[8px] min-h-[8px] max-h-[28px] h-full cursor-e-resize': axis === 'e',
          hidden: !active,
        })}
      />
    );
  }
  return null;
};
