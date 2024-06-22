import DashboardHeader from '@/components/core/shared/DashboardHeader.jsx';
import InvitationTable from '@/components/core/invitation/InvitationTable';

const InvitationPage = () => {
  return (
    <div className="container py-10 space-y-12">
      <DashboardHeader text={'Invitations'} page={'Invitations'} />
      <InvitationTable/>
      <InvitationTable/>
    </div>
  );
};

export default InvitationPage;
