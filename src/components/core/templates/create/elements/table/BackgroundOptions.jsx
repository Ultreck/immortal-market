import { useCallback } from 'react';
import { Popover } from '@nextui-org/react';
import useResolveValue from '@/hooks/template/use-resolve-value.js';
import ColorPicker from '@/components/ui/ColorPicker.jsx';
import PropTypes from 'prop-types';

const BackgroundOptions = ({ element, onChange, selection }) => {
  const rows = element.config.data;

  const handleUpdateCellsStyle = useCallback(
    (newStyle) => {
      if (!selection) return;
      const { startRow, startCol, endRow, endCol } = selection;
      const [minRow, maxRow] = [Math.min(startRow, endRow), Math.max(startRow, endRow)];
      const [minCol, maxCol] = [Math.min(startCol, endCol), Math.max(startCol, endCol)];
      let newRows = JSON.parse(JSON.stringify(rows));
      for (let rowIndex = minRow; rowIndex <= maxRow; rowIndex++) {
        for (let cellIndex = minCol; cellIndex <= maxCol; cellIndex++) {
          const cell = newRows[rowIndex].cells[cellIndex];
          const colSpan = cell.colSpan || 1;
          const rowSpan = cell.rowSpan || 1;
          newRows[rowIndex].cells[cellIndex] = {
            ...cell,
            style: { ...cell.style, ...newStyle },
          };
          if (colSpan > 1) {
            for (let k = 0; k < colSpan - 1; k++) {
              newRows[rowIndex].cells = newRows[rowIndex].cells.toSpliced(cellIndex + k, 0, {
                ...newRows[rowIndex].cells[cellIndex + k],
                style: { ...newRows[rowIndex].cells[cellIndex + k]?.style, ...newStyle },
              });
            }
          }
          if (rowSpan > 1) {
            for (let k = 0; k < rowSpan - 1; k++) {
              for (let l = 0; l < colSpan; l++) {
                newRows[rowIndex + k + 1].cells = newRows[rowIndex + k + 1].cells.toSpliced(cellIndex + l, 0, {
                  ...newRows[rowIndex + k + 1].cells[cellIndex + l],
                  style: { ...newRows[rowIndex + k + 1].cells[cellIndex + l]?.style, ...newStyle },
                });
              }
            }
          }
        }
      }
      onChange({ ...element, config: { ...element.config, data: newRows } });
    },
    [selection, rows, onChange, element]
  );

  const getSelectedCells = (rows, selection) => {
    if (!selection) return [];
    const { startRow, startCol, endRow, endCol } = selection;
    const selectedCells = [];
    const [minRow, maxRow] = [Math.min(startRow, endRow), Math.max(startRow, endRow)];
    const [minCol, maxCol] = [Math.min(startCol, endCol), Math.max(startCol, endCol)];
    for (let rowIndex = minRow; rowIndex <= maxRow; rowIndex++) {
      for (let colIndex = minCol; colIndex <= maxCol; colIndex++) {
        selectedCells.push(rows[rowIndex].cells[colIndex]);
      }
    }
    return selectedCells;
  };

  const selectedCells = getSelectedCells(rows, selection);

  return (
    <Popover placement="bottom" showArrow offset={10}>
      <BackgroundColor selectedCells={selectedCells} onStyleChange={handleUpdateCellsStyle} />
    </Popover>
  );
};

const BackgroundColor = ({ selectedCells, onStyleChange }) => {
  const value = useResolveValue(selectedCells.map((cell) => cell?.style?.backgroundColor ?? ''));

  const handleChange = (color) => {
    if (!color) return;
    const newStyle = { backgroundColor: color };
    onStyleChange(newStyle);
  };

  return <ColorPicker color={value} onChange={(color) => handleChange(color)} size="sm" />;
};

const propTypes = {
  onStyleChange: PropTypes.func.isRequired,
  selectedCells: PropTypes.array.isRequired,
};

BackgroundColor.propTypes = propTypes;

BackgroundOptions.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  selection: PropTypes.object,
};

export default BackgroundOptions;
