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

const Canvas = ({ elements }) => {
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
      className="card-shadow bg-white text-black h-[600px] w-[600px] !rounded-none relative p-10"
    >
      {elements.map((element, index) => (
        <Element
          key={index}
          element={element}
          selected={element.id === id}
          onClick={() => handleSelect(element.id)}
          width={width}
        />
      ))}
    </div>
  );
};

Canvas.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Canvas;
