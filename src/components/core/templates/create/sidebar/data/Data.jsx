import { RiApps2Line, RiArrowRightSLine, RiTable2 } from 'react-icons/ri';
import { Accordion, AccordionItem } from '@nextui-org/react';
import Tables from './Tables';
import DataTags from './DataTags.jsx';
import { Chip } from '@nextui-org/react';
import { RiFileExcel2Line } from 'react-icons/ri';
import {
  TbBrandGoogleDrive,
  TbBrandMongodb,
  TbBrandMysql,
  TbFileTypeCsv,
  TbFileTypePdf,
  TbFileZip,
  TbLink,
  TbPlus,
  TbStar,
} from 'react-icons/tb';
import { SiOracle } from 'react-icons/si';
import DataBlocks from '@/components/core/templates/create/sidebar/data/DataBlocks.jsx';

const Data = () => {
  return (
    <Accordion
      variant="bordered"
      itemClasses={{ base: 'px-3', content: 'pt-4 pb-5', title: 'whitespace-nowrap text-base' }}
    >
      <AccordionItem
        key="1"
        aria-label="Connect"
        title="Connect"
        startContent={<TbStar size="20" />}
        indicator={<RiArrowRightSLine size="20" />}
      >
        <div className="flex flex-wrap justify-between gap-x-4 gap-y-3 mb-1">
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
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="My stacks"
        title="My stacks"
        startContent={<TbStar size="20" />}
        indicator={<RiArrowRightSLine size="20" />}
      >
        <div>My stacks</div>
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Shared Data"
        title="Shared Data"
        startContent={<TbStar size="20" />}
        indicator={<RiArrowRightSLine size="20" />}
      >
        <div>Shared Data</div>
      </AccordionItem>
      <AccordionItem
        key="data-tags"
        aria-label="Data tags"
        title="Data tags"
        startContent={<RiApps2Line size="20" />}
        indicator={<RiArrowRightSLine size="20" />}
      >
        <DataTags />
      </AccordionItem>
      <AccordionItem
        key="data-blocks"
        aria-label="Data tag blocks"
        title="Data tag blocks"
        startContent={<RiApps2Line size="20" />}
        indicator={<RiArrowRightSLine size="20" />}
      >
        <DataBlocks />
      </AccordionItem>
      <AccordionItem
        key="6"
        aria-label="Tags"
        title="Tags"
        startContent={<TbStar size="20" />}
        indicator={<RiArrowRightSLine size="20" />}
      >
        <div>Tags</div>
      </AccordionItem>
    </Accordion>
  );
};

export default Data;
