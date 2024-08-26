import { isValidJsonArray } from '@/lib/utils';
import { Button, Checkbox, Radio, RadioGroup, Tab, Tabs, Textarea } from '@nextui-org/react';
import { Controller, useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import AutoCompleteNumberInput from '@/components/ui/AutoCompleteNumberInput.jsx';
import { useState } from 'react';

const AdvancedCustomBarConfig = ({ element, onChange }) => {
  const [tab, setTab] = useState('data');
  const { handleSubmit, control } = useForm({
    defaultValues: {
      json: JSON.stringify(element.config.data, null, 2),
    },
  });

  const onSubmit = async (values) => {
    const { json } = values;
    const data = JSON.parse(json);
    onChange({ ...element, config: { ...element.config, data } });
  };

  return (
    <div>
      <Tabs
        variant="bordered"
        aria-label="Options"
        color="primary"
        radius="full"
        classNames={{
          base: 'mb-2',
          tab: 'text-base px-4',
        }}
        selectedKey={tab}
        onSelectionChange={setTab}
      >
        <Tab key="data" title="Data" className="text-base">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-2">
              <Controller
                name="json"
                control={control}
                rules={{
                  required: 'A valid JSON array is required, with each item having a label and value',
                  validate: (value) => {
                    return (
                      isValidJsonArray(value) &&
                      JSON.parse(value).every((item) => Object.hasOwn(item, 'label') && Object.hasOwn(item, 'value'))
                    );
                  },
                }}
                render={({ field, fieldState: { error } }) => {
                  const message =
                    error?.type === 'validate'
                      ? 'A valid JSON array is required, with each item having a label and value'
                      : error?.message;
                  return (
                    <Textarea
                      classNames={{ inputWrapper: 'px-5 py-5' }}
                      minRows="10"
                      label="Paste JSON Array Here.."
                      bordered
                      {...field}
                      errorMessage={message}
                      isInvalid={!!message}
                    />
                  );
                }}
              />
            </div>
            <Button type="submit" variant="solid" radius="full" className="text-base px-4 mt-6">
              Apply
            </Button>
          </form>
        </Tab>
        <Tab key="settings" title="Settings" className="text-base">
          <div className="flex flex-col items-start space-y-5">
            <div className="flex items-center space-x-4">
              <p className="text-base opacity-75">Orientation:</p>
              <RadioGroup
                orientation="horizontal"
                value={element.config.orientation}
                onValueChange={(v) => onChange({ ...element, config: { ...element.config, orientation: v } })}
              >
                <Radio value="vertical">Vertical</Radio>
                <Radio value="horizontal">Horizontal</Radio>
              </RadioGroup>
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-base opacity-75">Label position:</p>
              <RadioGroup
                orientation="horizontal"
                value={element.config.labelPosition}
                onValueChange={(v) => onChange({ ...element, config: { ...element.config, labelPosition: v } })}
              >
                <Radio value="start">Start</Radio>
                <Radio value="end">End</Radio>
              </RadioGroup>
            </div>
            <Checkbox
              isSelected={element.config.isIconVisible}
              classNames={{ base: 'py-0' }}
              onValueChange={(v) => onChange({ ...element, config: { ...element.config, isIconVisible: v } })}
            >
              Show Icon
            </Checkbox>
            <Checkbox
              isSelected={element.config.barTooltip}
              classNames={{ base: 'py-0' }}
              onValueChange={(v) => onChange({ ...element, config: { ...element.config, barTooltip: v } })}
            >
              Bar tooltip
            </Checkbox>
            <Checkbox
              isSelected={element.config.cardTooltip}
              classNames={{ base: 'py-0' }}
              onValueChange={(v) => onChange({ ...element, config: { ...element.config, cardTooltip: v } })}
            >
              Card tooltip
            </Checkbox>
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
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

AdvancedCustomBarConfig.propTypes = {
  element: PropTypes.shape({
    config: PropTypes.object,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AdvancedCustomBarConfig;
