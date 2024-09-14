import { cn } from '@/lib/utils.js';
import PropTypes from 'prop-types';

const TrendAnalysis = ({ element }) => {
  const colors = element.config.colors;
  const headers = element.config.data.slice(0, 2);
  const rows = element.config.data.slice(2);
  const max = Math.max(...element.config.data.map((row) => row.length));

  return (
    <table
      className={cn(`w-full h-full table-auto border-separate border-spacing-0.5 rounded-lg bg-white`)}
      style={element.style}
    >
      <thead>
        <tr style={{ background: colors[0] }}>
          <th
            className={cn(
              'text-center px-3 py-1 border border-gray-300 font-medium first:rounded-tl-lg last:rounded-tr-lg text-white'
            )}
            colSpan={max}
          >
            {headers[0][0]}
          </th>
        </tr>
        <tr style={{ background: colors[1] }}>
          {headers[1].map((header, index) => {
            return (
              <th
                key={`header-${index}`}
                className={cn('text-left px-3 py-1 border border-gray-300 font-medium text-white')}
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
                    className={cn('text-left border border-gray-300 px-3 py-1', {
                      'first:rounded-bl-lg last:rounded-br-lg': i === rows.length - 1,
                      'bg-white': i % 2 === 0,
                      'bg-gray-100': i % 2 !== 0,
                    })}
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

TrendAnalysis.propTypes = {
  element: PropTypes.object.isRequired,
};

export default TrendAnalysis;
