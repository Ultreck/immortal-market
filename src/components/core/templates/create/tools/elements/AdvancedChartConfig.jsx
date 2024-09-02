import { Button, Popover, PopoverContent, PopoverTrigger, useDisclosure } from '@nextui-org/react';
import { TbSettings2 } from 'react-icons/tb';
import PropTypes from 'prop-types';
import AdvancedStackedBarConfig from './advance-config/AdvancedStackedBarConfig';
import AdvancedFunnelConfig from './advance-config/AdvancedFunnelConfig';
import AdvancedCustomBarConfig from './advance-config/AdvancedCustomBarConfig';
import AdvancedLinearBarConfig from './advance-config/AdvancedLinearBarConfig';
import AdvancedLollipopConfig from './advance-config/AdvancedLollipopConfig';
import AdvanceCircleIconsConfig from './advance-config/AdvanceCircleIconsConfig';
import AdvancedNestedCirclesConfig from './advance-config/AdvancedNestedCirclesConfig.jsx';
import AdvancedTreeMapConfig from './advance-config/AdvancedTreeMapConfig';
import AdvanceDynamicSortingChartConfig from './advance-config/AdvanceDynamicSortingChartConfig';
import AdvanceShapesConfig from '@/components/core/templates/create/tools/elements/advance-config/AdvanceShapesConfig.jsx';
import AdvanceSpeedometerConfig from './advance-config/AdvanceSpeedometerConfig.jsx';
import AdvanceMapConfig from './advance-config/AdvanceMapConfig';
import AdvancedEuropeMapConfig from './advance-config/AdvancedEuropeMapConfig';
import AdvancedAfricaMapConfig from './advance-config/AdvancedAfricaMapConfig';

const AdvancedChartConfig = ({ element, onChange }) => {
  const { isOpen, onOpenChange } = useDisclosure({ defaultOpen: false });

  return (
    <Popover
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="left"
      showArrow
      offset={10}
      classNames={{ content: 'w-[400px]' }}
    >
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Adjust font size" className="text-base">
          <TbSettings2 size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border border-default-200">
        <div className="px-8 py-6 w-full !max-h-[500px] overflow-y-auto">
          {element.type === 'chart-a-shapes' && <AdvanceShapesConfig element={element} onChange={onChange} />}
          {element.type === 'chart-a-funnel' && <AdvancedFunnelConfig element={element} onChange={onChange} />}
          {element.type === 'chart-a-circle-icons' && (
            <AdvanceCircleIconsConfig element={element} onChange={onChange} />
          )}
          {element.type === 'chart-a-stackedbar-advanced' && (
            <AdvancedStackedBarConfig element={element} onChange={onChange} />
          )}
          {element.type === 'chart-a-custom-bar' && <AdvancedCustomBarConfig element={element} onChange={onChange} />}
          {element.type === 'chart-a-linear-bar' && <AdvancedLinearBarConfig element={element} onChange={onChange} />}
          {element.type === 'chart-a-lollipop' && <AdvancedLollipopConfig element={element} onChange={onChange} />}
          {element.type === 'chart-a-nested-circles' && (
            <AdvancedNestedCirclesConfig element={element} onChange={onChange} />
          )}
          {element.type === 'chart-a-tree-map' && <AdvancedTreeMapConfig element={element} onChange={onChange} />}
          {element.type === 'chart-a-dynamic-sorting' && (
            <AdvanceDynamicSortingChartConfig element={element} onChange={onChange} />
          )}
          {element.type === 'chart-a-speedometer-multiple' && (
            <AdvanceSpeedometerConfig element={element} onChange={onChange} />
          )}
          {element.type === 'chart-a-speedometer' && <AdvanceSpeedometerConfig element={element} onChange={onChange} />}
          {element.type === 'chart-a-speedometer-simple' && (
            <AdvanceSpeedometerConfig element={element} onChange={onChange} />
          )}
          {element.type === 'chart-a-map' && <AdvanceMapConfig element={element} onChange={onChange} />}
          {element.type === 'chart-a-europe-map' && <AdvancedEuropeMapConfig element={element} onChange={onChange} />}
          {element.type === 'chart-a-africa-map' && <AdvancedAfricaMapConfig element={element} onChange={onChange} />}
        </div>
      </PopoverContent>
    </Popover>
  );
};

AdvancedChartConfig.propTypes = {
  element: PropTypes.shape({
    type: PropTypes.string,
    config: PropTypes.any,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AdvancedChartConfig;

