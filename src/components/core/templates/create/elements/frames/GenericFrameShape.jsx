import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { createElement, Fragment, useEffect, useState } from 'react';
import { useDroppable } from '@dnd-kit/core';
import { components } from '@/lib/elements.jsx';
import { cn } from '@/lib/utils.js';
import { TbImageInPicture } from 'react-icons/tb';
import { ElementPropTypes } from '@/lib/prop-types.js';

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
  const { setNodeRef, isOver, active: _active } = useDroppable({ id: `frame-${element.id}` });
  const [selectedElements, setSelectedElements] = useState([]);

  useEffect(() => {
    if (!active) setSelectedElements([]);
  }, [active]);

  return (
    <ElementWrapper
      element={element}
      onClick={onClick}
      onChange={onChange}
      onResize={(size) => {
        onChange({ ...element, width: size.width, height: size.height });
      }}
      maxWidth={width}
      active={active}
      highlighted={highlighted}
      resizeHandles={['se', 'e', 's']}
      editable
    >
      {({ isEditing }) => (
        <div
          ref={setNodeRef}
          style={{
            ...element.style,
            width: `${element.width}px`,
            height: `${element.height}px`,
            ...(!isEditing ? styles[element.type] : {}),
          }}
          className={cn('overflow-hidden relative', { 'overflow-visible': isEditing })}
        >
          {isEditing && (
            <div className="absolute inset-0 z-[9] pointer-events-none bg-white/50" style={styles[element.type]}></div>
          )}
          {isOver && _active.data.current.type === 'image' && (
            <div className="absolute inset-0 bg-white text-black flex items-center justify-center z-[1] border-3 border-gray-400 border-dashed rounded-2xl">
              <img src={_active.data.current.src} className="w-full h-full object-cover" alt="image to drop" />
            </div>
          )}
          {element.children.length > 0 ? (
            <>
              {element?.children?.map((el) => {
                const active = selectedElements.includes(el.id);
                return (
                  <Fragment key={el.id}>
                    {components[el.type] ? (
                      createElement(components[el.type], {
                        element: el,
                        active,
                        onClick: () => {
                          setSelectedElements((old) => [...old, el.id]);
                        },
                        onChange: (e) => {
                          onChange({
                            ...element,
                            children: element.children.map((el) => (el.id === el.id ? e : el)),
                          });
                        },
                      })
                    ) : (
                      <div className="text-red-500 border-red-500 border-2 rounded-lg px-2 py-1 w-max">
                        Unknown element type: {el.type}
                      </div>
                    )}
                  </Fragment>
                );
              })}
            </>
          ) : (
            <div className="w-full h-full text-gray-500 flex items-center justify-center">
              <TbImageInPicture size={32} />
            </div>
          )}
        </div>
      )}
    </ElementWrapper>
  );
};

GenericFrameShape.propTypes = ElementPropTypes;

export default GenericFrameShape;
