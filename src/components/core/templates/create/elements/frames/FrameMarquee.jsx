import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { ElementPropTypes } from '@/lib/prop-types.js';
import FrameContents from '@/components/core/templates/create/elements/frames/FrameContents.jsx';
import { cn } from '@/lib/utils.js';

const FrameMarquee = ({ element, active, highlighted, width, onClick, onChange }) => {
  return (
    <ElementWrapper
      element={element}
      onClick={onClick}
      onChange={(args) => {
        if (args.width !== element.width || args.height !== element.height) {
          args.children = args.children.map((el) => {
            const w = args.width - element.width;
            const h = args.height - element.height;
            return { ...el, width: el.width + w, height: el.height + h };
          });
        }
        onChange(args);
      }}
      maxWidth={width}
      active={active}
      highlighted={highlighted}
      editable
      // className="flex flex-col"
    >
      {({ isEditing }) => (
        <div className={cn(`relative flex h-full `, !isEditing ? 'overflow-x-hidden ' : '')}>
          <div
            className={cn(
              `h-full relative top-0  whitespace-nowrap flex py-5 gap-5 w-full`,
              !isEditing ? 'animate-marquee' : ''
            )}
            style={{ width: element.width * element.config.slides, height: '100%' }}
          >
            {Array(element.config.slides)
              .fill(null)
              .map((s, i) => (
                <FrameContents
                  style={{ width: element.width, height: '100%' }}
                  key={i}
                  id={`frame/${i}/${element.id}`}
                  element={element}
                  onChange={onChange}
                  isEditing={isEditing}
                  active={active}
                  highlighted={highlighted}
                  overlay={<div className="absolute inset-0 z-[9] pointer-events-none bg-white/50" />}
                />
              ))}
          </div>
        </div>
      )}
    </ElementWrapper>
  );
};

FrameMarquee.propTypes = ElementPropTypes;

export default FrameMarquee;

