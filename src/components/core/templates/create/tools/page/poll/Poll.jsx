import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { Button, Input, Textarea } from '@heroui/react';
import { RxPlus } from 'react-icons/rx';
import { LuX } from 'react-icons/lu';
import PropTypes from 'prop-types';

const Poll = ({ isLoading, onSubmit, defaultValues }) => {
  const { control, handleSubmit, watch } = useForm({
    defaultValues: defaultValues || {
      question: '',
      options: [' ', ' '],
    },
  });
  const { fields, append, remove } = useFieldArray({ control, name: 'options' });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Poll Question</label>
          <Controller
            name="question"
            control={control}
            rules={{ required: 'Question is required' }}
            render={({ field, fieldState: { error } }) => (
              <div>
                <Textarea
                  {...field}
                  placeholder="Enter your poll question"
                  classNames={{ input: 'text-base px-2 py-1' }}
                  isInvalid={!!error}
                  errorMessage={error?.message}
                />
              </div>
            )}
          />
        </div>
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium">Poll Options</label>
            <Button
              variant="bordered"
              className="text-md"
              size="sm"
              radius="full"
              startContent={<RxPlus />}
              onPress={() => append('')}
            >
              Add option
            </Button>
          </div>

          <div className="space-y-3">
            {fields.map((field, index) => (
              <div key={field.id} className="flex items-center gap-2">
                <Controller
                  name={`options.${index}`}
                  control={control}
                  rules={{
                    required: 'Option is required',
                    validate: (value) => {
                      return (
                        !value.trim() ||
                        !watch('options').some((opt, i) => i !== index && opt.trim() === value.trim()) ||
                        'Options must be unique'
                      );
                    },
                  }}
                  render={({ field, fieldState: { error } }) => (
                    <div className="flex-1">
                      <Input
                        {...field}
                        placeholder={`Option ${index + 1}`}
                        isInvalid={!!error}
                        errorMessage={error?.message}
                        classNames={{ input: 'text-base px-1' }}
                        onChange={(e) => field.onChange(e.target.value.trim())}
                        endContent={
                          fields.length > 2 && (
                            <Button
                              isIconOnly
                              color="danger"
                              onPress={() => remove(index)}
                              variant="light"
                              size="sm"
                              radius="full"
                              className="w-6 h-6"
                            >
                              <LuX size="16" />
                            </Button>
                          )
                        }
                      />
                    </div>
                  )}
                />
              </div>
            ))}
          </div>
          <p className="text-xs text-default-500 mt-2">Minimum 2 options required</p>
        </div>
      </div>
      <Button type="submit" color="primary" className="mt-8" isLoading={isLoading} isDisabled={isLoading} radius="full">
        {defaultValues ? 'Update Poll' : 'Create Poll'}
      </Button>
    </form>
  );
};

Poll.propTypes = {
  isLoading: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  defaultValues: PropTypes.object,
};

export default Poll;

