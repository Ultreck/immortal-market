import { Avatar, Card, CardBody, CardHeader } from '@heroui/react';
// import CountryFlag from '@/components/ui/CountryFlag.jsx';
import countries from '@/lib/countries.js';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import TimeoutComponent from '@/hooks/use-timeOut';
import { useGetWalletBalance } from '@/api/ai-chat';
import { formatCurrency } from '@/lib/utils';

const code = 'NG';

const VirtualStockSocket = ({  endTime, shouldStart, startTime, startIn, setstartIn, setshouldStart, stockWinners }) => {
  const country = [...countries.africa, ...countries.global].find((c) => c.code === code);
    const { data: walletBalance } = useGetWalletBalance();
    let sumData = 0;
    if(stockWinners?.length){
      sumData = stockWinners?.reduce((acc, obj) => acc + obj?.totalInvestment, 0);
    }
    console.log(sumData);
    

  return (
    <div className="sticky top-20">
      <Card radius="none" className="rounded-2xl h-[300px]">
        <CardHeader className="sticky grid  top-0 px-7 pb-3 pt-6">
          <h1 className="text-3xl text-green-600">N45M</h1>
          <h3 className="text">Winnings</h3>
        </CardHeader>
        <CardBody className="px-4 pt-0 overflow-hidden grid grid-cols-2 gap-2">
          {stockWinners?.map((val, ind) => (
          <div key={ind} className="h-11 rounded-full flex pl-1 pr-5 justify-between items-center py-2 border border-default-400">
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
            <p className="text-lg font-bold text-green-600">{formatCurrency(val?.totalInvestment)}</p>
          </div>
          ))}
        </CardBody>
      </Card>
      <Card className='mt-5'>
        <CardBody>
          {!shouldStart ? 
          <div className="text">
            <TimeoutComponent
              text={'Session ends in:'}
              className="text-red-500"
              endTime={endTime}
              startTime={startTime}
              startIn={startIn}
              setstartIn={setstartIn}
              shouldStart={shouldStart}
              setshouldStart={setshouldStart}
            />
          </div>:
          <div className="text-center py-5">
            <p className="text-gray-300">Wallet Balance</p>
            <h2 className="text-green-600 font-semibold text-4xl">{formatCurrency(walletBalance?.balance)}</h2>
          </div>
          }
        </CardBody>
      </Card>
    </div>
  );
};

VirtualStockSocket.propTypes = {
  stock: PropTypes.object.isRequired,
};

export default VirtualStockSocket;
