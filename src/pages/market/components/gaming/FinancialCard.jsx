import useMarketHook from '@/hooks/useMarketHook';
import PredictionButton from './PredictionButton';
import PropTypes from 'prop-types';

const FinancialCard = ({ item }) => {  
  const {handleSelectedBet} = useMarketHook();
  return (
    <div className="w-full border rounded-lg h-full dark:border-default-200">
      <div className="p-3">
        <div className="text-base flex items-center space-x-2 py-3 ">
          <img src={item.url} alt="Bank logos" className="w-[40px] h-[40px] object-contain" />
          <div className="text-2xl">{item.name}</div>
        </div>
        <div className="">
          <div className="text-xl text my-5 pb-3">Will {item.name} surpass N20b rev in 2025 Q2 alone</div>
          <div className="text">
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
      </div>
    </div>
  );
};

FinancialCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FinancialCard;
