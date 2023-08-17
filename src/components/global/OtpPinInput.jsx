import { forwardRef, useImperativeHandle, useRef } from 'react';
import classNames from "classnames";
import PropTypes from "prop-types";

const OtpPinInput = forwardRef(
  ({ disabled, length = 6, onDone }, ref) => {
    const parent = useRef(null);

    useImperativeHandle(ref, () => {
      const handleReset = () => {
        [...parent.current.children].forEach(el => {
          el.value = ''
        });
        setTimeout(() => focusLast(), 500)
      };
      return { reset: handleReset };
    }, []);

    const handleDone = () => {
      const value = [...parent.current.children].reduce((acc, child) => acc + child.value, '');
      onDone(value);
    };

    const focusLast = () => {
      const el = [...parent.current.children].find(child => !child.value);
      if (el) el.focus();
    };

    const handleFocus = (e) => {
      if (!e.target.value) focusLast();
    };

    const handleKeydown = (e) => {
      if (e.target.value) return;
      if (e.code.toLowerCase() === 'backspace') {
        const el = [...parent.current.children].reverse().find(child => child.value);
        if (!el) return;
        el.value = '';
        el.focus();
      }
    };

    const handleInput = (e) => {
      const input = e.target;
      if (input.nextElementSibling && input.value) input.nextElementSibling.focus();
      if (!input.nextElementSibling && input.value) handleDone();
    };

    const handlePaste = (e) => {
      const paste = e.clipboardData.getData('text');
      const inputs = parent.current.querySelectorAll('input');
      inputs.forEach((input, i) => {
        input.value = paste[i] || '';
      });
      setTimeout(() => focusLast(), 10);
      if (paste.length === length) handleDone();
    };

    return (
      <div ref={ parent } className="w-full grid grid-cols-6 gap-2 md:gap-4" onInput={ handleInput }>
        {
          Array(length).fill(null).map((_, i) => (
            <input
              maxLength="1" disabled={ disabled } key={ i }
              onFocus={ handleFocus } onKeyDown={ handleKeydown } onPaste={ handlePaste }
              className={
                classNames(
                  'inline-flex bg-transparent px-2 py-4 sm:px-2 sm:py-5 rounded-3xl border border-zinc-300 focus:ring focus:ring-primary-100 text-xl text-center',
                  { 'opacity-60 pointer-events-none': disabled }
                )
              }
            />
          ))
        }
      </div>
    );
  }
);

OtpPinInput.displayName = 'OtpPinInput'

OtpPinInput.propTypes = {
  disabled: PropTypes.bool,
  length: PropTypes.number,
  onDone: PropTypes.func.isRequired
}

export default OtpPinInput;
