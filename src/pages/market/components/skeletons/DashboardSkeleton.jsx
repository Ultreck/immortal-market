import { Avatar, AvatarGroup, Card, Skeleton } from '@heroui/react';
import React from 'react';

const DashboardSkeleton = () => {
  return (
    <Card className="mb-6 w-full overflow-visible rounded-2xl border px-6 py-6 pb-8 shadow dark:border-0 dark:shadow-none md:px-8">
      <div className="mb-6 flex justify-between items-center space-x-3 px-1 text-lg font-semibold">
        <Skeleton className="text-2xl font-bold">Market Summary</Skeleton>
        <Skeleton className="text w-8 h-8 bg-red-500 rounded-full"></Skeleton>
      </div>
      <div className="grid grid-cols-3 gap-x-4 gap-y-10">
        <Card className="flex px-6 py-4 border border-default-200 dark:border-default-100 mb-5" shadow="none">
          <Skeleton>
            <div className="flex items-center space-x-2">
              <p className="text-[1.3rem] py-3 font-semibold text-green-600"></p>
            </div>
            <p className="opacity-70">Gainers</p>
          </Skeleton>
        </Card>
        <Card className="flex px-6 py-4 border border-default-200 dark:border-default-100 mb-5" shadow="none">
          <Skeleton>
            <div className="flex items-center space-x-2">
              <div className="overflow-hidden h-7">
              </div>
            </div>
            <p className="opacity-70">Top 5 companies</p>
          </Skeleton>
        </Card>
        <Card className="flex px-6 py-4 border border-default-200 dark:border-default-100 mb-5" shadow="none">
          <Skeleton className="text gap-3">
            <div className="flex items-center mt-3">
              <AvatarGroup isBordered max={3} size="sm">
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
              </AvatarGroup>
            </div>
            <p className="opacity-70">Active traders</p>
          </Skeleton>
        </Card>
        <Card className="flex px-6 py-4 border border-default-200 dark:border-default-100 mb-5" shadow="none">
          <Skeleton>
            <div className="flex items-center space-x-2">
              <p className="text-[1.3rem] py-3 font-semibold text-green-600">
              </p>
            </div>
            <p className="opacity-70">Total Trades</p>
          </Skeleton>
        </Card>{' '}
        <Card className="flex px-6 py-4 border border-default-200 dark:border-default-100 mb-5" shadow="none">
          <Skeleton>
            <div className="flex items-center space-x-2">
                
              <p
                className={`text-[1.3rem] py-3 font-semibold `}
              >
              </p>
            </div>
            <p className="opacity-70">Trade Profit</p>
          </Skeleton>
        </Card>
        <Card className="px-6 py-4 border border-default-200 dark:border-default-100 mb-5" shadow="none">
          <Skeleton>
            <div className="flex items-center space-x-2">
              <p
                className={`text-[1.3rem] py-3 font-semibold `}
              >
              </p>
            </div>
            <p className="opacity-70">Average Price</p>
          </Skeleton>
        </Card>
      </div>
    </Card>
  );
};

export default DashboardSkeleton;
