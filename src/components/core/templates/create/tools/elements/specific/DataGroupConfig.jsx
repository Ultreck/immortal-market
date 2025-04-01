import useDesignStore from '@/store/design';
import { Button, Chip, Popover, PopoverContent, PopoverTrigger, Select, SelectItem } from '@heroui/react';
import { RiSettingsLine } from 'react-icons/ri';
import PropTypes from 'prop-types';
import useBusiness from '@/hooks/use-business';
import useCurrentDesign from '@/hooks/template/use-current-design';
import { Controller, useForm } from 'react-hook-form';
import { useGenerateDataGroupContent } from '@/api/business';

const DataGroupConfig = ({ element, onChange }) => {
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
        <DataGroupConfigContent key={element.id} element={element} onChange={onChange} />
      </PopoverContent>
    </Popover>
  );
};

const DataGroupConfigContent = ({ element }) => {
  const { id: business } = useBusiness();
  const id = useDesignStore((state) => state.id);
  const { source, analysis } = useCurrentDesign();
  const updateElements = useDesignStore((state) => state.updateElements);

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
  const { mutateAsync: generate, isPending: isGeneratePending } = useGenerateDataGroupContent(business, id);
  const children = useDesignStore((state) =>
    state.elements.filter((e) => e.parent === element.key && e.type === 'data-tag')
  );

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
    const payload = {
      mode: 'group',
      tags: children.map((e) => e.config.type),
      combination: data.combination,
    };
    const res = await generate(payload);
    content = res.data.content;
    return content;
  };

  const onSubmit = async (data) => {
    const content = await getContent(data);
    const _children = children.map((child) => {
      return {
        ...child,
        config: {
          ...child.config,
          content: content[child.config.type],
        },
      };
    });
    updateElements(
      _children.map((e) => ({ elementId: e.id, updates: { config: { ...e.config } } })),
      true
    );
  };

  return (
    <div>
      <div className="space-y-4">
        <div>
          <h2 className="text-base font-medium">Data tags</h2>
          <div className="flex items-center space-x-2 mt-2">
            {children.map((e) => {
              return (
                <Chip key={e.key} color="default" className="capitalize">
                  <p>{e.config.type}</p>
                </Chip>
              );
            })}
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col space-y-4">
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
          </div>
          <Button
            type="submit"
            variant="solid"
            radius="full"
            className="text-base px-4 mt-6"
            isLoading={isGeneratePending}
          >
            Generate
          </Button>
        </form>
      </div>
    </div>
  );
};

DataGroupConfig.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

DataGroupConfigContent.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DataGroupConfig;
