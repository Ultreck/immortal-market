import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { cn } from '@/lib/utils.js';

const AutoResizeTextArea = ({ value, onChange, className, ...props }) => {
  const el = useRef(null);

  useEffect(() => {
    const textarea = el.current;
    new ResizeObserver(() => {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }).observe(textarea);
  }, []);

  useEffect(() => {
    const textarea = el.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [value]);

  const handleChange = (event) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <textarea
      ref={el}
      value={value}
      onChange={handleChange}
      rows="1"
      className={cn('resize-none overflow-hidden', className)}
      {...props}
    />
  );
};

AutoResizeTextArea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default AutoResizeTextArea;
