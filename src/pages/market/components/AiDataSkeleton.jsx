import React from 'react';
import {Card, Skeleton} from "@heroui/react";

const AiDataSkeleton = () => {
  return (
    <Card className="mx-5 space-y-5 p-4 grid grid-cols-3 bg-transparent border-0 shadow-none" radius="lg">
      <Skeleton className="rounded-full w-12 h-12">
        <div className="h-24 rounded-lg bg-default-300" />
      </Skeleton>
      <div className="space-y-3 col-span-2">
        <Skeleton className="w-2/5 rounded-lg">
          <div className="h-3 w-2/5 rounded-lg bg-default-300" />
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-3 w-4/5 rounded-lg bg-default-200" />
        </Skeleton>
      </div>
    </Card>
  );
};
// C:\$Clan\immortal-app\src\pages\market\components\AiDataSkeleton.jsx
export default AiDataSkeleton;
