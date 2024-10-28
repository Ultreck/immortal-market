import { ElementPropTypes } from '@/lib/prop-types.js';
import FrameContents from '@/components/core/templates/create/elements/frames/FrameContents.jsx';
import BasicCarousel from '@/components/ui/BasicCarousel.jsx';
import { cn } from '@/lib/utils.js';

const FrameCarousel = ({ element, active, onChange }) => {
  const slides = Array(element.config.slides).fill(null);

  return (
    <BasicCarousel
      classNames={{ base: cn('w-full h-full light', { 'overflow-hidden': !active }) }}
      slides={slides.map((s, i) => {
        return {
          id: i,
          content: (
            <FrameContents
              key={i}
              id={`frame/${i}/${element.id}`}
              element={element}
              onChange={onChange}
              active={active}
              overlay={<div className="absolute inset-0 z-[9] pointer-events-none bg-white/50" />}
            />
          ),
        };
      })}
    />
  );
};

FrameCarousel.propTypes = ElementPropTypes;

export default FrameCarousel;
