import { ElementPropTypes } from '@/lib/prop-types.js';
import FrameCarousel from '@/components/core/templates/create/elements/frames/FrameCarousel.jsx';
import FrameMarquee from '@/components/core/templates/create/elements/frames/FrameMarquee.jsx';
import FrameTextMarquee from '@/components/core/templates/create/elements/frames/FrameTextMarquee.jsx';
import FrameTabs from '@/components/core/templates/create/elements/frames/FrameTabs.jsx';
import FrameShape from '@/components/core/templates/create/elements/frames/FrameShape.jsx';

const Frame = ({ element, active, highlighted, width, onClick, onChange }) => {
  return (
    <>
      {element.config.name === 'carousel' && (
        <FrameCarousel
          element={element}
          active={active}
          highlighted={highlighted}
          width={width}
          onClick={onClick}
          onChange={onChange}
        />
      )}
      {element.config.name === 'marquee' && (
        <FrameMarquee
          element={element}
          active={active}
          highlighted={highlighted}
          width={width}
          onClick={onClick}
          onChange={onChange}
        />
      )}
      {element.config.name === 'marqueeText' && (
        <FrameTextMarquee
          element={element}
          active={active}
          highlighted={highlighted}
          width={width}
          onClick={onClick}
          onChange={onChange}
        />
      )}
      {element.config.name === 'tabs' && (
        <FrameTabs
          element={element}
          active={active}
          highlighted={highlighted}
          width={width}
          onClick={onClick}
          onChange={onChange}
        />
      )}
      {element.config.name.startsWith('shape') && (
        <FrameShape
          element={element}
          active={active}
          highlighted={highlighted}
          width={width}
          onClick={onClick}
          onChange={onChange}
        />
      )}
    </>
  );
};

Frame.propTypes = ElementPropTypes;

export default Frame;
