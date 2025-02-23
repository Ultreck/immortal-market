import { Radio, RadioGroup, Slider } from '@heroui/react';
import AutoCompleteNumberInput from '@/components/ui/AutoCompleteNumberInput.jsx';
import PropTypes from 'prop-types';
import NumberInput from '@/components/ui/NumberInput.jsx';
import XAxisConfig from '@/components/core/templates/create/elements/charts/standard/helpers/XAxisConfig.jsx';
import YAxisConfig from '@/components/core/templates/create/elements/charts/standard/helpers/YAxisConfig.jsx';
import LegendConfig from '@/components/core/templates/create/elements/charts/standard/helpers/LegendConfig.jsx';
import LabelConfig from '@/components/core/templates/create/elements/charts/standard/helpers/LabelConfig.jsx';

const StandardBarCommonConfig = ({ element, onChange }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-6">Chart settings</h3>
      <div className="space-y-3">
        <XAxisConfig element={element} onChange={onChange} />
        <YAxisConfig element={element} onChange={onChange} />
        <LegendConfig element={element} onChange={onChange} />
        <LabelConfig element={element} onChange={onChange} type="bar" />
        <div className="border border-default-200 px-6 py-5 rounded-2xl space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-base opacity-75 whitespace-nowrap">No. of points:</p>
            <NumberInput
              onChange={(v) =>
                onChange({
                  ...element,
                  config: { ...element.config, points: Number(v) },
                })
              }
              value={element.config.points}
              min={1}
              max={element.config.data.length}
              ariaLabel="No of points to show"
            />
          </div>
          {element.config.name.includes('bar') && (
            <>
              {element.config.name === 'bar-multiple' && (
                <div className="flex items-center justify-between">
                  <p className="text-base opacity-75 whitespace-nowrap">No. of bars/group:</p>
                  <AutoCompleteNumberInput
                    onChange={(v) =>
                      onChange({
                        ...element,
                        config: { ...element.config, barsPerGroup: Number(v) },
                      })
                    }
                    value={element.config.barsPerGroup}
                    min={1}
                    max={5}
                    ariaLabel="No of bars per group"
                  />
                </div>
              )}
              <div className="flex items-center justify-between">
                <p className="text-base opacity-75 whitespace-nowrap">Border radius</p>
                <NumberInput
                  onChange={(v) =>
                    onChange({
                      ...element,
                      config: { ...element.config, radius: Number(v) },
                    })
                  }
                  value={element.config.radius}
                  min={1}
                  max={100}
                  ariaLabel="Border radius"
                />
              </div>
              <div>
                <Slider
                  label="Gap"
                  step={1}
                  maxValue={30}
                  minValue={0}
                  className="max-w-md"
                  classNames={{ label: 'text-base', value: 'text-base' }}
                  onChange={(e) =>
                    onChange({
                      ...element,
                      config: { ...element.config, gap: Array.isArray(e) ? e[0] : e },
                    })
                  }
                  value={element.config.gap || 0}
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
                  onChange({
                    ...element,
                    config: { ...element.config, type: value },
                  })
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
  onChange: PropTypes.func.isRequired,
};

export default StandardBarCommonConfig;
