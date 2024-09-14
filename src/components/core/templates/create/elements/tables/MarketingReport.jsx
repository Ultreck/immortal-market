import { cn } from '@/lib/utils.js';
import PropTypes from 'prop-types';

const MarketingReport = ({ element }) => {
  const colors = element.config.colors;
  const headers = element.config.data[0];
  const rows = element.config.data.slice(1);
  const max = Math.max(...element.config.data.map((row) => row.length));

  return (
    <table
      className={cn(`w-full h-full table-auto border-separate border-spacing-0.5 rounded-lg bg-white`)}
      style={element.style}
    >
      <thead>
        <tr>
          <th className="text-left px-3 py-1 border border-gray-300 font-medium first:rounded-tl-lg last:rounded-tr-lg" />
          {headers.slice(1).map((header, index) => {
            return (
              <th
                key={`header-${index}`}
                className={cn(
                  'text-left px-3 py-1 border border-gray-300 font-normal first:rounded-tl-lg last:rounded-tr-lg text-white'
                )}
                style={{ background: colors[0] }}
              >
                {header}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={`row-${i}`} className="group">
            {Array(max)
              .fill(null)
              .map((_, j) => {
                const cell = row[j];
                return (
                  <td
                    key={`cell-${j}`}
                    className={cn('text-left border border-gray-300 px-3 py-1 first:text-white', {
                      'first:rounded-bl-lg last:rounded-br-lg': i === rows.length - 1,
                      'bg-white': i % 2 === 0,
                      'bg-gray-100': i % 2 !== 0,
                    })}
                    style={{ background: j === 0 ? colors[1] : null }}
                  >
                    {cell}
                  </td>
                );
              })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

MarketingReport.propTypes = {
  element: PropTypes.object.isRequired,
};

export default MarketingReport;
