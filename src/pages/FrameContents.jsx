import { cn } from '@/lib/utils.js';
import { createElement, Fragment, useEffect, useState } from 'react';
import { components } from '@/lib/elements.js';
import { TbImageInPicture } from 'react-icons/tb';
import { useDroppable } from '@dnd-kit/core';
import PropTypes from 'prop-types';

const FrameContents = ({ element, active, isEditing, onChange, overlay, style = {} }) => {
  const { setNodeRef, isOver, active: _active } = useDroppable({ id: `frame-${element.id}` });
  const [selectedElements, setSelectedElements] = useState([]);

  useEffect(() => {
    if (!active) setSelectedElements([]);
  }, [active]);

  return (
    <div
      ref={setNodeRef}
      style={{ ...element.style, ...style }}
      className={cn('overflow-hidden relative w-full h-full', { 'overflow-visible': isEditing })}
    >
      {isEditing && overlay}
      {isOver && _active.data.current.type === 'image' && (
        <div className="absolute inset-0 bg-white text-black flex items-center justify-center z-[1] border-3 border-gray-400 border-dashed rounded-2xl">
          <img src={_active.data.current.config.src} className="w-full h-full object-cover" alt="image to drop" />
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
  );
};

FrameContents.propTypes = {
  element: PropTypes.object.isRequired,
  active: PropTypes.bool.isRequired,
  isEditing: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  overlay: PropTypes.any.isRequired,
  style: PropTypes.object.isRequired,
};

export default FrameContents;
