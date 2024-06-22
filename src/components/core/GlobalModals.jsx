import CreateProjectModal from '@/components/core/project/CreateProjectModal.jsx';
import MessagingModal from '../../pages/business/Messaging';
import InviteModal from './invitation/InviteModal';

const GlobalModals = () => {
  return (
    <>
      <CreateProjectModal />
      <MessagingModal />
      <InviteModal />
    </>
  );
};

export default GlobalModals;
