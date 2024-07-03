import { useDroppable } from '@dnd-kit/core';
import PropTypes from 'prop-types';
import { Fragment, useEffect, useRef, useState } from 'react';
import { mergeRefs } from '@/lib/utils.js';
import Heading from '@/components/core/templates/create/elements/Heading.jsx';
import Text from '@/components/core/templates/create/elements/Text.jsx';
import Chart from '@/components/core/templates/create/elements/Chart.jsx';
import Logo from '@/components/core/templates/create/elements/Logo.jsx';

const getElementWidthWithoutPadding = (element) => {
  if (!element) return 0;
  const computedStyle = getComputedStyle(element);
  return element.clientWidth - parseFloat(computedStyle.paddingLeft) - parseFloat(computedStyle.paddingRight);
};

const Canvas = ({ elements, current, onChange, onSelect }) => {
  const root = useRef();
  const [width, setWidth] = useState(0);
  const { setNodeRef } = useDroppable({ id: 'canvas' });

  const handleSelect = (id) => onSelect(id);

  const handleCardClick = (e) => {
    if (e.target === root.current) onSelect(null);
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
      {elements.map((element) => {
        const active = element.id === current;
        return (
          <Fragment key={element.id}>
            {element.type === 'heading' && (
              <Heading
                root={root}
                element={element}
                active={active}
                onClick={() => handleSelect(element.id)}
                onChange={onChange}
                width={width}
              />
            )}
            {element.type === 'text' && (
              <Text
                root={root}
                element={element}
                active={active}
                onClick={() => handleSelect(element.id)}
                onChange={onChange}
                width={width}
              />
            )}
            {element.type === 'chart' && (
              <Chart
                root={root}
                element={element}
                active={active}
                onClick={() => handleSelect(element.id)}
                onChange={onChange}
                width={width}
              />
            )}
            {element.type === 'logo' && (
              <Logo
                root={root}
                element={element}
                active={active}
                onClick={() => handleSelect(element.id)}
                onChange={onChange}
                width={width}
              />
            )}
          </Fragment>
        );
      })}
    </div>
  );
};

Canvas.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  current: PropTypes.string,
};

export default Canvas;
