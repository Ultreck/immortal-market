import CreateProjectModal from '@/components/core/project/CreateProjectModal.jsx';
import MessagingModal from '../../pages/business/Messaging';
import DashboardModal from './overview/dashboardModal';

const GlobalModals = () => {
  return (
    <>
      <CreateProjectModal />
      <MessagingModal />
      <DashboardModal />
    </>
  );
};

export default GlobalModals;
