/* eslint-disable no-unused-vars */
import { createElement, useRef } from 'react';
import classNames from 'classnames';
// import { IconChevronRight, IconLogout, IconUserCog } from '@tabler/icons-react';
// import AppSwitcherDesktop from './AppSwitcherDesktop.jsx';
// import SimpleDropdown from '@/components/global/SimpleDropdown.jsx';
// import AppSwitcherMobile from './AppSwitcherMobile.jsx';
// import UserDropdown from './UserDropdown.jsx';
import { useAuth } from '@/hooks/use-auth.jsx';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from '@nextui-org/react';
import {  TbPlus, TbUserPlus } from 'react-icons/tb';
import { useLayout } from '../../../hooks/use-layout.jsx';
import { motion } from 'framer-motion';
import {  VscThreeBars } from 'react-icons/vsc';
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import BusinessButtonPopup from './BusinessAppButtonSwitch.jsx';
import BusinessOtherApps from './BusinessOtherApp.jsx';
import { Tooltip } from "@nextui-org/react";


const BusinessDashboardLayout = ({ logo, miniLogo, links = [], lowerLink = [], children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const sidebarRef = useRef();
  const {
    sidebarOpen,
    isTablet,
    sidebarMinimized,
    minimizeSidebar,
    onOverlayClicked,
    sidebar_animation,
    toggleSideBar,
  } = useLayout();

  return (
    // md:grid md:grid-cols-[260px_1fr]
    <div className="h-screen w-full  flex">
      <div
        onClick={() => onOverlayClicked()}
        className={`lg:hidden fixed inset-0 max-h-screen z-[10] bg-[#5c5c5c]  opacity-80 ${
          sidebarOpen ? 'block' : 'hidden'
        } `}
      ></div>

      {/* sidebar */}
      <motion.div
        ref={sidebarRef}
        variants={sidebar_animation}
        initial={{ x: isTablet ? -350 : 0 }}
        animate={sidebarMinimized && sidebarOpen ? 'minimize' : !sidebarMinimized && sidebarOpen ? 'open' : 'closed'}
        className={ classNames(
            " group lg:z-[30] z-[60] fixed top-0 left-0 h-screen !bg-white scrollbar-hide", 
            isTablet ? "max-w-[21.4rem]  w-[21.4rem]" : "max-w-[17.3rem]  w-[17.3rem]"
        )}
      >
        <div className="h-screen border-r border-slate-300  flex flex-col  ">
          {sidebarMinimized ? (
            <div className="pt-[1.2rem] pb-[2.2rem] relative">
              <Link to={'/'} className="flex items-center justify-center">
          
                {createElement(miniLogo, { className: 'px-1 ' })}
              </Link>
              <MdKeyboardDoubleArrowLeft   onClick={minimizeSidebar}  size={21} className='absolute rotate-180 -right-4 bg-slate-100  rounded-xl top-1/4  font-bold hover:bg-blue-200 cursor-pointer '  />
            </div>
          ) : (
            <div className="px-3 pt-4 pb-[1.95rem] ">
                { isTablet  && sidebarOpen ?
                <div className='flex  items-center px-1 gap-3'>
                    <div className='hover:bg-blue-200 cursor-pointer' onClick={onOverlayClicked}>
                            
                      <TbPlus size={20} strokeWidth={2.7} className=' rotate-45' />
                    </div>
                    <Link to={'/'}>{createElement(logo, { className: '' })}</Link>
                </div> :   <div className='flex justify-between  items-center gap-3'>
                    <Link to={'/'}>{createElement(logo, { className: 'px-2 ' })}</Link>
                    
                    {
                        !isTablet &&
                    <MdKeyboardDoubleArrowLeft   onClick={minimizeSidebar}  size={21} className=' font-bold hover:bg-blue-200 cursor-pointer '  />
                    }
                </div>
                }
            </div>
          )}
          <div className={classNames('px-3   py-1 text-center', sidebarMinimized ? 'mb-4' : 'mb-3')}>
            <BusinessButtonPopup>
                <Button
                isIconOnly={sidebarMinimized}
                size="lg"
                className={classNames(
                    '!bg-sky-600  text-white',
                    sidebarMinimized ? 'rounded-full' : 'flex items-center rounded-3xl w-full'
                )}
                >
                <TbPlus size={18} strokeWidth={2.8} />
                <span className={classNames('text-[0.99rem] font-semibold tracking-wide', sidebarMinimized && `hidden`)}>
                    Create
                </span>
                </Button>
            </BusinessButtonPopup>
          </div>
          <div className="flex-1  overflow-y-auto px-3">
            <div className="flex flex-col space-y-1">
              {links.map((item) => (

                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) =>
                    classNames(
                      'flex items-center px-4 py-3 rounded-lg',
                      isActive ? `bg-slate-100 font-bold` : 'hover:bg-slate-100 opacity-90'
                    )
                  }
                >
                    {
                        sidebarMinimized ? 
                        <Tooltip
                            showArrow={true}
                            classNames={{
                                content: "bg-gray-900 text-white ",
                                arrow: "bg-gray-900",
                            }}
    
                            placement="right"
                            content={item.name}
                        >
                            <div className="mr-4">{item.icon}</div>
                        </Tooltip> : 
                        <div className="mr-4">{item.icon}</div>
                    }
                    {!sidebarMinimized && item.name}
                </NavLink>
              ))}
            </div>
          </div>




          <div className={classNames('px-3   py-1 text-center', sidebarMinimized ? 'mb-4' : 'mb-3')}>
            <BusinessButtonPopup>
                <Button
                isIconOnly={sidebarMinimized}
                size="lg"
                variant="bordered"
                className={classNames(
                    'border-sky-600 border-1  text-gray-600',
                    sidebarMinimized ? 'rounded-full' : 'flex items-center rounded-xl w-full'
                )}
                >
                <TbUserPlus size={18} strokeWidth={2.8} />
                <span className={classNames('text-[0.99rem] font-semibold tracking-wide', sidebarMinimized && `hidden`)}>
                    Invite Someone
                </span>
                </Button>
            </BusinessButtonPopup>
          </div>


          <div className="overflow-y-auto px-3 border-y py-2">
            <div className="flex flex-col space-y-1">
              {lowerLink.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) =>
                    classNames(
                      'flex items-center px-4 py-3 rounded-lg',
                      isActive ? `bg-slate-100 font-bold` : 'hover:bg-slate-100 opacity-90'
                    )
                  }
                >
                    {
                        sidebarMinimized ? 
                        <Tooltip
                            showArrow={true}
                            classNames={{
                                content: "bg-gray-900 text-white ",
                                arrow: "bg-gray-900",
                            }}
    
                            placement="right"
                            content={item.name}
                        >
                            <div className="mr-4">{item.icon}</div>
                        </Tooltip> : 
                        <div className="mr-4">{item.icon}</div>
                    }
                
                  {!sidebarMinimized && item.name}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="px-3 py-2">
            <BusinessOtherApps  />
          </div>
          <hr />
          {/* <div className="px-3 py-2">
            <SimpleDropdown
              direction="right-bottom"
              trigger={
                <div className="flex items-center rounded-3xl hover:bg-slate-100 px-4 py-4 cursor-pointer">
                  <img
                    src={`https://ui-avatars.com/api/?name=${user?.firstName} ${user?.lastName}`}
                    className="w-8 h-8 rounded-full"
                    alt={`${user?.firstName} ${user?.lastName}`}
                  />
                  {!sidebarMinimized && (
                    <div className="flex-1 px-3 overflow-hidden">
                      <p className="leading-none">
                        {user?.firstName} {user?.lastName}
                      </p>
                      <p className="text-md mt-0.5 opacity-80 overflow-hidden whitespace-nowrap text-ellipsis">
                        {user?.email}
                      </p>
                    </div>
                  )}

                  {!sidebarMinimized && (
                    <div>
                      <IconChevronRight size="18" />
                    </div>
                  )}
                </div>
              }
              items={[
                {
                  text: 'Account settings',
                  icon: <IconUserCog size="18" />,
                  onClick: () => navigate('/account'),
                },
                { text: 'Logout', icon: <IconLogout size="18" />, onClick: () => logout() },
              ]}
            />
          </div> */}
        </div>
      </motion.div>

      {/* sidebar */}

      {/* body */}
      {/* bg-slate-100/40 */}
      <div
        className={`h-screen overflow-y-auto flex w-full   flex-col relative bg-slate-100/40  pt-[100px] lg:py-0
            ${
              sidebarMinimized
                ? 'lg:ml-[5.5rem]'
                : sidebarOpen
                  ? 'lg:ml-[17rem]'
                  : !sidebarMinimized && !sidebarOpen && 'lg:ml-0'
            }
      `}
      >
        <div className="lg:hidden fixed top-0 left-0 w-full bg-gradient-to-b from-slate-100 z-50 ">
          <div className="container !max-w-5xl pt-6 pb-10 space-x-4 flex items-center lg:justify-end">
            <div className="lg:hidden mr-auto flex gap-3 items-center ">
              <VscThreeBars size={24} onClick={toggleSideBar} className='hover:bg-blue-200 p-1 cursor-pointer' />
              {createElement(logo, { className: '' })}
            </div>
            {/* <AppSwitcherMobile />
            <UserDropdown /> */}
          </div>
        </div>

        <div className="flex-1">{children}</div>

        <div className="hidden fixed bottom-0 left-0 w-full bg-white shadow border-t">
          <div
            className={classNames('grid grid-cols-1 w-full', {
              'grid-cols-2': links.length === 2,
              'grid-cols-3': links.length === 3,
              'grid-cols-4': links.length === 4,
              'grid-cols-5': links.length === 5,
            })}
          >
            {links.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="flex flex-col justify-center items-center text-center px-2 py-3"
              >
                <div
                  className={classNames(
                    'rounded-2xl mb-1 px-4 py-1',
                    location.pathname === item.href ? `bg-slate-200` : 'opacity-90'
                  )}
                >
                  {item.icon}
                </div>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

BusinessDashboardLayout.propTypes = {
  logo: PropTypes.any,
  miniLogo: PropTypes.any,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      href: PropTypes.string,
      icon: PropTypes.element,
    })
  ),
  lowerLink: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      href: PropTypes.string,
      icon: PropTypes.element,
    })
  ),
  children: PropTypes.any,
};

export default BusinessDashboardLayout;

