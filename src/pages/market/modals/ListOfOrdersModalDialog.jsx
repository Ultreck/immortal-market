import React, { useState } from 'react';
import { Drawer, DrawerContent, DrawerHeader, DrawerBody, Button, useDisclosure, Tabs, Tab, Chip } from '@heroui/react';
import PlaceOrder from './PlaceOrder';

const ListOfOrdersModalDialog = ({ data, type = '' }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [tab, seTtab] = useState('current-orders');
  return (
    <>
      {type === 'sell' ? (
        <Button onPress={onOpen} color="danger" radius="full" className='w-32'>
          Sell
        </Button>
      ) : (
        <Button color="primary" className='font-semibold' onPress={onOpen}>
          See more details
        </Button>
      )}
      <Drawer
        isOpen={isOpen}
        size={'2xl'}
        backdrop={'blur'}
        motionProps={{
          variants: {
            enter: {
              opacity: 1,
              x: 0,
              duration: 0.3,
            },
            exit: {
              x: 100,
              opacity: 0,
              duration: 0.3,
            },
          },
        }}
        onOpenChange={onOpenChange}
      >
        <DrawerContent>
          <>
            <DrawerHeader className="flex flex-col gap-1">Orders</DrawerHeader>
            <DrawerBody>
              <div className="flex w-full flex-col">
                <Tabs
                  aria-label="Options"
                  selectedKey={tab}
                  onSelectionChange={(e) => seTtab(e)}
                  classNames={{
                    tabList: 'gap-6 w-full relative rounded-none p-0',
                    cursor: 'w-full bg-[#22d3ee]',
                    tab: 'max-xl px-0 h-12',
                    tabContent: 'group-data-[selected=true]:text-[#06b6d4]',
                  }}
                  color="primary"
                  variant="underlined"
                >
                  <Tab
                    key="current-orders"
                    title={
                      <div className="flex items-center space-x-2">
                        <span>Current Orders</span>
                        <Chip size="sm" variant="faded">
                          2
                        </Chip>
                      </div>
                    }
                  >
                    <div className="mt-8 flex justify-between">
                      <div className="flex space-x-4">
                        <img src="/images/accessbank.png" alt="" className="w-[30px]" />
                        <div>
                          <p className="text-2xl font-bold">Access Bank</p>
                          <p className="text-sm">ACB</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-2xl font-bold">N34.22</p>
                        <p className="text-sm">22,000 Units</p>
                      </div>
                      <PlaceOrder type="sell" text="Sell" radius="full" color="">
                        View
                      </PlaceOrder>
                    </div>
                    <div className="mt-8 flex justify-between">
                      <div className="flex space-x-4">
                        <img src="/images/accessbank.png" alt="" className="w-[30px]" />
                        <div>
                          <p className="text-2xl font-bold">Access Bank</p>
                          <p className="text-sm">ACB</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-2xl font-bold">N34.22</p>
                        <p className="text-sm">22,000 Units</p>
                      </div>
                      <PlaceOrder type="sell" text="Sell" radius="full" color="">
                        View
                      </PlaceOrder>
                    </div>
                  </Tab>
                  <Tab
                    key="pending-orders"
                    title={
                      <div className="flex items-center space-x-2">
                        <span>Pending Orders</span>
                        <Chip size="sm" variant="faded">
                          1
                        </Chip>
                      </div>
                    }
                  >
                    <div className="mt-4 flex justify-between">
                      <div className="flex space-x-4">
                        <img src="/images/accessbank.png" alt="" className="w-[30px]" />
                        <div>
                          <p className="text-2xl font-bold">Access Bank</p>
                          <p className="text-sm">ACB</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-2xl font-bold">N34.22</p>
                        <p className="text-sm">22,000 Units</p>
                      </div>
                    </div>
                  </Tab>
                  <Tab
                    key="completed-orders"
                    title={
                      <div className="flex items-center space-x-2">
                        <span>Completed Orders</span>
                        <Chip size="sm" variant="faded">
                          3
                        </Chip>
                      </div>
                    }
                  />
                </Tabs>
              </div>
            </DrawerBody>
          </>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ListOfOrdersModalDialog;
