import PropTypes from 'prop-types';
import { Button, useDisclosure } from '@heroui/react';
import { HiOutlineArrowsExpand } from 'react-icons/hi';
import ExpandSvgModal from '@/components/core/templates/create/elements/Svg/helpers/ExpandSvgModal.jsx';
import { cn } from '@/lib/utils.js';

const ElementMapWrapper = ({ element, children, isDisabled = false, className }) => {
  const { isOpen: isExpandOpen, onOpen: onExpandOpen, onClose: onExpandClose } = useDisclosure();

  return (
    <div className={cn('group relative', className)}>
      {children}
      {!isDisabled && (
        <div className="absolute bottom-full left-0 opacity-0 pointer-events-none transition-all duration-500 group-hover:opacity-100 group-hover:pointer-events-auto">
          <div className="bg-white dark:bg-default-100 shadow border border-default-200 rounded-3xl px-3 py-2 space-x-2 mb-2">
            <Button
              onPress={onExpandOpen}
              variant="flat"
              radius="full"
              className="text-base px-4"
              size="sm"
              startContent={<HiOutlineArrowsExpand size="16" />}
            >
              Expand
            </Button>
          </div>
        </div>
      )}

      <ExpandSvgModal isOpen={isExpandOpen} title="Drilldown" onClose={onExpandClose} element={element} />
    </div>
  );
};

ElementMapWrapper.propTypes = {
  element: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired,
  isDisabled: PropTypes.bool,
  className: PropTypes.string,
};

export default ElementMapWrapper;
