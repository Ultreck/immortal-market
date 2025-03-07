import PropTypes from 'prop-types';
import { useSortable } from '@dnd-kit/sortable';
import PageThumbnail from '@/components/core/templates/create/sidebar/layout/pages/PageThumbnail.jsx';
import { CSS } from '@dnd-kit/utilities';
import { cn } from '@/lib/utils.js';

const PageThumbnailItem = ({ page, active, thumbnail, onClick, className }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: page.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <PageThumbnail
      page={page}
      active={active}
      thumbnail={thumbnail}
      ref={setNodeRef}
      style={style}
      onClick={onClick}
      {...listeners}
      {...attributes}
      className={cn(className, { 'opacity-0': isDragging })}
    />
  );
};

PageThumbnailItem.propTypes = {
  page: PropTypes.object.isRequired,
  active: PropTypes.bool,
  thumbnail: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default PageThumbnailItem;
