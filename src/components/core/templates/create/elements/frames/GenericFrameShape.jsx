import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { cn } from '@/lib/utils.js';
import { ElementPropTypes } from '@/lib/prop-types.js';
import FrameContents from '@/pages/FrameContents.jsx';

// prettier-ignore
const styles = {
  'frame-rectangle': { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' },
  'frame-circle': { clipPath: 'ellipse(50% 50% at 50% 50%)' },
  'frame-triangle': { clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' },
  'frame-rhombus': { clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' },
  'frame-star': { clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' },
  'frame-heart': {
    maskBorder: `radial-gradient(#000 69%,#0000 70%) 84.5%/50%`,
    mask: `radial-gradient(at 70% 31%,#000 29%,#0000 30%), radial-gradient(at 30% 31%,#000 29%,#0000 30%), linear-gradient(#000 0 0) bottom/100% 50% no-repeat`,
    clipPath: `polygon(-41% 0,50% 91%, 141% 0)`,
  },
  'frame-diamond': { clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' },
  'frame-arrow-left': { clipPath: 'polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%)' },
  'frame-arrow-right': { clipPath: 'polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)' },
  'frame-arrow-up': { clipPath: 'polygon(20% 100%, 20% 40%, 0% 40%, 50% 0%, 100% 40%, 80% 40%, 80% 100%)' },
  'frame-arrow-down': { clipPath: 'polygon(20% 0%, 20% 60%, 0% 60%, 50% 100%, 100% 60%, 80% 60%, 80% 0%)' },
  'frame-arrow-up-down': { clipPath: 'polygon(50% 0%, 100% 40%, 75% 40%, 75% 60%, 100% 60%, 50% 100%, 0% 60%, 25% 60%, 25% 40%, 0% 40%)' },
};

const GenericFrameShape = ({ element, active, highlighted, width, onClick, onChange }) => {
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
    >
      {({ isEditing }) => (
        <div className="w-full h-full" style={{ filter: `drop-shadow(${element.style.shadow})` }}>
          <FrameContents
            id={`frame/0/${element.id}`}
            element={element}
            active={active}
            isEditing={isEditing}
            style={{ ...(!isEditing ? styles[element.type] : {}) }}
            overlay={
              <div className="absolute inset-0 z-[9] pointer-events-none bg-white/50" style={styles[element.type]} />
            }
            className={cn('overflow-hidden relative', { 'overflow-visible': isEditing })}
            onChange={onChange}
          />
        </div>
      )}
    </ElementWrapper>
  );
};

GenericFrameShape.propTypes = ElementPropTypes;

export default GenericFrameShape;
