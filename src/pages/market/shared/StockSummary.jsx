import { Card } from '@heroui/react';

const StockSummary = () => {
  return (
    <Card className="card-shadow px-10 py-8">
      <div className="mb-8 flex items-center space-x-3">
        <h3 className="text-lg font-semibold">Summary</h3>
      </div>
      <div className="space-y-10 mb-2">
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-primary-700 dark:text-white">Bull Runs</span>
            <span className="text-sm font-medium text-primary-700 dark:text-white">45%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-primary-600 h-2.5 rounded-full w-[45%]"></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-primary-700 dark:text-white">Bear Runs</span>
            <span className="text-sm font-medium text-primary-700 dark:text-white">25%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-primary-600 h-2.5 rounded-full w-[25%]"></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-primary-700 dark:text-white">Severe Bull runs</span>
            <span className="text-sm font-medium text-primary-700 dark:text-white">88%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-primary-600 h-2.5 rounded-full w-[88%]"></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-primary-700 dark:text-white">Severe Bear runs</span>
            <span className="text-sm font-medium text-primary-700 dark:text-white">34%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-primary-600 h-2.5 rounded-full w-[34%]"></div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default StockSummary;
