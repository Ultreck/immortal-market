import { motion } from 'motion/react';
import TableColumns from '@/components/core/project/create/TableColumns.jsx';
import PropTypes from 'prop-types';
import Title from '@/components/core/shared/Title.jsx';
import { Button, Popover, PopoverContent, PopoverTrigger, Tab, Tabs, useDisclosure } from '@heroui/react';
import React from 'react';
import TableRecords from '@/components/core/project/create/TableRecords.jsx';
import CreateRelationship from '@/components/core/project/create/CreateRelationship.jsx';
import { TbPlus } from 'react-icons/tb';

const TableDetails = ({ table }) => {
  const [tab, setTab] = React.useState('columns');
  const { isOpen: isConnectOpen, onOpenChange: onConnectOpenChange } = useDisclosure();

  return (
    <motion.div
      key={table.name}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center justify-between mb-4">
        <Title title="Preview data" classNames={{ title: 'text-lg font-semibold' }} />
      </div>
      <div className="flex justify-between items-center">
        <Tabs
          aria-label="Table details"
          radius="full"
          variant="solid"
          color="primary"
          size="sm"
          selectedKey={tab}
          onSelectionChange={setTab}
        >
          <Tab key="columns" title={`Columns (${table.columns.length})`} className="text-base" />
          <Tab key="records" title="Records" className="text-base" />
        </Tabs>
        <Popover placement="bottom-end" isOpen={isConnectOpen} onOpenChange={onConnectOpenChange}>
          <PopoverTrigger>
            <Button
              variant="bordered"
              size="sm"
              className="text-base px-4"
              radius="full"
              startContent={<TbPlus size="20" />}
            >
              Relationship
            </Button>
          </PopoverTrigger>
          <PopoverContent className="shadow border border-default-200 rounded-2xl w-[360px] items-stretch p-0">
            <CreateRelationship table={table.name} onClose={onConnectOpenChange} />
          </PopoverContent>
        </Popover>
      </div>
      <div className="mt-4">
        {tab === 'columns' && <TableColumns table={table} />}
        {tab === 'records' && <TableRecords table={table} />}
      </div>
    </motion.div>
  );
};

TableDetails.propTypes = {
  table: PropTypes.object.isRequired,
};

export default TableDetails;
