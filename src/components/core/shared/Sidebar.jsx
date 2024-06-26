import CreateDropdown from '@/components/core/project/CreateDropdown.jsx';
import { useDarkMode } from 'usehooks-ts';
import { NavLink } from 'react-router-dom';
import { IconFileInvoice } from '@tabler/icons-react';
import { TbCrown, TbDatabaseSearch, TbLayout, TbLayout2, TbLayoutList, TbSettings2, TbUsers } from 'react-icons/tb';
import ProductsDropdown from '@/components/core/shared/ProductsDropdown.jsx';
import { cn } from '@/lib/utils.js';
import AuthDropdown from '@/components/core/shared/AuthDropdown.jsx';
import Logo from '@/components/core/shared/Logo.jsx';

const Sidebar = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div className="py-6 px-8 border-r border-default-200 dark:border-default-100/70 flex flex-col align-stretch w-[280px]">
      <Logo light={isDarkMode} />
      <AuthDropdown className="mt-6" />
      <CreateDropdown className="mt-6" />
      <div className="flex flex-col space-y-2 mt-6">
        {[
          { name: 'Overview', href: '/', icon: <TbLayout size="20" /> },
          { name: 'Projects', href: '/projects', icon: <TbLayoutList size="20" /> },
          { name: 'Dashboards', href: '/dashboards', icon: <TbLayout2 size="20" /> },
          { name: 'Templates', href: '/templates', icon: <IconFileInvoice size="20" /> },
          { name: 'Find Data', href: '/finddata', icon: <TbDatabaseSearch size="20" /> },
        ].map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            className={({ isActive }) =>
              cn(
                'flex items-center px-6 py-2.5 rounded-full text-base',
                isActive ? `bg-default-100 font-bold` : 'hover:bg-default-100 opacity-90'
              )
            }
          >
            <div className="mr-4">{item.icon}</div>
            {item.name}
          </NavLink>
        ))}
      </div>
      <div className="flex flex-col space-y-2 mt-auto">
        {[
          { name: 'Upgrade', href: `/plans`, icon: <TbCrown className="text-orange-500" size="20" /> },
          { name: 'Team', href: '/team', icon: <TbUsers size="20" /> },
          { name: 'Settings', href: `/settings`, icon: <TbSettings2 size="20" /> },
        ].map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            className={({ isActive }) =>
              cn(
                'flex items-center px-6 py-2.5 rounded-full text-base',
                isActive ? `bg-default-100 font-bold` : 'hover:bg-default-100 opacity-90'
              )
            }
          >
            <div className="mr-4">{item.icon}</div>
            {item.name}
          </NavLink>
        ))}
        <ProductsDropdown />
      </div>
    </div>
  );
};

export default Sidebar;
