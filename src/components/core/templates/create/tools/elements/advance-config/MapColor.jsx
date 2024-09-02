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
      <div className="p-5 bg-slate-800 w-full relative rounded">
        <div className="text border-b-2 border-slate-900">
          <table className="w-full">
            <thead className="">
              <tr className="text-start">
                <th className=" text-start p-1">S/n</th>
                <th className=" text-start p-1">Color</th>
                <th className="text-start p-1">Name</th>
                <th className="text-start p-1">Area</th>
              </tr>
            </thead>
          </table>
        </div>
        <ScrollShadow offset={100} orientation="horizontal" className="h-[200px]">
          <table className="w-full border-collapse border border-slate-500 ">
            <tbody className="text">
              {element.config.data.map((state, index) => (
                <tr key={state.x} className="text">
                  <td className="border border-slate-600 p-1">{index + 1}</td>
                  <td className="border border-slate-600 p-1">
                    <ColourPane
                      colors={element.config.colors}
                      id={state.id}
                      state={state}
                      onSelectColor={handleChange}
                    />
                  </td>
                  <td className="border border-slate-600 p-1">{state.label}</td>
                  <td className="border border-slate-600 p-1">{state.area}</td>
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
