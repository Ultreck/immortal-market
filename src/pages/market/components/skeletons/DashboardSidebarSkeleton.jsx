import { Avatar, AvatarGroup, Card, CardBody, Skeleton, Tab, Tabs } from '@heroui/react';
import React from 'react'

const DashboardSidebarSkeleton = () => {
  return (
    <div className="sticky top-8">
    <Card className="card-shadow rounded-2xl h-[450px] ">
      <Tabs
        aria-label="Options"
        classNames={{
          tabList: 'gap-1 px-4 w-full relative rounded-none',
          cursor: 'w-full bg-[#22d3ee]',
          tab: 'max-xl  h-10',
          tabContent: 'group-data-[selected=true]:text-[#06b6d4]',
        }}
        
      >
        <Tab
          key="time-"
          title={
            <Skeleton className="flex items-center space-x-2">
              <span>Time frame</span>
            </Skeleton>
          }
        >
          <CardBody className=" pt-0">
            {Array.from({length: 5}).map((_, i) => {
                return (
                  <Card
                    className={`flex hover:bg-default-100 cursor-pointer border border-default-200 my-1 rounded-none px-3 py-1 `}
                    shadow="none"
                    key={i}
                  >
                    <div
                      className="w-full h-full"
                    >
                      <CardBody className="px-5 pb-1 pt-0">
                        <div className="text flex justify-between">
                          <Card radius='none' className="text space-y-1">
                            <Skeleton className="text-lg">lorem ipsum</Skeleton>
                            <Skeleton className={`text-green-600`}>gain</Skeleton>
                          </Card>
                          <div className="flex items-center justify-end">
                            <AvatarGroup isBordered max={3} size="sm">
                              {Array.from({length: 3}).map((_, index) => (
                                <Skeleton key={index} className="rounded-full" >
                                    <Avatar key={index} src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                                </Skeleton>
                              ))}
                            </AvatarGroup>
                          </div>
                        </div>
                      </CardBody>
                    </div>
                  </Card>
                );
              })}
          </CardBody>
        </Tab>
      </Tabs>
    </Card>
    <Card className="mt-5 ">
      <CardBody>
        <div className="text-center py-5 space-y-1">
          <Skeleton className="text-gray-300">Wallet Balance</Skeleton>
          <Skeleton className="text-green-600 font-semibold text-4xl">This is the balance</Skeleton>
        </div>
      </CardBody>
    </Card>
  </div>
  )
}

export default DashboardSidebarSkeleton