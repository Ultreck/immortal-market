import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { ElementPropTypes } from '@/lib/prop-types.js';
import { cn } from '@/lib/utils.js';

const FrameTextMarquee = ({ element, active, highlighted, width, onClick, onChange }) => {
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
            style={{ width: element.width , height: '100%' }}
          >
            {element.config.texts.map((text, i) => (
              <span style={element.style} key={i} className="text-4xl mx-4">
                {text}
              </span>
            ))}
          </div>
        </div>
      )}
    </ElementWrapper>
  );
};

FrameTextMarquee.propTypes = ElementPropTypes;

export default FrameTextMarquee;

