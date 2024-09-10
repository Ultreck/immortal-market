import { isValidJsonArray } from '@/lib/utils';
import { Button, Checkbox, Tab, Tabs, Textarea } from '@nextui-org/react';
import { Controller, useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { useState } from 'react';

const AdvanceDynamicSortingChartConfig = ({ element, onChange }) => {
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
          <div className="space-y-6">
            <Controller
              name="json"
              control={control}
              rules={{
                required: 'A valid JSON array is required',
                validate: (value) => isValidJsonArray(value),
              }}
              render={({ field, fieldState: { error } }) => {
                const message = error?.type === 'validate' ? 'Invalid JSON array' : error?.message;
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
        <div className="space-y-6">
          <div>
            <Controller
              name="showXYaxis"
              control={control}
              rules={{ required: `showXaxis is required` }}
              render={({ field }) => (
                <Checkbox
                  isSelected={element.config.showXaxis}
                  classNames={{ base: 'py-0' }}
                  onValueChange={(v) => onChange({ ...element, config: { ...element.config, showXaxis: v } })}
                >
                  Show X Axis
                </Checkbox>
              )}
            />
          </div>
          <div>
            <Controller
              name="showXYaxis"
              control={control}
              rules={{ required: `showXYaxis is required` }}
              render={({ field }) => (
                <Checkbox
                  isSelected={element.config.showYaxis}
                  classNames={{ base: 'py-0' }}
                  onValueChange={(v) => onChange({ ...element, config: { ...element.config, showYaxis: v } })}
                >
                  Show Y Axis
                </Checkbox>
              )}
            />
          </div>
          <div>
            <Controller
              name="showLegend"
              control={control}
              rules={{ required: `showLegend is required` }}
              render={({ field }) => (
                <Checkbox
                  isSelected={element.config.showLegend}
                  classNames={{ base: 'py-0' }}
                  onValueChange={(v) => onChange({ ...element, config: { ...element.config, showLegend: v } })}
                >
                  Show Legend
                </Checkbox>
              )}
            />
          </div>
          <Checkbox
            isSelected={element.config.showLabel}
            onValueChange={(v) => onChange({ ...element, config: { ...element.config, showLabel: v } })}
            classNames={{ base: 'py-0' }}
          >
            Show Label
          </Checkbox>
        </div>
      </Tab>
    </Tabs>
  );
};

AdvanceDynamicSortingChartConfig.propTypes = {
  element: PropTypes.shape({
    config: PropTypes.object,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AdvanceDynamicSortingChartConfig;

