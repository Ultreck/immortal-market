import PropTypes from 'prop-types';
import ElementModal from '@/components/core/templates/create/ElementModal.jsx';
import { useDisclosure } from '@heroui/react';
import { cn } from '@/lib/utils.js';
import usePresentStore from '@/store/present.js';

const ElementWrapperPresent = ({ element, children }) => {
  const { isOpen: isModalOpen, onOpen: onModalOpen, onClose: onModalClose } = useDisclosure();
  const updatePresentStore = usePresentStore((state) => state.updateData);

  const handleClick = () => {
    if (element.modal?.enabled) onModalOpen();
    else if (element.href) {
      if (element.href.startsWith('#page-')) {
        const page = element.href.replace('#page-', '');
        updatePresentStore({ modal: { id: page, isOpen: true } });
      } else if (element.href.startsWith('http')) {
        window.open(element.href, '_blank');
      }
    }
  };

  return (
    <>
      <div
        className={cn('absolute', {
          '!cursor-pointer transition-all duration-500': element.modal?.enabled || !!element.href,
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
