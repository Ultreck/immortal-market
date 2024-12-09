import { motion } from 'framer-motion';
import TableColumns from '@/components/core/templates/create/project/manage-data/TableColumns.jsx';
import TableRecords from '@/components/core/templates/create/project/manage-data/TableRecords.jsx';
import PropTypes from 'prop-types';
import { Tab, Tabs } from '@nextui-org/react';
import TableRelationships from '@/components/core/templates/create/project/manage-data/TableRelationships.jsx';
import useCurrentDesign from '@/hooks/template/use-current-design.js';

const TableDetails = ({ table }) => {
  const { source } = useCurrentDesign();
  const relationships = source.relationships?.filter((r) => r.table === table.name) || [];

  return (
    <motion.div
      key={table.name}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className="w-full overflow-hidden px-12 py-8"
    >
      <Tabs aria-label="Table details" radius="full" variant="bordered" color="primary" classNames={{ panel: 'pt-5' }}>
        <Tab key="columns" title={`Columns (${table.columns.length})`} className="text-base">
          <TableColumns table={table} />
        </Tab>
        <Tab key="records" title="Records" className="text-base">
          <TableRecords table={table} />
        </Tab>
        <Tab key="relationships" title={`Relationships (${relationships.length})`} className="text-base">
          <TableRelationships table={table} />
        </Tab>
      </Tabs>
    </motion.div>
  );
};

TableDetails.propTypes = {
  table: PropTypes.object.isRequired,
};

export default TableDetails;
