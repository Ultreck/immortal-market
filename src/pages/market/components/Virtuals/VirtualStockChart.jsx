import { useEffect, useState } from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useTernaryDarkMode } from 'usehooks-ts';
import { io } from 'socket.io-client';

const dateFormatter = (date) => {
  date = new Date(date);
  const day = String(date.getDay()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

// custome decimal limit function
function limitDecimals(num, decimals) {
  if (num === undefined || num === null) return '0';
  const strNum = num.toString();
  const dotIndex = strNum.indexOf('.');
  if (dotIndex === -1) return strNum;
  return strNum.substring(0, dotIndex + decimals + 1);
}

// time formatter function
const timeFormatter = (date, is24Hour = false) => {
  const validDate = date instanceof Date ? date : new Date(date);
  if (isNaN(validDate)) {
    console.error('Invalid date:', date);
    return 'Invalid Date';
  }
  let hours = validDate.getHours();
  let minutes = validDate.getMinutes();
  let seconds = validDate.getSeconds();
  if (!is24Hour) {
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${ampm}`;
  } else {
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }
};

const VirtualStockChart = ({ chartDatas, state }) => {
  const [data, setData] = useState(chartDatas[0]?.prices);
  const { isDarkMode } = useTernaryDarkMode();
  const socket = io('https://market-msjv.onrender.com');

  const retructuredData = chartDatas[0]?.prices?.map((value, index) => {
    return {
      ...value,
      price: limitDecimals(value.price, 4),
      close: limitDecimals(value.close, 4),
      date: dateFormatter(value.createdAt),
      name: index * 3,
      time: timeFormatter(value.createdAt),
    };
  });

  const timeFrame = JSON.parse(localStorage.getItem('time-function'));
  useEffect(() => {
    setData(retructuredData);
  }, [timeFrame, chartDatas]);

  useEffect(() => {
    const handleNewData = (item) => {
      console.log(item);
      const newData = {
        price: limitDecimals(item.stock.price, 4) || limitDecimals(1.29998376, 4),
        close: limitDecimals(item.stock.close, 4) || limitDecimals(1.29998376, 4),
        date: dateFormatter(item.stock.createdAt),
        name: (data.length + 1) * 3,
        time: timeFormatter(item.stock.createdAt),
      };
      console.log(newData);
      setData((prev) => [...prev, newData]);
    };
    
    socket.on(`${state.symbol}-${timeFrame}`, handleNewData);
    return () => {
      socket.off(`${state.symbol}-${timeFrame}`);
    };
  }, [state.symbol, timeFrame, data]);
  

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-lg border border-gray-300 bg-white p-3 shadow-md">
          <p className="text-sm text-gray-500">
            Current Price: <span className="text-gray-800">{payload[0].payload.price}</span>
          </p>
          <p className="text-sm text-gray-500">
            Time: <span className="text-gray-800">{payload[0].payload.time}</span>
          </p>
          <p className="text-sm text-gray-500">
            Close Price: <span className="text-gray-800">{payload[0].payload.close}</span>
          </p>
          <p className="text-sm text-gray-500">
            Date: <span className="text-gray-800">{payload[0].payload.date}</span>
          </p>
        </div>
      );
    }
    return null;
  };
  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 10, right: 5, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4691c5" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#4691c5" stopOpacity={0} />
            </linearGradient>
          </defs>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis
            dataKey="name"
            axisLine={{ opacity: isDarkMode && 'dark' ? 0.1 : 0.5 }}
            tickSize={3}
            strokeOpacity={0.5}
            interval="preserveEnd"
          />
          <YAxis domain={['auto', 'auto']} tickSize={3} strokeOpacity={0.5} orientation="right" />
          <CartesianGrid strokeOpacity={isDarkMode && 'dark' ? 0.1 : 0.5} vertical={false} />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="price"
            isAnimationActive={false}
            stroke="#4691c5"
            fillOpacity={1}
            fill="url(#priceGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>

      {/* <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4691c5" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#4691c5" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="name"
            tickSize={3}
            strokeOpacity={0.5}
            axisLine={{ opacity: isDarkMode && 'dark' ? 0.1 : 0.5 }}
            interval="preserveEnd"
          />
          <YAxis tickSize={3} strokeOpacity={0.5} axisLine={false} orientation="left" />
          <CartesianGrid strokeOpacity={isDarkMode && 'dark' ? 0.1 : 0.5} vertical={false} />
          <Tooltip cursor={{ strokeDasharray: '5 5', opacity: isDarkMode && 'dark' ? 0.3 : 0.5 }} />
          <Area type="monotone" dataKey="price" stroke="#4691c5" fillOpacity={1} fill="url(#colorUv)" />
        </AreaChart>
      </ResponsiveContainer> */}
    </div>
  );
};

export default VirtualStockChart;
