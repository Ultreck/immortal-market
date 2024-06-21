/* eslint-disable no-unused-vars */
import Logo from '@/components/core/shared/Logo.jsx';
import BusinessesDropdown from '@/components/core/layout/BusinessesDropdown.jsx';
import CreateDropdown from '@/components/core/project/CreateDropdown.jsx';
import { useDarkMode } from 'usehooks-ts';
import { NavLink } from 'react-router-dom';
import { IconFileInvoice } from '@tabler/icons-react';
import { TbCrown, TbLayout, TbLayoutList, TbMessage, TbSettings2, TbUsers } from 'react-icons/tb';
import ProductsDropdown from '@/components/core/shared/ProductsDropdown.jsx';
import { cn } from '@/lib/utils.js';
import AuthDropdown from '@/components/core/shared/AuthDropdown.jsx';
import useGlobalStore from '@/store/global.js';

const ACCOUNT_URL = import.meta.env.VITE_ACCOUNT_URL;

const Sidebar = () => {
  const { isDarkMode } = useDarkMode();
  const updateData = useGlobalStore((state) => state.updateData);

  return (
    <div className="py-8 px-8 border-r border-default-200 dark:border-default-100/70 flex flex-col w-[340px]">
      <Logo light={isDarkMode} />
      <BusinessesDropdown className="mt-8" />
      <CreateDropdown className="mt-6" />
      <div className="flex flex-col space-y-2 mt-6">
        {[
          { name: 'Overview', href: `/overview`, icon: <TbLayout size="20" /> },
          { name: 'Projects', href: `/projects`, icon: <TbLayoutList size="20" /> },
          { name: 'Templates', href: `/templates`, icon: <IconFileInvoice size="20" /> },
          { name: 'Inivitation', href: `/team`, icon: <TbUsers size="20" /> },
          { name: 'Messaging', href: `/message`, icon: <TbMessage size="20" /> },
        ].map((item) => (
          <NavLink
            key={item.href}
            to={item.name === "Messaging" ? '' : item.href }
            onClick={item.name === "Messaging" ? ()=> updateData({ isChatModalOpen: true }) : null }
            className={({ isActive }) =>
              cn(
                'flex items-center px-6 py-3 rounded-full text-base',
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
          { name: 'Upgrade', href: `/upgrade`, icon: <TbCrown className="text-orange-500" size="20" /> },
          { name: 'Settings', href: `/settings`, icon: <TbSettings2 size="20" /> },
        ].map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            className={({ isActive }) =>
              cn(
                'flex items-center px-6 py-3 rounded-full text-base',
                isActive ? `bg-default-100 font-bold` : 'hover:bg-default-100 opacity-90'
              )
            }
          >
            <div className="mr-4">{item.icon}</div>
            {item.name}
          </NavLink>
        ))}
        <ProductsDropdown />
        <AuthDropdown />
      </div>
    </div>
  );
};

export default Sidebar;
