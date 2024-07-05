import CreateProjectModal from '@/components/core/project/CreateProjectModal.jsx';
import MessagingModal from '../../pages/business/Messaging';
import InviteModal from './invitation/InviteModal';
import DashboardModal from './overview/dashboardModal';

const GlobalModals = () => {
  return (
    <>
      <CreateProjectModal />
      <MessagingModal />
      <InviteModal />
      <DashboardModal />
    </>
  );
};

export default GlobalModals;
