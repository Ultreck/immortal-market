import { cn } from '@/lib/utils.js';
import { createElement, Fragment, useEffect, useState } from 'react';
import { TbImageInPicture } from 'react-icons/tb';
import { useDroppable } from '@dnd-kit/core';
import PropTypes from 'prop-types';
import { getElementConfig, getElementEditComponent } from '@/lib/elements.js';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { useKey } from 'react-use';

const FrameContents = ({ id, element, active, onChange, overlay, style = {} }) => {
  const { setNodeRef, node, isOver, active: _active } = useDroppable({ id });
  const index = id.split('/')[1];
  const elements = element.children.filter((el) => +el.frame === +index);
  const [selectedElements, setSelectedElements] = useState([]);
  const [activeElement, setActiveElement] = useState(null);

  console.log(activeElement);

  useKey(
    'Delete',
    () => {
      if (activeElement || !selectedElements.length) return;
      const children = element.children.filter((el) => !selectedElements.includes(el.id));
      onChange({ ...element, children });
    },
    undefined,
    [selectedElements, activeElement, element, onChange]
  );

  useEffect(() => {
    if (!active) {
      setSelectedElements([]);
      setActiveElement(null);
    }
  }, [active]);

  const handleFrameClick = (e) => {
    if (e.target === node.current) {
      setSelectedElements([]);
      setActiveElement(null);
    }
  };

  return (
    <div
      ref={setNodeRef}
      style={{ ...element.style, ...style }}
      onClick={handleFrameClick}
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
            const selected = selectedElements.includes(el.id);
            const component = getElementEditComponent(el);
            const config = getElementConfig(el);
            const _active = activeElement === el.id;

            const handleChange = (e) => {
              onChange({
                ...element,
                children: element.children.map((_el) => (_el.id === el.id ? e : _el)),
              });
            };

            return (
              <Fragment key={el.id}>
                {component ? (
                  <ElementWrapper
                    element={el}
                    editable={config?.editable}
                    fit={config?.fit}
                    resizeHandles={config?.resizeHandles}
                    selected={selected}
                    active={_active}
                    onClick={() => {
                      setSelectedElements((old) => [...old, el.id]);
                    }}
                    onChange={handleChange}
                    onDoubleClick={() => setActiveElement(el.id)}
                    className={cn({ 'pointer-events-none': !_active })}
                  >
                    {createElement(component, {
                      element: el,
                      active: _active,
                      onChange: handleChange,
                    })}
                  </ElementWrapper>
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
