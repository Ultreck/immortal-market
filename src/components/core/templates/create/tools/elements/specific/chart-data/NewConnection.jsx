import { Button, Chip } from '@nextui-org/react';
import {
  TbBrandGoogleDrive,
  TbBrandMongodb,
  TbBrandMysql,
  TbFileTypeCsv,
  TbFileTypePdf,
  TbFileZip,
  TbLink,
} from 'react-icons/tb';
import { RiArrowLeftSLine, RiFileExcel2Line } from 'react-icons/ri';
import { SiOracle } from 'react-icons/si';
import PropTypes from 'prop-types';

const NewConnection = ({ onBack }) => {
  return (
    <div>
      <div className="flex items-center space-x-1 mb-6">
        <Button onClick={onBack} variant="bordered" className="mr-2" radius="full" isIconOnly size="sm">
          <RiArrowLeftSLine size="20" />
        </Button>
        <h2 className="text-lg">New Connection</h2>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <Chip
          size="lg"
          variant="flat"
          color="default"
          onClick={() => null}
          className="px-3 py-5 max-w-none h-auto cursor-pointer hover:scale-105 transition-transform bg-default-200 dark:bg-default-100 rounded-3xl"
          classNames={{ content: 'flex items-center justify-center text-teal-500' }}
          title="Excel"
        >
          <RiFileExcel2Line size="28" />
        </Chip>
        <Chip
          size="lg"
          variant="flat"
          color="default"
          onClick={() => null}
          className="px-3 py-5 max-w-none h-auto cursor-pointer hover:scale-105 transition-transform bg-default-200 dark:bg-default-100 rounded-3xl"
          classNames={{ content: 'flex items-center justify-center text-primary-500' }}
          title="CSV"
        >
          <TbFileTypeCsv size="28" />
        </Chip>
        <Chip
          size="lg"
          variant="flat"
          color="default"
          onClick={() => null}
          className="px-3 py-5 max-w-none h-auto cursor-pointer hover:scale-105 transition-transform bg-default-200 dark:bg-default-100 rounded-3xl"
          classNames={{ content: 'flex items-center justify-center text-red-500' }}
          title="PDF"
        >
          <TbFileTypePdf size="28" />
        </Chip>
        <Chip
          size="lg"
          variant="flat"
          color="default"
          onClick={() => null}
          className="px-3 py-5 max-w-none h-auto cursor-pointer hover:scale-105 transition-transform bg-default-200 dark:bg-default-100 rounded-3xl"
          classNames={{ content: 'flex items-center justify-center text-cyan-500' }}
          title="Link"
        >
          <TbLink size="28" />
        </Chip>
        <Chip
          size="lg"
          variant="flat"
          color="default"
          onClick={() => null}
          className="px-3 py-5 max-w-none h-auto cursor-pointer hover:scale-105 transition-transform bg-default-200 dark:bg-default-100 rounded-3xl"
          classNames={{ content: 'flex items-center justify-center text-red-500' }}
          title="Google Drive"
        >
          <TbBrandGoogleDrive size="28" />
        </Chip>
        <Chip
          size="lg"
          variant="flat"
          color="default"
          onClick={() => null}
          className="px-3 py-5 max-w-none h-auto cursor-pointer hover:scale-105 transition-transform bg-default-200 dark:bg-default-100 rounded-3xl"
          classNames={{ content: 'flex items-center justify-center text-yellow-500' }}
          title="MySQL"
        >
          <TbBrandMysql size="28" />
        </Chip>
        <Chip
          size="lg"
          variant="flat"
          color="default"
          onClick={() => null}
          className="px-3 py-5 max-w-none h-auto cursor-pointer hover:scale-105 transition-transform bg-default-200 dark:bg-default-100 rounded-3xl"
          classNames={{ content: 'flex items-center justify-center text-orange-500' }}
          title="Oracle"
        >
          <SiOracle size="28" />
        </Chip>
        <Chip
          size="lg"
          variant="flat"
          color="default"
          onClick={() => null}
          className="px-3 py-5 max-w-none h-auto cursor-pointer hover:scale-105 transition-transform bg-default-200 dark:bg-default-100 rounded-3xl"
          classNames={{ content: 'flex items-center justify-center text-green-500' }}
          title="MongoDB"
        >
          <TbBrandMongodb size="28" />
        </Chip>
        <Chip
          size="lg"
          variant="flat"
          color="default"
          onClick={() => null}
          className="px-3 py-5 max-w-none h-auto cursor-pointer hover:scale-105 transition-transform bg-default-200 dark:bg-default-100 rounded-3xl"
          classNames={{ content: 'flex items-center justify-center text-primary-500' }}
          title="Zip"
        >
          <TbFileZip size="28" />
        </Chip>
      </div>
    </div>
  );
};

NewConnection.propTypes = {
  onBack: PropTypes.func.isRequired,
};

export default NewConnection;
