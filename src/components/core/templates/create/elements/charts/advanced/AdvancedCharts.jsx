import AdvancedCustomBar from './AdvancedCustomBar.jsx';
import AdvancedFunnelChart from './AdvancedFunnelChart.jsx';
import AdvancedLinearBar from './AdvancedLinearBar.jsx';
import AdvancedLollipop from './AdvancedLollipop.jsx';
import AdvancedShapes from './AdvancedShapes.jsx';
import { ElementPropTypes } from '@/lib/prop-types.js';
import AdvanceNestedCircles from './AdvanceNestedCircles.jsx';
import AdvanceCircleIcons from './AdvanceCircleIcons.jsx';
import { createElement } from 'react';
import AdvanceDynamicSortingChart from './AdvanceDynamicSortingChart.jsx';
import AdvancedTreeMap from './AdvancedTreeMap.jsx';
import AdvanceSpedometer from './AdvanceSpedometer.jsx';

const AdvancedCharts = ({ element, active, highlighted, width, onClick, onChange }) => {
  const components = {
    'chart-a-shapes': AdvancedShapes,
    'chart-a-linear-bar': AdvancedLinearBar,
    'chart-a-custom-bar': AdvancedCustomBar,
    'chart-a-lollipop': AdvancedLollipop,
    'chart-a-funnel': AdvancedFunnelChart,
    'chart-a-tree-map': AdvancedTreeMap,
    'chart-a-nested-circles': AdvanceNestedCircles,
    'chart-a-circle-icons': AdvanceCircleIcons,
    'chart-a-dynamic-sorting': AdvanceDynamicSortingChart,
    'chart-a-speedometer': AdvanceSpedometer,
  };

  if (components[element.type]) {
    return createElement(components[element.type], { element, active, highlighted, width, onClick, onChange });
  }

  return null;
};

AdvancedCharts.propTypes = ElementPropTypes;

export default AdvancedCharts;
