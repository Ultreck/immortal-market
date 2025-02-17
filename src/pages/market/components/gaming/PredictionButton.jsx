import { cn } from '@/lib/utils';
import { Button } from '@heroui/react';
import PropTypes from 'prop-types';

const PredictionButton = ({text, className }) => {
  return (
    <div>
      {(
        <Button
          className={cn(
            'w-24 text-white bg-green-600 hover:bg-green-400 rounded-none',
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
