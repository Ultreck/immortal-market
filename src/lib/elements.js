import { Text, TextPresent } from '@/components/core/templates/create/elements/texts/Text.jsx';
import { Image, ImagePresent } from '@/components/core/templates/create/elements/Image.jsx';
import { Line, LinePresent } from '@/components/core/templates/create/elements/Line.jsx';
import { Shape, ShapePresent } from '@/components/core/templates/create/elements/Shape.jsx';
import AdvanceCharts from '@/components/core/templates/create/elements/charts/advanced/AdvanceCharts.jsx';
import { Infographic, InfographicPresent } from '@/components/core/templates/create/elements/Infographic.jsx';
import Icon, { IconPresent } from '@/components/core/templates/create/elements/Icon.jsx';
import StandardCharts from '@/components/core/templates/create/elements/charts/standard/StandardCharts.jsx';
import AdvanceChartsPresent from '@/components/core/templates/create/elements/charts/advanced/AdvanceChartsPresent.jsx';
import StandardChartsPresent from '@/components/core/templates/create/elements/charts/standard/StandardChartsPresent.jsx';
import { Map, MapPresent } from '@/components/core/templates/create/elements/maps/Map.jsx';
import { Table, TablePresent } from '@/components/core/templates/create/elements/table/Table.jsx';
import Frame from '@/components/core/templates/create/elements/frames/Frame.jsx';
import { DataPresent, DataTag } from '@/components/core/templates/create/elements/DataTag.jsx';

export const elements = {
  text: {
    tools: (element) => {
      if (element.config.name === 'list') {
        return ['text-list', 'font', 'opacity', 'animation', 'shadow', 'layout'];
      }
      if (element.config.name === 'count-up-number') {
        return ['count-up-number', 'font', 'opacity', 'animation', 'shadow', 'layout'];
      }
      if (element.config.name === 'marquee') {
        return ['text-marquee', 'font', 'opacity', 'animation', 'shadow', 'layout'];
      }
      if (element.config.name === 'typewriter') {
        return ['text-marquee', 'font', 'opacity', 'animation', 'shadow', 'layout'];
      }
      return ['font', 'opacity', 'animation', 'shadow', 'layout'];
    },
    components: {
      edit: Text,
      present: TextPresent,
    },
    config: {
      wrapper: true,
      fit: true,
      editable: true,
      resizeHandles: ['e'],
    },
  },
  'chart-s': {
    tools: ['chart', 'chart-data', 'chart-font', 'colors', 'opacity', 'animation', 'layout', 'tooltip'],
    components: {
      edit: StandardCharts,
      present: StandardChartsPresent,
    },
    config: () => {
      return {
        wrapper: true,
        fit: true,
        editable: true,
        resizeHandles: ['e'],
      };
    },
  },
  'chart-a': {
    tools: ['advanced-chart', 'chart-data', 'chart-font', 'colors', 'opacity', 'layout', 'tooltip'],
    components: {
      edit: AdvanceCharts,
      present: AdvanceChartsPresent,
    },
    config: (element) => {
      const config = {
        wrapper: true,
        editable: true,
      };
      if (element.config.name === 'shapes') config.fit = true;
      if (element.config.name === 'circle-icons') config.fit = true;
      if (element.config.name === 'stacked-card') config.fit = true;
      if (element.config.name === 'percentage-card') config.fit = true;
      if (element.config.name === 'lollipop') config.fit = true;
      if (element.config.name === 'nested-circles') config.fit = true;
      if (element.config.name === 'column-card') config.fit = true;
      if (element.config.name === 'percentage-card-2') config.fit = true;
      if (element.config.name === 'pictogram-shapes') config.fit = true;
      return config;
    },
  },
  shape: {
    tools: ['background', 'border', 'opacity', 'animation', 'shadow', 'layout', 'tooltip'],
    components: {
      edit: Shape,
      present: ShapePresent,
    },
    config: {
      wrapper: true,
    },
  },
  frame: {
    tools: (element) => {
      if (element.config.name === 'tabs') {
        return ['tabs', 'opacity', 'animation', 'shadow', 'layout', 'tooltip'];
      }
      if (element.config.name === 'carousel') {
        return ['carousel', 'opacity', 'animation', 'shadow', 'layout', 'tooltip'];
      }
      return ['opacity', 'animation', 'shadow'];
    },
    components: {
      edit: Frame,
    },
    config: {
      wrapper: true,
      editable: true,
    },
  },
  icon: {
    tools: ['icon', 'color', 'opacity', 'animation', 'shadow', 'layout', 'tooltip'],
    components: {
      edit: Icon,
      present: IconPresent,
    },
    config: {
      wrapper: true,
      fit: true,
    },
  },
  map: {
    tools: ['map', 'opacity'],
    components: {
      edit: Map,
      present: MapPresent,
    },
    config: {
      wrapper: true,
      fit: true,
      editable: true,
      resizeHandles: ['e'],
    },
  },
  table: {
    tools: ['table', 'colors', 'font', 'opacity', 'animation'],
    components: {
      edit: Table,
      present: TablePresent,
    },
    config: {
      wrapper: true,
      editable: true,
    },
  },
  line: {
    tools: ['line', 'color', 'opacity', 'animation', 'shadow', 'layout', 'tooltip'],
    components: {
      edit: Line,
      present: LinePresent,
    },
    config: {
      wrapper: false,
      resizeHandles: ['e'],
    },
  },
  image: {
    tools: ['border', 'opacity', 'animation', 'shadow', 'layout', 'tooltip'],
    components: {
      edit: Image,
      present: ImagePresent,
    },
    config: {
      wrapper: true,
    },
  },
  infographic: {
    tools: ['infographic', 'opacity'],
    components: {
      edit: Infographic,
      present: InfographicPresent,
    },
    config: {
      wrapper: true,
      fit: true,
    },
  },
  'data-tag': {
    tools: ['data-tag', 'font', 'opacity', 'animation', 'shadow', 'layout', 'tooltip'],
    components: {
      edit: DataTag,
      present: DataPresent,
    },
    config: {
      wrapper: true,
      editable: true,
      fit: true,
      resizeHandles: ['e'],
    },
  },
};

export const getElementTools = (element) => {
  const found = elements[element.type];
  if (!found) throw new Error(`No tools found for type ${element.type}`);
  if (typeof found.tools === 'function') return found.tools(element);
  return found.tools;
};

export const getElementEditComponent = (element) => {
  const found = elements[element.type];
  if (!found) throw new Error(`No components found for type ${element.type}`);
  return found.components.edit;
};

export const getElementPresentComponent = (element) => {
  const found = elements[element.type];
  if (!found) throw new Error(`No components found for type ${element.type}`);
  return found.components.present;
};

export const getElementConfig = (element) => {
  const found = elements[element.type];
  if (!found) throw new Error(`No config found for type ${element.type}`);
  if (typeof found.config === 'function') return found.config(element);
  return found.config;
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
