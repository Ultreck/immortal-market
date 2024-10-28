import { cn } from '@/lib/utils.js';
import { createElement, Fragment, useEffect, useState } from 'react';
import { TbImageInPicture } from 'react-icons/tb';
import { useDroppable } from '@dnd-kit/core';
import PropTypes from 'prop-types';
import { getElementEditComponent } from '@/lib/elements.js';

const FrameContents = ({ id, element, active, onChange, overlay, style = {} }) => {
  const { setNodeRef, isOver, active: _active } = useDroppable({ id });
  const index = id.split('/')[1];
  const elements = element.children.filter((el) => +el.frame === +index);
  const [selectedElements, setSelectedElements] = useState([]);

  useEffect(() => {
    if (!active) setSelectedElements([]);
  }, [active]);

  return (
    <div
      ref={setNodeRef}
      style={{ ...element.style, ...style }}
      className={cn('overflow-hidden relative w-full h-full', { 'overflow-visible': active })}
    >
      {active && overlay}
      {isOver && _active.data.current.type === 'image' && (
        <div className="absolute inset-0 bg-white text-black flex items-center justify-center z-[1] border-3 border-gray-400 border-dashed rounded-2xl">
          <img src={_active.data.current.config.src} className="w-full h-full object-cover" alt="image to drop" />
        </div>
      )}
      {elements.length > 0 ? (
        <>
          {elements.map((el) => {
            const active = selectedElements.includes(el.id);
            const component = getElementEditComponent(el);
            return (
              <Fragment key={el.id}>
                {component ? (
                  createElement(component, {
                    element: el,
                    active,
                    onClick: () => {
                      setSelectedElements((old) => [...old, el.id]);
                    },
                    onChange: (e) => {
                      onChange({
                        ...element,
                        children: element.children.map((_el) => (_el.id === el.id ? e : _el)),
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
        <div className="w-full h-full text-gray-500 flex items-center justify-center border-2 border-gray-300 border-dashed">
          <TbImageInPicture size={32} />
        </div>
      )}
    </div>
  );
};

FrameContents.propTypes = {
  id: PropTypes.string.isRequired,
  element: PropTypes.object.isRequired,
  active: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  overlay: PropTypes.any,
  style: PropTypes.object,
};

export default FrameContents;
