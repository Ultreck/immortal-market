import PropTypes from 'prop-types';
import DragResizeRotate from '@/components/ui/DragResizeRotate.jsx';
import { cn } from '@/lib/utils.js';
import { useMemo } from 'react';
import { getElementConfig } from '@/lib/elements.js';
import useDesignStore from '@/store/design.js';

const DragResizeRotateWrapper = ({ id }) => {
  const selectedElements = useDesignStore((state) => state.selectedElements);
  const elements = useDesignStore((state) =>
    state.elements.filter((el) => el.page === id && selectedElements.includes(el.key))
  );
  const updateElements = useDesignStore((state) => state.updateElements);
  const updateStore = useDesignStore((state) => state.updateStore);
  const scale = useDesignStore((state) => state.scale);
  const activeElement = useDesignStore((state) => state.activeElement);

  const disabled = useMemo(() => {
    if (elements.length === 1) {
      return !!elements[0].parent;
    }
    return false;
  }, [elements]);

  const { x, y, width, height, rotation } = useMemo(() => {
    if (!elements.length) return { x: 0, y: 0, width: 0, height: 0, rotation: 0 };

    const leftMostElement = elements.reduce((acc, el) => (el.position.x < acc.position.x ? el : acc), elements[0]);
    const topMostElement = elements.reduce((acc, el) => (el.position.y < acc.position.y ? el : acc), elements[0]);
    const rightMostElement = elements.reduce(
      (acc, el) => (el.position.x + el.size.width > acc.position.x + acc.size.width ? el : acc),
      elements[0]
    );
    const bottomMostElement = elements.reduce(
      (acc, el) => (el.position.y + el.size.height > acc.position.y + acc.size.height ? el : acc),
      elements[0]
    );
    const rotation = elements.length === 1 ? elements[0].rotation || 0 : 0;
    const bottomMostElementHeight = bottomMostElement.size.height;
    return {
      x: leftMostElement.position.x * scale,
      y: topMostElement.position.y * scale,
      width: (rightMostElement.position.x + rightMostElement.size.width - leftMostElement.position.x) * scale,
      height: (bottomMostElement.position.y + bottomMostElementHeight - topMostElement.position.y) * scale,
      rotation,
    };
  }, [elements, scale]);

  const handleChange = (values) => {
    // For single element selection, directly update the values
    if (elements.length === 1) {
      updateElements([
        {
          elementId: elements[0].id,
          updates: {
            position: {
              x: values.x / scale,
              y: values.y / scale,
            },
            size: {
              width: values.width / scale,
              height: values.height / scale,
            },
            rotation: values.rotate,
          },
        },
      ]);
      return;
    }

    // For multiple elements, calculate the differences
    const diff = {
      x: values.x - x,
      y: values.y - y,
      width: values.width - width,
      height: values.height - height,
      rotation: values.rotate - rotation,
    };

    // If there's a rotation change, we need to handle rotation around the center point
    if (diff.rotation !== 0) {
      // Calculate the center of the selection
      const centerX = x + width / 2;
      const centerY = y + height / 2;

      // Create updates with rotation-adjusted positions
      updateElements(
        elements.map((el) => {
          // Calculate element's center relative to the selection center
          const elementCenterX = el.position.x * scale + el.size.width * scale / 2;
          const elementCenterY = el.position.y * scale + el.size.height * scale / 2;
          
          // Calculate the distance and angle from selection center to element center
          const dx = elementCenterX - centerX;
          const dy = elementCenterY - centerY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const originalAngle = Math.atan2(dy, dx);
          
          // Calculate new angle after rotation
          const newAngle = originalAngle + (diff.rotation * Math.PI / 180);
          
          // Calculate new position of element center
          const newElementCenterX = centerX + distance * Math.cos(newAngle);
          const newElementCenterY = centerY + distance * Math.sin(newAngle);
          
          // Convert back to element's top-left position
          const newX = (newElementCenterX - (el.size.width * scale / 2)) / scale;
          const newY = (newElementCenterY - (el.size.height * scale / 2)) / scale;
          
          return {
            elementId: el.id,
            updates: {
              position: {
                x: newX + diff.x / scale,
                y: newY + diff.y / scale,
              },
              size: {
                width: el.size.width * (values.width / width),
                height: el.size.height * (values.height / height),
              },
              rotation: (el.rotation || 0) + diff.rotation,
            },
          };
        })
      );
    } else {
      // If no rotation change, just apply the position and size differences
      updateElements(
        elements.map((el) => ({
          elementId: el.id,
          updates: {
            position: {
              x: el.position.x + diff.x / scale,
              y: el.position.y + diff.y / scale,
            },
            size: {
              width: el.size.width * (values.width / width),
              height: el.size.height * (values.height / height),
            },
            rotation: el.rotation || 0,
          },
        }))
      );
    }
  };

  const handleUpdate = () => {
    updateElements(
      elements.map((el) => ({
        elementId: el.id,
        updates: {
          position: {
            x: el.position.x,
            y: el.position.y,
          },
          size: {
            width: el.size.width,
            height: el.size.height,
          },
          rotation: el.rotation || 0,
        },
      })),
      true
    );
  };

  return (
    <>
      {!!elements.length && (
        <DragResizeRotate
          values={{ x, y, width, height, rotate: rotation }}
          onChange={handleChange}
          onDoubleClick={() => {
            if (elements.length === 1) {
              const config = getElementConfig(elements[0]);
              if (config.editable) updateStore({ activeElement: elements[0].key });
            }
          }}
          visible={!disabled}
          rotatable={!disabled && !activeElement}
          draggable={!disabled && !activeElement}
          resizable={!disabled && !activeElement}
          scale={scale}
          className={cn(
            'w-max border-2 border-transparent absolute top-0 left-0 group select-none pointer-events-auto',
            { 'pointer-events-none border-transparent': activeElement }
          )}
          style={{
            boxShadow: '0 0 0 2px rgba(0, 0, 0, 0.1)',
          }}
          onDragEnd={handleUpdate}
          onResizeEnd={handleUpdate}
          onRotateEnd={handleUpdate}
        >
          <div></div>
        </DragResizeRotate>
      )}
    </>
  );
};

DragResizeRotateWrapper.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DragResizeRotateWrapper;
