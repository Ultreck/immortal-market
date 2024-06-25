import {
  Avatar,
  AvatarGroup,
  Card,
  CardBody,
  Chip,
  Input,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from '@nextui-org/react';
import { TbBrandMongodb, TbFileTypeCsv, TbFileTypePdf, TbFileZip, TbSearch, TbSql } from 'react-icons/tb';
import { RiFileExcel2Line } from 'react-icons/ri';

const data = [
  {
    id: 1,
    name: 'Laza Bogdan',
    avatar:
      'https://media.istockphoto.com/id/517302398/photo/portrait-of-nigerian-man-with-beard-looking-at-camera.jpg?s=612x612&w=0&k=20&c=BC5pdsmTWzmFO3mIlA7TQAIECnJ7Kpd-daL6G4RJqT4=',
    timeline: '2 days ago',
    team: [
      'https://media.istockphoto.com/id/172316242/photo/traditional-wear.jpg?s=612x612&w=0&k=20&c=yJJUq71Vrc83JZ7b4CH3DYTy3l7GuDvZ6VfTT4NCT6M=',
      'https://media.istockphoto.com/id/1162121648/photo/portrait-of-a-young-african-student.jpg?s=612x612&w=0&k=20&c=rTl-nR5EUAckz0lxabcCosCs2OWcmzQsl2oFWRxdWuA=',
    ],
    fileType: 'Excel',
    project: 'Using Angular HttpClientModules instead of HttpModule',
    projectType: ['Banking', 'Investment'],
  },
  {
    id: 2,
    name: 'Adam Curtis',
    avatar:
      'https://media.istockphoto.com/id/517302398/photo/portrait-of-nigerian-man-with-beard-looking-at-camera.jpg?s=612x612&w=0&k=20&c=BC5pdsmTWzmFO3mIlA7TQAIECnJ7Kpd-daL6G4RJqT4=',
    timeline: '2 days ago',
    team: [
      'https://media.istockphoto.com/id/172316242/photo/traditional-wear.jpg?s=612x612&w=0&k=20&c=yJJUq71Vrc83JZ7b4CH3DYTy3l7GuDvZ6VfTT4NCT6M=',
      'https://media.istockphoto.com/id/1162121648/photo/portrait-of-a-young-african-student.jpg?s=612x612&w=0&k=20&c=rTl-nR5EUAckz0lxabcCosCs2OWcmzQsl2oFWRxdWuA=',
    ],
    fileType: 'Pdf',
    project: 'Overall investment planning for 3rd quarter',
    projectType: ['Banking'],
  },
  {
    id: 3,
    name: 'Adam Curtis',
    avatar:
      'https://media.istockphoto.com/id/1162121648/photo/portrait-of-a-young-african-student.jpg?s=612x612&w=0&k=20&c=rTl-nR5EUAckz0lxabcCosCs2OWcmzQsl2oFWRxdWuA=',
    timeline: '2 days ago',
    team: [
      'https://media.istockphoto.com/id/172316242/photo/traditional-wear.jpg?s=612x612&w=0&k=20&c=yJJUq71Vrc83JZ7b4CH3DYTy3l7GuDvZ6VfTT4NCT6M=',
      'https://media.istockphoto.com/id/1162121648/photo/portrait-of-a-young-african-student.jpg?s=612x612&w=0&k=20&c=rTl-nR5EUAckz0lxabcCosCs2OWcmzQsl2oFWRxdWuA=',
    ],
    fileType: 'SQL',
    project: 'Overall investment planning for 3rd quarter',
    projectType: ['Banking'],
  },
  {
    id: 4,
    name: 'Adam Curtis',
    avatar:
      'https://media.istockphoto.com/id/172316242/photo/traditional-wear.jpg?s=612x612&w=0&k=20&c=yJJUq71Vrc83JZ7b4CH3DYTy3l7GuDvZ6VfTT4NCT6M=',
    timeline: '2 days ago',
    team: [
      'https://media.istockphoto.com/id/172316242/photo/traditional-wear.jpg?s=612x612&w=0&k=20&c=yJJUq71Vrc83JZ7b4CH3DYTy3l7GuDvZ6VfTT4NCT6M=',
      'https://media.istockphoto.com/id/1162121648/photo/portrait-of-a-young-african-student.jpg?s=612x612&w=0&k=20&c=rTl-nR5EUAckz0lxabcCosCs2OWcmzQsl2oFWRxdWuA=',
    ],
    fileType: 'Mongo',
    project: 'Overall investment planning for 3rd quarter',
    projectType: ['Banking', 'Investment'],
  },
  {
    id: 5,
    name: 'Adam Curtis',
    avatar:
      'https://media.istockphoto.com/id/172316242/photo/traditional-wear.jpg?s=612x612&w=0&k=20&c=yJJUq71Vrc83JZ7b4CH3DYTy3l7GuDvZ6VfTT4NCT6M=',
    timeline: '2 days ago',
    team: [
      'https://media.istockphoto.com/id/172316242/photo/traditional-wear.jpg?s=612x612&w=0&k=20&c=yJJUq71Vrc83JZ7b4CH3DYTy3l7GuDvZ6VfTT4NCT6M=',
      'https://media.istockphoto.com/id/1162121648/photo/portrait-of-a-young-african-student.jpg?s=612x612&w=0&k=20&c=rTl-nR5EUAckz0lxabcCosCs2OWcmzQsl2oFWRxdWuA=',
    ],
    fileType: 'Zip',
    project: 'Overall investment planning for 3rd quarter',
    projectType: ['Banking', 'Investment'],
  },
  {
    id: 6,
    name: 'Adam Curtis',
    avatar:
      'https://media.istockphoto.com/id/172316242/photo/traditional-wear.jpg?s=612x612&w=0&k=20&c=yJJUq71Vrc83JZ7b4CH3DYTy3l7GuDvZ6VfTT4NCT6M=',
    timeline: '2 days ago',
    team: [
      'https://media.istockphoto.com/id/172316242/photo/traditional-wear.jpg?s=612x612&w=0&k=20&c=yJJUq71Vrc83JZ7b4CH3DYTy3l7GuDvZ6VfTT4NCT6M=',
      'https://media.istockphoto.com/id/1162121648/photo/portrait-of-a-young-african-student.jpg?s=612x612&w=0&k=20&c=rTl-nR5EUAckz0lxabcCosCs2OWcmzQsl2oFWRxdWuA=',
    ],
    fileType: 'Csv',
    project: 'Overall investment planning for 3rd quarter',
    projectType: ['Banking', 'Investment'],
  },
];

const ExcelView = () => {
  return (
    <Chip color="success" className="px-1">
      <div className="flex flex-row items-center space-x-1">
        <RiFileExcel2Line size="16" />
        <span>XLSX</span>
      </div>
    </Chip>
  );
};

const CsvView = () => {
  return (
    <Chip color="secondary" className="px-1">
      <div className="flex flex-row items-center space-x-1">
        <TbFileTypeCsv size="16" />
        <span>CSV</span>
      </div>
    </Chip>
  );
};

const PDFView = () => {
  return (
    <Chip color="danger" className="px-1">
      <div className="flex flex-row items-center space-x-1">
        <TbFileTypePdf size="16" />
        <span>PDF</span>
      </div>
    </Chip>
  );
};

const MongoView = () => {
  return (
    <Chip color="warning" className="px-1">
      <div className="flex flex-row items-center space-x-1">
        <TbBrandMongodb size="16" />
        <span>Mongo</span>
      </div>
    </Chip>
  );
};

const SQLView = () => {
  return (
    <Chip color="warning" className="px-1">
      <div className="flex flex-row items-center space-x-1">
        <TbSql size="16" />
        <span>SQL</span>
      </div>
    </Chip>
  );
};

const ZipView = () => {
  return (
    <Chip color="default" className="px-1">
      <div className="flex flex-row items-center space-x-1">
        <TbFileZip size="16" />
        <span>Zip</span>
      </div>
    </Chip>
  );
};

const fileTypesMap = {
  Excel: <ExcelView />,
  Csv: <CsvView />,
  Pdf: <PDFView />,
  Zip: <ZipView />,
  Mongo: <MongoView />,
  SQL: <SQLView />,
};

const ProjectTable = () => {
  const handleClick = (item) => {
    console.log({ item });
  };

  return (
    <Card className="card-shadow">
      <CardBody className="px-0 py-8">
        <div className="px-8 mb-8">
          <Input
            type="text"
            name="query"
            id="query"
            size="sm"
            classNames={{ input: 'text-base', base: 'transition-all duration-300 w-[260px]', inputWrapper: 'h-11' }}
            startContent={<TbSearch size="24" className="mx-1 opacity-30" />}
            placeholder="Search.."
            radius="full"
            variant="bordered"
          />
        </div>
        <Table
          classNames={{
            td: 'py-4 px-4 cursor-pointer first:rounded-l-lg last:rounded-r-lg group-hover:bg-default-100',
            th: 'text-md px-4',
            base: 'px-8',
            tr: 'group',
          }}
          removeWrapper
        >
          <TableHeader
            columns={[
              { name: 'NAME', uid: 'name' },
              { name: 'SOURCE', uid: 'source' },
              { name: 'COLLABORATORS', uid: 'collaborators' },
            ]}
          >
            {(column) => (
              <TableColumn key={column.uid} align={column.uid === 'actions' ? 'center' : 'start'}>
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={data}>
            {(item) => (
              <TableRow key={item.id} onClick={() => handleClick(item)} className="group">
                <TableCell>
                  <div className="flex flex-col space-y-2">
                    <p>{item.project}</p>
                    <div className="flex gap-2">
                      {item.projectType?.map((dt, ind) => (
                        <Chip key={ind} color="success" variant="flat" size="sm" className="text-sm px-2">
                          {dt}
                        </Chip>
                      ))}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="relative flex  items-center gap-2 min-w-20">{fileTypesMap[item.fileType]}</div>
                </TableCell>
                <TableCell>
                  <AvatarGroup>
                    {item.team.map((image) => (
                      <Tooltip
                        key={image}
                        showArrow={true}
                        placement="bottom"
                        content="John Doe"
                        classNames={{ content: 'whitespace-nowrap' }}
                      >
                        <Avatar size="md" src={image} name={image} />
                      </Tooltip>
                    ))}
                  </AvatarGroup>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className="mt-8 px-8">
          <Pagination showControls total={2} initialPage={1} color="default" variant="bordered" />
        </div>
      </CardBody>
    </Card>
  );
};

export default ProjectTable;
