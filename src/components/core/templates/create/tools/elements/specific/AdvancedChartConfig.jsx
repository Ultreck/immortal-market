import { Button, Popover, PopoverContent, PopoverTrigger, useDisclosure } from '@nextui-org/react';
import { TbSettings2 } from 'react-icons/tb';
import PropTypes from 'prop-types';
import AdvancedStackedBarConfig from '@/components/core/templates/create/tools/elements/specific/advance-config/AdvancedStackedBarConfig.jsx';
import AdvancedFunnelConfig from '@/components/core/templates/create/tools/elements/specific/advance-config/AdvancedFunnelConfig.jsx';
import AdvancedCustomBarConfig from '@/components/core/templates/create/tools/elements/specific/advance-config/AdvancedCustomBarConfig.jsx';
import AdvancedLinearBarConfig from '@/components/core/templates/create/tools/elements/specific/advance-config/AdvancedLinearBarConfig.jsx';
import AdvancedLollipopConfig from '@/components/core/templates/create/tools/elements/specific/advance-config/AdvancedLollipopConfig.jsx';
import AdvanceCircleIconsConfig from '@/components/core/templates/create/tools/elements/specific/advance-config/AdvanceCircleIconsConfig.jsx';
import AdvancedNestedCirclesConfig from '@/components/core/templates/create/tools/elements/specific/advance-config/AdvancedNestedCirclesConfig.jsx';
import AdvancedTreeMapConfig from '@/components/core/templates/create/tools/elements/specific/advance-config/AdvancedTreeMapConfig.jsx';
import AdvanceDynamicSortingChartConfig from '@/components/core/templates/create/tools/elements/specific/advance-config/AdvanceDynamicSortingChartConfig.jsx';
import AdvanceShapesConfig from '@/components/core/templates/create/tools/elements/specific/advance-config/AdvanceShapesConfig.jsx';
import AdvanceSpeedometerConfig from '@/components/core/templates/create/tools/elements/specific/advance-config/AdvanceSpeedometerConfig.jsx';
import AdvancedScatterLifeExpentancyConfig from '@/components/core/templates/create/tools/elements/specific/advance-config/AdvancedScatterLifeExpentancyConfig.jsx';
import AdvancedPictogramShapesConfig from '@/components/core/templates/create/tools/elements/specific/advance-config/AdvancedPictogramShapesConfig.jsx';
import AdvancedStackedCardConfig from '@/components/core/templates/create/tools/elements/specific/advance-config/AdvancedStackedCardConfig.jsx';
import AdvancePercentageCardConfig from '@/components/core/templates/create/tools/elements/specific/advance-config/AdvancePercentageCardConfig.jsx';

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
      <PopoverContent className="p-0 border shadow border-default-200">
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
          {element.type === 'chart-a-scatter-life-expectancy' && (
            <AdvancedScatterLifeExpentancyConfig element={element} onChange={onChange} />
          )}
          {element.type === 'chart-a-pictogram-shapes' && (
            <AdvancedPictogramShapesConfig element={element} onChange={onChange} />
          )}
          {element.type === 'chart-a-stacked-card' && (
            <AdvancedStackedCardConfig element={element} onChange={onChange} />
          )}
          {element.type === 'chart-a-percentage-card' && (
            <AdvancePercentageCardConfig element={element} onChange={onChange} />
          )}
          {element.type === 'chart-a-column-card' && (
            <AdvancePercentageCardConfig element={element} onChange={onChange} />
          )}
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
