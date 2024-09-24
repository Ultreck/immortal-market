import { Button, Checkbox, CheckboxGroup, Popover, PopoverContent, PopoverTrigger, Textarea } from '@nextui-org/react';
import { RiSettingsLine } from 'react-icons/ri';
import { Controller, useForm } from 'react-hook-form';

const SummarizerConfig = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      text: '',
      sections: ['heading', 'body'],
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Popover placement="left" showArrow offset={10}>
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Adjust font size" className="text-base">
          <RiSettingsLine size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="px-8 py-6 shadow border border-default-200 w-[350px] items-stretch">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col space-y-4">
            <Controller
              name="text"
              control={control}
              rules={{
                required: 'Please enter text',
              }}
              render={({ field, fieldState: { error } }) => {
                return (
                  <Textarea
                    classNames={{ inputWrapper: 'px-5 py-5' }}
                    minRows="4"
                    label="Enter text"
                    labelPlacement="outside"
                    bordered
                    ref={field.ref}
                    name={field.name}
                    value={field.value}
                    isDisabled={field.disabled}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    errorMessage={error?.message}
                    isInvalid={!!error?.message}
                  />
                );
              }}
            />
            <Controller
              name="sections"
              control={control}
              rules={{
                validate: (value) => value.length > 0,
              }}
              render={({ field, fieldState: { error } }) => {
                const message = error?.type === 'validate' ? 'Please select at least one section' : error?.message;
                return (
                  <CheckboxGroup
                    label="Select sections"
                    color="warning"
                    orientation="horizontal"
                    value={field.value}
                    onValueChange={(v) => field.onChange({ target: { value: v } })}
                    errorMessage={message}
                    isInvalid={!!message}
                  >
                    <Checkbox value="heading">Heading</Checkbox>
                    <Checkbox value="body">Body</Checkbox>
                  </CheckboxGroup>
                );
              }}
            />
          </div>
          <Button type="submit" variant="solid" radius="full" className="text-base px-4 mt-6">
            Generate
          </Button>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default SummarizerConfig;
