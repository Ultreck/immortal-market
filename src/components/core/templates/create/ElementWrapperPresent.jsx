import PropTypes from 'prop-types';
import ElementModal from '@/components/core/templates/create/ElementModal.jsx';
import { useDisclosure } from '@heroui/react';
import { cn } from '@/lib/utils.js';
import usePresentStore from '@/store/present.js';
import { RiAlertLine } from 'react-icons/ri';
import ErrorBoundary from '@/components/ErrorBoundary.jsx';

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
        style={{
          width: element.size.width,
          height: element.size.height,
          top: element.position.y,
          left: element.position.x,
        }}
      >
        <ErrorBoundary
          fallback={
            <div className="bg-red-800 text-white rounded-2xl p-10 h-full w-full flex flex-col items-center justify-center">
              <RiAlertLine size="28" />
              <p className="mt-4 max-w-[200px] leading-[1.1] text-center">
                Something went wrong while rendering this component
              </p>
            </div>
          }
        >
          {children}
        </ErrorBoundary>
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
