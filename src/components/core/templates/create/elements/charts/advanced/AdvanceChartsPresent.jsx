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
import AdvanceMap from './AdvanceMap';
import AdvanceEuropeMap from './AdvanceEuropeMap';
import AdvanceAfricaMap from './AdvanceAfricaMap';

const AdvanceChartsPresent = ({ element }) => {
  const components = {
    'chart-a-shapes': AdvanceShapesContent,
    'chart-a-linear-bar': AdvanceLinearBarContent,
    'chart-a-custom-bar': AdvancedCustomBarContent,
    'chart-a-lollipop': AdvanceLollipopContent,
    'chart-a-funnel': AdvanceFunnelChartContent,
    'chart-a-tree-map': AdvanceTreeMapContent,
    'chart-a-nested-circles': AdvanceNestedCirclesContent,
    'chart-a-circle-icons': AdvanceCircleIconsContent,
    'chart-a-dynamic-sorting': AdvanceDynamicSortingContent,
    'chart-a-speedometer': AdvanceSpeedometerContent,
    'chart-a-speedometer-simple': AdvanceGaugeContent,
    'chart-a-speedometer-multiple': AdvanceMultipleGaugeContent,
    'chart-a-map': AdvanceMap,
    'chart-a-europe-map': AdvanceEuropeMap,
    'chart-a-africa-map': AdvanceAfricaMap,
  };

  if (components[element.type]) {
    return createElement(components[element.type], { element });
  }

  return null;
};

AdvanceChartsPresent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default AdvanceChartsPresent;
