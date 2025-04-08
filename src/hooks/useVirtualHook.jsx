import React, {useEffect, useState} from 'react'
import { io } from 'socket.io-client';

const useVirtualHook = () => {
      const [chartDatas, setChartDatas] = useState([]);
      const [data, setData] = useState([]);
      const socket = io('https://market-msjv.onrender.com'); // Socket connection


     useEffect(() => {
        const getSessionFunct = () => {
          socket.emit('getSession', { stock: chartDatas?.stock?._id, session: chartDatas?._id });
        };
        const handleNewSession = (msg) => {
          console.log(msg);
          console.log(chartDatas?.stock?._id, chartDatas?._id);
          
          if (msg.price) {
            const newPrice = limitDecimals(msg?.price, 4);
            const lastPrice = currentPrice?.price;
    
            setData((prev) => {
              const newData = Array.isArray(prev) ? prev : [];
              if (newPrice === lastPrice) {
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
          }
        };
        socket.on(timeFrame, getSessionFunct);
        socket.on('newSession', handleNewSession);
    
        return () => {
          socket.off(timeFrame, getSessionFunct);
          socket.off('newSession', handleNewSession);
        };
      }, []);

       
  const handleGetStockDetails = async () => {
    // Handling data fetching
    let data = {
      stockId: id,
      country: country,
      sessionType: timeFrame,
    };
    const res = await getStockDetails(data);
    setChartDatas(res?.data?.data);

    // Restructuring section
    if (res) {
      const structured = res?.data?.data?.prices?.map((value, index) => {
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
    }
  };
  return {
    handleGetStockDetails,
    data,
    chartDatas,
  }
}

export default useVirtualHook