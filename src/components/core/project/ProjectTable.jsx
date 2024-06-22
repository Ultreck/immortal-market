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
import { columns, data, statusOptions } from './data'
import { TbSearch } from 'react-icons/tb'
import Empty from '../../icons/empty'
import { IconDotsVertical } from '@tabler/icons-react'

import { RiFileExcel2Line } from "react-icons/ri";
import { TbFileTypeCsv, TbFileTypePdf } from "react-icons/tb";
import { MdOutlineFolderZip } from "react-icons/md";

const statusColorMap = {
    completed: 'success',
    pending: 'warning',
    cancelled: 'warning',
    rejected: 'danger',
}

const ExcelView = ()=>{
    return (
        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-green-700 text-white text-xl md:text-3xl font-semibold">
                <RiFileExcel2Line
                size="20"
                className="bg-gradient-to-r from-green-700 to--600 bg-clip-text text-white"
                />
            </div>
    )
}
const CsvView = ()=>{
    return (
        <div className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-green-700 text-white text-xl md:text-3xl font-semibold">
        <TbFileTypeCsv
        size="20"
        className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-green-700"
        />
    </div>
    )
}
const PDFView = ()=>{
    return (
        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-red-500 text-white text-xl md:text-3xl font-semibold">
        <TbFileTypePdf
        size="20"
        className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-white"
        />
    </div>
    )
}
const ZipView = ()=>{
    return (
        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#0f86c5] text-white text-xl md:text-3xl font-semibold">
        <MdOutlineFolderZip
        size="20"
        className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-white"
        />
    </div>
    )
}



const fileTypeMap = {
    Excel: <ExcelView/>,
    Csv: <CsvView/>,
    Pdf: <PDFView/>,
    Zip: <ZipView/>,
}





const INITIAL_VISIBLE_COLUMNS = [
  'user',
  'project',
  'file type',
  'team',
]


export default function ProjectTable({handleOpenDrawer}) {
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

  const pages = Math.ceil(data.length / rowsPerPage)

  const hasSearchFilter = Boolean(filterValue)

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === 'all') return columns

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    )
  }, [visibleColumns])

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...data]

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.project.toLowerCase().includes(filterValue.toLowerCase())
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
  }, [data, filterValue, statusFilter])

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

  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey]
    // console.log(columnKey, user)

    switch (columnKey) {
      case 'user':
        return (
          <div className=' flex gap-2 items-start -mt-7'>
            <User
              avatarProps={{ radius: 'full', size: 'md', src: user.avatar }}
              classNames={{
                description: 'text-default-500',
              }}
            >
            </User>
              <div className='flex flex-col'>
                <span className='text-default-500 font-semibold'>{user.name}</span>
                <span className='text-gray-400 text-xs'>{user?.timeline}</span>
              </div>
          </div>
        )
      case 'project':
        return (
          <div className='flex flex-col gap-3'>
            <p className='font-semibold text-md capitalize text-default-600/80  '>
              {user.project}
            </p>
            <div className='flex gap-2'>
                {
                    user?.projectType?.map((dt, ind) =>(
                        <div key={ind}  className='border w-32 rounded-full px-2 py-1 flex items-center justify-center'>
                                {dt}
                        </div>
                    ))
                }
            </div>
          </div>
        )
     
      case 'file type':
        return (
          <div className="relative flex  items-center gap-2 min-w-20">
            {fileTypeMap[user?.fileType]}
          </div>
        )
      case 'team':
        return (
          <div className="relative flex justify-end items-center gap-2 group min-w-20">
            <div className=' group-hover:hidden'>
            <AvatarGroup>
              {user?.team?.map((tr) => (
                <Tooltip
                  key={tr}
                  showArrow={true}
                  placement="bottom"
                  content="name"
                  className='group-hover:hidden'
                >
                  {tr?.length > 6 ? (
                    <Avatar size="md" src={tr} name={tr} />
                  ) : (
                    <Avatar
                      size="md"
                      name={tr}
                      classNames={{
                        base: "bg-white border font-bold",
                      }}
                    />
                  )}
                </Tooltip>
              ))}
            </AvatarGroup>
            </div>
            <div className='hidden group-hover:block'>
                <Button className='rounded-md' variant="bordered">View</Button>
            </div>
          </div>
        )

      default:
        return cellValue
    }
  }, [])

  const bottomContent = React.useMemo(() => {
    return (
      <div className='py-2 px-2 flex justify-between items-center'>
        {
          data?.length > 0 &&

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
      wrapper: ['max-h[382px]', 'max-w3xl', 'bg-white'],
      th: ['bg-transparent', 'text-default-500', 'border-b', 'border-divider'],
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







  return (
    <div className='bg-white dark:bg-[#18181b] border dark:border-none rounded-lg mt-8 py-2'>

      <div className=' border-b dark:border-b-[#2e2e31] flex justify-between p-2 py-5 flex-wrap gap-1'>
        <div>
          <Input
            isClearable 
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          variant="bordered" 
          placeholder='search Project' 
          startContent={<TbSearch/>}  />
        </div>
        <Button variant="faded" className='rounded'>Ask A Question</Button>
      </div>

      <Table
        
        aria-label='Example table with custom cells, pagination and sorting'
        isHeaderSticky
        bottomContent={bottomContent}
        bottomContentPlacement='outside'
        classNames={{
          wrapper: 'max-h-[382px] rounded-md flex  items-center justify-center my-2',
          thead:'hidden',
          td: 'mb-6 ',
          tr: 'group'
          
          
        }}
        className={classNames}
        selectedKeys={selectedKeys}
        sortDescriptor={sortDescriptor}
        topContentPlacement='outside'
        onSelectionChange={setSelectedKeys}
        onSortChange={setSortDescriptor}
      >
        <TableHeader columns={headerColumns} className='!hidden'>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === 'actions' ? 'center' : 'start'}
              allowsSorting={column.sortable}
            >
              {column.name}
             </TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent={<EmptyState/>} items={sortedItems}>
          {(item) => (
            <TableRow  key={item.id}>
              {(columnKey) => (
                <TableCell  >{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
