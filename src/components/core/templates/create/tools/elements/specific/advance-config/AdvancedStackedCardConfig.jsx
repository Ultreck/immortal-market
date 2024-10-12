import AutoCompleteNumberInput from '@/components/ui/AutoCompleteNumberInput.jsx';
import { isValidJsonArray } from '@/lib/utils.js';
import { Button, Tab, Tabs, Textarea } from '@nextui-org/react';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

const AdvancedStackedCardConfig = ({ element, onChange }) => {
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
          <div className="flex items-center space-x-4">
            <p className="text-base opacity-75 whitespace-nowrap">No. of Cards:</p>
            <AutoCompleteNumberInput
              onChange={(v) =>
                onChange({
                  ...element,
                  config: { ...element.config, bars: Number(v) },
                })
              }
              value={element.config.bars}
              min={1}
              max={element.config.data.length}
              ariaLabel="No of Bars to Show"
            />
          </div>
        </div>
  );
};

AdvancedStackedCardConfig.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AdvancedStackedCardConfig;
