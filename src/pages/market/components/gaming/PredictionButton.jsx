import { cn } from '@/lib/utils';
import PropTypes from 'prop-types';

const PredictionButton = ({text, className, onClick }) => {
  return (
    <div>
      {(
        <button
          className={cn(
            'w-[65px] p-2 text-white bg-green-600 hover:bg-green-400 rounded-none',
            className
          )}
          onClick={onClick}
        >
          {text}
        </button>
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
