import classNames from 'classnames';
import PropTypes from 'prop-types';

const DashboardTitle = ({ text, className, ...props }) => {
  return (
    <h2 {...props} className={classNames('hidden md:block mb-10 font-semibold text-xl', className)}>
      {text}
    </h2>
  );
};

DashboardTitle.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};

export default DashboardTitle;
