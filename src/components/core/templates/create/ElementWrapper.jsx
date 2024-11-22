import { cn } from '@/lib/utils.js';
import PropTypes from 'prop-types';
import useTemplateStore from '@/store/template.js';
import ElementCommentBadge from '@/components/core/templates/create/comment/ElementCommentBadge.jsx';

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
  const isCommentsVisible = useTemplateStore((state) => state.template.isCommentsVisible);

  return (
    <div
      className={cn('w-max absolute top-0 left-0 group select-none pointer-events-auto', className)}
      style={{
        transform: `translate(${element.x}px, ${element.y}px) rotate(${element.rotate}deg)`,
        width: element.width,
        height: !fit ? element.height : undefined,
      }}
      id={`element-${element.id}`}
    >
      <div
        className={cn(
          'absolute inset-0 border border-yellow-500 border-transparent z-[1] pointer-events-auto',
          { 'group-hover:border-primary-500 !border': !selected && !highlighted },
          { 'border-primary-500': highlighted },
          { 'border-primary-500': selected },
          { 'border-purple-500 pointer-events-none': active }
        )}
        onMouseDown={(e) => onClick(element.id, e)}
        onDoubleClick={() => onDoubleClick(element.id)}
      />
      {fit ? <div className="w-full h-max">{children}</div> : <div className="w-full h-full">{children}</div>}
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

export default ElementWrapper;
