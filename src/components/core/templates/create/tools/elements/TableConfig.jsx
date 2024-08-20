import PropTypes from 'prop-types';
import { Button, Popover, PopoverContent, PopoverTrigger, Textarea, useDisclosure } from '@nextui-org/react';
import { TbSettings2 } from 'react-icons/tb';
import { Controller, useForm } from 'react-hook-form';
import { isValidJsonArray } from '@/lib/utils.js';

const data = [
  ['', 'Heading 1', 'Heading 2', 'Heading 3', 'Heading 4'],
  ['', 'Cell 1', 'Cell 2', 'Cell 3'],
  ['Cell 4', 'Cell 5', 'Cell 6', '', 'Cell 7'],
];

const TableConfig = ({ element, onChange }) => {
  const { isOpen, onOpenChange } = useDisclosure({ defaultOpen: false });
  const { handleSubmit, control } = useForm({
    defaultValues: {
      json: element?.config?.data ? JSON.stringify(element.config.data, null, 2) : JSON.stringify(data, null, 2),
    },
  });

  const onSubmit = async (values) => {
    const { json } = values;
    const data = JSON.parse(json);
    onChange({ ...element, config: { ...(element?.config || {}), data } });
    onOpenChange();
  };

  return (
    <Popover
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="left"
      showArrow
      offset={10}
      classNames={{ content: 'w-[400px]' }}
    >
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Adjust font size" className="text-base">
          <TbSettings2 size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border border-default-200">
        <div className="px-8 py-6 w-full">
          <form onSubmit={handleSubmit(onSubmit)}>
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
          </form>
        </div>
      </PopoverContent>
    </Popover>
  );
};

TableConfig.propTypes = {
  element: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    style: PropTypes.object,
    config: PropTypes.object,
  }),
  onChange: PropTypes.func.isRequired,
};

export default TableConfig;
