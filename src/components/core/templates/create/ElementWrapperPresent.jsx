import PropTypes from 'prop-types';
import ElementModal from '@/components/core/templates/create/ElementModal.jsx';
import { useDisclosure } from '@nextui-org/react';
import { cn } from '@/lib/utils.js';

const ElementWrapperPresent = ({ element, children }) => {
  const { isOpen: isModalOpen, onOpen: onModalOpen, onClose: onModalClose } = useDisclosure();

  const handleClick = () => {
    if (element.modal?.enabled) onModalOpen();
  };

  return (
    <>
      <div
        className={cn('absolute', {
          '!cursor-pointer transition-all duration-500': element.modal?.enabled,
        })}
        onClick={handleClick}
        style={{ width: element.width, height: element.height, top: element.y, left: element.x }}
      >
        {children}
      </div>

      <ElementModal element={element} isOpen={isModalOpen} onClose={onModalClose} />
    </>
  );
};

ElementWrapperPresent.propTypes = {
  element: PropTypes.object.isRequired,
  children: PropTypes.any,
};

export default ElementWrapperPresent;
