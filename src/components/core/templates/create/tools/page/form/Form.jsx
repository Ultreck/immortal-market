import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { Button, Checkbox, Input, Select, SelectItem } from '@heroui/react';
import { RxPlus } from 'react-icons/rx';
import { LuX } from 'react-icons/lu';
import PropTypes from 'prop-types';

const types = {
  single: [
    { value: 'text', label: 'Text' },
    { value: 'number', label: 'Number' },
    { value: 'email', label: 'Email' },
    { value: 'tel', label: 'Phone' },
    { value: 'textarea', label: 'Textarea' },
    { value: 'date', label: 'Date' },
    { value: 'time', label: 'Time' },
    { value: 'url', label: 'URL' },
  ],
  multiple: [
    { value: 'select', label: 'Select' },
    { value: 'checkbox', label: 'Checkbox' },
    { value: 'radio', label: 'Radio' },
  ],
};

const Form = ({ isLoading, onSubmit, defaultValues }) => {
  const { control, handleSubmit, watch, setValue, getValues } = useForm({
    defaultValues: defaultValues || {
      title: '',
      fields: [
        {
          label: '',
          type: '',
          name: '',
          options: [''],
          required: false,
        },
      ],
    },
  });
  const { fields, append, remove } = useFieldArray({ control, name: 'fields' });

  const addField = () => {
    append({ label: '', type: '', name: '', options: [''], required: false });
  };

  const addOption = (fieldIndex) => {
    const currentOptions = watch(`fields.${fieldIndex}.options`) || [];
    const newOptions = ['', ...currentOptions];
    setValue(`fields.${fieldIndex}.options`, newOptions);
  };

  const removeOption = (fieldIndex, optionIndex) => {
    const currentOptions = watch(`fields.${fieldIndex}.options`) || [];
    const newOptions = [...currentOptions];
    newOptions.splice(optionIndex, 1);
    setValue(`fields.${fieldIndex}.options`, newOptions);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-4">
        <Controller
          control={control}
          name="title"
          rules={{
            required: 'Form title is required',
          }}
          disabled={isLoading}
          render={({ field, fieldState: { error } }) => {
            return (
              <div className="border border-transparent">
                <Input
                  {...field}
                  isDisabled={field.disabled}
                  label="Form title"
                  labelPlacement="outside"
                  placeholder="Enter form title"
                  classNames={{ label: 'text-base', input: 'px-1 text-base' }}
                  isInvalid={!!error}
                  errorMessage={error?.message}
                />
              </div>
            );
          }}
        />
        <div>
          <h4 className="text-base mb-2">Fields</h4>
          <div className="border border-default-200 rounded-2xl overflow-hidden divide-y divide-default-200">
            {fields.map((field, index) => (
              <div key={field.id} className="px-6 py-5 space-y-5">
                <div className="flex justify-between items-center">
                  <h5 className="text-sm font-medium opacity-70">Field {index + 1}</h5>
                  {index > 0 && (
                    <Button
                      variant="light"
                      size="sm"
                      radius="full"
                      isIconOnly
                      className="w-6 h-6"
                      onPress={() => remove(index)}
                    >
                      <LuX size="16" />
                    </Button>
                  )}
                </div>
                <div className="space-y-3">
                  <div className="border border-transparent">
                    <Controller
                      control={control}
                      name={`fields.${index}.label`}
                      rules={{
                        required: 'Label is required',
                      }}
                      disabled={isLoading}
                      render={({ field, fieldState: { error } }) => (
                        <Input
                          {...field}
                          isDisabled={field.disabled}
                          label="Label"
                          labelPlacement="outside"
                          aria-label="Label"
                          placeholder="Input label"
                          classNames={{ label: 'leading-none', input: 'px-1 text-base' }}
                          isInvalid={!!error}
                          errorMessage={error?.message}
                        />
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="border border-transparent">
                      <Controller
                        control={control}
                        name={`fields.${index}.type`}
                        rules={{
                          required: 'Field type is required',
                        }}
                        disabled={isLoading}
                        render={({ field, fieldState: { error } }) => (
                          <Select
                            {...field}
                            selectedKeys={field.value ? [field.value] : []}
                            isDisabled={field.disabled}
                            label="Field type"
                            labelPlacement="outside"
                            aria-label="Select field type"
                            placeholder="Select field type"
                            classNames={{ label: 'leading-none', value: 'text-base px-1' }}
                            isInvalid={!!error}
                            errorMessage={error?.message}
                          >
                            {[...types.single, ...types.multiple].map((t) => (
                              <SelectItem key={t.value} value={t.value} classNames={{ title: 'text-base px-1' }}>
                                {t.label}
                              </SelectItem>
                            ))}
                          </Select>
                        )}
                      />
                    </div>
                    <div className="border border-transparent">
                      <Controller
                        control={control}
                        name={`fields.${index}.name`}
                        rules={{
                          required: 'Field name is required',
                          validate: (value) =>
                            /^[a-z_]+$/.test(value) || 'Field name must contain only lowercase letters and underscores',
                        }}
                        disabled={isLoading}
                        render={({ field, fieldState: { error } }) => (
                          <Input
                            {...field}
                            isDisabled={field.disabled}
                            onChange={(e) => {
                              const sanitizedValue = e.target.value.toLowerCase().replace(/[^a-z_]/g, '');
                              field.onChange(sanitizedValue);
                            }}
                            label="Name"
                            labelPlacement="outside"
                            aria-label="Name"
                            placeholder="field_name"
                            isInvalid={!!error}
                            errorMessage={error?.message}
                            classNames={{ label: 'leading-none', input: 'px-1 text-base' }}
                          />
                        )}
                      />
                    </div>
                  </div>
                  {types.multiple.map((t) => t.value).includes(watch(`fields.${index}.type`)) && (
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-base">Options</p>
                        <Button
                          variant="bordered"
                          className="text-md"
                          size="sm"
                          radius="full"
                          startContent={<RxPlus />}
                          onPress={() => addOption(index)}
                        >
                          Add option
                        </Button>
                      </div>
                      <div className="space-y-2">
                        {watch(`fields.${index}.options`)?.map((option, optionIndex) => (
                          <div key={optionIndex} className="border border-transparent">
                            <Controller
                              control={control}
                              name={`fields.${index}.options.${optionIndex}`}
                              rules={{
                                required: 'Option is required',
                                validate: (value) => {
                                  const occurrences = getValues(`fields.${index}.options`).filter(
                                    (opt) => opt === value
                                  ).length;
                                  if (!value || occurrences <= 1) return true;
                                  return 'Options must be unique';
                                },
                              }}
                              disabled={isLoading}
                              render={({ field, fieldState: { error } }) => (
                                <Input
                                  {...field}
                                  isDisabled={field.disabled}
                                  aria-label="Option"
                                  placeholder="Input option"
                                  classNames={{ label: 'leading-none', input: 'px-1 text-base' }}
                                  isInvalid={!!error}
                                  errorMessage={error?.message}
                                  endContent={
                                    watch(`fields.${index}.options`).length > 1 && (
                                      <Button
                                        variant="light"
                                        size="sm"
                                        radius="full"
                                        isIconOnly
                                        className="w-6 h-6"
                                        onPress={() => removeOption(index, optionIndex)}
                                      >
                                        <LuX size="16" />
                                      </Button>
                                    )
                                  }
                                />
                              )}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  <Controller
                    control={control}
                    name={`fields.${index}.required`}
                    disabled={isLoading}
                    render={({ field: { value, onChange, disabled } }) => (
                      <Checkbox
                        isSelected={value}
                        onValueChange={(v) => onChange({ target: { value: v } })}
                        isDisabled={disabled}
                      >
                        Required field
                      </Checkbox>
                    )}
                  />
                </div>
              </div>
            ))}
            <div>
              <Button
                variant="light"
                className="text-base w-full px-4"
                radius="none"
                startContent={<RxPlus />}
                onPress={addField}
              >
                Add field
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Button type="submit" isLoading={isLoading} variant="flat" className="text-base px-4 mt-8" radius="full">
        {defaultValues ? 'Update form' : 'Create form'}
      </Button>
    </form>
  );
};

Form.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  defaultValues: PropTypes.object,
};

export default Form;
