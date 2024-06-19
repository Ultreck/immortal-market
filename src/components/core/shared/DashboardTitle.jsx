import PropTypes from 'prop-types';
import { cn } from '@/lib/utils.js';

const DashboardTitle = ({ text, className, after, ...props }) => {
  return (
    <div className={cn('w-full flex items-center justify-between mb-10', className)}>
      <h2 {...props} className="font-semibold text-2xl">
        {text}
      </h2>
      {after}
    </div>
  );
};

DashboardTitle.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  after: PropTypes.element,
};

export default DashboardTitle;
