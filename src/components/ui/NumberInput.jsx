import { Button, Input } from '@nextui-org/react';
import { TbMinus, TbPlus } from 'react-icons/tb';
import PropTypes from 'prop-types';

const NumberInput = ({ variant = 'flat', value, onChange, ariaLabel, min = 0, max = 100, step = 1 }) => {
  const handleChange = (v) => {
    if (isNaN(v)) return;
    if (`${v}`.includes('.')) {
      return onChange(Math.min(max, Math.max(min, +v.toFixed(1))));
    }
    onChange(Math.min(max, Math.max(min, +v)));
  };

  return (
    <div className="gap-2 flex items-center">
      <Button
        isIconOnly
        variant="bordered"
        className="text-base"
        isDisabled={isNaN(value) || value <= min}
        onClick={() => handleChange(+value - step)}
      >
        <TbMinus size="20" />
      </Button>
      <Input
        aria-label={ariaLabel}
        type="number"
        variant={variant}
        step={step}
        isClearable={false}
        classNames={{ base: 'w-[80px] text-base' }}
        value={`${!isNaN(value) ? value : ''}`}
        onChange={(e) => handleChange(e.target.value)}
      />
      <Button
        isIconOnly
        variant="bordered"
        className="text-base"
        isDisabled={isNaN(value) || value >= max}
        onClick={() => handleChange(+value + step)}
      >
        <TbPlus size="20" />
      </Button>
    </div>
  );
};

NumberInput.propTypes = {
  variant: PropTypes.oneOf(['flat', 'bordered', 'faded', 'underlined']),
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onChange: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
};

export default NumberInput;
