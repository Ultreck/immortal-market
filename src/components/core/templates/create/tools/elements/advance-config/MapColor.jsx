import { ScrollShadow } from '@nextui-org/react';
import { useCallback } from 'react';
import PropTypes from 'prop-types';
import ColourPane from '../ColourPane';

const MapColor = ({ element, onChange }) => {
  const handleChange = useCallback(
    (_colors, id) => {
      const updatedData = element.config.data.map((data) => (data.id === id ? { ...data, color: _colors } : data));
      onChange({
        ...element,
        config: { ...element.config, data: updatedData },
      });
    },
    [element, onChange]
  );

  return (
    <div className="px- py-6 w-full">
      <div className="p-5 dark:bg-slate-800 bg-gray-300 w-full relative rounded">
        <div className="text border-b-2 dark:border-slate-900">
          <table className="w-full">
            <thead className="">
              <tr className="text">
                <th className=" text-center">S/n</th>
                <th className=" text-center">Color</th>
                <th className="text-center">Name</th>
                <th className="text-center">Value</th>
              </tr>
            </thead>
          </table>
        </div>
        <ScrollShadow offset={100} orientation="horizontal" className="h-[200px]">
          <table className="w-full border border-slate-600 ">
            <tbody className="text">
              {element.config.data.map((state, index) => (
                <tr key={state.x} className="text">
                  <td className="border text-center border-slate-600 w-10">{index + 1}</td>
                  <td className="border text-center border-slate-600 w-24 pt-1.5">
                    <ColourPane
                      colors={element.config.colors}
                      id={state.id}
                      state={state}
                      onSelectColor={handleChange}
                    />
                  </td>
                  <td className="border text-center border-slate-600">{state.label}</td>
                  <td className="border text-center border-slate-600">{state.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollShadow>
      </div>
    </div>
  );
};

MapColor.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MapColor;
