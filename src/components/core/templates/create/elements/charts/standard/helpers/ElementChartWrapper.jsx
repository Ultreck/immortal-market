import PropTypes from 'prop-types';
import { Button, useDisclosure } from '@heroui/react';
import { HiOutlineEye } from 'react-icons/hi2';
import { HiOutlineArrowsExpand } from 'react-icons/hi';
import ExpandChartModal from '@/components/core/templates/create/elements/charts/standard/helpers/ExpandChartModal.jsx';
import ChartInsightsModal from '@/components/core/templates/create/elements/charts/standard/helpers/ChartInsightsModal.jsx';

const ElementChartWrapper = ({ element, children, isDisabled = false }) => {
  const { isOpen: isExpandOpen, onOpen: onExpandOpen, onClose: onExpandClose } = useDisclosure();
  const { isOpen: isInsightsOpen, onOpen: onInsightsOpen, onClose: onInsightsClose } = useDisclosure();

  return (
    <div className="group relative">
      {children}
      {!isDisabled && (
        <div className="absolute bottom-full left-0 opacity-0 pointer-events-none transition-all duration-500 group-hover:opacity-100 group-hover:pointer-events-auto">
          <div className="bg-white dark:bg-default-100 shadow border border-default-200 rounded-3xl px-3 py-2 space-x-2 mb-2">
            <Button
              onClick={onExpandOpen}
              variant="flat"
              radius="full"
              className="text-base px-4"
              size="sm"
              startContent={<HiOutlineArrowsExpand size="16" />}
            >
              Expand
            </Button>
            <Button
              onClick={onInsightsOpen}
              variant="flat"
              radius="full"
              className="text-base px-4"
              size="sm"
              startContent={<HiOutlineEye size="16" />}
            >
              Insights
            </Button>
          </div>
        </div>
      )}

      <ExpandChartModal isOpen={isExpandOpen} title="Drilldown" onClose={onExpandClose} element={element} />
      <ChartInsightsModal isOpen={isInsightsOpen} onClose={onInsightsClose} element={element} />
    </div>
  );
};

ElementChartWrapper.propTypes = {
  element: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired,
  isDisabled: PropTypes.bool,
};

export default ElementChartWrapper;
