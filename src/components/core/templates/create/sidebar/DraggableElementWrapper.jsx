import { cn } from '@/lib/utils.js';
import DraggableElement from '@/components/core/templates/create/sidebar/DraggableElement.jsx';
import PropTypes from 'prop-types';
import useTemplateStore from '@/store/template.js';

const DraggableElementWrapper = ({ element }) => {
  const addElements = useTemplateStore((state) => state.addElements);
  const activePage = useTemplateStore((state) => state.template.activePage);

  const handleClick = () => {
    addElements(
      [
        {
          id: crypto.randomUUID(),
          ...element.data,
          x: 10,
          y: 10,
          rotate: 0,
        },
      ],
      activePage
    );
  };

  return (
    <DraggableElement
      element={element}
      className={cn('relative h-full')}
      content={
        <div className="relative overflow-hidden h-full" onClick={handleClick}>
          {element.preview}
        </div>
      }
      dragging={<div className="relative overflow-hidden h-full">{element.preview}</div>}
    />
  );
};

DraggableElementWrapper.propTypes = {
  element: PropTypes.shape({
    id: PropTypes.string.isRequired,
    data: PropTypes.any,
    preview: PropTypes.any,
  }),
};

export default DraggableElementWrapper;
