import { useEffect, useRef, useState } from 'react';
import {
  Area,
  AreaChart,
  Bar,
  CartesianGrid,
  ComposedChart,
  Line,
  LineChart,
  Pie,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { useTernaryDarkMode } from 'usehooks-ts';
import { io } from 'socket.io-client';
import { useGetCurrentPrice } from '@/store/bot';
import useSocket from '@/hooks/use-socket';
// import { useCreateVirtualStockDetails } from '@/api/ai-chat';

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
    // console.error('Invalid date:', date);
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

const VirtualStockChart = ({ chartDatas, state, setshouldStart, shouldStart, setendTime}) => {
  const [data, setData] = useState(chartDatas?.prices);
  // const [maxDataLength, SetmaxDataLength ] = useState(20);
  const { isDarkMode } = useTernaryDarkMode();
  // const socket = io('https://market-msjv.onrender.com', { transports: ['websocket'], autoConnect: false });
  const socket = useSocket();

  // console.log(ecternalSocket);
  // const timeFrame = JSON.parse(localStorage.getItem('time-function'));
  const { setCurrentPrice, currentPrice } = useGetCurrentPrice();
  useEffect(() => {
    const structured = chartDatas?.prices?.map((value, index) => {
      return {
        ...value,
        price: limitDecimals(value?.price, 4),
        sprice: limitDecimals(value?.price, 4) / 5,
        close: limitDecimals(value?.close, 4),
        date: dateFormatter(value?.updatedAt),
        timestamp: dateFormatter(value?.updatedAt),
        name: index,
        time: timeFormatter(value?.updatedAt),
      };
    });
    setData(structured);
  }, [chartDatas]);



  useEffect(() => {
    if (!socket) return;
    const getSessionFunct = () => {
      socket.emit('getSession', { stock: chartDatas?.stock?._id, session: chartDatas?._id });
    };
    const handleNewSession = (msg) => {
      
      if (!msg.isRunning && !shouldStart) {
        setendTime(msg.endTime)
        setshouldStart(true)
      }
      const newPrice = limitDecimals(msg?.price, 4);
      const lastPrice = currentPrice?.price;
      setData((prev) => {
        const newData = Array.isArray(prev) ? prev : [];
        if (newPrice === lastPrice || !msg.isRunning) {
          return newData;
        }
        return [
          ...newData,
          {
            ...msg,
            price: limitDecimals(msg?.price, 4),
            sprice: limitDecimals(msg?.price, 4) / 5,
            close: limitDecimals(msg?.close, 4),
            date: dateFormatter(msg?.updatedAt),
            name: newData?.length + 1,
            time: timeFormatter(msg?.updatedAt),
          },
        ];
      });
      setCurrentPrice(data?.at(-1) ?? null);
    };
    socket.on("priceUpdate",  getSessionFunct);
    socket.on('newSession', handleNewSession);

    return () => {
      socket.off("priceUpdate", getSessionFunct);
      socket.off('newSession', handleNewSession);
    };
  }, [socket, chartDatas]);

  const maxDataLength = chartDatas?.noOfRunning;
  const currentLength = data?.length ? data?.length : chartDatas?.prices?.length;
  // console.log("maxDataLength::", maxDataLength);
  // console.log(chartDatas?.prices);
  // console.log(timeFrame);

  let paddedData;
  if (data && (data?.length > 0)) {
    const lengthDiff = Math.max(0, maxDataLength - currentLength);
    paddedData = [...data, ...Array(lengthDiff).fill(null)];
  }

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-lg border border-gray-300 bg-white p-3 shadow-md">
          <p className="text-sm text-gray-500 text-brown-700">
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
            // dot={(props) => <customDot {...props} data={paddedData} />}
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
          <Bar dataKey="sprice" barSize={10} fill="orange" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VirtualStockChart;
