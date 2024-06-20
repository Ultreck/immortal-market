import {
  Button,
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
  useDisclosure,
  User,
} from '@nextui-org/react';
import { TbDotsVertical, TbPlus } from 'react-icons/tb';
import DashboardTitle from '@/components/core/shared/DashboardTitle.jsx';
import { useGetMembers, useGetPendingInvitations } from '@/api/business.js';
import useBusiness from '@/hooks/use-business.js';
import { getImageLink } from '@/lib/utils.js';
import InviteMemberModal from '@/components/core/team/InviteMemberModal.jsx';
import OnlyRoles from '@/components/core/shared/OnlyRoles.jsx';

const columns = [
  { name: 'NAME', uid: 'name' },
  { name: 'ROLE', uid: 'role' },
  { name: 'ACTIONS', uid: 'actions' },
];

const TeamPage = () => {
  const { id } = useBusiness();
  const { isOpen: isInviteModalOpen, onOpen: onInviteModalOpen, onClose: onInviteModalClose } = useDisclosure();
  const { data: { members = [] } = {}, isLoading: isMembersLoading } = useGetMembers(id);
  const { data: { invitations = [] } = {}, isLoading: isInvitationsLoading } = useGetPendingInvitations(id);

  return (
    <>
      <div className="container py-10">
        <DashboardTitle
          text="Team"
          after={
            <OnlyRoles roles={['owner', 'admin']}>
              <Button
                startContent={<TbPlus size="20" />}
                radius="full"
                className="text-base px-5"
                color="success"
                onClick={onInviteModalOpen}
              >
                Add user
              </Button>
            </OnlyRoles>
          }
        />
        <div className="space-y-10">
          <div>
            {isMembersLoading ? (
              <Skeleton className="w-full h-[300px] rounded-2xl" />
            ) : (
              <Table aria-label="Team table" classNames={{ wrapper: 'p-6', td: 'py-4' }}>
                <TableHeader columns={columns}>
                  {(column) => (
                    <TableColumn key={column.uid} align={column.uid === 'actions' ? 'center' : 'start'}>
                      {column.name}
                    </TableColumn>
                  )}
                </TableHeader>
                <TableBody items={members}>
                  {(member) => {
                    const actions = [
                      {
                        key: 'edit',
                        label: 'Edit',
                      },
                    ];
                    if (['owner', 'admin'].includes(member.role) && member.role !== 'owner') {
                      actions.push({
                        key: 'delete',
                        label: 'Remove',
                        color: 'danger',
                        className: 'text-danger',
                      });
                    }
                    return (
                      <TableRow key={member._id}>
                        <TableCell>
                          <User
                            avatarProps={{ radius: 'full', size: 'sm', src: getImageLink(member.user.image) }}
                            description={member.user.email}
                            name={`${member.user.firstName} ${member.user.lastName}`}
                            classNames={{
                              name: 'text-base leading-none',
                              description: 'text-sm leading-none mt-1.5',
                              base: 'gap-4',
                            }}
                          >
                            {member.user.email}
                          </User>
                        </TableCell>
                        <TableCell>
                          <p className="text-bold text-sm capitalize">{member.role}</p>
                        </TableCell>
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
            )}
          </div>
          <div>
            {isInvitationsLoading ? (
              <Skeleton className="w-full h-[300px] rounded-2xl" />
            ) : (
              <>
                {!!invitations.length && (
                  <>
                    <h3 className="text-xl font-semibold mb-6">Pending Invitations</h3>
                    <Table aria-label="Team table" classNames={{ wrapper: 'p-6', td: 'py-4' }}>
                      <TableHeader
                        columns={[
                          { name: 'EMAIL', uid: 'email' },
                          { name: 'ROLE', uid: 'role' },
                          { name: 'STATUS', uid: 'status' },
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
                        {(invitation) => (
                          <TableRow key={invitation._id}>
                            <TableCell>{invitation.email}</TableCell>
                            <TableCell>
                              <p className="text-bold text-sm capitalize">{invitation.role}</p>
                            </TableCell>
                            <TableCell>
                              {invitation.status === 'pending' && <Chip color="warning">Pending</Chip>}
                              {invitation.status === 'rejected' && <Chip color="danger">Rejected</Chip>}
                            </TableCell>
                            <TableCell>
                              <Dropdown classNames={{ content: 'shadow border border-default-200' }}>
                                <DropdownTrigger>
                                  <Button isIconOnly variant="light" size="sm" radius="full">
                                    <TbDotsVertical size="16" />
                                  </Button>
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Team member actions" onAction={(key) => alert(key)}>
                                  <DropdownItem
                                    key="delete"
                                    className="text-danger"
                                    classNames={{ title: 'text-base' }}
                                    color="danger"
                                    isDisabled
                                  >
                                    Delete invitation
                                  </DropdownItem>
                                </DropdownMenu>
                              </Dropdown>
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      <InviteMemberModal isOpen={isInviteModalOpen} onClose={onInviteModalClose} />
    </>
  );
};

export default TeamPage;
