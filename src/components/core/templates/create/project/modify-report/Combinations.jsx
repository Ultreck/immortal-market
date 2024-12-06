import { useState } from 'react';
import { useToast } from '@/hooks/use-toast.jsx';
import useBusiness from '@/hooks/use-business.js';
import useTemplateStore from '@/store/template.js';
import { useGetDesignSource } from '@/api/business.js';
import { camelCaseToWords } from '@/lib/utils.js';
import Title from '@/components/core/shared/Title.jsx';
import { Accordion, AccordionItem, Button, Checkbox } from '@nextui-org/react';
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb';
import PropTypes from 'prop-types';

const Combinations = ({ value, onBack, onDone }) => {
  const toast = useToast();
  const [selection, setSelection] = useState(value || []);
  const { id: business } = useBusiness();
  const id = useTemplateStore((state) => state.template.id);
  const { data: { source = {} } = {} } = useGetDesignSource(business, id);

  const columns = Object.keys(source.combinations || {}).filter((key) => Array.isArray(source.combinations[key])) || [];

  const items = columns.map((column) => {
    return {
      column: camelCaseToWords(column),
      combinations: source.combinations[column],
    };
  });

  const handleSubmit = async () => {
    if (!selection.length) return toast.error('Please select at least one combination');
    onDone(selection);
  };

  return (
    <div className="px-14 py-12">
      <Title
        title="Select the analysis you want to include in your report"
        sub="Pick an option below to get started"
        classNames={{
          base: 'mb-10',
          title: 'text-3xl font-semibold max-w-sm leading-8',
          sub: 'mt-4',
        }}
      />
      <div className="mt-10">
        <div className="mt-6">
          <Accordion variant="bordered" defaultExpandedKeys={[items[0].column]}>
            {items.map((item) => (
              <AccordionItem
                key={item.column}
                aria-label={item.column}
                title={item.column}
                className="py-0"
                classNames={{ heading: 'px-4', title: 'text-base font-medium', content: 'px-4 pb-6' }}
              >
                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                  {item.combinations.map((combination) => {
                    return (
                      <Checkbox
                        key={combination.id}
                        classNames={{ label: 'leading-tight' }}
                        isSelected={selection.includes(combination.id)}
                        onValueChange={(v) => {
                          if (v) setSelection((prev) => [...prev, combination.id]);
                          else setSelection((prev) => prev.filter((s) => s !== combination.id));
                        }}
                      >
                        {combination.text}
                      </Checkbox>
                    );
                  })}
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <div className="flex mt-10 space-x-2">
        <Button onClick={onBack} radius="full" isIconOnly variant="bordered">
          <TbChevronLeft size="20" />
        </Button>
        <Button
          onClick={handleSubmit}
          color="primary"
          radius="full"
          className="text-base px-6"
          endContent={<TbChevronRight size="20" />}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

Combinations.propTypes = {
  value: PropTypes.array.isRequired,
  onBack: PropTypes.func.isRequired,
  onDone: PropTypes.func.isRequired,
};

export default Combinations;
