import { cn } from '@/lib/utils';
import { Button } from '@heroui/react';
import PropTypes from 'prop-types';

const PredictionButton = ({ type, text, className }) => {
  return (
    <div>
      {type === 'yes' ? (
        <Button
          className={cn(
            'w-28 rounded-bl-lg rounded-br-none rounded-tl-lg rounded-tr-none border-2 border-sky-500 bg-transparent dark:text-white text-black hover:bg-sky-500',
            className
          )}
        >
          {text}
        </Button>
      ) : type === 'no' ? (
        <Button
          className={cn(
            'w-28 rounded-bl-none rounded-br-lg rounded-tl-none rounded-tr-lg border-2 border-red-500 bg-transparent dark:text-white text-black hover:bg-red-500',
            className
          )}
        >
          {text}
        </Button>
      ) : (
        <Button
          className={cn(
            'w-28 rounded-bl-none rounded-br-lg rounded-tl-none rounded-tr-lg border-2 border-gray-500 bg-transparent dark:text-white text-black hover:bg-gray-500',
            className
          )}
        >
          {text}
        </Button>
      )}
    </div>
  );
};

PredictionButton.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default PredictionButton;
