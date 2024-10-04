import { Chip } from '@nextui-org/react';
import React from 'react';
import {
  TbBrandGoogleDrive,
  TbBrandMongodb,
  TbBrandMysql,
  TbFileTypeCsv,
  TbFileTypePdf,
  TbFileZip,
  TbLink,
} from 'react-icons/tb';
import { RiFileExcel2Line } from 'react-icons/ri';
import { SiOracle } from 'react-icons/si';

const NewConnection = () => {
  return (
    <div>
      <div className="grid grid-cols-5 gap-4">
        <Chip
          size="lg"
          variant="flat"
          color="default"
          onClick={() => null}
          radius="full"
          className="px-3 py-5 h-auto cursor-pointer hover:scale-105 transition-transform bg-default-200/60 dark:bg-default-100/60"
          title="Excel"
        >
          <div className="flex flex-row items-center space-x-1 text-teal-500">
            <RiFileExcel2Line size="28" />
          </div>
        </Chip>
        <Chip
          size="lg"
          variant="flat"
          color="default"
          onClick={() => null}
          radius="full"
          className="px-3 py-5 h-auto cursor-pointer hover:scale-105 transition-transform bg-default-200/60 dark:bg-default-100/60"
          title="CSV"
        >
          <div className="flex flex-row items-center space-x-1 text-primary-500">
            <TbFileTypeCsv size="28" />
          </div>
        </Chip>
        <Chip
          size="lg"
          variant="flat"
          color="default"
          onClick={() => null}
          radius="full"
          className="px-3 py-5 h-auto cursor-pointer hover:scale-105 transition-transform bg-default-200/60 dark:bg-default-100/60"
          title="PDF"
        >
          <div className="flex flex-row items-center space-x-1 text-red-500">
            <TbFileTypePdf size="28" />
          </div>
        </Chip>
        <Chip
          size="lg"
          variant="flat"
          color="default"
          onClick={() => null}
          radius="full"
          className="px-3 py-5 h-auto cursor-pointer hover:scale-105 transition-transform bg-default-200/60 dark:bg-default-100/60"
          title="Link"
        >
          <div className="flex flex-row items-center space-x-1 text-cyan-500">
            <TbLink size="28" />
          </div>
        </Chip>
        <Chip
          size="lg"
          variant="flat"
          color="default"
          onClick={() => null}
          radius="full"
          className="px-3 py-5 h-auto cursor-pointer hover:scale-105 transition-transform bg-default-200/60 dark:bg-default-100/60"
          title="Google Drive"
        >
          <div className="flex flex-row items-center space-x-1 text-red-500">
            <TbBrandGoogleDrive size="28" />
          </div>
        </Chip>
        <Chip
          size="lg"
          variant="flat"
          color="default"
          onClick={() => null}
          radius="full"
          className="px-3 py-5 h-auto cursor-pointer hover:scale-105 transition-transform bg-default-200/60 dark:bg-default-100/60"
          title="MySQL"
        >
          <div className="flex flex-row items-center space-x-1 text-yellow-500">
            <TbBrandMysql size="28" />
          </div>
        </Chip>
        <Chip
          size="lg"
          variant="flat"
          color="default"
          onClick={() => null}
          radius="full"
          className="px-3 py-5 h-auto cursor-pointer hover:scale-105 transition-transform bg-default-200/60 dark:bg-default-100/60"
          title="Oracle"
        >
          <div className="flex flex-row items-center space-x-1 text-orange-500">
            <SiOracle size="28" />
          </div>
        </Chip>
        <Chip
          size="lg"
          variant="flat"
          color="default"
          onClick={() => null}
          radius="full"
          className="px-3 py-5 h-auto cursor-pointer hover:scale-105 transition-transform bg-default-200/60 dark:bg-default-100/60"
          title="MongoDB"
        >
          <div className="flex flex-row items-center space-x-1 text-green-500">
            <TbBrandMongodb size="28" />
          </div>
        </Chip>
        <Chip
          size="lg"
          variant="flat"
          color="default"
          onClick={() => null}
          radius="full"
          className="px-3 py-5 h-auto cursor-pointer hover:scale-105 transition-transform bg-default-200/60 dark:bg-default-100/60"
          title="Zip"
        >
          <div className="flex flex-row items-center space-x-1 text-primary-500">
            <TbFileZip size="28" />
          </div>
        </Chip>
      </div>
    </div>
  );
};

export default NewConnection;
