import { Checkbox } from '@nextui-org/react';
import AutoCompleteNumberInput from '@/components/ui/AutoCompleteNumberInput.jsx';
import { useState } from 'react';
import PropTypes from 'prop-types';

const StandardMultipleBarConfig = ({ element, onChange }) => {
  return (
    <>
      <div className="flex flex-col space-y-6">
        <div>
          <Checkbox
            isSelected={element.config.showXaxis}
            classNames={{ base: 'py-0' }}
            onValueChange={(v) => onChange({ ...element, config: { ...element.config, showXaxis: v } })}
          >
            Show X Axis
          </Checkbox>
        </div>
        <div>
          <Checkbox
            isSelected={element.config.showYaxis}
            classNames={{ base: 'py-0' }}
            onValueChange={(v) => onChange({ ...element, config: { ...element.config, showYaxis: v } })}
          >
            Show Y Axis
          </Checkbox>
        </div>
        <div>
          <Checkbox
            isSelected={element.config.showLegend}
            classNames={{ base: 'py-0' }}
            onValueChange={(v) => onChange({ ...element, config: { ...element.config, showLegend: v } })}
          >
            Show Legend
          </Checkbox>
        </div>
        <div>
          <Checkbox
            isSelected={element.config.showXGridline}
            classNames={{ base: 'py-0' }}
            onValueChange={(v) =>
              onChange({
                ...element,
                config: { ...element.config, showXGridline: v },
              })
            }
          >
            Show X Grid Line
          </Checkbox>
        </div>
        <div>
          <Checkbox
            isSelected={element.config.showYGridline}
            classNames={{ base: 'py-0' }}
            onValueChange={(v) =>
              onChange({
                ...element,
                config: { ...element.config, showYGridline: v },
              })
            }
          >
            Show Y Grid Line
          </Checkbox>
        </div>
        <div className="flex items-center space-x-4">
          <p className="text-base opacity-75 whitespace-nowrap">No. of bars:</p>
          <AutoCompleteNumberInput
            onChange={(v) =>
              onChange({
                ...element,
                config: { ...element.config, bars: Number(v) },
              })
            }
            value={element.config.bars}
            min={1}
            max={element.config.data.length}
            ariaLabel="No of Bars to Show"
          />
        </div>
        {element.type === 'chart-s-bar-multiple' && (
          <div className="flex items-center space-x-4">
            <p className="text-base opacity-75 whitespace-nowrap">No. of bars per group:</p>
            <AutoCompleteNumberInput
              onChange={(v) =>
                onChange({
                  ...element,
                  config: { ...element.config, noOfBarsPerGroup: Number(v) },
                })
              }
              value={element.config.noOfBarsPerGroup}
              min={1}
              max={5}
              ariaLabel="No of noOfBarsPerGroup to Show"
            />
          </div>
        )}
        {element.type === 'chart-s-bar-multiple-vertical' && (
          <div className="flex items-center space-x-4">
            <p className="text-base opacity-75 whitespace-nowrap">No. of bars per group:</p>
            <AutoCompleteNumberInput
              onChange={(v) =>
                onChange({
                  ...element,
                  config: { ...element.config, noOfBarsPerGroup: Number(v) },
                })
              }
              value={element.config.noOfBarsPerGroup}
              min={1}
              max={5}
              ariaLabel="No of noOfBarsPerGroup to Show"
            />
          </div>
        )}
        <div className="w-50">
          <Input
            type="number"
            title="Rotate"
            label="Rotate"
            labelPlacement="outside-left"
            value={element.config.rotation || 0}
            onChange={(e) => onChange({ ...element, config: { ...element.config, rotation: Number(e.target.value) } })}
          />
        </div>
      </div>
    </>
  );
};

StandardMultipleBarConfig.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default StandardMultipleBarConfig;

