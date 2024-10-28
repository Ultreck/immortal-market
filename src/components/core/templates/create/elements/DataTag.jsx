import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';
import AutoResizeTextArea from '@/components/ui/AutoResizeTextArea.jsx';

export const DataTag = ({ element, onChange }) => {
  return (
    <div
      className="overflow-hidden relative w-full h-full"
      style={{ filter: `drop-shadow(${element?.style?.shadow})` }}
    >
      <AutoResizeTextArea
        style={{ ...(element?.style || {}), background: 'transparent' }}
        value={element.config.content}
        onChange={(v) => {
          onChange({ ...element, config: { ...element.config, content: v } });
        }}
        className="bg-transparent"
      />
    </div>
  );
};

export const DataPresent = ({ element }) => {
  return <DataContent element={element} />;
};

const DataContent = ({ element }) => <div style={{ ...element.style }}>{element.config.content}</div>;

DataTag.propTypes = ElementPropTypes;
DataPresent.propTypes = {
  element: PropTypes.object.isRequired,
};
DataContent.propTypes = {
  element: PropTypes.object.isRequired,
};
