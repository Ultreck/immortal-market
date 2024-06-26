import { Button, Checkbox, Input, Select, SelectItem, Textarea } from '@nextui-org/react';
import Title from '../shared/Title';
import PropTypes from 'prop-types';
import DndFileInput from '@/components/ui/DndFileInput.jsx';
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb';

const SelectFiles = ({ onNext, onPrev }) => {
  const handleSubmit = () => {
    onNext();
  };

  return (
    <>
      <Title title="Upload your files" sub="Provide the following information below to continue" className="mb-10" />
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-2">
          <p>Project name</p>
          <Input placeholder="Enter project name" size="lg" variant="bordered" classNames={{ input: 'px-2' }} />
        </div>
        <div className="grid grid-cols-1 gap-2">
          <p>Description</p>
          <Textarea
            placeholder="Enter description"
            size="lg"
            variant="bordered"
            classNames={{ inputWrapper: 'px-5 py-5' }}
            minRows="1"
          />
        </div>
        <div className="grid grid-cols-1 gap-2">
          <p>Select File type</p>
          <Select variant="bordered" size="lg" classNames={{ value: 'px-2' }} placeholder="Select one">
            {[
              { key: 'CSV', name: 'CSV' },
              { key: 'JSON', name: 'JSON' },
              { key: 'PDF', name: 'PDF' },
              { key: 'XLSX', name: 'XLSX' },
              { key: 'DOCX', name: 'DOCX' },
            ].map((type) => (
              <SelectItem key={type.key} classNames={{ title: 'px-2 text-base' }}>
                {type.name}
              </SelectItem>
            ))}
          </Select>
        </div>
      </div>
      <DndFileInput onChange={() => console.log('change')} className="mt-7" />
      <div className="mt-8 flex space-x-4 items-center">
        <Checkbox>First Row is header</Checkbox>
        <Checkbox>Test for inconsistency</Checkbox>
      </div>
      <div className="mt-10 space-x-4 flex items-center">
        <Button
          onClick={onPrev}
          color="default"
          variant="bordered"
          radius="full"
          className="text-base px-6"
          startContent={<TbChevronLeft size="20" />}
        >
          Back
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
    </>
  );
};

SelectFiles.propTypes = {
  onNext: PropTypes.func,
  onPrev: PropTypes.func,
};

export default SelectFiles;
