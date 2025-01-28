import { createElement } from 'react';
import { AdvancedCustomBarContent } from '@/components/core/templates/create/elements/charts/advanced/AdvanceCustomBar.jsx';
import { AdvanceCircleIconsContent } from '@/components/core/templates/create/elements/charts/advanced/AdvanceCircleIcons.jsx';
import PropTypes from 'prop-types';
import { AdvanceFunnelChartContent } from '@/components/core/templates/create/elements/charts/advanced/AdvanceFunnel.jsx';
import { AdvanceLinearBarContent } from '@/components/core/templates/create/elements/charts/advanced/AdvanceLinearBar.jsx';
import { AdvanceLollipopContent } from '@/components/core/templates/create/elements/charts/advanced/AdvanceLollipop.jsx';
import { AdvanceShapesContent } from '@/components/core/templates/create/elements/charts/advanced/AdvanceShapes.jsx';
import { AdvanceTreeMapContent } from '@/components/core/templates/create/elements/charts/advanced/AdvanceTreeMap.jsx';
import { AdvanceDynamicSortingContent } from '@/components/core/templates/create/elements/charts/advanced/AdvanceDynamicSorting.jsx';
import { AdvanceNestedCirclesContent } from '@/components/core/templates/create/elements/charts/advanced/AdvanceNestedCircles.jsx';
import { AdvanceGaugeContent } from '@/components/core/templates/create/elements/charts/advanced/AdvanceGauge.jsx';
import { AdvanceSpeedometerContent } from '@/components/core/templates/create/elements/charts/advanced/AdvanceSpeedometer.jsx';
import { AdvanceMultipleGaugeContent } from '@/components/core/templates/create/elements/charts/advanced/AdvanceMultipleGauge.jsx';
import { AdvancedPictogramShapesContent } from './AdvancedPictogramShapes';
import MapNorthAmerica from '../../maps/MapNorthAmerica.jsx';
import { AdvancedStackedCardContent } from './AdvancedStackedCard';
import AdvanceSemiMeter from './AdvanceSemiMeter';
import { AdvancePercentageCardContent } from './AdvancePercentageCard.jsx';
import { AdvanceColumnCardElementContent } from './AdvanceColumnCard.jsx';
import { AdvancePercentageCardTwoElementContent } from './AdvancePercentageCardTwo';
import { AdvanceDynamicSortingChartContent } from './AdvancedScatterLifeExpectancy.jsx';
import { AdvanceGlobalBarContent } from '@/components/core/templates/create/elements/charts/advanced/AdvanceGlobalBar.jsx';

const AdvanceChartsPresent = ({ element, active, onChange, ...props }) => {
  const components = {
    shapes: AdvanceShapesContent,
    'linear-bar': AdvanceLinearBarContent,
    'custom-bar': AdvancedCustomBarContent,
    lollipop: AdvanceLollipopContent,
    funnel: AdvanceFunnelChartContent,
    'tree-map': AdvanceTreeMapContent,
    'nested-circles': AdvanceNestedCirclesContent,
    'circle-icons': AdvanceCircleIconsContent,
    'dynamic-sorting': AdvanceDynamicSortingContent,
    speedometer: AdvanceSpeedometerContent,
    'speedometer-simple': AdvanceGaugeContent,
    'speedometer-multiple': AdvanceMultipleGaugeContent,
    'scatter-life-expectancy': AdvanceDynamicSortingChartContent,
    'pictogram-shapes': AdvancedPictogramShapesContent,
    'north-america-map': MapNorthAmerica,
    'stacked-card': AdvancedStackedCardContent,
    'percentage-card': AdvancePercentageCardContent,
    'column-card': AdvanceColumnCardElementContent,
    'percentage-card-2': AdvancePercentageCardTwoElementContent,
    'linear-advanced-bar': AdvanceLinearBarContent,
    'bar-global': AdvanceGlobalBarContent,
    'semi-meter': AdvanceSemiMeter,
  };

  if (components[element.config.name]) {
    return createElement(components[element.config.name], { element, active, onChange, ...props });
  }

  return null;
};

AdvanceChartsPresent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default AdvanceChartsPresent;
