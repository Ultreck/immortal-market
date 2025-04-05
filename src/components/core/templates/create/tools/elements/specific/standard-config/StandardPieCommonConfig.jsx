import { Slider } from '@heroui/react';
import PropTypes from 'prop-types';
import NumberInput from '@/components/ui/NumberInput.jsx';
import LabelConfig from '@/components/core/templates/create/elements/charts/standard/helpers/LabelConfig.jsx';
import LegendConfig from '@/components/core/templates/create/elements/charts/standard/helpers/LegendConfig.jsx';
import TooltipConfig from '@/components/core/templates/create/elements/charts/standard/helpers/TooltipConfig.jsx';
import useDesignStore from '@/store/design';

const StandardPieCommonConfig = ({ element }) => {
  const updateElement = useDesignStore((state) => state.updateElement);

  return (
    <div className="flex flex-col gap-2 space-y-2">
      <LabelConfig element={element} positions={['inside', 'outside']} />
      <LegendConfig element={element} />
      <TooltipConfig element={element} />
      <div className="border border-default-200 px-6 py-5 rounded-2xl space-y-6">
        <div className="flex items-center justify-between">
          <p className="text-base">No. of points</p>
          <NumberInput
            variant="bordered"
            value={element.config.points}
            onChange={(v) => updateElement(element.id, { config: { ...element.config, points: Number(v) } }, true)}
            min={1}
            max={element.config.data.length}
            aria-label="No of points to show"
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
              onChange={(e) => updateElement(element.id, { config: { ...element.config, innerRadius: e } }, true)}
              value={element.config.innerRadius}
              classNames={{
                thumb: 'before:hidden after:hidden bg-default-700 w-[16px] h-[16px] rounded-full',
                track: 'border-s-default-300',
                filler: 'bg-gradient-to-r from-default-300 to-default-400',
                label: 'text-base',
                value: 'text-base opacity-60',
              }}
              size="sm"
              showOutline
            />
          </div>
        )}
      </div>
    </div>
  );
};

StandardPieCommonConfig.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardPieCommonConfig;
