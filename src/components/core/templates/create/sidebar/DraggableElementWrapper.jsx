import DraggableElement from '@/components/core/templates/create/sidebar/DraggableElement.jsx';
import PropTypes from 'prop-types';
import useDesignStore from '@/store/design.js';

const DraggableElementWrapper = ({ element }) => {
  const createElements = useDesignStore((state) => state.createElements);
  const activePage = useDesignStore((state) => state.activePage);

  const handleClick = () => {
    if (Array.isArray(element.data)) {
      createElements(activePage, element.data);
    } else {
      createElements(activePage, [
        {
          ...element.data,
          position: {
            x: 10,
            y: 10,
          },
          rotation: 0,
        },
      ]);
    }
  };

  return (
    <DraggableElement
      element={element}
      className="relative h-full"
      content={
        <div className="relative overflow-hidden h-full" onClick={handleClick} title={element?.data?.text}>
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
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
    preview: PropTypes.any,
  }),
};

export default DraggableElementWrapper;
