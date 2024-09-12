import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { cn, TableThemes } from '@/lib/utils.js';
import PropTypes from 'prop-types';
import { ElementPropTypes } from '@/lib/prop-types.js';

const Table7 = ({ element, active, highlighted, width, onClick, onChange }) => {
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

Table7.propTypes = ElementPropTypes;

export const TableElementContent = ({ element }) => {
  const colors = element.config.colors;
  const headers = element.config.data.heading;
  const rows = element.config.data.rows;
  const tableClassNames =
    element.theme && TableThemes[element.theme]?.tableHeadClassNames
      ? TableThemes[element.theme]?.tableHeadClassNames
      : '';

  return (
    <table
      className={cn(`w-full h-full table-auto border-separate border border-gray-400 rounded-lg ${tableClassNames}`)}
      style={element.style}
    >
      <thead>
        <tr>
          <th></th>
          {headers.map((_, index) => {
            const style = {};
            if (index !== 0) {
              style.borderLeftWidth = element.style.borderWidth;
              style.borderLeftColor = element.style.borderColor;
            }
            return (
              <th
                key={`header-${index}`}
                className={cn('text-left px-3 py-1 border-gray-400 font-semibold', { 'border-l': index !== 0 })}
                style={{ ...style, background: colors[0] }}
              >
                {_}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody style={{ background: colors[1] }}>
        {rows.map((row, index) => (
          <tr key={`row-${index}`} style={{ background: index % 2 !== 0 ? colors[2] : '' }}>
            {row.map((_, index) => {
              const style = { borderTopWidth: element.style.borderWidth, borderTopColor: element.style.borderColor };
              if (index !== 0) {
                style.borderLeftWidth = element.style.borderWidth;
                style.borderLeftColor = element.style.borderColor;
              }
              return (
                <td
                  key={`cell-${index}`}
                  style={{ ...style, background: index === 0 ? colors[0] : '' }}
                  className="border border-gray-300 h-fit"
                >
                  {_}
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

export default Table7;

