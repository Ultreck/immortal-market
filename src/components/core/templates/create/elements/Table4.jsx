import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { cn, TableThemes } from '@/lib/utils.js';
import PropTypes from 'prop-types';
import { ElementPropTypes } from '@/lib/prop-types.js';
import { TbTableOff } from 'react-icons/tb';

const Table4 = ({ element, active, highlighted, width, onClick, onChange }) => {
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

Table4.propTypes = ElementPropTypes;

export const TableElementContent = ({ element }) => {
  const headers = element.config.data.heading;
  const subheading = element.config.data.subheading;
  const rows = element.config.data.rows;
  const max = headers.length;
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
  // const tableBodyDataClassNames =
  //   element.theme && TableThemes[element.theme]?.tableBodyDataClassNames
  //     ? TableThemes[element.theme]?.tableBodyDataClassNames
  //     : '';

  return (
    <table
      className={cn(`w-full h-full table-audddto border-separate border border-gray-400 rounded-lg ${tableClassNames}`, {
        [`${tableClassNames}`]: element.theme,
      })}
      style={element.style}
    >
      <thead
        className={cn({
          [`${tableHeadClassNames}`]: element.theme,
        })}
      >
        <tr
          className={cn("border-b",{
            [`${tableHeadRowClassNames}`]: element.theme,
          })}
        >
          <th
            className={cn('text-left px-3 py-1 border-gray-400 font-semibold', {
              [`${tableHeadDataClassNames}`]: element.theme,
            })}
          ></th>
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
                  colSpan={2}
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
        <tr
          className={cn({
            [`${tableHeadRowClassNames}`]: element.theme,
          })}
        >
          {subheading.map((_, index) => {
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
                {_}
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
            className={cn('', {
              [`${tableBodyRowClassNames}`]: element.theme,
            })}
          >
            {row.map((_, index) => {
              const style = { borderTopWidth: element.style.borderWidth, borderTopColor: element.style.borderColor };
              if (index !== 0) {
                style.borderLeftWidth = element.style.borderWidth;
                style.borderLeftColor = element.style.borderColor;
              }
              return (
                <td key={`cell-${index}`} className="border border-gray-300 h-fit">
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

export default Table4;

