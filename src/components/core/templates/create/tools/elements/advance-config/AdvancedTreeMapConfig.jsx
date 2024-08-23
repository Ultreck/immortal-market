import { getKeysFromJson, isValidJsonArray } from '@/lib/utils';
import { Button, Textarea } from '@nextui-org/react';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

const AdvancedTreeMapConfig = ({ element, onChange }) => {
  const { handleSubmit, watch, control } = useForm({
    defaultValues: {
      json: JSON.stringify(element.config.data, null, 2),
      ...Object.keys(element.config.keys).reduce((acc, key) => {
        acc[key] = element.config.keys[key];
        return acc;
      }, {}),
    },
  });

  const keys = getKeysFromJson(watch().json);

  const onSubmit = async (values) => {
    const { json, ...rest } = values;
    const data = JSON.parse(json);
    onChange({ ...element, config: { ...element.config, keys: rest, data } });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
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
    </div>
  );
};

export default AdvancedTreeMapConfig;
