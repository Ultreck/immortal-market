import PredictionButton from './PredictionButton';
import PropTypes from 'prop-types';

const FinancialCard = ({ item }) => {
  return (
    <div className="w-full border-2 h-full dark:border-gray-500">
      <div className="p-8">
        <div className="text flex items-center space-x-2 py-3 ">
          <img src={item.url.src} alt="Bank logos" className="w-[30px] h-[30px] object-contain" />
          <div className="text-2xl">{item.name}</div>
        </div>
        <div className="">
          <div className="text-xl text my-5 pb-3">Will {item.name} surpass N20b rev in 2025 Q2 alone</div>
          <div className="text">
            <div className="text space-y-5">
              <div className="flex justify-between items-center w-full">
                <div className="text-lg">Above N20b</div>
                <div className="text space-x-0.5 flex">
                  <PredictionButton type="yes" text="Yes" />
                  <PredictionButton type="no" text="No" />
                </div>
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="text-lg">Above N35b</div>
                <div className="text space-x-0.5 flex">
                  <PredictionButton type="yes" text="Yes" />
                  <PredictionButton type="no" text="No" />
                </div>
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="text-lg">Above N50b</div>
                <div className="text space-x-0.5 flex">
                  <PredictionButton type="yes" text="Yes" />
                  <PredictionButton type="no" text="No" />
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
