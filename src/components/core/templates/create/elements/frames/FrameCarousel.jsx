import { ElementPropTypes } from '@/lib/prop-types.js';
import FrameContents from '@/components/core/templates/create/elements/frames/FrameContents.jsx';
import BasicCarousel from '@/components/ui/BasicCarousel.jsx';
import { cn } from '@/lib/utils.js';
import { useEffect } from 'react';

const FrameCarousel = ({ element, active, onChange }) => {
  useEffect(() => {
    // TODO: check
    const children = element.children.map((el) => {
      const w = element.width - element.width;
      const h = element.height - element.height;
      return { ...el, width: el.width + w, height: el.height + h };
    });
    onChange({ ...element, children });
  }, [element.width, element.height, element, onChange]);

  return (
    <BasicCarousel
      classNames={{ base: cn('w-full h-full light', { 'overflow-hidden': !active }) }}
      slides={Array(element.config.slides)
        .fill(null)
        .map((s, i) => {
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
