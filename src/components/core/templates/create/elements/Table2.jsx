import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { cn, TableThemes } from '@/lib/utils.js';
import PropTypes from 'prop-types';
import { ElementPropTypes } from '@/lib/prop-types.js';
import { TbTableOff } from 'react-icons/tb';

const Table2 = ({ element, active, highlighted, width, onClick, onChange }) => {
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

Table2.propTypes = ElementPropTypes;

export const TableElementContent = ({ element }) => {
  const headers = element.config.data[1];
  const rows = element.config.data.slice(2);
  const max = Math.max(...element.config.data.slice(1).map((row) => row.length));
  const tableClassNames =
    element.theme && TableThemes[element.theme]?.tableHeadClassNames
      ? TableThemes[element.theme]?.tableHeadClassNames
      : '';
  const tableHeadClassNames =
    element.theme && TableThemes[element.theme]?.tableHeadClassNames
      ? TableThemes[element.theme]?.tableHeadClassNames
      : '';
  const tableHeadRowClassNames =
    element.theme && TableThemes[element.theme]?.tableHeadRowClassNames
      ? TableThemes[element.theme]?.tableHeadRowClassNames
      : '';
  const tableHeadDataClassNames =
    element.theme && TableThemes[element.theme]?.tableHeadDataClassNames
      ? TableThemes[element.theme]?.tableHeadDataClassNames
      : '';
  const tableBodyClassNames =
    element.theme && TableThemes[element.theme]?.tableBodyClassNames
      ? TableThemes[element.theme]?.tableBodyClassNames
      : '';
  const tableBodyRowClassNames =
    element.theme && TableThemes[element.theme]?.tableBodyRowClassNames
      ? TableThemes[element.theme]?.tableBodyRowClassNames
      : '';
  const tableBodyDataClassNames =
    element.theme && TableThemes[element.theme]?.tableBodyDataClassNames
      ? TableThemes[element.theme]?.tableBodyDataClassNames
      : '';

  return (
    <table
      className={cn(`w-full h-full table-auto border-separate border border-gray-400 rounded-lg ${tableClassNames}`, {
        [`${tableClassNames}`]: element.theme,
      })}
      style={element.style}
    >
      <thead
        className={cn({
          [`${tableHeadClassNames}`]: element.theme,
        })}
      >
        <tr>
          <th colSpan={5}>
            <span className="block w-full">
              {element.config.data[0]}
            </span>
          </th>
        </tr>
        <tr
          className={cn({
            [`${tableHeadRowClassNames}`]: element.theme,
          })}
        >
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
                  className={cn(
                    'text-left px-3 py-1 border-gray-400 font-semibold',
                    { 'border-l': index !== 0 },
                    {
                      [`${tableHeadDataClassNames}`]: element.theme,
                    }
                  )}
                  style={style}
                >
                  {header}
                </th>
              );
            })}
        </tr>
      </thead>
      <tbody
        className={cn({
          [`${tableBodyClassNames}`]: element.theme,
        })}
      >
        {rows.map((row, index) => (
          <tr
            key={`row-${index}`}
            className={cn({
              [`${tableBodyRowClassNames}`]: element.theme,
            })}
          >
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
                    className={cn(
                      'text-left border-gray-400 border-t px-3 py-1',
                      {
                        'border-l': index !== 0,
                      },
                      {
                        [`${tableBodyDataClassNames}`]: element.theme,
                      }
                    )}
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

export default Table2;

