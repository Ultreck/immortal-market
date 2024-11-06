import { createElement } from 'react';
import { cn } from '@/lib/utils.js';
import { getElementConfig, getElementEditComponent } from '@/lib/elements.js';
import { useContextMenu } from '@/hooks/template/use-context-menu.jsx';
import useSelectionBox from '@/hooks/template/use-selection-box.jsx';
import useTemplateStore from '@/store/template.js';
import { useDroppable } from '@dnd-kit/core';
import { useActions } from '@/hooks/template/use-actions.js';
import PropTypes from 'prop-types';
import { useElementHandlers } from '@/hooks/template/use-element-handlers.js';
import { useKey } from 'react-use';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';

const PageContent = ({ id }) => {
  const { setNodeRef, node } = useDroppable({ id: `canvas-${id}` });
  const selectedElements = useTemplateStore((state) => state.template.selectedElements);
  const activeElement = useTemplateStore((state) => state.template.activeElement);
  const page = useTemplateStore(({ template }) => template.pages.find((page) => page.id === id));
  const scale = useTemplateStore((state) => state.template.scale);
  const { handleAction } = useActions({ id });
  const { handleContextMenu, renderContextMenu } = useContextMenu({ id, node, onAction: handleAction });
  const { handleMouseDown, handleMouseMove, handleMouseUp, highlightedElements, renderSelectionBox } = useSelectionBox({
    id,
    node,
  });
  const { handleChange, handleClick, handleDoubleClick } = useElementHandlers({ id });

  useKey(
    (e) => e.key.toLowerCase() === 'd' && e.ctrlKey && !e.shiftKey,
    async (e) => {
      e.preventDefault();
      await handleAction('duplicate');
    }
  );

  return (
    <div
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
          const selected = selectedElements.includes(element.id);
          const highlighted = highlightedElements.includes(element.id);
          const active = activeElement === element.id;
          const component = getElementEditComponent(element);
          const config = getElementConfig(element);

          return config?.wrapper ? (
            <ElementWrapper
              key={element.id}
              element={element}
              editable={config?.editable}
              fit={config?.fit}
              resizeHandles={config?.resizeHandles}
              selected={selected}
              highlighted={highlighted}
              active={active}
              onClick={handleClick}
              onChange={(el) => handleChange({ ...element, ...el })}
              onDoubleClick={handleDoubleClick}
            >
              {createElement(component, { element, active, onChange: handleChange })}
            </ElementWrapper>
          ) : (
            <span key={element.id} className="pointer-events-auto">
              {createElement(component, {
                element,
                active,
                selected,
                onChange: handleChange,
                onClick: handleClick,
                onDoubleClick: handleDoubleClick,
              })}
            </span>
          );
        })}
      </div>
      {renderSelectionBox()}
      {renderContextMenu()}
    </div>
  );
};

PageContent.propTypes = {
  id: PropTypes.string.isRequired,
};

export default PageContent;
