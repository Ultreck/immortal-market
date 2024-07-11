import { Autocomplete, AutocompleteItem, Button, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import PropTypes from 'prop-types';
import { TbMinus, TbPlus, TbTextSize } from 'react-icons/tb';

const sizes = [8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 60];

const FontSize = ({ elements, onChange }) => {
  const values = elements.map((e) => e.style.fontSize);
  const same = values.every((v) => v === values[0]);
  const value = same ? `${values[0]}` : '';

  const handleChange = (v) => {
    if (v === '') return;
    onChange(elements.map((e) => ({ ...e, style: { ...e.style, fontSize: +v } })));
  };

  return (
    <Popover placement="left" showArrow offset={10}>
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Adjust font size" className="text-base">
          <TbTextSize size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border border-default-200">
        <div className="px-4 py-2 w-full">
          <div className="gap-2 w-full flex items-center">
            <Button
              isIconOnly
              variant="flat"
              className="text-base"
              isDisabled={!value}
              onClick={() => {
                if (!value) return;
                handleChange(Math.max(1, +value - 1));
              }}
            >
              <TbMinus size="20" />
            </Button>
            <Autocomplete
              type="number"
              isClearable={false}
              classNames={{ base: 'w-[80px] text-base' }}
              allowsEmptyCollection={false}
              inputValue={value}
              onInputChange={(v) => {
                if (+v <= 0) return;
                handleChange(+v);
              }}
              onSelectionChange={(v) => {
                handleChange(+v);
              }}
            >
              {sizes.map((n) => (
                <AutocompleteItem key={n} value={n}>
                  {n}
                </AutocompleteItem>
              ))}
            </Autocomplete>
            <Button
              isIconOnly
              variant="flat"
              className="text-base"
              isDisabled={!value}
              onClick={() => {
                if (!value) return;
                handleChange(Math.max(1, +value + 1));
              }}
            >
              <TbPlus size="20" />
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

FontSize.propTypes = {
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

export default FontSize;
