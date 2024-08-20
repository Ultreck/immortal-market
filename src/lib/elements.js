import Text from '@/components/core/templates/create/elements/Text.jsx';
import Image from '@/components/core/templates/create/elements/Image.jsx';
import Table from '@/components/core/templates/create/elements/Table.jsx';
import KeyValue from '@/components/core/templates/create/elements/KeyValue.jsx';
import Line from '@/components/core/templates/create/elements/Line.jsx';
import StandardBarChart from '@/components/core/templates/create/elements/charts/StandardBarChart.jsx';
import StandardLineChart from '@/components/core/templates/create/elements/charts/StandardLineChart.jsx';
import StandardPieChart from '@/components/core/templates/create/elements/charts/StandardPieChart.jsx';
import GenericShape from '@/components/core/templates/create/elements/shapes/GenericShape.jsx';
import GenericFrameShape from '@/components/core/templates/create/elements/frames/GenericFrameShape.jsx';
import StandardDoughnutChart from '@/components/core/templates/create/elements/charts/StandardDoughnutChart.jsx';
import StandardBarChartHorizontal from '@/components/core/templates/create/elements/charts/StandardBarChartHorizontal.jsx';
import StandardAreaChart from '@/components/core/templates/create/elements/charts/StandardAreaChart.jsx';
import AdvancedCharts from '@/components/core/templates/create/elements/charts/advanced/AdvancedCharts.jsx';
import FrameTabs from '@/components/core/templates/create/elements/frames/FrameTabs.jsx';
import FrameCarousel from '@/components/core/templates/create/elements/frames/FrameCarousel.jsx';
import StandardStackedBar from '@/components/core/templates/create/elements/charts/StandardStackedBar';
import shapes from '@/lib/templates/shapes.js';
import StandardLineBarChart from '@/components/core/templates/create/elements/charts/StandartLineBarChart';
import StandartAreaLineChart from '@/components/core/templates/create/elements/charts/StandartAreaLineChart';
import Infographic from '@/components/core/templates/create/elements/Infographic.jsx';
import GenericIcon from '@/components/core/templates/create/elements/GenericIcon';
import icons from '@/lib/templates/icons.js';

export const tools = {
  ...['heading', 'subheading', 'paragraph', 'caption'].reduce((acc, type) => {
    acc[type] = ['bold', 'italic', 'underline', 'font', 'text-color', 'opacity', 'animation', 'shadow'];
    return acc;
  }, {}),
  ...Object.keys(shapes).reduce((acc, type) => {
    acc[`shape-${type}`] = ['background-color', 'border', 'opacity', 'border-radius', 'animation', 'shadow'];
    return acc;
  }, {}),
  ...Object.keys(shapes).reduce((acc, type) => {
    acc[`frame-${type}`] = ['opacity', 'border-radius', 'animation', 'shadow'];
    return acc;
  }, {}),
  ...icons.reduce((acc, icon) => {
    acc[`icon-${icon.name}`] = ['icon', 'opacity', 'animation', 'shadow', 'text-color'];
    return acc;
  }, {}),
  'frame-tabs': ['tabs', 'opacity', 'animation', 'shadow'],
  'frame-carousel': ['carousel', 'opacity', 'animation', 'shadow'],
  line: ['background-color', 'opacity', 'line', 'animation', 'shadow'],
  image: ['border', 'border-radius', 'opacity', 'animation', 'shadow'],
  table: ['table', 'opacity', 'font', 'text-color', 'border', 'background-color', 'animation'],
  'key-value': ['key-value', 'opacity', 'font', 'text-color', 'border', 'background-color', 'animation'],
  'chart-bar': ['chart', 'opacity', 'animation',],
  'chart-line': ['chart', 'opacity', 'animation'],
  'chart-pie': ['chart', 'opacity', 'animation'],
  'chart-doughnut': ['chart', 'opacity', 'animation'],
  'chart-10-shapes': ['advanced-chart', 'opacity'],
  'chart-10-square': ['advanced-chart', 'opacity'],
  'chart-bar-horizontal': ['chart', 'opacity'],
  'chart-area': ['chart', 'opacity'],
  'chart-stacked-bar': ['chart', 'opacity'],
  'chart-line-bar': ['chart', 'opacity'],
  'chart-line-area': ['chart', 'opacity'],
  'chart-gender-stats': ['advanced-chart', 'opacity'],
  'chart-pyramid': ['advanced-chart', 'opacity'],
  'chart-funnel': ['advanced-chart', 'opacity'],
  'chart-stackedbar-advanced': ['advanced-chart', 'opacity'],
  'chart-custom-bar': ['advanced-chart', 'opacity'],
  'chart-linear-bar': ['advanced-chart', 'opacity'],
  infographic: ['infographic', 'opacity'],
  'chart-lollipop': ['advanced-chart', 'opacity', 'animation', 'shadow'],
};

export const components = {
  ...['heading', 'subheading', 'paragraph', 'caption'].reduce((acc, type) => {
    acc[type] = Text;
    return acc;
  }, {}),
  ...Object.keys(shapes).reduce((acc, type) => {
    acc[`shape-${type}`] = GenericShape;
    return acc;
  }, {}),
  ...Object.keys(shapes).reduce((acc, type) => {
    acc[`frame-${type}`] = GenericFrameShape;
    return acc;
  }, {}),
  ...icons.reduce((acc, icon) => {
    acc[`icon-${icon.name}`] = GenericIcon;
    return acc;
  }, {}),
  'frame-tabs': FrameTabs,
  'frame-carousel': FrameCarousel,
  line: Line,
  image: Image,
  table: Table,
  'key-value': KeyValue,
  'chart-bar': StandardBarChart,
  'chart-line': StandardLineChart,
  'chart-pie': StandardPieChart,
  'chart-10-shapes': AdvancedCharts,
  'chart-doughnut': StandardDoughnutChart,
  'chart-bar-horizontal': StandardBarChartHorizontal,
  'chart-area': StandardAreaChart,
  'chart-stacked-bar': StandardStackedBar,
  'chart-line-bar': StandardLineBarChart,
  'chart-line-area': StandartAreaLineChart,
  'chart-gender-stats': AdvancedCharts,
  'chart-pyramid': AdvancedCharts,
  'chart-funnel': AdvancedCharts,
  'chart-stackedbar-advanced': AdvancedCharts,
  'chart-custom-bar': AdvancedCharts,
  'chart-linear-bar': AdvancedCharts,
  infographic: Infographic,
  'chart-lollipop': AdvancedCharts,
};

export const getElementTools = (type) => {
  if (!tools[type]) throw new Error(`No tools found for type ${type}`);
  return tools[type];
};

export const getElementIcon = (type) => {
  if (!icons[type]) throw new Error(`No icon found for type ${type}`);
  return icons[type];
};
