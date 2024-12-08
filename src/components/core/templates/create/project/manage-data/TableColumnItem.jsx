import useBusiness from '@/hooks/use-business.js';
import useTemplateStore from '@/store/template.js';
import { useUpdateDesignSource } from '@/api/business.js';
import { Button, Popover, PopoverContent, PopoverTrigger, Tooltip, useDisclosure } from '@nextui-org/react';
import { camelCaseToWords } from '@/lib/utils.js';
import { TbInfoCircle, TbLink } from 'react-icons/tb';
import PropTypes from 'prop-types';
import { useToast } from '@/hooks/use-toast.jsx';
import Title from '@/components/core/shared/Title.jsx';
import useCurrentDesign from '@/hooks/template/use-current-design.js';

const TableColumnItem = ({ table, column }) => {
  const toast = useToast();
  const { id: business } = useBusiness();
  const id = useTemplateStore((state) => state.template.id);
  const { isOpen: isConnectOpen, onOpenChange: onConnectOpenChange } = useDisclosure();
  const { source } = useCurrentDesign();
  const { mutateAsync: update, isPending: isUpdateLoading } = useUpdateDesignSource(business, id);
  const relationship = source.relationships?.find((r) => r.column === column.key && r.table === table);

  const reference = source.relationships?.find((r) => r.refColumn === column.key && r.refTable === table);

  const handleDelete = async () => {
    try {
      const relationships = source.relationships?.filter((r) => r.table !== table && r.column !== column.key) || [];
      await update({ relationships });
      onConnectOpenChange();
    } catch (e) {
      toast.error(e?.response?.data?.message || e.message);
    }
  };

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-1">
        <p className="text-base">{column.key}</p>
        <Tooltip
          content={
            <div className="flex flex-col items-start px-2 py-2 text-base">
              <p>Type: {camelCaseToWords(column.type)}</p>
              <p>Category: {camelCaseToWords(column.category)}</p>
            </div>
          }
        >
          <div className="hover:bg-default-100 rounded-2xl px-0.5 py-0.5 opacity-75">
            <TbInfoCircle size="16" />
          </div>
        </Tooltip>
        {!!reference && (
          <Tooltip
            content={
              <div>
                <div className="flex flex-col items-start px-2 py-2 text-base">
                  <h4 className="font-semibold mb-2">Referenced in</h4>
                  <p>Table: {source.tables.find((t) => t.name === reference.table)?.slug}</p>
                  <p>Column: {reference.column}</p>
                  <p>Type: {camelCaseToWords(reference.type)}</p>
                </div>
              </div>
            }
          >
            <div className="w-[18px] h-[18px] rounded-full flex items-center justify-center bg-orange-500 text-white">
              <TbLink size="14" />
            </div>
          </Tooltip>
        )}
        {!!relationship && (
          <Popover placement="right" isOpen={isConnectOpen} onOpenChange={onConnectOpenChange}>
            <PopoverTrigger>
              <Button
                variant="solid"
                color="success"
                size="sm"
                radius="full"
                isIconOnly
                className="w-[22px] h-[22px] min-w-[initial]"
              >
                <TbLink size="16" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="shadow border border-default-200 rounded-2xl w-[360px] items-stretch p-0">
              <div className="py-6">
                <div className="flex items-center justify-between space-x-3 mb-3 px-8">
                  <Title title="Relationship" classNames={{ title: 'text-base', base: 'mb-0' }} />
                  <Button
                    onClick={handleDelete}
                    variant="bordered"
                    color="danger"
                    radius="full"
                    className="text-base px-6"
                    size="sm"
                    isLoading={isUpdateLoading}
                  >
                    Delete
                  </Button>
                </div>
                <div className="divide-y divide-default-200">
                  <div className="space-x-2 px-8 py-2 flex items-center justify-between">
                    <p className="opacity-75">Ref table</p>
                    <p className="text-base text-right">
                      {source.tables.find((t) => t.name === relationship.refTable)?.slug}
                    </p>
                  </div>
                  <div className="space-x-2 px-8 py-2 flex items-center justify-between">
                    <p className="opacity-75">Ref column</p>
                    <p className="text-base text-right">{relationship.refColumn}</p>
                  </div>
                  <div className="space-x-2 px-8 py-2 flex items-center justify-between">
                    <p className="opacity-75">Type</p>
                    <p className="text-base text-right">{relationship.type}</p>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        )}
      </div>
    </div>
  );
};

TableColumnItem.propTypes = {
  table: PropTypes.string,
  column: PropTypes.object,
};

export default TableColumnItem;
