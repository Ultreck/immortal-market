import Button from "@/components/global/Button.jsx";
import Modal from "@/components/global/Modal.jsx";
import { useDeleteConversation } from "@/api/conversations.js";
import { useToast } from "@/hooks/use-toast.jsx";
import { useQueryClient } from "@tanstack/react-query";
import PropTypes from "prop-types";

const DeleteConversationAlert = ({ isOpen, onClose, onDone, conversation }) => {
  const toast = useToast();
  const qc = useQueryClient();
  const { mutateAsync: deleteConversation, isLoading: isDeleteLoading } = useDeleteConversation();

  const handleDelete = async () => {
    try {
      await deleteConversation(conversation._id);
      await qc.invalidateQueries(['conversations']);
      onClose()
      onDone()
    } catch (e) {
      toast.error(e?.response?.data?.message ?? 'Something went wrong, please try again');
    }
  };

  return (
    <Modal isOpen={ isOpen } onClose={ onClose } size="sm">
      <h4 className="text-lg font-semibold">Delete { conversation.title }</h4>
      <p className="mt-1">Are you sure you want to continue?</p>
      <div className="mt-5 flex items-center space-x-2 justify-end">
        <Button onClick={ onClose } color="black" size="sm" variant="outlined" disabled={ isDeleteLoading }>
          Go back
        </Button>
        <Button onClick={ handleDelete } color="red" size="sm" variant="outlined" loading={ isDeleteLoading }>
          Yes delete
        </Button>
      </div>
    </Modal>
  );
};

DeleteConversationAlert.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onDone: PropTypes.func.isRequired,
  conversation: PropTypes.object.isRequired
};

export default DeleteConversationAlert;
