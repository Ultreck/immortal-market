import { formatCurrency } from '@/lib/helper';
import { useState, useEffect } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  //   CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const generateRandomPrice = (prevPrice) => {
  const change = (Math.random() - 0.5) * 100;
  return Math.max(100, prevPrice + change);
};

const MovingChart = ({ isTrading, timeTab, setIsTrading }) => {
  const [data, setData] = useState(
    Array.from({ length: 1 }, (_, i) => ({
      name: `${i.toString()}s`,
      price: 300 + Math.random() * 100,
    }))
  );
  
  
  useEffect(() => {
    console.log(data);
    const interval = setInterval(() => {
      isTrading &&
      setData((prevData) => {
        const lastPrice = prevData[prevData.length - 1].price;
        const lastName = prevData[prevData.length - 1].name;
        if(timeTab === lastName){
          setIsTrading(false);
        }
        // console.log(lastName);
          const newPoint = {
            name: `${(parseInt(prevData[prevData.length - 1].name) + 1).toString()}s`,
            price: generateRandomPrice(lastPrice),
          };
          return [...prevData, newPoint];
        });
    }, 1000);

    return () => clearInterval(interval);
  }, [isTrading]);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-lg border border-gray-300 bg-white p-3 shadow-md">
          <p className="text-sm text-gray-500">Time {payload[0].payload.name}</p>
          <p className="font-bold text-green-500">
            <span className="text-gray-600">Volume</span> 💰 {formatCurrency(payload[0].payload.price)}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data} margin={{ top: 10, right: 5, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#28a745" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#28a745" stopOpacity={0} />
          </linearGradient>
        </defs>
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="name" />
        <YAxis domain={['auto', 'auto']} />
        <Tooltip content={<CustomTooltip />} />
        <Area type="monotone" dataKey="price" stroke="#28a745" fillOpacity={1} fill="url(#priceGradient)" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default MovingChart;
