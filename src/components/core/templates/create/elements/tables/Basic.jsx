import { cn } from '@/lib/utils.js';
import PropTypes from 'prop-types';
import AutoResizeTextArea from '@/components/ui/AutoResizeTextArea.jsx';
import { useRef } from 'react';
import { RiAddLine } from 'react-icons/ri';

const Basic = ({ element, onChange }) => {
  const table = useRef(null);
  const colors = element.config.colors;
  const headers = element.config.data[0];
  const rows = element.config.data.slice(1);
  const max = Math.max(...element.config.data.map((row) => row.length));

  const handleChange = (i, j, v) => {
    const data = [...element.config.data];
    data[i][j] = v;
    onChange({ ...element, config: { ...element.config, data } });
  };

  const handleAddRow = () => {
    const data = [...element.config.data];
    data.push(Array(max).fill(''));
    onChange({ ...element, config: { ...element.config, data } });
  };

  const handleAddColumn = () => {
    const data = [...element.config.data].map((row) => [...row, '']);
    onChange({ ...element, config: { ...element.config, data } });
  };

  return (
    <div className="w-full h-full relative flex flex-col">
      <table
        className="w-full h-full table-auto border-separate border-spacing-0.5 rounded-lg bg-white"
        style={element.style}
        ref={table}
      >
        <thead>
          <tr style={{ background: colors[0] }}>
            {Array(max)
              .fill(null)
              .map((_, index) => {
                const header = headers[index];
                return (
                  <th
                    key={`header-${index}`}
                    className={cn(
                      'text-left px-3 py-1 border border-gray-300 font-medium first:rounded-tl-lg last:rounded-tr-lg text-white'
                    )}
                  >
                    <AutoResizeTextArea
                      value={header}
                      onChange={(v) => handleChange(0, index, v)}
                      className="bg-transparent w-full h-full px-3 py-1 leading-tight border border-transparent hover:border-gray-300"
                    />
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
                      className={cn('text-left border border-gray-300 p-0', {
                        'first:rounded-bl-lg last:rounded-br-lg': i === rows.length - 1,
                      })}
                    >
                      <AutoResizeTextArea
                        value={cell}
                        onChange={(v) => handleChange(i + 1, j, v)}
                        className="bg-transparent w-full h-full px-3 py-1 leading-tight border border-transparent hover:border-gray-300"
                      />
                    </td>
                  );
                })}
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={handleAddRow}
        className="rounded-2xl flex items-center justify-center border hover:bg-gray-300 px-2 py-0.5 absolute top-[calc(100%+8px)] left-2 bg-white"
      >
        <RiAddLine size="16" />
      </button>
      <button
        onClick={handleAddColumn}
        className="rounded-2xl flex items-center justify-center border hover:bg-gray-300 px-0.5 py-2 absolute left-[calc(100%+8px)] top-2 bg-white"
      >
        <RiAddLine size="16" />
      </button>
    </div>
  );
};

Basic.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

export default Basic;
