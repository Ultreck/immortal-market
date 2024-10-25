import PendingInvitations from '@/components/core/team/PendingInvitations.jsx';
import TeamMembers from '@/components/core/team/TeamMembers.jsx';
import DashboardHeader from '@/components/core/shared/DashboardHeader.jsx';

const TeamPage = () => {
  return (
    <>
      <DashboardHeader content={<h2 className="font-semibold text-2xl">Team</h2>} />
      <div className="container mb-10">
        <div className="space-y-10">
          <TeamMembers />
          <PendingInvitations />
        </div>
      </div>
    </>
  );
};

export default TeamPage;
