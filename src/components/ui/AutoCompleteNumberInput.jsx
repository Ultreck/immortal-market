import { Autocomplete, AutocompleteItem, Button } from '@nextui-org/react';
import { TbMinus, TbPlus } from 'react-icons/tb';
import PropTypes from 'prop-types';

const AutoCompleteNumberInput = ({ value, onChange, ariaLabel, min = 0, max = 100, step = 1 }) => {
  return (
    <div className="gap-2 flex items-center">
      <Button
        isIconOnly
        variant="flat"
        className="text-base"
        isDisabled={isNaN(value) || value <= min}
        onClick={() => {
          if (isNaN(value)) return;
          onChange(Math.max(min, +value - step));
        }}
      >
        <TbMinus size="20" />
      </Button>
      <Autocomplete
        aria-label={ariaLabel}
        type="number"
        step={step}
        isClearable={false}
        classNames={{ base: 'w-[80px] text-base' }}
        allowsEmptyCollection={false}
        inputValue={`${!isNaN(value) ? value : ''}`}
        onInputChange={(v) => {
          if (+v <= 0) return;
          onChange(+v);
        }}
        onSelectionChange={(v) => {
          onChange(+v);
        }}
        menuTrigger="manual"
      >
        {Array.from({ length: max - min + 1 }, (_, i) => i + min).map((n) => (
          <AutocompleteItem key={n} value={n} textValue={n.toString()}>
            {n}
          </AutocompleteItem>
        ))}
      </Autocomplete>
      <Button
        isIconOnly
        variant="flat"
        className="text-base"
        isDisabled={isNaN(value) || value >= max}
        onClick={() => {
          if (isNaN(value)) return;
          onChange(Math.min(max, +value + step));
        }}
      >
        <TbPlus size="20" />
      </Button>
    </div>
  );
};

AutoCompleteNumberInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onChange: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
};

export default AutoCompleteNumberInput;
