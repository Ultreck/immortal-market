import { forwardRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { IconUpload } from '@tabler/icons-react';

const FileInput = forwardRef(({ label, id, bordered = false, error, disabled, value, onChange, ...props }, ref) => {
  const handleChange = (e) => {
    const [file] = e.target.files;
    onChange(file);
  };

  return (
    <div className="flex flex-col">
      {!!label && (
        <label htmlFor={id} className="text-sm mb-2">
          {label}
        </label>
      )}
      <div className="relative flex">
        <label
          className={classNames(
            'cursor-pointer px-4 py-2 rounded-md w-full transition duration-300 pr-12 focus-within:ring-3 ring-primary-600/20',
            { 'opacity-60 pointer-events-none': disabled },
            { 'bg-transparent border border-gray-400': bordered },
            { 'bg-slate-200': !bordered }
          )}
          tabIndex="1"
        >
          <p>{value ? value.name : 'Click to select a file'}</p>
          <input
            type="file"
            onChange={handleChange}
            id={id}
            {...props}
            ref={ref}
            disabled={disabled}
            className="absolute w-[1px] opacity-0"
          />
        </label>
        <div className="absolute top-1/2 -translate-y-1/2 right-2 w-8 h-8 rounded-md flex items-center justify-center pointer-events-none">
          <IconUpload size="20" />
        </div>
      </div>
      {!!error && <div className="text-sm text-red-500 mt-1">{error}</div>}
    </div>
  );
});

FileInput.displayName = 'FileInput';

FileInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.any,
  onChange: PropTypes.func,
  bordered: PropTypes.bool,
};

export default FileInput;
