import { TbDatabase, TbInfoCircle, TbLink, TbTablePlus } from 'react-icons/tb';
import { Button, Tooltip } from '@nextui-org/react';
import PropTypes from 'prop-types';
import useCurrentDesign from '@/hooks/template/use-current-design.js';
import { camelCaseToWords } from '@/lib/utils.js';
import Title from '@/components/core/shared/Title.jsx';

const TableColumns = ({ table }) => {
  return (
    <div className="border border-default-200 pt-4 pb-2 rounded-2xl">
      <div className="flex items-center justify-between px-8">
        <div className="flex items-center space-x-3">
          <TbDatabase size="16" />
          <p className="text-base font-semibold">{table.slug}</p>
        </div>
        <Button
          variant="bordered"
          size="sm"
          radius="full"
          className="text-base"
          startContent={<TbTablePlus size="16" />}
          isDisabled
        >
          Add column
        </Button>
      </div>
      <div className="mt-4">
        {table.columns.map((column, j) => {
          return <TableColumnItem key={j} table={table.name} column={column} />;
        })}
      </div>
    </div>
  );
};

const TableColumnItem = ({ table, column }) => {
  const { source } = useCurrentDesign();
  const relationship = source.relationships?.find((r) => r.column === column.key && r.table === table);
  const reference = source.relationships?.find((r) => r.refColumn === column.key && r.refTable === table);

  return (
    <div className="flex justify-between items-center px-8 py-[5px]">
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
            <div className="w-[18px] h-[18px] rounded-full flex items-center justify-center bg-default-200 text-default-500">
              <TbLink size="13" />
            </div>
          </Tooltip>
        )}
        {!!relationship && (
          <Tooltip
            content={
              <div className="pt-4 pb-2">
                <div className="flex items-center justify-between space-x-3 mb-3 px-4">
                  <Title title="Relationship" classNames={{ title: 'text-base', base: 'mb-0' }} />
                </div>
                <div className="divide-y divide-default-200">
                  <div className="space-x-2 px-4 py-2 flex items-center justify-between">
                    <p className="opacity-75">Ref table</p>
                    <p className="text-base text-right">
                      {source.tables.find((t) => t.name === relationship.refTable)?.slug}
                    </p>
                  </div>
                  <div className="space-x-2 px-4 py-2 flex items-center justify-between">
                    <p className="opacity-75">Ref column</p>
                    <p className="text-base text-right">{relationship.refColumn}</p>
                  </div>
                  <div className="space-x-2 px-4 py-2 flex items-center justify-between">
                    <p className="opacity-75">Type</p>
                    <p className="text-base text-right">{relationship.type}</p>
                  </div>
                </div>
              </div>
            }
          >
            <div className="w-[18px] h-[18px] rounded-full flex items-center justify-center bg-green-500 text-white">
              <TbLink size="13" />
            </div>
          </Tooltip>
        )}
      </div>
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
