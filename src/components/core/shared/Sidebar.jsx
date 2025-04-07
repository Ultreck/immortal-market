import CreateDropdown from '@/components/core/project/CreateDropdown.jsx';
import { useTernaryDarkMode } from 'usehooks-ts';
import { NavLink, useLocation } from 'react-router-dom';
import { TbChevronLeft, TbChevronRight, TbCrown, TbSettings2, TbUsers } from 'react-icons/tb';
import { cn } from '@/lib/utils.js';
import Logo from '@/components/core/shared/Logo.jsx';
import LogoIcon from '@/components/core/shared/LogoIcon.jsx';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { HiOutlineTemplate, HiOutlineViewGrid, HiViewList } from 'react-icons/hi';
import { HiOutlineViewColumns } from 'react-icons/hi2';

const NavItem = ({ icon, title, href, mini = false }) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        cn(
          'flex items-center px-5 py-2 rounded-3xl text-base',
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
  const [mini, setMini] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith('/markets')) setMini(true);
  }, [location.pathname]);

  return (
    <div className={cn('w-[260px] relative group transition-width', { 'w-[90px]': mini })}>
      <button
        onClick={() => setMini(!mini)}
        aria-label={mini ? 'Hide' : 'Show'}
        className="absolute top-1/2 left-[calc(100%)] -translate-y-1/2 z-10 bg-[#eff6fd] dark:bg-gray-950 border border-default-200/50 dark:border-default-50 h-[56px] rounded-r-full transition-all duration-200"
      >
        <div className="">{mini ? <TbChevronRight size="16" /> : <TbChevronLeft size="16" />}</div>
      </button>
      <div className={cn('w-[260px] h-full overflow-hidden', { 'w-[90px]': mini })}>
        <div className={cn('w-[260px] h-full overflow-hidden')}>
          <div
            className={cn('py-6 px-8 flex flex-col align-stretch w-[260px] relative h-full', { 'items-start': mini })}
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
                { name: 'Overview', href: '/', icon: <HiViewList size="20" /> },
                { name: 'Projects', href: '/projects', icon: <HiOutlineViewColumns size="20" /> },
                { name: 'Templates', href: '/templates', icon: <HiOutlineTemplate size="20" /> },
                { name: 'Apps', href: '/apps', icon: <HiOutlineViewGrid size="20" /> },
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  source: PropTypes.string,
};

export default Sidebar;
