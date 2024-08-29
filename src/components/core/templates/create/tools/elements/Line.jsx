import { Button, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import PropTypes from 'prop-types';
import { LuPenLine } from 'react-icons/lu';
import { createElement } from 'react';
import { IoIosRemoveCircleOutline } from 'react-icons/io';
import { RiArrowRightUpFill } from 'react-icons/ri';
import { FaCircle, FaSquareFull } from 'react-icons/fa';
import NumberInput from '@/components/ui/NumberInput.jsx';

const options = [
  {
    value: null,
    icon: IoIosRemoveCircleOutline,
  },
  {
    value: 'arrow',
    icon: RiArrowRightUpFill,
  },
  {
    value: 'square',
    icon: FaSquareFull,
  },
  {
    value: 'circle',
    icon: FaCircle,
  },
];

const Line = ({ elements, onChange }) => {
  const lineEndvalues = elements.map((e) => e.lineEnd);
  const sameLineEnd = lineEndvalues.every((v) => v === lineEndvalues[0]);
  const lineEndValue = sameLineEnd ? lineEndvalues[0] : '';

  const lineStartValues = elements.map((e) => e.lineStart);
  const sameLineStart = lineStartValues.every((v) => v === lineStartValues[0]);
  const lineStartValue = sameLineStart ? lineStartValues[0] : '';

  const strokeWidthValues = elements.map((e) => e.style.strokeWidth);
  const sameStrokeWidth = strokeWidthValues.every((v) => v === strokeWidthValues[0]);
  const strokeWidthValue = sameStrokeWidth ? `${strokeWidthValues[0]}` : '';

  const handleChange = (v) => {
    onChange(elements.map((e) => ({ ...e, lineEnd: v })));
  };
  const handleLineStartChange = (v) => {
    onChange(elements.map((e) => ({ ...e, lineStart: v })));
  };

  const handleStrokeWidthChange = (v) => {
    if (!v) return;
    onChange(elements.map((e) => ({ ...e, style: { ...e.style, strokeWidth: v } })));
  };

  return (
    <Popover placement="left" showArrow offset={10}>
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Adjust font size" className="text-base">
          <LuPenLine size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="px-6 py-4 shadow border border-default-200 w-[200px] gap-y-3">
        <div>
          <NumberInput
            title="Stroke Width"
            value={strokeWidthValue}
            onChange={handleStrokeWidthChange}
            ariaLabel="Stoke width"
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="lineEnd"> Line end</label>
          <div className="gap-2 w-full flex items-center">
            {options.map((option) => (
              <Button
                variant={lineEndValue == option.value ? 'solid' : 'text'}
                key={option.value}
                isIconOnly
                className="text-base"
                onClick={() => handleChange(option.value)}
              >
                {createElement(option.icon, { size: 20 })}
              </Button>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="lineEnd"> Line start</label>
          <div className="gap-2 w-full flex items-center">
            {options.map((option) => (
              <Button
                variant={lineStartValue == option.value ? 'solid' : 'text'}
                key={option.value}
                isIconOnly
                className="text-base"
                onClick={() => handleLineStartChange(option.value)}
              >
                {createElement(option.icon, { size: 20 })}
              </Button>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

Line.propTypes = {
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

export default Line;
