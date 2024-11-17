import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';
import AutoResizeTextArea from '@/components/ui/AutoResizeTextArea.jsx';

const Content = ({ element, active = false, onChange, className }) => {
  return (
    <>
      {active ? (
        <AutoResizeTextArea
          value={element.config.content}
          onChange={(v) => onChange?.({ ...element, config: { ...element.config, content: v } })}
          style={{
            ...element?.style,
            filter: `drop-shadow(${element?.style?.shadow})`,
            background: 'transparent',
          }}
        />
      ) : (
        <div
          style={{ ...element?.style, filter: `drop-shadow(${element?.style?.shadow})` }}
          className={`w-full h-max ${className}`}
        >
          {element.config.content.split('').map((val, index) => (
            <span
              key={index}
              style={{
                animationDelay: `${0.05 + index * 0.05}s`,
                display: 'inline-block',
                color: 'inherit',
              }}
            >
              {val === ' ' ? <>&nbsp;</> : val}{' '}
            </span>
          ))}
        </div>
      )}
    </>
  );
};

export const TextFlip = ({ element, active, onChange }) => {
  return <Content element={element} active={active} onChange={onChange} className="revolveScale" />;
};

export const TextFlipPresent = ({ element }) => {
  return <Content element={element} className="revolveScale" />;
};

export const TextFlipPreview = () => {
  return <Content element={{ style: {}, config: { content: 'Fliping text' } }} className="revolveScale" />;
};

export const TextBallDrop = ({ element, active, onChange }) => {
  return <Content element={element} active={active} onChange={onChange} className="ballDrop" />;
};

export const TextBallDropPresent = ({ element }) => {
  return <Content element={element} className="ballDrop" />;
};

export const TextBallDropPreview = () => {
  return <Content element={{ style: {}, config: { content: 'Ball drop text' } }} className="ballDrop" />;
};

export const TextSideSlide = ({ element, active, onChange }) => {
  return <Content element={element} active={active} onChange={onChange} className="sideSlide" />;
};

export const TextSideSlidePresent = ({ element }) => {
  return <Content element={element} className="sideSlide" />;
};

export const TextSideSlidePreview = () => {
  return <Content element={{ style: {}, config: { content: 'Side Slide text' } }} className="sideSlide" />;
};

export const TextRevolveDrop = ({ element, active, onChange }) => {
  return <Content element={element} active={active} onChange={onChange} className="revolveDrop" />;
};

export const TextRevolveDropPresent = ({ element }) => {
  return <Content element={element} className="revolveDrop" />;
};

export const TextRevolveDropPreview = () => {
  return <Content element={{ style: {}, config: { content: 'Revolve drop text' } }} className="revolveDrop" />;
};

export const TextDropVanish = ({ element, active, onChange }) => {
  return <Content element={element} active={active} onChange={onChange} className="dropVanish" />;
};

export const TextDropVanishPresent = ({ element }) => {
  return <Content element={element} className="dropVanish" />;
};

export const TextDropVanishPreview = () => {
  return <Content element={{ style: {}, config: { content: 'Drop vanish text' } }} className="dropVanish" />;
};

Content.propTypes = {
  element: PropTypes.object.isRequired,
  active: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

TextFlip.propTypes = ElementPropTypes;
TextFlipPresent.propTypes = {
  element: PropTypes.object.isRequired,
};

TextBallDrop.propTypes = ElementPropTypes;
TextBallDropPresent.propTypes = {
  element: PropTypes.object.isRequired,
};

TextSideSlide.propTypes = ElementPropTypes;
TextSideSlidePresent.propTypes = {
  element: PropTypes.object.isRequired,
};

TextRevolveDrop.propTypes = ElementPropTypes;
TextRevolveDropPresent.propTypes = {
  element: PropTypes.object.isRequired,
};

TextDropVanish.propTypes = ElementPropTypes;
TextDropVanishPresent.propTypes = {
  element: PropTypes.object.isRequired,
};
