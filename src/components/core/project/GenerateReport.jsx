import { Accordion, AccordionItem, Button, Checkbox, Radio, RadioGroup } from '@nextui-org/react';
import Title from '../shared/Title';
import { TbChevronRight } from 'react-icons/tb';
import PropTypes from 'prop-types';

const items = [
  'Disbursement by Month',
  'Paid by Month',
  'Percentage paid to disbursed',
  'Percentage paid since last month',
  'Paid since last month',
  'Disbursement since last month',
  'Percentage disbursed',
];

const GenerateReport = ({ onNext, onPrev }) => {
  const handleSubmit = () => {
    onNext();
  };

  return (
    <>
      <Title
        title="Generate your report"
        sub="Select datapoints below for your report"
        className="mb-10"
        onBack={onPrev}
      />
      <RadioGroup
        orientation="horizontal"
        className="gap-10"
        classNames={{
          wrapper: 'gap-x-10',
        }}
      >
        <Radio color="default" value="file 1">
          Let AI generate
        </Radio>
        <Radio color="default" value="file 2">
          Generate yourself
        </Radio>
      </RadioGroup>
      <div className="mt-6">
        <Accordion variant="bordered" defaultExpandedKeys={['summary']}>
          <AccordionItem
            key="summary"
            aria-label="Summary"
            title="Summary (10/20)"
            className="py-0"
            classNames={{ heading: 'px-4', title: 'text-base font-medium', content: 'px-4 pb-6' }}
          >
            <div className="grid grid-cols-2 gap-3">
              {items.map((item) => (
                <Checkbox key={item}>{item}</Checkbox>
              ))}
            </div>
          </AccordionItem>
          <AccordionItem
            key="disbursement"
            aria-label="Disbursement"
            title="Disbursement (10/20)"
            classNames={{ heading: 'px-4', title: 'text-base font-medium', content: 'px-4 pb-6' }}
          >
            <div className="grid grid-cols-2 gap-3">
              {items.map((item) => (
                <Checkbox key={item}>{item}</Checkbox>
              ))}
            </div>
          </AccordionItem>
          <AccordionItem
            key="repayment"
            aria-label="Repayment"
            title="Repayment (10/20)"
            classNames={{ heading: 'px-4', title: 'text-base font-medium', content: 'px-4 pb-6' }}
          >
            <div className="grid grid-cols-2 gap-3">
              {items.map((item) => (
                <Checkbox key={item}>{item}</Checkbox>
              ))}
            </div>
          </AccordionItem>
          <AccordionItem
            key="disbursement-date"
            aria-label="Disbursement date"
            title="Disbursement date (10/20)"
            classNames={{ heading: 'px-4', title: 'text-base font-medium', content: 'px-4 pb-6' }}
          >
            <div className="grid grid-cols-2 gap-3">
              {items.map((item) => (
                <Checkbox key={item}>{item}</Checkbox>
              ))}
            </div>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="mt-10 space-x-4 flex items-center">
        <Button
          onClick={handleSubmit}
          color="primary"
          radius="full"
          className="text-base px-6"
          endContent={<TbChevronRight size="20" />}
          isDisabled
        >
          Continue
        </Button>
      </div>
    </>
  );
};

GenerateReport.propTypes = {
  onNext: PropTypes.func,
  onPrev: PropTypes.func,
};

export default GenerateReport;
