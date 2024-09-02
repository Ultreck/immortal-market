import { ElementPropTypes } from '@/lib/prop-types';
import { isValidJsonArray } from '@/lib/utils';
import { Button, Checkbox, Tab, Tabs, Textarea } from '@nextui-org/react';
import { Controller, useForm } from 'react-hook-form';
import { useState } from 'react';
import GlobalMapColor from './GlobalMapColor';
import MapColor from './MapColor';

const AdvancedEuropeMapConfig = ({element, onChange}) => {
    const [tab, setTab] = useState('data');
    const { handleSubmit, control } = useForm({
      defaultValues: {
        json: JSON.stringify(
          element.config.data.map(({ color, id, area, ...rest }) => rest),
          null,
          2
        ),
      },
    });
  
    const onSubmit = async (values) => {
      const { json } = values;
      const realData = JSON.parse(json);
      const data = realData.map((data, index) => ({ ...data, id: index + 1, color: '' }));
      onChange({ ...element, config: { ...element.config, data } });
    };
  return (
    <div className="">
    <Tabs
      variant="bordered"
      aria-label="Options"
      color="primary"
      radius="full"
      classNames={{
        base: 'mb-2 ml-16',
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
      <Tab key="color" title="color" className="text-base">
        <div className="">
            <MapColor
            element={element}
            onChange={onChange}
            />
        </div>
      </Tab>
      <Tab key="setting" title="setting" className="text-base">
        <div className="flex flex-col items-start space-y-5">
          <div className="flex items-center space-x-4 w-full">
            <div className="text flex justify-between items-center w-full my-5">
              <div className="text">
                <h1 className="text">Global Map Color</h1>
                <span className="text-gray-400 text-sm">Local colors will override this setting</span>
              </div>
              <GlobalMapColor element={element} onChange={onChange} />
            </div>
          </div>
          <div className="text flex justify-between items-center w-full my-5">
                <div className="text ">
                  <h1 className="text">Map Details</h1>
                  <span className="text-gray-400 text-sm">Show map details</span>
                </div>
                <Checkbox
              isSelected={element.showDetails}
              classNames={{ base: 'py-0' }}
              onValueChange={(v) => onChange({ ...element,  showDetails: v? true : false })}
            >
              <span className="text ml-3">

              {element.showDetails? "Hide" : "Show"}
              </span>
            </Checkbox>
              </div>
        </div>
      </Tab>
    </Tabs>
  </div>
  )
}
AdvancedEuropeMapConfig.propTypes = ElementPropTypes;
export default AdvancedEuropeMapConfig