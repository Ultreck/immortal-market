import { isValidJsonArray } from '@/lib/utils.js';
import { Textarea } from '@nextui-org/react';
import { Controller, useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

const AdvancedStackedBarConfig = ({ element }) => {
  const { control } = useForm({
    defaultValues: {
      json: JSON.stringify(element.config.data, null, 2),
      ...Object.keys(element.config.keys).reduce((acc, key) => {
        acc[key] = element.config.keys[key];
        return acc;
      }, {}),
    },
  });

  return (
    <div className="grid grid-cols-1 gap-2">
      <Controller
        name="json"
        control={control}
        rules={{
          required: 'A valid JSON array is required',
          validate: (value) => isValidJsonArray(value),
        }}
        render={({ field, fieldState: { error } }) => {
          const message = error?.type === 'validate' ? 'Invalid JSON array' : error?.message;
          return (
            <Textarea
              classNames={{ inputWrapper: 'px-5 py-5' }}
              minRows="10"
              label="Paste JSON Array Here.."
              bordered
              {...field}
              errorMessage={message}
              isInvalid={!!message}
            />
          );
        }}
      />
    </div>
  );
};

AdvancedStackedBarConfig.propTypes = {
  element: PropTypes.shape({
    config: PropTypes.object,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AdvancedStackedBarConfig;
