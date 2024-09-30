import { Button, Input } from '@nextui-org/react';
import { TbMinus, TbPlus } from 'react-icons/tb';
import PropTypes from 'prop-types';
import { cn } from '@/lib/utils.js';

const NumberInput = ({
  variant = 'flat',
  value,
  onChange,
  ariaLabel,
  min = 0,
  max = 100,
  step = 1,
  size = 'md',
  ...props
}) => {
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
        size={size}
      >
        <TbMinus size="20" />
      </Button>
      <Input
        aria-label={ariaLabel}
        type="number"
        variant={variant}
        step={step}
        isClearable={false}
        classNames={{ base: cn('w-[80px] text-base', { 'w-[50px]': size === 'sm' }) }}
        value={`${!isNaN(value) ? value : ''}`}
        onChange={(e) => handleChange(e.target.value)}
        size={size}
        {...props}
      />
      <Button
        isIconOnly
        variant="bordered"
        className="text-base"
        isDisabled={isNaN(value) || value >= max}
        onClick={() => handleChange(+value + step)}
        size={size}
      >
        <TbPlus size="20" />
      </Button>
    </div>
  );
};

NumberInput.propTypes = {
  variant: PropTypes.oneOf(['flat', 'bordered', 'faded', 'underlined']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onChange: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
};

export default NumberInput;
