/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Chip,
  Card,
  User,
  Pagination,
  Input,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  AvatarGroup,
  Tooltip,
  Avatar,
} from '@nextui-org/react'
import { columns, users, statusOptions } from './data'
import { TbSearch } from 'react-icons/tb'
import Empty from '../../icons/empty'
import { IconDotsVertical } from '@tabler/icons-react'
import { TbBrandMongodb, TbFileTypeCsv, TbFileTypePdf, TbFileZip, TbSql } from 'react-icons/tb';
import { RiFileExcel2Line } from 'react-icons/ri';



const INITIAL_VISIBLE_COLUMNS = [
  'request type',
  'assigned staff',
  'actions',
]

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
]


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



export default function OverViewTable({handleOpenDrawer}) {
  const [filterValue, setFilterValue] = React.useState('')
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]))
  const [visibleColumns, setVisibleColumns] = React.useState(
    new Set(INITIAL_VISIBLE_COLUMNS)
  )

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const handlePreview = () => {
    setIsDrawerOpen(true)
  }
  const [statusFilter, setStatusFilter] = React.useState('all')
  const [rowsPerPage, setRowsPerPage] = React.useState(5)
  const [sortDescriptor, setSortDescriptor] = React.useState({
    column: 'age',
    direction: 'ascending',
  })
  const [page, setPage] = React.useState(1)

  const pages = Math.ceil(users.length / rowsPerPage)

  const hasSearchFilter = Boolean(filterValue)

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === 'all') return columns

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    )
  }, [visibleColumns])

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...users]

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.type.toLowerCase().includes(filterValue.toLowerCase())
      )
    }
    if (
      statusFilter !== 'all' &&
      Array.from(statusFilter).length !== statusOptions.length
    ) {
      filteredUsers = filteredUsers.filter((user) =>
        Array.from(statusFilter).includes(user.status)
      )
    }

    return filteredUsers
  }, [users, filterValue, statusFilter])

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage
    const end = start + rowsPerPage

    return filteredItems.slice(start, end)
  }, [page, filteredItems, rowsPerPage])

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a[sortDescriptor.column]
      const second = b[sortDescriptor.column]
      const cmp = first < second ? -1 : first > second ? 1 : 0

      return sortDescriptor.direction === 'descending' ? -cmp : cmp
    })
  }, [sortDescriptor, items])

  // const renderCell = React.useCallback((user, columnKey) => {
  //   const cellValue = user[columnKey]
  //   switch (columnKey) {
  //     case 'assigned staff':
  //       return (
  //         <div className=' flex gap-2'>
  //           <User
  //             avatarProps={{ radius: 'full', size: 'md', src: user.avatar }}
  //             classNames={{
  //               description: 'text-default-500',
  //             }}
  //           >
  //           </User>
  //             <div className='flex flex-col'>
  //               <span className='text-default-600'>{user.name}</span>
  //               <span className='text-gray-400 text-xs'>3 days ago</span>
  //             </div>
  //         </div>
  //       )
  //     case 'request type':
  //       return (
  //         <div className='flex flex-col'>
  //           <p className='text-bold text-tiny capitalize text-default-400'>
  //             {user.type}
  //           </p>
  //         </div>
  //       )
     
  //     case 'actions':
  //       return (
  //         <div className="relative flex justify-end items-center gap-2">
  //           <Dropdown>
  //             <DropdownTrigger>
  //               <Button isIconOnly size="sm" variant="light">
  //                 <IconDotsVertical className="text-default-300" />
  //               </Button>
  //             </DropdownTrigger>
  //             <DropdownMenu>
  //               <DropdownItem>View</DropdownItem>
  //               <DropdownItem>Edit</DropdownItem>
  //             </DropdownMenu>
  //           </Dropdown>
  //         </div>
  //       )

  //     default:
  //       return cellValue
  //   }
  // }, [])


  
  const bottomContent = React.useMemo(() => {
    return (
      <div className='py-2 px-2 flex justify-between items-center'>
        {
          users?.length > 0 &&

          <Pagination
            showControls
            classNames={{
              cursor: 'bg-foreground text-background',
            }}
            color='default'
            isDisabled={hasSearchFilter}
            page={page}
            total={pages}
            variant='light'
            onChange={setPage}
          />
        }
      </div>
    )
  }, [selectedKeys, items.length, page, pages, hasSearchFilter])

  const classNames = React.useMemo(
    () => ({
      wrapper: ['max-h[382px]', 'max-w3xl', 'bg-white', 'border-none'],
      th: ['bg-transparent', 'text-default-500',  ' shadow-none'],
      td: [
        'border-b py-2',
        'border-divider',
        // first
        'group-data-[first=true]:first:before:rounded-none',
        'group-data-[first=true]:last:before:rounded-none',
        // middle
        'group-data-[middle=true]:before:rounded-none',
        // last
        'group-data-[last=true]:first:before:rounded-none',
        'group-data-[last=true]:last:before:rounded-none',
      ],
    }),
    []
  )


  const onSearchChange = React.useCallback((value) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = React.useCallback(()=>{
    setFilterValue("")
    setPage(1)
  },[])





const EmptyState = ()=>{
    return (
        <div className='flex flex-col items-center gap-4 justify-center max-h-60 py-10'>
          <Empty />
          <div className='text-lg font-thin'>No projects</div>
        </div>
    )
}

const handleClick = (item) => {
  console.log({ item });
};





  return (
    <div className='bg-white dark:bg-[#18181b] border dark:border-none rounded-lg mt-8 py-2'>

      <div className=' border-b dark:border-b-[#2e2e31] flex justify-between p-2 py-4 flex-wrap gap-1'>
        <div>
          <Input
            isClearable 
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          variant="bordered" 
          placeholder='search Project' 
          startContent={<TbSearch/>} />
        </div>
        <Button variant="faded">Ask A Question</Button>
      </div>

      <Table
        isStriped
        aria-label='Example table with custom cells, pagination and sorting'
        isHeaderSticky
        bottomContent={bottomContent}
        bottomContentPlacement='outside'
        classNames={{
          wrapper: 'max-h-[382px] rounded-md flex items-center justify-center my-2 border-0 shadow-none',
          td: 'py-4 px-4 text-base cursor-pointer first:rounded-l-xl last:rounded-r-xl group-hover:bg-default-50',
        }}
        className={classNames}
        selectedKeys={selectedKeys}
        sortDescriptor={sortDescriptor}
        topContentPlacement='outside'
        onSelectionChange={setSelectedKeys}
        onSortChange={setSortDescriptor}
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
        {/* <TableBody emptyContent={<EmptyState/>} items={sortedItems}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody> */}
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
    </div>
  )
}
