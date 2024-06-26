import { Button, cn, Radio, RadioGroup, Select, SelectItem, Switch } from '@nextui-org/react';
import Title from '../shared/Title';
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb';
import PropTypes from 'prop-types';

const data = [
  {
    header: 'CustomerID',
    sample: 'C-12334900',
    datatype: 'number',
    linked: true,
    _id: 1,
  },
  {
    header: 'Disb Date',
    sample: '22-Nov-2022 (DD-MM-YYYY)',
    datatype: 'date',
    linked: true,
    _id: 2,
  },
  {
    header: 'Disbursment',
    sample: '26.900',
    datatype: 'number',
    linked: true,
    _id: 3,
  },
  {
    header: 'Disbursment',
    sample: '26.900',
    datatype: 'number',
    linked: true,
    _id: 4,
  },
];

const PreviewFiles = ({ onNext, onPrev }) => {
  const handleSubmit = () => {
    onNext();
  };

  return (
    <div>
      <Title title="Preview files" sub="Select headers you want to include in your report" className="mb-10" />
      <RadioGroup orientation="horizontal" className="gap-10" classNames={{ wrapper: 'gap-x-8' }}>
        <Radio color="default" value="file 1">
          File 1
        </Radio>
        <Radio color="default" value="file 2">
          File 2
        </Radio>
        <Radio color="default" value="file 3">
          File 3
        </Radio>
      </RadioGroup>
      <div className="flex flex-col mt-6 space-y-4">
        {data?.map((dt) => (
          <div key={dt._id} className="border border-default-300 dark:border-default-200 rounded-2xl relative">
            <div className="flex items-center justify-between px-6 py-3 border-b border-default-300">
              <h3>{dt.header}</h3>
              <Switch
                defaultSelected
                aria-label="Automatic updates"
                size="sm"
                color="primary"
                classNames={{
                  wrapper: 'p-0 h-4 overflow-visible',
                  thumb: cn(
                    'w-6 h-5 border-2 shadow-lg',
                    'group-data-[hover=true]:border-primary',
                    'group-data-[selected=true]:ml-4',
                    'group-data-[pressed=true]:w-7',
                    'group-data-[selected]:group-data-[pressed]:ml-4'
                  ),
                }}
              />
            </div>
            <div className="flex flex-col space-y-2 px-6 py-4">
              <div className="flex items-center justify-between gap-4">
                <p className="opacity-70">Sample</p>
                <p>{dt.sample}</p>
              </div>
              <div className="flex items-center justify-between gap-4">
                <p className="opacity-70">Data type</p>
                <Select
                  variant="bordered"
                  classNames={{ value: 'px-2 text-base', base: 'w-[200px]' }}
                  value={dt.datatype}
                  selectedKeys={[dt.datatype]}
                >
                  {[
                    { key: 'number', name: 'Number' },
                    { key: 'date', name: 'Date' },
                    { key: 'string', name: 'String' },
                  ].map((type) => (
                    <SelectItem key={type.key} classNames={{ title: 'px-2 text-base text-base' }}>
                      {type.name}
                    </SelectItem>
                  ))}
                </Select>
              </div>
            </div>
          </div>
        ))}
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
    </div>
  );
};

PreviewFiles.propTypes = {
  onNext: PropTypes.func,
  onPrev: PropTypes.func,
};

export default PreviewFiles;
