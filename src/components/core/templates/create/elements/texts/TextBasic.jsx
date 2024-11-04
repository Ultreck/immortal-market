import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';
import AutoResizeTextArea from '@/components/ui/AutoResizeTextArea.jsx';

export const TextBasic = ({ element, onChange }) => {
  return (
    <AutoResizeTextArea
      style={{
        ...(element?.style || {}),
        background: 'transparent',
        filter: `drop-shadow(${element.style.shadow})`,
      }}
      value={element.text}
      onChange={(v) => {
        onChange({ ...element, text: v });
      }}
    />
  );
};

export const TextBasicPresent = ({ element }) => {
  return (
    <div style={{ ...element.style, filter: `drop-shadow(${element.style.shadow})` }} className="w-full h-max">
      {element.text}
    </div>
  );
};

export const TextBasicPreview = ({ element }) => {
  return (
    <div style={{ ...element.style, filter: `drop-shadow(${element.style?.shadow})` }} className="w-full h-max">
      {element.text}
    </div>
  );
};

TextBasic.propTypes = ElementPropTypes;
TextBasicPresent.propTypes = {
  element: PropTypes.object.isRequired,
};
TextBasicPreview.propTypes = {
  element: PropTypes.object.isRequired,
};
