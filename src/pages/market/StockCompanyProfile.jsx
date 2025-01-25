import { Card, LinkIcon, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const StockCompanyProfile = ({ stock }) => {
  return (
    <div className="space-y-4">
      <Card className="bg-default-100 px-0 py-6 shadow-none">
        <div className="grid grid-cols-[2fr_2fr_1fr] gap-0 divide-x divide-default-200 px-4">
          <div className="px-4">
            <div className="mb-0.5 text-md opacity-80">Industry</div>
            <p>{stock.company.industry}</p>
          </div>
          <div className="px-4">
            <div className="mb-0.5 text-md opacity-80">Sector</div>
            <p>{stock.company.sector}</p>
          </div>
          <div className="px-4">
            <div className="mb-0.5 text-md opacity-80">Employees</div>
            <p>{stock.company.employees || '-'}</p>
          </div>
        </div>
      </Card>
      <Card className="bg-default-100 px-8 py-6 shadow-none">
        <small className="mb-3 text-md opacity-75">About</small>
        <p>{stock.company.about}</p>
      </Card>
      <Card className="bg-default-100 px-8 py-6 shadow-none">
        <small className="mb-6 text-md opacity-75">Contact information</small>
        <dl className="w-full divide-y divide-gray-200 text-gray-900 dark:divide-gray-700 dark:text-white">
          <div className="grid grid-cols-[1fr_2fr] gap-0">
            <div className="flex flex-col pb-3">
              <dt className="mb-0.5 text-gray-500 dark:text-gray-400">Phone number</dt>
              <dd>{stock.company.phone || 'N/A'}</dd>
            </div>
            <div className="flex flex-col pb-3">
              <dt className="mb-0.5 text-gray-500 dark:text-gray-400">Website</dt>
              <dd className="truncate">
                {stock.company.website ? (
                  <Link
                    to={stock.company.website}
                    target="_blank"
                    className="flex items-center space-x-1 hover:text-primary-600"
                  >
                    <LinkIcon />
                    {stock.company.website}
                  </Link>
                ) : (
                  'N/A'
                )}
              </dd>
            </div>
          </div>
          <div className="flex flex-col py-3">
            <dt className="mb-1 text-gray-500 dark:text-gray-400">Headquarters</dt>
            <dd>{stock.company.address || 'N/A'}</dd>
          </div>
        </dl>
      </Card>
      <Card className="bg-default-100 px-8 py-6 shadow-none">
        <small className="mb-6 text-md opacity-75">Top Executives</small>
        <Table
          aria-label="Top executives table"
          removeWrapper
          isStriped
          classNames={{
            th: 'text-base bg-default-200',
            td: 'text-base group-data-[odd=true]:before:bg-default-200',
          }}
        >
          <TableHeader>
            <TableColumn>Name</TableColumn>
            <TableColumn>Title</TableColumn>
          </TableHeader>
          <TableBody emptyContent={'No data available'}>
            {stock.company.executives.map((e) => (
              <TableRow key={e.id}>
                <TableCell>{e.name}</TableCell>
                <TableCell>{e.title}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

StockCompanyProfile.propTypes = {
  stock: PropTypes.object.isRequired,
};

export default StockCompanyProfile;
