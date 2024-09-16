import { cn } from '@/lib/utils.js';
import PropTypes from 'prop-types';
import AutoResizeTextArea from '@/components/ui/AutoResizeTextArea.jsx';
import { useCallback, useEffect, useRef, useState } from 'react';
import { RiAddLine, RiCloseLine } from 'react-icons/ri';
import { Button } from '@nextui-org/react';
import { MdJoinFull } from 'react-icons/md';

const getMaxColumns = (data) => {
  let max = 0;
  data.forEach((row) => {
    let currentColumns = 0;
    row.cells.forEach(({ colSpan = 1 }) => (currentColumns += colSpan));
    max = Math.max(max, currentColumns);
  });
  return max;
};

// const getMaxRows = (data) => {
//   let maxRows = 0;
//   data.forEach((row, rowIndex) => {
//     row.cells.forEach(({ rowSpan = 1 }) => {
//       maxRows = Math.max(maxRows, rowIndex + rowSpan);
//     });
//   });
//   return maxRows;
// };

const Basic = ({ element, onChange, active }) => {
  const table = useRef(null);
  const colors = element.config.colors;
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
            // prettier-ignore
            cells: Array(maxCols).fill(null).map(() => ({ value: '' })),
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
    if (e.shiftKey) setSelection((prev) => ({ ...prev, startRow: rowIndex, startCol: cellIndex }));
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

  const handleMergeCells = useCallback(() => {
    if (!selection) return;
    const { startRow, startCol, endRow, endCol } = selection;
    const [minRow, maxRow] = [Math.min(startRow, endRow), Math.max(startRow, endRow)];
    const [minCol, maxCol] = [Math.min(startCol, endCol), Math.max(startCol, endCol)];
    let newRows = JSON.parse(JSON.stringify(rows));
    const mergedValue = newRows[minRow].cells[minCol].value;
    const rowSpan = maxRow - minRow + 1;
    const colSpan = maxCol - minCol + 1;
    newRows[minRow].cells[minCol] = { value: mergedValue, rowSpan, colSpan };
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

  const handleClearCells = useCallback(() => {
    if (!selection) return;
    const { startRow, startCol, endRow, endCol } = selection;
    const [minRow, maxRow] = [Math.min(startRow, endRow), Math.max(startRow, endRow)];
    const [minCol, maxCol] = [Math.min(startCol, endCol), Math.max(startCol, endCol)];
    let newRows = JSON.parse(JSON.stringify(rows));
    for (let i = minRow; i <= maxRow; i++) {
      for (let j = minCol; j <= maxCol; j++) {
        const cell = newRows[i].cells[j];
        newRows[i].cells[j] = { ...cell, value: '' };
      }
    }
    onChange({ ...element, config: { ...element.config, data: newRows } });
    setSelection(null);
  }, [selection, rows, onChange, element]);

  return (
    <div className="w-full h-full relative flex flex-col">
      {!!selection && (
        <div className="absolute bottom-[calc(100%+10px)] left-0 space-x-2">
          <Button
            onClick={handleMergeCells}
            variant="flat"
            size="sm"
            className="text-md"
            startContent={<MdJoinFull size="20" />}
          >
            Merge
          </Button>
          <Button
            onClick={handleClearCells}
            variant="flat"
            size="sm"
            className="text-md"
            startContent={<RiCloseLine size="20" />}
          >
            Clear
          </Button>
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
              <tr
                key={`row-${rowIndex}`}
                className="group"
                style={rowIndex === 0 ? { background: colors[0], color: 'white' } : {}}
              >
                {row.cells.map((cell, cellIndex) => {
                  return (
                    <td
                      key={`cell-${cellIndex}`}
                      colSpan={cell.colSpan || 1}
                      rowSpan={cell.rowSpan || 1}
                      className={cn('text-left border border-gray-300 p-0 relative', {
                        'first:rounded-bl-lg last:rounded-br-lg': rowIndex === rows.length - 1,
                      })}
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
                      />
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
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
    </div>
  );
};

Basic.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func,
  active: PropTypes.bool,
};

export default Basic;
