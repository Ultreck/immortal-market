import { Button, useDisclosure } from '@nextui-org/react';
import { TbPlus } from 'react-icons/tb';
import DashboardTitle from '@/components/core/shared/DashboardTitle.jsx';
import InviteMemberModal from '@/components/core/team/InviteMemberModal.jsx';
import OnlyRoles from '@/components/core/shared/OnlyRoles.jsx';
import PendingInvitations from '@/components/core/team/PendingInvitations.jsx';
import TeamMembers from '@/components/core/team/TeamMembers.jsx';

const TeamPage = () => {
  const { isOpen: isInviteModalOpen, onOpen: onInviteModalOpen, onClose: onInviteModalClose } = useDisclosure();

  return (
    <>
      <DashboardTitle
        text="Team"
        breadcrumbs={[
          { text: 'Home', href: '/' },
          { text: 'Team', href: '/team' },
        ]}
        after={
          <OnlyRoles roles={['owner', 'admin']}>
            <Button
              startContent={<TbPlus size="20" />}
              radius="full"
              className="text-base px-5"
              color="success"
              onClick={onInviteModalOpen}
            >
              Invite user
            </Button>
          </OnlyRoles>
        }
      />
      <div className="container py-8">
        <div className="space-y-10">
          <TeamMembers />
          <PendingInvitations />
        </div>
      </div>

      <InviteMemberModal isOpen={isInviteModalOpen} onClose={onInviteModalClose} />
    </>
  );
};

export default TeamPage;
