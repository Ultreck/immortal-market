import { elementPropTypes } from '@/lib/elements.jsx';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { createElement, Fragment, useEffect, useState } from 'react';
import { useDroppable } from '@dnd-kit/core';
import components from '@/lib/components.js';
import { cn } from '@/lib/utils.js';
import { TbImageInPicture } from 'react-icons/tb';

const FrameCircle = ({ element, active, highlighted, width, onClick, onChange }) => {
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
            clipPath: 'circle(45%)',
          }}
          className={cn('overflow-hidden relative', { 'overflow-visible': isEditing })}
        >
          {isOver && _active.data.current.type === 'image' && (
            <div className="absolute inset-0 bg-white text-black flex items-center justify-center z-[1] border-3 border-gray-400 border-dashed rounded-2xl">
              <img src={_active.data.current.src} className="w-full h-full object-cover" alt="image to drop" />
              ppp
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
            <div className="w-full h-full bg-white text-gray-500 flex items-center justify-center">
              <TbImageInPicture size={32} />
            </div>
          )}
        </div>
      )}
    </ElementWrapper>
  );
};

FrameCircle.propTypes = elementPropTypes;

export default FrameCircle;
