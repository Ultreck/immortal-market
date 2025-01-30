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
import { AdvancePercentageCardTwoElementContent } from './AdvancePercentageCardTwo';
import { AdvanceGlobaBarContent } from '@/components/core/templates/create/elements/charts/advanced/AdvanceGlobaBar.jsx';

const AdvanceChartsPresent = ({ element }) => {
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
    'scatter-life-expectancy': AdvanceDynamicSortingContent,
    'pictogram-shapes': AdvancedPictogramShapesContent,
    'north-america-map': MapNorthAmerica,
    'stacked-card': AdvanceDynamicSortingContent,
    'percentage-card': AdvancedStackedCardContent,
    'column-card': AdvanceDynamicSortingContent,
    'percentage-card-2': AdvancePercentageCardTwoElementContent,
    'linear-advanced-bar': AdvanceLinearBarContent,
    'bar-global': AdvanceGlobaBarContent,
  };

  if (components[element.config.name]) {
    return createElement(components[element.config.name], { element });
  }

  return null;
};

AdvanceChartsPresent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default AdvanceChartsPresent;
