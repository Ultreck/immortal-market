import ChartRadian from './ChartRadian';
import PredictionButton from './PredictionButton';
import { Avatar, Card } from '@heroui/react';

const StandAloneCard = ({icon = true}) => {
  return (
    <Card className='container mx-auto shadow-none border dark:border-default-50'>
      <div className="text w-full">
        <div className="my-6 p-3 border border-default-200 rounded-lg">
          {icon && 
          <div className="text flex items-center space-x-2 ">
            <img src="/images/accessbank.png" alt="" className="text w-[60px] h-[60px] " />
            <p className="text-2xl">Access bank</p>
          </div>
          }
          <div className="text grid grid-cols-2">
            <div className="p-5">
              <div className="text mt-7 text-xl">When will Access bank reach N34.5?</div>
              <div className="text mt-7">
                <div className="text space-y-5">
                  <div className="flex w-full items-center justify-between">
                    <div className="text-lg">JUNE 24 2025</div>
                    <div className="text flex space-x-0.5">
                    <PredictionButton type="yes"  className="rounded-tl-lg rounded-bl-lg" text="Yes" />
                    <PredictionButton type="no"  className="rounded-tr-lg rounded-br-lg" text="No" />
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <div className="text-lg">MAY 13 2025</div>
                    <div className="text flex space-x-0.5">
                    <PredictionButton type="yes"  className="rounded-tl-lg rounded-bl-lg" text="Yes" />
                    <PredictionButton type="no"  className="rounded-tr-lg rounded-br-lg" text="No" />
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <div className="text-lg">NEVER</div>
                    <div className="text flex space-x-0.5">
                    <PredictionButton type="yes"  className="rounded-tl-lg rounded-bl-lg" text="Yes" />
                    <PredictionButton type="no"  className="rounded-tr-lg rounded-br-lg" text="No" />
                    </div>
                  </div>
                </div>
                <div className="text space-y-2"></div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <ChartRadian />
            </div>
          </div>
          <div className="flex items-center gap-3 justify-end">
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default StandAloneCard;
