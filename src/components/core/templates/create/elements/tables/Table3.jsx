import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { cn } from '@/lib/utils.js';
import PropTypes from 'prop-types';
import { ElementPropTypes } from '@/lib/prop-types.js';

const Table3 = ({ element, active, highlighted, width, onClick, onChange }) => {
  return (
    <ElementWrapper
      element={element}
      onClick={onClick}
      onChange={onChange}
      maxWidth={width}
      active={active}
      highlighted={highlighted}
    >
      <div className="overflow-hidden relative w-full h-full">
        {element.config?.data && <TableElementContent element={element} />}
      </div>
    </ElementWrapper>
  );
};

Table3.propTypes = ElementPropTypes;

export const TableElementContent = ({ element }) => {
  const colors = element.config.colors;
  const headers = element.config.data.heading;
  const sides = element.config.data.sideheading;
  const rows = element.config.data.rows;
  const max = headers.length;

  return (
    <table
      className={cn(`w-full h-full table-auto border-separate border border-gray-400 rounded-lg `)}
      style={element.style}
    >
      <thead>
        <tr>
          {Array(max)
            .fill(null)
            .map((_, index) => {
              const header = headers[index];
              const style = {};
              if (index !== 0) {
                style.borderLeftWidth = element.style.borderWidth;
                style.borderLeftColor = element.style.borderColor;
              }
              return (
                <th
                  key={`header-${index}`}
                  className={cn('text-left px-3 py-1 border-gray-400 font-semibold', { 'border-l': index !== 0 })}
                  style={{ ...style, background: index ? colors[0] : '#ffff' }}
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
            <td
              key={`cell-${index}`}
              className={cn('border border-gray-300 px-4 py-2 h-fit', {
                'border-l': index !== 0,
              })}
              style={{ background: colors[1] }}
            >
              {sides[index]}
            </td>
            {row.map((_, index) => {
              const cell = _;
              const style = { borderTopWidth: element.style.borderWidth, borderTopColor: element.style.borderColor };
              if (index !== 0) {
                style.borderLeftWidth = element.style.borderWidth;
                style.borderLeftColor = element.style.borderColor;
              }
              return (
                <td key={`cell-${index}`} className="border border-gray-300 h-fit" style={{ background: colors[2] }}>
                  <div className="flex flex-col h-full">
                    {cell.map((_, index) => (
                      <div key={`data-${index}`} className="border-b h-1/3 px-2 flex flex-col justify-center">
                        {_}
                      </div>
                    ))}
                  </div>
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TableElementContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default Table3;

