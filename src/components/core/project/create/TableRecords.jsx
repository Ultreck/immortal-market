import { useState } from 'react';
import useBusiness from '@/hooks/use-business.js';
import useTemplateStore from '@/store/template.js';
import { useGetTableData, useProcessData } from '@/api/business.js';
import { camelCaseToWords } from '@/lib/utils.js';
import {
  Button,
  Pagination,
  Skeleton,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@heroui/react';
import PropTypes from 'prop-types';
import { useToast } from '@/hooks/use-toast.jsx';
import { TbDatabaseOff } from 'react-icons/tb';

const limit = 10;

const TableRecords = ({ table }) => {
  const { id: business } = useBusiness();
  const id = useTemplateStore((state) => state.template.id);
  const [page, setPage] = useState(1);
  const {
    data: { data, total } = {},
    isLoading,
    isFetching,
  } = useGetTableData({
    business,
    design: id,
    table: table.name,
    page,
    limit,
  });

  const keys = data?.length ? Object.keys(data[0]).filter((key) => !key.match(/^_id|__v$/gi)) : [];
  const columns = keys.map((key) => ({ key, label: camelCaseToWords(key) }));

  return (
    <div>
      {isLoading ? (
        <Skeleton className="h-[300px] rounded-2xl" />
      ) : (
        <>
          {!!columns.length && (
            <Table
              classNames={{
                wrapper: 'border border-default-200 shadow-none',
                td: 'text-base whitespace-nowrap',
                th: 'text-base bg-default-200',
                table: isFetching ? 'opacity-50' : '',
              }}
              aria-label="Data table"
            >
              <TableHeader>
                {columns.map((column) => (
                  <TableColumn key={column.key}>{column.label}</TableColumn>
                ))}
              </TableHeader>
              <TableBody emptyContent={'No rows to display.'}>
                {data.map((item) => (
                  <TableRow key={item._id}>
                    {columns.map((column) => (
                      <TableCell key={column.key}>{item[column.key]}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
          {!data.length && !isLoading && !total && <InsertData text="No data available for this table" />}
          {!!total && (
            <div className="flex w-full space-x-4 mt-6">
              <Pagination
                isCompact
                showControls
                color="default"
                page={page}
                total={Math.ceil(total / limit)}
                onChange={(page) => setPage(page)}
                isDisabled={isFetching}
              />
              {isFetching && <Spinner size="sm" color="primary" />}
            </div>
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
    <div className="flex flex-col items-center border border-default-200 px-10 py-20 rounded-2xl">
      <TbDatabaseOff size={120} className="opacity-70" />
      <p className="mt-6 max-w-xs text-center">
        No data available, click the button below to insert data for all files
      </p>
      <Button
        onPress={handleClick}
        isLoading={isProcessDataLoading}
        color="default"
        variant="bordered"
        className="mt-8 text-base"
        radius="full"
      >
        Load data
      </Button>
    </div>
  );
};

TableRecords.propTypes = {
  table: PropTypes.string.isRequired,
};

export default TableRecords;
