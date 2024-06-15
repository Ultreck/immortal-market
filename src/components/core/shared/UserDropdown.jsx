import { IconChevronDown, IconLogout, IconUser } from '@tabler/icons-react';
import classNames from 'classnames';
import { useAuth } from '@/hooks/use-auth.jsx';
import SimpleDropdown from '@/components/global/SimpleDropdown.jsx';
import PropTypes from 'prop-types';
import Image from '@/components/core/shared/Image.jsx';

const ACCOUNT_URL = import.meta.env.VITE_ACCOUNT_URL;

const UserDropdown = ({ className }) => {
  const { user, logout } = useAuth();

  return (
    <SimpleDropdown
      trigger={
        <div className={classNames('flex items-center', className)}>
          <Image
            src={user?.image || `https://ui-avatars.com/api/?name=${user?.firstName} ${user?.lastName}`}
            className="w-10 h-10 rounded-full"
            alt={`${user?.firstName} ${user?.lastName}`}
          />
          <p className="ml-2.5 hidden md:block">{user?.firstName}</p>
          <IconChevronDown size="18" className="ml-3" />
        </div>
      }
      items={[
        {
          text: 'Account',
          icon: <IconUser size="18" />,
          onClick: () => (location.href = `${ACCOUNT_URL}/accounts`),
        },
        {
          text: 'Logout',
          icon: <IconLogout size="18" />,
          onClick: () => logout(),
        },
      ]}
    />
  );
};

UserDropdown.propTypes = {
  className: PropTypes.string,
};

export default UserDropdown;
