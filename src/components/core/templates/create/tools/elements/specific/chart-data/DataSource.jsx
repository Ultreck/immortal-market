import PropTypes from 'prop-types';
import useCurrentDesign from '@/hooks/template/use-current-design.js';
import Title from '@/components/core/shared/Title.jsx';
import { Controller, useForm } from 'react-hook-form';
import { Button, Select, SelectItem } from '@heroui/react';
import { capitalize } from '@/lib/utils.js';

const DataSource = ({ element, onChange, onBack }) => {
  const { source, analysis } = useCurrentDesign();
  const { handleSubmit, control, watch } = useForm({
    defaultValues: {
      table: element.config.table || '',
      combination: element.config.combination || '',
      keys: element.config.keys || {},
    },
  });

  const keys = Object.keys(element.config.keys);

  const tables = source.tables.map((table) => ({ key: table.id, label: table.name })) || [];
  const table = source.tables.find((table) => table.id === watch().table);
  const _analysis = analysis.filter((analysis) => analysis.table === table?.name) || [];
  const combinations = _analysis.map((analysis) => ({
    key: analysis.combination,
    label: analysis.text,
    category: analysis.category,
  }));
  const combination = analysis.find((c) => c.combination === watch().combination);

  const onSubmit = async (data) => {
    onChange({
      ...element,
      config: {
        ...element.config,
        data: combination.result,
        ...data,
      },
    });
  };

  return (
    <div>
      <Title title="Data source" onBack={onBack} classNames={{ title: 'text-base font-medium', base: 'mb-6' }} />
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
            render={({ field, fieldState: { error } }) => {
              const filtered = combinations.filter((c) => c.category !== 'number-aggregate');
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
          {!!combination && combination.result.length > 0 && (
            <>
              {keys.map((key) => {
                return (
                  <Controller
                    key={key}
                    name={`keys.${key}`}
                    control={control}
                    rules={{ required: `${capitalize(key)} is required` }}
                    render={({ field, fieldState: { error } }) => {
                      const options = Object.keys(combination.result[0]).map((key) => ({ key, label: key }));
                      return (
                        <div className="flex-1">
                          <Select
                            label={capitalize(key)}
                            labelPlacement="outside"
                            variant="bordered"
                            placeholder="Select one"
                            selectedKeys={options.find((c) => c.key === field.value)?.key ? [field.value] : []}
                            onChange={(e) => field.onChange(e)}
                            errorMessage={error?.message}
                            isInvalid={!!error?.message}
                            classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
                            disableEmptySelection={true}
                          >
                            {options.map((role) => (
                              <SelectItem key={role.key} classNames={{ title: 'text-base px-2' }}>
                                {role.label}
                              </SelectItem>
                            ))}
                          </Select>
                        </div>
                      );
                    }}
                  />
                );
              })}
            </>
          )}
        </div>
        <Button type="submit" variant="solid" radius="full" className="text-base px-4 mt-6">
          Apply
        </Button>
      </form>
    </div>
  );
};

DataSource.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default DataSource;
