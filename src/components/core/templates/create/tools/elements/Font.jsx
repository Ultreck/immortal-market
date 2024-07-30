import { Button, Popover, PopoverContent, PopoverTrigger, Select, SelectItem } from '@nextui-org/react';
import PropTypes from 'prop-types';
import { TbTextSize } from 'react-icons/tb';
import NumberValueTool from '../../NumberValueTool';
import { useState } from 'react';

const sizes = [8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 60];
const letterSpacingOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const lineHeightOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const fonts = [
  { key: 'Roboto', label: 'Roboto' },
  { key: 'Playwrite BE VLG', label: 'Playwrite BE VLG' },
  { key: 'Kanit', label: 'Kanit' },
];
const verticalAlignOptions = [
  { key: 'baseline', label: 'baseline' },
  { key: 'text-top', label: 'text-top' },
  { key: 'text-bottom', label: 'text-bottom' },
  { key: 'sub', label: 'sub' },
  { key: 'super', label: 'super' },
];

const Font = ({ elements, onChange }) => {
  const values = elements.map((e) => e.style.fontSize);
  const same = values.every((v) => v === values[0]);
  const value = same ? `${values[0]}` : '';

  const fontFamilyValues = elements.map((e) => e.style.fontFamily);
  const sameFontFamily = fontFamilyValues.every((v) => v === fontFamilyValues[0]);
  const fontFamilyValue = sameFontFamily ? `${fontFamilyValues[0]}` : '';
  const [fontValue, setFontValue] = useState(fontFamilyValue || '');

  const letterSpacingValues = elements.map((e) => e.style.letterSpacing);
  const sameLetterSpacing = letterSpacingValues.every((v) => v === letterSpacingValues[0]);
  const LetterSpacingValue = sameLetterSpacing ? `${letterSpacingValues[0]}` : '';

  const lineHeightValues = elements.map((e) => e.style.lineHeight);
  const sameLineHeight = lineHeightValues.every((v) => v === lineHeightValues[0]);
  const LineHeightValue = sameLineHeight ? `${lineHeightValues[0]}` : '';

  const verticalAlignValues = elements.map((e) => e.style.verticalAlign);
  const sameVerticalAlign = verticalAlignValues.every((v) => v === verticalAlignValues[0]);
  const verticalAlignValue = sameVerticalAlign ? `${verticalAlignValues[0]}` : '';
  const [alignValue, setAlignValue] = useState(verticalAlignValue || '');

  const handleChange = (v) => {
    if (v === '') return;
    onChange(elements.map((e) => ({ ...e, style: { ...e.style, fontSize: +v } })));
  };

  const handleLetterSpacingChange = (v) => {
    if (v === '') return;
    onChange(elements.map((e) => ({ ...e, style: { ...e.style, letterSpacing: +v } })));
  };

  const handleLineHeightChange = (v) => {
    if (v === '') return;
    onChange(elements.map((e) => ({ ...e, style: { ...e.style, lineHeight: +v } })));
  };

  const handleSelectionChange = (event) => {
    setFontValue(event.target.value);
    if (event.target.value === '') return;
    onChange(elements.map((element) => ({ ...element, style: { ...element.style, fontFamily: event.target.value } })));
  };

  const handleVerticalAlignChange = (event) => {
    setAlignValue(event.target.value);
    if (event.target.value === '') return;
    onChange(
      elements.map((element) => ({
        ...element,
        style: { ...element.style, verticalAlign: event.target.value },
      }))
    );
  };

  return (
    <Popover placement="left" showArrow offset={10}>
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Adjust font size" className="text-base">
          <TbTextSize size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border border-default-200">
        <div className="px-6 py-6 w-full gap-y-4 flex flex-col">
          <NumberValueTool value={value} handleChange={handleChange} valuesArray={sizes} title="Font Size" />
          <NumberValueTool
            value={LetterSpacingValue}
            handleChange={handleLetterSpacingChange}
            valuesArray={letterSpacingOptions}
            title="Letter Spacing"
          />
          <NumberValueTool
            value={LineHeightValue}
            handleChange={handleLineHeightChange}
            valuesArray={lineHeightOptions}
            title="Line Height"
          />
          <div>
            <p className="text-left mb-1">Font Family</p>
            <Select
              placeholder="Select font family"
              className="max-w-xs"
              onChange={handleSelectionChange}
              defaultSelectedKeys={[fontValue]}
            >
              {fonts.map((font) => (
                <SelectItem key={font.key}>{font.label}</SelectItem>
              ))}
            </Select>
          </div>
          <div>
            <p className="text-left mb-1">Vertical Align</p>
            <Select
              placeholder="Select Vertical Align"
              className="max-w-xs"
              onChange={handleVerticalAlignChange}
              defaultSelectedKeys={[alignValue]}
            >
              {verticalAlignOptions.map((option) => (
                <SelectItem key={option.key}>{option.label}</SelectItem>
              ))}
            </Select>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

Font.propTypes = {
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
      style: PropTypes.object,
    })
  ),
  onChange: PropTypes.func.isRequired,
};

export default Font;
