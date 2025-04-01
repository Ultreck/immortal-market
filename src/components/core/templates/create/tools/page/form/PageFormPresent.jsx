import { useCreateDesignActivity } from '@/api/design';
import { useCreateFormResponse, useGetForm, useGetFormResponse } from '@/api/design';
import useBusiness from '@/hooks/use-business';
import useDesignStore from '@/store/design';
import {
  Button,
  Input,
  NumberInput,
  Textarea,
  Checkbox,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  Spinner,
  Drawer,
  DrawerContent,
  DrawerBody,
} from '@heroui/react';
import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';
import { TbCircleCheckFilled } from 'react-icons/tb';

const PageFormPresent = ({ page, isOpen, onClose }) => {
  const { id: business } = useBusiness();
  const id = useDesignStore((state) => state.id);
  const { data: { form } = {} } = useGetForm(business, id, page.id);
  const { mutateAsync: create, isPending: isCreateLoading } = useCreateFormResponse(business, id, page.id, form.id);
  const { data: { response } = {}, isLoading: isResponseLoading } = useGetFormResponse(business, id, page.id, form.id);
  const { mutateAsync: createActivity } = useCreateDesignActivity(business, id);
  const { control, handleSubmit } = useForm({
    defaultValues: form.fields.reduce((acc, f) => {
      if (f.type === 'checkbox') {
        acc[f.name] = [];
      } else {
        acc[f.name] = '';
      }
      return acc;
    }, {}),
  });

  const onSubmit = async (values) => {
    try {
      await create({ form: form.id, values });
      await createActivity({ type: 'form', page: page.id });
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Drawer isOpen={isOpen} onClose={onClose} hideCloseButton size="xl">
      <DrawerContent>
        <DrawerBody className="py-10 px-12">
          {isResponseLoading ? (
            <div className="flex flex-col justify-center items-center h-full py-20">
              <Spinner variant="default" />
              <p className="text-default-500 mt-6">Loading form..</p>
            </div>
          ) : (
            <>
              {response ? (
                <div className="mb-6 flex flex-col items-center text-center pt-16 pb-10">
                  <TbCircleCheckFilled size="80" className="text-success-500" />
                  <h2 className="text-xl font-semibold mt-4">Submission received</h2>
                  <p className="text-base mt-2 max-w-sm">
                    Thank you for your submission. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut,
                    placeat.
                  </p>
                  <Button onPress={onClose} color="default" radius="full" className="mt-8 text-base">
                    Close
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-semibold mb-6">{form.title}</h2>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-6">
                      {form.fields.map((f) => {
                        return (
                          <div key={f.id}>
                            {f.type === 'text' && (
                              <Controller
                                control={control}
                                name={f.name}
                                rules={{ required: f.required ? `${f.label} is required` : false }}
                                disabled={isCreateLoading}
                                render={({ field, fieldState: { error } }) => {
                                  return (
                                    <div className="border border-transparent">
                                      <Input
                                        {...field}
                                        isDisabled={field.disabled}
                                        label={f.label}
                                        labelPlacement="outside"
                                        placeholder={' '}
                                        isRequired={f.required}
                                        isInvalid={!!error}
                                        errorMessage={error?.message}
                                        classNames={{ label: 'text-base', input: 'px-1 text-base' }}
                                      />
                                    </div>
                                  );
                                }}
                              />
                            )}
                            {f.type === 'email' && (
                              <Controller
                                control={control}
                                name={f.name}
                                rules={{
                                  required: f.required ? `${f.label} is required` : false,
                                  pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Invalid email address',
                                  },
                                }}
                                disabled={isCreateLoading}
                                render={({ field, fieldState: { error } }) => {
                                  return (
                                    <div className="border border-transparent">
                                      <Input
                                        {...field}
                                        isDisabled={field.disabled}
                                        type="email"
                                        label={f.label}
                                        labelPlacement="outside"
                                        placeholder={' '}
                                        isRequired={f.required}
                                        isInvalid={!!error}
                                        errorMessage={error?.message}
                                        classNames={{ label: 'text-base', input: 'px-1 text-base' }}
                                      />
                                    </div>
                                  );
                                }}
                              />
                            )}
                            {f.type === 'date' && (
                              <Controller
                                control={control}
                                name={f.name}
                                rules={{ required: f.required ? `${f.label} is required` : false }}
                                disabled={isCreateLoading}
                                render={({ field, fieldState: { error } }) => {
                                  return (
                                    <div className="border border-transparent">
                                      <Input
                                        {...field}
                                        isDisabled={field.disabled}
                                        type="date"
                                        label={f.label}
                                        labelPlacement="outside"
                                        placeholder={' '}
                                        isRequired={f.required}
                                        isInvalid={!!error}
                                        errorMessage={error?.message}
                                        classNames={{ label: 'text-base', input: 'px-1 text-base' }}
                                      />
                                    </div>
                                  );
                                }}
                              />
                            )}
                            {f.type === 'number' && (
                              <Controller
                                control={control}
                                name={f.name}
                                rules={{ required: f.required ? `${f.label} is required` : false }}
                                disabled={isCreateLoading}
                                render={({ field, fieldState: { error } }) => {
                                  return (
                                    <div className="border border-transparent">
                                      <NumberInput
                                        {...field}
                                        isDisabled={field.disabled}
                                        label={f.label}
                                        labelPlacement="outside"
                                        placeholder={' '}
                                        value={field.value}
                                        onValueChange={(e) => field.onChange(e)}
                                        aria-label={f.label}
                                        isInvalid={!!error}
                                        errorMessage={error?.message}
                                        classNames={{ label: 'text-base', input: 'px-1 text-base' }}
                                      />
                                    </div>
                                  );
                                }}
                              />
                            )}
                            {f.type === 'tel' && (
                              <Controller
                                control={control}
                                name={f.name}
                                rules={{
                                  required: f.required ? `${f.label} is required` : false,
                                  pattern: {
                                    value: /^[0-9+\-\s()]*$/,
                                    message: 'Invalid phone number',
                                  },
                                }}
                                disabled={isCreateLoading}
                                render={({ field, fieldState: { error } }) => {
                                  return (
                                    <div className="border border-transparent">
                                      <Input
                                        {...field}
                                        isDisabled={field.disabled}
                                        type="tel"
                                        label={f.label}
                                        labelPlacement="outside"
                                        placeholder={' '}
                                        isRequired={f.required}
                                        isInvalid={!!error}
                                        errorMessage={error?.message}
                                        classNames={{ label: 'text-base', input: 'px-1 text-base' }}
                                      />
                                    </div>
                                  );
                                }}
                              />
                            )}
                            {f.type === 'textarea' && (
                              <Controller
                                control={control}
                                name={f.name}
                                rules={{ required: f.required ? `${f.label} is required` : false }}
                                disabled={isCreateLoading}
                                render={({ field, fieldState: { error } }) => {
                                  return (
                                    <div className="border border-transparent">
                                      <Textarea
                                        {...field}
                                        isDisabled={field.disabled}
                                        label={f.label}
                                        labelPlacement="outside"
                                        placeholder={' '}
                                        isRequired={f.required}
                                        isInvalid={!!error}
                                        errorMessage={error?.message}
                                        minRows={3}
                                        classNames={{ label: 'text-base', input: 'px-1 text-base' }}
                                      />
                                    </div>
                                  );
                                }}
                              />
                            )}
                            {f.type === 'time' && (
                              <Controller
                                control={control}
                                name={f.name}
                                rules={{ required: f.required ? `${f.label} is required` : false }}
                                disabled={isCreateLoading}
                                render={({ field, fieldState: { error } }) => {
                                  return (
                                    <div className="border border-transparent">
                                      <Input
                                        {...field}
                                        isDisabled={field.disabled}
                                        type="time"
                                        label={f.label}
                                        labelPlacement="outside"
                                        placeholder={' '}
                                        isRequired={f.required}
                                        isInvalid={!!error}
                                        errorMessage={error?.message}
                                        classNames={{ label: 'text-base', input: 'px-1 text-base' }}
                                      />
                                    </div>
                                  );
                                }}
                              />
                            )}
                            {f.type === 'url' && (
                              <Controller
                                control={control}
                                name={f.name}
                                rules={{
                                  required: f.required ? `${f.label} is required` : false,
                                  pattern: {
                                    value: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
                                    message: 'Invalid URL',
                                  },
                                }}
                                disabled={isCreateLoading}
                                render={({ field, fieldState: { error } }) => {
                                  return (
                                    <div className="border border-transparent">
                                      <Input
                                        {...field}
                                        isDisabled={field.disabled}
                                        type="url"
                                        label={f.label}
                                        labelPlacement="outside"
                                        placeholder={' '}
                                        isRequired={f.required}
                                        isInvalid={!!error}
                                        errorMessage={error?.message}
                                        classNames={{ label: 'text-base', input: 'px-1 text-base' }}
                                      />
                                    </div>
                                  );
                                }}
                              />
                            )}
                            {f.type === 'select' && (
                              <Controller
                                control={control}
                                name={f.name}
                                rules={{ required: f.required ? `${f.label} is required` : false }}
                                disabled={isCreateLoading}
                                render={({ field, fieldState: { error } }) => {
                                  return (
                                    <div className="border border-transparent">
                                      <Select
                                        {...field}
                                        isDisabled={field.disabled}
                                        label={f.label}
                                        labelPlacement="outside"
                                        placeholder="Select an option"
                                        isRequired={f.required}
                                        isInvalid={!!error}
                                        errorMessage={error?.message}
                                        classNames={{ label: 'text-base', value: 'px-1 text-base' }}
                                        selectedKeys={field.value ? [field.value] : []}
                                        onSelectionChange={(keys) => {
                                          const selected = Array.from(keys)[0];
                                          field.onChange(selected);
                                        }}
                                      >
                                        {f.options.map((option) => (
                                          <SelectItem
                                            key={option}
                                            value={option}
                                            classNames={{ title: 'px-1 text-base' }}
                                          >
                                            {option}
                                          </SelectItem>
                                        ))}
                                      </Select>
                                    </div>
                                  );
                                }}
                              />
                            )}
                            {f.type === 'checkbox' && (
                              <Controller
                                control={control}
                                name={f.name}
                                rules={{ required: f.required ? `${f.label} is required` : false }}
                                disabled={isCreateLoading}
                                render={({ field, fieldState: { error } }) => {
                                  return (
                                    <div className="border border-transparent">
                                      <div className="flex flex-col gap-2">
                                        <label className="text-base font-medium">
                                          {f.label}
                                          {f.required && <span className="text-danger">*</span>}
                                        </label>
                                        <div className="flex flex-col gap-2">
                                          {f.options.map((option) => (
                                            <Checkbox
                                              key={option}
                                              value={option}
                                              isDisabled={field.disabled}
                                              isSelected={field.value?.includes(option)}
                                              onValueChange={(isSelected) => {
                                                const currentValues = Array.isArray(field.value)
                                                  ? [...field.value]
                                                  : [];
                                                if (isSelected) {
                                                  field.onChange([...currentValues, option]);
                                                } else {
                                                  field.onChange(currentValues.filter((val) => val !== option));
                                                }
                                              }}
                                            >
                                              {option}
                                            </Checkbox>
                                          ))}
                                        </div>
                                        {error && <p className="text-danger text-xs mt-1">{error.message}</p>}
                                      </div>
                                    </div>
                                  );
                                }}
                              />
                            )}
                            {f.type === 'radio' && (
                              <Controller
                                control={control}
                                name={f.name}
                                rules={{ required: f.required ? `${f.label} is required` : false }}
                                disabled={isCreateLoading}
                                render={({ field, fieldState: { error } }) => {
                                  return (
                                    <div className="border border-transparent">
                                      <div className="flex flex-col gap-2">
                                        <label className="text-base font-medium">
                                          {f.label}
                                          {f.required && <span className="text-danger">*</span>}
                                        </label>
                                        <RadioGroup
                                          value={field.value}
                                          onValueChange={field.onChange}
                                          isDisabled={field.disabled}
                                        >
                                          {f.options.map((option) => (
                                            <Radio key={option} value={option} classNames={{ label: 'text-base' }}>
                                              {option}
                                            </Radio>
                                          ))}
                                        </RadioGroup>
                                        {error && <p className="text-danger text-xs mt-1">{error.message}</p>}
                                      </div>
                                    </div>
                                  );
                                }}
                              />
                            )}
                          </div>
                        );
                      })}
                    </div>
                    <Button type="submit" color="primary" className="mt-6" radius="full" isLoading={isCreateLoading}>
                      Submit
                    </Button>
                  </form>
                </>
              )}
            </>
          )}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

PageFormPresent.propTypes = {
  page: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PageFormPresent;
