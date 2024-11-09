import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
} from '@nextui-org/react';
import { RiSettingsLine } from 'react-icons/ri';
import { Controller, useForm } from 'react-hook-form';
import NumberInput from '@/components/ui/NumberInput.jsx';
import PropTypes from 'prop-types';
import useTemplateStore from '@/store/template.js';
import { capitalize } from '@/lib/utils.js';

const columns = [{ key: 'default', label: 'Default' }];

const groups = [
  { key: 'rank', label: 'Rank' },
  { key: 'sum', label: 'Sum' },
  { key: 'average', label: 'Average' },
  { key: 'min', label: 'Min' },
  { key: 'max', label: 'Max' },
];

const orders = [
  { key: 'all', label: 'All' },
  { key: 'top-1', label: 'Top 1' },
  { key: 'top-2', label: 'Top 2' },
  { key: 'top-3', label: 'Top 3' },
  { key: 'top-4', label: 'Top 4' },
  { key: 'top-5', label: 'Top 5' },
  { key: 'top-6', label: 'Top 6' },
  { key: 'top-7', label: 'Top 7' },
  { key: 'bottom-3', label: 'Bottom 3' },
  { key: 'bottom-2', label: 'Bottom 2' },
  { key: 'bottom-1', label: 'Bottom 1' },
];

const combinations = groups
  .map((group) => {
    return orders.map((order) => ({
      key: `${group.key}/${order.key}`,
      label: `${group.label} (${order.label})`,
    }));
  })
  .flat();

const units = [
  { key: 'percent', label: 'Percent (%)' },
  { key: 'currency', label: 'Currency ($)' },
];

const DataTagConfig = ({ element, onChange }) => {
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const openTool = useTemplateStore((state) => state.template.openTool);

  const { handleSubmit, control, watch } = useForm({
    defaultValues: {
      column: element.config.column || '',
      type: element.config.type || '',
      decimal: element.config.decimal || 2,
      unit: element.config.unit || '',
      characters: element.config.characters || 150,
      combination: element.config.combination || '',
      compare: element.config.compare || [],
    },
  });

  const onSubmit = (data) => {
    let content = '';
    if (data.type === 'text') {
      const [g1, o1] = data.compare[0].combination.split('/');
      const [g2, o2] = data.compare[1].combination.split('/');
      content = `Comparison of ${capitalize(g1)} (${capitalize(o1.replace('-', ' '))}) and ${capitalize(g2)} (${capitalize(o2.replace('-', ' '))})`;
    }
    if (data.type === 'number') {
      const [group, order] = data.combination.split('/');
      content = `${capitalize(group)} (${capitalize(order.replace('-', ' '))})`;
    }
    onChange({
      ...element,
      config: {
        ...element.config,
        column: data.column,
        group: data.group,
        order: data.order,
        type: data.type,
        decimal: data.decimal,
        unit: data.unit,
        characters: data.characters,
        combination: data.combination || element.config.combination,
        compare: data.compare || element.config.compare,
        content,
      },
    });
  };

  return (
    <Popover
      placement="left"
      showArrow
      offset={10}
      isOpen={openTool === 'data-tag'}
      onOpenChange={(v) => updateTemplate({ openTool: v ? 'data-tag' : null })}
    >
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Data config" className="text-base">
          <RiSettingsLine size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="px-8 py-8 shadow border border-default-200 w-[350px] items-stretch">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col space-y-6">
            <Controller
              name="column"
              control={control}
              rules={{ required: 'Column is required' }}
              render={({ field, fieldState: { error } }) => (
                <div>
                  <Select
                    label="Column"
                    labelPlacement="outside"
                    variant="bordered"
                    placeholder="Select column"
                    size="lg"
                    selectedKeys={field.value ? [field.value] : []}
                    onChange={(e) => field.onChange(e)}
                    errorMessage={error?.message}
                    isInvalid={!!error?.message}
                    classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
                    disableEmptySelection={true}
                  >
                    {columns.map((role) => (
                      <SelectItem key={role.key} classNames={{ title: 'text-base px-2' }}>
                        {role.label}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
              )}
            />
            <hr className="border-default-200 dark:border-default-100" />
            <div className="flex items-center space-x-4">
              <p className="text-base leading-tight">Type:</p>
              <Controller
                name="type"
                control={control}
                render={({ field, fieldState: { error } }) => {
                  return (
                    <RadioGroup
                      orientation="horizontal"
                      value={field.value}
                      onValueChange={(v) => field.onChange({ target: { value: v } })}
                      errorMessage={error?.message}
                      isInvalid={!!error?.message}
                    >
                      <Radio value="number">Number</Radio>
                      <Radio value="text">Text</Radio>
                    </RadioGroup>
                  );
                }}
              />
            </div>
            <hr className="border-default-200 dark:border-default-100" />
            {watch().type === 'text' && (
              <>
                <div className="space-y-2">
                  <Controller
                    name="compare[0].combination"
                    control={control}
                    rules={{ required: 'Combination is required' }}
                    render={({ field, fieldState: { error } }) => (
                      <div className="flex-1">
                        <Select
                          label="Combination"
                          labelPlacement="outside"
                          variant="bordered"
                          placeholder="Select one"
                          size="lg"
                          selectedKeys={field.value ? [field.value] : []}
                          onChange={(e) => field.onChange(e)}
                          errorMessage={error?.message}
                          isInvalid={!!error?.message}
                          classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
                          disableEmptySelection={true}
                        >
                          {combinations.map((role) => (
                            <SelectItem key={role.key} classNames={{ title: 'text-base px-2' }}>
                              {role.label}
                            </SelectItem>
                          ))}
                        </Select>
                      </div>
                    )}
                  />
                  <p className="text-center border border-default-200 rounded-full w-max px-3 py-1 mx-auto">VS</p>
                  <Controller
                    name="compare[1].combination"
                    control={control}
                    rules={{ required: 'Combination is required' }}
                    render={({ field, fieldState: { error } }) => (
                      <div className="flex-1">
                        <Select
                          label="Combination"
                          labelPlacement="outside"
                          variant="bordered"
                          placeholder="Select one"
                          size="lg"
                          selectedKeys={field.value ? [field.value] : []}
                          onChange={(e) => field.onChange(e)}
                          errorMessage={error?.message}
                          isInvalid={!!error?.message}
                          classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
                          disableEmptySelection={true}
                        >
                          {combinations.map((role) => (
                            <SelectItem key={role.key} classNames={{ title: 'text-base px-2' }}>
                              {role.label}
                            </SelectItem>
                          ))}
                        </Select>
                      </div>
                    )}
                  />
                </div>
                <hr className="border-default-200 dark:border-default-100" />
                <div className="flex flex-row justify-between items-center space-x-4">
                  <p className="text-base leading-tight">No. of characters:</p>
                  <Controller
                    name="characters"
                    control={control}
                    rules={{
                      required: 'No. of characters is required',
                      validate: (value) => value > 0,
                    }}
                    render={({ field, fieldState: { error } }) => {
                      const message = error?.type === 'validate' ? 'No. of characters is required' : error?.message;
                      return (
                        <NumberInput
                          variant="bordered"
                          value={field.value}
                          onChange={field.onChange}
                          ariaLabel="No. of characters"
                          min={1}
                          max={100}
                          step={1}
                          errorMessage={message}
                          isInvalid={!!message}
                        />
                      );
                    }}
                  />
                </div>
              </>
            )}
            {watch().type === 'number' && (
              <>
                <Controller
                  name="combination"
                  control={control}
                  rules={{ required: 'Combination is required' }}
                  render={({ field, fieldState: { error } }) => (
                    <div className="flex-1">
                      <Select
                        label="Combination"
                        labelPlacement="outside"
                        variant="bordered"
                        placeholder="Select one"
                        size="lg"
                        selectedKeys={field.value ? [field.value] : []}
                        onChange={(e) => field.onChange(e)}
                        errorMessage={error?.message}
                        isInvalid={!!error?.message}
                        classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
                        disableEmptySelection={true}
                      >
                        {combinations.map((role) => (
                          <SelectItem key={role.key} classNames={{ title: 'text-base px-2' }}>
                            {role.label}
                          </SelectItem>
                        ))}
                      </Select>
                    </div>
                  )}
                />
                <hr className="border-default-200 dark:border-default-100" />
                <div className="flex flex-row justify-between items-center space-x-4">
                  <p className="text-base leading-tight">Decimal places:</p>
                  <Controller
                    name="decimal"
                    control={control}
                    rules={{
                      required: 'Decimal is required',
                      validate: (value) => value > 0,
                    }}
                    render={({ field, fieldState: { error } }) => {
                      const message = error?.type === 'validate' ? 'Decimal is required' : error?.message;
                      return (
                        <NumberInput
                          variant="bordered"
                          value={field.value}
                          onChange={field.onChange}
                          ariaLabel="Decimal"
                          min={1}
                          max={100}
                          step={1}
                          errorMessage={message}
                          isInvalid={!!message}
                        />
                      );
                    }}
                  />
                </div>
                <div className="flex flex-row justify-between items-center space-x-4">
                  <p className="text-base leading-tight">Unit:</p>
                  <Controller
                    name="unit"
                    control={control}
                    rules={{ required: 'Unit is required' }}
                    render={({ field, fieldState: { error } }) => {
                      const message = error?.type === 'validate' ? 'Unit is required' : error?.message;
                      return (
                        <Select
                          aria-label="Unit"
                          variant="bordered"
                          placeholder="Select unit"
                          size="lg"
                          selectedKeys={field.value ? [field.value] : []}
                          onChange={(e) => field.onChange(e)}
                          errorMessage={message}
                          isInvalid={!!message}
                          classNames={{
                            value: 'text-base px-2',
                            popoverContent: 'bg-default-100',
                            base: 'w-[165px]',
                          }}
                          disableEmptySelection={true}
                        >
                          {units.map((role) => (
                            <SelectItem key={role.key} classNames={{ title: 'text-base px-2' }}>
                              {role.label}
                            </SelectItem>
                          ))}
                        </Select>
                      );
                    }}
                  />
                </div>
              </>
            )}
          </div>
          <Button type="submit" variant="solid" radius="full" className="text-base px-4 mt-6">
            Apply
          </Button>
        </form>
      </PopoverContent>
    </Popover>
  );
};

DataTagConfig.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DataTagConfig;
