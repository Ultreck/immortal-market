import AutoCompleteNumberInput from '@/components/ui/AutoCompleteNumberInput.jsx';
import { isValidJsonArray } from '@/lib/utils.js';
import { Button, Checkbox, Tab, Tabs, Textarea } from '@nextui-org/react';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

const AdvancePercentageCardConfig = ({ element, onChange }) => {
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
    <div>
          <div className="space-y-6">
            <div className="flex items-center space-x-4 mb-6">
              <Checkbox
                isSelected={element.config.showLabel}
                onValueChange={(v) => onChange({ ...element, config: { ...element.config, showLabel: v } })}
                classNames={{ base: 'py-0' }}
              >
                Show Label
              </Checkbox>
            </div>
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
    </div>
  );
};

AdvancePercentageCardConfig.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AdvancePercentageCardConfig;
