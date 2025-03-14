import React from 'react';
import { Card, Skeleton } from '@heroui/react';

const MessageSkeleton = () => {
  return (
    <Card className="mx-5 space-y-5 p-4  bg-transparent border-0 shadow-none" radius="lg">
      
        <div  className="space-y-3 flex justify-end">
        <div className="text space-y-3 w-2/3 relative h-12">
          <Skeleton className="w-2/5 absolute right-2 rounded-lg">
            <div className="h-4 w-2/5 rounded-lg bg-default-300" />
          </Skeleton>
          <Skeleton className="w-4/5 rounded-lg absolute right-2 bottom-0">
            <div className="h-4 w-4/5 rounded-lg bg-default-200" />
          </Skeleton>
        </div>
        </div>
        <div  className="space-y-4">
          <div className="text space-y-4  w-2/3">
          <Skeleton className="w-2/5 rounded-lg">
            <div className="h-4 w-2/5 rounded-lg bg-default-300" />
          </Skeleton>
          <Skeleton className="w-4/5 rounded-lg">
            <div className="h-4 w-4/5 rounded-lg bg-default-200" />
          </Skeleton>
          </div>
        </div>
        <div  className="space-y-3 flex justify-end">
        <div className="text space-y-3 w-2/3 relative h-12">
          <Skeleton className="w-2/5 absolute right-2 rounded-lg">
            <div className="h-4 w-2/5 rounded-lg bg-default-300" />
          </Skeleton>
          <Skeleton className="w-4/5 rounded-lg absolute right-2 bottom-0">
            <div className="h-4 w-4/5 rounded-lg bg-default-200" />
          </Skeleton>
        </div>
        </div>
    </Card>
  );
};

export default MessageSkeleton;
