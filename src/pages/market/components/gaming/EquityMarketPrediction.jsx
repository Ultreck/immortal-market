import useOddsStore from '@/store/gaming';
import PredictionButton from './PredictionButton';
import {tableData } from '@/lib/gaming';
import { useNavigate } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa6';
const EquityMarketPrediction = () => {
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
    <div className="p-9 mt-5 w-full border rounded-lg dark:border-default-200">
      <table className="w-full">
        <thead>
          <tr>
            <th className="p-2">Exchange</th>
            <th className="p-2"></th>
            <th className="p-2"></th>
            <th className="p-2"></th>
            <th className="p-2"></th>
            <th className="p-1"></th>
            <th className="p-2"></th>
            <th className="p-2"></th>
            <th className="p-2"></th>
            <th className="p-2"></th>
          </tr>
        </thead>
        <tbody>
          {tableData.slice(5).map((row) => (
            <tr className="" key={row.id}>
              <td className="p-2">{row.exchange}</td>
              <td className="p-2">{row.rank}</td>
              {Object.entries(row.threeWay).map(([key, value]) => (
                <td key={key} className="">
                  <PredictionButton
                    onClick={() => handleClick(row.id, 'threeWay', key)}
                    className={` ${key === '1' ? 'rounded-tl-lg my-1 rounded-bl-lg' : key === 'X' ? 'rounded-tr-lg my-1 rounded-br-lg' : ''} ${
                      isActive(row.id, 'threeWay', key) ? 'bg-green-300 text-black' : 'text-white'
                    }`}
                    text={value}
                  />
                </td>
              ))}
              <td className=""></td>
              {Object.entries(row.overUnder).map(([key, value]) => (
                <td key={key} className="">
                  <PredictionButton
                    onClick={() => handleClick(row.id, 'overUnder', key)}
                    className={` ${key === 'goals' ? 'rounded-tl-lg my-1 rounded-bl-lg' : key === 'under' ? 'rounded-tr-lg my-1 rounded-br-lg' : ''} ${
                      isActive(row.id, 'overUnder', key) ? 'bg-green-300 text-black' : 'text-white'
                    }`}
                    text={value}
                  />
                </td>
              ))}
              <td className="p-1 text-sm">
                <PredictionButton
                  onClick={() => navigate(`/markets/gaming/${row.id}`, { state: row })}
                  text={
                    <span className="text flex items-center justify-around">
                      {row.score}
                      <FaChevronRight size={12} />
                    </span>
                  }
                  className="bg-transparent rounded-full hover:bg-default-100 hover:text-green-500"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EquityMarketPrediction;
