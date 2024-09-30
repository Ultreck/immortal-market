import {
  Button,
  Checkbox,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Radio,
  RadioGroup,
  Tab,
  Tabs,
  Textarea,
} from '@nextui-org/react';
import { RiSettingsLine } from 'react-icons/ri';
import { Controller, useForm } from 'react-hook-form';
import NumberInput from '@/components/ui/NumberInput.jsx';
import PropTypes from 'prop-types';
import useBusiness from '@/hooks/use-business.js';
import { useSummarize } from '@/api/design.js';
import { useToast } from '@/hooks/use-toast.jsx';

const SummarizerConfig = ({ element, onChange }) => {
  const toast = useToast();
  const { id: business } = useBusiness();
  const { mutateAsync: summarize, isPending: isSummarizing } = useSummarize(business);
  const { handleSubmit, control, watch } = useForm({
    defaultValues: {
      data: element.config.data || '',
      heading: {
        enabled: element.config.heading?.enabled || true,
        type: element.config.heading?.type || 'text',
      },
      body: {
        enabled: element.config.body?.enabled || true,
        type: element.config.body?.type || 'narration',
        words: element.config.body?.words || 20,
      },
    },
  });

  const onSubmit = async (values) => {
    const { data, heading, body } = values;
    onChange({
      ...element,
      config: {
        data,
        heading: { ...element.config.heading, ...heading },
        body: { ...element.config.body, ...body },
      },
    });
    await getOutput(values);
  };

  const getOutput = async (data) => {
    try {
      const res = await summarize(data);
      const { heading, body } = res.data.response;
      onChange({
        ...element,
        config: {
          ...element.config,
          heading: { ...element.config.heading, output: heading },
          body: { ...element.config.body, output: body },
        },
      });
    } catch (e) {
      toast.error(e?.response?.data?.message || e.message);
    }
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
              name="data"
              control={control}
              rules={{
                required: 'Data is required',
              }}
              render={({ field, fieldState: { error } }) => {
                return (
                  <Textarea
                    variant="bordered"
                    classNames={{ inputWrapper: 'px-5 py-5' }}
                    minRows="2"
                    maxRows="4"
                    label="Data to be summarized"
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
            <Tabs
              radius="full"
              classNames={{
                tab: 'text-base px-4',
                panel: 'pt-1 pb-0 px-1',
              }}
              aria-label="Options"
            >
              <Tab key="heading" title="Heading">
                <div className="space-y-3">
                  <Controller
                    name="heading.enabled"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <Checkbox isSelected={value} onValueChange={(v) => onChange(v)} classNames={{ base: 'py-0' }}>
                        Enabled
                      </Checkbox>
                    )}
                  />
                  {watch().heading?.enabled && (
                    <>
                      <div className="flex items-center space-x-4">
                        <p className="text-base leading-tight opacity-60">Type:</p>
                        <Controller
                          name="heading.type"
                          control={control}
                          rules={{
                            validate: (value) => value.length > 0,
                          }}
                          render={({ field, fieldState: { error } }) => {
                            const message = error?.type === 'validate' ? 'Select heading type' : error?.message;
                            return (
                              <RadioGroup
                                orientation="horizontal"
                                value={field.value}
                                onValueChange={(v) => field.onChange({ target: { value: v } })}
                                errorMessage={message}
                                isInvalid={!!message}
                              >
                                <Radio value="number">Number</Radio>
                                <Radio value="text">Text</Radio>
                              </RadioGroup>
                            );
                          }}
                        />
                      </div>
                      <Textarea
                        variant="bordered"
                        classNames={{ inputWrapper: 'px-5 py-5' }}
                        minRows="1"
                        label="Output"
                        isReadOnly
                        bordered
                        defaultValue={element?.config?.heading?.output}
                      />
                    </>
                  )}
                </div>
              </Tab>
              <Tab key="body" title="Body">
                <div className="space-y-3">
                  <Controller
                    name="body.enabled"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <Checkbox isSelected={value} onValueChange={(v) => onChange(v)} classNames={{ base: 'py-0' }}>
                        Enabled
                      </Checkbox>
                    )}
                  />
                  {watch().body?.enabled && (
                    <>
                      <div className="flex items-center space-x-4">
                        <p className="text-base leading-tight opacity-60">Type:</p>
                        <Controller
                          name="body.type"
                          control={control}
                          rules={{
                            validate: (value) => value.length > 0,
                          }}
                          render={({ field, fieldState: { error } }) => {
                            const message = error?.type === 'validate' ? 'Select body type' : error?.message;
                            return (
                              <RadioGroup
                                orientation="horizontal"
                                value={field.value}
                                onValueChange={(v) => field.onChange({ target: { value: v } })}
                                errorMessage={message}
                                isInvalid={!!message}
                              >
                                <Radio value="narration">Narration</Radio>
                                <Radio value="list">Bullet list</Radio>
                              </RadioGroup>
                            );
                          }}
                        />
                      </div>
                      <div className="flex flex-row justify-between items-center space-x-4">
                        <p className="text-base leading-tight">No. of words:</p>
                        <Controller
                          name="body.words"
                          control={control}
                          rules={{
                            required: 'No. of words is required',
                            validate: (value) => value > 0,
                          }}
                          render={({ field, fieldState: { error } }) => {
                            const message = error?.type === 'validate' ? 'No. of words is required' : error?.message;
                            return (
                              <NumberInput
                                variant="bordered"
                                value={field.value}
                                onChange={field.onChange}
                                ariaLabel="No. of words"
                                min={1}
                                max={100}
                                step={1}
                                errorMessage={message}
                                isInvalid={!!message}
                              />
                            );
                          }}
                        />
                      </div>
                      <Textarea
                        variant="bordered"
                        classNames={{ inputWrapper: 'px-5 py-5' }}
                        minRows="1"
                        label="Output"
                        isReadOnly
                        bordered
                        defaultValue={element?.config?.body?.output}
                      />
                    </>
                  )}
                </div>
              </Tab>
            </Tabs>
          </div>
          <Button type="submit" variant="solid" radius="full" className="text-base px-4 mt-6" isLoading={isSummarizing}>
            Generate
          </Button>
        </form>
      </PopoverContent>
    </Popover>
  );
};

SummarizerConfig.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SummarizerConfig;
