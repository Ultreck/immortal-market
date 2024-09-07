import { createElement } from 'react';
import { StandardBarContent } from '@/components/core/templates/create/elements/charts/standard/StandardBar.jsx';
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
import { StandardVerticalBarNoSepContent } from './standardVerticalBarNoSep';
import { StandardVerticalStackedBarContent } from './StandardVerticalStackedBar';
import { StandardMultipleBarVerticalContent } from './StandardMultipleBarVertical';

const StandardChartsPresent = ({ element }) => {
  const components = {
    'chart-s-bar': StandardBarContent,
    'chart-s-line': StandardLineContent,
    'chart-s-pie': StandardPieContent,
    'chart-s-doughnut': StandardDoughnutContent,
    'chart-s-doughnut-crazy': StandardRosePieContent,
    'chart-s-doughnut-standard': StandardDoughnutNormalContent,
    'chart-s-bar-horizontal': StandardBarHorizontalContent,
    'chart-s-area': StandardAreaContent,
    'chart-s-area-multiple': StandardAreaMultipleContent,
    'chart-s-stacked-bar': StandardStackedBarContent,
    'chart-s-line-bar': StandardLineBarContent,
    'chart-s-line-area': StandardAreaLineContent,
    'chart-s-semi-circle': StandardSemiCircleContent,
    'chart-s-vertical-bar': StandardVerticalBarContent,
    'chart-s-semi-pie': StandardSemiPieContent,
    'chart-s-alt-bar': StandardAltBarContent,
    'chart-s-bar-not-sep': StandardBarNotSepContent,
    'chart-s-bar-multiple': StandardMultipleBar,
    'chart-s-vertical-bar-no-sep': StandardVerticalBarNoSepContent,
    'chart-s-stacked-bar-vertical': StandardVerticalStackedBarContent,
    'chart-s-bar-multiple-vertical': StandardMultipleBarVerticalContent,
  };

  if (components[element.type]) {
    return createElement(components[element.type], { element });
  }
};

StandardChartsPresent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardChartsPresent;
