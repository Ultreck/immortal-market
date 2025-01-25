import { Button, Select, SelectItem } from '@heroui/react';
import Title from '../../shared/Title.jsx';
import PropTypes from 'prop-types';
import DndFileInput from '@/components/ui/DndFileInput.jsx';
import { TbChevronLeft, TbChevronRight, TbX } from 'react-icons/tb';
import useProjectStore from '@/store/project.js';
import { useToast } from '@/hooks/use-toast.jsx';

const types = {
  json: { 'application/json': ['.json'] },
  csv: { 'text/csv': ['.csv'] },
  pdf: { 'application/pdf': ['.pdf'] },
  xlsx: { 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx', '.xls'] },
};

const UploadFiles = ({ onNext, onPrev }) => {
  const toast = useToast();
  const updateData = useProjectStore((state) => state.updateData);
  const files = useProjectStore((state) => state.data.files);
  const type = useProjectStore((state) => state.data.type);

  const handleSubmit = async () => {
    if (!files.length) return toast.error('Please upload at least one file');
    onNext();
  };

  return (
    <>
      <div className="flex-1 overflow-y-auto px-12 py-10">
        <Title title="Upload your files" sub="Provide the following information below to continue" className="mb-10" />
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-2">
            <p>Select File type</p>
            <Select
              aria-label="File type"
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
            >
              {[
                { key: 'csv', name: 'CSV' },
                { key: 'json', name: 'JSON' },
                { key: 'xlsx', name: 'XLSX' },
                { key: 'docx', name: 'DOCX' },
                { key: 'pdf', name: 'PDF' },
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
          isDisabled={!type}
          accept={types[type]}
          maxSize={10000000}
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
                >
                  <TbX size="16" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="px-12 py-4 border-t border-default-200 flex items-center space-x-3">
        <Button
          onClick={onPrev}
          radius="full"
          variant="bordered"
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
          isDisabled={!files.length}
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
