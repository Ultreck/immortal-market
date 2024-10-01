import DraggableElement from '@/components/core/templates/create/sidebar/DraggableElement.jsx';
import PropTypes from 'prop-types';
import useTemplateStore from '@/store/template.js';

const DraggableElementWrapper = ({ element }) => {
  const addElements = useTemplateStore((state) => state.addElements);
  const activePage = useTemplateStore((state) => state.template.activePage);

  const handleClick = () => {
    if (Array.isArray(element.data)) {
      const elements = element.data.map((el) => ({ ...el, id: crypto.randomUUID() }));
      addElements(elements, activePage);
    } else {
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
    }
  };

  return (
    <DraggableElement
      element={element}
      className="relative h-full"
      content={
        <div className="relative overflow-hidden h-full" onClick={handleClick} title={element.data.text}>
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
