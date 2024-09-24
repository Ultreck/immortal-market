import { useState } from 'react';
import AutoCompleteNumberInput from '@/components/ui/AutoCompleteNumberInput.jsx';
import { isValidJsonArray } from '@/lib/utils.js';
import { Button, Tab, Tabs, Textarea } from '@nextui-org/react';
import { Controller, useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

const AdvanceColumnCard = () => {
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
            <div className="flex items-center space-x-4">
              <p className="text-base opacity-75 whitespace-nowrap">No. of Cards:</p>
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

AdvanceColumnCard.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AdvanceColumnCard;
