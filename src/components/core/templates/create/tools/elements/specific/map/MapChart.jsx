import { Checkbox } from '@heroui/react';
import PropTypes from 'prop-types';
import { TbChartBar, TbChartLine, TbChartPie } from 'react-icons/tb';
import useDesignStore from '@/store/design.js';

const MapChart = ({ element }) => {
  const updateElement = useDesignStore((state) => state.updateElement);

  return (
    <div className="space-y-4">
      <div>
        <Checkbox
          isSelected={element.config.showValues}
          classNames={{ base: 'py-0' }}
          onValueChange={(v) => updateElement(element.id, { config: { ...element.config, showValues: v } }, true)}
        >
          Select chart
        </Checkbox>
      </div>
      {element.config.showValues && (
        <div className="grid grid-cols-3 gap-4">
          <div>
            <TbChartBar
              className="w-full h-full cursor-pointer"
              onClick={() => updateElement(element.id, { tooltip: { ...element.tooltip, type: 'bar' } }, true)}
            />
          </div>
          <div>
            <TbChartPie
              className="w-full h-full cursor-pointer"
              onClick={() => updateElement(element.id, { tooltip: { ...element.tooltip, type: 'pie' } }, true)}
            />
          </div>
          <div>
            <TbChartLine
              className="w-full h-full cursor-pointer"
              onClick={() => updateElement(element.id, { tooltip: { ...element.tooltip, type: 'line' } }, true)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

MapChart.propTypes = {
  element: PropTypes.object.isRequired,
};

export default MapChart;
