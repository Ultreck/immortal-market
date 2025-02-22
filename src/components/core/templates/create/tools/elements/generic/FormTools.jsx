import { Button, Input, Popover, PopoverContent, PopoverTrigger, Select, SelectItem, Textarea } from '@heroui/react';
import PropTypes from 'prop-types';
import { TbMinus, TbSettings2 } from 'react-icons/tb';
import useTemplateStore from '@/store/template.js';
import { RxCross2 } from 'react-icons/rx';
import { cn, FORMFIELD, FORMFIELDTYPE, options } from '@/lib/utils';
const dataType = {
  shortText: ['text', 'number', 'date', 'phone'],
  paragraph: ['text'],
  checkbox: ['text'],
  radio: ['text'],
  dropdown: ['text'],
};
const hasOption = ['checkbox', 'radio', 'dropdown'];

const PollTools = ({ element, onChange }) => {
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const openTool = useTemplateStore((state) => state.template.openTool);

  return (
    <Popover
      placement="left"
      showArrow
      offset={10}
      isOpen={openTool === 'form'}
      onOpenChange={(v) => updateTemplate({ openTool: v ? 'form' : null })}
    >
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Bullet text config" className="text-base">
          <TbSettings2 size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 relative shadow w-[400px]">
        <div className="px-6 py-6 w-full gap-y-4  h-[500px] overflow-y-scroll">
          <h2 className='text-xl font-bold'>Form</h2>
          {element.fields.map((field, index) => (
            <div key={index} className="py-4 border-b-1 space-y-3">
              <div className="flex space-x-2">
                <Select
                  label="Field Type"
                  size="sm"
                  selectedKeys={[field.type]}
                  onChange={({ target }) => {
                    const fields = [...element.fields];
                    fields[index]['type'] = target.value;
                    if (hasOption.includes(target.value)) {
                      fields[index]['options'] = options.map((val) => ({ ...val, id: crypto.randomUUID() }));
                    }
                    onChange({ ...element, fields });
                  }}
                  labelPlacement="outside"
                  classNames={{ label: 'text-sm', value: 'text-base ' }}
                >
                  {FORMFIELD.map((val) => (
                    <SelectItem
                      key={val.value}
                      value={val.value}
                      textValue={val.text}
                      classNames={{
                        base: 'rounded-xl !m-0',
                      }}
                    >
                      <span className="text-base">{val.text}</span>
                    </SelectItem>
                  ))}
                </Select>
                <Select
                  label="Data Type"
                  labelPlacement="outside"
                  size="sm"
                  selectedKeys={[field.dataType]}
                  classNames={{ label: 'text-sm', value: 'text-base ' }}
                  onChange={(e) => {
                    const fields = [...element.fields];
                    fields[index]['dataType'] = e.target.value;
                    onChange({ ...element, fields });
                  }}
                >
                  {dataType[field.type].map((val) => (
                    <SelectItem
                      key={val}
                      value={val}
                      textValue={val}
                      classNames={{
                        base: 'rounded-xl !m-0',
                      }}
                    >
                      <span className="text-base">{val}</span>
                    </SelectItem>
                  ))}
                </Select>
              </div>
              <div className="flex space-x-2">
                <Input
                  type="text"
                  className="w-full "
                  classNames={cn('')}
                  value={field.text}
                  onChange={(e) => {
                    const options = [...element.fields];
                    options[index]['text'] = e.target.value;
                    onChange({ ...element, options });
                  }}
                />
                <Button
                  isIconOnly
                  variant="flat"
                  onPress={() => {
                    const fields = [...element.fields];
                    fields.splice(index, 1);
                    onChange({ ...element, fields });
                  }}
                  className="text-base"
                >
                  <TbMinus size="20" />
                </Button>
              </div>
              {hasOption.includes(field.type) && (
                <div className=" border gap-2 space-y-3  py-3 px-2 rounded-lg">
                  {field.options.map((option, optionIndex) => (
                    <div key={option.id} className="flex items-center gap-2 ">
                      <Input
                        type="text"
                        className="w-full "
                        classNames={cn('')}
                        value={option.text}
                        onChange={(e) => {
                          const fields = [...element.fields];
                          fields[index]['options'][optionIndex]['text'] = e.target.value;
                          onChange({ ...element, fields });
                        }}
                      />
                      <Button
                        isIconOnly
                        variant="flat"
                        onPress={() => {
                          const fields = [...element.fields];
                          fields[index]['options'].splice(optionIndex, 1);
                          onChange({ ...element, fields });
                        }}
                        className="text-base"
                      >
                        <RxCross2 color="red" size="16" />
                      </Button>
                    </div>
                  ))}
                  <Button
                    color="default"
                    onPress={() => {
                      const fields = [...element.fields];
                      fields[index]['options'].push({
                        text: 'option',
                        id: crypto.randomUUID(),
                      });

                      onChange({ ...element, fields });
                    }}
                    className="text-"
                  >
                    Add option
                  </Button>
                </div>
              )}
            </div>
          ))}
          <Button
            className="w-full mt-2"
            color="default"
            onPress={() => {
              const fields = [
                ...element.fields,
                {
                  type: 'shortText',
                  text: 'Question',
                  dataType:'text',
                  id: crypto.randomUUID(),
                },
              ];

              onChange({ ...element, fields });
            }}
          >
            Add Field
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

PollTools.propTypes = {
  element: PropTypes.shape({
    config: PropTypes.shape({
      type: PropTypes.string.isRequired,
      texts: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  }),
  onChange: PropTypes.func.isRequired,
};

export default PollTools;
