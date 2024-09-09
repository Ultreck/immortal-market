import { ElementPropTypes } from '@/lib/prop-types.js';
import StandardBarChart from '@/components/core/templates/create/elements/charts/standard/StandardBar.jsx';
import StandardLine from '@/components/core/templates/create/elements/charts/standard/StandardLine.jsx';
import StandardPie from '@/components/core/templates/create/elements/charts/standard/StandardPie.jsx';
import StandardDoughnut from '@/components/core/templates/create/elements/charts/standard/StandardDoughnut.jsx';
import StandardBarHorizontal from '@/components/core/templates/create/elements/charts/standard/StandardBarHorizontal.jsx';
import StandardArea from '@/components/core/templates/create/elements/charts/standard/StandardArea.jsx';
import StandardStackedBar from '@/components/core/templates/create/elements/charts/standard/StandardStackedBar.jsx';
import StandardAreaLineChart from '@/components/core/templates/create/elements/charts/standard/StandardAreaLine.jsx';
import StandardLineBarChart from '@/components/core/templates/create/elements/charts/standard/StandardLineBar.jsx';
import StandardRosePie from './StandardRosePie.jsx';
import StandardDoughnutNormal from './StandardDoughnutNormal.jsx';
import StandardAreaMultiple from './StandardAreaMultiple';
import StandardSemiCircle from './StandardSemiCircle.jsx';
import StandardVerticalBar from './StandardVerticalBar.jsx';
import StandardSemiPie from './StandardSemiPie';
import StandardAltBar from './StandardAltBar';
import StandardBarNotSep from './StandardBarNotSep';
import { createElement } from 'react';
import StandardOrdinaryPieChart from './StandardOrdinaryPieChart.jsx';
import StandardMultipleBar from './StandardMultipleBar.jsx';
import StandardVerticalStackedBar from './StandardVerticalStackedBar.jsx';
import StandardMultipleBarVertical from './StandardMultipleBarVertical.jsx';
import StandardVerticalBarNoSep from './StandardVerticalBarNoSep.jsx';
import StandardLineMultiple from './StandardLineMultiple.jsx';
import StandardAreaLineVertical from './StandardAreaLineVertical.jsx';
import StandardLineBarVertical from './StandardLineBarVertical.jsx';
import StandardBubbleChart from './StandardBubbleChart.jsx';

const StandardCharts = ({ element, active, highlighted, width, onClick, onChange }) => {
  const components = {
    'chart-s-bar': StandardBarChart,
    'chart-s-line': StandardLine,
    'chart-s-pie': StandardPie,
    'chart-s-doughnut': StandardDoughnut,
    'chart-s-doughnut-crazy': StandardRosePie,
    'chart-s-doughnut-standard': StandardDoughnutNormal,
    'chart-s-bar-horizontal': StandardBarHorizontal,
    'chart-s-area': StandardArea,
    'chart-s-area-multiple': StandardAreaMultiple,
    'chart-s-stacked-bar': StandardStackedBar,
    'chart-s-line-bar': StandardLineBarChart,
    'chart-s-line-area': StandardAreaLineChart,
    'chart-s-semi-circle': StandardSemiCircle,
    'chart-s-vertical-bar': StandardVerticalBar,
    'chart-s-semi-pie': StandardSemiPie,
    'chart-s-alt-bar': StandardAltBar,
    'chart-s-bar-not-sep': StandardBarNotSep,
    'chart-s-pie-ordinary': StandardOrdinaryPieChart,
    'chart-s-bar-multiple': StandardMultipleBar,
    'chart-s-vertical-bar-no-sep': StandardVerticalBarNoSep,
    'chart-s-stacked-bar-vertical': StandardVerticalStackedBar,
    'chart-s-bar-multiple-vertical' : StandardMultipleBarVertical,
    'chart-s-line-multiple': StandardLineMultiple,
    'chart-s-line-area-vertical': StandardAreaLineVertical,
    'chart-s-line-bar-vertical': StandardLineBarVertical,
    'chart-s-bubble': StandardBubbleChart,
  };

  if (components[element.type]) {
    return createElement(components[element.type], { element, active, highlighted, width, onClick, onChange });
  }
};

StandardCharts.propTypes = ElementPropTypes;

export default StandardCharts;
