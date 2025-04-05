import AdvanceFunnel from './AdvanceFunnel.jsx';
import AdvanceLinearBar from './AdvanceLinearBar.jsx';
import AdvanceLollipop from './AdvanceLollipop.jsx';
import AdvanceShapes from './AdvanceShapes.jsx';
import { ElementPropTypes } from '@/lib/prop-types.js';
import AdvanceNestedCircles from './AdvanceNestedCircles.jsx';
import AdvanceCircleIcons from './AdvanceCircleIcons.jsx';
import { createElement } from 'react';
import AdvanceDynamicSorting from './AdvanceDynamicSorting.jsx';
import AdvanceTreeMap from './AdvanceTreeMap.jsx';
import AdvanceSpeedometer from './AdvanceSpeedometer.jsx';
import AdvanceGauge from './AdvanceGauge.jsx';
import AdvanceMultipleGauge from './AdvanceMultipleGauge.jsx';
import AdvancedScatterLifeExpectancy from './AdvancedScatterLifeExpectancy.jsx';
import AdvancedPictogramShapes from './AdvancedPictogramShapes.jsx';
import AdvancedStackedCard from './AdvancedStackedCard.jsx';
import AdvancePercentageCard from './AdvancePercentageCard.jsx';
import AdvanceColumnCard from './AdvanceColumnCard.jsx';
import AdvancePercentageCardTwo from './AdvancePercentageCardTwo.jsx';
import AdvanceLinearChart from '@/components/core/templates/create/elements/charts/advanced/AdvanceLinearChart.jsx';
import AdvanceSemiMeter from '@/components/core/templates/create/elements/charts/advanced/AdvanceSemiMeter.jsx';
import { AdvanceBar } from './AdvanceBar.jsx';
import { AdvanceBar2 } from './AdvanceBar2.jsx';

const AdvanceCharts = ({ element, active, onChange }) => {
  const components = {
    shapes: AdvanceShapes,
    'linear-bar': AdvanceLinearBar,
    bar: AdvanceBar,
    'bar-2': AdvanceBar2,
    lollipop: AdvanceLollipop,
    funnel: AdvanceFunnel,
    'tree-map': AdvanceTreeMap,
    'nested-circles': AdvanceNestedCircles,
    'circle-icons': AdvanceCircleIcons,
    'dynamic-sorting': AdvanceDynamicSorting,
    speedometer: AdvanceSpeedometer,
    'speedometer-simple': AdvanceGauge,
    'speedometer-multiple': AdvanceMultipleGauge,
    'scatter-life-expectancy': AdvancedScatterLifeExpectancy,
    'pictogram-shapes': AdvancedPictogramShapes,
    'stacked-card': AdvancedStackedCard,
    'percentage-card': AdvancePercentageCard,
    'column-card': AdvanceColumnCard,
    'percentage-card-2': AdvancePercentageCardTwo,
    'linear-advanced-bar': AdvanceLinearChart,
    'semi-meter': AdvanceSemiMeter,
  };

  if (components[element.config.name]) {
    return createElement(components[element.config.name], { element, active, onChange });
  }

  return null;
};

AdvanceCharts.propTypes = ElementPropTypes;

export default AdvanceCharts;
