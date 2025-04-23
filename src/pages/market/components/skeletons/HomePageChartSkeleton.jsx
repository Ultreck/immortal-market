import { Avatar, Button, Card, Skeleton, Tooltip } from '@heroui/react'
import React from 'react'

const HomePageChartSkeleton = () => {
  return (
    <Card className="card-shadow px-10 my-10 py-2">
    <div className="space-y-2">
      <div className={`flex justify-between `}>
        <div className="flex w-full justify-between relative">
          <div className="w-full">
            <div className=" w-full flex justify-between items-center">
              <Skeleton className="text-2xl my-5">Trending Stocks</Skeleton>
            </div>
            <div className="flex items-center space-x-3 cursor-default">
              <div>
                <Tooltip placement="right">
                  <Skeleton className="text-md">lorem ipsum</Skeleton>
                </Tooltip>
                <Skeleton
                  className={`mt-2text-4xl my-3 font-bold`}
                >
                    Lorem ipsum
                </Skeleton>
              </div>
            </div>
          </div>
          <Skeleton className={` w-1/3 h-8 mt-3`}>
           lorem 
          </Skeleton>
          <Skeleton className={`absolute right-0 bottom-0`}>
            <Button
              className="bg-green-600 w-32 font-semibold"
              color=""
            >
              Explore
            </Button>
          </Skeleton>
        </div>
      </div>
        <div className={`text-green-600 ml-2 font-mono text-2xl `}>
        </div>
      <Skeleton className={`h-[350px] w-full`}>
      
      </Skeleton>
    </div>
  </Card>
  )
}

export default HomePageChartSkeleton