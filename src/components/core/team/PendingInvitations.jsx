import { useGetPendingInvitations } from '@/api/business.js';
import {
  Button,
  Card,
  Chip,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@heroui/react';
import { TbDotsVertical } from 'react-icons/tb';
import useBusiness from '@/hooks/use-business.js';
import { format } from 'date-fns';

const PendingInvitations = () => {
  const { id, business } = useBusiness();
  const { data: { invitations = [] } = {}, isLoading: isInvitationsLoading } = useGetPendingInvitations(id);

  return (
    <div>
      {isInvitationsLoading ? (
        <Skeleton className="w-full h-[300px] rounded-2xl" />
      ) : (
        <>
          {!!invitations.length && (
            <>
              <h3 className="text-xl font-semibold mb-6">Pending Invitations</h3>
              <Card className="card-shadow p-6">
                <Table
                  aria-label="Team table"
                  classNames={{
                    td: 'py-4 px-4 first:rounded-l-xl last:rounded-r-xl',
                    th: 'text-md px-4 first:rounded-l-xl last:rounded-r-xl',
                  }}
                  removeWrapper
                >
                  <TableHeader
                    columns={[
                      { name: 'EMAIL', uid: 'email' },
                      { name: 'ROLE', uid: 'role' },
                      { name: 'STATUS', uid: 'status' },
                      { name: 'DATE INVITED', uid: 'date' },
                      { name: 'ACTIONS', uid: 'actions' },
                    ]}
                  >
                    {(column) => (
                      <TableColumn key={column.uid} align={column.uid === 'actions' ? 'center' : 'start'}>
                        {column.name}
                      </TableColumn>
                    )}
                  </TableHeader>
                  <TableBody items={invitations}>
                    {(invitation) => {
                      const actions = [];
                      if (['owner', 'admin'].includes(business.member.role)) {
                        actions.push({
                          key: 'delete',
                          label: 'Delete invitation',
                          color: 'danger',
                          className: 'text-danger',
                          disabled: true,
                        });
                      }
                      return (
                        <TableRow key={invitation._id}>
                          <TableCell>{invitation.email}</TableCell>
                          <TableCell>
                            <p className="text-bold text-sm capitalize">{invitation.role}</p>
                          </TableCell>
                          <TableCell>
                            {invitation.status === 'pending' && <Chip color="warning">Pending</Chip>}
                            {invitation.status === 'rejected' && <Chip color="danger">Rejected</Chip>}
                          </TableCell>
                          <TableCell>{format(new Date(invitation.createdAt), 'MMM d, yyyy')}</TableCell>
                          <TableCell>
                            <Dropdown classNames={{ content: 'shadow border border-default-200' }}>
                              <DropdownTrigger>
                                <Button isIconOnly variant="light" size="sm" radius="full">
                                  <TbDotsVertical size="16" />
                                </Button>
                              </DropdownTrigger>
                              <DropdownMenu
                                aria-label="Team member actions"
                                onAction={(key) => alert(key)}
                                items={actions}
                              >
                                {(item) => (
                                  <DropdownItem
                                    key={item.key}
                                    color={item.color}
                                    className={item.className}
                                    classNames={{ title: 'text-base' }}
                                    isDisabled={item.disabled}
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
              </Card>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default PendingInvitations;
