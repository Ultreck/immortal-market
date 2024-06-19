import { createElement, Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { IconGridDots, IconHome2, IconLayoutGrid } from '@tabler/icons-react';
import IconButton from '@/components/ui/IconButton.jsx';
import products from '@/lib/products.js';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const AppSwitcherMobile = () => {
  return (
    <>
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              as={IconButton}
              className={`${open ? '' : 'text-opacity-90'}`}
              variant="text"
              color="black"
              size="md"
              rounded
              icon={<IconGridDots size="23" />}
            ></Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -right-6 z-10 mt-3 w-screen max-w-xs px-4 sm:px-0 lg:max-w-[280px]">
                <div className="overflow-hidden rounded-2xl shadow-md ring-1 ring-black ring-opacity-5 bg-white">
                  <div className="border-b py-2 text-center flex items-center justify-center">
                    <IconHome2 size="18" className="mr-3" />
                    <h4 className="font-semibold">Apps</h4>
                  </div>
                  <div className="relative grid gap-2 px-4 py-4 grid-cols-2">
                    {products.slice(0, 5).map((product) => (
                      <Link
                        key={product.name}
                        to={product.link}
                        className="flex flex-col items-center rounded-2xl text-center px-2 py-4 transition duration-150 ease-in-out hover:bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <div
                          className={classNames(
                            'w-10 h-10 rounded-full flex items-center justify-center text-white',
                            product.backgroundColor
                          )}
                        >
                          {createElement(product.icon)}
                        </div>
                        <div className="mt-2">
                          <p className="text-sm text-gray-900">{product.name}</p>
                        </div>
                      </Link>
                    ))}
                    <Link
                      to={'/'}
                      className="flex flex-col items-center rounded-2xl text-center px-2 py-4 transition duration-150 ease-in-out hover:bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <div
                        className={classNames('w-10 h-10 rounded-full flex items-center justify-center text-slate-600')}
                      >
                        {createElement(IconLayoutGrid)}
                      </div>
                      <div className="mt-2">
                        <p className="text-sm text-gray-900">View all</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  );
};

export default AppSwitcherMobile;
