import { ElementPropTypes } from '@/lib/prop-types.js';
import { PollPresent, Poll } from '@/components/core/templates/create/elements/forms/Poll.jsx';
import { FormPresent, Form } from '@/components/core/templates/create/elements/forms/Form.jsx';
import { createElement } from 'react';

export const FormPresents = ({ element, active, onChange, ...props }) => {
  const components = {
    poll: PollPresent,
    form: FormPresent,
  };

  if (components[element.config.name]) {
    return createElement(components[element.config.name], { element, active, onChange, ...props });
  }
};

const Forms = ({ element, active, onChange, ...props }) => {
  const components = {
    poll: Poll,
    form: Form,
  };
  if (components[element.config.name]) {
    return createElement(components[element.config.name], { element, active, onChange, ...props });
  }
};

FormPresent.propTypes = ElementPropTypes;

export default Forms;
