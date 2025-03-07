import PropTypes from 'prop-types';
import { useSortable } from '@dnd-kit/sortable';
import LayerItem from '@/components/core/templates/create/sidebar/layout/layers/LayerItem.jsx';
import { CSS } from '@dnd-kit/utilities';
import { cn } from '@/lib/utils.js';

const LayerElement = ({ element, className }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: element.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <LayerItem
      element={element}
      ref={setNodeRef}
      style={style}
      key={element.id}
      {...listeners}
      {...attributes}
      className={cn(className, { 'opacity-0': isDragging })}
    />
  );
};

LayerElement.propTypes = {
  element: PropTypes.object,
  className: PropTypes.string,
};

export default LayerElement;
