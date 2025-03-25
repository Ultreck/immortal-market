import { Card, ScrollShadow } from '@heroui/react';
import CountryFlag from '@/components/ui/CountryFlag.jsx';
import countries from '@/lib/countries.js';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const code = 'NG';

const VirtualStockSocket = ({ stockOrders, stock }) => {
  const [isClosed, setIsClosed] = useState(false);
  const country = [...countries.africa, ...countries.global].find((c) => c.code === code);
  
  const marketOpenTime =  "09:30:00";
  const marketCloseTime =  "14:10:00";
  
  const getTimeRemaining = () => {
    const now = new Date();
    const marketOpen = new Date(now.toDateString() + " " + marketOpenTime);
    const marketClose = new Date(now.toDateString() + " " + marketCloseTime);
    let targetTime;
    let status;
    let isOpen;
    
    if (now < marketOpen) {
      targetTime = marketOpen;
      status = 'Market opens in: ';
      isOpen = false;
    } else if (now < marketClose) {
      targetTime = marketClose;
      status = 'Market Closes in: ';
      isOpen = true;
    } else {
      targetTime = new Date(marketOpen);
      targetTime.setDate(targetTime.getDate() + 1);
      status = 'Market opens in: ';
      isOpen = false;
    };
    const pad = (num) => String(num).padStart(2, "0");
    let diff = targetTime - now;    
    return {
      status,
      isOpen,
      hours: pad(Math.floor((diff / (1000 * 60 * 60)) % 24)),
      minutes: pad(Math.floor((diff / (1000 * 60)) % 60)),
      seconds: pad(Math.floor((diff / 1000) % 60)),
    };
  };
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);
  
    return () => {
      clearInterval(timer);
    }
  }, []);
  
  

  return (
    <div className="flex flex-col px-8 py-4 h-screen w-[400px] overflow-y-auto border-l border-default-200/50 dark:border-default-50 bg-default-50">
      <div className="flex items-center space-x-4">
        <p className="font-semibold">{stock.name}</p>
        <div className="flex w-max items-center rounded-2xl bg-default-100 px-3 py-1.5">
          <div className="flex items-center space-x-3">
            <CountryFlag code={country.code} className="h-5 w-5" />
            <span>{stock.exchange}</span>
          </div>
        </div>
      </div>
      <ScrollShadow className="w-full h-[480px]" size={20}>
        {stockOrders.length > 0 && (
          <Card className="card-shadow px-6 py-4 bg-default-100 border border-default-200 mt-6">
            <p className="text-2xl font-bold text-green-600">N34.33</p>
            <div className="flex justify-between items-center mt-1">
              <p className="text-sm opacity-70">22,000 units</p>
              <div className="text-xs">10:02:00 am</div>
            </div>
          </Card>
        )}
        <Card className="card-shadow px-6 py-4 bg-default-100 border border-default-200 mt-6">
          <p className="text-2xl font-bold text-green-600">N34.33</p>
          <div className="flex justify-between items-center mt-1">
            <p className="text-sm opacity-70">22,000 units</p>
            <div className="text-xs">10:02:00 am</div>
          </div>
        </Card>
        <Card className="card-shadow px-6 py-4 bg-default-100 border border-default-200 mt-4">
          <p className="text-2xl font-bold text-green-600">N34.33</p>
          <div className="flex justify-between items-center mt-1">
            <p className="text-sm opacity-70">22,000 units</p>
            <div className="text-xs">10:02:00 am</div>
          </div>
        </Card>
        <Card className="card-shadow px-6 py-4 bg-default-100 border border-default-200 mt-4">
          <p className="text-2xl font-bold text-red-600">N34.33</p>
          <div className="flex justify-between items-center mt-1">
            <p className="text-sm opacity-70">22,000 units</p>
            <div className="text-xs">10:02:00 am</div>
          </div>
        </Card>
        <Card className="card-shadow px-6 py-4 bg-default-100 border border-default-200 mt-4">
          <p className="text-2xl font-bold text-yellow-300 dark:text-yellow-100">N34.33</p>
          <div className="flex justify-between items-center mt-1">
            <p className="text-sm opacity-70">22,000 units</p>
            <div className="text-xs">10:02:00 am</div>
          </div>
        </Card>
        <Card className="card-shadow px-6 py-4 bg-default-100 border border-default-200 mt-4">
          <p className="text-2xl font-bold text-red-600">N34.33</p>
          <div className="flex justify-between items-center mt-1">
            <p className="text-sm opacity-70">22,000 units</p>
            <div className="text-xs">10:02:00 am</div>
          </div>
        </Card>
        <Card className="card-shadow px-6 py-4 bg-default-100 border border-default-200 mt-4">
          <p className="text-2xl font-bold text-yellow-300 dark:text-yellow-100">N34.33</p>
          <div className="flex justify-between items-center mt-1">
            <p className="text-sm opacity-70">22,000 units</p>
            <div className="text-xs">10:02:00 am</div>
          </div>
        </Card>
      </ScrollShadow>
      <Card className="card-shadow px-6 py-4 bg-default-100 border border-default-200 mt-5">
        {!timeRemaining?.isOpen? (
          <>
        <p className="text-base text-center font-semibold">Market opens in: </p>
        <div className="grid grid-cols-3 mt-1">
          <div className="mr-2 ">
            <div className="text-green-600 bg-green-200/5 text-5xl p-5 rounded-tl-lg rounded-bl-lg">{timeRemaining?.hours}</div>
            <div className="text-gray-500 text-center">Hours</div>
          </div>
          <div className="mr-2">
            <div className="text-green-600 bg-green-200/5 text-5xl p-5">{timeRemaining?.minutes}</div>
            <div className="text-gray-500 text-center">Minutes</div>
          </div>
          <div className="mr-2">
            <div className="text-green-600 bg-green-200/5 text-5xl p-5 rounded-tr-lg rounded-br-lg">{timeRemaining?.seconds}</div>
            <div className="text-gray-500 text-center">Seconds</div>
          </div>
        </div>
          </>
        ) : (
          <>
        <p className="text-base text-center font-semibold">Market closes in: </p>
        <div className="grid grid-cols-3 mt-1">
          <div className="mr-2 ">
            <div className="text-red-600 bg-red-200/5 text-5xl p-5 rounded-tl-lg rounded-bl-lg">{timeRemaining?.hours}</div>
            <div className="text-gray-500 text-center">Hours</div>
          </div>
          <div className="mr-2">
            <div className="text-red-600 bg-red-200/5 text-5xl p-5">{timeRemaining?.minutes}</div>
            <div className="text-gray-500 text-center">Minutes</div>
          </div>
          <div className="mr-2">
            <div className="text-red-600 bg-red-200/5 text-5xl p-5 rounded-tr-lg rounded-br-lg">{timeRemaining?.seconds}</div>
            <div className="text-gray-500 text-center">Seconds</div>
          </div>
        </div>
          </>
        )}
      </Card>
    </div>
  );
};

VirtualStockSocket.propTypes = {
  stock: PropTypes.object.isRequired,
};

export default VirtualStockSocket;
