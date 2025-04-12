import { Avatar, Card, CardBody, CardHeader } from '@heroui/react';
// import CountryFlag from '@/components/ui/CountryFlag.jsx';
import countries from '@/lib/countries.js';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import TimeoutComponent from '@/hooks/use-timeOut';

const code = 'NG';

const VirtualStockSocket = ({ chartDatas, startIn, setstartIn, shouldStart, setshouldStart, endTime, setendTime }) => {
  // console.log(chartDatas?.startTime?.split('T')[1].split('.')[0]);

  // const [isClosed, setIsClosed] = useState(false);
  const country = [...countries.africa, ...countries.global].find((c) => c.code === code);

  const marketOpenTime = chartDatas?.startTime?.split('T')[1].split('.')[0];
  const marketCloseTime = chartDatas?.endTime?.split('T')[1].split('.')[0];

  const getTimeRemaining = () => {
    const now = new Date();
    const marketOpen = new Date(now.toDateString() + ' ' + marketOpenTime);
    const marketClose = new Date(now.toDateString() + ' ' + marketCloseTime);
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
    }
    const pad = (num) => String(num).padStart(2, '0');
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
    };
  }, []);

  return (
    <div className="sticky top-20">
      <Card radius="none" className="rounded-2xl h-[300px]">
        <CardHeader className="sticky grid  top-0 px-7 pb-3 pt-6">
          <h1 className="text-3xl text-green-600">N45M</h1>
          <h3 className="text">Winnings</h3>
        </CardHeader>
        <CardBody className="px-4 pt-0 overflow-hidden grid grid-cols-2 gap-2">
          <div className="h-11 rounded-full flex pl-1 pr-5 justify-between items-center py-2 border border-default-400">
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
            <p className="text-lg font-bold text-green-600">N34.33</p>
          </div>
          <div className="h-11 rounded-full flex pl-1 pr-5 justify-between items-center py-2 border border-default-400">
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
            <p className="text-lg font-bold text-red-600">N34.33</p>
          </div>
          <div className="h-11 rounded-full flex pl-1 pr-5 justify-between items-center py-2 border border-default-400">
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
            <p className="text-lg font-bold text-green-600">N34.33</p>
          </div>
          <div className="h-11 rounded-full flex pl-1 pr-5 justify-between items-center py-2 border border-default-400">
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
            <p className="text-lg font-bold text-green-600">N34.33</p>
          </div>
          <div className="h-11 rounded-full flex pl-1 pr-5 justify-between items-center py-2 border border-default-400">
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
            <p className="text-lg font-bold text-green-600">N34.33</p>
          </div>
          <div className="h-11 rounded-full flex pl-1 pr-5 justify-between items-center py-2 border border-default-400">
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
            <p className="text-lg font-bold text-green-600">N34.33</p>
          </div>
          <div className="h-11 rounded-full flex pl-1 pr-5 justify-between items-center py-2 border border-default-400">
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
            <p className="text-lg font-bold text-green-600">N34.33</p>
          </div>
          <div className="h-11 rounded-full flex pl-1 pr-5 justify-between items-center py-2 border border-default-400">
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
            <p className="text-lg font-bold text-yellow-600">N34.33</p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

VirtualStockSocket.propTypes = {
  stock: PropTypes.object.isRequired,
};

export default VirtualStockSocket;
