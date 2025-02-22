import { Card } from '@heroui/react';
import CountryFlag from '@/components/ui/CountryFlag.jsx';
import countries from '@/lib/countries.js';
import PropTypes from 'prop-types';

const code = 'NG';

const VirtualStockSocket = ({ stock }) => {
  const country = [...countries.africa, ...countries.global].find((c) => c.code === code);

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
    </div>
  );
};

VirtualStockSocket.propTypes = {
  stock: PropTypes.object.isRequired,
};

export default VirtualStockSocket;
