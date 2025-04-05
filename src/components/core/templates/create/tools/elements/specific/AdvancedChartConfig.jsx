import { Button, Popover, PopoverContent, PopoverTrigger } from '@heroui/react';
import { TbSettings2 } from 'react-icons/tb';
import PropTypes from 'prop-types';
import AdvancedStackedBarConfig from '@/components/core/templates/create/tools/elements/specific/advance-config/AdvancedStackedBarConfig.jsx';
import AdvancedFunnelConfig from '@/components/core/templates/create/tools/elements/specific/advance-config/AdvancedFunnelConfig.jsx';
import AdvancedBarConfig from '@/components/core/templates/create/tools/elements/specific/advance-config/AdvancedBarConfig.jsx';
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
import AdvanceLinearChartConfig from '@/components/core/templates/create/tools/elements/specific/advance-config/AdvanceLinearChartConfig.jsx';
import AdvanceBar2Config from '@/components/core/templates/create/tools/elements/specific/advance-config/AdvanceBar2Config.jsx';
import useDesignStore from '@/store/design.js';

const AdvancedChartConfig = ({ element }) => {
  const tool = useDesignStore((state) => state.tool);
  const openTool = useDesignStore((state) => state.openTool);
  const closeTool = useDesignStore((state) => state.closeTool);
  const updateElement = useDesignStore((state) => state.updateElement);

  const onChange = ({ config }) => {
    updateElement(element.id, { config }, true);
  };

  return (
    <Popover
      placement="left"
      showArrow
      offset={10}
      classNames={{ content: 'w-[400px]' }}
      isOpen={tool === 'advanced-chart'}
      onOpenChange={(v) => (v ? openTool('advanced-chart') : closeTool())}
    >
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Advance chart config" className="text-base">
          <TbSettings2 size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="px-8 py-6 border shadow border-default-200 !max-h-[500px] !w-[500px] overflow-y-auto block">
        {element.config.name === 'shapes' && <AdvanceShapesConfig element={element} onChange={onChange} />}
        {element.config.name === 'funnel' && <AdvancedFunnelConfig element={element} onChange={onChange} />}
        {element.config.name === 'circle-icons' && <AdvanceCircleIconsConfig element={element} onChange={onChange} />}
        {element.config.name === 'stackedbar-advanced' && (
          <AdvancedStackedBarConfig element={element} onChange={onChange} />
        )}
        {element.config.name === 'bar' && <AdvancedBarConfig element={element} onChange={onChange} />}
        {element.config.name === 'bar-2' && <AdvanceBar2Config element={element} onChange={onChange} />}
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
        {element.config.name === 'stacked-card' && <AdvancedStackedCardConfig element={element} onChange={onChange} />}
        {element.config.name === 'percentage-card' && (
          <AdvancePercentageCardConfig element={element} onChange={onChange} />
        )}
        {element.config.name === 'column-card' && <AdvancePercentageCardConfig element={element} onChange={onChange} />}
        {element.config.name === 'percentage-card-2' && (
          <AdvancePercentageCardConfig element={element} onChange={onChange} />
        )}
        {element.config.name === 'linear-advanced-bar' && (
          <AdvanceLinearChartConfig element={element} onChange={onChange} />
        )}
      </PopoverContent>
    </Popover>
  );
};

AdvancedChartConfig.propTypes = {
  element: PropTypes.object.isRequired,
};

export default AdvancedChartConfig;
