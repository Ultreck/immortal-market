import { useEffect, useRef, useState } from 'react';
import { Area, AreaChart, Bar, CartesianGrid, ComposedChart, Line, LineChart, Pie, ResponsiveContainer, Tooltip, XAxis, YAxis  } from 'recharts';
import { useTernaryDarkMode } from 'usehooks-ts';
// import { io } from 'socket.io-client';
import { useGetCurrentPrice } from '@/store/bot';

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
  // const socket = io('https://market-msjv.onrender.com', { transports: ['websocket', 'polling'] });
  const timeFrame = JSON.parse(localStorage.getItem('time-function'));
  const { setCurrentPrice } = useGetCurrentPrice();

  // Change the data to the format specified
  const restructuredData = chartDatas[0]?.prices?.map((value, index) => {
    return {
      ...value,
      price: limitDecimals(value.price, 4),
      close: limitDecimals(value.close, 4),
      date: dateFormatter(value.createdAt),
      timestamp: dateFormatter(value.updatedAt),
      name: index * 3,
      time: timeFormatter(value.createdAt),
    };
  });

  useEffect(() => {
    setData(restructuredData);
  }, [timeFrame, chartDatas]);

  useEffect(() => {
    // socket.on(`${state?.symbol}-${timeFrame}`, (msg) => {
    //   console.log(msg);
    //   setData((prev) => {
    //     return [
    //       ...prev,
    //       {
    //         price: limitDecimals(msg?.stock?.price, 4) || limitDecimals(1.29998376, 4),
    //         close: limitDecimals(msg?.stock?.close, 4) || limitDecimals(1.29998376, 4),
    //         date: dateFormatter(msg?.stock?.createdAt),
    //         name: (prev?.length + 1) * 3,
    //         time: timeFormatter(msg?.stock?.createdAt),
    //       },
    //     ];
    //   });
    // });
    // setCurrentPrice(data?.at(-1) ?? null);
    // return () => {
    //   socket.off(`${state?.symbol}-${timeFrame}`);
    // };
  }, [data, timeFrame]);

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

  const maxDataLength = timeFrame === '5-minutes' || timeFrame === '10-minutes'? 300 : timeFrame === '30-minutes'? 450 :  360;

  const [info, setInfo] = useState(
    Array.from({ length: 1 }, (_, i) => ({
      name: `${i.toString()}s`,
      price: 30 + Math.random() * 100,
      sprice: (30 + Math.random() * 100)/5,
    }))
  );

  const generateRandomPrice = (prevPrice) => {
    const change = (Math.random() - 0.5) * 100;
    return Math.max(100, prevPrice + change);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setInfo((prevData) => {
        const lastPrice = prevData[prevData.length - 1].price;
        const newPoint = {
          name: `${(parseInt(prevData[prevData.length - 1].name) + 1).toString()}s`,
          price: generateRandomPrice(lastPrice),
          sprice: generateRandomPrice(lastPrice)/3,
        };
        return [...prevData, newPoint];
      });
    }, timeFrame === '5-minutes'? 1000 : timeFrame === '10-minutes'? 2000 : timeFrame === '30-minutes'? 4000 :  5000);
    setCurrentPrice(info?.at(-1) ?? null);

    return () => clearInterval(interval);
  }, [info]);


  const currentLength = info.length;

  const paddedData = [...info, ...Array(maxDataLength - currentLength).fill(null)];

  const customDot = ({ cx, cy, index, data }) => {    
    if(index === data.length - 1){
      return (
        <circle cx={cx} cy={cy} fill='#4691c5' r={4} stroke='#fff' strokeWidth={2}/>
      )
    }
    return null;
  };

  return (
    <div className="overflow-x-auto max-w-[100%]">
      <ResponsiveContainer width={'100%'} height={300}>
        <ComposedChart data={paddedData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4691c5" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#4691c5" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="name"
            domain={[0, maxDataLength - 1]}
            tickSize={5}
            strokeOpacity={0.5}
            interval="preserveEnd"
          />
          <YAxis domain={['auto', 'auto']} tickSize={3} strokeOpacity={0.5} orientation="right" />
          <CartesianGrid strokeOpacity={isDarkMode && 'dark' ? 0.1 : 0.5} vertical={false} />
          <Tooltip content={<CustomTooltip />} />
          <Area
              dataKey="price"
              dot={
                (props) => <customDot {...props} data={paddedData} />
              }
              // dot={{
              //   r: 4,
              //   fill: "#4691c5",
              //   stroke: "#fff",
              //   strokeWidth: 2,
              //   display: (props) => {                  
              //     return props.index === props.data?.length - 1 ? 'block' : 'none';
              //   }
              // }}
            type="monotone"
            isAnimationActive={false}
            stroke="#4691c5"
            fill="url(#priceGradient)"
          />
            <Bar dataKey="sprice" barSize={10} fill="#4691c5" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VirtualStockChart;
