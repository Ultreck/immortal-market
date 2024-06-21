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
} from '@nextui-org/react'
import { columns, users, statusOptions } from './data'
import { TbSearch } from 'react-icons/tb'
import Empty from '../../icons/empty'
import { IconDotsVertical } from '@tabler/icons-react'

// import ActionButton from '../../../components/forms/FormElements/ActionButton'

const statusColorMap = {
    completed: 'success',
    pending: 'warning',
    cancelled: 'warning',
    rejected: 'danger',
}

const INITIAL_VISIBLE_COLUMNS = [
  'request type',
  'assigned staff',
  'actions',
]


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

  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey]
    // console.log(columnKey, user)

    switch (columnKey) {
      case 'assigned staff':
        return (
          <div className=' flex gap-2'>
            <User
              avatarProps={{ radius: 'full', size: 'md', src: user.avatar }}
              classNames={{
                description: 'text-default-500',
              }}
            >
            </User>
              <div className='flex flex-col'>
                <span className='text-default-600'>{user.name}</span>
                <span className='text-gray-400 text-xs'>3 days ago</span>
              </div>
          </div>
        )
      case 'request type':
        return (
          <div className='flex flex-col'>
            <p className='text-bold text-tiny capitalize text-default-400'>
              {user.type}
            </p>
          </div>
        )
     
      case 'actions':
        return (
          <div className="relative flex justify-end items-center gap-2">
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly size="sm" variant="light">
                  <IconDotsVertical className="text-default-300" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem>View</DropdownItem>
                <DropdownItem>Edit</DropdownItem>
                {/* <DropdownItem>Delete</DropdownItem> */}
              </DropdownMenu>
            </Dropdown>
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

      <div className=' border-b flex justify-between p-2 flex-wrap gap-1'>
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
          wrapper: 'max-h-[382px] rounded-md flex items-center justify-center my-2',
          thead:'hidden'
          
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
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
