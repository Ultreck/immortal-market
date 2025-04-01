import { Button, Popover, PopoverContent, PopoverTrigger, Select, SelectItem } from '@heroui/react';
import { RiSettingsLine } from 'react-icons/ri';
import { Controller, useForm } from 'react-hook-form';
import NumberInput from '@/components/ui/NumberInput.jsx';
import PropTypes from 'prop-types';
import useDesignStore from '@/store/design.js';
import useCurrentDesign from '@/hooks/template/use-current-design.js';
import { useGenerateDataTagContent } from '@/api/business.js';
import useBusiness from '@/hooks/use-business.js';

const units = [
  { key: 'none', label: 'None' },
  { key: 'percent', label: 'Percent (%)' },
  { key: 'currency', label: 'Currency ($)' },
];

const DataTagConfig = ({ element, onChange }) => {
  const tool = useDesignStore((state) => state.tool);
  const openTool = useDesignStore((state) => state.openTool);
  const closeTool = useDesignStore((state) => state.closeTool);

  return (
    <Popover
      placement="left"
      showArrow
      offset={10}
      isOpen={tool === 'data-tag'}
      onOpenChange={(v) => (v ? openTool('data-tag') : closeTool())}
    >
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Data config" className="text-base">
          <RiSettingsLine size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="px-8 py-8 shadow border border-default-200 w-[350px] items-stretch">
        <DataTagConfigContent key={element.id} element={element} onChange={onChange} />
      </PopoverContent>
    </Popover>
  );
};

const DataTagConfigContent = ({ element, onChange }) => {
  const { id: business } = useBusiness();
  const id = useDesignStore((state) => state.id);
  const { source, analysis } = useCurrentDesign();
  const { handleSubmit, control, watch } = useForm({
    defaultValues: {
      table: element.config?.table || '',
      type: element.config?.type || '',
      decimal: element.config?.decimal || 0,
      unit: element.config?.unit || '',
      words: element.config?.words || 50,
      combination: element.config?.combination || '',
      compare: element.config?.compare || [],
    },
  });
  const { mutateAsync: generateContent, isPending: isGenerateContentPending } = useGenerateDataTagContent(business, id);

  const tables = source?.tables.map((table) => ({ key: table.id, label: table.name })) || [];
  const table = source?.tables.find((table) => table.id === watch().table);
  const _analysis = analysis?.filter((analysis) => analysis.table === table?.name) || [];
  const combinations = _analysis.map((analysis) => ({
    key: analysis.combination,
    label: analysis.text,
    category: analysis.category,
  }));

  const getContent = async (data) => {
    let content = 'N/A';
    if (data.type === 'number') {
      const combination = analysis.find((c) => c.combination === data.combination);
      if (combination) {
        content = combination.result[combination.metrics[0]];
      }
      content = Number(content).toLocaleString('en-US', { maximumFractionDigits: data.decimal });
    } else if (data.type.match(/title|body/i)) {
      const res = await generateContent({ type: data.type, combination: data.combination, max: data.words });
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
        words: data.words,
        content,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col space-y-4">
        <div className="flex items-center">
          <Controller
            name="type"
            control={control}
            render={({ field, fieldState: { error } }) => {
              return (
                <Select
                  label="Type"
                  labelPlacement="outside"
                  variant="bordered"
                  placeholder="Select type"
                  selectedKeys={field.value ? [field.value] : []}
                  onChange={(e) => field.onChange(e)}
                  errorMessage={error?.message}
                  isInvalid={!!error?.message}
                  classNames={{
                    value: 'text-base px-2',
                    popoverContent: 'bg-default-100',
                  }}
                  disableEmptySelection={true}
                >
                  <SelectItem key="title" classNames={{ title: 'text-base px-2' }}>
                    Title
                  </SelectItem>
                  <SelectItem key="body" classNames={{ title: 'text-base px-2' }}>
                    Body
                  </SelectItem>
                  <SelectItem key="number" classNames={{ title: 'text-base px-2' }}>
                    Number
                  </SelectItem>
                  <SelectItem key="label" classNames={{ title: 'text-base px-2' }}>
                    Label value
                  </SelectItem>
                </Select>
              );
            }}
          />
        </div>
        <hr className="border-default-200 dark:border-default-100" />
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
                selectedKeys={tables.find((t) => t.key === field.value)?.key ? [field.value] : []}
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
        {watch().type.match(/title|body/i) && (
          <>
            <div className="space-y-2">
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
                      selectedKeys={combinations.find((c) => c.key === field.value)?.key ? [field.value] : []}
                      onChange={(e) => field.onChange(e)}
                      errorMessage={error?.message}
                      isInvalid={!!error?.message}
                      classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
                      disableEmptySelection={true}
                    >
                      {combinations.map((c) => (
                        <SelectItem key={c.key} classNames={{ title: 'text-base px-2' }}>
                          {c.label}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                )}
              />
              {/* <p className="text-center border border-default-200 rounded-full w-max px-3 py-1 mx-auto">VS</p> */}
              {/* <Controller
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
                      selectedKeys={combinations.find((c) => c.key === field.value)?.key ? [field.value] : []}
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
              /> */}
            </div>
            <hr className="border-default-200 dark:border-default-100" />
            <div className="flex flex-row justify-between items-center space-x-4">
              <p className="text-base leading-tight">No. of words:</p>
              <Controller
                name="words"
                control={control}
                rules={{
                  required: 'No. of words is required',
                  validate: (value) => value > 0,
                }}
                render={({ field, fieldState: { error } }) => {
                  const message = error?.type === 'validate' ? 'No. of words is required' : error?.message;
                  return (
                    <NumberInput
                      variant="bordered"
                      value={field.value}
                      onChange={field.onChange}
                      aria-label="No. of words"
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
              render={({ field, fieldState: { error } }) => {
                const filtered = combinations.filter((c) => c.category === 'number-aggregate');
                return (
                  <div className="flex-1">
                    <Select
                      label="Combination"
                      labelPlacement="outside"
                      variant="bordered"
                      placeholder="Select one"
                      selectedKeys={filtered.find((c) => c.key === field.value)?.key ? [field.value] : []}
                      onChange={(e) => field.onChange(e)}
                      errorMessage={error?.message}
                      isInvalid={!!error?.message}
                      classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
                      disableEmptySelection={true}
                    >
                      {filtered.map((role) => (
                        <SelectItem key={role.key} classNames={{ title: 'text-base px-2' }}>
                          {role.label}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                );
              }}
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
                      aria-label="Decimal"
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
                      selectedKeys={units.find((u) => u.key === field.value)?.key ? [field.value] : []}
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
        isLoading={isGenerateContentPending}
      >
        Apply
      </Button>
    </form>
  );
};

DataTagConfig.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};
DataTagConfigContent.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DataTagConfig;
