import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { cn } from '@/lib/utils.js';
import { ElementPropTypes } from '@/lib/prop-types.js';
import FrameContents from '@/components/core/templates/create/elements/frames/FrameContents.jsx';
import shapes from '@/lib/templates/shapes.js';
import PropTypes from 'prop-types';

const GenericFrameShape = ({ element, active, highlighted, width, onClick, onChange }) => {
  const shape = shapes[element.type.replace('frame-', '')];

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
            style={{ ...(!isEditing ? shape : {}) }}
            overlay={<div className="absolute inset-0 z-[9] pointer-events-none bg-white/50" style={shape} />}
            className={cn('overflow-hidden relative', { 'overflow-visible': isEditing })}
            onChange={onChange}
          />
        </div>
      )}
    </ElementWrapper>
  );
};

GenericFrameShape.propTypes = ElementPropTypes;

export const GenericFrameShapeElementContent = ({ element }) => {
  const shape = shapes[element.type.replace('frame-', '')];

  return <div className="overflow-hidden relative w-full h-full" style={{ ...element.style, ...shape }}></div>;
};

GenericFrameShapeElementContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default GenericFrameShape;
