import { Card, Chip } from '@nextui-org/react';
import { RiFileExcel2Line } from 'react-icons/ri';
import { TbBrandMongodb, TbFileTypeCsv, TbFileTypePdf, TbFileZip, TbPlus, TbSql } from 'react-icons/tb';

const StartProjectCard = () => {
  return (
    <Card className="card-shadow px-8 py-6 flex flex-col justify-center">
      <h4 className="text-xl font-semibold">Start a project</h4>
      <p className="text-md mt-1 opacity-80">A lot of the business cannot do the needful so we are here for you!</p>
      <div className="flex flex-wrap gap-x-4 gap-y-3 mt-8 mb-1">
        <Chip
          size="lg"
          variant="flat"
          color="success"
          onClick={() => null}
          className="px-2 py-2 h-auto cursor-pointer hover:scale-105 transition-transform"
        >
          <div className="flex flex-row items-center space-x-1">
            <RiFileExcel2Line size="16" />
            <span>XLSX</span>
          </div>
        </Chip>
        <Chip
          size="lg"
          variant="flat"
          color="secondary"
          onClick={() => null}
          className="px-2 py-2 h-auto cursor-pointer hover:scale-105 transition-transform"
        >
          <div className="flex flex-row items-center space-x-1">
            <TbFileTypeCsv size="16" />
            <span>CSV</span>
          </div>
        </Chip>
        <Chip
          size="lg"
          variant="flat"
          color="danger"
          onClick={() => null}
          className="px-2 py-2 h-auto cursor-pointer hover:scale-105 transition-transform"
        >
          <div className="flex flex-row items-center space-x-1">
            <TbFileTypePdf size="16" />
            <span>PDF</span>
          </div>
        </Chip>
        <Chip
          size="lg"
          variant="flat"
          color="warning"
          onClick={() => null}
          className="px-2 py-2 h-auto cursor-pointer hover:scale-105 transition-transform"
        >
          <div className="flex flex-row items-center space-x-1">
            <TbBrandMongodb size="16" />
            <span>Mongo</span>
          </div>
        </Chip>
        <Chip
          size="lg"
          variant="flat"
          color="warning"
          onClick={() => null}
          className="px-2 py-2 h-auto cursor-pointer hover:scale-105 transition-transform"
        >
          <div className="flex flex-row items-center space-x-1">
            <TbSql size="16" />
            <span>SQL</span>
          </div>
        </Chip>
        <Chip
          size="lg"
          variant="flat"
          color="default"
          onClick={() => null}
          className="px-2 py-2 h-auto cursor-pointer hover:scale-105 transition-transform"
        >
          <div className="flex flex-row items-center space-x-1">
            <TbFileZip size="16" />
            <span>Zip</span>
          </div>
        </Chip>
        <Chip
          size="lg"
          variant="flat"
          color="default"
          onClick={() => null}
          className="px-2 py-2 h-auto cursor-pointer hover:scale-105 transition-transform"
        >
          <div className="flex flex-row items-center space-x-1">
            <TbPlus size="16" />
            <span>Others</span>
          </div>
        </Chip>
      </div>
    </Card>
  );
};

export default StartProjectCard;
