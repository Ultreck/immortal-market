import classNames from "classnames";
import PropTypes from "prop-types";

const Progress = ({ width = 0, className }) => {
  let color = 'bg-gray-600';

  if (width < 40) color = 'bg-red-600';
  if (width >= 40 && width <= 60) color = 'bg-yellow-600';
  if (width > 60) color = 'bg-green-600';

  return (
    <div className={ classNames('w-full bg-gray-200 rounded-full h-2', className) }>
      <div
        className={ classNames('bg-blue-600 h-full rounded-full', color) }
        style={ { width: `${ Math.min(width, 100) }%` } }
      />
    </div>
  );
};

Progress.propTypes = {
  width: PropTypes.number,
  className: PropTypes.string
};

export default Progress;
