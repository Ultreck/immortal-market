import { ElementPropTypes } from '@/lib/prop-types.js';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';

const Summarizer = ({ element, active, highlighted, width, onClick, onChange }) => {
  return (
    <ElementWrapper
      element={element}
      onClick={onClick}
      onChange={onChange}
      maxWidth={width}
      active={active}
      highlighted={highlighted}
      fit
    >
      <div>
        <p className="text-4xl">20%</p>
        <p className="mt-2">
          lorem ipsum dolor sit amet consectetur adipisicing elit. fugiat, quidem, voluptate, doloremque, quos,
          aspernatur
        </p>
      </div>
    </ElementWrapper>
  );
};

Summarizer.propTypes = ElementPropTypes;

export default Summarizer;
