import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';
import AutoResizeTextArea from '@/components/ui/AutoResizeTextArea.jsx';

export const Text = ({ element, onChange }) => {
  return (
    <div className="overflow-hidden relative w-full h-full" style={{ filter: `drop-shadow(${element.style.shadow})` }}>
      <AutoResizeTextArea
        style={{ ...(element?.style || {}), background: 'transparent' }}
        value={element.text}
        onChange={(v) => {
          onChange({ ...element, text: v });
        }}
      />
    </div>
  );
};

export const TextPresent = ({ element }) => {
  return (
    <div className="overflow-hidden w-full h-full relative">
      <div style={{ ...element.style, filter: `drop-shadow(${element.style.shadow})` }} className="w-full h-full">
        {element.text}
      </div>
    </div>
  );
};

Text.propTypes = ElementPropTypes;
TextPresent.propTypes = {
  element: PropTypes.object.isRequired,
};
