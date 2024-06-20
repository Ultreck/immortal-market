import useBusiness from '@/hooks/use-business.js';
import PropTypes from 'prop-types';

const OnlyRoles = ({ roles, children }) => {
  const { business } = useBusiness();

  const role = business.member.role;

  if (!roles.includes(role)) return <></>;

  return children;
};

OnlyRoles.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired,
};

export default OnlyRoles;
