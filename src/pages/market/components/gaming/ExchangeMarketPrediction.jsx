import PredictionButton from './PredictionButton';
import { useTernaryDarkMode } from 'usehooks-ts';

const dummyData = ['NGX ASI', 'NASDAQ', 'DAX', 'NGX ASI', 'NASDAQ'];

const ExchangeMarketPrediction = () => {
  return (
    <div className={`mt-5 w-full border-2 rounded-lg px-10 py-5 dark:border-default-200`}>
      <div className="text-text flex items-center justify-between space-y-2">
        <div className="text">Exchange</div>
        <div className="grid grid-cols-2 mr-16 space-x-3">
          <div className="flex items-center h-full space-x-28">
            <h1 className="text">1</h1>
            <h1 className="text">X</h1>
            <h1 className="text">2</h1>
          </div>
          <div className="flex items-center h-full space-x-20">
            <span className="text">Goals</span>
            <span className="text">Over</span>
            <span className="text">Under</span>
          </div>
        </div>
      </div>
      <div className="text">
        {dummyData.map((value, index) => (
          <div className="text flex items-center justify-between space-y-2" key={index}>
            <div className="text">{value}</div>
            <div className="text flex items-center space-x-5">
              <div className="text flex items-center space-x-0.5">
              <PredictionButton text="2.5" className={'rounded-tl-lg rounded-bl-lg'} />
              <PredictionButton text="2.5" className={''} />
              <PredictionButton text="2.5" className={'rounded-tr-lg rounded-br-lg'} />
              </div>
              <div className="text flex items-center space-x-0.5">
              <PredictionButton text="2.5" className={'rounded-tl-lg rounded-bl-lg'} />
              <PredictionButton text="2.5" className={''}/>
              <PredictionButton text="2.5" className={'rounded-tr-lg rounded-br-lg'}/>
              </div>
              <div className="text px-2">23+</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExchangeMarketPrediction;
