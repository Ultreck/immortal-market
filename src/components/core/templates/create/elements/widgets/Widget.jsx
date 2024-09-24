import { createElement } from 'react';
import Summarizer from '@/components/core/templates/create/elements/widgets/Summarizer.jsx';
import { ElementPropTypes } from '@/lib/prop-types.js';

const Widget = ({ element, active, highlighted, width, onClick, onChange }) => {
  const components = {
    summarizer: Summarizer,
  };

  if (components[element.config.name]) {
    return createElement(components[element.config.name], { element, active, highlighted, width, onClick, onChange });
  }

  return null;
};

Widget.propTypes = ElementPropTypes;

export default Widget;
