import useTemplateStore from '@/store/template.js';
import PropTypes from 'prop-types';
import DragResizeRotate from '@/components/ui/DragResizeRotate.jsx';
import { cn } from '@/lib/utils.js';
import { useMemo, useState } from 'react';
import { getElementConfig } from '@/lib/elements.js';

const DragResizeRotateWrapper = ({ id }) => {
  const [rotate, setRotate] = useState(0);
  const selectedElements = useTemplateStore((state) => state.template.selectedElements);
  const page = useTemplateStore(({ template }) => template.pages.find((page) => page.id === id));
  const elements = page.elements.filter((el) => selectedElements.includes(el.id));
  const updateElements = useTemplateStore((state) => state.updateElements);
  const scale = useTemplateStore((state) => state.template.scale);
  const addUndoHistory = useTemplateStore((state) => state.addUndoHistory);
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const activeElement = useTemplateStore((state) => state.template.activeElement);

  const { x, y, width, height } = useMemo(() => {
    if (!elements.length) return { x: 0, y: 0, width: 0, height: 0 };
    const leftMostElement = elements.reduce((acc, el) => (el.x < acc.x ? el : acc), elements[0]);
    const topMostElement = elements.reduce((acc, el) => (el.y < acc.y ? el : acc), elements[0]);
    const rightMostElement = elements.reduce(
      (acc, el) => (el.x + el.width > acc.x + acc.width ? el : acc),
      elements[0]
    );
    const bottomMostElement = elements.reduce(
      (acc, el) => (el.y + el.height > acc.y + acc.height ? el : acc),
      elements[0]
    );
    const bottomMostElementHeight = document.getElementById(`element-${bottomMostElement?.id}`)?.scrollHeight || 0;
    return {
      x: leftMostElement.x * scale,
      y: topMostElement.y * scale,
      width: (rightMostElement.x + rightMostElement.width - leftMostElement.x) * scale,
      height: (bottomMostElement.y + bottomMostElementHeight - topMostElement.y) * scale,
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
        ...el,
        x: el.x + diff.x,
        y: el.y + diff.y,
        width: el.width + diff.width,
        height: el.height + diff.height,
        rotate: el.rotate + diff.rotate,
      })),
      page.id
    );
    setRotate(values.rotate);
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
              if (config.editable) updateTemplate({ activeElement: elements[0].id });
            }
          }}
          // onDoubleClick={() => {
          //   setIsDragDisabled(true);
          // }}
          resizable
          rotatable
          draggable={!activeElement}
          scale={scale}
          className={cn(
            'w-max border-1 border-yellow-500 absolute top-0 left-0 group select-none pointer-events-auto',
            { 'pointer-events-none border-transparent': activeElement }
          )}
          onDragStart={() => addUndoHistory()}
          onResizeStart={() => addUndoHistory()}
          onRotateStart={() => addUndoHistory()}
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
