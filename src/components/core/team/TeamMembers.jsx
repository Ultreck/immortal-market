import {
  Button,
  Card,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Pagination,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  User,
} from '@nextui-org/react';
import { getImageLink } from '@/lib/utils.js';
import { format } from 'date-fns';
import { TbDotsVertical, TbSearch } from 'react-icons/tb';
import useBusiness from '@/hooks/use-business.js';
import { useGetMembers } from '@/api/business.js';

const TeamMembers = () => {
  const { id, business } = useBusiness();
  const { data: { members = [] } = {}, isLoading: isMembersLoading } = useGetMembers(id);

  return (
    <div>
      {isMembersLoading ? (
        <Skeleton className="w-full h-[300px] rounded-2xl" />
      ) : (
        <Card className="card-shadow py-8">
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
          <Table classNames={{ td: 'py-4 px-4', th: 'text-md px-4', base: 'px-8' }} removeWrapper>
            <TableHeader
              columns={[
                { name: 'NAME', uid: 'name' },
                { name: 'ROLE', uid: 'role' },
                { name: 'JOINED', uid: 'joined' },
                { name: 'ACTIONS', uid: 'actions' },
              ]}
            >
              {(column) => (
                <TableColumn key={column.uid} align={column.uid === 'actions' ? 'center' : 'start'}>
                  {column.name}
                </TableColumn>
              )}
            </TableHeader>
            <TableBody items={members}>
              {(member) => {
                const actions = [];
                if (['owner', 'admin'].includes(business.member.role) && member.role !== 'owner') {
                  actions.push(
                    ...[
                      {
                        key: 'edit',
                        label: 'Edit',
                      },
                      {
                        key: 'delete',
                        label: 'Remove',
                        color: 'danger',
                        className: 'text-danger',
                      },
                    ]
                  );
                }
                if (member.user._id === business.member.user && member.role !== 'owner') {
                  actions.push({
                    key: 'Leave',
                    label: 'Leave',
                    color: 'danger',
                    className: 'text-danger',
                  });
                }
                return (
                  <TableRow key={member._id}>
                    <TableCell>
                      <User
                        avatarProps={{
                          radius: 'full',
                          src: getImageLink(member.user.image),
                          classNames: { base: '!w-9 !h-9' },
                        }}
                        description={member.user.email}
                        name={`${member.user.firstName} ${member.user.lastName}`}
                        classNames={{
                          name: 'text-base leading-none',
                          description: 'text-md leading-none mt-1.5',
                          base: 'gap-4',
                        }}
                      >
                        {member.user.email}
                      </User>
                    </TableCell>
                    <TableCell>
                      <p className="text-bold text-sm capitalize">{member.role}</p>
                    </TableCell>
                    <TableCell>{format(new Date(member.createdAt), 'MMM d, yyyy')}</TableCell>
                    <TableCell>
                      <Dropdown classNames={{ content: 'shadow border border-default-200' }}>
                        <DropdownTrigger>
                          <Button isIconOnly variant="light" size="sm" radius="full">
                            <TbDotsVertical size="16" />
                          </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Team member actions" onAction={(key) => alert(key)} items={actions}>
                          {(item) => (
                            <DropdownItem
                              key={item.key}
                              color={item.color}
                              className={item.className}
                              classNames={{ title: 'text-base' }}
                              isDisabled
                            >
                              {item.label}
                            </DropdownItem>
                          )}
                        </DropdownMenu>
                      </Dropdown>
                    </TableCell>
                  </TableRow>
                );
              }}
            </TableBody>
          </Table>
          <div className="mt-8 px-8">
            <Pagination showControls total={2} initialPage={1} color="default" variant="bordered" />
          </div>
        </Card>
      )}
    </div>
  );
};

export default TeamMembers;
