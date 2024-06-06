import PropTypes from 'prop-types';

const DashboardLayout = ({ children }) => {
  return <div>{children}</div>;
};

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
