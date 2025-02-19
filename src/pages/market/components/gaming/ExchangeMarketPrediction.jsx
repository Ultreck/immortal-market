import useMarketHook from '@/hooks/useMarketHook';
import PredictionButton from './PredictionButton';
// import { useTernaryDarkMode } from 'usehooks-ts';

const betData = [
  {name:"NGX ASI", quantity: "2", value1: 4.7, value2: 1.3, value3: 15.3, value4: 2.5, value5: 4.8, value6: 6.7, profit: 12},
  {name:"NASDAQ", quantity: "1", value1: 2.1, value2: 5.1, value3: 8.2, value4: 4.6, value5: 1.5, value6: 7.3, profit: 27},
  {name:"DAX", quantity: "4", value1: 3.5, value2: 1.2, value3: 10.3, value4: 2.7, value5: 3.6, value6: 1.7, profit: 82},
  {name:"NGX ASI", quantity: "3", value1: 1.3, value2: 5.3, value3: 5.8, value4: 3.5, value5: 1.9, value6: 8.6, profit: 65},
  {name:"NASDAQ", quantity: "5", value1: 2.5, value2: 7.1, value3: 8.3, value4: 1.7, value5: 5.2, value6: 3.2, profit: 51},
  ];
const ExchangeMarketPrediction = () => {
  const {handleSelectedExchange} = useMarketHook();
  return (
    <div className={`mt-5 w-full border-2 rounded-lg px-5 py-5 dark:border-default-200`}>
      <div className="text">
        <div className="text">
          <div className="text-center grid grid-cols-12 gap-1">
            <div className="text col-span-2"></div>
            <div className="text col-span-1"></div>
            <div className="text col-span-4">3 Way</div>
            <div className="text col-span-4">Over/Under</div>
            <div className="text col-span-1"></div>
          </div>
          <div className="text-center mt-2 grid grid-cols-12 gap-1">
            <div className="text-start col-span-2">Exchange</div>
            <div className="text col-span-1"></div>
            <div className="dark:text-gray-400 grid bg-gray-200 dark:bg-gray-600 grid-cols-3 col-span-4">
              <div className="text">1</div>
              <div className="text">X</div>
              <div className="text">2</div>
            </div>
            <div className="dark:text-gray-400 grid bg-gray-200 dark:bg-gray-600 grid-cols-3 col-span-4">
              <div className="text">Goals</div>
              <div className="text">Over</div>
              <div className="text">Under</div>
            </div>
            <div className="text col-span-1"></div>
          </div>
          <div className="text mt-3">
            {betData.map((value, index) => (
              <div key={index} className="text-center grid grid-cols-12">
                <div className="text-start col-span-2 my-1">{value?.name}</div>
                <div className="text col-span-1 my-1">{value?.quantity}</div>
                <div className="text-gray-400 grid grid-cols-3 col-span-4 px-[1px]">
                  <PredictionButton onClick={() =>handleSelectedExchange(value.value1)} text={value?.value1} className={'rounded-tl-lg rounded-bl-lg my-1'} />
                  <PredictionButton onClick={() =>handleSelectedExchange(value.value2)} text={value?.value2} className={'my-1'} />
                  <PredictionButton onClick={() =>handleSelectedExchange(value.value3)} text={value?.value3} className={'rounded-tr-lg my-1 rounded-br-lg'} />
                </div>
                <div className="text-gray-400 grid grid-cols-3 col-span-4 px-[1px]">
                  <PredictionButton onClick={() =>handleSelectedExchange(value.value4)} text={value?.value4} className={'rounded-tl-lg my-1 rounded-bl-lg'} />
                  <PredictionButton onClick={() =>handleSelectedExchange(value.value5)} text={value?.value5} className={'my-1'} />
                  <PredictionButton onClick={() =>handleSelectedExchange(value.value6)} text={value?.value6} className={'rounded-tr-lg my-1 rounded-br-lg'} />
                </div>
                <div className="text col-span-1">{value?.profit}+</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExchangeMarketPrediction;
