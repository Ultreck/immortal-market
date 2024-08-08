import CreateDropdown from '@/components/core/project/CreateDropdown.jsx';
import { useTernaryDarkMode } from 'usehooks-ts';
import { NavLink } from 'react-router-dom';
import { IconFileInvoice } from '@tabler/icons-react';
import {
  TbChevronLeft,
  TbChevronRight,
  TbCrown,
  TbInputAi,
  TbLayout,
  TbLayoutList,
  TbSettings2,
  TbTableExport,
  TbUsers,
} from 'react-icons/tb';
import ProductsDropdown from '@/components/core/shared/ProductsDropdown.jsx';
import { cn } from '@/lib/utils.js';
import AuthDropdown from '@/components/core/shared/AuthDropdown.jsx';
import Logo from '@/components/core/shared/Logo.jsx';
import LogoIcon from '@/components/core/shared/LogoIcon.jsx';
import PropTypes from 'prop-types';
import { useState } from 'react';

const NavItem = ({ icon, title, href, mini = false }) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        cn(
          'flex items-center px-6 py-2.5 rounded-full text-base',
          isActive ? `bg-default-100 font-bold` : 'hover:bg-default-100 opacity-90',
          { 'w-12 h-12 p-0 justify-center': mini }
        )
      }
    >
      <div className={cn({ 'mr-4': !mini })}>{icon}</div>
      {!mini && <span>{title}</span>}
    </NavLink>
  );
};

NavItem.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  mini: PropTypes.bool,
};

const Sidebar = () => {
  const { isDarkMode } = useTernaryDarkMode();
  const [mini, setMini] = useState(false);

  return (
    <div
      className={cn('w-[280px] border-r border-default-200 dark:border-default-100 relative group transition-width', {
        'w-[90px]': mini,
      })}
    >
      <button
        className="absolute top-1/2 left-full -translate-y-1/2 z-10"
        type="button"
        aria-label="Hide"
        onClick={() => setMini(!mini)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 13 96"
          width="14"
          height="100%"
          fill="none"
          className="IrLwCg"
        >
          <path className="fill-default-100" d="M0,0 h1 c0,20,12,12,12,32 v32 c0,20,-12,12,-12,32 H0 z"></path>
          <path className="fill-default-100" d="M0.5,0 c0,20,12,12,12,32 v32 c0,20,-12,12,-12,32"></path>
        </svg>
        <div className="absolute top-1/2 -translate-y-1/2 left-0">
          {mini ? <TbChevronRight size="14" /> : <TbChevronLeft size="14" />}
        </div>
      </button>
      <div className={cn('w-[280px] h-full overflow-hidden', { 'w-[90px]': mini })}>
        <div className={cn('w-[280px] h-full overflow-hidden')}>
          <div
            className={cn('py-6 px-8 flex flex-col align-stretch w-[280px] relative h-full', { 'items-start': mini })}
          >
            {mini ? <LogoIcon light={isDarkMode} /> : <Logo light={isDarkMode} />}
            <AuthDropdown className={cn('mt-6', { 'mt-6': mini })} mini={mini} />
            <CreateDropdown className="mt-6" mini={mini} />
            <div className={cn('flex flex-col space-y-2 mt-6', { '-ml-1': mini })}>
              {[
                { name: 'Overview', href: '/', icon: <TbLayout size="20" /> },
                { name: 'Projects', href: '/projects', icon: <TbLayoutList size="20" /> },
                { name: 'Templates', href: '/templates', icon: <IconFileInvoice size="20" /> },
                { name: 'Ai Assistant', href: '/assistant', icon: <TbInputAi size="20" /> },
                { name: 'Outsource', href: '/outsource', icon: <TbTableExport size="20" /> },
              ].map((item) => (
                <NavItem key={item.href} icon={item.icon} title={item.name} href={item.href} mini={mini} />
              ))}
            </div>
            <div className={cn('flex flex-col space-y-2 mt-auto', { '-ml-1': mini })}>
              {[
                { name: 'Upgrade', href: `/plans`, icon: <TbCrown className="text-orange-500" size="20" /> },
                { name: 'Team', href: '/team', icon: <TbUsers size="20" /> },
                { name: 'Settings', href: `/settings`, icon: <TbSettings2 size="20" /> },
              ].map((item) => (
                <NavItem key={item.href} icon={item.icon} title={item.name} href={item.href} mini={mini} />
              ))}
              <ProductsDropdown mini={mini} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
