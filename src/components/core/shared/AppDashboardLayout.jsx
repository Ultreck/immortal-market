import { createElement } from 'react';
import classNames from "classnames";
import { IconChevronRight, IconLogout, IconUserCog } from "@tabler/icons-react";
import AppSwitcherDesktop from "./AppSwitcherDesktop.jsx";
import SimpleDropdown from "@/components/global/SimpleDropdown.jsx";
import AppSwitcherMobile from "./AppSwitcherMobile.jsx";
import UserDropdown from "./UserDropdown.jsx";
import { useAuth } from "@/hooks/use-auth.jsx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const AppDashboardLayout = ({ logo, links = [], children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.reload();
  };

  return (
    <div className="h-screen w-full md:grid md:grid-cols-[310px_1fr]">
      <div className="h-screen border-r border-slate-200 hidden md:flex flex-col">
        <div className="px-8 py-8 mb-4 hidden md:block">
          <Link to={ "/" }>
            { createElement(logo, { className: 'px-5' }) }
          </Link>
        </div>
        <div className="flex-1 overflow-y-auto px-8">
          <div className="flex flex-col space-y-2">
            {
              links.map(item => (
                <Link
                  key={ item.href } to={ item.href }
                  className={ classNames(
                    'flex items-center px-6 py-3 rounded-3xl',
                    location.pathname === item.href ? `bg-slate-100 font-bold` : 'hover:bg-slate-100 opacity-90'
                  ) }
                >
                  <div className="mr-4">{ item.icon }</div>
                  { item.name }
                </Link>
              ))
            }
          </div>
        </div>
        <div className="px-7 py-2">
          <AppSwitcherDesktop/>
        </div>
        <hr/>
        <div className="px-8 py-2">
          <SimpleDropdown
            direction="right-bottom"
            trigger={
              <div className="flex items-center rounded-3xl hover:bg-slate-100 px-4 py-4 cursor-pointer">
                <img
                  src={ `https://ui-avatars.com/api/?name=${ user.firstName } ${ user.lastName }` }
                  className="w-8 h-8 rounded-full" alt={ `${ user.firstName } ${ user.lastName }` }
                />
                <div className="flex-1 px-3 overflow-hidden">
                  <p className="leading-none">{ user.firstName } { user.lastName }</p>
                  <p className="text-md mt-0.5 opacity-80 overflow-hidden whitespace-nowrap text-ellipsis">
                    { user.email }
                  </p>
                </div>
                <div>
                  <IconChevronRight size="18"/>
                </div>
              </div>
            }
            items={ [
              {
                text: 'Account settings',
                icon: <IconUserCog size="18"/>,
                onClick: () => navigate('/account')
              },
              { text: 'Logout', icon: <IconLogout size="18"/>, onClick: handleLogout },
            ] }
          />
        </div>
      </div>
      <div className="h-screen overflow-y-auto flex flex-col relative bg-slate-100/40 pt-[100px] md:py-0">
        <div className="md:hidden fixed top-0 left-0 w-full bg-gradient-to-b from-slate-100 z-50">
          <div className="container !max-w-5xl pt-6 pb-10 space-x-4 flex items-center md:justify-end">
            { createElement(logo, { className: 'md:hidden mr-auto' }) }
            <AppSwitcherMobile/>
            <UserDropdown/>
          </div>
        </div>
        <div className="flex-1">
          { children }
        </div>
        <div className="md:hidden fixed bottom-0 left-0 w-full bg-white shadow border-t">
          <div className={
            classNames('grid grid-cols-1 w-full', {
              'grid-cols-2': links.length === 2,
              'grid-cols-3': links.length === 3,
              'grid-cols-4': links.length === 4,
              'grid-cols-5': links.length === 5,
            }) }
          >
            {
              links.map(item => (
                <Link
                  key={ item.href } to={ item.href }
                  className="flex flex-col justify-center items-center text-center px-2 py-3"
                >
                  <div
                    className={ classNames(
                      'rounded-2xl mb-1 px-4 py-1',
                      location.pathname === item.href ? `bg-slate-200` : 'opacity-90'
                    ) }
                  >
                    { item.icon }
                  </div>
                  { item.name }
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

AppDashboardLayout.propTypes = {
  logo: PropTypes.any,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      href: PropTypes.string,
      icon: PropTypes.element
    })
  ),
  children: PropTypes.any
}

export default AppDashboardLayout;
