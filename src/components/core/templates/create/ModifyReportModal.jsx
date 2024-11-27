import Drawer from '@/components/ui/Drawer.jsx';
import useTemplateStore from '@/store/template.js';
import { TbChevronLeft, TbChevronRight, TbCircleCheckFilled, TbForms, TbRobot } from 'react-icons/tb';
import { Accordion, AccordionItem, Button, Card, Checkbox, Chip, Select, SelectItem, Spinner } from '@nextui-org/react';
import { useState } from 'react';
import { camelCaseToWords, cn, delay } from '@/lib/utils.js';
import PropTypes from 'prop-types';
import Title from '@/components/core/shared/Title.jsx';
import { useToast } from '@/hooks/use-toast.jsx';
import { useMount } from 'react-use';
import useBusiness from '@/hooks/use-business.js';
import { useGetDesignSource } from '@/api/business.js';
import NoData from '@/components/ui/NoData.jsx';

const ModifyReportModal = () => {
  const isOpen = useTemplateStore((state) => state.template.isModifyReportOpen);
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const [view, setView] = useState('options');
  const { id: business } = useBusiness();
  const id = useTemplateStore((state) => state.template.id);
  const { data: { source = {} } = {}, isLoading } = useGetDesignSource(business, id);

  const handleClose = () => {
    setView('options');
    updateTemplate({ isModifyReportOpen: false });
  };

  return (
    <Drawer isOpen={isOpen} onClose={handleClose} padding={false}>
      {isLoading ? (
        <div className="px-14 py-12 flex flex-col items-center justify-center h-full">
          <Spinner size="lg" />
          <p className="mt-6">Just a moment</p>
        </div>
      ) : (
        <>
          {source ? (
            <>
              {view === 'options' && (
                <Options onDone={(option) => setView(option === 'manual' ? 'summary' : 'analyze')} />
              )}
              {view === 'summary' && (
                <Summary onBack={() => setView('options')} onDone={() => setView('combinations')} />
              )}
              {view === 'combinations' && (
                <Combinations onBack={() => setView('summary')} onDone={() => setView('analyze')} />
              )}
              {view === 'analyze' && <Analyze onBack={() => setView('combinations')} onDone={handleClose} />}
            </>
          ) : (
            <div className="px-14 py-12">
              <NoData text="No data source configured for this project" />
            </div>
          )}
        </>
      )}
    </Drawer>
  );
};

const Options = ({ onDone }) => {
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    onDone(value);
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
            setValue('manual');
          }}
          shadow="none"
          className={cn(
            'text-left border border-default-900/10 hover:bg-default-900/5 rounded-2xl px-8 py-10 cursor-pointer relative transition-all duration-300',
            { 'border-2 border-green-500': value === 'manual' }
          )}
        >
          <TbForms size="40" />
          <h4 className="text-xl font-semibold mt-4 leading-tight">Configure report manually</h4>
          <p className="mt-2 opacity-80">This is the most flexible option, but requires more technical</p>
          <TbCircleCheckFilled
            size="28"
            className={cn('absolute top-4 right-4 text-green-500 opacity-0 transition-opacity duration-300', {
              'opacity-100': value === 'manual',
            })}
          />
        </Card>
        <Card
          isPressable
          onPress={() => setValue('auto')}
          shadow="none"
          className={cn(
            'text-left border border-default-900/10 hover:bg-default-900/5 rounded-2xl px-8 py-10 cursor-pointer relative transition-all duration-300',
            { 'border-2 border-green-500': value === 'auto' }
          )}
        >
          <TbRobot size="40" />
          <h4 className="text-xl font-semibold mt-4 leading-tight">Generate a quick report</h4>
          <p className="mt-2 opacity-80">Let Immortal AI do the heavy lifting for you, but requires more time</p>
          <TbCircleCheckFilled
            size="28"
            className={cn('absolute top-4 right-4 text-green-500 opacity-0 transition-opacity duration-300', {
              'opacity-100': value === 'auto',
            })}
          />
        </Card>
      </div>
      <Button
        isDisabled={value === ''}
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

const Summary = ({ onBack, onDone }) => {
  const [selection, setSelection] = useState([]);
  const { id: business } = useBusiness();
  const id = useTemplateStore((state) => state.template.id);
  const { data: { source = {} } = {} } = useGetDesignSource(business, id);

  const columns = Object.keys(source.combinations || {}).filter((key) => Array.isArray(source.combinations[key])) || [];

  const combinations = columns.reduce((acc, key) => {
    if (Array.isArray(source.combinations[key])) {
      return [...acc, ...source.combinations[key]];
    }
    return acc;
  }, []);

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
        <p className="mb-2">What fields do you want to include in the summary?</p>
        <Select
          aria-label="Select fields"
          labelPlacement="outside"
          classNames={{
            trigger: 'px-4 py-3 h-auto',
            label: 'text-base',
            popoverContent: 'bg-default-100',
          }}
          size="lg"
          placeholder="Select analysis"
          isMultiline
          variant="bordered"
          scrollShadowProps={{ isEnabled: false }}
          selectionMode="multiple"
          selectedKeys={selection}
          onSelectionChange={(e) => {
            setSelection(Array.from(e));
          }}
          renderValue={(items) => {
            return (
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <Chip
                    key={item.key}
                    className="bg-default-300 text-md w-full whitespace-normal h-auto leading-tight py-1.5 px-2 rounded-2xl"
                  >
                    {item.textValue}
                  </Chip>
                ))}
              </div>
            );
          }}
        >
          {combinations?.map((c, i) => (
            <SelectItem key={`${c.text}-${i}`} classNames={{ title: 'text-base' }}>
              {c.text}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div className="mt-4">
        <Accordion variant="bordered" className="rounded-2xl px-6 py-0">
          <AccordionItem
            key="data"
            aria-label="Filter"
            title="Filter"
            classNames={{ content: 'pb-6', trigger: 'py-3' }}
          >
            <p>Filter here</p>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="flex mt-10 space-x-2">
        <Button onClick={onBack} radius="full" isIconOnly variant="bordered">
          <TbChevronLeft size="20" />
        </Button>
        <Button
          isDisabled={!selection.length}
          onClick={onDone}
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

const Combinations = ({ onBack, onDone }) => {
  const toast = useToast();
  const [selection, setSelection] = useState([]);
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
    onDone();
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
          <Accordion variant="bordered" defaultExpandedKeys={items[0].column}>
            {items.map((item) => (
              <AccordionItem
                key={item.column}
                aria-label={item.column}
                title={item.column}
                className="py-0"
                classNames={{ heading: 'px-4', title: 'text-base font-medium', content: 'px-4 pb-6' }}
              >
                <div className="grid grid-cols-1 gap-3">
                  {item.combinations.map((combination, i) => {
                    const key = `${item.column}/${combination.text}/${i}`;
                    return (
                      <Checkbox
                        key={key}
                        classNames={{ label: 'leading-tight' }}
                        isSelected={selection.includes(key)}
                        onValueChange={(v) => {
                          if (v) setSelection((prev) => [...prev, key]);
                          else setSelection((prev) => prev.filter((s) => s !== key));
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
          isDisabled={!selection.length}
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

const Analyze = ({ onDone }) => {
  const [text, setText] = useState('');

  useMount(async () => {
    setText('Creating summary..');
    await delay(3000);
    setText('Extracting insights from disbursements..');
    await delay(3000);
    setText('Extracting insights from repayments..');
    await delay(3000);
    setText('Almost done..');
    await delay(3000);
    onDone();
  });

  return (
    <div className="px-14 py-12 flex flex-col items-center justify-center h-full">
      <Spinner size="lg" />
      <p className="mt-6">{text}</p>
    </div>
  );
};

Options.propTypes = {
  onDone: PropTypes.func.isRequired,
};
Summary.propTypes = {
  onBack: PropTypes.func.isRequired,
  onDone: PropTypes.func.isRequired,
};
Combinations.propTypes = {
  onBack: PropTypes.func.isRequired,
  onDone: PropTypes.func.isRequired,
};
Analyze.propTypes = {
  onBack: PropTypes.func.isRequired,
  onDone: PropTypes.func.isRequired,
};

export default ModifyReportModal;
