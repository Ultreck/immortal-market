import { elementPropTypes } from '@/lib/elements.js';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { cn } from '@/lib/utils.js';
import { TbTableOff } from 'react-icons/tb';
import PropTypes from 'prop-types';

const Content = ({ element }) => {
  const headers = element.table.data[0];
  const rows = element.table.data.slice(1);
  const max = Math.max(...element.table.data.map((row) => row.length));

  return (
    <table className="w-full h-full table-auto border-separate border border-gray-400 rounded-lg" style={element.style}>
      <thead>
        <tr>
          {Array(max)
            .fill(null)
            .map((_, index) => {
              const header = headers[index];
              return (
                <th
                  key={`header-${index}`}
                  className={cn('text-left px-3 py-1 border-gray-400 font-semibold', { 'border-l': index !== 0 })}
                  style={element.style}
                >
                  {header}
                </th>
              );
            })}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={`row-${index}`}>
            {Array(max)
              .fill(null)
              .map((_, index) => {
                const cell = row[index];
                return (
                  <td
                    key={`cell-${index}`}
                    className={cn('text-left border-gray-400 border-t px-3 py-1', {
                      'border-l': index !== 0,
                    })}
                    style={element.style}
                  >
                    {cell}
                  </td>
                );
              })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const Table = ({ element, active, highlighted, width, onClick, onChange }) => {
  return (
    <ElementWrapper
      element={element}
      onClick={onClick}
      onChange={onChange}
      onResize={(size) => {
        onChange({ ...element, width: size.width, height: size.height });
      }}
      maxWidth={width}
      editable
      active={active}
      highlighted={highlighted}
      constrained
      resizeHandles={['se', 'e', 's']}
    >
      <div className="overflow-hidden relative w-full h-full">
        {element.table?.data ? (
          <Content element={element} />
        ) : (
          <div className="h-full w-full flex flex-col text-center items-center justify-center px-4">
            <p className="text-lg font-bold">
              <TbTableOff size={40} className="opacity-60" />
            </p>
            <p className="mt-4 text-sm max-w-xs">Select the table tool to configure your table.</p>
          </div>
        )}
      </div>
    </ElementWrapper>
  );
};

Table.propTypes = elementPropTypes;
Content.propTypes = {
  element: PropTypes.shape({
    table: PropTypes.shape({
      data: PropTypes.array.isRequired,
    }),
    style: PropTypes.object,
  }),
};

export default Table;
