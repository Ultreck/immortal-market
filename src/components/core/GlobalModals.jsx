import CreateProjectModal from '@/components/core/project/CreateProjectModal.jsx';
import MessagingModal from '../../pages/business/Messaging';
import InviteModal from './invitation/InviteModal';
import OptionModal from './finddata/OptionModal';

const GlobalModals = () => {
  return (
    <>
      <CreateProjectModal />
      <MessagingModal />
      <InviteModal />
      <OptionModal />
    </>
  );
};

export default GlobalModals;
