import { Avatar, Card, CardBody, CardHeader } from '@heroui/react';
// import CountryFlag from '@/components/ui/CountryFlag.jsx';
import countries from '@/lib/countries.js';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import TimeoutComponent from '@/hooks/use-timeOut';

const code = 'NG';

const VirtualStockSocket = ({  endTime, shouldStart, startTime, startIn, setstartIn, setshouldStart }) => {
  const country = [...countries.africa, ...countries.global].find((c) => c.code === code);

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
      <Card>
        <CardBody>
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
