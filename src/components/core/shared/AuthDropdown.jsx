import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, User } from '@nextui-org/react';
import { useAuth } from '@/hooks/use-auth.jsx';
import { getImageLink } from '@/lib/utils.js';
import { TbHelp, TbLogout, TbUser } from 'react-icons/tb';

const ACCOUNT_URL = import.meta.env.VITE_ACCOUNT_URL;

const AuthDropdown = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <Dropdown placement="right-end">
        <DropdownTrigger className="px-6 mt-4">
          <User
            as="button"
            className="transition-transform"
            description={user.email}
            name={user.firstName}
            avatarProps={{ radius: 'full', size: 'sm', src: getImageLink(user.image) }}
            classNames={{
              name: 'text-base leading-none',
              description: 'text-sm leading-none mt-1.5',
              base: 'gap-4',
            }}
          />
        </DropdownTrigger>
        <DropdownMenu
          aria-label="User Actions"
          variant="flat"
          onAction={(key) => {
            if (key === 'settings') window.open(`${ACCOUNT_URL}/settings`, '_blank');
            if (key === 'logout') logout();
          }}
        >
          <DropdownItem key="settings" startContent={<TbUser size="20" />}>
            <span className="text-base">Account Settings</span>
          </DropdownItem>
          <DropdownItem key="help_and_feedback" startContent={<TbHelp size="20" />}>
            <span className="text-base">Help & Feedback</span>
          </DropdownItem>
          <DropdownItem key="logout" color="danger" startContent={<TbLogout size="20" />}>
            <span className="text-base">Log Out</span>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default AuthDropdown;
