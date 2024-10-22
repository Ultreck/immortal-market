import { Card, Listbox, ListboxItem, User } from '@nextui-org/react';
import {
  HiBell,
  HiBriefcase,
  HiLockClosed,
  HiOutlineBell,
  HiOutlineBriefcase,
  HiOutlineLockClosed,
  HiOutlinePaintBrush,
  HiPaintBrush,
} from 'react-icons/hi2';
import { RiUser2Fill, RiUser2Line } from 'react-icons/ri';
import { cn } from '@/lib/utils.js';
import { Outlet, useLocation } from 'react-router-dom';
import useBusiness from '@/hooks/use-business.js';
import DashboardHeader from '@/components/core/shared/DashboardHeader.jsx';

const SettingsLayout = () => {
  const { business } = useBusiness();
  const { pathname } = useLocation();

  const items = [
    {
      name: 'Profile',
      icon: <RiUser2Line size="20" className="mr-2" />,
      activeIcon: <RiUser2Fill size="20" className="mr-2" />,
      href: '/settings/profile',
    },
    {
      name: 'Business',
      icon: <HiOutlineBriefcase size="20" className="mr-2" />,
      activeIcon: <HiBriefcase size="20" className="mr-2" />,
      href: '/settings/business',
    },
    {
      name: 'Appearance',
      icon: <HiOutlinePaintBrush size="20" className="mr-2" />,
      activeIcon: <HiPaintBrush size="20" className="mr-2" />,
      href: '/settings/appearance',
    },
    {
      name: 'Notifications',
      icon: <HiOutlineBell size="20" className="mr-2" />,
      activeIcon: <HiBell size="20" className="mr-2" />,
      href: '/settings/notifications',
    },
    {
      name: 'Security',
      icon: <HiOutlineLockClosed size="20" className="mr-2" />,
      activeIcon: <HiLockClosed size="20" className="mr-2" />,
      href: '/settings/security',
    },
  ];

  return (
    <>
      <DashboardHeader content={<h3 className="font-semibold text-2xl">Settings</h3>} />
      <div className="container mb-10 mt-2">
        <div className="grid grid-cols-[260px_1fr] gap-10 items-start">
          <div>
            <User
              name={business.name}
              description={business.email}
              avatarProps={{
                name: business.name,
                icon: <HiOutlineBriefcase size="20" className="mr-2" />,
                size: 'lg',
              }}
              className="mb-8"
              classNames={{
                base: 'justify-start px-0',
                name: 'text-lg leading-none truncate',
                description: 'text-base truncate leading-none mt-1 truncate',
                wrapper: 'ml-2',
              }}
            />
            <Listbox classNames={{ list: 'space-y-2', base: 'p-0' }}>
              {items.map((item) => {
                const active = item.href === pathname;
                return (
                  <ListboxItem
                    key={item.name}
                    href={item.href}
                    classNames={{
                      base: cn('px-5 py-2.5 rounded-full', { 'bg-default-200': active }),
                      title: cn('text-base flex items-center', { 'font-semibold': active }),
                    }}
                  >
                    {active ? item.activeIcon : item.icon}
                    {item.name}
                  </ListboxItem>
                );
              })}
            </Listbox>
          </div>
          <Card className="card-shadow px-10 py-8">
            <Outlet />
          </Card>
        </div>
      </div>
    </>
  );
};

export default SettingsLayout;
