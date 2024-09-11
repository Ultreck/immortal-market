import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { cn } from '@/lib/utils.js';
import PropTypes from 'prop-types';
import { ElementPropTypes } from '@/lib/prop-types.js';
import { TbTableOff } from 'react-icons/tb';

const Table = ({ element, active, highlighted, width, onClick, onChange }) => {
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
        {element.config?.data ? (
          <TableElementContent element={element} />
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

Table.propTypes = ElementPropTypes;

export const TableElementContent = ({ element }) => {
  const colors = element.config.colors;
  const headers = element.config.data[0];
  const rows = element.config.data.slice(1);
  const max = Math.max(...element.config.data.map((row) => row.length));
  

  return (
    <table
      className={cn(`w-full h-full table-auto border-separate border border-gray-400 rounded-lg`)}
      style={element.style}
    >
      <thead style={{ background: colors[0] }}>
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
                  style={style}
                >
                  {header}
                </th>
              );
            })}
        </tr>
      </thead>
      <tbody style={{ background: colors[1] }}>
        {rows.map((row, index) => (
          <tr key={`row-${index}`}>
            {Array(max)
              .fill(null)
              .map((_, index) => {
                const cell = row[index];
                const style = { borderTopWidth: element.style.borderWidth, borderTopColor: element.style.borderColor };
                if (index !== 0) {
                  style.borderLeftWidth = element.style.borderWidth;
                  style.borderLeftColor = element.style.borderColor;
                }
                return (
                  <td
                    key={`cell-${index}`}
                    className={cn('text-left border-gray-400 border-t px-3 py-1', {
                      'border-l': index !== 0,
                    })}
                    style={style}
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

TableElementContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default Table;

