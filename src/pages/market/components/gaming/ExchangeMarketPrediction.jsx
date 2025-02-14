import PredictionButton from './PredictionButton';
import { useTernaryDarkMode } from 'usehooks-ts';

const dummyData = ['NGX ASI', 'NASDAQ', 'DAX', 'NGX ASI', 'NASDAQ'];

const ExchangeMarketPrediction = () => {
  const { isDarkMode } = useTernaryDarkMode();

  return (
    <div className={`mt-5 w-full border-2 p-5 ${isDarkMode ? 'border-gray-500' : ''}`}>
      <div className="text-xl">Exchange</div>
      <div className="text">
        {dummyData.map((value, index) => (
          <div className="text flex items-center justify-between space-y-2" key={index}>
            <div className="text">{value}</div>
            <div className="text flex items-center space-x-0.5">
              <PredictionButton type="yes" text="Yes" className={'border-green-500 hover:bg-green-500'} />
              <PredictionButton type="no" text="No" className={'rounded-none'} />
              <PredictionButton type="neu" text="Neutral" className={'rounded-none'} />
              <PredictionButton type="yes" text="Yes" className={'rounded-none border-green-500 hover:bg-green-500'} />
              <PredictionButton
                type="yes"
                text="Yes"
                className={'rounded-bl rounded-br-lg rounded-tl-none rounded-tr-lg border-green-500 hover:bg-green-500'}
              />
              <div className="text px-2">23+</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExchangeMarketPrediction;
