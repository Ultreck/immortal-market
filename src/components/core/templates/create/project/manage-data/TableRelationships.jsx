import PropTypes from 'prop-types';
import useCurrentDesign from '@/hooks/template/use-current-design.js';
import {
  Button,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Popover,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
} from '@nextui-org/react';
import { RiAddLine, RiMore2Line } from 'react-icons/ri';
import CreateRelationship from '@/components/core/templates/create/project/manage-data/CreateRelationship.jsx';
import { useToast } from '@/hooks/use-toast.jsx';
import useBusiness from '@/hooks/use-business.js';
import useTemplateStore from '@/store/template.js';
import { useUpdateDesignSource } from '@/api/business.js';

const TableRelationships = ({ table }) => {
  const { source } = useCurrentDesign();
  const relationships = source.relationships?.filter((r) => r.table === table.name) || [];
  const { isOpen: isConnectOpen, onOpenChange: onConnectOpenChange } = useDisclosure();

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        <Popover placement="bottom-end" isOpen={isConnectOpen} onOpenChange={onConnectOpenChange}>
          <PopoverTrigger>
            <button className="border border-default-200 px-6 py-4 rounded-2xl hover:bg-default-100 min-h-[150px]">
              <span className="border-dashed-custom rounded-xl w-full h-full flex items-center justify-center">
                <RiAddLine size="32" className="opacity-50" />
              </span>
            </button>
          </PopoverTrigger>
          <PopoverContent className="shadow border border-default-200 rounded-2xl w-[360px] items-stretch p-0 -translate-y-[100px] -translate-x-[10px]">
            <CreateRelationship table={table.name} onClose={onConnectOpenChange} />
          </PopoverContent>
        </Popover>
        {relationships.map((relationship, i) => {
          return <RelationshipItem key={i} relationship={relationship} />;
        })}
      </div>
    </>
  );
};

const RelationshipItem = ({ relationship }) => {
  const { source } = useCurrentDesign();
  const toast = useToast();
  const { id: business } = useBusiness();
  const id = useTemplateStore((state) => state.template.id);
  const { mutateAsync: update, isPending: isUpdateLoading } = useUpdateDesignSource(business, id);

  const handleDelete = async () => {
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
    <div key={relationship.column} className="border border-default-200 px-6 py-4 rounded-2xl">
      <div className="flex items-center justify-between">
        <p className="font-semibold text-primary-500">{relationship.column}</p>
        <Dropdown classNames={{ content: 'shadow border border-default-100' }}>
          <DropdownTrigger>
            <Button
              variant="bordered"
              isIconOnly
              size="sm"
              radius="full"
              className="w-[26px] h-[26px] min-w-[initial]"
              isLoading={isUpdateLoading}
            >
              <RiMore2Line size="14" />
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Action event example"
            onAction={(key) => {
              if (key === 'delete') handleDelete();
            }}
          >
            <DropdownItem key="delete" className="text-danger" color="danger" classNames={{ title: 'text-base' }}>
              Delete relationship
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <p>{relationship.type}</p>
      <Divider className="my-2" />
      <p>{source.tables.find((t) => t.name === relationship.refTable)?.slug}</p>
      <p>{relationship.refColumn}</p>
    </div>
  );
};

TableRelationships.propTypes = {
  table: PropTypes.object.isRequired,
};
RelationshipItem.propTypes = {
  relationship: PropTypes.object.isRequired,
};

export default TableRelationships;
