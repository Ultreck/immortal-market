import { Button, Popover, PopoverContent, PopoverTrigger, Radio, RadioGroup, Select, SelectItem } from '@heroui/react';
import { RiSettingsLine } from 'react-icons/ri';
import { Controller, useForm } from 'react-hook-form';
import NumberInput from '@/components/ui/NumberInput.jsx';
import PropTypes from 'prop-types';
import useTemplateStore from '@/store/template.js';
import useCurrentDesign from '@/hooks/template/use-current-design.js';
import { useGenerateCombinationComparison } from '@/api/business.js';
import useBusiness from '@/hooks/use-business.js';

const units = [
  { key: 'none', label: 'None' },
  { key: 'percent', label: 'Percent (%)' },
  { key: 'currency', label: 'Currency ($)' },
];

const DataTagConfig = ({ element, onChange }) => {
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const openTool = useTemplateStore((state) => state.template.openTool);
  const { id: business } = useBusiness();
  const { source, analysis, design } = useCurrentDesign();
  const { handleSubmit, control, watch } = useForm({
    defaultValues: {
      table: element.config.table || '',
      column: element.config.column || '',
      type: element.config.type || '',
      decimal: element.config.decimal || 0,
      unit: element.config.unit || '',
      characters: element.config.characters || 150,
      combination: element.config.combination || '',
      compare: element.config.compare || [],
    },
  });
  const { mutateAsync: generateComparison, isPending: isGenerateComparisonPending } = useGenerateCombinationComparison(
    business,
    design.id
  );

  const selection = [...(source.selection.combinations || []), ...(source.selection.summary || [])];
  const tables = source.tables.map((table) => ({ key: table.id, label: table.name })) || [];
  const table = source.tables.find((table) => table.id === watch().table);
  const _columns = table?.columns.map((column) => ({ key: column.key, label: column.key, type: column.type })) || [];
  const columns = _columns.filter((column) => column.type === 'number');
  const _combinations = source.combinations.filter(
    (c) => selection.includes(c._id.toString()) && c.table === table?.name
  );
  const combinations = _combinations.map((combination) => ({
    key: combination.id,
    label: combination.text,
    category: combination.category,
  }));

  const getContent = async (data) => {
    if (!analysis.length) return 'Dynamic content here';
    let content = '';
    if (data.type === 'number') {
      const combination = analysis.find((c) => c.combination === data.combination);
      if (combination) {
        content = combination.result[combination.metrics[0]];
      }
      content = Number(content).toLocaleString('en-US', { maximumFractionDigits: data.decimal });
    } else if (data.type === 'text') {
      const res = await generateComparison(data.compare.map((c) => c.combination).join(','));
      content = res.data.content;
    }
    return content;
  };

  const onSubmit = async (data) => {
    const content = await getContent(data);
    onChange({
      ...element,
      config: {
        ...element.config,
        table: data.table,
        column: data.column,
        type: data.type,
        combination: data.combination || element.config.combination,
        compare: data.compare || element.config.compare,
        decimal: data.decimal,
        unit: data.unit,
        characters: data.characters,
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
          <div className="flex flex-col space-y-4">
            <Controller
              name="table"
              control={control}
              rules={{ required: 'Table is required' }}
              render={({ field, fieldState: { error } }) => (
                <div>
                  <Select
                    label="Table"
                    labelPlacement="outside"
                    variant="bordered"
                    placeholder="Select table"
                    selectedKeys={field.value ? [field.value] : []}
                    onChange={(e) => field.onChange(e)}
                    errorMessage={error?.message}
                    isInvalid={!!error?.message}
                    classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
                    disableEmptySelection={true}
                  >
                    {tables.map((table) => (
                      <SelectItem key={table.key} classNames={{ title: 'text-base px-2' }}>
                        {table.label}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
              )}
            />
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
                        selectedKeys={field.value ? [field.value] : []}
                        onChange={(e) => field.onChange(e)}
                        errorMessage={error?.message}
                        isInvalid={!!error?.message}
                        classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
                        disableEmptySelection={true}
                      >
                        {combinations
                          .filter((c) => c.category === 'number-aggregate')
                          .map((role) => (
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
                      validate: (value) => value >= 0,
                    }}
                    render={({ field, fieldState: { error } }) => {
                      const message = error?.type === 'validate' ? 'Decimal is required' : error?.message;
                      return (
                        <NumberInput
                          variant="bordered"
                          value={field.value}
                          onChange={field.onChange}
                          ariaLabel="Decimal"
                          min={0}
                          max={10}
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
          <Button
            type="submit"
            variant="solid"
            radius="full"
            className="text-base px-4 mt-6"
            isLoading={isGenerateComparisonPending}
          >
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
