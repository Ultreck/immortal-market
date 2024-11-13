import { useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { cn } from '@/lib/utils.js';
import { useDeepCompareEffect } from 'react-use';

const AutoResizeTextArea = ({ value, onChange, onHeightChange, className, style = {}, ...props }) => {
  const el = useRef(null);
  const containerRef = useRef(null);

  const updateHeight = useCallback(() => {
    if (el.current) {
      el.current.style.height = '0px';
      const lineHeight = parseInt(window.getComputedStyle(el.current).lineHeight, 10);
      const containerHeight = containerRef.current?.clientHeight || 0;
      const contentHeight = el.current.scrollHeight;
      const newHeight = Math.max(contentHeight, containerHeight, lineHeight);

      el.current.style.height = `${newHeight}px`;
      onHeightChange?.(newHeight);
    }
  }, [onHeightChange]);

  useEffect(() => {
    if (el.current) {
      const resizeObserver = new ResizeObserver(() => {
        updateHeight();
      });
      resizeObserver.observe(el.current);
      if (containerRef.current) {
        resizeObserver.observe(containerRef.current);
      }
      return () => resizeObserver.disconnect();
    }
  }, [updateHeight]);

  useEffect(() => {
    if (el.current) updateHeight();
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
    <div ref={containerRef} className="w-full h-full absolute inset-0">
      <textarea
        ref={el}
        value={value}
        onChange={handleChange}
        rows="1"
        className={cn('absolute inset-0', 'w-full h-full', 'resize-none', 'overflow-hidden', 'box-border', className)}
        style={{
          ...style,
          display: 'block',
          minHeight: '100%',
        }}
        {...props}
      />
    </div>
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
