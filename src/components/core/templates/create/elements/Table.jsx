import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import PropTypes from 'prop-types';
import { ElementPropTypes } from '@/lib/prop-types.js';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
import { RiAddLine, RiArrowDownSLine } from 'react-icons/ri';
import { cn } from '@/lib/utils.js';
import AutoResizeTextArea from '@/components/ui/AutoResizeTextArea.jsx';

const Table = ({ element, active, highlighted, width, onClick, onChange }) => {
  return (
    <ElementWrapper
      element={element}
      onClick={onClick}
      onChange={onChange}
      maxWidth={width}
      active={active}
      highlighted={highlighted}
      editable
    >
      {({ isEditing }) => (
        <div className="relative w-full h-full">
          <TableContent element={element} onChange={onChange} active={isEditing} />
        </div>
      )}
    </ElementWrapper>
  );
};

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

const TableContent = ({ element, onChange, active }) => {
  const table = useRef(null);
  const rows = element.config.data;
  const [selection, setSelection] = useState(null);
  const [isSelecting, setIsSelecting] = useState(false);
  const [editing, setEditing] = useState(null);

  const maxCols = getMaxColumns(rows);

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

  const handleAddRow = () => {
    onChange({
      ...element,
      config: {
        ...element.config,
        data: [
          ...rows,
          {
            cells: [...Array(maxCols).fill(null)].map(() => ({ value: '' })),
          },
        ],
      },
    });
  };

  const handleAddColumn = () => {
    onChange({
      ...element,
      config: {
        ...element.config,
        data: rows.map((row) => ({
          ...row,
          cells: [...row.cells, { value: '' }],
        })),
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

  const handleMergeCellsAll = useCallback(() => {
    if (!selection) return;
    const { startRow, startCol, endRow, endCol } = selection;
    const [minRow, maxRow] = [Math.min(startRow, endRow), Math.max(startRow, endRow)];
    const [minCol, maxCol] = [Math.min(startCol, endCol), Math.max(startCol, endCol)];
    let newRows = JSON.parse(JSON.stringify(rows));
    const merged = newRows[minRow].cells[minCol];
    const rowSpan = maxRow - minRow + (merged.rowSpan || 1);
    const colSpan = maxCol - minCol + (merged.colSpan || 1);
    newRows[minRow].cells[minCol] = { ...merged, rowSpan, colSpan };
    for (let i = minRow; i <= maxRow; i++) {
      for (let j = minCol; j <= maxCol; j++) {
        if (i !== minRow || j !== minCol) {
          newRows[i].cells[j] = null;
        }
      }
    }
    newRows = newRows.map((row) => ({ ...row, cells: row.cells.filter((cell) => cell !== null) }));
    onChange({ ...element, config: { ...element.config, data: newRows } });
    setSelection(null);
  }, [selection, rows, onChange, element]);

  const handleDeleteCells = useCallback(() => {
    if (!selection) return;
    const { startRow, startCol, endRow, endCol } = selection;
    const [minRow, maxRow] = [Math.min(startRow, endRow), Math.max(startRow, endRow)];
    const [minCol, maxCol] = [Math.min(startCol, endCol), Math.max(startCol, endCol)];
    let newRows = JSON.parse(JSON.stringify(rows));
    for (let rowIndex = minRow; rowIndex <= maxRow; rowIndex++) {
      for (let cellIndex = minCol; cellIndex <= maxCol; cellIndex++) {
        const colSpan = newRows[rowIndex].cells[cellIndex].colSpan || 1;
        const rowSpan = newRows[rowIndex].cells[cellIndex].rowSpan || 1;
        newRows[rowIndex].cells[cellIndex] = { value: '', colSpan: 1, rowSpan: 1 };
        if (colSpan > 1) {
          for (let k = 0; k < colSpan - 1; k++) {
            newRows[rowIndex].cells = newRows[rowIndex].cells.toSpliced(cellIndex + k, 0, {
              value: '',
              colSpan: 1,
              rowSpan: 1,
            });
          }
        }
        if (rowSpan > 1) {
          for (let k = 0; k < rowSpan - 1; k++) {
            for (let l = 0; l < colSpan; l++) {
              newRows[rowIndex + k + 1].cells = newRows[rowIndex + k + 1].cells.toSpliced(cellIndex + l, 0, {
                value: '',
                colSpan: 1,
                rowSpan: 1,
              });
            }
          }
        }
      }
    }
    onChange({ ...element, config: { ...element.config, data: newRows } });
    setSelection(null);
  }, [selection, rows, onChange, element]);

  const handleDeleteRows = useCallback(() => {
    if (!selection) return;
    const { startRow, endRow } = selection;
    const [minRow, maxRow] = [Math.min(startRow, endRow), Math.max(startRow, endRow)];
    let newRows = JSON.parse(JSON.stringify(rows));
    for (let i = maxRow; i >= minRow; i--) {
      newRows.splice(i, 1);
    }
    onChange({ ...element, config: { ...element.config, data: newRows } });
    setSelection(null);
  }, [selection, rows, onChange, element]);

  const handleDeleteColumns = useCallback(() => {
    if (!selection) return;
    const { startCol, endCol } = selection;
    const [minCol, maxCol] = [Math.min(startCol, endCol), Math.max(startCol, endCol)];
    let newRows = JSON.parse(JSON.stringify(rows));
    for (let i = maxCol; i >= minCol; i--) {
      for (let j = 0; j < newRows.length; j++) {
        newRows[j].cells = newRows[j].cells.toSpliced(i, 1);
      }
    }
    onChange({ ...element, config: { ...element.config, data: newRows } });
    setSelection(null);
  }, [selection, rows, onChange, element]);

  return (
    <>
      {!!selection && (
        <div className="absolute bottom-[calc(100%+10px)] left-0 space-x-2 flex items-center">
          {(selection.startCol !== selection.endCol || selection.startRow !== selection.endRow) && (
            <Dropdown classNames={{ content: 'shadow border border-default-200' }}>
              <DropdownTrigger>
                <Button variant="flat" size="sm" className="text-md" endContent={<RiArrowDownSLine size="20" />}>
                  Merge
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Merge actions"
                onAction={(key) => {
                  if (key === 'all') handleMergeCellsAll();
                }}
              >
                <DropdownItem key="all" classNames={{ title: 'text-base' }}>
                  Merge all
                </DropdownItem>
                <DropdownItem key="horizontal" classNames={{ title: 'text-base' }} isDisabled>
                  Merge horizontally
                </DropdownItem>
                <DropdownItem key="vertical" classNames={{ title: 'text-base' }} isDisabled>
                  Merge vertically
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          )}
          <Dropdown classNames={{ content: 'shadow border border-default-200' }}>
            <DropdownTrigger>
              <Button variant="flat" size="sm" className="text-md" endContent={<RiArrowDownSLine size="20" />}>
                Delete
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Delete actions"
              onAction={(key) => {
                if (key === 'rows') handleDeleteRows();
                if (key === 'columns') handleDeleteColumns();
                if (key === 'cells') handleDeleteCells();
              }}
            >
              <DropdownItem key="cells" classNames={{ title: 'text-base' }}>
                Delete cell(s)
              </DropdownItem>
              <DropdownItem key="rows" classNames={{ title: 'text-base' }}>
                Delete row(s)
              </DropdownItem>
              <DropdownItem key="columns" classNames={{ title: 'text-base' }}>
                Delete column(s)
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      )}
      <table
        ref={table}
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
                      {editing !== `row,${rowIndex},${cellIndex}` && (
                        <div
                          onDoubleClick={() => setEditing(`row,${rowIndex},${cellIndex}`)}
                          onMouseDown={(e) => handleMouseDown(e, rowIndex, cellIndex)}
                          onMouseEnter={(e) => handleMouseEnter(e, rowIndex, cellIndex)}
                          onMouseUp={(e) => handleMouseUp(e, rowIndex, cellIndex)}
                          className={cn('absolute inset-0 bg-transparent')}
                        />
                      )}
                      {selection &&
                        rowIndex >= Math.min(selection.startRow, selection.endRow) &&
                        rowIndex <= Math.max(selection.startRow, selection.endRow) &&
                        cellIndex >= Math.min(selection.startCol, selection.endCol) &&
                        cellIndex <= Math.max(selection.startCol, selection.endCol) && (
                          <div className="absolute inset-0 border-blue-500 border-2 pointer-events-none" />
                        )}
                      <AutoResizeTextArea
                        value={cell.value}
                        onChange={(v) => handleRowChange(rowIndex, cellIndex, v)}
                        className="bg-transparent w-full h-full px-3 py-1 leading-tight border border-transparent hover:border-gray-300"
                        style={{ ...(cell.style || {}) }}
                      />
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

TableContent.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func,
  active: PropTypes.bool,
};

TablePresent.propTypes = {
  element: PropTypes.object.isRequired,
};

TablePreview.propTypes = {
  element: PropTypes.object.isRequired,
};

export default Table;
