import PredictionButton from './PredictionButton';
// import imgNg from '@/assets/images/ng.png';

const dummyData = [
  { name: 'Tesla', flag: false },
  { name: 'UBA', flag: true },
  { name: 'FCMB', flag: true },
  { name: 'NGX ASI', flag: true },
  { name: 'NASDAQ', flag: false },
];

const EquityMarketPrediction = () => {
  return (
    <div className="mt-5 w-full border-2 p-5 dark:border-gray-500">
      <div className="text-xl">Equities</div>
      <div className="text">
        {dummyData.map((value, index) => (
          <div className="text flex items-center justify-between space-y-2" key={index}>
            <div className="text">{value.name}</div>
            <div className="text flex items-center space-x-0.5">
              {value.flag && (
                <div className="text px-2">
                  {/*<Image src={imgNg} className="" layout="reponsive" width={30} height={30} alt="flag" /> TODO: fix image*/}
                </div>
              )}
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

export default EquityMarketPrediction;
