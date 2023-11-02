import { IconChevronDown, IconLogout } from '@tabler/icons-react';
import classNames from 'classnames';
import { useAuth } from '@/hooks/use-auth.jsx';
import SimpleDropdown from '@/components/global/SimpleDropdown.jsx';
import PropTypes from 'prop-types';

const UserDropdown = ({ className }) => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.reload();
  };

  return (
    <SimpleDropdown
      trigger={
        <div className={classNames('flex items-center', className)}>
          <img
            src={`https://ui-avatars.com/api/?name=${user.firstName} ${user.lastName}`}
            className="w-8 h-8 rounded-full"
            alt={`${user.firstName} ${user.lastName}`}
          />
          <p className="ml-2 hidden md:block">{user.firstName}</p>
          <IconChevronDown size="18" className="ml-3" />
        </div>
      }
      items={[{ text: 'Logout', icon: <IconLogout size="18" />, onClick: handleLogout }]}
    />
  );
};

UserDropdown.propTypes = {
  className: PropTypes.string,
};

export default UserDropdown;
