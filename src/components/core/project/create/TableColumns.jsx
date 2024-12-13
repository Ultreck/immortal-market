import { TbLink } from 'react-icons/tb';
import {
  Accordion,
  AccordionItem,
  Button,
  Chip,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';
import PropTypes from 'prop-types';
import useCurrentDesign from '@/hooks/template/use-current-design.js';
import { camelCaseToWords, kebabToWords } from '@/lib/utils.js';
import useBusiness from '@/hooks/use-business.js';
import useTemplateStore from '@/store/template.js';
import { useUpdateDesignSource } from '@/api/business.js';
import { useToast } from '@/hooks/use-toast.jsx';
import { RiMore2Line } from 'react-icons/ri';

const TableColumns = ({ table }) => {
  const { source } = useCurrentDesign();

  return (
    <Accordion variant="bordered" className="py-1 px-0">
      {table.columns.map((column, j) => {
        const relationship = source.relationships?.find((r) => r.column === column.key && r.table === table.name);
        return (
          <AccordionItem
            key={column.key}
            aria-label={column.key}
            classNames={{ trigger: 'leading-none py-2 px-5', content: 'pt-0 pt-1 pb-4' }}
            title={
              <div className="flex items-center space-x-1">
                <p className="text-base mr-1">{column.key}</p>
                <Chip size="sm" className="leading-none py-[2px] h-auto text-xs">
                  {camelCaseToWords(column.type)}
                </Chip>
                {!!relationship && (
                  <Chip
                    size="sm"
                    className="leading-none py-[2px] h-auto text-xs"
                    classNames={{ content: 'flex items-center space-x-1' }}
                    color="success"
                  >
                    <TbLink size="16" />
                    <span>{kebabToWords(relationship.type)}</span>
                  </Chip>
                )}
              </div>
            }
          >
            <div className="px-5">
              <TableColumnItem key={j} table={table.name} column={column} />
            </div>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

const TableColumnItem = ({ table, column }) => {
  const toast = useToast();
  const { source } = useCurrentDesign();
  const { id: business } = useBusiness();
  const id = useTemplateStore((state) => state.template.id);
  const { mutateAsync: update, isPending: isUpdateLoading } = useUpdateDesignSource(business, id);
  const relationship = source.relationships?.find((r) => r.column === column.key && r.table === table);
  const reference = source.relationships?.find((r) => r.refColumn === column.key && r.refTable === table);

  const handleDeleteRelationship = async () => {
    try {
      const { table, column } = relationship;
      const index = source.relationships.findIndex((r) => r.column === column && r.table === table);
      const relationships = source.relationships.filter((r, i) => i !== index);
      await update({ relationships });
    } catch (e) {
      toast.error(e?.response?.data?.message || e.message);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-2 items-start">
      <div className="border border-default-200 py-1 rounded-2xl divide-y divide-default-200">
        <div className="flex items-center justify-between px-4 py-1.5">
          <span>Data type:</span>
          <p className="text-sm">{camelCaseToWords(column.type)}</p>
        </div>
        <div className="flex items-center justify-between px-4 py-1.5">
          <span>Category:</span>
          <p className="text-sm">{camelCaseToWords(column.category)}</p>
        </div>
      </div>
      {!!reference && (
        <div className="border border-default-200 rounded-2xl px-4 py-2">
          <div className="flex flex-col items-start px-2 py-2 text-base">
            <h4 className="font-semibold mb-2">Referenced in</h4>
            <p>Table: {source.tables.find((t) => t.name === reference.table)?.slug}</p>
            <p>Column: {reference.column}</p>
            <p>Type: {camelCaseToWords(reference.type)}</p>
          </div>
        </div>
      )}
      {!!relationship && (
        <div className="border border-default-200 rounded-2xl py-4 px-6">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold">Relationship</h4>
            <Dropdown classNames={{ content: 'shadow border border-default-100' }}>
              <DropdownTrigger>
                <Button
                  variant="bordered"
                  isIconOnly
                  size="sm"
                  radius="full"
                  className="w-[24px] h-[24px] min-w-[initial]"
                  isLoading={isUpdateLoading}
                >
                  <RiMore2Line size="14" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Action event example"
                onAction={(key) => {
                  if (key === 'delete') handleDeleteRelationship();
                }}
              >
                <DropdownItem key="delete" className="text-danger" color="danger" classNames={{ title: 'text-base' }}>
                  Delete relationship
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <div className="space-x-2 flex items-center justify-between">
            <p className="opacity-75">Ref table</p>
            <p className="text-base text-right">{source.tables.find((t) => t.name === relationship.refTable)?.slug}</p>
          </div>
          <div className="space-x-2 flex items-center justify-between">
            <p className="opacity-75">Ref column</p>
            <p className="text-base text-right">{relationship.refColumn}</p>
          </div>
          <div className="space-x-2 flex items-center justify-between">
            <p className="opacity-75">Type</p>
            <p className="text-base text-right">{relationship.type}</p>
          </div>
        </div>
      )}
    </div>
  );
};

TableColumns.propTypes = {
  table: PropTypes.object.isRequired,
};
TableColumnItem.propTypes = {
  table: PropTypes.string,
  column: PropTypes.object,
};

export default TableColumns;
