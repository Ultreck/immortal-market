import TextMarquee, { TextMarqueePresent } from '@/components/core/templates/create/elements/texts/TextMarquee.jsx';
import TextTypewriter, {
  TextTypewriterPresent,
} from '@/components/core/templates/create/elements/texts/TextTypewriter.jsx';
import { createElement } from 'react';
import { ElementPropTypes } from '@/lib/prop-types.js';
import { TextBasic, TextBasicPresent } from '@/components/core/templates/create/elements/texts/TextBasic.jsx';
import PropTypes from 'prop-types';
import { ListPresent, TextList } from '@/components/core/templates/create/elements/texts/TextList.jsx';
import { CountUpNumber, CountUpNumberPresent } from '@/components/core/templates/create/elements/CountUpNumber.jsx';
import { TextStream, TextStreamPresent } from '@/components/core/templates/create/elements/texts/TextStream.jsx';
import {
  TextBallDrop,
  TextBallDropPresent,
  TextDropVanish,
  TextDropVanishPresent,
  TextFlip,
  TextFlipPresent,
  TextRevolveDrop,
  TextRevolveDropPresent,
  TextSideSlide,
  TextSideSlidePresent,
} from '@/components/core/templates/create/elements/texts/TextFlip.jsx';

export const Text = ({ element, active, onChange }) => {
  const components = {
    list: TextList,
    'count-up-number': CountUpNumber,
    marquee: TextMarquee,
    typewriter: TextTypewriter,
    stream: TextStream,
    flip: TextFlip,
    balldrop: TextBallDrop,
    sideslide: TextSideSlide,
    revolvedrop: TextRevolveDrop,
    dropVanish: TextDropVanish,
  };
  if (components[element.config.name]) {
    return createElement(components[element.config.name], { element, active, onChange });
  }

  return <TextBasic element={element} active={active} onChange={onChange} />;
};

export const TextPresent = ({ element }) => {
  const components = {
    list: ListPresent,
    'count-up-number': CountUpNumberPresent,
    marquee: TextMarqueePresent,
    typewriter: TextTypewriterPresent,
    stream: TextStreamPresent,
    flip: TextFlipPresent,
    balldrop: TextBallDropPresent,
    sideslide: TextSideSlidePresent,
    revolvedrop: TextRevolveDropPresent,
    dropVanish: TextDropVanishPresent,
  };

  if (components[element.config.name]) {
    return createElement(components[element.config.name], { element });
  }

  return <TextBasicPresent element={element} />;
};

Text.propTypes = ElementPropTypes;
TextPresent.propTypes = {
  element: PropTypes.object.isRequired,
};
