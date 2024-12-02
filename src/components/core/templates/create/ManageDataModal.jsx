import useTemplateStore from '@/store/template.js';
import Drawer from '@/components/ui/Drawer.jsx';
import { useGetDesignSource, useGetTableData, useProcessData } from '@/api/business.js';
import {
  Button,
  getKeyValue,
  Skeleton,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';
import NoData from '@/components/ui/NoData.jsx';
import { TbDatabaseOff, TbFolder } from 'react-icons/tb';
import useBusiness from '@/hooks/use-business.js';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { camelCaseToWords, cn } from '@/lib/utils.js';
import { useToast } from '@/hooks/use-toast.jsx';

const ManageDataModal = () => {
  const isOpen = useTemplateStore((state) => state.template.isManageDataOpen);
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const { id: business } = useBusiness();
  const id = useTemplateStore((state) => state.template.id);
  const { data: { source = {} } = {}, isLoading } = useGetDesignSource(business, id);

  const handleClose = () => {
    updateTemplate({ isManageDataOpen: false });
  };

  return (
    <Drawer isOpen={isOpen} onClose={handleClose} padding={false} width={1000}>
      {isLoading ? (
        <div className="px-14 py-12 flex flex-col items-center justify-center h-full">
          <Spinner size="lg" />
          <p className="mt-6">Just a moment</p>
        </div>
      ) : (
        <>
          {source ? (
            <>
              <Tables />
            </>
          ) : (
            <div className="px-14 py-12">
              <NoData text="No data source configured for this project" />
            </div>
          )}
        </>
      )}
    </Drawer>
  );
};

const Tables = () => {
  const { id: business } = useBusiness();
  const id = useTemplateStore((state) => state.template.id);
  const { data: { source = {} } = {} } = useGetDesignSource(business, id);
  const [current, setCurrent] = useState(source.tables[0].name);

  return (
    <>
      <div className="px-14 py-12">
        <div className="flex space-x-2">
          {source.tables.map((table, i) => (
            <button
              key={table.name}
              className={cn('flex items-center space-x-3 bg-default-100 px-4 py-1.5 rounded-2xl', {
                'bg-primary-500 text-white': current === table.name,
              })}
              onClick={() => setCurrent(table.name)}
            >
              <TbFolder size="24" />
              <h3 className="text-lg font-semibold">{i + 1}</h3>
            </button>
          ))}
        </div>
        <div className="mt-6">{!!current && <TableData table={current} />}</div>
      </div>
    </>
  );
};

const TableData = ({ table }) => {
  const { id: business } = useBusiness();
  const id = useTemplateStore((state) => state.template.id);
  const { data: { data } = {}, isLoading } = useGetTableData({ business, design: id, table });

  const keys = data?.length ? Object.keys(data[0]).filter((key) => !key.match(/^_id|__v$/gi)) : [];
  const columns = keys.map((key) => ({ key, label: camelCaseToWords(key) }));

  return (
    <div>
      {isLoading ? (
        <Skeleton className="h-[300px] rounded-2xl" />
      ) : (
        <>
          {columns.length ? (
            <Table
              classNames={{ wrapper: 'border shadow-none border-default-200', td: 'text-base', th: 'text-base' }}
              aria-label="Data table"
            >
              <TableHeader columns={columns}>
                {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
              </TableHeader>
              <TableBody items={data}>
                {(item) => (
                  <TableRow key={item._id}>
                    {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                  </TableRow>
                )}
              </TableBody>
            </Table>
          ) : (
            <InsertData text="No data available for this table" />
          )}
        </>
      )}
    </div>
  );
};

const InsertData = () => {
  const toast = useToast();
  const { id: business } = useBusiness();
  const id = useTemplateStore((state) => state.template.id);
  const { mutateAsync: process, isPending: isProcessDataLoading } = useProcessData(business, id);

  const handleClick = async () => {
    try {
      await process();
    } catch (e) {
      toast.error(e?.response?.data?.message ?? e?.message ?? 'Something went wrong, please try again');
    }
  };

  return (
    <div className="flex flex-col items-center bg-default-100 px-10 py-20 rounded-2xl">
      <TbDatabaseOff size={120} className="opacity-70" />
      <p className="mt-6 max-w-xs text-center">
        No data available, click the button below to insert data for all files
      </p>
      <Button
        onClick={handleClick}
        isLoading={isProcessDataLoading}
        color="default"
        variant="bordered"
        className="mt-8 text-base"
        radius="full"
      >
        Process data
      </Button>
    </div>
  );
};

TableData.propTypes = {
  table: PropTypes.string.isRequired,
};

export default ManageDataModal;
