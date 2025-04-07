import React from 'react';
import { tradingData } from '@/lib/gaming';
import PredictionButton from './PredictionButton';
import { useNavigate } from 'react-router-dom';
import useOddsStore from '@/store/gaming';
import { FaChevronRight } from 'react-icons/fa6';

const GamingTradingDetails = () => {
    const { selectedOdds, addOdd, removeOdd } = useOddsStore();
    const navigate = useNavigate();
  
    const handleClick = (rowId, section, key) => {
      const newOdd = { rowId, section, key };
      if (selectedOdds.some((item) => JSON.stringify(item) === JSON.stringify(newOdd))) {
        removeOdd(newOdd);
      } else {
        addOdd(newOdd);
      }
    };
  
    const isActive = (rowId, section, key) =>
      selectedOdds.some((item) => item.rowId === rowId && item.section === section && item.key === key);
  
  return (
      <div className="p-5 w-full">
      <table className="w-full">
        <thead>
          <tr>
            <th className="p-2"></th>
            <th className="p-2"></th>
            <th className="p-2"></th>
            <th className="p-2"></th>
          </tr>
        </thead>
        <tbody>
          {tradingData.slice(0, 5).map((row) => (
            <tr className="" key={row.id}>
              <td className="pr-20">{row.label}</td>
              {Object.entries(row.overUnder).map(([key, value]) => (
                <td key={key} className="">
                  <PredictionButton
                    onClick={() => handleClick(row.id, 'overUnder', key)}
                    className={` w-[140px] ${key === 'goals' ? 'rounded-tl-lg my-1 rounded-bl-lg' : key === 'under' ? 'rounded-tr-lg my-1 rounded-br-lg' : ''} ${
                      isActive(row.id, 'overUnder', key) ? 'bg-green-300 text-black' : 'text-white'
                    }`}
                    text={value}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GamingTradingDetails;
