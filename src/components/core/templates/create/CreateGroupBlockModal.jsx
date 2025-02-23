import { Button, Modal, ModalBody, ModalContent, Select, SelectItem, addToast } from '@heroui/react';

const CreateGroupBlockModal = ({ isOpen, onClose, elements }) => {
  const submit = async (values) => {
    try {
      await create({ ...values, data, thumbnail, type: 'group' });
      onClose();
      reset();
      addToast({ 
        title: 'Block saved',
        color: 'success'
      });
    } catch (e) {
      addToast({
        title: 'Error',
        description: e?.response?.data?.message ?? e?.message ?? 'Something went wrong, please try again',
        color: 'danger'
      });
    }
  };
}; 