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
import StandardBarArea from './StandardBarArea.jsx';
import StandardAreaBarVertical from './StandardBarAreaVertical.jsx';
import StandardBubbleChartInSizes from './StandardBubbleChartInSizes.jsx';

const StandardCharts = ({ element, active, onChange, ...props }) => {
  const components = {
    bar: StandardBarChart,
    line: StandardLine,
    pie: StandardPie,
    doughnut: StandardDoughnut,
    'doughnut-crazy': StandardRosePie,
    'doughnut-standard': StandardDoughnutNormal,
    'bar-horizontal': StandardBarHorizontal,
    area: StandardArea,
    'area-multiple': StandardAreaMultiple,
    'stacked-bar': StandardStackedBar,
    'line-bar': StandardLineBarChart,
    'line-area': StandardAreaLineChart,
    'semi-circle': StandardSemiCircle,
    'vertical-bar': StandardVerticalBar,
    'semi-pie': StandardSemiPie,
    'alt-bar': StandardAltBar,
    'bar-not-sep': StandardBarNotSep,
    'pie-ordinary': StandardOrdinaryPieChart,
    'bar-multiple': StandardMultipleBar,
    'vertical-bar-no-sep': StandardVerticalBarNoSep,
    'stacked-bar-vertical': StandardVerticalStackedBar,
    'bar-multiple-vertical': StandardMultipleBarVertical,
    'line-multiple': StandardLineMultiple,
    'line-area-vertical': StandardAreaLineVertical,
    'line-bar-vertical': StandardLineBarVertical,
    bubble: StandardBubbleChart,
    'area-bar': StandardBarArea,
    'area-bar-vertical': StandardAreaBarVertical,
    scatter: StandardBubbleChartInSizes,
  };

  if (components[element.config.name]) {
    return createElement(components[element.config.name], { element, active, onChange, ...props });
  }
};

StandardCharts.propTypes = ElementPropTypes;

export default StandardCharts;
