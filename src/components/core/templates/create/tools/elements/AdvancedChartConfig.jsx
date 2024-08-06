import { capitalize } from '@/lib/utils';
import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectItem,
  useDisclosure,
} from '@nextui-org/react';
import { HexAlphaColorPicker } from 'react-colorful';
import { Controller, useForm } from 'react-hook-form';
import { TbChartPie } from 'react-icons/tb';
import PropTypes from 'prop-types';

const AdvancedChartConfig = ({ element, onChange }) => {
  const { isOpen, onOpenChange } = useDisclosure({ defaultOpen: false });
  const { handleSubmit, control } = useForm({
    defaultValues: {
      percentage: element.config.percentage,
    },
  });

  const onSubmit = async (values) => {
    onChange({ ...element, config: { ...element.config, percentage: values.percentage, shape: values.shapes } });
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
          <div className="grid grid-cols-1 gap-2">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <p>Pls enter Percentage</p>
                <Controller
                  name="percentage"
                  control={control}
                  rules={{ required: `percentage is required` }}
                  render={({ field, fieldState: { error } }) => (
                    <Input
                      placeholder="Enter Percentage"
                      size="lg"
                      variant="bordered"
                      className="w-full mt-2"
                      {...field}
                      errorMessage={error?.message}
                      isInvalid={!!error?.message}
                    />
                  )}
                />
              </div>

              <div className="mt-16">
                <Controller
                  name="shapes"
                  control={control}
                  rules={{ required: `shapes is required` }}
                  render={({ field, fieldState: { error } }) => (
                    <Select
                      name={field.name}
                      label={capitalize('shapes')}
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
                      {['circle', 'square', 'triangle', 'star'].map((key) => (
                        <SelectItem key={key} classNames={{ title: 'text-base px-2' }}>
                          {key}
                        </SelectItem>
                      ))}
                    </Select>
                  )}
                />
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

              <Button type="submit" variant="solid" radius="full" className="text-base px-4 mt-6">
                Apply
              </Button>
            </form>
          </div>
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
