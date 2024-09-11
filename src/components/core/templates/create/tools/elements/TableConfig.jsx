import PropTypes from 'prop-types';
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
  useDisclosure,
  Tab,
  Tabs,
  Image,
} from '@nextui-org/react';
import { TbSettings2 } from 'react-icons/tb';
import { Controller, useForm } from 'react-hook-form';
// import { isValidJsonArray } from '@/lib/utils.js';
import { useState } from 'react';
import { HiCheck } from 'react-icons/hi2';
import { AnimatePresence, motion } from 'framer-motion';
import { TableThemes } from '@/lib/utils';
// const data = [
//   ['', 'Heading 1', 'Heading 2', 'Heading 3', 'Heading 4'],
//   ['', 'Cell 1', 'Cell 2', 'Cell 3'],
//   ['Cell 4', 'Cell 5', 'Cell 6', '', 'Cell 7'],
// ];

const defaultData = {
  table: [
    ['', 'Heading 1', 'Heading 2', 'Heading 3', 'Heading 4'],
    ['', 'Cell 1', 'Cell 2', 'Cell 3'],
    ['Cell 4', 'Cell 5', 'Cell 6', '', 'Cell 7'],
  ],
  table2: [
    'headinggg',
    ['', 'Heading 1', 'Heading 2', 'Heading 3', 'Heading 4'],
    ['', 'Cell 1', 'Cell 2', 'Cell 3'],
    ['Cell 4', 'Cell 5', 'Cell 6', '', 'Cell 7'],
  ],
  table3: {
    heading: ['', 'Heading 1', 'Heading 2', 'Heading 3', 'Heading 4'],
    sideheading: ['Side 1', 'Side 2', 'Side 3', 'Side 4'],
    rows: [
      [
        ['Cell 1', 'Cell 2', 'Cell 3'],
        ['Cell 4', 'Cell 5', 'Cell 6'],
        ['Cell 7', 'Cell 8', 'Cell 9'],
        ['Cell 10', 'Cell 11', 'Cell 12'],
      ],
      [
        ['Cell 1', 'Cell 2', 'Cell 3'],
        ['Cell 4', 'Cell 5', 'Cell 6'],
        ['Cell 7', 'Cell 8', 'Cell 9'],
        ['Cell 10', 'Cell 11', 'Cell 12'],
      ],
      [
        ['Cell 1', 'Cell 2', 'Cell 3'],
        ['Cell 4', 'Cell 5', 'Cell 6'],
        ['Cell 7', 'Cell 8', 'Cell 9'],
        ['Cell 10', 'Cell 11', 'Cell 12'],
      ],
    ],
  },
  table4: {
    heading: ['Heading 1', 'Heading 2', 'Heading 3'],
    subheading: ['Side 1', 'Side 2', 'Side 3', 'Side 4', 'Side 5', 'Side 6', 'Side 7'],
    rows: [
      ['Cell 1', 'Cell 2', 'Cell 3', 'Cell 4', 'Cell 5', 'Cell 6', 'Cell 7'],
      ['Cell 1', 'Cell 2', 'Cell 3', 'Cell 4', 'Cell 5', 'Cell 6', 'Cell 7'],
      ['Cell 1', 'Cell 2', 'Cell 3', 'Cell 4', 'Cell 5', 'Cell 6', 'Cell 7'],
      ['Cell 1', 'Cell 2', 'Cell 3', 'Cell 4', 'Cell 5', 'Cell 6', 'Cell 7'],
    ],
  },
};

const TableConfig = ({ element, onChange }) => {
  const data = defaultData[element.type];
  const [tab, setTab] = useState('data');
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
  const values = element.theme;
  const value = values ? values : '';
  const handleChange = (v) => {
    if (!v) return;
    onChange({ ...element, theme: v });
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
                      // validate: (value) => isValidJsonArray(value),
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
            {/* <Tab key="theme" title="Theme" className="text-base">
              <div className="grid grid-cols-2 gap-y-3 gap-x-3 ">
                {Object.keys(TableThemes).map((key, index) => (
                  <div
                    key={index}
                    className="w-full border rounded-sm flex items-center justify-center border-white  hover:scale-105 transition-transform cursor-pointer relative"
                    onClick={() => handleChange(TableThemes[key].id)}
                  >
                    <Image
                      src={`/images/theme-${TableThemes[key].id}.png`}
                      alt="Image"
                      className="w-full rounded-none"
                    />
                    <AnimatePresence mode="wait">
                      {value === TableThemes[key].id && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="z-50 absolute inset-0 rounded-full bg-white/50 dark:bg-black/50 flex items-center justify-center"
                        >
                          <HiCheck size={16} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </Tab> */}
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

