import { Button, Select, SelectItem } from '@nextui-org/react';
import Title from '../../shared/Title.jsx';
import PropTypes from 'prop-types';
import DndFileInput from '@/components/ui/DndFileInput.jsx';
import { TbChevronLeft, TbChevronRight, TbX } from 'react-icons/tb';
import useCreateProjectStore from '@/store/create-project.js';
import { useToast } from '@/hooks/use-toast.jsx';
import { useExtractFiles } from '@/api/project.js';
import useBusiness from '@/hooks/use-business.js';

const types = {
  json: { 'application/json': ['.json'] },
  csv: { 'text/csv': ['.csv'] },
  pdf: { 'application/pdf': ['.pdf'] },
  xlsx: { 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx', '.xls'] },
};

const UploadFiles = ({ onNext, onPrev }) => {
  const toast = useToast();
  const { id } = useBusiness();
  const { mutateAsync: extract, isPending: isExtractLoading } = useExtractFiles(id);
  const updateData = useCreateProjectStore((state) => state.updateData);
  const files = useCreateProjectStore((state) => state.data.files);
  const type = useCreateProjectStore((state) => state.data.type);

  const handleSubmit = async () => {
    if (!files.length) return toast.error('Please upload at least one file');
    try {
      const res = await extract(files);
      updateData({ extracted: res.data.files, review: { types: {}, headers: {} } });
      onNext();
    } catch (e) {
      toast.error(e?.response?.data?.message || e.message);
    }
  };

  return (
    <>
      <Title title="Upload your files" sub="Provide the following information below to continue" className="mb-10" />
      <div className="space-y-6">
        {/*<div className="grid grid-cols-1 gap-2">*/}
        {/*  <p>Project name</p>*/}
        {/*  <Input placeholder="Enter project name" size="lg" variant="bordered" classNames={{ input: 'px-2' }} />*/}
        {/*</div>*/}
        {/*<div className="grid grid-cols-1 gap-2">*/}
        {/*  <p>Description</p>*/}
        {/*  <Textarea*/}
        {/*    placeholder="Enter description"*/}
        {/*    size="lg"*/}
        {/*    variant="bordered"*/}
        {/*    classNames={{ inputWrapper: 'px-5 py-5' }}*/}
        {/*    minRows="1"*/}
        {/*  />*/}
        {/*</div>*/}
        <div className="grid grid-cols-1 gap-2">
          <p>Select File type</p>
          <Select
            variant="bordered"
            size="lg"
            classNames={{ value: 'px-2' }}
            placeholder="Select one"
            selectedKeys={type ? [type] : []}
            onChange={(e) => {
              updateData({ files: [] });
              return updateData({ type: e.target.value });
            }}
            disallowEmptySelection
            isDisabled={isExtractLoading}
          >
            {[
              { key: 'csv', name: 'CSV' },
              { key: 'json', name: 'JSON' },
              { key: 'xlsx', name: 'XLSX' },
            ].map((type) => (
              <SelectItem key={type.key} classNames={{ title: 'px-2 text-base' }}>
                {type.name}
              </SelectItem>
            ))}
          </Select>
        </div>
      </div>
      <DndFileInput
        onChange={(e) => {
          if (e.length === 0) return;
          if (e.some((file) => files.some((f) => f.name === file.name))) return;
          updateData({ files: [...files, ...e] });
        }}
        className="mt-7"
        isDisabled={!type || isExtractLoading}
        accept={types[type]}
      />
      <p className="opacity-70 text-md mt-6">
        Ensure the first row of your file is a header row. This will be used to map your data to the correct fields.
        Empty headers will be ignored.
      </p>
      {!!files.length && (
        <div className="flex items-center flex-wrap gap-x-4 gap-y-4 mt-6">
          {files.map((file) => (
            <div key={file.name} className="flex items-center bg-default-100 rounded-xl pl-4 pr-2 py-1">
              <p>{file.name}</p>
              <Button
                color="danger"
                variant="light"
                size="sm"
                radius="full"
                className="ml-4"
                isIconOnly
                onClick={() => updateData({ files: files.filter((f) => f.name !== file.name) })}
                isDisabled={isExtractLoading}
              >
                <TbX size="16" />
              </Button>
            </div>
          ))}
        </div>
      )}
      <div className="mt-10 space-x-4 flex items-center">
        <Button
          onClick={onPrev}
          color="default"
          variant="bordered"
          radius="full"
          className="text-base px-6"
          startContent={<TbChevronLeft size="20" />}
          isDisabled={isExtractLoading}
        >
          Back
        </Button>
        <Button
          onClick={handleSubmit}
          color="primary"
          radius="full"
          className="text-base px-6"
          endContent={<TbChevronRight size="20" />}
          isDisabled={!files.length}
          isLoading={isExtractLoading}
        >
          Continue
        </Button>
      </div>
    </>
  );
};

UploadFiles.propTypes = {
  onNext: PropTypes.func,
  onPrev: PropTypes.func,
};

export default UploadFiles;
