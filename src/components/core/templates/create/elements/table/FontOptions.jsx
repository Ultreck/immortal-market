import { useCallback } from 'react';
import { Button, Popover, PopoverContent, PopoverTrigger, Select, SelectItem } from '@heroui/react';
import { RiFontFamily } from 'react-icons/ri';
import useResolveValue from '@/hooks/template/use-resolve-value.js';
import { TbBold, TbItalic, TbUnderline } from 'react-icons/tb';
import ColorPicker from '@/components/ui/ColorPicker.jsx';
import AutoCompleteNumberInput from '@/components/ui/AutoCompleteNumberInput.jsx';
import PropTypes from 'prop-types';

const FontOptions = ({ element, onChange, selection }) => {
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
      <PopoverTrigger>
        <Button isIconOnly variant="solid" aria-label="Edit Cell" className="text-base h-8">
          <RiFontFamily size="16" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border border-default-200">
        <div className="px-6 py-6 w-full space-y-4">
          <div className="flex items-center space-x-2">
            <Italic selectedCells={selectedCells} onStyleChange={handleUpdateCellsStyle} />
            <Bold selectedCells={selectedCells} onStyleChange={handleUpdateCellsStyle} />
            <Underline selectedCells={selectedCells} onStyleChange={handleUpdateCellsStyle} />
            <TextColor selectedCells={selectedCells} onStyleChange={handleUpdateCellsStyle} />
          </div>
          <FontFamily selectedCells={selectedCells} onStyleChange={handleUpdateCellsStyle} />
          <FontSize selectedCells={selectedCells} onStyleChange={handleUpdateCellsStyle} />
        </div>
      </PopoverContent>
    </Popover>
  );
};

const Italic = ({ selectedCells, onStyleChange }) => {
  const value = useResolveValue(selectedCells.map((cell) => cell?.style?.fontStyle ?? ''));

  return (
    <Button
      isIconOnly
      variant={value === 'italic' ? 'solid' : 'text'}
      aria-label="Italicize/unitalicize text"
      onPress={() => {
        const newStyle = {
          fontStyle: value === 'italic' ? 'normal' : 'italic',
        };
        onStyleChange(newStyle);
      }}
    >
      <TbItalic size="20" />
    </Button>
  );
};

const Underline = ({ selectedCells, onStyleChange }) => {
  const value = useResolveValue(selectedCells.map((cell) => cell?.style?.textDecoration ?? ''));

  return (
    <Button
      isIconOnly
      variant={value === 'underline' ? 'solid' : 'text'}
      aria-label="Underline/unbold text"
      onPress={() => {
        const newStyle = {
          textDecoration: value === 'underline' ? 'none' : 'underline',
        };
        onStyleChange(newStyle);
      }}
    >
      <TbUnderline size="20" />
    </Button>
  );
};

const Bold = ({ selectedCells, onStyleChange }) => {
  const value = useResolveValue(selectedCells.map((cell) => cell?.style?.fontWeight ?? ''));

  return (
    <Button
      isIconOnly
      variant={value === 'bold' ? 'solid' : 'text'}
      aria-label="Bold/unbold text"
      onPress={() => {
        const newStyle = {
          fontWeight: value === 'bold' ? 'normal' : 'bold',
        };
        onStyleChange(newStyle);
      }}
    >
      <TbBold size="20" />
    </Button>
  );
};

const fonts = [
  { key: 'Roboto', label: 'Roboto' },
  { key: 'Playwrite BE VLG', label: 'Playwrite BE VLG' },
  { key: 'Kanit', label: 'Kanit' },
  { key: 'Lato', label: 'Lato' },
  { key: 'Open Sans', label: 'Open Sans' },
  { key: 'Poppins', label: 'Poppins' },
  { key: 'Montserrat', label: 'Montserrat' },
  { key: 'Oswald', label: 'Oswald' },
  { key: 'Raleway', label: 'Raleway' },
  { key: 'Inter', label: 'Inter' },
  { key: 'Noto Sans', label: 'Noto Sans' },
  { key: 'Playfair Display', label: 'Playfair Display' },
  { key: 'Rubik', label: 'Rubik' },
  { key: 'Nunito', label: 'Nunito' },
  { key: 'PT Sans', label: 'PT Sans' },
  { key: 'Work Sans', label: 'Work Sans' },
  { key: 'Libre Baskerville', label: 'Libre Baskerville' },
  { key: 'Manrope', label: 'Manrope' },
  { key: 'Source Sans 3', label: 'Source Sans 3' },
  { key: 'Hahmlet', label: 'Hahmlet' },
];

const FontFamily = ({ selectedCells, onStyleChange }) => {
  const value = useResolveValue(selectedCells.map((cell) => cell?.style?.fontFamily ?? ''));

  const handleChange = (event) => {
    const newStyle = {
      fontFamily: event.target.value,
    };
    onStyleChange(newStyle);
  };

  return (
    <div className="flex flex-col space-y-2">
      <p className="text-base opacity-75 whitespace-nowrap">Font family:</p>
      <Select
        aria-label="Select font family"
        placeholder="Select font family"
        classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
        onChange={handleChange}
        defaultSelectedKeys={[value]}
      >
        {fonts.map((font) => (
          <SelectItem key={font.key}>{font.label}</SelectItem>
        ))}
      </Select>
    </div>
  );
};

const TextColor = ({ selectedCells, onStyleChange }) => {
  const value = useResolveValue(selectedCells.map((cell) => cell?.style?.color ?? ''));

  const handleChange = (color) => {
    if (!color) return;
    const newStyle = { color };
    onStyleChange(newStyle);
  };

  return (
    <div>
      <ColorPicker
        color={value}
        onChange={(color) => handleChange(color)}
        trigger={
          <Button variant="text" isIconOnly className="text-base">
            <div className="w-6 flex flex-col items-center justify-center">
              <RiFontFamily size="16" />
              <div className="rounded-2xl h-1.5 mt-0.5 w-full" style={{ background: value }}></div>
            </div>
          </Button>
        }
      />
    </div>
  );
};

const FontSize = ({ selectedCells, onStyleChange }) => {
  const value = useResolveValue(selectedCells.map((cell) => cell?.style?.fontSize ?? ''));

  const handleChange = (newValue) => {
    if (newValue === '') return;
    const newStyle = { fontSize: +newValue };
    onStyleChange(newStyle);
  };

  return (
    <div className="flex items-center justify-between space-x-4">
      <p className="text-base opacity-75">Font size:</p>
      <AutoCompleteNumberInput onChange={handleChange} value={value} min={1} max={150} step={1} ariaLabel="Font size" />
    </div>
  );
};

const propTypes = {
  onStyleChange: PropTypes.func.isRequired,
  selectedCells: PropTypes.array.isRequired,
};

Italic.propTypes = propTypes;
Underline.propTypes = propTypes;
Bold.propTypes = propTypes;
FontFamily.propTypes = propTypes;
TextColor.propTypes = propTypes;
FontSize.propTypes = propTypes;
FontOptions.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  selection: PropTypes.object,
};

export default FontOptions;
