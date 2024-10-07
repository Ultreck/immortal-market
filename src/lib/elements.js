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
import DataTag, { DataPresent } from '@/components/core/templates/create/elements/DataTag.jsx';

export const tools = {
  ...['heading', 'subheading', 'paragraph', 'caption'].reduce((acc, type) => {
    acc[type] = ['font', 'opacity', 'animation', 'shadow', 'layout'];
    return acc;
  }, {}),
  'chart-s': ['chart', 'colors', 'opacity', 'animation', 'chart-data', 'layout'],
  'chart-a': ['advanced-chart', 'colors', 'opacity', 'chart-data', 'layout'],
  shape: ['background', 'border', 'opacity', 'animation', 'shadow', 'layout'],
  frame: (element) => {
    if (element.config.name === 'tabs') return ['tabs', 'opacity', 'animation', 'shadow', 'layout'];
    if (element.config.name === 'carousel') return ['carousel', 'opacity', 'animation', 'shadow', 'layout'];
    if (element.config.name === 'marquee') return ['carousel', 'opacity', 'animation', 'shadow', 'layout'];
    if (element.config.name === 'marqueeText')
      return ['font', 'marqueeText', 'opacity', 'animation', 'shadow', 'layout'];
    if (element.config.name === 'typewriterText')
      return ['font', 'marqueeText', 'opacity', 'animation', 'shadow', 'layout'];
    return ['opacity', 'animation', 'shadow'];
  },
  icon: ['icon', 'color', 'opacity', 'animation', 'shadow', 'layout'],
  map: ['map', 'opacity'],
  table: ['table', 'colors', 'font', 'opacity', 'animation'],
  line: ['background', 'opacity', 'line', 'animation', 'shadow', 'layout'],
  image: ['border', 'opacity', 'animation', 'shadow', 'layout'],
  infographic: ['infographic', 'opacity'],
  widget: ['summarizer', 'opacity', 'animation'],
  'data-tag': ['data-tag', 'font', 'opacity', 'animation', 'shadow', 'layout'],
};

export const components = {
  edit: {
    ...['heading', 'subheading', 'paragraph', 'caption'].reduce((acc, type) => {
      acc[type] = Text;
      return acc;
    }, {}),
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
