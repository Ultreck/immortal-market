import { Button, Input } from '@nextui-org/react';
import { TbMinus, TbPlus } from 'react-icons/tb';
import PropTypes from 'prop-types';
import { cn } from '@/lib/utils.js';
import { useRef } from 'react';

const NumberInput = ({
  variant = 'flat',
  value,
  onChange,
  ariaLabel,
  min = 0,
  max = Infinity,
  step = 1,
  size = 'md',
  ...props
}) => {
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
        size={size}
        onPressStart={() => handlePressStart('decrement')}
        onPressEnd={handlePressEnd}
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
        size={size}
        onPressStart={() => handlePressStart('increment')}
        onPressEnd={handlePressEnd}
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
