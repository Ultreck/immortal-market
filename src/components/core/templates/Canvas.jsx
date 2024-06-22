import Element from './Element';
import { useDroppable } from '@dnd-kit/core';
import PropTypes from 'prop-types';
import { Card } from '@nextui-org/react';

const Canvas = ({ elements }) => {
  // const [selected, setSelected] = useState(null);
  const { setNodeRef } = useDroppable({
    id: 'canvas',
  });

  // const handleSelect = (element) => {
  //   setSelected(element);
  // };

  return (
    <Card ref={setNodeRef} className="card-shadow h-[600px] w-[600px] border border-default-200 rounded relative p-10">
      {elements.map((element, index) => (
        <Element key={index} element={element} />
      ))}
    </Card>
  );
};

Canvas.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.shape({})),
};

export default Canvas;
