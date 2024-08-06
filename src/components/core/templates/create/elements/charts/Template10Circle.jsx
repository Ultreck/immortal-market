import ElementWrapper from '../../ElementWrapper';
import Advanced10Circle from './advanced/Advanced10Circle';
import { ElementPropTypes } from '@/lib/prop-types.js';

const Template10Circle = ({ element, active, highlighted, width, onClick, onChange }) => {
  return (
    <ElementWrapper
      element={element}
      onClick={onClick}
      onChange={onChange}
      maxWidth={width}
      active={active}
      highlighted={highlighted}
    >
      {element.type === 'chart-10-circle' && <Advanced10Circle element={element} />}
    </ElementWrapper>
  );
};

Template10Circle.propTypes = ElementPropTypes;

export default Template10Circle;
