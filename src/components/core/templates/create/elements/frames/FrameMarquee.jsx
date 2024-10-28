import { ElementPropTypes } from '@/lib/prop-types.js';
import FrameContents from '@/components/core/templates/create/elements/frames/FrameContents.jsx';
import { cn } from '@/lib/utils.js';
import { useEffect } from 'react';

const FrameMarquee = ({ element, active, onChange }) => {
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
    <div className={cn(`relative flex h-full `, !active ? 'overflow-x-hidden ' : '')}>
      <div
        className={cn(
          `h-full relative top-0  whitespace-nowrap flex py-5 gap-5 w-full` // !active ? 'animate-marquee' : ''
        )}
        style={{
          width: element.width * element.config.slides,
          height: '100%',
          animationName: active ? '' : 'marquee',
          animationDuration: `${element.config.speed}s`,
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
        }}
      >
        {Array(element.config.slides)
          .fill(null)
          .map((s, i) => (
            <FrameContents
              style={{ width: element.width / element.config.slidesPerView, height: '100%' }}
              key={i}
              id={`frame/${i}/${element.id}`}
              element={element}
              onChange={onChange}
              active={active}
              overlay={<div className="absolute inset-0 z-[9] pointer-events-none bg-white/50" />}
            />
          ))}
      </div>
    </div>
  );
};

FrameMarquee.propTypes = ElementPropTypes;

export default FrameMarquee;
