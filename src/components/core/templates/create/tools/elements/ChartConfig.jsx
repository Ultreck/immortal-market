import {
  Button,
  Checkbox,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectItem,
  Switch,
  Tab,
  Tabs,
  Textarea,
  useDisclosure,
} from '@nextui-org/react';
import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';
import { capitalize, getKeysFromJson, isValidJsonArray } from '@/lib/utils.js';
import { TbSettings2 } from 'react-icons/tb';
import { useState } from 'react';

const ChartConfig = ({ element, onChange }) => {
  const { isOpen, onOpenChange } = useDisclosure({ defaultOpen: false });

  return (
    <Popover
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="left"
      showArrow
      offset={10}
      classNames={{ content: 'w-[400px]' }}
    >
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Adjust font size" className="text-base">
          <TbSettings2 size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border border-default-200">
        <div className="px-8 py-6 w-full">
          <ChartData element={element} onChange={onChange} onClose={onOpenChange} />
        </div>
      </PopoverContent>
    </Popover>
  );
};

const ChartData = ({ element, onChange, onClose }) => {
  const [tab, setTab] = useState('data');
  const { handleSubmit, watch, control } = useForm({
    defaultValues: {
      json: JSON.stringify(element.config.data, null, 2),
      ...Object.keys(element.config.keys).reduce((acc, key) => {
        acc[key] = element.config.keys[key];
        return acc;
      }, {}),
    },
  });

  const keys = getKeysFromJson(watch().json);

  const onSubmit = async (values) => {
    const { json, ...rest } = values;
    const data = JSON.parse(json);
    onChange({ ...element, config: { ...element.config, keys: rest, data } });
    onClose();
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
            <div className="flex flex-col space-y-6">
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
              <div className="grid grid-cols-2 gap-2">
                {Object.keys(element.config.keys).map((name) => {
                  return (
                    <Controller
                      key={name}
                      name={name}
                      control={control}
                      rules={{ required: `${name} is required` }}
                      render={({ field, fieldState: { error } }) => (
                        <Select
                          name={field.name}
                          label={capitalize(name)}
                          variant="bordered"
                          labelPlacement="outside"
                          placeholder="Select one"
                          size="lg"
                          selectedKeys={field.value ? [field.value] : []}
                          onChange={(e) => field.onChange(e)}
                          errorMessage={error?.message}
                          isInvalid={!!error?.message}
                          classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
                          disableEmptySelection={true}
                        >
                          {keys.map((key) => (
                            <SelectItem key={key} classNames={{ title: 'text-base px-2' }}>
                              {key}
                            </SelectItem>
                          ))}
                        </Select>
                      )}
                    />
                  );
                })}
              </div>
              <div>
                <Button type="submit" variant="solid" radius="full" className="text-base px-4 mt-6">
                  Apply
                </Button>
              </div>
            </div>
          </form>
        </Tab>
        <Tab key="settings" title="Settings" className="text-base">
          <div className="flex flex-col space-y-6">
            {element.type === 'chart-s-line-area' && (
              <>
                <div>
                  <Controller
                    name="showXYaxis"
                    control={control}
                    rules={{ required: `showXYaxis is required` }}
                    render={({ field }) => (
                      <Switch
                        name={field.name}
                        variant="bordered"
                        size="lg"
                        onChange={(e) =>
                          onChange({ ...element, config: { ...element.config, showXYaxis: !!e.target.checked } })
                        }
                      >
                        Show X and Y Axis
                      </Switch>
                    )}
                  />
                </div>
                <div>
                  <Controller
                    name="showLegend"
                    control={control}
                    rules={{ required: `showLegend is required` }}
                    render={({ field }) => (
                      <Switch
                        name={field.name}
                        variant="bordered"
                        size="lg"
                        onChange={(e) =>
                          onChange({ ...element, config: { ...element.config, showLegend: !!e.target.checked } })
                        }
                      >
                        Show Legend
                      </Switch>
                    )}
                  />
                </div>
              </>
            )}
            {element.type === 'chart-s-line-bar' && (
              <>
                <div>
                  <Controller
                    name="showXYaxis"
                    control={control}
                    rules={{ required: `showXYaxis is required` }}
                    render={({ field }) => (
                      <Switch
                        name={field.name}
                        variant="bordered"
                        size="lg"
                        onChange={(e) =>
                          onChange({ ...element, config: { ...element.config, showXYaxis: !!e.target.checked } })
                        }
                      >
                        Show X and Y Axis
                      </Switch>
                    )}
                  />
                </div>
                <div>
                  <Controller
                    name="showLegend"
                    control={control}
                    rules={{ required: `showLegend is required` }}
                    render={({ field }) => (
                      <Switch
                        name={field.name}
                        variant="bordered"
                        size="lg"
                        onChange={(e) =>
                          onChange({ ...element, config: { ...element.config, showLegend: !!e.target.checked } })
                        }
                      >
                        Show Legend
                      </Switch>
                    )}
                  />
                </div>
              </>
            )}
            {element.type === 'chart-s-bar' && (
              <>
                <div>
                  <Controller
                    name="showXYaxis"
                    control={control}
                    rules={{ required: `showXYaxis is required` }}
                    render={({ field }) => (
                      <Checkbox
                        isSelected={element.config.showXYaxis}
                        classNames={{ base: 'py-0' }}
                        onValueChange={(v) => onChange({ ...element, config: { ...element.config, showXYaxis: v } })}
                      >
                        Show X and Y Axis
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
                <div>
                  <Controller
                    name="showGridline"
                    control={control}
                    rules={{ required: `showGridline is required` }}
                    render={({ field }) => (
                      <Checkbox
                        isSelected={element.config.showGridline}
                        classNames={{ base: 'py-0' }}
                        onValueChange={(v) => onChange({ ...element, config: { ...element.config, showGridline: v } })}
                      >
                        Show Grid Line
                      </Checkbox>
                    )}
                  />
                </div>
                {/* <div>
                  <Controller
                    name="swapXYAxis"
                    control={control}
                    rules={{ required: `swapXYAxis is required` }}
                    render={({ field }) => (
                      <Checkbox
                        isSelected={element.config.swapXYAxis}
                        classNames={{ base: 'py-0' }}
                        onValueChange={(v) => onChange({ ...element, config: { ...element.config, swapXYAxis: v } })}
                      >
                        Swap X and Y Axis
                      </Checkbox>
                    )}
                  />
                </div> */}
              </>
            )}
            {element.type === 'chart-s-bar-not-sep' && (
              <>
                <div>
                  <Controller
                    name="showXYaxis"
                    control={control}
                    rules={{ required: `showXYaxis is required` }}
                    render={({ field }) => (
                      <Checkbox
                        isSelected={element.config.showXYaxis}
                        classNames={{ base: 'py-0' }}
                        onValueChange={(v) => onChange({ ...element, config: { ...element.config, showXYaxis: v } })}
                      >
                        Show X and Y Axis
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
                <div>
                  <Controller
                    name="showGridline"
                    control={control}
                    rules={{ required: `showGridline is required` }}
                    render={({ field }) => (
                      <Checkbox
                        isSelected={element.config.showGridline}
                        classNames={{ base: 'py-0' }}
                        onValueChange={(v) => onChange({ ...element, config: { ...element.config, showGridline: v } })}
                      >
                        Show Grid Line
                      </Checkbox>
                    )}
                  />
                </div>
              </>
            )}
            {element.type === 'chart-s-vertical-bar' && (
              <>
                <div>
                  <Controller
                    name="showXYaxis"
                    control={control}
                    rules={{ required: `showXYaxis is required` }}
                    render={({ field }) => (
                      <Checkbox
                        isSelected={element.config.showXYaxis}
                        classNames={{ base: 'py-0' }}
                        onValueChange={(v) => onChange({ ...element, config: { ...element.config, showXYaxis: v } })}
                      >
                        Show X and Y Axis
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
                <div>
                  <Controller
                    name="showGridline"
                    control={control}
                    rules={{ required: `showGridline is required` }}
                    render={({ field }) => (
                      <Checkbox
                        isSelected={element.config.showGridline}
                        classNames={{ base: 'py-0' }}
                        onValueChange={(v) => onChange({ ...element, config: { ...element.config, showGridline: v } })}
                      >
                        Show Grid Line
                      </Checkbox>
                    )}
                  />
                </div>
              </>
            )}
            {element.type === 'chart-s-bar-multiple' && (
              <>
                <div>
                  <Controller
                    name="showXYaxis"
                    control={control}
                    rules={{ required: `showXYaxis is required` }}
                    render={({ field }) => (
                      <Checkbox
                        isSelected={element.config.showXYaxis}
                        classNames={{ base: 'py-0' }}
                        onValueChange={(v) => onChange({ ...element, config: { ...element.config, showXYaxis: v } })}
                      >
                        Show X and Y Axis
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
                <div>
                  <Controller
                    name="showGridline"
                    control={control}
                    rules={{ required: `showGridline is required` }}
                    render={({ field }) => (
                      <Checkbox
                        isSelected={element.config.showGridline}
                        classNames={{ base: 'py-0' }}
                        onValueChange={(v) => onChange({ ...element, config: { ...element.config, showGridline: v } })}
                      >
                        Show Grid Line
                      </Checkbox>
                    )}
                  />
                </div>
              </>
            )}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

const propTypes = {
  element: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    style: PropTypes.object,
    config: PropTypes.object,
  }),
  onChange: PropTypes.func.isRequired,
};

ChartConfig.propTypes = propTypes;

ChartData.propTypes = { ...propTypes, onBack: PropTypes.func, onClose: PropTypes.func };

export default ChartConfig;

