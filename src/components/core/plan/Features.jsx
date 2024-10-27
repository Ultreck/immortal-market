import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip } from '@nextui-org/react';
import { IconInfoCircle } from '@tabler/icons-react';
import { TbCircleCheckFilled } from 'react-icons/tb';

const data = [
  { feature: 'Meeting polls', free: true, standard: true, teams: true, enterprise: true },
  { feature: 'One-on-ones', free: 'Only 1', standard: true, teams: true, enterprise: true },
  { feature: 'Group event types', free: false, standard: true, teams: true, enterprise: true },
  { feature: 'Collective event types', free: false, standard: true, teams: true, enterprise: true },
  { feature: 'Round robin event types', free: false, standard: false, teams: true, enterprise: true },
  {
    feature: 'Email notifications for bookings and cancellations',
    free: true,
    standard: true,
    teams: true,
    enterprise: true,
  },
  {
    feature: 'Email notifications for reminders and follow-ups',
    free: false,
    standard: true,
    teams: true,
    enterprise: true,
  },
  {
    feature: 'Customize workflows for all forms of notifications',
    free: false,
    standard: true,
    teams: true,
    enterprise: true,
  },
  {
    feature: 'View Contact',
    free: true,
    standard: true,
    teams: true,
    enterprise: true,
  },
];

const renderCellContent = (content) => {
  return content === true ? <TbCircleCheckFilled size="20" className="flex-shrink-0 text-primary-500" /> : content;
};

const Features = () => {
  return (
    <Table>
      <TableHeader>
        <TableColumn className="px-6 py-4 text-left text-md">Core features</TableColumn>
        <TableColumn className="px-6 py-4 text-left text-md border-l border-default-200">
          <span>FREE</span>
          <br />
          $0
        </TableColumn>
        <TableColumn className="px-6 py-4 text-left text-md border-l border-default-200">
          <span>STANDARD</span>
          <br />
          $10
        </TableColumn>
        <TableColumn className="px-6 py-4 text-left text-md border-l border-default-200">
          <span>TEAMS</span>
          <br />
          $16
        </TableColumn>
        <TableColumn className="px-6 py-4 text-left text-md border-l border-default-200">
          <span>ENTERPRISE</span>
          <br />
          Starts at $15k
        </TableColumn>
      </TableHeader>
      <TableBody className="bg-white divide-y divide-gray-200 ">
        {data.map((row, index) => (
          <TableRow key={index}>
            <TableCell className="px-6 py-6 text-md text-left whitespace-nowrap">
              <div className="flex ">
                <span className="flex-1">{row.feature}</span>
                <Tooltip
                  showArrow
                  content={
                    <span className="text-gray-500">
                      More details on <br /> {row.feature}
                    </span>
                  }
                >
                  <IconInfoCircle size={18} color="gray" className=" cursor-pointer" />
                </Tooltip>
              </div>
            </TableCell>
            <TableCell className="px-6 py-6 text-md text-left border-l border-default-200">
              {renderCellContent(row.free)}
            </TableCell>
            <TableCell className="px-6 py-6 text-md text-left border-l border-default-200">
              {renderCellContent(row.standard)}
            </TableCell>
            <TableCell className="px-6 py-6 text-md text-left border-l border-default-200">
              {renderCellContent(row.teams)}
            </TableCell>
            <TableCell className="px-6 py-6 text-md text-left border-l border-default-200">
              {renderCellContent(row.enterprise)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Features;
