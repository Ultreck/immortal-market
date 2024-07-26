import Dropzone from 'react-dropzone';
import { IconCloudUpload } from '@tabler/icons-react';
import { useToast } from '@/hooks/use-toast.jsx';
import PropTypes from 'prop-types';
import { cn } from '@/lib/utils.js';

const DndFileInput = ({
  onChange,
  label = 'Drag and drop one or more files or click to select',
  accept,
  maxSize = 1000000,
  error = 'File not allowed',
  className,
  isDisabled = false,
}) => {
  const toast = useToast();

  return (
    <>
      <Dropzone
        accept={accept}
        onDrop={(acceptedFiles) => {
          if (acceptedFiles.length) onChange(acceptedFiles);
        }}
        onDropRejected={(fileRejections) => {
          const exceedsMaxSize = fileRejections.some((f) => f.errors.some((j) => j.code === 'file-too-large'));
          const invalidType = fileRejections.some((f) => f.errors.some((j) => j.code === 'file-invalid-type'));
          if (invalidType) return toast.error(`One or more files are not of the correct type`);
          if (exceedsMaxSize) {
            return toast.error(`One or more files exceeds the maximum file size of ${maxSize / 1000000}mb`);
          }
        }}
        maxSize={maxSize}
        disabled={isDisabled}
        multiple={true}
      >
        {({ getRootProps, getInputProps, isDragAccept, isDragReject }) => (
          <>
            <div
              {...getRootProps()}
              className={cn(
                'w-full py-6 border-2 border-dashed border-default-300 dark:border-default-200 rounded-2xl cursor-pointer hover:bg-default-100/50 flex flex-col items-center justify-center relative',
                { 'border-red-500 text-red-500 before:border-0 before:!animate-none': isDragReject },
                { 'border-green-500 text-green-500 before:border-0 before:!animate-none': isDragAccept },
                { 'opacity-50 pointer-events-none': isDisabled },
                className
              )}
            >
              <input {...getInputProps()} />
              <IconCloudUpload size="48" className="opacity-30" />
              <p className="mt-4 max-w-[300px] opacity-80 text-center leading-tight">{label}</p>
            </div>
            {isDragReject && (
              <div className="flex items-center text-center bg-red-100 text-red-600 rounded-2xl w-max mt-4 px-4 py-1">
                {error}
              </div>
            )}
          </>
        )}
      </Dropzone>
    </>
  );
};

DndFileInput.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  accept: PropTypes.object,
  error: PropTypes.string,
  maxSize: PropTypes.number,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default DndFileInput;
