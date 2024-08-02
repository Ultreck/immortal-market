import {
  TbArrowBigDownFilled,
  TbArrowBigLeftFilled,
  TbArrowBigRightFilled,
  TbArrowBigUpFilled,
  TbBrackets,
  TbCapsuleHorizontalFilled,
  TbChartBar,
  TbChartLine,
  TbChartPieFilled,
  TbCircleFilled,
  TbCursorText,
  TbHeading,
  TbHeartFilled,
  TbIcons,
  TbImageInPicture,
  TbLine,
  TbRectangleFilled,
  TbSquareRotatedFilled,
  TbStarFilled,
  TbTableFilled,
  TbTriangleFilled,
} from 'react-icons/tb';
import { FaArrowsUpDown } from 'react-icons/fa6';
import Heading from '@/components/core/templates/create/elements/texts/Heading.jsx';
import Text from '@/components/core/templates/create/elements/texts/Text.jsx';
import Logo from '@/components/core/templates/create/elements/Logo.jsx';
import Image from '@/components/core/templates/create/elements/Image.jsx';
import Table from '@/components/core/templates/create/elements/Table.jsx';
import KeyValue from '@/components/core/templates/create/elements/KeyValue.jsx';
import Line from '@/components/core/templates/create/elements/Line.jsx';
import SsIcon from '@/components/core/templates/create/elements/SsIcon.jsx';
import TemplateBarChart from '@/components/core/templates/create/elements/charts/TemplateBarChart.jsx';
import TemplateLineChart from '@/components/core/templates/create/elements/charts/TemplateLineChart.jsx';
import TemplatePieChart from '@/components/core/templates/create/elements/charts/TemplatePieChart.jsx';
import GenericShape from '@/components/core/templates/create/elements/shapes/GenericShape.jsx';
import GenericFrameShape from '@/components/core/templates/create/elements/frames/GenericFrameShape.jsx';

export const icons = {
  heading: TbHeading,
  text: TbCursorText,
  'shape-rectangle': TbRectangleFilled,
  'shape-circle': TbCircleFilled,
  'shape-triangle': TbTriangleFilled,
  'shape-rhombus': TbSquareRotatedFilled,
  'shape-arrow-up': TbArrowBigUpFilled,
  'shape-arrow-right': TbArrowBigRightFilled,
  'shape-arrow-down': TbArrowBigDownFilled,
  'shape-arrow-left': TbArrowBigLeftFilled,
  'shape-arrow-up-down': FaArrowsUpDown,
  'frame-rectangle': TbRectangleFilled,
  'frame-triangle': TbTriangleFilled,
  'frame-circle': TbCircleFilled,
  'frame-star': TbStarFilled,
  'frame-heart': TbHeartFilled,
  'frame-rhombus': TbSquareRotatedFilled,
  'frame-arrow-left': TbArrowBigLeftFilled,
  'frame-arrow-right': TbArrowBigRightFilled,
  'frame-arrow-up': TbArrowBigUpFilled,
  'frame-arrow-down': TbArrowBigDownFilled,
  'frame-arrow-up-down': FaArrowsUpDown,
  logo: TbCapsuleHorizontalFilled,
  line: TbLine,
  image: TbImageInPicture,
  table: TbTableFilled,
  'key-value': TbBrackets,
  icon: TbIcons,
  'chart-bar': TbChartBar,
  'chart-line': TbChartLine,
  'chart-pie': TbChartPieFilled,
};

export const tools = {
  heading: ['bold', 'italic', 'underline', 'font', 'text-color', 'opacity', 'animation'],
  text: ['bold', 'italic', 'underline', 'font', 'text-color', 'text-align', 'opacity', 'animation'],
  'shape-rectangle': ['background-color', 'border', 'opacity', 'border-radius', 'animation'],
  'shape-circle': ['background-color', 'border', 'opacity', 'animation'],
  'shape-triangle': ['background-color', 'opacity', 'animation'],
  'shape-rhombus': ['background-color', 'opacity', 'animation'],
  'shape-arrow-up': ['background-color', 'opacity', 'animation'],
  'shape-arrow-right': ['background-color', 'opacity', 'animation'],
  'shape-arrow-down': ['background-color', 'opacity', 'animation'],
  'shape-arrow-left': ['background-color', 'opacity', 'animation'],
  'shape-arrow-up-down': ['background-color', 'opacity', 'animation'],
  'frame-rectangle': ['opacity', 'border-radius', 'animation'],
  'frame-triangle': ['opacity', 'animation'],
  'frame-circle': ['opacity', 'animation'],
  'frame-star': ['opacity', 'animation'],
  'frame-heart': ['opacity', 'animation'],
  'frame-rhombus': ['opacity', 'animation'],
  'frame-arrow-left': ['opacity', 'animation'],
  'frame-arrow-right': ['opacity', 'animation'],
  'frame-arrow-up': ['opacity', 'animation'],
  'frame-arrow-down': ['opacity', 'animation'],
  'frame-arrow-up-down': ['opacity', 'animation'],
  logo: ['opacity', 'animation'],
  line: ['background-color', 'opacity', 'line', 'animation'],
  image: ['border', 'border-radius', 'opacity', 'animation'],
  table: ['table', 'opacity', 'font', 'text-color', 'border', 'background-color', 'animation'],
  'key-value': ['key-value', 'opacity', 'font', 'text-color', 'border', 'background-color', 'animation'],
  icon: ['icon', 'opacity', 'animation'],
  'chart-bar': ['chart', 'opacity', 'animation'],
  'chart-line': ['chart', 'opacity', 'animation'],
  'chart-pie': ['chart', 'opacity', 'animation'],
};

export const components = {
  heading: Heading,
  text: Text,
  'shape-rectangle': GenericShape,
  'shape-circle': GenericShape,
  'shape-triangle': GenericShape,
  'shape-rhombus': GenericShape,
  'shape-arrow-up': GenericShape,
  'shape-arrow-down': GenericShape,
  'shape-arrow-right': GenericShape,
  'shape-arrow-left': GenericShape,
  'shape-arrow-up-down': GenericShape,
  'frame-rectangle': GenericFrameShape,
  'frame-triangle': GenericFrameShape,
  'frame-circle': GenericFrameShape,
  'frame-star': GenericFrameShape,
  'frame-heart': GenericFrameShape,
  'frame-rhombus': GenericFrameShape,
  'frame-arrow-left': GenericFrameShape,
  'frame-arrow-right': GenericFrameShape,
  'frame-arrow-up': GenericFrameShape,
  'frame-arrow-down': GenericFrameShape,
  'frame-arrow-up-down': GenericFrameShape,
  logo: Logo,
  line: Line,
  image: Image,
  table: Table,
  'key-value': KeyValue,
  icon: SsIcon,
  'chart-bar': TemplateBarChart,
  'chart-line': TemplateLineChart,
  'chart-pie': TemplatePieChart,
};

export const getElementTools = (type) => {
  if (!tools[type]) throw new Error(`No tools found for type ${type}`);
  return tools[type];
};

export const getElementIcon = (type) => {
  if (!icons[type]) throw new Error(`No icon found for type ${type}`);
  return icons[type];
};
