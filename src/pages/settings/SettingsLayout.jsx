import DashboardTitle from '@/components/core/shared/DashboardTitle.jsx';
import { Card, Listbox, ListboxItem, User } from '@nextui-org/react';
import { HiOutlineBell, HiOutlineBriefcase, HiOutlineLockClosed, HiOutlinePaintBrush } from 'react-icons/hi2';
import { cn } from '@/lib/utils.js';
import { Outlet, useLocation } from 'react-router-dom';
import useBusiness from '@/hooks/use-business.js';

const SettingsLayout = () => {
  const { business } = useBusiness();
  const { pathname } = useLocation();

  const items = [
    {
      name: 'Business',
      icon: <HiOutlineBriefcase size="20" className="mr-2" />,
      href: '/settings/business',
    },
    {
      name: 'Appearance',
      icon: <HiOutlinePaintBrush size="20" className="mr-2" />,
      href: '/settings/appearance',
    },
    {
      name: 'Notifications',
      icon: <HiOutlineBell size="20" className="mr-2" />,
      href: '/settings/notifications',
    },
    {
      name: 'Security',
      icon: <HiOutlineLockClosed size="20" className="mr-2" />,
      href: '/settings/security',
    },
  ];

  return (
    <>
      <DashboardTitle
        text="Settings"
        breadcrumbs={[
          { text: 'Home', href: '/' },
          { text: 'Settings', href: '/settings' },
        ]}
      />
      <div className="container py-10">
        <div className="grid grid-cols-[260px_1fr] gap-10 items-start">
          <div>
            <User
              name={business.name}
              description={business.email}
              avatarProps={{ name: business.name, icon: <HiOutlineBriefcase size="20" className="mr-2" /> }}
              className="mb-8"
              classNames={{
                base: 'justify-start px-2',
                name: 'text-base',
                description: 'text-md truncate',
                wrapper: 'ml-2',
              }}
            />
            <Listbox classNames={{ list: 'space-y-2', base: 'p-0' }}>
              {items.map((item) => (
                <ListboxItem
                  key={item.name}
                  href={item.href}
                  classNames={{
                    base: cn('px-4 py-2.5 rounded-full', { 'bg-default-200': item.href === pathname }),
                    title: 'text-base flex items-center',
                  }}
                >
                  {item.icon}
                  {item.name}
                </ListboxItem>
              ))}
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
