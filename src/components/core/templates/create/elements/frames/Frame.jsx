import { ElementPropTypes } from '@/lib/prop-types.js';
import FrameCarousel from '@/components/core/templates/create/elements/frames/FrameCarousel.jsx';
import FrameTabs from '@/components/core/templates/create/elements/frames/FrameTabs.jsx';
import FrameShape from '@/components/core/templates/create/elements/frames/FrameShape.jsx';

const Frame = ({ element, active, onChange }) => {
  return (
    <>
      {element.config.name === 'carousel' && <FrameCarousel element={element} active={active} onChange={onChange} />}
      {element.config.name === 'tabs' && <FrameTabs element={element} active={active} onChange={onChange} />}
      {element.config.name.startsWith('shape') && <FrameShape element={element} active={active} onChange={onChange} />}
    </>
  );
};

Frame.propTypes = ElementPropTypes;

export default Frame;
