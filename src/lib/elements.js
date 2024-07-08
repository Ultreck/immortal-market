import { RiCircleFill, RiCircleLine, RiFontFamily, RiHeading2, RiPieChart2Line, RiRectangleFill } from 'react-icons/ri';

const elements = [
  {
    id: 'heading',
    type: 'heading',
    name: 'Heading',
    icon: RiHeading2,
    data: {
      type: 'heading',
      text: 'Heading',
      width: 400,
      height: 36,
      style: { fontSize: 28, fontWeight: 'bold', color: '#000000' },
      tools: ['bold', 'italic', 'underline', 'font-size', 'text-color'],
    },
    group: 'text',
  },
  {
    id: 'text',
    type: 'text',
    name: 'Text',
    icon: RiFontFamily,
    data: {
      type: 'text',
      text: 'Text',
      width: 300,
      height: 20,
      style: { fontSize: 16, fontWeight: 'normal', color: '#000000' },
      tools: ['bold', 'italic', 'underline', 'font-size', 'text-color'],
    },
    group: 'text',
  },
  {
    id: 'chart',
    type: 'chart',
    name: 'Chart',
    icon: RiPieChart2Line,
    data: {
      type: 'chart',
      text: 'Chart',
      width: 400,
      height: 400,
      tools: ['chart-picker'],
    },
    group: 'visual',
  },
  {
    id: 'logo',
    type: 'logo',
    name: 'Logo',
    icon: RiCircleLine,
    data: { type: 'logo', text: 'Logo', width: 120, height: 0 },
    group: 'visual',
  },
  {
    id: 'circle',
    type: 'circle',
    name: 'Circle',
    icon: RiCircleFill,
    data: {
      style: { backgroundColor: '#ccc' },
      type: 'circle',
      text: 'Circle',
      width: 120,
      height: 120,
      tools: ['background-color'],
    },
    group: 'shape',
  },
  {
    id: 'rectangle',
    type: 'rectangle',
    name: 'Rectangle',
    icon: RiRectangleFill,
    data: {
      style: { backgroundColor: '#ccc' },
      type: 'rectangle',
      text: 'Rectangle',
      width: 100,
      height: 100,
      tools: ['background-color', 'background-image'],
    },
    group: 'shape',
  },
];

export default elements;
