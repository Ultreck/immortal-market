import AdvanceCustomBar from './AdvanceCustomBar.jsx';
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
import AdvanceAfricaMap from './AdvanceAfricaMap.jsx';
import AdvanceEuropeMap from './AdvanceEuropeMap.jsx';
import AdvanceMap from './AdvanceMap.jsx';
import AdvancedScatterLifeExpentancy from './AdvancedScatterLifeExpentancy.jsx';
import AdvancedPictogramShapes from './AdvancedPictogramShapes.jsx';
import AdvancedNorthAmericaMap from './AdvancedNorthAmericaMap.jsx';
import AdvancedStackedCard from './AdvancedStackedCard.jsx';
import AdvancePercentageCard from './AdvancePercentageCard.jsx';
import AdvanceColumnCard from './AdvanceColumnCard.jsx';

const AdvanceCharts = ({ element, active, highlighted, width, onClick, onChange }) => {
  const components = {
    'chart-a-shapes': AdvanceShapes,
    'chart-a-linear-bar': AdvanceLinearBar,
    'chart-a-custom-bar': AdvanceCustomBar,
    'chart-a-lollipop': AdvanceLollipop,
    'chart-a-funnel': AdvanceFunnel,
    'chart-a-tree-map': AdvanceTreeMap,
    'chart-a-nested-circles': AdvanceNestedCircles,
    'chart-a-circle-icons': AdvanceCircleIcons,
    'chart-a-dynamic-sorting': AdvanceDynamicSorting,
    'chart-a-speedometer': AdvanceSpeedometer,
    'chart-a-speedometer-simple': AdvanceGauge,
    'chart-a-speedometer-multiple': AdvanceMultipleGauge,
    'chart-a-map': AdvanceMap,
    'chart-a-europe-map': AdvanceEuropeMap,
    'chart-a-africa-map': AdvanceAfricaMap,
    'chart-a-scatter-life-expectancy': AdvancedScatterLifeExpentancy,
    'chart-a-pictogram-shapes': AdvancedPictogramShapes,
    'chart-a-north-america-map': AdvancedNorthAmericaMap,
    'chart-a-stacked-card': AdvancedStackedCard,
    'chart-a-percentage-card': AdvancePercentageCard,
    'chart-a-column-card': AdvanceColumnCard,
  };

  if (components[element.type]) {
    return createElement(components[element.type], { element, active, highlighted, width, onClick, onChange });
  }

  return null;
};

AdvanceCharts.propTypes = ElementPropTypes;

export default AdvanceCharts;
