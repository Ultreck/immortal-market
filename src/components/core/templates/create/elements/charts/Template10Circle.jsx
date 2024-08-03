import React from 'react';
import ElementWrapper from '../../ElementWrapper';
import Advanced10Circle from './advanced/Advanced10Circle';

const Template10Circle = ({ element, active, highlighted, width, onClick, onChange }) => {
  return (
    <ElementWrapper
      element={element}
      onClick={onClick}
      onChange={onChange}
      onResize={(size) => {
        onChange({ ...element, width: size.width, height: size.height });
      }}
      maxWidth={width}
      active={active}
      highlighted={highlighted}
      resizeHandles={['se', 'e', 's']}
      constrained
    >
      {element.type === 'chart-10-circle' && <Advanced10Circle element={element} />}
    </ElementWrapper>
  );
};

export default Template10Circle;
