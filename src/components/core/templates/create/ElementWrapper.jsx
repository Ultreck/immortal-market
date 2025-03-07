import { cn } from '@/lib/utils.js';
import PropTypes from 'prop-types';
import useDesignStore from '@/store/design.js';
import ElementCommentBadge from '@/components/core/templates/create/comment/ElementCommentBadge.jsx';
import ErrorBoundary from '@/components/ErrorBoundary.jsx';
import { RiAlertLine } from 'react-icons/ri';
import { memo } from 'react';

const ElementWrapper = ({
  element,
  onClick,
  onDoubleClick,
  children,
  selected,
  highlighted = false,
  active = false,
  fit = false,
  className,
}) => {
  const isCommentsVisible = useDesignStore((state) => state.isCommentsOpen);

  return (
    <div
      className={cn('w-max absolute top-0 left-0 group select-none pointer-events-auto', className)}
      style={{
        transform: `translate(${element.position.x}px, ${element.position.y}px) rotate(${element.rotation}deg)`,
        width: element.size.width,
        height: !fit ? element.size.height : undefined,
      }}
      id={`element-${element.id}`}
    >
      <div
        className={cn(
          'absolute inset-0 border-2 border-transparent z-[1] pointer-events-auto',
          { 'group-hover:border-primary-200 !border': !selected && !highlighted },
          { 'border-primary-200': highlighted },
          { 'border-primary-500': selected },
          { 'border-purple-500 pointer-events-none': active }
        )}
        onMouseDown={(e) => onClick(element.id, e)}
        onDoubleClick={() => onDoubleClick(element.id)}
      />
      <ErrorBoundary
        fallback={
          <div className="bg-red-800 text-white rounded-2xl p-10 h-full w-full flex flex-col items-center justify-center">
            <RiAlertLine size="28" />
            <p className="mt-4 max-w-[200px] leading-[1.1] text-center">
              Something went wrong while rendering this component
            </p>
          </div>
        }
      >
        {fit ? <div className="w-full h-max">{children}</div> : <div className="w-full h-full">{children}</div>}
      </ErrorBoundary>
      {isCommentsVisible && <ElementCommentBadge element={element} />}
    </div>
  );
};

ElementWrapper.propTypes = {
  element: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  onDoubleClick: PropTypes.func,
  selected: PropTypes.bool.isRequired,
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  highlighted: PropTypes.bool,
  fit: PropTypes.bool,
  active: PropTypes.bool,
};

export default memo(ElementWrapper);
