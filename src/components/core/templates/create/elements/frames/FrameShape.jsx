import { cn } from '@/lib/utils.js';
import { ElementPropTypes } from '@/lib/prop-types.js';
import FrameContents from '@/components/core/templates/create/elements/frames/FrameContents.jsx';
import shapes from '@/lib/design/shapes.js';

const FrameShape = ({ element, active, onChange }) => {
  const shape = shapes[element.config.name.replace('shape-', '')];

  return (
    <div className="w-full h-full" style={{ filter: `drop-shadow(${element.style.shadow})` }}>
      <FrameContents
        id={`frame/0/${element.key}`}
        element={element}
        active={active}
        style={{ ...(!active ? shape : {}) }}
        overlay={<div className="absolute inset-0 z-[9] pointer-events-none bg-white/50" style={shape} />}
        className={cn('overflow-hidden relative', { 'overflow-visible': active })}
        onChange={onChange}
      />
    </div>
  );
};

FrameShape.propTypes = ElementPropTypes;

export default FrameShape;
