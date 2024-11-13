import PropTypes from 'prop-types';
import { ElementPropTypes } from '@/lib/prop-types.js';
import { useEffect, useMemo, useRef, useState } from 'react';
import { RiAddLine, RiArrowDownSLine } from 'react-icons/ri';
import { cn } from '@/lib/utils.js';
import AutoResizeTextArea from '@/components/ui/AutoResizeTextArea.jsx';
import MergeOptions from '@/components/core/templates/create/elements/table/MergeOptions.jsx';
import DeleteOptions from '@/components/core/templates/create/elements/table/DeleteOptions.jsx';
import FontOptions from '@/components/core/templates/create/elements/table/FontOptions.jsx';
import BackgroundOptions from '@/components/core/templates/create/elements/table/BackgroundOptions.jsx';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';

const getMaxColumns = (data) => {
  let max = 0;
  data.forEach((row) => {
    let currentColumns = 0;
    row.cells.forEach(({ colSpan = 1 }) => (currentColumns += colSpan));
    max = Math.max(max, currentColumns);
  });
  return max;
};

const getCellBackground = (row, col, scheme, colors) => {
  const c = scheme.reduce((acc, cur) => {
    const [name, index] = cur.split('/');
    acc[name] = colors[index];
    return acc;
  }, {});
  return c[col] || c[row];
};

const getCellPosition = (rows, rowIndex, cellIndex) => {
  for (let i = 0; i < rowIndex; i++) {
    const cell = rows[i].cells[cellIndex];
    if (!cell) continue;
    if (cell.rowSpan > 1 && cell.rowSpan > rowIndex - i) {
      return cellIndex + cell.colSpan;
    }
  }
  return cellIndex;
};

export const Table = ({ element, onChange, active }) => {
  const table = useRef(null);
  const rows = element.config.data;
  const [selection, setSelection] = useState(null);
  const [isSelecting, setIsSelecting] = useState(false);
  const [editing, setEditing] = useState(null);
  const maxCols = getMaxColumns(rows);
  const [isResizing, setIsResizing] = useState(false);
  const [resizingColumn, setResizingColumn] = useState(null);
  const [startX, setStartX] = useState(0);
  const [columnWidths, setColumnWidths] = useState(() => {
    return element.config.columnWidths || Array(maxCols).fill(Math.floor(element.width / maxCols));
  });

  useEffect(() => {
    if (!element.config.columnWidths) {
      const initialWidths = Array(maxCols).fill(Math.floor(element.width / maxCols));
      onChange({
        ...element,
        config: {
          ...element.config,
          columnWidths: initialWidths,
        },
      });
    }
  }, [maxCols]);

  const handleResizeStart = (e, columnIndex) => {
    e.preventDefault();
    e.stopPropagation();
    setIsResizing(true);
    setResizingColumn(columnIndex);
    setStartX(e.clientX);
  };

  const handleResizeMove = (e) => {
    if (!isResizing || resizingColumn === null) return;

    const deltaX = e.clientX - startX;
    const newWidths = [...columnWidths];
    const minWidth = 50;

    const newWidth = Math.max(newWidths[resizingColumn] + deltaX, minWidth);
    newWidths[resizingColumn] = newWidth;
    const newTotalWidth = newWidths.reduce((sum, width) => sum + width, 0);
    setColumnWidths(newWidths);
    setStartX(e.clientX);
    onChange({
      ...element,
      width: newTotalWidth,
      config: {
        ...element.config,
        columnWidths: newWidths,
      },
    });
  };

  const handleResizeEnd = () => {
    setIsResizing(false);
    setResizingColumn(null);
  };

  useEffect(() => {
    if (isResizing) {
      document.addEventListener('mousemove', handleResizeMove);
      document.addEventListener('mouseup', handleResizeEnd);
      return () => {
        document.removeEventListener('mousemove', handleResizeMove);
        document.removeEventListener('mouseup', handleResizeEnd);
      };
    }
  }, [isResizing, resizingColumn, columnWidths, startX]);

  useEffect(() => {
    if (!active) {
      setEditing(false);
      setSelection(null);
      setIsSelecting(false);
    }
  }, [active]);

  const handleRowChange = (i, j, v) => {
    onChange({
      ...element,
      config: {
        ...element.config,
        data: rows.map((row, index) => {
          if (index === i) {
            return {
              ...row,
              cells: row.cells.map((cell, _index) => {
                if (_index === j) {
                  return { ...cell, value: v };
                }
                return cell;
              }),
            };
          }
          return row;
        }),
      },
    });
  };

  const handleAddRow = (rowIndex) => {
    onChange({
      ...element,
      config: {
        ...element.config,
        data: (() => {
          const newRow = {
            cells: [...Array(maxCols).fill(null)].map(() => ({ value: '' })),
          };

          if (typeof rowIndex !== 'number') {
            return [...rows, newRow];
          }
          return [...rows.slice(0, rowIndex + 1), newRow, ...rows.slice(rowIndex + 1)];
        })(),
      },
    });
  };

  const handleAddColumn = (cellIndex) => {
    onChange({
      ...element,
      config: {
        ...element.config,
        data: rows.map((row) => {
          const index = typeof cellIndex === 'number' ? cellIndex : row.cells.length - 1;

          return {
            ...row,
            cells: [...row.cells.slice(0, index + 1), { value: '' }, ...row.cells.slice(index + 1)],
          };
        }),
      },
    });
  };

  const handleMouseDown = (e, rowIndex, cellIndex) => {
    setEditing(null);
    setIsSelecting(true);
    if (e.shiftKey) setSelection((prev) => ({ ...prev, endRow: rowIndex, endCol: cellIndex }));
    else setSelection({ startRow: rowIndex, startCol: cellIndex, endRow: rowIndex, endCol: cellIndex });
  };

  const handleMouseEnter = (e, rowIndex, cellIndex) => {
    if (isSelecting && selection) {
      setSelection((prev) => ({ ...prev, endRow: rowIndex, endCol: cellIndex }));
    }
  };

  const handleMouseUp = () => {
    setIsSelecting(false);
  };

  const isMultipleSelection = useMemo(() => {
    const { startCol, endCol, startRow, endRow } = selection || {};
    return !!selection && (startCol !== endCol || startRow !== endRow);
  }, [selection]);

  return (
    <>
      {!!selection && (
        <div className="absolute bottom-[calc(100%+30px)] left-0 space-x-2 flex items-center light">
          {isMultipleSelection && (
            <MergeOptions
              element={element}
              onChange={onChange}
              selection={selection}
              onSelectionChange={setSelection}
            />
          )}
          <DeleteOptions element={element} onChange={onChange} selection={selection} onSelectionChange={setSelection} />
          <FontOptions element={element} onChange={onChange} selection={selection} />
          <BackgroundOptions element={element} onChange={onChange} selection={selection} />
          {!isMultipleSelection && (
            <Dropdown classNames={{ content: 'shadow border border-default-200' }}>
              <DropdownTrigger>
                <Button variant="solid" size="sm" className="text-md" endContent={<RiArrowDownSLine size="20" />}>
                  Insert
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Delete actions"
                onAction={(key) => {
                  if (key === 'col-before') handleAddColumn(selection.endCol - 1);
                  if (key === 'col-after') handleAddColumn(selection.endCol);
                  if (key === 'row-above') handleAddRow(selection.endRow - 1);
                  if (key === 'row-below') handleAddRow(selection.endRow);
                }}
              >
                <DropdownItem key="col-before" classNames={{ title: 'text-base' }}>
                  Insert Column Before
                </DropdownItem>
                <DropdownItem key="col-after" classNames={{ title: 'text-base' }}>
                  Insert Column After
                </DropdownItem>
                <DropdownItem key="row-above" classNames={{ title: 'text-base' }}>
                  Insert Row Above
                </DropdownItem>
                <DropdownItem key="row-below" classNames={{ title: 'text-base' }}>
                  Insert Row Below
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          )}
        </div>
      )}
      <table
        ref={table}
        style={{
          ...element.style,
          width: `${columnWidths.reduce((sum, width) => sum + width, 0)}px`,
          tableLayout: 'fixed',
        }}
        className="w-full h-full table-auto border-collapse rounded-lg bg-white"
      >
        <colgroup>
          {columnWidths.map((width, index) => (
            <col key={index} style={{ width: `${width}px`, minWidth: `${width}px` }} />
          ))}
        </colgroup>
        <tbody>
          {rows.map((row, rowIndex) => {
            return (
              <tr key={`row-${rowIndex}`} className="group">
                {row.cells.map((cell, cellIndex) => {
                  const { scheme, colors } = element.config;
                  const cellPosition = getCellPosition(rows, rowIndex, cellIndex);
                  const background = getCellBackground(`r${rowIndex}`, `c${cellPosition}`, scheme, colors);
                  return (
                    <td
                      key={`cell-${cellIndex}`}
                      colSpan={cell.colSpan || 1}
                      rowSpan={cell.rowSpan || 1}
                      className={cn('border border-gray-300 p-0 relative', {
                        'rounded-bl-lg': cellPosition === 0 && cell.rowSpan >= rows.length - rowIndex,
                        'rounded-tl-lg': cellPosition === 0 && rowIndex === 0,
                        'rounded-br-lg': rowIndex === rows.length - 1 && cellIndex === rows[rowIndex].cells.length - 1,
                        'rounded-tr-lg': rowIndex === 0 && cellIndex === rows[rowIndex].cells.length - 1,
                      })}
                      style={{
                        background,
                        color: background ? '#ffffff' : '#000000',
                        width: `${columnWidths[cellPosition]}px`,
                        minWidth: `${columnWidths[cellPosition]}px`,
                        ...(cell.style || {}),
                      }}
                    >
                      {rowIndex === 0 && (
                        <div
                          className={cn(
                            'absolute top-0 right-0 w-1 h-full cursor-col-resize z-10',
                            "after:content-[''] after:absolute after:right-0 after:top-0 after:w-4 after:h-full after:-mr-2",
                            'hover:bg-blue-500'
                          )}
                          onMouseDown={(e) => handleResizeStart(e, cellPosition)}
                        />
                      )}
                      {editing !== `row,${rowIndex},${cellIndex}` && (
                        <div
                          onDoubleClick={() => setEditing(`row,${rowIndex},${cellIndex}`)}
                          onMouseDown={(e) => !isResizing && handleMouseDown(e, rowIndex, cellIndex)}
                          onMouseEnter={(e) => !isResizing && handleMouseEnter(e, rowIndex, cellIndex)}
                          onMouseUp={(e) => !isResizing && handleMouseUp(e, rowIndex, cellIndex)}
                          className={cn('absolute inset-0 bg-transparent h-full')}
                        />
                      )}
                      <AutoResizeTextArea
                        value={cell.value}
                        onChange={(v) => handleRowChange(rowIndex, cellIndex, v)}
                        className="bg-transparent w-full h-full px-3 py-1 leading-tight border border-transparent hover:border-red-300"
                        style={{ ...(cell.style || {}) }}
                      />
                      {selection &&
                        rowIndex >= Math.min(selection.startRow, selection.endRow) &&
                        rowIndex <= Math.max(selection.startRow, selection.endRow) &&
                        cellIndex >= Math.min(selection.startCol, selection.endCol) &&
                        cellIndex <= Math.max(selection.startCol, selection.endCol) && (
                          <div className="absolute inset-0 border-blue-500 border-2 pointer-events-none" />
                        )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {active && (
        <>
          <button
            onClick={handleAddRow}
            className="rounded-2xl flex items-center justify-center border hover:bg-gray-300 px-2 py-0.5 absolute top-[calc(100%+8px)] left-2 bg-white"
          >
            <RiAddLine size="16" />
          </button>
          <button
            onClick={handleAddColumn}
            className="rounded-2xl flex items-center justify-center border hover:bg-gray-300 px-0.5 py-2 absolute left-[calc(100%+8px)] top-2 bg-white"
          >
            <RiAddLine size="16" />
          </button>
        </>
      )}
    </>
  );
};

export const TablePresent = ({ element }) => {
  const rows = element.config.data;

  return (
    <table
      style={element.style}
      className="w-full h-full table-auto border-separate border-spacing-0.5 rounded-lg bg-white"
    >
      <tbody>
        {rows.map((row, rowIndex) => {
          return (
            <tr key={`row-${rowIndex}`} className="group">
              {row.cells.map((cell, cellIndex) => {
                const { scheme, colors } = element.config;
                const cellPosition = getCellPosition(rows, rowIndex, cellIndex);
                const background = getCellBackground(`r${rowIndex}`, `c${cellPosition}`, scheme, colors);
                return (
                  <td
                    key={`cell-${cellIndex}`}
                    colSpan={cell.colSpan || 1}
                    rowSpan={cell.rowSpan || 1}
                    className={cn('border border-gray-300 p-0 relative', {
                      'rounded-bl-lg': cellPosition === 0 && cell.rowSpan >= rows.length - rowIndex,
                      'rounded-tl-lg': cellPosition === 0 && rowIndex === 0,
                      'rounded-br-lg': rowIndex === rows.length - 1 && cellIndex === rows[rowIndex].cells.length - 1,
                      'rounded-tr-lg': rowIndex === 0 && cellIndex === rows[rowIndex].cells.length - 1,
                    })}
                    style={{
                      background,
                      color: background ? '#ffffff' : '#000000',
                      ...(cell.style || {}),
                    }}
                  >
                    <p className="px-3 py-1 leading-tight">{cell.value}</p>
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export const TablePreview = ({ element }) => {
  const rows = element.config.data;

  return (
    <table
      style={element.style}
      className="w-full h-full table-auto border-separate border-spacing-0 rounded-lg bg-white"
    >
      <tbody>
        {rows.map((row, rowIndex) => {
          return (
            <tr key={`row-${rowIndex}`} className="group">
              {row.cells.map((cell, cellIndex) => {
                const { scheme, colors } = element.config;
                const cellPosition = getCellPosition(rows, rowIndex, cellIndex);
                const background = getCellBackground(`r${rowIndex}`, `c${cellPosition}`, scheme, colors);
                return (
                  <td
                    key={`cell-${cellIndex}`}
                    colSpan={cell.colSpan || 1}
                    rowSpan={cell.rowSpan || 1}
                    className={cn('text-left border p-2', {
                      'rounded-bl-lg': cellPosition === 0 && cell.rowSpan >= rows.length - rowIndex,
                      'rounded-tl-lg': cellPosition === 0 && rowIndex === 0,
                      'rounded-br-lg': rowIndex === rows.length - 1 && cellIndex === rows[rowIndex].cells.length - 1,
                      'rounded-tr-lg': rowIndex === 0 && cellIndex === rows[rowIndex].cells.length - 1,
                    })}
                    style={{
                      background,
                      color: background ? '#ffffff' : '#000000',
                      ...(cell.style || {}),
                    }}
                  ></td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

Table.propTypes = ElementPropTypes;
TablePresent.propTypes = {
  element: PropTypes.object.isRequired,
};
TablePreview.propTypes = {
  element: PropTypes.object.isRequired,
};
