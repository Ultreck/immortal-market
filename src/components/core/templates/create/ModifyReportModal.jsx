import Drawer from '@/components/ui/Drawer.jsx';
import useTemplateStore from '@/store/template.js';
import { TbChevronLeft, TbChevronRight, TbCircleCheckFilled, TbForms, TbRobot } from 'react-icons/tb';
import { Accordion, AccordionItem, Button, Card, Checkbox, Spinner } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { camelCaseToWords, cn } from '@/lib/utils.js';
import PropTypes from 'prop-types';
import Title from '@/components/core/shared/Title.jsx';
import { useToast } from '@/hooks/use-toast.jsx';
import useBusiness from '@/hooks/use-business.js';
import { useGetDesignSource, useUpdateDesignSource } from '@/api/business.js';
import NoData from '@/components/ui/NoData.jsx';

const ModifyReportModal = () => {
  const toast = useToast();
  const isOpen = useTemplateStore((state) => state.template.isModifyReportOpen);
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const [view, setView] = useState('options');
  const { id: business } = useBusiness();
  const id = useTemplateStore((state) => state.template.id);
  const { data: { source = {} } = {}, isLoading } = useGetDesignSource(business, id);
  const [data, setData] = useState({ type: '', summary: [], combinations: [] });
  const { mutateAsync: update, isPending: isUpdateLoading } = useUpdateDesignSource(business, id);

  useEffect(() => {
    if (!isLoading) {
      if (!source?.selection) {
        updateTemplate({ isModifyReportOpen: true });
      } else {
        setView('combinations');
        setData(source?.selection);
      }
    }
  }, [isLoading, source?.selection, updateTemplate]);

  const handleClose = () => {
    if (source?.selection) setView('combinations');
    else setView('options');
    updateTemplate({ isModifyReportOpen: false });
  };

  const handleSubmit = async (payload) => {
    await handleSaveSelection(payload);
  };

  const handleSaveSelection = async (payload) => {
    try {
      await update({ selection: payload });
      handleClose();
    } catch (e) {
      toast.error(e?.response?.data?.message || e.message);
    }
  };

  return (
    <Drawer isOpen={isOpen} onClose={handleClose} padding={false} width={700}>
      {isLoading ? (
        <div className="px-14 py-12 flex flex-col items-center justify-center h-full">
          <Spinner size="lg" />
          <p className="mt-6">Just a moment</p>
        </div>
      ) : (
        <>
          {isUpdateLoading ? (
            <div className="px-14 py-12 flex flex-col items-center justify-center h-full">
              <Spinner size="lg" />
              <p className="mt-6">Processing..</p>
            </div>
          ) : (
            <>
              {source ? (
                <>
                  {view === 'options' && (
                    <Options
                      value={data.type}
                      onDone={(type) => {
                        setData((v) => ({ ...v, type }));
                        setView('summary');
                      }}
                    />
                  )}
                  {view === 'summary' && (
                    <Summary
                      value={data.summary}
                      onBack={() => setView('options')}
                      onDone={(summary) => {
                        setData((v) => ({ ...v, summary }));
                        setView('combinations');
                      }}
                    />
                  )}
                  {view === 'combinations' && (
                    <Combinations
                      value={data.combinations}
                      onBack={() => setView('summary')}
                      onDone={(combinations) => {
                        setData((v) => ({ ...v, combinations }));
                        handleSubmit({ ...data, combinations });
                      }}
                    />
                  )}
                </>
              ) : (
                <div className="px-14 py-12">
                  <NoData text="No data source configured for this project" />
                </div>
              )}
            </>
          )}
        </>
      )}
    </Drawer>
  );
};

const Options = ({ value, onDone }) => {
  const [type, setType] = useState(value);

  const handleSubmit = () => {
    onDone(type);
  };

  return (
    <div className="px-14 py-12">
      <Title
        title="Hi there, I'm here to assist you with your report"
        sub="Pick an option below to get started"
        classNames={{
          base: 'mb-10',
          title: 'text-3xl font-semibold max-w-sm leading-8',
          sub: 'mt-4',
        }}
      />
      <div className="mt-10 grid grid-cols-2 gap-6">
        <Card
          isPressable
          onPress={() => {
            setType('manual');
          }}
          shadow="none"
          className={cn(
            'text-left border border-default-900/10 hover:bg-default-900/5 rounded-2xl px-8 py-10 cursor-pointer relative transition-all duration-300',
            { 'border-2 border-green-500': type === 'manual' }
          )}
        >
          <TbForms size="40" />
          <h4 className="text-xl font-semibold mt-4 leading-tight">Configure report manually</h4>
          <p className="mt-2 opacity-80">This is the most flexible option, but requires more technical</p>
          <TbCircleCheckFilled
            size="28"
            className={cn('absolute top-4 right-4 text-green-500 opacity-0 transition-opacity duration-300', {
              'opacity-100': type === 'manual',
            })}
          />
        </Card>
        <Card
          isPressable
          onPress={() => setType('auto')}
          shadow="none"
          isDisabled
          className={cn(
            'text-left border border-default-900/10 hover:bg-default-900/5 rounded-2xl px-8 py-10 cursor-pointer relative transition-all duration-300 disabled',
            { 'border-2 border-green-500': type === 'auto' }
          )}
        >
          <TbRobot size="40" />
          <h4 className="text-xl font-semibold mt-4 leading-tight">Generate a quick report</h4>
          <p className="mt-2 opacity-80">Let Immortal AI do the heavy lifting for you, but requires more time</p>
          <TbCircleCheckFilled
            size="28"
            className={cn('absolute top-4 right-4 text-green-500 opacity-0 transition-opacity duration-300', {
              'opacity-100': type === 'auto',
            })}
          />
        </Card>
      </div>
      <Button
        isDisabled={type === ''}
        onClick={handleSubmit}
        color="primary"
        radius="full"
        className="mt-10 text-base px-6"
        endContent={<TbChevronRight size="20" />}
      >
        Continue
      </Button>
    </div>
  );
};

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

Options.propTypes = {
  value: PropTypes.string.isRequired,
  onDone: PropTypes.func.isRequired,
};
Summary.propTypes = {
  value: PropTypes.array.isRequired,
  onBack: PropTypes.func.isRequired,
  onDone: PropTypes.func.isRequired,
};
Combinations.propTypes = {
  value: PropTypes.array.isRequired,
  onBack: PropTypes.func.isRequired,
  onDone: PropTypes.func.isRequired,
};

export default ModifyReportModal;
