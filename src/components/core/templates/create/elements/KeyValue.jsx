import { TbBracketsOff } from 'react-icons/tb';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { elementPropTypes } from '@/lib/elements.jsx';
import PropTypes from 'prop-types';

const KeyValue = ({ element, active, highlighted, width, onClick, onChange }) => {
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
      constrained
      resizeHandles={['se', 'e', 's']}
    >
      <div className="overflow-hidden relative w-full h-full">
        {element.config?.data ? (
          <Content element={element} />
        ) : (
          <div className="h-full w-full flex flex-col text-center items-center justify-center px-4">
            <p className="text-lg font-bold">
              <TbBracketsOff size={40} className="opacity-60" />
            </p>
            <p className="mt-4 text-sm max-w-xs">Select the key-value tool to configure your table.</p>
          </div>
        )}
      </div>
    </ElementWrapper>
  );
};

const Content = ({ element }) => {
  const header = element.config.data[0];
  const rows = element.config.data.slice(1);

  return (
    <div
      className="w-full h-full border-separate border border-gray-400 rounded-lg divide-y divide-gray-400 flex flex-col"
      style={element.style}
    >
      {!!header.key && !!header.value && (
        <div
          className="text-left px-3 py-1 border-gray-400 font-semibold grid grid-cols-2"
          style={{ borderColor: element.style.borderColor }}
        >
          <span>{header.key}</span>
          <span>{header.value}</span>
        </div>
      )}
      {rows.map((row, i) => {
        return (
          <div
            key={`${row.key}-${i}`}
            className="text-left px-3 py-1 flex-1 items-center grid grid-cols-2"
            style={{ borderColor: element.style.borderColor }}
          >
            <span>{row.key}</span>
            <span>{row.value}</span>
          </div>
        );
      })}
    </div>
  );
};

KeyValue.propTypes = elementPropTypes;
Content.propTypes = {
  element: PropTypes.shape({
    config: PropTypes.shape({
      data: PropTypes.array.isRequired,
    }),
    style: PropTypes.object,
  }),
};

export default KeyValue;
