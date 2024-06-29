import Element from './Element';
import { useDroppable } from '@dnd-kit/core';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { mergeRefs } from '@/lib/utils.js';

const getElementWidthWithoutPadding = (element) => {
  if (!element) return 0;
  const computedStyle = getComputedStyle(element);
  return element.clientWidth - parseFloat(computedStyle.paddingLeft) - parseFloat(computedStyle.paddingRight);
};

const Canvas = ({ elements, onChange }) => {
  const root = useRef();
  const [id, setId] = useState(null);
  const [width, setWidth] = useState(0);
  const { setNodeRef } = useDroppable({ id: 'canvas' });

  const handleSelect = (id) => setId(id);

  useOnClickOutside(root, () => setId(null));

  const handleCardClick = (e) => {
    if (e.target === root.current) setId(null);
  };

  useEffect(() => {
    const width = getElementWidthWithoutPadding(root.current);
    setWidth(width);
  }, []);

  return (
    <div
      onClick={handleCardClick}
      ref={mergeRefs(setNodeRef, root)}
      className="bg-white text-black border border-default-200 h-[600px] w-[600px] rounded-lg relative overflow-hidden"
    >
      {elements.map((element, index) => (
        <Element
          root={root}
          key={index}
          element={element}
          active={element.id === id}
          onClick={() => handleSelect(element.id)}
          onChange={onChange}
          width={width}
        />
      ))}
    </div>
  );
};

Canvas.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Canvas;
