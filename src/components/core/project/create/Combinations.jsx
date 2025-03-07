import { useState } from 'react';
import Title from '@/components/core/shared/Title.jsx';
import { Accordion, AccordionItem, Button, Checkbox, addToast } from '@heroui/react';
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb';
import PropTypes from 'prop-types';
import useCurrentDesign from '@/hooks/template/use-current-design.js';
import useBusiness from '@/hooks/use-business.js';
import { useUpdateDesignSource } from '@/api/business.js';
import useDesignStore from '@/store/design';

const Combinations = ({ onNext, onPrev }) => {
  const { source } = useCurrentDesign();
  const [selection, setSelection] = useState(source?.selection?.combinations || []);
  const { id: business } = useBusiness();
  const id = useDesignStore((state) => state.design.id);
  const { mutateAsync: update, isPending: isUpdateLoading } = useUpdateDesignSource(business, id);

  const handleSubmit = async () => {
    if (!selection.length) {
      addToast({
        title: 'Error',
        description: 'Please select at least one combination',
        color: 'danger',
      });
      return;
    }
    try {
      await update({ selection: { ...source.selection, combinations: selection } });
      onNext();
    } catch (e) {
      addToast({
        title: 'Error',
        description: e?.response?.data?.message || e.message,
        color: 'danger',
      });
    }
  };

  const columns = Array.from(new Set(source.combinations.map((c) => [...c.columns]).flat()));

  return (
    <>
      <div className="flex-1 overflow-y-auto px-12 py-10">
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
            <Accordion variant="bordered" defaultExpandedKeys={[columns[0]]}>
              {columns.map((column) => {
                const combinations = source.combinations.filter((c) => c.columns[0] === column);
                return (
                  <AccordionItem
                    key={column}
                    aria-label={column}
                    title={column}
                    className="py-0"
                    classNames={{ heading: 'px-4', title: 'text-base font-medium', content: 'px-4 pb-6' }}
                  >
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
                          >
                            {combination.text}
                          </Checkbox>
                        );
                      })}
                    </div>
                  </AccordionItem>
                );
              })}
            </Accordion>
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

Combinations.propTypes = {
  value: PropTypes.array.isRequired,
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default Combinations;
