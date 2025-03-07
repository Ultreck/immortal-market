import useBusiness from '@/hooks/use-business.js';
import useDesignStore from '@/store/design';
import { useUpdateDesignSource } from '@/api/business.js';
import { Controller, useForm } from 'react-hook-form';
import Title from '@/components/core/shared/Title.jsx';
import { addToast, Button, Divider, Select, SelectItem } from '@heroui/react';
import PropTypes from 'prop-types';
import useCurrentDesign from '@/hooks/template/use-current-design.js';

const CreateRelationship = ({ table, onClose }) => {
  const { id: business } = useBusiness();
  const id = useDesignStore((state) => state.id);
  const { source } = useCurrentDesign();
  const { mutateAsync: update, isPending: isUpdateLoading } = useUpdateDesignSource(business, id);
  const { handleSubmit, control, watch } = useForm();

  const onSubmit = async (values) => {
    try {
      const relationship = source.relationships?.find((r) => r.table === table && r.column === values.column);
      if (relationship) {
        addToast({ title: 'Error', description: 'Relationship already exists for this column' });
        return;
      }
      const relationships = [
        ...source.relationships,
        {
          table,
          column: values.column,
          refTable: values.refTable,
          refColumn: values.refColumn,
          type: values.type,
        },
      ];
      await update({ relationships });
      onClose();
    } catch (e) {
      addToast({
        title: 'Error',
        description: e?.response?.data?.message ?? e?.message ?? 'Something went wrong, please try again',
        color: 'error',
      });
    }
  };

  return (
    <div className="py-6">
      <Title
        title="Setup relationship"
        classNames={{ title: 'text-base', base: 'mb-6 items-center space-x-3 px-8' }}
        isDisabled={isUpdateLoading}
      />
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <div className="space-y-3">
          <div className="space-y-1 px-8">
            <p className="text-base">Column</p>
            <Controller
              name="column"
              control={control}
              rules={{ required: 'Column is required' }}
              disabled={isUpdateLoading}
              render={({ field, fieldState: { error } }) => {
                const columns = source.tables.find((t) => t.name === table).columns || [];
                return (
                  <Select
                    isDisabled={field.disabled}
                    variant="bordered"
                    aria-label="type"
                    placeholder="Select one"
                    selectedKeys={field.value ? [field.value] : []}
                    onChange={(e) => field.onChange(e)}
                    errorMessage={error?.message}
                    isInvalid={!!error?.message}
                    classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
                    disableEmptySelection={true}
                  >
                    {columns.map((option) => (
                      <SelectItem key={option.key} classNames={{ title: 'px-2 text-base' }}>
                        {option.key}
                      </SelectItem>
                    ))}
                  </Select>
                );
              }}
            />
          </div>
          <div className="py-1">
            <Divider />
          </div>
          <div className="space-y-1 px-8">
            <p className="text-base">Reference table</p>
            <Controller
              name="refTable"
              control={control}
              rules={{ required: 'Reference table is required' }}
              disabled={isUpdateLoading}
              render={({ field, fieldState: { error } }) => {
                const tables = source.tables.filter((t) => t.name !== table);
                return (
                  <Select
                    isDisabled={field.disabled}
                    variant="bordered"
                    aria-label="type"
                    placeholder="Select one"
                    selectedKeys={field.value ? [field.value] : []}
                    onChange={(e) => field.onChange(e)}
                    errorMessage={error?.message}
                    isInvalid={!!error?.message}
                    classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
                    disableEmptySelection={true}
                  >
                    {tables.map((option) => (
                      <SelectItem key={option.name} classNames={{ title: 'px-2 text-base' }}>
                        {option.name}
                      </SelectItem>
                    ))}
                  </Select>
                );
              }}
            />
          </div>
          <div className="space-y-1 px-8">
            <p className="text-base">Reference column</p>
            <Controller
              name="refColumn"
              control={control}
              rules={{ required: 'Reference column is required' }}
              disabled={isUpdateLoading}
              render={({ field, fieldState: { error } }) => {
                const columns = source.tables.find((t) => t.name === watch().refTable)?.columns || [];
                return (
                  <Select
                    isDisabled={field.disabled}
                    variant="bordered"
                    aria-label="type"
                    placeholder="Select one"
                    selectedKeys={field.value ? [field.value] : []}
                    onChange={(e) => field.onChange(e)}
                    errorMessage={error?.message}
                    isInvalid={!!error?.message}
                    classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
                    disableEmptySelection={true}
                  >
                    {columns.map((option) => (
                      <SelectItem key={option.key} classNames={{ title: 'px-2 text-base' }}>
                        {option.key}
                      </SelectItem>
                    ))}
                  </Select>
                );
              }}
            />
          </div>
          <div className="space-y-1 px-8">
            <p className="text-base">Relationship type</p>
            <Controller
              name="type"
              control={control}
              rules={{ required: 'Relationship type is required' }}
              disabled={isUpdateLoading}
              render={({ field, fieldState: { error } }) => {
                return (
                  <Select
                    isDisabled={field.disabled}
                    variant="bordered"
                    aria-label="type"
                    placeholder="Select one"
                    selectedKeys={field.value ? [field.value] : []}
                    onChange={(e) => field.onChange(e)}
                    errorMessage={error?.message}
                    isInvalid={!!error?.message}
                    classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
                    disableEmptySelection={true}
                  >
                    {[
                      { key: 'one-to-one', title: 'One to One' },
                      { key: 'one-to-many', title: 'One to Many' },
                    ].map((option) => (
                      <SelectItem key={option.key} classNames={{ title: 'px-2 text-base' }}>
                        {option.title}
                      </SelectItem>
                    ))}
                  </Select>
                );
              }}
            />
          </div>
        </div>
        <div className="mt-6 space-x-2 flex items-center px-8">
          <Button
            type="submit"
            color="success"
            radius="full"
            className="text-base px-6"
            isLoading={isUpdateLoading}
            isDisabled={isUpdateLoading}
            size="sm"
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

CreateRelationship.propTypes = {
  table: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CreateRelationship;
