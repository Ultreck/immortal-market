import { TbDatabase, TbTablePlus } from 'react-icons/tb';
import { Button, Chip, Popover, PopoverContent, PopoverTrigger, useDisclosure } from '@nextui-org/react';
import CreateRelationship from '@/components/core/templates/create/project/manage-data/CreateRelationship.jsx';
import useBusiness from '@/hooks/use-business.js';
import useTemplateStore from '@/store/template.js';
import { useGetDesignSource } from '@/api/business.js';
import PropTypes from 'prop-types';
import TableColumnItem from '@/components/core/templates/create/project/manage-data/TableColumnItem.jsx';

const TableColumns = ({ table }) => {
  const { id: business } = useBusiness();
  const id = useTemplateStore((state) => state.template.id);
  const { data: { source = {} } = {} } = useGetDesignSource(business, id);
  const { isOpen: isConnectOpen, onOpenChange: onConnectOpenChange } = useDisclosure();

  const relationships = source.relationships?.filter((r) => r.table === table.name) || [];
  const references = source.relationships?.filter((r) => r.refTable === table.name) || [];

  return (
    <div className="bg-default-100 px-8 py-6 rounded-2xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <TbDatabase size="16" />
          <p className="text-base font-semibold">{table.slug}</p>
        </div>
        <Popover placement="bottom-end" isOpen={isConnectOpen} onOpenChange={onConnectOpenChange}>
          <PopoverTrigger>
            <Button
              variant="bordered"
              size="sm"
              radius="full"
              className="text-base"
              startContent={<TbTablePlus size="16" />}
            >
              New relationship
            </Button>
          </PopoverTrigger>
          <PopoverContent className="shadow border border-default-200 rounded-2xl w-[360px] items-stretch p-0">
            <CreateRelationship table={table.name} onClose={onConnectOpenChange} />
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex items-center space-x-2 mt-2">
        <Chip size="sm" variant="flat" className="text-md px-2">
          {table.columns.length} columns
        </Chip>
        <Chip
          size="sm"
          variant="flat"
          className="text-md px-2"
          color={relationships.length > 0 ? 'success' : 'default'}
        >
          {relationships.length} relationships
        </Chip>
        <Chip size="sm" variant="flat" className="text-md px-2" color={references.length > 0 ? 'warning' : 'default'}>
          {references.length} references
        </Chip>
      </div>
      <div className="space-y-2 mt-5">
        {table.columns.map((column, j) => {
          return <TableColumnItem key={j} table={table.name} column={column} />;
        })}
      </div>
    </div>
  );
};

TableColumns.propTypes = {
  table: PropTypes.object.isRequired,
};

export default TableColumns;
