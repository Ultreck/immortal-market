import { Autocomplete, AutocompleteItem, Button } from '@nextui-org/react';
import { TbMinus, TbPlus } from 'react-icons/tb';
import PropTypes from 'prop-types';

const AutoCompleteNumberInput = ({ value, onChange, ariaLabel, min = 0, max = 100 }) => {
  return (
    <div className="gap-2 w-full flex items-center">
      <Button
        isIconOnly
        variant="flat"
        className="text-base"
        isDisabled={!value || value <= min}
        onClick={() => {
          if (!value) return;
          onChange(Math.max(min, +value - 1));
        }}
      >
        <TbMinus size="20" />
      </Button>
      <Autocomplete
        aria-label={ariaLabel}
        type="number"
        isClearable={false}
        classNames={{ base: 'w-[80px] text-base' }}
        allowsEmptyCollection={false}
        inputValue={`${value}`}
        onInputChange={(v) => {
          if (+v <= 0) return;
          onChange(+v);
        }}
        onSelectionChange={(v) => {
          onChange(+v);
        }}
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
        isDisabled={!value || value >= max}
        onClick={() => {
          if (!value) return;
          onChange(Math.min(max, +value + 1));
        }}
      >
        <TbPlus size="20" />
      </Button>
    </div>
  );
};

AutoCompleteNumberInput.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
};

export default AutoCompleteNumberInput;
