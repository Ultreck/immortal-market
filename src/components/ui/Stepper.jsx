import PropTypes from 'prop-types';
import { cn } from '@/lib/utils.js';

const Stepper = ({ current, steps, classNames = {}, onChange }) => {
  return (
    <div className={cn('relative select-none', classNames.base)}>
      <div className="absolute h-[95%] top-1/2 -translate-y-1/2 border-s border-default-200 left-[18px]"></div>
      <ol className="relative space-y-10">
        {steps?.map((step) => (
          <li
            key={step.key}
            onClick={() => onChange?.(step.key)}
            className={cn('flex items-center cursor-pointer transition-all duration-300', {
              'text-default-400 hover:text-default-600': current !== step.key,
              'text-default-800': current === step.key,
            })}
          >
            <div>
              <span
                className={cn(
                  'relative flex items-center justify-center w-[36px] h-[36px] mr-4',
                  'bg-green-200 rounded-full ring-4 ring-white dark:ring-default-50 dark:bg-default-100 transition-all duration-300',
                  { 'dark:bg-green-900': current === step.key },
                  classNames.circle
                )}
              >
                {step.icon}
              </span>
            </div>
            <div>
              <h3 className={cn('leading-none', { 'font-semibold': current === step.key })}>{step.title}</h3>
              {!!step.description && <p className="text-md leading-tight mt-1.5 opacity-70">{step.description}</p>}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

Stepper.propTypes = {
  current: PropTypes.string.isRequired,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      icon: PropTypes.element,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  classNames: PropTypes.shape({
    base: PropTypes.string,
    circle: PropTypes.string,
  }),
};

export default Stepper;
