import Title from '@/components/core/shared/Title.jsx';
import PropTypes from 'prop-types';
import useBusiness from '@/hooks/use-business.js';
import useTemplateStore from '@/store/template.js';
import { useGetDesignSource, useUpdateDesignSource } from '@/api/business.js';
import { camelCaseToWords } from '@/lib/utils.js';
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectItem,
  Tooltip,
  useDisclosure,
} from '@nextui-org/react';
import { TbInfoCircle, TbLink, TbLinkOff, TbTable } from 'react-icons/tb';
import { Controller, useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast.jsx';
import { useState } from 'react';

const ConfigureRelationships = ({ onBack }) => {
  const { id: business } = useBusiness();
  const id = useTemplateStore((state) => state.template.id);
  const { data: { source = {} } = {} } = useGetDesignSource(business, id);

  return (
    <div className="px-14 py-12">
      <Title title="Configure relationships" onBack={onBack} className="mb-8" classNames={{ title: 'text-xl' }} />
      <div className="grid grid-cols-2 gap-10">
        {source.tables.map((table) => (
          <div key={table.name}>
            <div className="border border-default-200 px-6 py-4 rounded-2xl">
              <div className="flex items-center space-x-2 mb-4">
                <TbTable size="16" />
                <p className="text-sm">{table.name}</p>
              </div>
              <div className="space-y-2">
                {table.columns.map((column, j) => {
                  return <ColumnItem key={j} table={table.name} column={column} />;
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

ConfigureRelationships.propTypes = {
  onBack: PropTypes.func,
};

const ColumnItem = ({ table, column }) => {
  const { id: business } = useBusiness();
  const id = useTemplateStore((state) => state.template.id);
  const { data: { source = {} } = {} } = useGetDesignSource(business, id);
  const connected = !!source.relationships?.find((r) => r.column === column.key && r.table === table);
  const { isOpen: isConnectOpen, onOpenChange: onConnectOpenChange } = useDisclosure();

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <p className="text-base">{column.key}</p>
        <Tooltip
          content={
            <div className="flex flex-col items-start px-1.5 py-1">
              <p>Type: {camelCaseToWords(column.type)}</p>
              <p>Category: {camelCaseToWords(column.category)}</p>
            </div>
          }
        >
          <div className="hover:bg-default-100 rounded-2xl px-0.5 py-0.5 opacity-75">
            <TbInfoCircle size="12" />
          </div>
        </Tooltip>
      </div>
      <Popover placement="right" isOpen={isConnectOpen} onOpenChange={onConnectOpenChange}>
        <PopoverTrigger>
          <Button
            variant={connected ? 'solid' : 'light'}
            color={connected ? 'success' : 'default'}
            size="sm"
            radius="full"
            isIconOnly
            className="w-[22px] h-[22px] min-w-[initial]"
          >
            {connected ? <TbLink size="16" /> : <TbLinkOff size="16" className="opacity-30" />}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="shadow border border-default-200 rounded-2xl w-[360px] items-stretch p-0">
          <ColumnItemPopoverContent table={table} column={column} />
        </PopoverContent>
      </Popover>
    </div>
  );
};

ColumnItem.propTypes = {
  table: PropTypes.string,
  column: PropTypes.object,
};

const ColumnItemPopoverContent = ({ table, column }) => {
  const [view, setView] = useState('details');
  const { id: business } = useBusiness();
  const id = useTemplateStore((state) => state.template.id);
  const { data: { source = {} } = {} } = useGetDesignSource(business, id);
  const relationship = source.relationships?.find((r) => r.table === table && r.column === column?.key);

  return (
    <>
      {view === 'details' && (
        <>
          {relationship ? (
            <div className="py-6">
              <Title
                title="Relationship"
                classNames={{ title: 'text-base', base: 'mb-2 items-center space-x-3 px-8' }}
              />
              <div className="divide-y divide-default-200">
                <div className="space-y-0.5 px-8 py-2">
                  <p className="opacity-75">Reference table</p>
                  <p>{relationship.refTable}</p>
                </div>
                <div className="space-y-0.5 px-8 py-2">
                  <p className="opacity-75">Reference column</p>
                  <p>{relationship.refColumn}</p>
                </div>
                <div className="space-y-0.5 px-8 py-2">
                  <p className="opacity-75">Relationship type</p>
                  <p>{relationship.type}</p>
                </div>
              </div>
              <div className="px-8">
                <Button
                  onClick={() => setView('edit')}
                  variant="bordered"
                  radius="full"
                  size="sm"
                  className="text-base mt-4"
                >
                  Edit
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center px-8 py-6">
              <p>No relationship setup for this column</p>
              <Button
                onClick={() => setView('edit')}
                variant="bordered"
                radius="full"
                size="sm"
                className="text-base mt-4"
              >
                Setup relationship
              </Button>
            </div>
          )}
        </>
      )}
      {view === 'edit' && <ConnectColumnForm table={table} column={column} onClose={() => setView('details')} />}
    </>
  );
};

ColumnItemPopoverContent.propTypes = {
  table: PropTypes.string,
  column: PropTypes.object,
};

const ConnectColumnForm = ({ table, column, onClose }) => {
  const toast = useToast();
  const { id: business } = useBusiness();
  const id = useTemplateStore((state) => state.template.id);
  const { data: { source = {} } = {} } = useGetDesignSource(business, id);
  const { mutateAsync: update, isPending: isUpdateLoading } = useUpdateDesignSource(business, id);
  const relationship = source.relationships?.find((r) => r.table === table && r.column === column?.key);
  const { handleSubmit, control, watch } = useForm({
    defaultValues: {
      refTable: relationship?.refTable || null,
      refColumn: relationship?.refColumn || null,
      type: relationship?.type || null,
    },
  });
  const [isDeleting, setIsDeleting] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const onSubmit = async (values) => {
    setIsUpdating(true);
    try {
      const relationships = source.relationships?.filter((r) => r.table !== table && r.column !== column.key) || [];
      relationships.push({
        table,
        column: column.key,
        refTable: values.refTable,
        refColumn: values.refColumn,
        type: values.type,
      });
      await update({ relationships });
      onClose();
    } catch (e) {
      toast.error(e?.response?.data?.message || e.message);
    }
    setIsUpdating(false);
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const relationships = source.relationships?.filter((r) => r.table !== table && r.column !== column.key) || [];
      await update({ relationships });
      onClose();
    } catch (e) {
      toast.error(e?.response?.data?.message || e.message);
    }
    setIsDeleting(false);
  };

  return (
    <div className="px-8 py-6">
      <Title
        title="Setup relationship"
        onBack={onClose}
        classNames={{ title: 'text-base', base: 'mb-6 items-center space-x-3' }}
        isDisabled={isUpdateLoading}
      />
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <div className="space-y-3">
          <div className="space-y-1">
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
          <div className="space-y-1">
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
          <div className="space-y-1">
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
                      { key: 'many-to-one', title: 'Many to One' },
                      { key: 'many-to-many', title: 'Many to Many' },
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
        <div className="mt-6 space-x-2 flex items-center">
          <Button
            type="submit"
            color="success"
            radius="full"
            className="text-base px-6"
            isLoading={isUpdateLoading && isUpdating}
            isDisabled={isUpdateLoading}
          >
            Save
          </Button>
          {!!relationship && (
            <Button
              onClick={handleDelete}
              variant="bordered"
              color="danger"
              radius="full"
              className="text-base px-6"
              isLoading={isUpdateLoading && isDeleting}
              isDisabled={isUpdateLoading}
            >
              Delete
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

ConnectColumnForm.propTypes = {
  table: PropTypes.string.isRequired,
  column: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ConfigureRelationships;
