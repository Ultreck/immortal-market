import { useState } from 'react';
import { useToast } from '@/hooks/use-toast.jsx';
import useBusiness from '@/hooks/use-business.js';
import useTemplateStore from '@/store/template.js';
import { useGetDesignSource } from '@/api/business.js';
import Title from '@/components/core/shared/Title.jsx';
import { Button, Checkbox } from '@nextui-org/react';
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb';
import PropTypes from 'prop-types';

const Summary = ({ value, onBack, onDone }) => {
  const toast = useToast();
  const [selection, setSelection] = useState(value || []);
  const { id: business } = useBusiness();
  const id = useTemplateStore((state) => state.template.id);
  const { data: { source = {} } = {} } = useGetDesignSource(business, id);

  const columns = Object.keys(source.combinations || {}).filter((key) => Array.isArray(source.combinations[key])) || [];

  const combinations = columns.reduce((acc, key) => {
    if (Array.isArray(source.combinations[key])) {
      return [...acc, ...source.combinations[key].filter((c) => c.category === 'number-aggregate')];
    }
    return acc;
  }, []);

  const handleSubmit = async () => {
    if (!selection.length) return toast.error('Please select at least one combination');
    onDone(selection);
  };

  return (
    <div className="px-14 py-12">
      <Title
        title="Let's create a summary section"
        sub="Provide the following information below to continue"
        classNames={{
          base: 'mb-10',
          title: 'text-3xl font-semibold max-w-sm leading-8',
          sub: 'mt-4',
        }}
      />
      <div className="mt-10">
        <p className="mb-2 px-1">What fields do you want to include in the summary?</p>
        <div className="border border-default-200 rounded-2xl px-8 py-6">
          <div className="grid grid-cols-2 gap-x-4 gap-y-3">
            {combinations.map((combination) => {
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

Summary.propTypes = {
  value: PropTypes.array.isRequired,
  onBack: PropTypes.func.isRequired,
  onDone: PropTypes.func.isRequired,
};

export default Summary;
