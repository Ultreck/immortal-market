import { Checkbox, Tooltip } from '@heroui/react';
import PropTypes from 'prop-types';
import { TbChartBar, TbChartLine, TbChartPie } from 'react-icons/tb';

const MapChart = ({ element, onChange }) => {
  return (
    <div className="space-y-4">
        <div>
        <Checkbox
          isSelected={element.config.showValues}
          classNames={{ base: 'py-0' }}
          onValueChange={(v) => onChange({ ...element, config: { ...element.config, showValues: v } })}
        >
          Select chart
        </Checkbox>
      </div>
    {element.config.showValues && (
      <div className="grid grid-cols-3 gap-4">
        <div>
          <TbChartBar
            className="w-full h-full cursor-pointer"
            onClick={() => onChange({ ...element, tooltip: { ...element.tooltip, type: 'bar' } })}
            />
        </div>
        <div>
          <TbChartPie
            className="w-full h-full cursor-pointer"
            onClick={() => onChange({ ...element, tooltip: { ...element.tooltip, type: 'pie' } })}
          />
        </div>
        <div>
          <TbChartLine
            className="w-full h-full cursor-pointer"
            onClick={() => onChange({ ...element, tooltip: { ...element.tooltip, type: 'line' } })}
          />
        </div>
      </div>
      )}
    </div>
  );
};

MapChart.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MapChart;
