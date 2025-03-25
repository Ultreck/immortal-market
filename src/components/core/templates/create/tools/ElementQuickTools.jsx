import {
  FontSize,
  Bold,
  Italic,
  Underline,
  TextColor,
  TextAlign,
} from '@/components/core/templates/create/tools/quick-tools/TextTool.jsx';
import {
  StandardFontSize,
  StandardColor,
} from '@/components/core/templates/create/tools/quick-tools/StandardChartTools.jsx';
import {
  AdvancedChartLabelColor,
  AdvancedChartLabelFontSize,
} from '@/components/core/templates/create/tools/quick-tools/AdvancedChartTool.jsx';
import {
  ImageBorderWeight,
  ImageBorderColor,
} from '@/components/core/templates/create/tools/quick-tools/ImageTool.jsx';
import useDesignStore from '@/store/design';
import { createElement } from 'react';

const tools = {
  'font-size': FontSize,
  bold: Bold,
  italic: Italic,
  underline: Underline,
  'text-color': TextColor,
  'text-align': TextAlign,
  'chart-s-label-font': StandardFontSize,
  'chart-s-label-color': StandardColor,
  'chart-a-label-font': AdvancedChartLabelFontSize,
  'chart-a-label-color': AdvancedChartLabelColor,
  'border-width': ImageBorderWeight,
  'border-color': ImageBorderColor,
};

const elementsTools = {
  text: ['font-size', 'bold', 'italic', 'underline', 'text-color', 'text-align'],
  'chart-s': ['chart-s-label-font', 'chart-s-label-color'],
  'chart-a': ['chart-a-label-font', 'chart-a-label-color'],
  image: ['border-width', 'border-color'],
  shape: ['border-width', 'border-color'],
};

const ElementQuickTools = () => {
  const updateElement = useDesignStore((state) => state.updateElement);
  const elements = useDesignStore((state) => {
    return state.elements.filter((el) => state.selectedElements.includes(el.key));
  });
  const hasTool = Object.keys(elementsTools).includes(elements[0]?.type);
  const elementTools = elementsTools[elements[0]?.type];

  const handleChange = (element) => {
    updateElement(element.id, element, true);
  };

  return (
    <>
      {elements.length == 1 &&
        hasTool &&
        elementTools.map((value, index) => {
          const tool = tools[value];
          if (!tool) return null;
          return (
            <div key={index}>
              {createElement(tool, {
                element: elements[0],
                onChange: (el) => handleChange(el),
              })}
            </div>
          );
        })}
    </>
  );
};

export default ElementQuickTools;
