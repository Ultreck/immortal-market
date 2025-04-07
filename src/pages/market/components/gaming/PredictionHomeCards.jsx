import PredictionButton from './PredictionButton';
import PropTypes from 'prop-types';
import ChartRadian from '@/pages/market/components/gaming/ChartRadian.jsx';
import { Card } from '@heroui/react';


const PredictionHomeCards = ({ name }) => {
  return (
    <Card className='shadow-none border dark:border-default-50'>
    <div className="text w-full h-full">
    <div className={`grid p-8 grid-cols-2`}>
      <div className="pl-6">
        <div className="text-xl text mt-16">Will {name} surpass N20b rev in 2025 Q2 alone</div>
        <div className="text mt-10">
          <div className="text space-y-5">
            <div className="flex justify-between items-center w-full">
              <div className="text-lg">Above N20b</div>
              <div className="text space-x-0.5 flex">
              <PredictionButton type="yes"  className="rounded-tl-lg rounded-bl-lg" text="Yes" />
              <PredictionButton type="no"  className="rounded-tr-lg rounded-br-lg" text="No" />
              </div>
            </div>
            <div className="flex justify-between items-center w-full">
              <div className="text-lg">Above N35b</div>
              <div className="text space-x-0.5 flex">
              <PredictionButton type="yes"  className="rounded-tl-lg rounded-bl-lg" text="Yes" />
              <PredictionButton type="no"  className="rounded-tr-lg rounded-br-lg" text="No" />
              </div>
            </div>
            <div className="flex justify-between items-center w-full">
              <div className="text-lg">Above N50b</div>
              <div className="text space-x-0.5 flex">
              <PredictionButton type="yes"  className="rounded-tl-lg rounded-bl-lg" text="Yes" />
              <PredictionButton type="no"  className="rounded-tr-lg rounded-br-lg" text="No" />
              </div>
            </div>
          </div>
          <div className="text space-y-2"></div>
        </div>
      </div>
      <div className="text flex justify-center place-items-center">
      <ChartRadian />
      </div>
    </div>
  </div>
    </Card>
  );
};

PredictionHomeCards.propTypes = {
  name: PropTypes.string.isRequired,
};

export default PredictionHomeCards;
