import { isValidJsonArray } from '@/lib/utils';
import { Button, Textarea } from '@nextui-org/react';
import { Controller, useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

const AdvancedFunnelConfig = ({ element, onChange }) => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      json: JSON.stringify(element.config.data, null, 2),
    },
  });

  const onSubmit = async (values) => {
    const { json, ...rest } = values;
    const data = JSON.parse(json);
    onChange({ ...element, config: { ...element.config, keys: rest, data } });
  };

  return (
    <div className="grid grid-cols-1 gap-2">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="space-y-6">
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
          <Button type="submit" variant="solid" radius="full" className="text-base px-4 mt-6">
            Apply
          </Button>
        </div>
      </form>
    </div>
  );
};

AdvancedFunnelConfig.propTypes = {
  element: PropTypes.shape({
    config: PropTypes.object,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AdvancedFunnelConfig;
