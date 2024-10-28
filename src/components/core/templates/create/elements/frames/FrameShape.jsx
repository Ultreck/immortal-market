import { cn } from '@/lib/utils.js';
import { ElementPropTypes } from '@/lib/prop-types.js';
import FrameContents from '@/components/core/templates/create/elements/frames/FrameContents.jsx';
import shapes from '@/lib/design/shapes.js';
import { useEffect } from 'react';

const FrameShape = ({ element, active, onChange }) => {
  const shape = shapes[element.config.name.replace('shape-', '')];

  useEffect(() => {
    console.log('Effect ran');
    onChange({ children: element.children });
  }, [element.width, element.height, element.children]);

  // useEffect(() => {
  //   // TODO: check
  //   const children = element.children.map((el) => {
  //     const w = element.width - element.width;
  //     const h = element.height - element.height;
  //     return { ...el, width: el.width + w, height: el.height + h };
  //   });
  //   onChange({ children });
  // }, [element.width, element.height, element.children, onChange]);

  return (
    <div className="w-full h-full" style={{ filter: `drop-shadow(${element.style.shadow})` }}>
      <FrameContents
        id={`frame/0/${element.id}`}
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
