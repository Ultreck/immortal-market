import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectItem,
  Textarea,
  useDisclosure,
} from '@nextui-org/react';
import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';
import { capitalize, getKeysFromJson, isValidJsonArray } from '@/lib/utils.js';
import { TbChartPie } from 'react-icons/tb';

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
          <TbChartPie size="20" />
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

  return (
    <>
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
