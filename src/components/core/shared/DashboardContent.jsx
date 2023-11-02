import PropTypes from 'prop-types';

const DashboardContent = ({ children }) => {
  return <div className="container h-full !max-w-5xl flex flex-col pb-32 mb:pb-10 md:py-10">{children}</div>;
};

DashboardContent.propTypes = {
  children: PropTypes.any,
};

export default DashboardContent;
