import { motion } from 'framer-motion';
import TableColumns from '@/components/core/templates/create/project/manage-data/TableColumns.jsx';
import TableData from '@/components/core/templates/create/project/manage-data/TableData.jsx';
import PropTypes from 'prop-types';
import { Tab, Tabs } from '@nextui-org/react';

const TableDetails = ({ table }) => {
  return (
    <motion.div
      key={table.name}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className="w-full overflow-hidden"
    >
      <Tabs aria-label="Table details" radius="full" variant="bordered" color="primary">
        <Tab key="columns" title="Columns" className="text-base">
          <TableColumns table={table} />
        </Tab>
        <Tab key="data" title="Data" className="text-base">
          <TableData table={table} />
        </Tab>
      </Tabs>
    </motion.div>
  );
};

TableDetails.propTypes = {
  table: PropTypes.object.isRequired,
};

export default TableDetails;
