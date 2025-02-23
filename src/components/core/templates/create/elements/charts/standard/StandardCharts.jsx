import { ElementPropTypes } from '@/lib/prop-types.js';
import StandardBarChart from '@/components/core/templates/create/elements/charts/standard/bar/StandardBar.jsx';
import StandardLine from '@/components/core/templates/create/elements/charts/standard/line/StandardLine.jsx';
import StandardPie from '@/components/core/templates/create/elements/charts/standard/pie/StandardPie.jsx';
import StandardArea from '@/components/core/templates/create/elements/charts/standard/line/StandardArea.jsx';
import StandardStackedBar from '@/components/core/templates/create/elements/charts/standard/bar/StandardStackedBar.jsx';
import StandardAreaLineChart from '@/components/core/templates/create/elements/charts/standard/line/StandardAreaLine.jsx';
import StandardLineBarChart from '@/components/core/templates/create/elements/charts/standard/line/StandardLineBar.jsx';
import StandardPie2 from './pie/StandardPie2.jsx';
import StandardAreaMultiple from './line/StandardAreaMultiple.jsx';
import StandardSemiPie2 from './pie/StandardSemiPie2.jsx';
import StandardSemiPie from './pie/StandardSemiPie.jsx';
import StandardAltBar from './bar/StandardAltBar.jsx';
import { createElement } from 'react';
import StandardMultipleBar from './bar/StandardMultipleBar.jsx';
import StandardLineMultiple from './line/StandardLineMultiple.jsx';
import StandardBubbleChart from './bubble/StandardBubbleChart.jsx';
import StandardBubbleChartInSizes from './bubble/StandardBubbleChartInSizes.jsx';

const StandardCharts = ({ element, active, onChange, ...props }) => {
  const components = {
    pie: StandardPie,
    'pie-2': StandardPie2,
    'semi-pie': StandardSemiPie,
    'semi-pie-2': StandardSemiPie2,

    bar: StandardBarChart,
    'bar-stacked': StandardStackedBar,
    'bar-multiple': StandardMultipleBar,
    'alt-bar': StandardAltBar,

    line: StandardLine,
    'line-multiple': StandardLineMultiple,
    area: StandardArea,
    'area-multiple': StandardAreaMultiple,
    'line-bar': StandardLineBarChart,
    'line-area': StandardAreaLineChart,

    bubble: StandardBubbleChart,
    scatter: StandardBubbleChartInSizes,
  };

  if (components[element.config.name]) {
    return createElement(components[element.config.name], { element, active, onChange, ...props });
  }
};

StandardCharts.propTypes = ElementPropTypes;

export default StandardCharts;
