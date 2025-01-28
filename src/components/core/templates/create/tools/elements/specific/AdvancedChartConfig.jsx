import { Button, Popover, PopoverContent, PopoverTrigger } from '@heroui/react';
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
import useTemplateStore from '@/store/template.js';
import AdvanceLinearChartConfig from '@/components/core/templates/create/tools/elements/specific/advance-config/AdvanceLinearChartConfig.jsx';
import AdvanceGlobalBarConfig from '@/components/core/templates/create/tools/elements/specific/advance-config/AdvanceGlobalBarConfig.jsx';

const AdvancedChartConfig = ({ element, onChange }) => {
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const openTool = useTemplateStore((state) => state.template.openTool);

  return (
    <Popover
      placement="left"
      showArrow
      offset={10}
      classNames={{ content: 'w-[400px]' }}
      isOpen={openTool === 'advanced-chart'}
      onOpenChange={(v) => updateTemplate({ openTool: v ? 'advanced-chart' : null })}
    >
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Advance chart config" className="text-base">
          <TbSettings2 size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 border shadow border-default-200">
        <div className="px-8 py-6 w-full !max-h-[500px] overflow-y-auto">
          {element.config.name === 'shapes' && <AdvanceShapesConfig element={element} onChange={onChange} />}
          {element.config.name === 'funnel' && <AdvancedFunnelConfig element={element} onChange={onChange} />}
          {element.config.name === 'circle-icons' && <AdvanceCircleIconsConfig element={element} onChange={onChange} />}
          {element.config.name === 'stackedbar-advanced' && (
            <AdvancedStackedBarConfig element={element} onChange={onChange} />
          )}
          {element.config.name === 'custom-bar' && <AdvancedCustomBarConfig element={element} onChange={onChange} />}
          {element.config.name === 'linear-bar' && <AdvancedLinearBarConfig element={element} onChange={onChange} />}
          {element.config.name === 'semi-meter' && <AdvancedLinearBarConfig element={element} onChange={onChange} />}
          {element.config.name === 'lollipop' && <AdvancedLollipopConfig element={element} onChange={onChange} />}
          {element.config.name === 'nested-circles' && (
            <AdvancedNestedCirclesConfig element={element} onChange={onChange} />
          )}
          {element.config.name === 'tree-map' && <AdvancedTreeMapConfig element={element} onChange={onChange} />}
          {element.config.name === 'dynamic-sorting' && (
            <AdvanceDynamicSortingChartConfig element={element} onChange={onChange} />
          )}
          {element.config.name === 'speedometer-multiple' && (
            <AdvanceSpeedometerConfig element={element} onChange={onChange} />
          )}
          {element.config.name === 'speedometer' && <AdvanceSpeedometerConfig element={element} onChange={onChange} />}
          {element.config.name === 'speedometer-simple' && (
            <AdvanceSpeedometerConfig element={element} onChange={onChange} />
          )}
          {element.config.name === 'scatter-life-expectancy' && (
            <AdvancedScatterLifeExpentancyConfig element={element} onChange={onChange} />
          )}
          {element.config.name === 'pictogram-shapes' && (
            <AdvancedPictogramShapesConfig element={element} onChange={onChange} />
          )}
          {element.config.name === 'stacked-card' && (
            <AdvancedStackedCardConfig element={element} onChange={onChange} />
          )}
          {element.config.name === 'percentage-card' && (
            <AdvancePercentageCardConfig element={element} onChange={onChange} />
          )}
          {element.config.name === 'column-card' && (
            <AdvancePercentageCardConfig element={element} onChange={onChange} />
          )}
          {element.config.name === 'percentage-card-2' && (
            <AdvancePercentageCardConfig element={element} onChange={onChange} />
          )}
          {element.config.name === 'linear-advanced-bar' && (
            <AdvanceLinearChartConfig element={element} onChange={onChange} />
          )}
          {element.config.name === 'bar-global' && <AdvanceGlobalBarConfig element={element} onChange={onChange} />}
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
