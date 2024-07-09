import { Autocomplete, AutocompleteItem, Button, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import PropTypes from 'prop-types';
import { TbMinus, TbPlus } from 'react-icons/tb';
import { RxRotateCounterClockwise } from 'react-icons/rx';

const Rotate = ({ element, onChange }) => {
  const sizes = [30, 60, 90, 120, 180, 270, 360];

  return (
    <Popover placement="left" showArrow offset={10}>
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Rotate" className="text-base">
          <RxRotateCounterClockwise size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border border-default-200">
        <div className="px-4 py-2 w-full">
          <div className="gap-2 w-full flex items-center">
            <Button
              isIconOnly
              variant="flat"
              className="text-base"
              onClick={() => {
                onChange({ ...element, style: { ...element.style, rotate: element.style.rotate - 1 } });
              }}
            >
              <TbMinus size="20" />
            </Button>
            <Autocomplete
              type="number"
              isClearable={false}
              classNames={{ base: 'w-[80px] text-base' }}
              allowsEmptyCollection={false}
              inputValue={`${element.style.rotate}`}
              onInputChange={(v) => {
                if (+v <= 0) return;
                onChange({ ...element, style: { ...element.style, rotate: +v } });
              }}
              onSelectionChange={(v) => {
                onChange({ ...element, style: { ...element.style, rotate: +v } });
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
              onClick={() => {
                onChange({ ...element, style: { ...element.style, rotate: element.style.rotate + 1 } });
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

Rotate.propTypes = {
  element: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    style: PropTypes.object,
  }),
  onChange: PropTypes.func.isRequired,
};

export default Rotate;

