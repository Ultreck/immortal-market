import PropTypes from 'prop-types';
import Drawer from '@/components/ui/Drawer.jsx';
import { HiX } from 'react-icons/hi';
import { FormPresents } from '@/components/core/templates/create/elements/forms/FormPresent.jsx'
import { Button } from '@heroui/react';

const ExpandFormModal = ({ element, isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} width={860} padding={false}>
      <div className="px-14 py-12">
        <div className="mb-8 flex items-center justify-between">
          <h3 className="text-xl font-semibold max-w-lg">Expand form </h3>
          <Button onPress={onClose} isIconOnly radius="full" variant="bordered">
            <HiX size="20" />
          </Button>
        </div>
        <div className="gap-10">
          <div className="border border-default-200 bg-default-100/50 rounded-3xl px-10 py-10">
            <FormPresents element={{ ...element, width: 900, height: 600 }} isMapWrapperDisabled={true} />
          </div>
        </div>
      </div>
    </Drawer>
  );
};

ExpandFormModal.propTypes = {
  element: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ExpandFormModal;
