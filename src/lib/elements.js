import Text, { TextPresent } from '@/components/core/templates/create/elements/Text.jsx';
import List, { ListPresent } from '@/components/core/templates/create/elements/List.jsx';
import CountUpNumber, { CountUpNumberPresent } from '@/components/core/templates/create/elements/CountUpNumber.jsx';
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
import DataTag, { DataPresent } from '@/components/core/templates/create/elements/DataTag.jsx';

export const tools = {
  ...['heading', 'subheading', 'paragraph', 'caption'].reduce((acc, type) => {
    acc[type] = ['font', 'opacity', 'animation', 'shadow', 'layout'];
    return acc;
  }, {}),
  list: ['list', 'font', 'opacity', 'animation', 'shadow', 'layout'],
  'count-up-number': ['count-up-number', 'font', 'opacity', 'animation', 'shadow', 'layout', 'tooltip'],
  'chart-s': ['chart', 'chart-data', 'chart-font', 'colors', 'opacity', 'animation', 'layout', 'tooltip'],
  'chart-a': ['advanced-chart', 'chart-data', 'chart-font', 'colors', 'opacity', 'layout', 'tooltip'],
  shape: ['background', 'border', 'opacity', 'animation', 'shadow', 'layout', 'tooltip'],
  frame: (element) => {
    if (element.config.name === 'tabs') return ['tabs', 'opacity', 'animation', 'shadow', 'layout', 'tooltip'];
    if (element.config.name === 'carousel') return ['carousel', 'opacity', 'animation', 'shadow', 'layout', 'tooltip'];
    if (element.config.name === 'marquee') return ['marquee', 'opacity', 'animation', 'shadow', 'layout', 'tooltip'];
    if (element.config.name === 'marquee-text') {
      return ['marquee-text', 'font', 'opacity', 'animation', 'shadow', 'layout', 'tooltip'];
    }
    if (element.config.name === 'typewriter-text') {
      return ['marquee-text', 'font', 'opacity', 'animation', 'shadow', 'layout', 'tooltip'];
    }
    return ['opacity', 'animation', 'shadow'];
  },
  icon: ['icon', 'color', 'opacity', 'animation', 'shadow', 'layout', 'tooltip'],
  map: ['map', 'opacity'],
  table: ['table', 'colors', 'font', 'opacity', 'animation'],
  line: ['background', 'opacity', 'line', 'animation', 'shadow', 'layout', 'tooltip'],
  image: ['border', 'opacity', 'animation', 'shadow', 'layout', 'tooltip'],
  infographic: ['infographic', 'opacity'],
  widget: ['summarizer', 'opacity', 'animation'],
  'data-tag': ['data-tag', 'font', 'opacity', 'animation', 'shadow', 'layout', 'tooltip'],
};

export const components = {
  edit: {
    ...['heading', 'subheading', 'paragraph', 'caption'].reduce((acc, type) => {
      acc[type] = Text;
      return acc;
    }, {}),
    list: List,
    'count-up-number': CountUpNumber,
    'chart-s': StandardCharts,
    'chart-a': AdvanceCharts,
    shape: Shape,
    frame: Frame,
    icon: Icon,
    table: Table,
    map: Map,
    line: Line,
    image: Image,
    infographic: Infographic,
    widget: Widget,
    'data-tag': DataTag,
  },
  present: {
    ...['heading', 'subheading', 'paragraph', 'caption'].reduce((acc, type) => {
      acc[type] = TextPresent;
      return acc;
    }, {}),
    list: ListPresent,
    'count-up-number': CountUpNumberPresent,
    'chart-s': StandardChartsPresent,
    'chart-a': AdvanceChartsPresent,
    table: TablePresent,
    shape: ShapePresent,
    line: LineElementContent,
    icon: IconPresent,
    image: ImagePresent,
    infographic: InfographicPresent,
    map: MapPresent,
    'data-tag': DataPresent,
  },
};

export const getElementTools = (element) => {
  if (!tools[element.type]) throw new Error(`No tools found for type ${element.type}`);
  if (typeof tools[element.type] === 'function') return tools[element.type](element);
  return tools[element.type];
};

export const getChartsDefaultStyle = ({ type, name }) => {
  const tools = getElementTools({ type, config: { name } });
  let styles = {};
  if (tools.includes('chart-font')) {
    styles = {
      ...styles,
      legendSize: 16,
      lFontWeight: 'normal',
      gFontWeight: 'normal',
      fontFamily: 'Roboto',
      lFontStyle: 'normal',
      gFontStyle: 'normal',
      gridAndLegendColor: '#000000',
      textAlign: 'left',
      xPadding: 0,
      yPadding: 0,
      labelSize: 16,
      valueSize: 16,
      valueAndLableColor: '#000000',
      xGridSize: 16,
      yGridSize: 16,
    };
  }
  return styles;
};

export const getElementDefaultStyle = ({ type, name }) => {
  const tools = getElementTools({ type, config: { name } });
  if (tools.length === 0) return {};
  let styles = {};
  if (tools.includes('font')) {
    styles = {
      ...styles,
      fontSize: 16,
      fontWeight: 'normal',
      color: '#000000',
      textAlign: 'left',
      letterSpacing: 0,
      lineHeight: 1,
    };
  }
  if (tools.includes('opacity')) {
    styles = { ...styles, opacity: 1 };
  }
  if (tools.includes('color')) {
    styles = { ...styles, color: '#000000' };
  }
  if (tools.includes('background')) {
    styles = { ...styles, background: '#ddd' };
  }
  if (tools.includes('animation')) {
    styles = { ...styles, animationName: '', animationDuration: '1s' };
  }
  if (tools.includes('shadow')) {
    styles = { ...styles, shadow: '' };
  }
  if (tools.includes('border')) {
    styles = { ...styles, borderWidth: 0, borderColor: '#000000', borderRadius: 0 };
  }
  return styles;
};

