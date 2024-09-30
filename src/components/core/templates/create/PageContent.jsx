import { createElement, Fragment } from 'react';
import { cn } from '@/lib/utils.js';
import { components } from '@/lib/elements.js';
import FloatingToolbar from '@/components/core/templates/create/FloatingToolbar.jsx';
import { motion } from 'framer-motion';
import { useContextMenu } from '@/hooks/template/use-context-menu.jsx';
import useSelectionBox from '@/hooks/template/use-selection-box.jsx';
import useTemplateStore from '@/store/template.js';
import { useDroppable } from '@dnd-kit/core';
import { useSelectionActions } from '@/hooks/template/use-selection-actions.js';
import PropTypes from 'prop-types';
import { useElementHandlers } from '@/hooks/template/use-element-handlers.js';

const PageContent = ({ id }) => {
  const { setNodeRef, node } = useDroppable({ id: `canvas-${id}` });
  const selectedElements = useTemplateStore((state) => state.template.selectedElements);
  const page = useTemplateStore(({ template }) => template.pages.find((page) => page.id === id));
  const scale = useTemplateStore((state) => state.template.scale);
  const { handleAction } = useSelectionActions({ id });
  const { handleContextMenu, renderContextMenu } = useContextMenu({ id, node, onAction: handleAction });
  const { handleMouseDown, handleMouseMove, handleMouseUp, highlightedElements, renderSelectionBox } = useSelectionBox({
    id,
    node,
  });
  const { handleChange, handleClick } = useElementHandlers({ id });

  return (
    <>
      <motion.div
        style={{ width: page.width * scale, height: page.height * scale }}
        ref={setNodeRef}
        id={`canvas-${id}`}
        draggable={false}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onContextMenu={handleContextMenu}
        className={cn('bg-white text-black relative overflow-hidden canvas')}
      >
        <div
          style={{
            transform: `scale(${scale})`,
            width: page.width,
            height: page.height,
            background: page.style.background || '#fff',
          }}
          className="origin-top-left pointer-events-none"
        >
          {page.elements.map((element) => {
            const active = selectedElements.includes(element.id);
            const highlighted = highlightedElements.includes(element.id);
            return (
              <Fragment key={element.id}>
                {components.edit[element.type] ? (
                  createElement(components.edit[element.type], {
                    element,
                    active,
                    highlighted,
                    onClick: handleClick,
                    onChange: handleChange,
                    width: page.width,
                    scale,
                  })
                ) : (
                  <div className="text-red-500 border-red-500 border-2 rounded-lg px-2 py-1 w-max">
                    Unknown element type: {element.type}
                  </div>
                )}
              </Fragment>
            );
          })}
        </div>
        {renderSelectionBox()}
        <FloatingToolbar id={id} onAction={handleAction} />
        {renderContextMenu()}
      </motion.div>
    </>
  );
};

PageContent.propTypes = {
  id: PropTypes.string.isRequired,
};

export default PageContent;
