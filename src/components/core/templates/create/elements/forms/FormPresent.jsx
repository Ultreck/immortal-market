import { ElementPropTypes } from '@/lib/prop-types.js';
import {PollPresent,Poll} from "@/components/core/templates/create/elements/forms/Poll.jsx"
import { createElement } from 'react';


export const FormPresent = ({ element, active, onChange, ...props }) => {
  const components = {
    poll: PollPresent
  };

  if (components[element.config.name]) {
    return createElement(components[element.config.name], { element, active, onChange, ...props });
  }
};

const Form =({ element, active, onChange, ...props }) => {
  const components = {
    poll:Poll
  };

  if (components[element.config.name]) {
    return createElement(components[element.config.name], { element, active, onChange, ...props });
  }
};

FormPresent.propTypes = ElementPropTypes;

export default Form;