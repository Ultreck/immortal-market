import { cn } from '@nextui-org/react';
import PropTypes from 'prop-types';

const Title = ({ title, sub, className }) => {
  return (
    <div className={cn('flex flex-col', className)}>
      <h2 className={cn('text-2xl font-medium')}>{title}</h2>
      <p className="opacity-50 mt-1">{sub}</p>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string,
  sub: PropTypes.string,
  className: PropTypes.string,
};

export default Title;
