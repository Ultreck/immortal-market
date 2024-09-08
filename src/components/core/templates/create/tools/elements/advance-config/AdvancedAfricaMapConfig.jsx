import { isValidJsonArray } from '@/lib/utils';
import { Button, Checkbox, Tab, Tabs, Textarea } from '@nextui-org/react';
import { Controller, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import GlobalMapColor from './GlobalMapColor';
import MapColor from './MapColor';
import PropTypes from 'prop-types';
import { capitalizeFirstLetter, getRandomColor } from '@/lib/constants';
import { namesOfAfricanCountries } from '@/lib/helper';

const AdvancedAfricaMapConfig = ({ element, onChange }) => {
  const [tab, setTab] = useState('create');
  const [errorMessage, seterrorMessage] = useState('');
  const { handleSubmit, control, register, setValue, reset } = useForm({
    defaultValues: {
      json: JSON.stringify(
        element.config.data.map(({  ...rest }) => rest),
        null,
        2
      ),
      label: '',
      value: '',
      color: '',
      id: '',
    },
  });

useEffect(() => {
    setValue(
      'json',
      JSON.stringify(
        element.config.data.map(({ color, id, area, ...rest }) => rest),
        null,
        2
      )
    );
  }, [element]);

  const onSubmit = async (values) => {
    const { json } = values;
    const realData = JSON.parse(json);
    const data = realData.map((data, index) => ({ ...data, id: index + 1, color: getRandomColor() }));
    console.log(data);
    onChange({ ...element, config: { ...element.config, data } });
  };

  const handleAddMapValues = (map) => {
    const { label, value } = map;
    const capitalizedWord = capitalizeFirstLetter(label);
    if(namesOfAfricanCountries.includes(capitalizedWord)){
      const itsExist = element.config.data.find((data) => data.label === label);
      if (!itsExist) {
        const data = {
          label: capitalizedWord,
          value: value + '%',
          id: element.config.data.length + 1,
          color: getRandomColor(),
        };
        onChange({ ...element, config: { ...element.config, data: [...element.config.data, data] } });
        reset();
        seterrorMessage(``);
      } else {
        seterrorMessage(`${label} already exist. Click on data tab to edit it.`);
      }
    }else{
      seterrorMessage(`Invalid name ${label}, please input correct name.`);
    }
  };
  return (
    <div className="">
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
        <Tab key="create" title="Create" className="text-base">
        <form onSubmit={handleSubmit(handleAddMapValues)}>
          <div className="">
          <h1 className="text-lg font-semibold">Enter both value and name of state/country</h1>
            <div className="text my-5">
              <input
                type="text"
                placeholder="Label"
                {...register('label', { required: true })}
                className="border px-2 py-3 w-full rounded-lg mr-2"
              />
              {errorMessage && <small className="text-red-500">{errorMessage}</small>}
            </div>
            <div className="text my-5">
              <input
                type="text"
                placeholder="Value"
                {...register('value', { required: true })}
                className="border px-2 py-3 w-full rounded-lg mr-2"
              />
              {/* {errorMessage &&
              <small className="text-red-500">{errorMessage}</small>
              } */}
            </div>
            <div className="text">
              <Button
                type="submit"
                variant="solid"
                radius="full"
                color="primary"
                className="text-base px-4 mt-3 w-32"
              >
                Add
              </Button>
            </div>
          </div>
        </form>
      </Tab>
      {element.config.data.length > 0 && (
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
                      // classNames={{ inputWrapper: 'px-5 py-5' }}
                      classNames={{
                        base: 'max-w-lg',
                        input: 'resize-y min-h-[25vh]',
                      }}
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
            <Button type="submit" variant="solid" radius="full" color="primary" className="text-base px-4 mt-5 w-32">
              Update
            </Button>
          </form>
        </Tab>
      )}
      {element.config.data.length > 0 && (
        <Tab key="color" title="color" className="text-base">
          <div className="">
            <MapColor element={element} onChange={onChange} />
          </div>
        </Tab>
      )}
      <Tab key="setting" title="setting" className="text-base">
        <div className="flex flex-col bg-gray-100 dark:bg-slate-900 items-start px-3 space-y-5">
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
              <h1 className="text">Map Labels</h1>
              <span className="text-gray-400 text-sm">Show map labels</span>
            </div>
            <Checkbox
              isSelected={element.showLabels}
              classNames={{ base: 'py-0' }}
              onValueChange={(v) => onChange({ ...element, showLabels: !!v  })}
            >
              <span className="text ml-3">{element.showLabels ? 'Hide' : 'Show'}</span>
            </Checkbox>
          </div>
          <div className="text flex justify-between items-center w-full my-5">
            <div className="text ">
              <h1 className="text">Map Values</h1>
              <span className="text-gray-400 text-sm">Show map values</span>
            </div>
            <Checkbox
              isSelected={element.showValues}
              classNames={{ base: 'py-0' }}
              onValueChange={(v) => onChange({ ...element, showValues: v ? true : false })}
            >
              <span className="text ml-3">{element.showValues ? 'Hide' : 'Show'}</span>
            </Checkbox>
          </div>
        </div>
      </Tab>
    </Tabs>
  </div>);
};

AdvancedAfricaMapConfig.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AdvancedAfricaMapConfig;
