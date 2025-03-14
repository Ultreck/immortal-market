import { Button, Card, useDisclosure } from '@heroui/react';
import { generateRandomPercentage } from '@/lib/utils.js';
import StockDetailsModal from '@/pages/market/StockDetailsModal.jsx';

const data = [
  {
    name: 'Price',
    data: [
      { title: 'Big Gainers', percentage: generateRandomPercentage() },
      { title: 'Big Losers', percentage: generateRandomPercentage() },
      { title: 'Gainers', percentage: generateRandomPercentage() },
      { title: 'Losers', percentage: generateRandomPercentage() },
    ],
  },
  {
    name: 'On the Move',
    data: [
      { title: 'On a bulls', percentage: generateRandomPercentage() },
      { title: 'On a bears', percentage: generateRandomPercentage() },
      { title: 'Peaking Bulls', percentage: generateRandomPercentage() },
      { title: 'Peaking Bears', percentage: generateRandomPercentage() },
      { title: 'Severe Bulls', percentage: generateRandomPercentage() },
      { title: 'Severe Bears', percentage: generateRandomPercentage() },
      { title: 'Zombie run', percentage: generateRandomPercentage() },
    ],
  },
  {
    name: 'Abnormal',
    data: [
      { title: 'Abnormal volume', percentage: generateRandomPercentage() },
      { title: 'Abnormal Price spike', percentage: generateRandomPercentage() },
      { title: 'Abnormal vol trend', percentage: generateRandomPercentage() },
      { title: '3x vol avg', percentage: generateRandomPercentage() },
      { title: '10x vol avg', percentage: generateRandomPercentage() },
    ],
  },
  {
    name: 'Reaching Levels',
    data: [
      { title: 'Close to support', percentage: generateRandomPercentage() },
      { title: 'Close to resistance', percentage: generateRandomPercentage() },
      { title: 'Broken resistance', percentage: generateRandomPercentage() },
      { title: 'Smashed support', percentage: generateRandomPercentage() },
      { title: 'All time low', percentage: generateRandomPercentage() },
      { title: 'All time high', percentage: generateRandomPercentage() },
    ],
  },
  {
    name: 'Big Companies',
    data: [{ title: 'large Cap', percentage: generateRandomPercentage() }],
  },
  {
    name: 'Activity',
    data: [
      { title: 'Too little to trade', percentage: generateRandomPercentage() },
      { title: 'Good Volume', percentage: generateRandomPercentage() },
    ],
  },
  {
    name: 'Market Actions',
    data: [
      { title: 'Dividend', percentage: generateRandomPercentage() },
      { title: 'Releasing this month', percentage: generateRandomPercentage() },
      { title: 'Releasing this week', percentage: generateRandomPercentage() },
      { title: 'Just released', percentage: generateRandomPercentage() },
      { title: 'Good Dividend yield%', percentage: generateRandomPercentage() },
    ],
  },
  {
    name: 'Financials',
    data: [
      { title: 'Good Price to Book', percentage: generateRandomPercentage() },
      { title: 'Good EPS', percentage: generateRandomPercentage() },
      { title: 'Good EV to Ebitda', percentage: generateRandomPercentage() },
      { title: 'Good earnings yield', percentage: generateRandomPercentage() },
      { title: 'Best asset', percentage: generateRandomPercentage() },
      { title: 'Defying their financials', percentage: generateRandomPercentage() },
      { title: 'Defying good/bad news', percentage: generateRandomPercentage() },
      { title: 'About to pay div', percentage: generateRandomPercentage() },
      { title: 'About to release financials', percentage: generateRandomPercentage() },
      { title: 'Insider buyings', percentage: generateRandomPercentage() },
    ],
  },
];

const StockSummary = () => {
  const { isOpen: isDetailsOpen, onOpen: onDetailsOpen, onClose: onDetailsClose } = useDisclosure();

  return (
    <>
      {data.map((d, i) => (
        <Card className="card-shadow px-10 py-8" key={i}>
          <div>
            <div className="mb-8 flex items-center space-x-3">
              <h3 className="text-lg font-semibold">{d.name}</h3>
            </div>
            <div className="space-y-10 mb-2">
              {d.data.map((data, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between mb-1">
                    <span className="text-base font-medium text-primary-700 dark:text-white">{data.title}</span>
                    <span className="text-sm font-medium text-primary-700 dark:text-white">{data.percentage}%</span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 group-hover:hidden">
                    <div className="bg-primary-600 h-2.5 rounded-full" style={{ width: `${data.percentage}%` }}></div>
                  </div>

                  <div className="hidden group-hover:flex space-x-2 mt-2">
                    <Button
                      radius="full"
                      onPress={onDetailsOpen}
                      className="w-min cursor-pointer transition-all duration-300 hover:bg-primary-200 hover:px-3 hover:py-1"
                    >
                      TESLA
                    </Button>
                    <Button
                      radius="full"
                      onPress={onDetailsOpen}
                      className="w-min cursor-pointer transition-all duration-300 hover:bg-primary-200 hover:px-3 hover:py-1"
                    >
                      ACCESS
                    </Button>
                    <Button
                      onPress={onDetailsOpen}
                      radius="full"
                      className="w-min cursor-pointer transition-all duration-300 hover:bg-primary-200 hover:px-3 hover:py-1"
                    >
                      ZENITH
                    </Button>
                    <Button
                      radius="full"
                      className="w-min cursor-pointer transition-all duration-300 hover:bg-primary-200 hover:px-3 hover:py-1"
                    >
                      More
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      ))}

      <StockDetailsModal isOpen={isDetailsOpen} onClose={onDetailsClose} id={'665867a2c6a35aab6119fea1'} />
    </>
  );
};

export default StockSummary;
