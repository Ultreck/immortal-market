import PropTypes from 'prop-types';
import { useDisclosure } from '@heroui/react';
import ChartInsightsModal from '@/components/core/templates/create/ChartInsightsModal.jsx';
import ChartActions from './elements/charts/standard/helpers/ChartActions';

const ElementChartWrapper = ({ element, children, isDisabled = false }) => {
  const { isOpen: isInsightsOpen, onOpen: onInsightsOpen, onClose: onInsightsClose } = useDisclosure();

  return (
    <div className="group relative">
      {children}
      {!isDisabled && <ChartActions element={element} onInsightsOpen={onInsightsOpen} />}
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
