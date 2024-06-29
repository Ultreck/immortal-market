import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const normalizeHtml = (str) => str && str.replace(/&nbsp;|\u202F|\u00A0/g, ' ').replace(/<br \/>/g, '<br>');

const replaceCaret = (el) => {
  const target = document.createTextNode('');
  el.appendChild(target);
  const isTargetFocused = document.activeElement === el;
  if (target && target.nodeValue && isTargetFocused) {
    const sel = window.getSelection();
    if (sel) {
      const range = document.createRange();
      range.setStart(target, target.nodeValue.length);
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
    }
    el.focus();
  }
};

const ContentEditable = ({
  tagName = 'div',
  html,
  innerRef,
  disabled,
  onChange,
  onBlur,
  onKeyUp,
  onKeyDown,
  ...props
}) => {
  const lastHtml = useRef(html);
  const el = useRef(null);

  const getEl = () => (innerRef && typeof innerRef !== 'function' ? innerRef : el).current;

  useEffect(() => {
    const currentEl = getEl();
    if (currentEl && html !== currentEl.innerHTML) {
      currentEl.innerHTML = html;
    }
    lastHtml.current = html;
    replaceCaret(currentEl);
  });

  const emitChange = (originalEvt) => {
    const currentEl = getEl();
    if (!currentEl) return;

    const newHtml = currentEl.innerHTML;
    if (onChange && newHtml !== lastHtml.current) {
      const evt = { ...originalEvt, target: { value: newHtml } };
      onChange(evt);
    }
    lastHtml.current = newHtml;
  };

  const elementProps = {
    ...props,
    ref:
      typeof innerRef === 'function'
        ? (current) => {
            innerRef(current);
            el.current = current;
          }
        : innerRef || el,
    onInput: emitChange,
    onBlur: onBlur || emitChange,
    onKeyUp: onKeyUp || emitChange,
    onKeyDown: onKeyDown || emitChange,
    contentEditable: !disabled,
    dangerouslySetInnerHTML: { __html: html },
  };

  return React.createElement(tagName, elementProps);
};

ContentEditable.propTypes = {
  html: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  tagName: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  onBlur: PropTypes.func,
  onKeyUp: PropTypes.func,
  onKeyDown: PropTypes.func,
};

export default ContentEditable;
