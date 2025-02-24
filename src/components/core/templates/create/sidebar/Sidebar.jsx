import { createElement, useState } from 'react';
import { RiArrowLeftSLine, RiImage2Line, RiSettings2Line, RiShapesLine, RiStackLine } from 'react-icons/ri';
import { cn, getImageLink } from '@/lib/utils.js';
import Elements from '@/components/core/templates/create/sidebar/components/Elements.jsx';
import Texts from '@/components/core/templates/create/sidebar/components/design/Texts.jsx';
import Pages from '@/components/core/templates/create/sidebar/pages/Pages.jsx';
import Layers from '@/components/core/templates/create/sidebar/layers/Layers.jsx';
import Build from '@/components/core/templates/create/sidebar/build/Build.jsx';
import { Avatar, Tooltip } from '@heroui/react';
import Svgs from '@/components/core/templates/create/sidebar/images/Svgs.jsx';
import { TbAbc, TbChevronLeft, TbChevronRight, TbLayoutDistributeHorizontal, TbTemplate } from 'react-icons/tb';
import Images from '@/components/core/templates/create/sidebar/images/Images.jsx';
import { useAuth } from '@/hooks/use-auth.jsx';
import MyWork from './my-work/MyWork.jsx';
import PropTypes from 'prop-types';
import Project from '@/components/core/templates/create/sidebar/project/Project.jsx';
import { useNavigate } from 'react-router-dom';
import useTemplateStore from '@/store/template.js';
import useBusiness from '@/hooks/use-business.js';
import { useGetDesign } from '@/api/business.js';
import Forms from '@/components/core/templates/create/sidebar/forms/Forms.jsx';
import { FaWpforms } from 'react-icons/fa';

const Sidebar = ({ className }) => {
  const navigate = useNavigate();
  const [tab, setTab] = useState('texts');
  const collapsed = !tab;
  const { user } = useAuth();
  const { id: business } = useBusiness();
  const id = useTemplateStore((state) => state.template.id);
  const { data: { design = {} } = {} } = useGetDesign(business, id);

  return (
    <div
      className={cn('h-full border-r dark:border-default-100 bg-gray-950 dark text-white dark:bg-black relative', {
        'w-[380px]': !collapsed,
        'w-auto': collapsed,
      })}
    >
      {!collapsed && (
        <button
          aria-label="Hide"
          onClick={() => setTab(null)}
          className="absolute top-1/2 left-[calc(100%)] -translate-y-1/2 z-10 bg-gray-900 hover:bg-gray-800 border border-default-200 dark:border-default-100 h-[70px] rounded-r-full transition-all duration-200"
        >
          <div className="">{collapsed ? <TbChevronRight size="16" /> : <TbChevronLeft size="16" />}</div>
        </button>
      )}
      <div
        className={cn('grid grid-cols-[80px_1fr] h-screen overflow-y-auto transition-all duration-200', {
          'grid-cols-[90px]': collapsed,
        })}
      >
        <div
          className={cn(
            'pl-3 py-4 h-full border-default-200 dark:border-default-100 flex flex-col items-center transition-all duration-200',
            collapsed ? 'px-3' : 'pl-3'
          )}
        >
          <div className="space-y-1 w-full flex-1 flex flex-col">
            <button
              onClick={() => navigate(design.type === 'template' ? '/templates' : '/projects')}
              className={cn(
                'flex flex-col items-center justify-center py-4 px-3 w-full rounded-l-2xl overflow-hidden',
                'hover:bg-default-200 hover:dark:bg-gray-800/50 cursor-pointer',
                { 'rounded-2xl': collapsed }
              )}
            >
              <RiArrowLeftSLine size={24} />
              <p className="text-sm mt-0.5">Back</p>
            </button>
            {[
              { icon: TbLayoutDistributeHorizontal, title: 'Pages', key: 'pages' },
              { icon: RiShapesLine, title: 'Elements', key: 'elements' },
              { icon: TbAbc, title: 'Texts', key: 'texts' },
              { icon: RiImage2Line, title: 'Images', key: 'images' },
              { icon: TbTemplate, title: 'Templates', key: 'templates' },
            ].map((element) => {
              const active = tab === element.key;
              return (
                <Tooltip key={element.key} content={element.title} showArrow placement="right">
                  <div
                    tabIndex={0}
                    className={cn(
                      'flex flex-col items-center justify-center py-4 px-3 w-full rounded-l-2xl overflow-hidden',
                      {
                        'bg-primary-500 text-white dark:bg-gray-800/50': active,
                        'hover:bg-default-200 hover:dark:bg-gray-800/50 cursor-pointer': !active,
                        'rounded-2xl': collapsed,
                      }
                    )}
                    onClick={() => setTab(element.key)}
                  >
                    {createElement(element.icon, { size: '22' })}
                    <p className="text-sm mt-1 truncate overflow text-center w-full">{element.title}</p>
                  </div>
                </Tooltip>
              );
            })}
            <div className="flex-1"></div>
            {design?.type === 'template' && (
              <div className="space-y-4">
                {[
                  { icon: RiStackLine, title: 'Layers', key: 'layers' },
                  { icon: FaWpforms, title: 'Forms', key: 'forms' },
                ].map((element) => {
                  const active = tab === element.key;
                  return (
                    <Tooltip key={element.key} content={element.title} showArrow placement="right">
                      <div
                        tabIndex={0}
                        className={cn(
                          'flex flex-col items-center justify-center py-[13px] px-3 w-full rounded-l-2xl overflow-hidden',
                          {
                            'bg-primary-500 text-white dark:bg-gray-800/50': active,
                            'hover:bg-default-200 hover:dark:bg-gray-800/50 cursor-pointer': !active,
                            'rounded-2xl': collapsed,
                          }
                        )}
                        onClick={() => setTab(element.key)}
                      >
                        {createElement(element.icon, { size: '20' })}
                        <p className="text-sm mt-1 truncate overflow text-center w-full">{element.title}</p>
                      </div>
                    </Tooltip>
                  );
                })}
              </div>
            )}
            {design?.type === 'project' && (
              <div className="space-y-4">
                {[{ icon: RiSettings2Line, title: 'Project', key: 'project' }].map((element) => {
                  const active = tab === element.key;
                  return (
                    <Tooltip key={element.key} content={element.title} showArrow placement="right">
                      <div
                        tabIndex={0}
                        className={cn(
                          'flex flex-col items-center justify-center py-[13px] px-3 w-full rounded-l-2xl overflow-hidden',
                          {
                            'bg-primary-500 text-white dark:bg-gray-800/50': active,
                            'hover:bg-default-200 hover:dark:bg-gray-800/50 cursor-pointer': !active,
                            'rounded-2xl': collapsed,
                          }
                        )}
                        onClick={() => setTab(element.key)}
                      >
                        {createElement(element.icon, { size: '20' })}
                        <p className="text-sm mt-1 truncate overflow text-center w-full">{element.title}</p>
                      </div>
                    </Tooltip>
                  );
                })}
                <div className={cn('cursor-pointer flex items-center justify-center', className)}>
                  <Avatar
                    src={getImageLink(user.image)}
                    radius="full"
                    classNames={{ base: 'w-[32px] h-[32px] my-2' }}
                    isBordered
                    onClick={() => setTab('my-work')}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        {!collapsed && (
          <div className="px-6 py-6 overflow-x-hidden dark:bg-gray-800/50">
            {tab === 'texts' && <Texts />}
            {tab === 'elements' && <Elements />}
            {tab === 'templates' && <Build />}
            {tab === 'graphics' && <Svgs />}
            {tab === 'layers' && <Layers />}
            {tab === 'images' && <Images />}
            {tab === 'my-work' && <MyWork />}
            {tab === 'project' && <Project />}
            {tab === 'pages' && <Pages />}
            {tab === 'forms' && <Forms />}
          </div>
        )}
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
};

export default Sidebar;
