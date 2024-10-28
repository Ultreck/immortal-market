import { ElementPropTypes } from '@/lib/prop-types.js';
import { cn } from '@/lib/utils.js';

const FrameTextMarquee = ({ element, active }) => {
  return (
    <div className={cn(`relative flex h-full `, !active ? 'overflow-x-hidden ' : '')}>
      <div
        className={cn(
          `h-full relative top-0  whitespace-nowrap flex py-5 gap-5 w-full`,
          !active ? 'animate-marquee' : ''
        )}
        style={{ width: element.width, height: '100%' }}
      >
        {element.config.texts.map((text, i) => (
          <span style={element.style} key={i} className="text-4xl mx-4">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

FrameTextMarquee.propTypes = ElementPropTypes;

export default FrameTextMarquee;
