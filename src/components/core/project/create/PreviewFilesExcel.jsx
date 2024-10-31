import PropTypes from 'prop-types';
import Title from '@/components/core/shared/Title.jsx';
import { Button, cn, Radio, RadioGroup, Select, SelectItem, Switch } from '@nextui-org/react';
import { useState } from 'react';
import useCreateProjectStore from '@/store/create-project.js';
import { useMount } from 'react-use';
import { TbChevronRight } from 'react-icons/tb';

const PreviewFilesExcel = ({ onNext, onPrev }) => {
  const [current, setCurrent] = useState(0);
  const [sheet, setSheet] = useState(0);
  const extracted = useCreateProjectStore((state) => state.data.extracted);
  const review = useCreateProjectStore((state) => state.data.review);
  const updateData = useCreateProjectStore((state) => state.updateData);

  const file = extracted[current];

  useMount(() => {
    if (!Object.keys(review.types).length || !Object.keys(review.headers).length) {
      const types = extracted.reduce((acc, _file, i) => {
        acc[i] = _file.extraction.reduce((acc, _sheet, i) => {
          acc[i] = _sheet.types;
          return acc;
        }, {});
        return acc;
      }, {});
      const headers = extracted.reduce((acc, file, i) => {
        acc[i] = file.extraction.reduce((acc, _sheet, i) => {
          acc[i] = _sheet.headers.reduce((acc, header) => {
            acc[header] = true;
            return acc;
          }, {});
          return acc;
        }, {});
        return acc;
      }, {});
      updateData({ review: { types, headers } });
    }
  });

  return (
    <div>
      <Title
        title="Review Columns"
        sub="Select headers you want to include in your report"
        className="mb-10"
        onBack={onPrev}
      />
      <div className="space-y-2">
        <RadioGroup
          orientation="horizontal"
          className="gap-10"
          classNames={{ wrapper: 'gap-x-8 border border-default-200 px-5 py-3 rounded-2xl' }}
          value={current}
          onValueChange={(v) => setCurrent(v)}
        >
          {extracted.map((file, i) => (
            <Radio key={i} value={i} title={file.name}>
              File {i + 1}
            </Radio>
          ))}
        </RadioGroup>
        <RadioGroup
          orientation="horizontal"
          className="gap-10"
          classNames={{ wrapper: 'gap-x-8 border border-default-200 px-5 py-3 rounded-2xl' }}
          value={sheet}
          onValueChange={(v) => setSheet(v)}
        >
          {file.extraction.map((file, i) => (
            <Radio key={i} value={i} title={`Sheet ${i + 1}`}>
              Sheet {i + 1}
            </Radio>
          ))}
        </RadioGroup>
      </div>
      {!!review.types[current] && !!review.headers[current] && (
        <div className="flex flex-col mt-6 space-y-4">
          {file?.extraction?.[sheet]?.headers?.map((header, i) => (
            <div
              key={`${file.name}-${header}-${i}`}
              className="border border-default-300 dark:border-default-200 rounded-2xl relative"
            >
              <div className="flex items-center justify-between px-6 py-2 border-b border-default-300">
                <h3>{header}</h3>
                <Switch
                  defaultSelected
                  size="sm"
                  color="primary"
                  isSelected={review.headers[current][sheet][header]}
                  onValueChange={(v) => {
                    updateData({
                      review: {
                        ...review,
                        headers: {
                          ...review.headers,
                          [current]: {
                            ...review.headers[current],
                            [sheet]: { ...review.headers[current][sheet], [header]: v },
                          },
                        },
                      },
                    });
                  }}
                  classNames={{
                    wrapper: 'p-0 h-4 overflow-visible',
                    thumb: cn(
                      'w-6 h-5 border-2 shadow-lg',
                      'group-data-[hover=true]:border-primary',
                      'group-data-[current=true]:ml-4',
                      'group-data-[pressed=true]:w-7',
                      'group-data-[current]:group-data-[pressed]:ml-4'
                    ),
                  }}
                />
              </div>
              <div className="flex flex-col space-y-2 px-6 py-3">
                <div className="flex items-center justify-between gap-4">
                  <p className="opacity-70">Sample</p>
                  <p className="text-right line-clamp-2 leading-tight max-w-[400px]">
                    {file.extraction[sheet].data[0][header]}
                  </p>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <p className="opacity-70">Data type</p>
                  <Select
                    variant="bordered"
                    classNames={{ value: 'px-2 text-base', base: 'w-[140px]' }}
                    selectedKeys={[review.types[current][sheet][header]]}
                    disallowEmptySelection
                    onChange={(e) => {
                      updateData({
                        review: {
                          ...review,
                          types: {
                            ...review.types,
                            [current]: {
                              ...review.types[current],
                              [sheet]: { ...review.types[current][sheet], [header]: e.target.value },
                            },
                          },
                        },
                      });
                    }}
                  >
                    {[
                      { key: 'number', name: 'Number' },
                      { key: 'date', name: 'Date' },
                      { key: 'text', name: 'Text' },
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
      )}
      <div className="mt-10 space-x-4 flex items-center">
        <Button
          onClick={onNext}
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

PreviewFilesExcel.propTypes = {
  onNext: PropTypes.func,
  onPrev: PropTypes.func,
};

export default PreviewFilesExcel;
