import { isValidJsonArray } from '@/lib/utils';
import { Button, Textarea } from '@nextui-org/react';
import { Controller, useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

const AdvancedNestedCirclesConfig = ({ element, onChange }) => {
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
    <form onSubmit={handleSubmit(onSubmit)}>
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
      <Button type="submit" variant="solid" radius="full" className="text-base px-4 mt-6">
        Apply
      </Button>
    </form>
  );
};

AdvancedNestedCirclesConfig.propTypes = {
  element: PropTypes.shape({
    config: PropTypes.shape({
      data: PropTypes.array,
      colors: PropTypes.array,
    }),
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AdvancedNestedCirclesConfig;
