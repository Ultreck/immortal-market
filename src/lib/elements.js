import Text, { TextElementContent } from '@/components/core/templates/create/elements/Text.jsx';
import Image, { CanvasImageContent } from '@/components/core/templates/create/elements/Image.jsx';
import Table, { TableElementContent } from '@/components/core/templates/create/elements/Table.jsx';
import KeyValue, { KeyValueElementContent } from '@/components/core/templates/create/elements/KeyValue.jsx';
import Line, { LineElementContent } from '@/components/core/templates/create/elements/Line.jsx';
import GenericShape, { GenericShapeContent } from '@/components/core/templates/create/elements/shapes/GenericShape.jsx';
import GenericFrameShape from '@/components/core/templates/create/elements/frames/GenericFrameShape.jsx';
import AdvanceCharts from '@/components/core/templates/create/elements/charts/advanced/AdvanceCharts.jsx';
import FrameTabs from '@/components/core/templates/create/elements/frames/FrameTabs.jsx';
import FrameCarousel from '@/components/core/templates/create/elements/frames/FrameCarousel.jsx';
import shapes from '@/lib/templates/shapes.js';
import Infographic, { InfographicElementContent } from '@/components/core/templates/create/elements/Infographic.jsx';
import GenericIcon, { GenericIconContent } from '@/components/core/templates/create/elements/GenericIcon';
import icons from '@/lib/templates/icons.js';
import StandardCharts from '@/components/core/templates/create/elements/charts/standard/StandardCharts.jsx';
import AdvanceChartsPresent from '@/components/core/templates/create/elements/charts/advanced/AdvanceChartsPresent.jsx';
import StandardChartsPresent from '@/components/core/templates/create/elements/charts/standard/StandardChartsPresent.jsx';

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
  ],
  map: ['map', 'europe-map', 'africa-map'],
};

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
  ...charts.standard.reduce((acc, type) => {
    acc[`chart-s-${type}`] = ['chart', 'chart-color', 'opacity', 'animation'];
    return acc;
  }, {}),
  ...charts.advanced.reduce((acc, type) => {
    acc[`chart-a-${type}`] = ['advanced-chart', 'chart-color', 'opacity'];
    return acc;
  }, {}),
  ...charts.map.reduce((acc, type) => {
    acc[`chart-a-${type}`] = ['advanced-chart', 'map-color', 'opacity'];
    return acc;
  }, {}),
  'frame-tabs': ['tabs', 'opacity', 'animation', 'shadow'],
  'frame-carousel': ['carousel', 'opacity', 'animation', 'shadow'],
  line: ['background-color', 'opacity', 'line', 'animation', 'shadow'],
  image: ['border', 'border-radius', 'opacity', 'animation', 'shadow'],
  table: ['table', 'opacity', 'font', 'text-color', 'border', 'background-color', 'animation'],
  'key-value': ['key-value', 'opacity', 'font', 'text-color', 'border', 'background-color', 'animation'],
  infographic: ['infographic', 'opacity'],
};

export const components = {
  edit: {
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
    ...charts.standard.reduce((acc, type) => {
      acc[`chart-s-${type}`] = StandardCharts;
      return acc;
    }, {}),
    ...charts.advanced.reduce((acc, type) => {
      acc[`chart-a-${type}`] = AdvanceCharts;
      return acc;
    }, {}),
    ...charts.map.reduce((acc, type) => {
      acc[`chart-a-${type}`] = AdvanceCharts;
      return acc;
    }, {}),
    'frame-tabs': FrameTabs,
    'frame-carousel': FrameCarousel,
    line: Line,
    image: Image,
    table: Table,
    'key-value': KeyValue,
    infographic: Infographic,
  },
  present: {
    ...['heading', 'subheading', 'paragraph', 'caption'].reduce((acc, type) => {
      acc[type] = TextElementContent;
      return acc;
    }, {}),
    ...Object.keys(shapes).reduce((acc, type) => {
      acc[`shape-${type}`] = GenericShapeContent;
      return acc;
    }, {}),
    ...icons.reduce((acc, icon) => {
      acc[`icon-${icon.name}`] = GenericIconContent;
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
    ...charts.map.reduce((acc, type) => {
      acc[`chart-a-${type}`] = AdvanceChartsPresent;
      return acc;
    }, {}),
    line: LineElementContent,
    image: CanvasImageContent,
    table: TableElementContent,
    'key-value': KeyValueElementContent,
    infographic: InfographicElementContent,
  },
};

export const getElementTools = (type) => {
  if (!tools[type]) throw new Error(`No tools found for type ${type}`);
  return tools[type];
};

export const getElementIcon = (type) => {
  if (!icons[type]) throw new Error(`No icon found for type ${type}`);
  return icons[type];
};

