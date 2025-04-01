import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';
import AutoResizeTextArea from '@/components/ui/AutoResizeTextArea.jsx';
import { cn } from '@/lib/utils.js';
import { Fragment } from 'react';
import useDesignStore from '@/store/design';
import TextActions from './TextActions';

export const TextBasic = ({ element }) => {
  const updateElement = useDesignStore((state) => state.updateElement);

  return (
    <div>
      <AutoResizeTextArea
        style={{
          ...(element?.style || {}),
          background: 'transparent',
          filter: `drop-shadow(${element.style.shadow})`,
        }}
        value={element.config.content}
        onChange={(v) => {
          updateElement(element.id, { config: { ...element.config, content: v } });
        }}
        onBlur={() => {
          updateElement(element.id, { config: { ...element.config, content: element.config.content } }, true);
        }}
      />
      <TextActions element={element} />
    </div>
  );
};

export const TextBasicPreview = ({ element }) => {
  return (
    <div style={{ ...element.style, filter: `drop-shadow(${element.style?.shadow})` }} className="w-full h-max">
      {element.config.content}
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
          {element.config.content.split(' ').map((word, i) => (
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
              {element.config.content.split(' ').length === i ? '' : <span> </span>}
            </Fragment>
          ))}
        </>
      ) : (
        element.config.content
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
