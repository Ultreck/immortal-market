import Dropzone from "react-dropzone";
import classNames from "classnames";
import { IconCloudUpload } from "@tabler/icons-react";
import { useToast } from "@/hooks/use-toast.jsx";
import PropTypes from "prop-types";

const CircleUploadFileInput = (
  {
    onChange,
    label = 'Drag and drop a file or click to select',
    accept,
    maxSize = 1000000,
    error = 'File not allowed',
  }
) => {
  const toast = useToast();

  return (
    <>
      <Dropzone
        accept={ accept }
        onDrop={ acceptedFiles => {
          if (acceptedFiles.length) onChange(acceptedFiles[0]);
        } }
        onDropRejected={ fileRejections => {
          const exceedsMaxSize = fileRejections.some(f => f.errors.some(j => j.code === 'file-too-large'));
          const invalidType = fileRejections.some(f => f.errors.some(j => j.code === 'file-invalid-type'));
          if (invalidType) return toast.error(`File not allowed`)
          if (exceedsMaxSize) toast.error(`File size exceeds max of ${ maxSize / 1000000 }mb`)
        } }
        maxSize={ maxSize }
      >
        {
          ({ getRootProps, getInputProps, isDragAccept, isDragReject }) => (
            <>
              <div
                { ...getRootProps() }
                className={ classNames(
                  "w-48 h-48 border-2 border-gray-300 border-dashed rounded-full cursor-pointer hover:bg-gray-50 flex items-center justify-center relative before:absolute before:inset-0 before:border-2 before:border-slate-200 before:rounded-full before:animate-ping",
                  { 'border-red-500 text-red-500 before:border-0 before:!animate-none': isDragReject },
                  { 'border-green-500 text-green-500 before:border-0 before:!animate-none': isDragAccept },
                ) }
              >
                <input { ...getInputProps() } />
                <IconCloudUpload size="75" className="opacity-30"/>
              </div>
              {
                isDragReject && (
                  <div
                    className="flex items-center text-center bg-red-100 text-red-600 rounded-2xl w-max mt-4 px-4 py-1"
                  >
                    { error }
                  </div>
                )
              }
            </>
          )
        }
      </Dropzone>
      <p className="mt-10 max-w-[200px] text-center">{ label }</p>
    </>
  );
};

CircleUploadFileInput.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  accept: PropTypes.object,
  error: PropTypes.string,
  maxSize: PropTypes.number
};

export default CircleUploadFileInput;
