import PropTypes from 'prop-types';
import DragResizeRotate from '@/components/ui/DragResizeRotate.jsx';
import { cn } from '@/lib/utils.js';
import { useMemo, useState } from 'react';
import { getElementConfig } from '@/lib/elements.js';
import useDesignStore from '@/store/design.js';

const DragResizeRotateWrapper = ({ id }) => {
  const [rotate, setRotate] = useState(0);
  const selectedElements = useDesignStore((state) => state.selectedElements);
  const elements = useDesignStore((state) =>
    state.elements.filter((el) => el.page === id && selectedElements.includes(el.id))
  );
  const updateElements = useDesignStore((state) => state.updateElements);
  const updateStore = useDesignStore((state) => state.updateStore);
  const scale = useDesignStore((state) => state.scale);
  const activeElement = useDesignStore((state) => state.activeElement);

  const disabled = useMemo(() => {
    if (elements.length === 1) {
      return !!elements[0].group;
    }
    return false;
  }, [elements]);

  const { x, y, width, height } = useMemo(() => {
    if (!elements.length) return { x: 0, y: 0, width: 0, height: 0 };
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
    const bottomMostElementHeight = document.getElementById(`element-${bottomMostElement?.id}`)?.scrollHeight || 0;
    return {
      x: leftMostElement.position.x * scale,
      y: topMostElement.position.y * scale,
      width: (rightMostElement.position.x + rightMostElement.size.width - leftMostElement.position.x) * scale,
      height: (bottomMostElement.position.y + bottomMostElementHeight - topMostElement.position.y) * scale,
    };
  }, [elements, scale]);

  const handleChange = (values) => {
    const diff = {
      x: values.x - x,
      y: values.y - y,
      width: values.width - width,
      height: values.height - height,
      rotate: values.rotate - rotate,
    };
    updateElements(
      elements.map((el) => ({
        elementId: el.id,
        updates: {
          position: {
            x: el.position.x + diff.x,
            y: el.position.y + diff.y,
          },
          size: {
            width: el.size.width + diff.width,
            height: el.size.height + diff.height,
          },
          rotate: el.rotate + diff.rotate,
        },
      }))
    );
    setRotate(values.rotate);
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
          rotate: el.rotate,
        },
      })),
      true
    );
  };

  return (
    <>
      {!!elements.length && (
        <DragResizeRotate
          values={{ x, y, width, height, rotate }}
          onChange={handleChange}
          onClick={() => {
            if (elements.length === 1) {
              const config = getElementConfig(elements[0]);
              if (config.editable) updateStore({ activeElement: elements[0].id });
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
