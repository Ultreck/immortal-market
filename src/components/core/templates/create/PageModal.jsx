import { Drawer, DrawerContent } from '@heroui/react';
import usePresentStore from '@/store/present.js';
import PropTypes from 'prop-types';
import PageContentPresent from '@/components/core/templates/create/PageContentPresent.jsx';

const PageModal = ({ pages }) => {
  const modal = usePresentStore((state) => state.data.modal);
  const updatePresentStore = usePresentStore((state) => state.updateData);

  const page = pages.find((p) => p.id === modal.id);

  const handleClose = () => {
    updatePresentStore({ modal: { ...modal, isOpen: false, id: null } });
  };

  return (
    <Drawer isOpen={modal.isOpen} onClose={handleClose} hideCloseButton classNames={{ base: 'w-[1200px]' }}>
      <DrawerContent className="h-full w-[800px] max-w-[auto] p-0">
        {!!page && <PageContentPresent page={page} className="m-auto rounded-2xl" />}
      </DrawerContent>
    </Drawer>
  );
};

PageModal.propTypes = {
  pages: PropTypes.array.isRequired,
};

export default PageModal;
