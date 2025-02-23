import { Slider } from '@heroui/react';
import PropTypes from 'prop-types';
import NumberInput from '@/components/ui/NumberInput.jsx';
import LabelConfig from '@/components/core/templates/create/elements/charts/standard/helpers/LabelConfig.jsx';
import LegendConfig from '@/components/core/templates/create/elements/charts/standard/helpers/LegendConfig.jsx';
import TooltipConfig from '@/components/core/templates/create/elements/charts/standard/helpers/TooltipConfig.jsx';

const StandardPieCommonConfig = ({ element, onChange }) => {
  return (
    <div className="flex flex-col gap-2 space-y-2">
      <LabelConfig element={element} onChange={onChange} type="pie" />
      <LegendConfig element={element} onChange={onChange} />
      <TooltipConfig element={element} onChange={onChange} />
      <div className="border border-default-200 px-6 py-5 rounded-2xl space-y-6">
        <div className="flex items-center justify-between">
          <p className="text-base">No. of points</p>
          <NumberInput
            variant="bordered"
            value={element.config.points}
            onChange={(v) =>
              onChange({
                ...element,
                config: { ...element.config, points: Number(v) },
              })
            }
            min={1}
            max={element.config.data.length}
            ariaLabel="No of points to show"
          />
        </div>
        {['pie', 'pie-2'].includes(element.config.name) && (
          <div>
            <Slider
              label="Inner radius"
              step={1}
              maxValue={100}
              minValue={0}
              marks={[
                { value: 0, label: '0' },
                { value: 10, label: '10' },
                { value: 20, label: '20' },
                { value: 30, label: '30' },
                { value: 40, label: '40' },
                { value: 50, label: '50' },
                { value: 60, label: '60' },
                { value: 70, label: '70' },
                { value: 80, label: '80' },
                { value: 90, label: '90' },
                { value: 100, label: '100' },
              ]}
              className="max-w-md"
              classNames={{ label: 'text-base', value: 'text-base' }}
              onChange={(e) => onChange({ ...element, config: { ...element.config, innerRadius: e } })}
              value={element.config.innerRadius}
            />
          </div>
        )}
      </div>
    </div>
  );
};

StandardPieCommonConfig.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default StandardPieCommonConfig;
