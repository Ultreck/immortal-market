import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip } from '@heroui/react';
import { IconInfoCircle } from '@tabler/icons-react';
import { TbCircleCheckFilled } from 'react-icons/tb';
import plans from '@/lib/plans.js';

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
          <span>PREMIUM</span>
          <br />
          $15
        </TableColumn>
      </TableHeader>
      <TableBody className="bg-white divide-y divide-gray-200 ">
        {plans.map((row, index) => (
          <TableRow key={index}>
            <TableCell className="px-6 py-6 text-md text-left whitespace-nowrap">
              <div className="flex ">
                <span className="flex-1">{row.feature}</span>
                <Tooltip showArrow content={<span className="text-gray-500">{row.feature}</span>}>
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
              {renderCellContent(row.premium)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Features;
