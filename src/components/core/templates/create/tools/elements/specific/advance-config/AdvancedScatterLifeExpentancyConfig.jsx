import { isValidJsonArray } from '@/lib/utils.js';
import { Button, Checkbox, Tab, Tabs, Textarea } from '@heroui/react';
import { Controller, useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { useState } from 'react';

const AdvancedScatterLifeExpentancyConfig = ({ element, onChange }) => {
  const [tab, setTab] = useState('data');
  const { handleSubmit, control } = useForm({
    defaultValues: {
      json: JSON.stringify(element.config.data, null, 2),
    },
  });

  const onSubmit = async (values) => {
    const { json } = values;
    const data = JSON.parse(json);
    onChange({ ...element, config: { ...element.config, data } });
  };

  return (
        <div className="space-y-6">
          <div>
            <Checkbox
              isSelected={element.config.showXaxis}
              classNames={{ base: 'py-0' }}
              onValueChange={(v) => onChange({ ...element, config: { ...element.config, showXaxis: v } })}
            >
              Show X Axis
            </Checkbox>
          </div>
          <div>
            <Checkbox
              isSelected={element.config.showYaxis}
              classNames={{ base: 'py-0' }}
              onValueChange={(v) => onChange({ ...element, config: { ...element.config, showYaxis: v } })}
            >
              Show Y Axis
            </Checkbox>
          </div>
          <Checkbox
            isSelected={element.config.showGridline}
            onValueChange={(v) => onChange({ ...element, config: { ...element.config, showGridline: v } })}
            classNames={{ base: 'py-0' }}
          >
            Show Gridline
          </Checkbox>
        </div>
  );
};

AdvancedScatterLifeExpentancyConfig.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AdvancedScatterLifeExpentancyConfig;
