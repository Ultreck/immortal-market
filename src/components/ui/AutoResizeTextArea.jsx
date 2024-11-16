import { useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { cn } from '@/lib/utils.js';
import { useDeepCompareEffect } from 'react-use';

const AutoResizeTextArea = ({ value, onChange, onHeightChange, className, style = {}, ...props }) => {
  const el = useRef(null);

  const updateHeight = useCallback(() => {
    if (el.current) {
      el.current.style.height = 'auto';
      el.current.style.height = `${el.current.scrollHeight}px`;
      onHeightChange?.(el.current.scrollHeight);
    }
  }, [onHeightChange]);

  useEffect(() => {
    new ResizeObserver(() => updateHeight()).observe(el.current);
  }, [updateHeight]);

  useEffect(() => {
    const textarea = el.current;
    if (textarea) updateHeight();
  }, [updateHeight, value]);

  useDeepCompareEffect(() => {
    updateHeight();
  }, [style]);

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
      className={cn('resize-none overflow-hidden w-full', className)}
      style={style}
      {...props}
    />
  );
};

AutoResizeTextArea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onHeightChange: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default AutoResizeTextArea;
