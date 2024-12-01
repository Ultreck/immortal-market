import { isValidJsonArray } from '@/lib/utils.js';
import { Button, Checkbox, Tab, Tabs, Textarea } from '@nextui-org/react';
import { Controller, useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { useState } from 'react';

const AdvanceDynamicSortingChartConfig = ({ element, onChange }) => {
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
      <div>
        <Checkbox
          isSelected={element.config.showLegend}
          classNames={{ base: 'py-0' }}
          onValueChange={(v) => onChange({ ...element, config: { ...element.config, showLegend: v } })}
        >
          Show Legend
        </Checkbox>
      </div>
      <Checkbox
        isSelected={element.config.showLabel}
        onValueChange={(v) => onChange({ ...element, config: { ...element.config, showLabel: v } })}
        classNames={{ base: 'py-0' }}
      >
        Show Label
      </Checkbox>
      <Checkbox
        isSelected={element.config.showTitle}
        onValueChange={(v) => onChange({ ...element, config: { ...element.config, showTitle: v } })}
        classNames={{ base: 'py-0' }}
      >
        Show Title
      </Checkbox>
      {element.config.showTitle && (
        <Textarea
          variant="outlined"
          value={element.config.title}
          onChange={(e) => onChange({ ...element, config: { ...element.config, title: e.target.value } })}
        />
      )}
    </div>
  );
};

AdvanceDynamicSortingChartConfig.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AdvanceDynamicSortingChartConfig;
