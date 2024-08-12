import { capitalize, getKeysFromJson, isValidJsonArray } from '@/lib/utils';
import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectItem,
  Slider,
  Checkbox,
  useDisclosure,
  Textarea,
} from '@nextui-org/react';
import { HexAlphaColorPicker } from 'react-colorful';
import { Controller, useForm } from 'react-hook-form';
import { TbChartPie } from 'react-icons/tb';
import PropTypes from 'prop-types';

const AdvancedChartConfig = ({ element, onChange }) => {
  const { isOpen, onOpenChange } = useDisclosure({ defaultOpen: false });
  const { handleSubmit, control, watch } = useForm({
    defaultValues: {
      percentage: element.config.percentage,
      shape: element.config.shape,
      shapeCount: element.config.shapeCount || 10,
      showCount: element.config.showCount || false,
      countFormat: element.config.countFormat || 'fraction',
      titlePosition: element.config.titlePosition || 'top',
      json: JSON.stringify(element.config.data, null, 2),
      ...Object.keys(element.config.keys).reduce((acc, key) => {
        acc[key] = element.config.keys[key];
        return acc;
      }, {}),
    },
  });

  const keys = getKeysFromJson(watch().json);

  const onSubmit = async (values) => {
    onChange({ ...element, config: { ...element.config, ...values, shape: values.shapes } });
  };

  const onBtnSubmit = async (values) => {
    const { json, ...rest } = values;
    const data = JSON.parse(json);
    onChange({ ...element, config: { ...element.config, data } });
  };
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
          <TbChartPie size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border border-default-200">
        <div className="px-8 py-6 w-full h-[500px] overflow-y-auto">
          {element.type === 'chart-10-shapes' && (
            <div className="grid grid-cols-1 gap-2">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <Slider
                    label="Percentage"
                    step={10}
                    maxValue={100}
                    minValue={10}
                    marks={[
                      { value: 10, label: '10' },
                      { value: 20, label: '20' },
                      { value: 30, label: '30' },
                      { value: 40, label: '40' },
                      { value: 50, label: '50' },
                      { value: 60, label: '60' },
                      { value: 70, label: '70' },
                      { value: 80, label: '80' },
                      { value: 90, label: '90' },
                      { value: 100, label: '100' },
                    ]}
                    className="max-w-md"
                    onChange={(e) => onChange({ ...element, config: { ...element.config, percentage: e } })}
                    value={element.config.percentage}
                  />
                </div>

                {element.type === 'chart-10-shapes' && (
                  <div className="mt-20">
                    <Select
                      name="shapes"
                      label={capitalize('shapes')}
                      variant="bordered"
                      labelPlacement="outside"
                      placeholder="Select one"
                      size="lg"
                      selectedKeys={element.config.shape ? [element.config.shape] : []}
                      onChange={(e) => onChange({ ...element, config: { ...element.config, shape: e.target.value } })}
                      classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
                      disableEmptySelection={true}
                    >
                      {['circle', 'square', 'triangle', 'star', 'hexagon', 'pentagon', 'hexagonpyramid', 'octagon'].map(
                        (key) => (
                          <SelectItem key={key} classNames={{ title: 'text-base px-2' }}>
                            {key}
                          </SelectItem>
                        )
                      )}
                    </Select>
                  </div>
                )}

                {element.type === 'chart-gender-stats' && (
                  <div className="mt-20">
                    <Select
                      name="shapes"
                      label={capitalize('shapes')}
                      variant="bordered"
                      labelPlacement="outside"
                      placeholder="Select one"
                      size="lg"
                      selectedKeys={element.config.shape ? [element.config.shape] : []}
                      onChange={(e) => onChange({ ...element, config: { ...element.config, shape: e.target.value } })}
                      classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
                      disableEmptySelection={true}
                    >
                      {['male', 'female', 'both'].map((key) => (
                        <SelectItem key={key} classNames={{ title: 'text-base px-2' }}>
                          {key}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-10 mt-10">
                  <div className="">
                    <Select
                      name="countFormat"
                      label="Count Format"
                      variant="bordered"
                      labelPlacement="outside"
                      placeholder="Select format"
                      size="lg"
                      selectedKeys={element.config.countFormat ? [element.config.countFormat] : []}
                      onChange={(e) =>
                        onChange({ ...element, config: { ...element.config, countFormat: e.target.value } })
                      }
                      classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
                      disableEmptySelection={true}
                    >
                      <SelectItem key="fraction" classNames={{ title: 'text-base px-2' }}>
                        Fraction (n/10)
                      </SelectItem>
                      <SelectItem key="percentage" classNames={{ title: 'text-base px-2' }}>
                        Percentage (n%)
                      </SelectItem>
                    </Select>
                  </div>
                  <div className="">
                    <Select
                      name="titlePosition"
                      label="Title Position"
                      variant="bordered"
                      labelPlacement="outside"
                      placeholder="Select position"
                      size="lg"
                      selectedKeys={element.config.titlePosition ? [element.config.titlePosition] : []}
                      classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
                      disableEmptySelection={true}
                      onChange={(e) =>
                        onChange({ ...element, config: { ...element.config, titlePosition: e.target.value } })
                      }
                    >
                      <SelectItem key="top" classNames={{ title: 'text-base px-2' }}>
                        Top
                      </SelectItem>
                      <SelectItem key="bottom" classNames={{ title: 'text-base px-2' }}>
                        Bottom
                      </SelectItem>
                    </Select>
                  </div>
                </div>

                <div className="mt-10">
                  <p>Chart Title</p>
                  <Textarea
                    placeholder="Enter Chart Title"
                    size="lg"
                    variant="bordered"
                    className="w-full mt-2"
                    onChange={(e) => onChange({ ...element, config: { ...element.config, title: e.target.value } })}
                    value={element.config.title}
                    minRows={1}
                  />
                </div>

                <div className="mt-10">
                  <Slider
                    label="Shape Count"
                    step={10}
                    maxValue={100}
                    minValue={10}
                    marks={[
                      { value: 10, label: '10' },
                      { value: 20, label: '20' },
                      { value: 50, label: '50' },
                      { value: 100, label: '100' },
                    ]}
                    className="max-w-md"
                    onChange={(e) => onChange({ ...element, config: { ...element.config, shapeCount: e } })}
                    value={element.config.shapeCount}
                  />
                </div>

                <div className="mt-16">
                  <Checkbox
                    isSelected={element.config.showCount}
                    onValueChange={(v) => onChange({ ...element, config: { ...element.config, showCount: v } })}
                  >
                    Show Count
                  </Checkbox>
                </div>

                <div className="mt-8">
                  <HexAlphaColorPicker
                    color={element.config.color}
                    onChange={(color) =>
                      onChange({
                        ...element,
                        config: { ...element.config, color },
                      })
                    }
                  />
                </div>
              </form>
            </div>
          )}
          {element.type === 'chart-gender-stats' && (
            <div className="grid grid-cols-1 gap-2">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <Slider
                    label="Percentage"
                    step={10}
                    maxValue={100}
                    minValue={10}
                    marks={[
                      { value: 10, label: '10' },
                      { value: 20, label: '20' },
                      { value: 30, label: '30' },
                      { value: 40, label: '40' },
                      { value: 50, label: '50' },
                      { value: 60, label: '60' },
                      { value: 70, label: '70' },
                      { value: 80, label: '80' },
                      { value: 90, label: '90' },
                      { value: 100, label: '100' },
                    ]}
                    className="max-w-md"
                    onChange={(e) => onChange({ ...element, config: { ...element.config, percentage: e } })}
                    value={element.config.percentage}
                  />
                </div>

                {element.type === 'chart-10-shapes' && (
                  <div className="mt-20">
                    <Select
                      name="shapes"
                      label={capitalize('shapes')}
                      variant="bordered"
                      labelPlacement="outside"
                      placeholder="Select one"
                      size="lg"
                      selectedKeys={element.config.shape ? [element.config.shape] : []}
                      onChange={(e) => onChange({ ...element, config: { ...element.config, shape: e.target.value } })}
                      classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
                      disableEmptySelection={true}
                    >
                      {['circle', 'square', 'triangle', 'star', 'hexagon', 'pentagon', 'hexagonpyramid', 'octagon'].map(
                        (key) => (
                          <SelectItem key={key} classNames={{ title: 'text-base px-2' }}>
                            {key}
                          </SelectItem>
                        )
                      )}
                    </Select>
                  </div>
                )}

                {element.type === 'chart-gender-stats' && (
                  <div className="mt-20">
                    <Select
                      name="shapes"
                      label={capitalize('shapes')}
                      variant="bordered"
                      labelPlacement="outside"
                      placeholder="Select one"
                      size="lg"
                      selectedKeys={element.config.shape ? [element.config.shape] : []}
                      onChange={(e) => onChange({ ...element, config: { ...element.config, shape: e.target.value } })}
                      classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
                      disableEmptySelection={true}
                    >
                      {['male', 'female', 'both'].map((key) => (
                        <SelectItem key={key} classNames={{ title: 'text-base px-2' }}>
                          {key}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-10 mt-10">
                  <div className="">
                    <Select
                      name="countFormat"
                      label="Count Format"
                      variant="bordered"
                      labelPlacement="outside"
                      placeholder="Select format"
                      size="lg"
                      selectedKeys={element.config.countFormat ? [element.config.countFormat] : []}
                      onChange={(e) =>
                        onChange({ ...element, config: { ...element.config, countFormat: e.target.value } })
                      }
                      classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
                      disableEmptySelection={true}
                    >
                      <SelectItem key="fraction" classNames={{ title: 'text-base px-2' }}>
                        Fraction (n/10)
                      </SelectItem>
                      <SelectItem key="percentage" classNames={{ title: 'text-base px-2' }}>
                        Percentage (n%)
                      </SelectItem>
                    </Select>
                  </div>
                  <div className="">
                    <Select
                      name="titlePosition"
                      label="Title Position"
                      variant="bordered"
                      labelPlacement="outside"
                      placeholder="Select position"
                      size="lg"
                      selectedKeys={element.config.titlePosition ? [element.config.titlePosition] : []}
                      classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
                      disableEmptySelection={true}
                      onChange={(e) =>
                        onChange({ ...element, config: { ...element.config, titlePosition: e.target.value } })
                      }
                    >
                      <SelectItem key="top" classNames={{ title: 'text-base px-2' }}>
                        Top
                      </SelectItem>
                      <SelectItem key="bottom" classNames={{ title: 'text-base px-2' }}>
                        Bottom
                      </SelectItem>
                    </Select>
                  </div>
                </div>

                <div className="mt-10">
                  <p>Chart Title</p>
                  <Textarea
                    placeholder="Enter Chart Title"
                    size="lg"
                    variant="bordered"
                    className="w-full mt-2"
                    onChange={(e) => onChange({ ...element, config: { ...element.config, title: e.target.value } })}
                    value={element.config.title}
                    minRows={1}
                  />
                </div>

                <div className="mt-10">
                  <Slider
                    label="Shape Count"
                    step={10}
                    maxValue={100}
                    minValue={10}
                    marks={[
                      { value: 10, label: '10' },
                      { value: 20, label: '20' },
                      { value: 50, label: '50' },
                      { value: 100, label: '100' },
                    ]}
                    className="max-w-md"
                    onChange={(e) => onChange({ ...element, config: { ...element.config, shapeCount: e } })}
                    value={element.config.shapeCount}
                  />
                </div>

                <div className="mt-16">
                  <Checkbox
                    isSelected={element.config.showCount}
                    onValueChange={(v) => onChange({ ...element, config: { ...element.config, showCount: v } })}
                  >
                    Show Count
                  </Checkbox>
                </div>

                <div className="mt-8">
                  <HexAlphaColorPicker
                    color={element.config.color}
                    onChange={(color) =>
                      onChange({
                        ...element,
                        config: { ...element.config, color },
                      })
                    }
                  />
                </div>
              </form>
            </div>
          )}
          {element.type === 'chart-funnel' && (
            <form onSubmit={handleSubmit(onBtnSubmit)}>
            <div>
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
              </div>

              <Button type="submit" variant="solid" radius="full" className="text-base px-4 mt-6">
                Apply
              </Button>
            </div>
            </form>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};

AdvancedChartConfig.propTypes = {
  element: PropTypes.shape({
    config: PropTypes.shape({
      percentage: PropTypes.number,
      shape: PropTypes.string,
      color: PropTypes.string,
    }),
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AdvancedChartConfig;

