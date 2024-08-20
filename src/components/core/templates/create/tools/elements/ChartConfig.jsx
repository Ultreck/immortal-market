import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectItem,
  Switch,
  Textarea,
  useDisclosure,
} from '@nextui-org/react';
import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';
import { capitalize, getKeysFromJson, isValidJsonArray } from '@/lib/utils.js';
import { TbSettings2 } from 'react-icons/tb';
import { useState } from 'react';
import { HexAlphaColorPicker } from 'react-colorful';

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

  const [selectedIndex, setSelectedIndex] = useState(null);
  const colors = element.config.colors || {};

  const updateColor = (color) => {
    if (selectedIndex !== null) {
      const newColors = { ...colors, [selectedIndex]: color };
      onChange({ ...element, config: { ...element.config, colors: newColors } });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="h-[300px] overflow-y-auto">
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

          {element.type === 'chart-pie' && (
            <div className="mt-4">
              <Select label="Select slice to change color" onChange={(e) => setSelectedIndex(Number(e.target.value))}>
                {element.config.data.map((item, index) => (
                  <SelectItem key={index} value={index}>
                    {item[element.config.keys.name]}
                  </SelectItem>
                ))}
              </Select>
              {selectedIndex !== null && (
                <div className="mt-2">
                  <HexAlphaColorPicker
                    color={colors[selectedIndex] || defaultColors[selectedIndex % defaultColors.length]}
                    onChange={updateColor}
                  />
                </div>
              )}
            </div>
          )}
          {element.type === 'chart-line' && (
            <div>
              <Controller
                name="type"
                control={control}
                rules={{ required: `type is required` }}
                render={({ field, fieldState: { error } }) => (
                  <Select
                    name={field.name}
                    label="Type"
                    variant="bordered"
                    labelPlacement="outside"
                    placeholder="Select one"
                    size="lg"
                    selectedKeys={element.config.type ? [element.config.type] : []}
                    onChange={(e) => onChange({ ...element, config: { ...element.config, type: e.target.value } })}
                    errorMessage={error?.message}
                    isInvalid={!!error?.message}
                    classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
                    disableEmptySelection={true}
                  >
                    <SelectItem key="line" classNames={{ title: 'text-base px-2' }}>
                      Line
                    </SelectItem>
                    <SelectItem key="multiple" classNames={{ title: 'text-base px-2' }}>
                      Multiple
                    </SelectItem>
                  </Select>
                )}
              />
              <div className="mt-4">
                <Select label="Select item to change color" onChange={(e) => setSelectedIndex(Number(e.target.value))}>
                  {['Line 1', 'Line 2'].map((item, index) => (
                    <SelectItem key={index} value={index}>
                      {item}
                    </SelectItem>
                  ))}
                </Select>
                {selectedIndex !== null && (
                  <div className="mt-2">
                    <HexAlphaColorPicker color={colors[selectedIndex] || '#000000'} onChange={updateColor} />
                  </div>
                )}
              </div>
            </div>
          )}
          {element.type === 'chart-area' && (
            <div>
              <Controller
                name="type"
                control={control}
                rules={{ required: `type is required` }}
                render={({ field, fieldState: { error } }) => (
                  <Select
                    name={field.name}
                    label="Type"
                    variant="bordered"
                    labelPlacement="outside"
                    placeholder="Select one"
                    size="lg"
                    selectedKeys={element.config.type ? [element.config.type] : []}
                    onChange={(e) => onChange({ ...element, config: { ...element.config, type: e.target.value } })}
                    errorMessage={error?.message}
                    isInvalid={!!error?.message}
                    classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
                    disableEmptySelection={true}
                  >
                    <SelectItem key="line" classNames={{ title: 'text-base px-2' }}>
                      Line
                    </SelectItem>
                    <SelectItem key="multiple" classNames={{ title: 'text-base px-2' }}>
                      Multiple
                    </SelectItem>
                  </Select>
                )}
              />

              <div className="mt-4">
                <Select label="Select item to change color" onChange={(e) => setSelectedIndex(Number(e.target.value))}>
                  {['Line 1', 'Line 2'].map((item, index) => (
                    <SelectItem key={index} value={index}>
                      {item}
                    </SelectItem>
                  ))}
                </Select>
                {selectedIndex !== null && (
                  <div className="mt-2">
                    <HexAlphaColorPicker color={colors[selectedIndex] || '#000000'} onChange={updateColor} />
                  </div>
                )}
              </div>
            </div>
          )}
          {element.type === 'chart-doughnut' && (
            <div>
              <Controller
                name="type"
                control={control}
                rules={{ required: `type is required` }}
                render={({ field, fieldState: { error } }) => (
                  <Select
                    name={field.name}
                    label="Type"
                    variant="bordered"
                    labelPlacement="outside"
                    placeholder="Select one"
                    size="lg"
                    selectedKeys={element.config.type ? [element.config.type] : []}
                    onChange={(e) => onChange({ ...element, config: { ...element.config, type: e.target.value } })}
                    errorMessage={error?.message}
                    isInvalid={!!error?.message}
                    classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
                    disableEmptySelection={true}
                  >
                    <SelectItem key="normal" classNames={{ title: 'text-base px-2' }}>
                      Normal
                    </SelectItem>
                    <SelectItem key="standard" classNames={{ title: 'text-base px-2' }}>
                      Standard
                    </SelectItem>
                    <SelectItem key="crazy" classNames={{ title: 'text-base px-2' }}>
                      Crazy
                    </SelectItem>
                  </Select>
                )}
              />
            </div>
          )}
          {element.type === 'chart-line-area' && (
            <>
              <div className="">
                <Controller
                  name="orientation"
                  control={control}
                  rules={{ required: `orientation is required` }}
                  render={({ field, fieldState: { error } }) => (
                    <Select
                      name={field.name}
                      label="Orientation"
                      variant="bordered"
                      labelPlacement="outside"
                      placeholder="Select one"
                      size="lg"
                      selectedKeys={element.config.orientation ? [element.config.orientation] : []}
                      onChange={(e) =>
                        onChange({ ...element, config: { ...element.config, orientation: e.target.value } })
                      }
                      errorMessage={error?.message}
                      isInvalid={!!error?.message}
                      classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
                      disableEmptySelection={true}
                    >
                      <SelectItem key="vertical" classNames={{ title: 'text-base px-2' }}>
                        Vertical
                      </SelectItem>
                      <SelectItem key="horizontal" classNames={{ title: 'text-base px-2' }}>
                        Horizontal
                      </SelectItem>
                    </Select>
                  )}
                />
              </div>
              <div className="mt-4">
                <Select label="Select item to change color" onChange={(e) => setSelectedIndex(Number(e.target.value))}>
                  {['Area', 'Line'].map((item, index) => (
                    <SelectItem key={index} value={index}>
                      {item}
                    </SelectItem>
                  ))}
                </Select>
                {selectedIndex !== null && (
                  <div className="mt-2">
                    <HexAlphaColorPicker color={colors[selectedIndex] || '#000000'} onChange={updateColor} />
                  </div>
                )}
              </div>
              <div>
                <Controller
                  name="showXYaxis"
                  control={control}
                  rules={{ required: `showXYaxis is required` }}
                  render={({ field, fieldState: { error } }) => (
                    <Switch
                      name={field.name}
                      label="Show X and Y Axis"
                      variant="bordered"
                      labelPlacement="outside"
                      placeholder="Select one"
                      size="lg"
                      selectedKeys={element.config.showXYaxis ? [element.config.showXYaxis] : []}
                      onChange={(e) =>
                        onChange({ ...element, config: { ...element.config, showXYaxis: !!e.target.checked } })
                      }
                      errorMessage={error?.message}
                      isInvalid={!!error?.message}
                      classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
                      disableEmptySelection={true}
                    >
                      Show Legend
                    </Switch>
                  )}
                />
              </div>
              <div>
                <Controller
                  name="showLegend"
                  control={control}
                  rules={{ required: `showLegend is required` }}
                  render={({ field, fieldState: { error } }) => (
                    <Switch
                      name={field.name}
                      label="Show Legend"
                      variant="bordered"
                      labelPlacement="outside"
                      placeholder="Select one"
                      size="lg"
                      selectedKeys={element.config.showLegend ? [element.config.showLegend] : []}
                      onChange={(e) =>
                        onChange({ ...element, config: { ...element.config, showLegend: !!e.target.checked } })
                      }
                      errorMessage={error?.message}
                      isInvalid={!!error?.message}
                      classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
                      disableEmptySelection={true}
                    >
                      Show Legend
                    </Switch>
                  )}
                />
              </div>
            </>
          )}
          {element.type === 'chart-line-bar' && (
            <>
              <div className="">
                <Controller
                  name="orientation"
                  control={control}
                  rules={{ required: `orientation is required` }}
                  render={({ field, fieldState: { error } }) => (
                    <Select
                      name={field.name}
                      label="Orientation"
                      variant="bordered"
                      labelPlacement="outside"
                      placeholder="Select one"
                      size="lg"
                      selectedKeys={element.config.orientation ? [element.config.orientation] : []}
                      onChange={(e) =>
                        onChange({ ...element, config: { ...element.config, orientation: e.target.value } })
                      }
                      errorMessage={error?.message}
                      isInvalid={!!error?.message}
                      classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
                      disableEmptySelection={true}
                    >
                      <SelectItem key="vertical" classNames={{ title: 'text-base px-2' }}>
                        Vertical
                      </SelectItem>
                      <SelectItem key="horizontal" classNames={{ title: 'text-base px-2' }}>
                        Horizontal
                      </SelectItem>
                    </Select>
                  )}
                />
              </div>
              <div className="mt-4">
                <Select label="Select item to change color" onChange={(e) => setSelectedIndex(Number(e.target.value))}>
                  {['Bar', 'Line'].map((item, index) => (
                    <SelectItem key={index} value={index}>
                      {item}
                    </SelectItem>
                  ))}
                </Select>
                {selectedIndex !== null && (
                  <div className="mt-2">
                    <HexAlphaColorPicker color={colors[selectedIndex] || '#000000'} onChange={updateColor} />
                  </div>
                )}
              </div>
              <div>
                <Controller
                  name="showXYaxis"
                  control={control}
                  rules={{ required: `showXYaxis is required` }}
                  render={({ field, fieldState: { error } }) => (
                    <Switch
                      name={field.name}
                      label="Show X and Y Axis"
                      variant="bordered"
                      labelPlacement="outside"
                      placeholder="Select one"
                      size="lg"
                      selectedKeys={element.config.showXYaxis ? [element.config.showXYaxis] : []}
                      onChange={(e) =>
                        onChange({ ...element, config: { ...element.config, showXYaxis: !!e.target.checked } })
                      }
                      errorMessage={error?.message}
                      isInvalid={!!error?.message}
                      classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
                      disableEmptySelection={true}
                    >
                      Show Legend
                    </Switch>
                  )}
                />
              </div>
              <div>
                <Controller
                  name="showLegend"
                  control={control}
                  rules={{ required: `showLegend is required` }}
                  render={({ field, fieldState: { error } }) => (
                    <Switch
                      name={field.name}
                      label="Show Legend"
                      variant="bordered"
                      labelPlacement="outside"
                      placeholder="Select one"
                      size="lg"
                      selectedKeys={element.config.showLegend ? [element.config.showLegend] : []}
                      onChange={(e) =>
                        onChange({ ...element, config: { ...element.config, showLegend: !!e.target.checked } })
                      }
                      errorMessage={error?.message}
                      isInvalid={!!error?.message}
                      classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
                      disableEmptySelection={true}
                    >
                      Show Legend
                    </Switch>
                  )}
                />
              </div>
            </>
          )}
          {element.type === 'chart-bar' && (
            <>
              <div className="">
                <Controller
                  name="orientation"
                  control={control}
                  rules={{ required: `orientation is required` }}
                  render={({ field, fieldState: { error } }) => (
                    <Select
                      name={field.name}
                      label="Orientation"
                      variant="bordered"
                      labelPlacement="outside"
                      placeholder="Select one"
                      size="lg"
                      selectedKeys={element.config.orientation ? [element.config.orientation] : []}
                      onChange={(e) =>
                        onChange({ ...element, config: { ...element.config, orientation: e.target.value } })
                      }
                      errorMessage={error?.message}
                      isInvalid={!!error?.message}
                      classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
                      disableEmptySelection={true}
                    >
                      <SelectItem key="vertical" classNames={{ title: 'text-base px-2' }}>
                        Vertical
                      </SelectItem>
                      <SelectItem key="horizontal" classNames={{ title: 'text-base px-2' }}>
                        Horizontal
                      </SelectItem>
                    </Select>
                  )}
                />
              </div>
              <div className="mt-4">
                <Select label="Select item to change color" onChange={(e) => setSelectedIndex(Number(e.target.value))}>
                  {element.config.data.map((item, index) => (
                    <SelectItem key={index} value={index}>
                      {item[element.config.keys.x]}
                    </SelectItem>
                  ))}
                </Select>
                {selectedIndex !== null && (
                  <div className="mt-2">
                    <HexAlphaColorPicker color={colors[selectedIndex] || '#000000'} onChange={updateColor} />
                  </div>
                )}
              </div>
              <div>
                <Controller
                  name="showXYaxis"
                  control={control}
                  rules={{ required: `showXYaxis is required` }}
                  render={({ field, fieldState: { error } }) => (
                    <Switch
                      name={field.name}
                      label="Show X and Y Axis"
                      variant="bordered"
                      labelPlacement="outside"
                      placeholder="Select one"
                      size="lg"
                      selectedKeys={element.config.showXYaxis ? [element.config.showXYaxis] : []}
                      onChange={(e) =>
                        onChange({ ...element, config: { ...element.config, showXYaxis: !!e.target.checked } })
                      }
                      errorMessage={error?.message}
                      isInvalid={!!error?.message}
                      classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
                      disableEmptySelection={true}
                    >
                      Show Legend
                    </Switch>
                  )}
                />
              </div>
              <div>
                <Controller
                  name="showLegend"
                  control={control}
                  rules={{ required: `showLegend is required` }}
                  render={({ field, fieldState: { error } }) => (
                    <Switch
                      name={field.name}
                      label="Show Legend"
                      variant="bordered"
                      labelPlacement="outside"
                      placeholder="Select one"
                      size="lg"
                      selectedKeys={element.config.showLegend ? [element.config.showLegend] : []}
                      onChange={(e) =>
                        onChange({ ...element, config: { ...element.config, showLegend: !!e.target.checked } })
                      }
                      errorMessage={error?.message}
                      isInvalid={!!error?.message}
                      classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
                      disableEmptySelection={true}
                    >
                      Show Legend
                    </Switch>
                  )}
                />
              </div>
            </>
          )}
        </div>
        <Button type="submit" variant="solid" radius="full" className="text-base px-4 mt-6">
          Apply
        </Button>
      </form>
    </>
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
