import { useState } from 'react';
import Title from '@/components/core/shared/Title.jsx';
import { addToast, Button, Checkbox } from '@heroui/react';
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb';
import PropTypes from 'prop-types';
import useCurrentDesign from '@/hooks/template/use-current-design.js';
import { useUpdateDesignSource } from '@/api/business.js';
import useBusiness from '@/hooks/use-business.js';
import useTemplateStore from '@/store/template.js';

const Summary = ({ onPrev, onNext }) => {
  const { source } = useCurrentDesign();
  const [selection, setSelection] = useState(source?.selection?.summary || []);
  const { id: business } = useBusiness();
  const id = useTemplateStore((state) => state.template.id);
  const { mutateAsync: update, isPending: isUpdateLoading } = useUpdateDesignSource(business, id);

  const handleSubmit = async () => {
    if (!selection.length) return addToast({ title: 'Error', description: 'Please select at least one combination' });
    try {
      await update({ selection: { ...source.selection, summary: selection } });
      onNext();
    } catch (e) {
      addToast({
        title: 'Error',
        description: e?.response?.data?.message ?? e?.message ?? 'Something went wrong, please try again',
        color: 'error',
      });
    }
  };

  const combinations = source.combinations.filter((c) => c.category === 'number-aggregate');

  return (
    <>
      <div className="flex-1 overflow-y-auto px-12 py-10">
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
                    key={combination._id}
                    classNames={{ label: 'leading-tight' }}
                    isSelected={selection.includes(combination._id)}
                    onValueChange={(v) => {
                      if (v) setSelection((prev) => [...prev, combination._id]);
                      else setSelection((prev) => prev.filter((s) => s !== combination._id));
                    }}
                    isDisabled={isUpdateLoading}
                  >
                    {combination.text}
                  </Checkbox>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="px-12 py-4 border-t border-default-200 flex items-center space-x-3">
        <Button
          onPress={onPrev}
          isDisabled={isUpdateLoading}
          radius="full"
          variant="bordered"
          className="text-base px-6"
          startContent={<TbChevronLeft size="20" />}
        >
          Back
        </Button>
        <Button
          onPress={handleSubmit}
          isLoading={isUpdateLoading}
          isDisabled={!selection.length}
          color="primary"
          radius="full"
          className="text-base px-6"
          endContent={<TbChevronRight size="20" />}
        >
          Continue
        </Button>
      </div>
    </>
  );
};

Summary.propTypes = {
  value: PropTypes.array.isRequired,
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default Summary;
