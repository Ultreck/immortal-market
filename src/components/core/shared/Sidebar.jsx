import CreateDropdown from '@/components/core/project/CreateDropdown.jsx';
import { useTernaryDarkMode } from 'usehooks-ts';
import { NavLink } from 'react-router-dom';
import { TbCrown, TbSettings2, TbUsers } from 'react-icons/tb';
import ProductsDropdown from '@/components/core/shared/ProductsDropdown.jsx';
import { cn } from '@/lib/utils.js';
import Logo from '@/components/core/shared/Logo.jsx';
import LogoIcon from '@/components/core/shared/LogoIcon.jsx';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { LuBot, LuFolderOutput } from 'react-icons/lu';
import { HiOutlineTemplate, HiOutlineViewGrid, HiOutlineViewList } from 'react-icons/hi';

const NavItem = ({ icon, title, href, mini = false }) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        cn(
          'flex items-center px-5 py-2 rounded-xl text-base',
          isActive ? `bg-black/5 dark:bg-white/10 font-semibold` : 'hover:bg-black/5 opacity-80',
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
  const [mini] = useState(false);

  return (
    <div className={cn('w-[260px] relative group transition-width', { 'w-[90px]': mini })}>
      <div className={cn('w-[260px] h-full overflow-hidden', { 'w-[90px]': mini })}>
        <div className={cn('w-[260px] h-full overflow-hidden')}>
          <div
            className={cn('py-8 px-8 flex flex-col align-stretch w-[260px] relative h-full', { 'items-start': mini })}
          >
            {mini ? (
              <LogoIcon light={isDarkMode} className="mb-8" />
            ) : (
              <div className="px-3">
                <Logo width={130} light={isDarkMode} className="mb-8" />
              </div>
            )}
            <CreateDropdown mini={mini} />
            <div className={cn('flex flex-col space-y-2 mt-6', { '-ml-1': mini })}>
              {[
                { name: 'Overview', href: '/', icon: <HiOutlineViewGrid size="20" /> },
                { name: 'Projects', href: '/projects', icon: <HiOutlineViewList size="20" /> },
                { name: 'Templates', href: '/templates', icon: <HiOutlineTemplate size="20" /> },
                { name: 'Apps', href: '/apps', icon: <HiOutlineViewGrid size="20" /> },
                { name: 'Ai Assistant', href: '/assistant', icon: <LuBot size="20" /> },
                { name: 'Outsource', href: '/outsource', icon: <LuFolderOutput size="20" /> },
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

