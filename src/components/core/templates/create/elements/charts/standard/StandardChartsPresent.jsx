import { createElement } from 'react';
import { StandardBarPresent } from '@/components/core/templates/create/elements/charts/standard/StandardBar.jsx';
import { StandardLineContent } from '@/components/core/templates/create/elements/charts/standard/StandardLine.jsx';
import { StandardPieContent } from '@/components/core/templates/create/elements/charts/standard/StandardPie.jsx';
import { StandardDoughnutContent } from '@/components/core/templates/create/elements/charts/standard/StandardDoughnut.jsx';
import { StandardRosePieContent } from '@/components/core/templates/create/elements/charts/standard/StandardRosePie.jsx';
import { StandardDoughnutNormalContent } from '@/components/core/templates/create/elements/charts/standard/StandardDoughnutNormal.jsx';
import { StandardBarHorizontalContent } from '@/components/core/templates/create/elements/charts/standard/StandardBarHorizontal.jsx';
import { StandardAreaContent } from '@/components/core/templates/create/elements/charts/standard/StandardArea.jsx';
import { StandardAreaMultipleContent } from '@/components/core/templates/create/elements/charts/standard/StandardAreaMultiple.jsx';
import { StandardStackedBarContent } from '@/components/core/templates/create/elements/charts/standard/StandardStackedBar.jsx';
import { StandardLineBarContent } from '@/components/core/templates/create/elements/charts/standard/StandardLineBar.jsx';
import { StandardAreaLineContent } from '@/components/core/templates/create/elements/charts/standard/StandardAreaLine.jsx';
import { StandardSemiCircleContent } from '@/components/core/templates/create/elements/charts/standard/StandardSemiCircle.jsx';
import { StandardVerticalBarContent } from '@/components/core/templates/create/elements/charts/standard/StandardVerticalBar.jsx';
import { StandardSemiPieContent } from '@/components/core/templates/create/elements/charts/standard/StandardSemiPie.jsx';
import { StandardAltBarContent } from '@/components/core/templates/create/elements/charts/standard/StandardAltBar.jsx';
import { StandardBarNotSepContent } from '@/components/core/templates/create/elements/charts/standard/StandardBarNotSep.jsx';
import PropTypes from 'prop-types';
import StandardMultipleBar from './StandardMultipleBar';
import { StandardVerticalStackedBarContent } from './StandardVerticalStackedBar';
import { StandardMultipleBarVerticalContent } from './StandardMultipleBarVertical';
import { StandardVerticalBarNoSepContent } from './StandardVerticalBarNoSep';
import { StandardLineMultipleContent } from './StandardLineMultiple';
import { StandardAreaLineVerticalContent } from './StandardAreaLineVertical';
import { StandardLineBarVerticalContent } from './StandardLineBarVertical';
import { StandardBubbleChartContent } from './StandardBubbleChart';
import { StandardBarAreaContent } from './StandardBarArea';
import { StandardBubbleChartInSizesContent } from './StandardBubbleChartInSizes';

const StandardChartsPresent = ({ element }) => {
  const components = {
    bar: StandardBarPresent,
    line: StandardLineContent,
    pie: StandardPieContent,
    doughnut: StandardDoughnutContent,
    'doughnut-crazy': StandardRosePieContent,
    'doughnut-standard': StandardDoughnutNormalContent,
    'bar-horizontal': StandardBarHorizontalContent,
    area: StandardAreaContent,
    'area-multiple': StandardAreaMultipleContent,
    'stacked-bar': StandardStackedBarContent,
    'line-bar': StandardLineBarContent,
    'line-area': StandardAreaLineContent,
    'semi-circle': StandardSemiCircleContent,
    'vertical-bar': StandardVerticalBarContent,
    'semi-pie': StandardSemiPieContent,
    'alt-bar': StandardAltBarContent,
    'bar-not-sep': StandardBarNotSepContent,
    'bar-multiple': StandardMultipleBar,
    'vertical-bar-no-sep': StandardVerticalBarNoSepContent,
    'stacked-bar-vertical': StandardVerticalStackedBarContent,
    'bar-multiple-vertical': StandardMultipleBarVerticalContent,
    'line-multiple': StandardLineMultipleContent,
    'line-area-vertical': StandardAreaLineVerticalContent,
    'line-bar-vertical': StandardLineBarVerticalContent,
    bubble: StandardBubbleChartContent,
    'area-bar': StandardBarAreaContent,
    scatter: StandardBubbleChartInSizesContent,
  };

  if (components[element.config.name]) {
    return createElement(components[element.config.name], { element });
  }
};

StandardChartsPresent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardChartsPresent;
