import {
  TbArrowBigDownFilled,
  TbArrowBigLeftFilled,
  TbArrowBigRightFilled,
  TbArrowBigUpFilled,
  TbBrackets,
  TbCapsuleHorizontalFilled,
  TbCarouselHorizontalFilled,
  TbChartAreaLine,
  TbChartBar,
  TbChartDonut4,
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
import StandardBarChart from '@/components/core/templates/create/elements/charts/StandardBarChart.jsx';
import StandardLineChart from '@/components/core/templates/create/elements/charts/StandardLineChart.jsx';
import StandardPieChart from '@/components/core/templates/create/elements/charts/StandardPieChart.jsx';
import GenericShape from '@/components/core/templates/create/elements/shapes/GenericShape.jsx';
import GenericFrameShape from '@/components/core/templates/create/elements/frames/GenericFrameShape.jsx';
import StandardDoughnutChart from '@/components/core/templates/create/elements/charts/StandardDoughnutChart.jsx';
import { RiBarChartHorizontalFill, RiCheckboxMultipleBlankFill } from 'react-icons/ri';
import StandardBarChartHorizontal from '@/components/core/templates/create/elements/charts/StandardBarChartHorizontal.jsx';
import StandardAreaChart from '@/components/core/templates/create/elements/charts/StandardAreaChart.jsx';
import AdvancedCharts from '@/components/core/templates/create/elements/charts/advanced/AdvancedCharts.jsx';
import FrameTabs from '@/components/core/templates/create/elements/frames/FrameTabs.jsx';
import FrameCarousel from '@/components/core/templates/create/elements/frames/FrameCarousel.jsx';

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
  'frame-tabs': RiCheckboxMultipleBlankFill,
  'frame-carousel': TbCarouselHorizontalFilled,
  logo: TbCapsuleHorizontalFilled,
  line: TbLine,
  image: TbImageInPicture,
  table: TbTableFilled,
  'key-value': TbBrackets,
  icon: TbIcons,
  'chart-bar': TbChartBar,
  'chart-line': TbChartLine,
  'chart-pie': TbChartPieFilled,
  'chart-10-shapes': TbCapsuleHorizontalFilled,
  'chart-10-square': TbCapsuleHorizontalFilled,
  'chart-doughnut': TbChartDonut4,
  'chart-bar-horizontal': RiBarChartHorizontalFill,
  'chart-area': TbChartAreaLine,
};

export const tools = {
  heading: ['bold', 'italic', 'underline', 'font', 'text-color', 'opacity', 'animation', 'shadow'],
  text: ['bold', 'italic', 'underline', 'font', 'text-color', 'text-align', 'opacity', 'animation', 'shadow'],
  'shape-rectangle': ['background-color', 'border', 'opacity', 'border-radius', 'animation', 'shadow'],
  'shape-circle': ['background-color', 'border', 'opacity', 'animation', 'shadow'],
  'shape-triangle': ['background-color', 'opacity', 'animation', 'shadow'],
  'shape-rhombus': ['background-color', 'opacity', 'animation', 'shadow'],
  'shape-arrow-up': ['background-color', 'opacity', 'animation', 'shadow'],
  'shape-arrow-right': ['background-color', 'opacity', 'animation', 'shadow'],
  'shape-arrow-down': ['background-color', 'opacity', 'animation', 'shadow'],
  'shape-arrow-left': ['background-color', 'opacity', 'animation', 'shadow'],
  'shape-arrow-up-down': ['background-color', 'opacity', 'animation', 'shadow'],
  'frame-rectangle': ['opacity', 'border-radius', 'animation', 'shadow'],
  'frame-triangle': ['opacity', 'animation', 'shadow'],
  'frame-circle': ['opacity', 'animation', 'shadow'],
  'frame-star': ['opacity', 'animation', 'shadow'],
  'frame-heart': ['opacity', 'animation', 'shadow'],
  'frame-rhombus': ['opacity', 'animation', 'shadow'],
  'frame-arrow-left': ['opacity', 'animation', 'shadow'],
  'frame-arrow-right': ['opacity', 'animation', 'shadow'],
  'frame-arrow-up': ['opacity', 'animation', 'shadow'],
  'frame-arrow-down': ['opacity', 'animation', 'shadow'],
  'frame-arrow-up-down': ['opacity', 'animation', 'shadow'],
  'frame-tabs': ['opacity', 'animation', 'shadow'],
  'frame-carousel': ['opacity', 'animation', 'shadow'],
  logo: ['opacity', 'animation', 'shadow'],
  line: ['background-color', 'opacity', 'line', 'animation', 'shadow'],
  icon: ['icon', 'opacity', 'animation', 'shadow'],
  image: ['border', 'border-radius', 'opacity', 'animation', 'shadow'],
  table: ['table', 'opacity', 'font', 'text-color', 'border', 'background-color', 'animation'],
  'key-value': ['key-value', 'opacity', 'font', 'text-color', 'border', 'background-color', 'animation'],
  'chart-bar': ['chart', 'opacity', 'animation'],
  'chart-line': ['chart', 'opacity', 'animation'],
  'chart-pie': ['chart', 'opacity', 'animation'],
  'chart-doughnut': ['chart', 'opacity', 'animation'],
  'chart-10-shapes': ['advanced-chart', 'opacity'],
  'chart-10-square': ['advanced-chart', 'opacity'],
  'chart-bar-horizontal': ['chart', 'opacity'],
  'chart-area': ['chart', 'opacity'],
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
  'frame-tabs': FrameTabs,
  'frame-carousel': FrameCarousel,
  logo: Logo,
  line: Line,
  image: Image,
  table: Table,
  'key-value': KeyValue,
  icon: SsIcon,
  'chart-bar': StandardBarChart,
  'chart-line': StandardLineChart,
  'chart-pie': StandardPieChart,
  'chart-10-shapes': AdvancedCharts,
  'chart-doughnut': StandardDoughnutChart,
  'chart-bar-horizontal': StandardBarChartHorizontal,
  'chart-area': StandardAreaChart,
};

export const getElementTools = (type) => {
  if (!tools[type]) throw new Error(`No tools found for type ${type}`);
  return tools[type];
};

export const getElementIcon = (type) => {
  if (!icons[type]) throw new Error(`No icon found for type ${type}`);
  return icons[type];
};
