import Text, { TextPresent } from '@/components/core/templates/create/elements/Text.jsx';
import Image, { ImagePresent } from '@/components/core/templates/create/elements/Image.jsx';
import Line, { LineElementContent } from '@/components/core/templates/create/elements/Line.jsx';
import Shape, { ShapePresent } from '@/components/core/templates/create/elements/Shape.jsx';
import AdvanceCharts from '@/components/core/templates/create/elements/charts/advanced/AdvanceCharts.jsx';
import Infographic, { InfographicPresent } from '@/components/core/templates/create/elements/Infographic.jsx';
import Icon, { IconPresent } from '@/components/core/templates/create/elements/Icon.jsx';
import StandardCharts from '@/components/core/templates/create/elements/charts/standard/StandardCharts.jsx';
import AdvanceChartsPresent from '@/components/core/templates/create/elements/charts/advanced/AdvanceChartsPresent.jsx';
import StandardChartsPresent from '@/components/core/templates/create/elements/charts/standard/StandardChartsPresent.jsx';
import Map, { MapPresent } from '@/components/core/templates/create/elements/maps/Map.jsx';
import Table, { TablePresent } from '@/components/core/templates/create/elements/table/Table.jsx';
import Frame from '@/components/core/templates/create/elements/frames/Frame.jsx';
import Widget from '@/components/core/templates/create/elements/widgets/Widget.jsx';
import Data from '@/components/core/templates/create/elements/Data.jsx';

export const charts = {
  standard: [
    'bar',
    'line',
    'pie',
    'doughnut',
    'bar-horizontal',
    'area',
    'stacked-bar',
    'line-bar',
    'line-area',
    'rose-pie',
    'doughnut-standard',
    'doughnut-crazy',
    'area-multiple',
    'semi-circle',
    'vertical-bar',
    'semi-pie',
    'alt-bar',
    'bar-not-sep',
    'pie-ordinary',
    'bar-multiple',
    'vertical-bar-no-sep',
    'stacked-bar-vertical',
    'bar-multiple-vertical',
    'line-multiple',
    'line-area-vertical',
    'line-bar-vertical',
    'bubble',
    'area-bar',
    'area-bar-vertical',
    'scatter',
  ],
  advanced: [
    'shapes',
    'gender-stats',
    'pyramid',
    'funnel',
    'stackedbar-advanced',
    'custom-bar',
    'linear-bar',
    'lollipop',
    'nested-circles',
    'circle-icons',
    'tree-map',
    'dynamic-sorting',
    'speedometer',
    'speedometer-simple',
    'speedometer-multiple',
    'scatter-life-expectancy',
    'pictogram-shapes',
    'stacked-card',
    'percentage-card',
    'column-card',
    'percentage-card-2',
  ],
};

export const tools = {
  ...['heading', 'subheading', 'paragraph', 'caption'].reduce((acc, type) => {
    acc[type] = ['font', 'opacity', 'animation', 'shadow'];
    return acc;
  }, {}),
  ...charts.standard.reduce((acc, type) => {
    acc[`chart-s-${type}`] = ['chart', 'colors', 'opacity', 'animation'];
    return acc;
  }, {}),
  ...charts.advanced.reduce((acc, type) => {
    acc[`chart-a-${type}`] = ['advanced-chart', 'colors', 'opacity'];
    return acc;
  }, {}),
  shape: ['background', 'border', 'opacity', 'animation', 'shadow'],
  frame: (element) => {
    if (element.config.name === 'tabs') return ['tabs', 'opacity', 'animation', 'shadow'];
    if (element.config.name === 'carousel') return ['carousel', 'opacity', 'animation', 'shadow'];
    return ['opacity', 'animation', 'shadow'];
  },
  icon: ['icon', 'color', 'opacity', 'animation', 'shadow'],
  map: ['map', 'opacity'],
  table: ['table', 'colors', 'font', 'opacity', 'animation'],
  line: ['background', 'opacity', 'line', 'animation', 'shadow'],
  image: ['border', 'opacity', 'animation', 'shadow'],
  infographic: ['infographic', 'opacity'],
  widget: ['summarizer', 'opacity', 'animation'],
  data: ['data', 'animation'],
};

export const components = {
  edit: {
    ...['heading', 'subheading', 'paragraph', 'caption'].reduce((acc, type) => {
      acc[type] = Text;
      return acc;
    }, {}),
    ...charts.standard.reduce((acc, type) => {
      acc[`chart-s-${type}`] = StandardCharts;
      return acc;
    }, {}),
    ...charts.advanced.reduce((acc, type) => {
      acc[`chart-a-${type}`] = AdvanceCharts;
      return acc;
    }, {}),
    shape: Shape,
    frame: Frame,
    icon: Icon,
    table: Table,
    map: Map,
    line: Line,
    image: Image,
    infographic: Infographic,
    widget: Widget,
    data: Data,
  },
  present: {
    ...['heading', 'subheading', 'paragraph', 'caption'].reduce((acc, type) => {
      acc[type] = TextPresent;
      return acc;
    }, {}),
    ...charts.standard.reduce((acc, type) => {
      acc[`chart-s-${type}`] = StandardChartsPresent;
      return acc;
    }, {}),
    ...charts.advanced.reduce((acc, type) => {
      acc[`chart-a-${type}`] = AdvanceChartsPresent;
      return acc;
    }, {}),
    table: TablePresent,
    shape: ShapePresent,
    line: LineElementContent,
    icon: IconPresent,
    image: ImagePresent,
    infographic: InfographicPresent,
    map: MapPresent,
  },
};

export const getElementTools = (element) => {
  if (!tools[element.type]) throw new Error(`No tools found for type ${element.type}`);
  if (typeof tools[element.type] === 'function') return tools[element.type](element);
  return tools[element.type];
};
