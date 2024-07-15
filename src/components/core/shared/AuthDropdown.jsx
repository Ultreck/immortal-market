import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  User,
} from '@nextui-org/react';
import { useAuth } from '@/hooks/use-auth.jsx';
import { cn, getImageLink } from '@/lib/utils.js';
import { TbCheck, TbChevronRight, TbHelp, TbLogout, TbUser } from 'react-icons/tb';
import PropTypes from 'prop-types';
import useBusiness from '@/hooks/use-business.js';

const ACCOUNT_URL = import.meta.env.VITE_ACCOUNT_URL;

const AuthDropdown = ({ className, mini = false }) => {
  const { user, logout } = useAuth();
  const { businesses, id, setCurrent } = useBusiness();

  return (
    <Dropdown
      className="w-full"
      classNames={{ content: 'shadow border border-default-100 w-[260px]' }}
      placement="right-start"
    >
      <DropdownTrigger className="w-full">
        {mini ? (
          <div className={cn('cursor-pointer w-max', className)}>
            <Avatar
              src={getImageLink(user.image)}
              radius="full"
              classNames={{ base: 'w-[32px] h-[32px]' }}
              isBordered
            />
          </div>
        ) : (
          <div
            className={cn(
              'bg-default-200 dark:bg-default-100/60 pl-6 pr-4 py-4 rounded-2xl flex items-center justify-between cursor-pointer',
              className
            )}
          >
            <User
              className={cn('transition-transform')}
              description={`@${user.username}`}
              name={user.firstName}
              avatarProps={{ radius: 'full', size: 'sm', src: getImageLink(user.image) }}
              classNames={{
                name: 'text-base leading-none',
                description: 'text-sm leading-none mt-1.5',
                base: 'gap-4',
              }}
            />
            <TbChevronRight size="20" className="text-default-500" />
          </div>
        )}
      </DropdownTrigger>
      <DropdownMenu
        aria-label="User Actions"
        variant="flat"
        onAction={(key) => {
          if (key.startsWith('b-')) {
            setCurrent(key.replace('b-', ''));
          }
          if (key === 'settings') window.open(`${ACCOUNT_URL}/settings`, '_blank');
          if (key === 'logout') logout();
        }}
      >
        <DropdownSection title="Business" classNames={{ base: 'p-1', heading: 'px-4' }} showDivider>
          {businesses.map((business) => (
            <DropdownItem
              key={`b-${business._id}`}
              description={business.email}
              endContent={business._id === id ? <TbCheck size="20" className="text-default-500" /> : null}
              classNames={{
                title: 'text-base leading-none',
                description: 'text-sm leading-none mt-1',
                base: 'rounded-xl px-4 py-3',
              }}
            >
              {business.name}
            </DropdownItem>
          ))}
        </DropdownSection>
        <DropdownSection title="Account" classNames={{ base: 'p-1', heading: 'px-4' }}>
          <DropdownItem
            key="settings"
            startContent={<TbUser size="20" />}
            classNames={{
              title: 'text-base',
              description: 'text-sm',
              base: 'rounded-xl px-4 py-2',
            }}
          >
            Account Settings
          </DropdownItem>
          <DropdownItem
            key="help_and_feedback"
            startContent={<TbHelp size="20" />}
            classNames={{
              title: 'text-base',
              description: 'text-sm',
              base: 'rounded-xl px-4 py-2',
            }}
          >
            <span className="text-base">Help & Feedback</span>
          </DropdownItem>
          <DropdownItem
            key="logout"
            color="danger"
            startContent={<TbLogout size="20" />}
            classNames={{
              title: 'text-base',
              description: 'text-sm',
              base: 'rounded-xl px-4 py-2',
            }}
          >
            <span className="text-base">Log Out</span>
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};

AuthDropdown.propTypes = {
  className: PropTypes.string,
  mini: PropTypes.bool,
};

export default AuthDropdown;
