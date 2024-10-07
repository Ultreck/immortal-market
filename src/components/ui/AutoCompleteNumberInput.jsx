import { Autocomplete, AutocompleteItem, Button } from '@nextui-org/react';
import { TbMinus, TbPlus } from 'react-icons/tb';
import PropTypes from 'prop-types';
import { useRef } from 'react';

const AutoCompleteNumberInput = ({ variant = 'flat', value, onChange, ariaLabel, min = 0, max = 100, step = 1 }) => {
  const interval = useRef(null);

  const handleChange = (v) => {
    if (isNaN(v)) return;
    if (`${v}`.includes('.')) {
      return onChange(Math.min(max, Math.max(min, +v.toFixed(1))));
    }
    onChange(Math.min(max, Math.max(min, +v)));
  };

  const handlePressStart = (type) => {
    if (type === 'increment') {
      handleChange(+value + step);
      let initial = +value + step;
      interval.current = setInterval(() => {
        handleChange(initial + step);
        initial = initial + step;
      }, 100);
    } else if (type === 'decrement') {
      handleChange(+value - step);
      let initial = +value - step;
      interval.current = setInterval(() => {
        handleChange(initial - step);
        initial = initial - step;
      }, 100);
    }
  };

  const handlePressEnd = () => {
    clearInterval(interval.current);
  };

  return (
    <div className="gap-2 flex items-center">
      <Button
        isIconOnly
        variant="bordered"
        className="text-base"
        isDisabled={isNaN(value) || value <= min}
        onPressStart={() => handlePressStart('decrement')}
        onPressEnd={handlePressEnd}
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
        onInputChange={(v) => handleChange(v)}
        onSelectionChange={(v) => handleChange(v)}
        menuTrigger="manual"
        variant={variant}
      >
        {Array.from({ length: max - min + 1 }, (_, i) => i + min).map((n) => (
          <AutocompleteItem key={n} value={n} textValue={n.toString()}>
            {n}
          </AutocompleteItem>
        ))}
      </Autocomplete>
      <Button
        isIconOnly
        variant="bordered"
        className="text-base"
        isDisabled={isNaN(value) || value >= max}
        onPressStart={() => handlePressStart('increment')}
        onPressEnd={handlePressEnd}
      >
        <TbPlus size="20" />
      </Button>
    </div>
  );
};

AutoCompleteNumberInput.propTypes = {
  variant: PropTypes.oneOf(['flat', 'bordered', 'faded', 'underlined']),
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onChange: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
};

export default AutoCompleteNumberInput;
