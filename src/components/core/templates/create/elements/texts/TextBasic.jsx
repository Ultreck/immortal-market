import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';
import AutoResizeTextArea from '@/components/ui/AutoResizeTextArea.jsx';
import { cn } from '@/lib/utils.js';
import { Fragment } from 'react';

export const TextBasic = ({ element, onChange, active }) => {
  if (active) {
    return (
      <AutoResizeTextArea
        style={{
          ...(element?.style || {}),
          background: 'transparent',
          filter: `drop-shadow(${element.style.shadow})`,
        }}
        value={element.text}
        onChange={(v) => {
          onChange({ ...element, text: v });
        }}
      />
    );
  }

  return <TextBasicPresent element={element} />;
};

export const TextBasicPreview = ({ element }) => {
  return (
    <div style={{ ...element.style, filter: `drop-shadow(${element.style?.shadow})` }} className="w-full h-max">
      {element.text}
    </div>
  );
};

export const TextBasicPresent = ({ element }) => {
  let n = 0;
  return (
    <div
      style={{ ...element.style, filter: `drop-shadow(${element.style.shadow})` }}
      className={cn('w-full h-max', element.config?.effect || '')}
    >
      {element.config?.effect ? (
        <>
          {element.text.split(' ').map((word, i) => (
            <Fragment key={i}>
              <span className="inline-block">
                {word.split('').map((letter, j) => {
                  n++;
                  return (
                    <span
                      key={j}
                      style={{
                        animationDelay: `${0.05 + n * 0.05}s`,
                        display: 'inline-block',
                        color: 'inherit',
                      }}
                    >
                      {letter === ' ' ? <>&nbsp;</> : letter}
                    </span>
                  );
                })}
              </span>
              {element.text.split(' ').length === i ? '' : <span> </span>}
            </Fragment>
          ))}
        </>
      ) : (
        element.text
      )}
    </div>
  );
};

TextBasic.propTypes = ElementPropTypes;
TextBasicPresent.propTypes = {
  element: PropTypes.object.isRequired,
};
TextBasicPreview.propTypes = {
  element: PropTypes.object.isRequired,
};
