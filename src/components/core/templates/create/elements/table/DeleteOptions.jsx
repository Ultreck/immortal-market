import { useCallback } from 'react';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
import { RiArrowDownSLine } from 'react-icons/ri';
import PropTypes from 'prop-types';

const DeleteOptions = ({ element, onChange, selection, onSelectionChange }) => {
  const rows = element.config.data;

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
    onSelectionChange(null);
  }, [selection, rows, onChange, element, onSelectionChange]);

  const handleDeleteRows = useCallback(() => {
    if (!selection) return;
    const { startRow, endRow } = selection;
    const [minRow, maxRow] = [Math.min(startRow, endRow), Math.max(startRow, endRow)];
    let newRows = JSON.parse(JSON.stringify(rows));
    for (let i = maxRow; i >= minRow; i--) {
      newRows.splice(i, 1);
    }
    onChange({ ...element, config: { ...element.config, data: newRows } });
    onSelectionChange(null);
  }, [selection, rows, onChange, element, onSelectionChange]);

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
    onSelectionChange(null);
  }, [selection, rows, onChange, element, onSelectionChange]);

  return (
    <Dropdown classNames={{ content: 'shadow border border-default-200' }}>
      <DropdownTrigger>
        <Button variant="solid" size="sm" className="text-md" endContent={<RiArrowDownSLine size="20" />}>
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
  );
};

DeleteOptions.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  selection: PropTypes.object,
  onSelectionChange: PropTypes.func.isRequired,
};

export default DeleteOptions;
