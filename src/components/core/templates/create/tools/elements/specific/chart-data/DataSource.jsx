import PropTypes from 'prop-types';
import useCurrentDesign from '@/hooks/template/use-current-design.js';
import { Controller, useForm } from 'react-hook-form';
import { Button, Select, SelectItem } from '@heroui/react';
import { capitalize } from '@/lib/utils.js';
import useDesignStore from '@/store/design.js';
import NoData from '@/components/ui/NoData';

const keys = {
  'chart-s': {
    bar: {
      label: 'x',
      value: ['y'],
    },
    pie: {
      label: 'name',
      value: ['value'],
    },
    'pie-2': {
      label: 'name',
      value: ['value'],
    },
    'semi-pie': {
      label: 'name',
      value: ['value'],
    },
    'semi-pie-2': {
      label: 'name',
      value: ['value'],
    },
    'bar-stacked': {
      label: 'x',
      value: ['y'],
      multiple: true,
    },
    'bar-multiple': {
      label: 'x',
      value: ['y'],
      multiple: true,
    },
    'alt-bar': {
      label: 'x',
      value: ['y'],
    },
    line: {
      label: 'x',
      value: ['y'],
    },
    'line-multiple': {
      label: 'x',
      value: ['y'],
      multiple: true,
    },
    area: {
      label: 'x',
      value: ['y'],
    },
    'area-multiple': {
      label: 'x',
      value: ['y'],
      multiple: true,
    },
    scatter: {
      label: 'x',
      value: ['y'],
    },
    bubble: {
      label: 'x',
      value: ['y'],
    },
    'line-area': {
      label: 'x',
      value: ['yLine', 'yArea'],
    },
    'line-bar': {
      label: 'x',
      value: ['yLine', 'yBar'],
    },
  },
  'chart-a': {
    funnel: {
      label: 'label',
      value: ['value'],
    },
    'linear-advanced-bar': {
      label: 'label',
      value: ['value'],
    },
    'circle-icons': {
      label: 'label',
      value: ['value', 'icon'],
      types: {
        icon: 'string',
      },
    },
    bar: {
      label: 'label',
      value: ['value'],
    },
    'bar-2': {
      label: 'label',
      value: ['value'],
    },
  },
};

const DataSource = ({ element }) => {
  return (
    <>
      {keys[element.type][element.config.name] ? (
        <DataSourceContent element={element} />
      ) : (
        <NoData text="No keys found for this chart type" />
      )}
    </>
  );
};

const DataSourceContent = ({ element }) => {
  const { source, analysis } = useCurrentDesign();
  const { handleSubmit, control, watch } = useForm({
    defaultValues: {
      table: element.config.table || '',
      combination: element.config.combination || '',
      keys:
        element.config.keys ||
        (keys[element.type][element.config.name].multiple
          ? keys[element.type][element.config.name].value.reduce((acc, key) => {
              acc[key] = [];
              return acc;
            }, {})
          : {}),
    },
  });
  const updateElement = useDesignStore((state) => state.updateElement);

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
    const config = {
      ...element.config,
      data: combination.result,
      ...data,
    };
    const _keys = keys[element.type][element.config.name];
    if (_keys.value.length > 0) {
      config.keys = _keys.value.reduce((acc, key) => {
        if (_keys.multiple) {
          acc[key] = Array.isArray(data.keys[key]) ? data.keys[key] : [data.keys[key]];
        } else {
          acc[key] = data.keys[key];
        }
        return acc;
      }, {});
    }
    const fields = Object.keys(combination.result[0]);
    if (_keys.multiple) {
      config.keys[_keys.value[0]] = config.keys[_keys.value[0]].filter((k) => fields.includes(k));
    }
    if (_keys.label) {
      const _field = fields.filter((field) => typeof combination.result[0][field] === 'string');
      config.keys[_keys.label] = _field.length > 0 ? _field[0] : 'band';
    }
    updateElement(element.id, { config }, true);
  };

  return (
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
            {keys[element.type][element.config.name].value.map((key) => {
              const isMultiple = keys[element.type][element.config.name].multiple;
              return (
                <Controller
                  key={key}
                  name={`keys.${key}`}
                  control={control}
                  rules={{ required: `${capitalize(key)} is required` }}
                  render={({ field, fieldState: { error } }) => {
                    const options = Object.keys(combination.result[0]).map((key) => ({ key, label: key }));
                    let _options = options.filter((i) => {
                      return typeof combination.result[0][i.key] === 'number';
                    });
                    if (keys[element.type][element.config.name].types?.[key]) {
                      _options = options.filter(
                        (c) =>
                          typeof combination.result[0][c.key] === keys[element.type][element.config.name].types[key]
                      );
                    }
                    return (
                      <div className="flex-1">
                        <Select
                          label={capitalize(key)}
                          labelPlacement="outside"
                          placeholder={isMultiple ? 'Select one or more' : 'Select one'}
                          selectionMode={isMultiple ? 'multiple' : 'single'}
                          selectedKeys={
                            isMultiple
                              ? Array.isArray(field.value)
                                ? field.value.filter((k) => _options.map((o) => o.key).includes(k))
                                : [field.value]
                              : _options.find((c) => c.key === field.value)?.key
                                ? [field.value]
                                : []
                          }
                          onSelectionChange={(e) => {
                            field.onChange(isMultiple ? Array.from(e) : Array.from(e)[0]);
                          }}
                          errorMessage={error?.message}
                          isInvalid={!!error?.message}
                          classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
                          disableEmptySelection={true}
                        >
                          {_options.map((role) => (
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
  );
};

DataSource.propTypes = {
  element: PropTypes.object.isRequired,
};

DataSourceContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default DataSource;
