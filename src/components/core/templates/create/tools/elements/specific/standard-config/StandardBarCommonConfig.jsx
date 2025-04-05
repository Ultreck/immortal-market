import { Radio, RadioGroup, Slider } from '@heroui/react';
import AutoCompleteNumberInput from '@/components/ui/AutoCompleteNumberInput.jsx';
import PropTypes from 'prop-types';
import NumberInput from '@/components/ui/NumberInput.jsx';
import XAxisConfig from '@/components/core/templates/create/elements/charts/standard/helpers/XAxisConfig.jsx';
import YAxisConfig from '@/components/core/templates/create/elements/charts/standard/helpers/YAxisConfig.jsx';
import LegendConfig from '@/components/core/templates/create/elements/charts/standard/helpers/LegendConfig.jsx';
import LabelConfig from '@/components/core/templates/create/elements/charts/standard/helpers/LabelConfig.jsx';
import useDesignStore from '@/store/design';

const StandardBarCommonConfig = ({ element }) => {
  const updateElement = useDesignStore((state) => state.updateElement);
  const { orientation } = element.config;

  const positions = {
    vertical: ['top', 'insideTop', 'insideBottom', 'center'],
    horizontal: ['start', 'insideStart', 'insideEnd', 'center'],
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-6">Chart settings</h3>
      <div className="space-y-3">
        <XAxisConfig element={element} />
        <YAxisConfig element={element} />
        <LegendConfig element={element} />
        <LabelConfig element={element} positions={positions[orientation] || []} />
        <div className="border border-default-200 px-6 py-5 rounded-2xl space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-base opacity-75 whitespace-nowrap">No. of points:</p>
            <NumberInput
              onChange={(v) => updateElement(element.id, { config: { ...element.config, points: Number(v) } }, true)}
              value={element.config.points}
              min={1}
              max={element.config.data.length}
              aria-label="No of points to show"
            />
          </div>
          {element.config.name.includes('bar') && (
            <>
              {element.config.name === 'bar-multiple' && (
                <div className="flex items-center justify-between">
                  <p className="text-base opacity-75 whitespace-nowrap">No. of bars/group:</p>
                  <AutoCompleteNumberInput
                    onChange={(v) =>
                      updateElement(element.id, { config: { ...element.config, barsPerGroup: Number(v) } }, true)
                    }
                    value={element.config.barsPerGroup}
                    min={1}
                    max={5}
                    aria-label="No of bars per group"
                  />
                </div>
              )}
              <div className="flex items-center justify-between">
                <p className="text-base opacity-75 whitespace-nowrap">Border radius</p>
                <NumberInput
                  onChange={(v) =>
                    updateElement(element.id, { config: { ...element.config, radius: Number(v) } }, true)
                  }
                  value={element.config.radius}
                  min={1}
                  max={100}
                  aria-label="Border radius"
                />
              </div>
              <div>
                <Slider
                  label="Gap"
                  step={1}
                  maxValue={30}
                  minValue={0}
                  onChange={(e) =>
                    updateElement(element.id, { config: { ...element.config, gap: Array.isArray(e) ? e[0] : e } }, true)
                  }
                  value={element.config.gap || 0}
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
            </>
          )}
          {/(line|area)/.test(element.config.name) && (
            <div>
              <RadioGroup
                label="Line type"
                orientation="horizontal"
                value={element.config.type || 'natural'}
                onValueChange={(value) =>
                  updateElement(element.id, { config: { ...element.config, type: value } }, true)
                }
              >
                {[
                  { key: 'natural', name: 'Normal' },
                  { key: 'step', name: 'Step' },
                  { key: 'linear', name: 'Linear' },
                ].map((type) => (
                  <Radio key={type.key} value={type.key}>
                    {type.name}
                  </Radio>
                ))}
              </RadioGroup>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

StandardBarCommonConfig.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardBarCommonConfig;
