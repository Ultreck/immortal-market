import { useCallback } from 'react';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
import { RiArrowDownSLine } from 'react-icons/ri';
import PropTypes from 'prop-types';

const MergeOptions = ({ element, onChange, selection, onSelectionChange }) => {
  const rows = element.config.data;

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
    onSelectionChange(null);
  }, [selection, rows, onChange, element, onSelectionChange]);

  return (
    <Dropdown classNames={{ content: 'shadow border border-default-200' }}>
      <DropdownTrigger>
        <Button variant="solid" size="sm" className="text-md" endContent={<RiArrowDownSLine size="20" />}>
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
  );
};

MergeOptions.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSelectionChange: PropTypes.func.isRequired,
  selection: PropTypes.object,
};

export default MergeOptions;
