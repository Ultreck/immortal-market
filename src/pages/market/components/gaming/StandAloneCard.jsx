import ChartRadian from './ChartRadian';
import PredictionButton from './PredictionButton';
// import imgAc from '@/assets/images/accessbank.png';
import { Avatar } from '@heroui/react';

const StandAloneCard = () => {
  return (
    <div className="text w-full">
      <div className="mt-10 border-2 p-8 dark:border-gray-500">
        <div className="text flex items-center space-x-2">
          {/*<Image src={imgAc} alt="accesssbank" width={30} height={30} /> TODO: fix image*/}
          <p className="text-xl">Access bank</p>
        </div>
        <div className="text grid grid-cols-2">
          <div className="">
            <div className="text mt-16 text-xl">When will Access bank reach N34.5?</div>
            <div className="text mt-10">
              <div className="text space-y-5">
                <div className="flex w-full items-center justify-between">
                  <div className="text-lg">JUNE 24 2025</div>
                  <div className="text flex space-x-0.5">
                    <PredictionButton type="yes" text="Yes" />
                    <PredictionButton type="no" text="No" />
                  </div>
                </div>
                <div className="flex w-full items-center justify-between">
                  <div className="text-lg">MAY 13 2025</div>
                  <div className="text flex space-x-0.5">
                    <PredictionButton type="yes" text="Yes" />
                    <PredictionButton type="no" text="No" />
                  </div>
                </div>
                <div className="flex w-full items-center justify-between">
                  <div className="text-lg">NEVER</div>
                  <div className="text flex space-x-0.5">
                    <PredictionButton type="yes" text="Yes" />
                    <PredictionButton type="no" text="No" />
                  </div>
                </div>
              </div>
              <div className="text space-y-2"></div>
            </div>
          </div>
          <ChartRadian />
        </div>
        <div className="flex items-center gap-3">
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
        </div>
      </div>
    </div>
  );
};

export default StandAloneCard;
