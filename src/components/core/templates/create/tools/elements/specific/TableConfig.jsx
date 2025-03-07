import PropTypes from 'prop-types';
import { Button, Popover, PopoverContent, PopoverTrigger, Tab, Tabs, Textarea } from '@heroui/react';
import { TbSettings2 } from 'react-icons/tb';
import { Controller, useForm } from 'react-hook-form';
import { isValidJsonArray } from '@/lib/utils.js';
import { useState } from 'react';
import useDesignStore from '@/store/design.js';

const TableConfig = ({ element, onChange }) => {
  const [tab, setTab] = useState('data');
  const { handleSubmit, control } = useForm({
    defaultValues: {
      json: JSON.stringify(element.config.data, null, 2),
    },
  });
  const tool = useDesignStore((state) => state.tool);
  const openTool = useDesignStore((state) => state.openTool);
  const closeTool = useDesignStore((state) => state.closeTool);

  const onSubmit = async (values) => {
    const { json } = values;
    const data = JSON.parse(json);
    onChange({ ...element, config: { ...(element?.config || {}), data } });
    closeTool();
  };

  return (
    <Popover
      placement="left"
      showArrow
      offset={10}
      classNames={{ content: 'w-[400px]' }}
      isOpen={tool === 'table'}
      onOpenChange={(v) => (v ? openTool('table') : closeTool())}
    >
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Table config" className="text-base">
          <TbSettings2 size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border border-default-200">
        <div className="px-8 py-6 w-full">
          <Tabs
            variant="bordered"
            aria-label="Options"
            color="primary"
            radius="full"
            classNames={{
              base: 'mb-2',
              tab: 'text-base px-4',
            }}
            selectedKey={tab}
            onSelectionChange={setTab}
          >
            <Tab key="data" title="Data" className="text-base">
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
            </Tab>
          </Tabs>
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
    theme: PropTypes.string,
  }),
  onChange: PropTypes.func.isRequired,
};

export default TableConfig;
