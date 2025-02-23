import { createElement } from 'react';
import { StandardBarPresent } from '@/components/core/templates/create/elements/charts/standard/bar/StandardBar.jsx';
import { StandardLinePresent } from '@/components/core/templates/create/elements/charts/standard/line/StandardLine.jsx';
import { StandardPiePresent } from '@/components/core/templates/create/elements/charts/standard/pie/StandardPie.jsx';
import { StandardPie2Content } from '@/components/core/templates/create/elements/charts/standard/pie/StandardPie2.jsx';
import { StandardAreaContent } from '@/components/core/templates/create/elements/charts/standard/line/StandardArea.jsx';
import { StandardAreaMultipleContent } from '@/components/core/templates/create/elements/charts/standard/line/StandardAreaMultiple.jsx';
import { StandardStackedBarContent } from '@/components/core/templates/create/elements/charts/standard/bar/StandardStackedBar.jsx';
import { StandardLineBarContent } from '@/components/core/templates/create/elements/charts/standard/line/StandardLineBar.jsx';
import { StandardAreaLineContent } from '@/components/core/templates/create/elements/charts/standard/line/StandardAreaLine.jsx';
import { StandardSemiPie2Content } from '@/components/core/templates/create/elements/charts/standard/pie/StandardSemiPie2.jsx';
import { StandardSemiPieContent } from '@/components/core/templates/create/elements/charts/standard/pie/StandardSemiPie.jsx';
import { StandardAltBarContent } from '@/components/core/templates/create/elements/charts/standard/bar/StandardAltBar.jsx';
import PropTypes from 'prop-types';
import StandardMultipleBar from './bar/StandardMultipleBar.jsx';
import { StandardLineMultipleContent } from './line/StandardLineMultiple.jsx';
import { StandardBubbleChartContent } from './bubble/StandardBubbleChart.jsx';
import { StandardBubbleChartInSizesContent } from './bubble/StandardBubbleChartInSizes.jsx';

const StandardChartsPresent = ({ element, ...props }) => {
  const components = {
    pie: StandardPiePresent,
    'pie-2': StandardPie2Content,
    'semi-pie': StandardSemiPieContent,
    'semi-pie-2': StandardSemiPie2Content,

    bar: StandardBarPresent,
    'bar-stacked': StandardStackedBarContent,
    'bar-multiple': StandardMultipleBar,
    'alt-bar': StandardAltBarContent,

    line: StandardLinePresent,
    'line-multiple': StandardLineMultipleContent,
    area: StandardAreaContent,
    'area-multiple': StandardAreaMultipleContent,
    'line-bar': StandardLineBarContent,
    'line-area': StandardAreaLineContent,

    bubble: StandardBubbleChartContent,
    scatter: StandardBubbleChartInSizesContent,
  };

  if (components[element.config.name]) {
    return createElement(components[element.config.name], { element, ...props });
  }
};

StandardChartsPresent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardChartsPresent;
