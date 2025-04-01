import { createElement, memo } from 'react';
import { cn } from '@/lib/utils.js';
import { getElementConfig, getElementEditComponent } from '@/lib/elements.js';
import { useContextMenu } from '@/hooks/template/use-context-menu.jsx';
import useSelectionBox from '@/hooks/template/use-selection-box.jsx';
import useDesignStore from '@/store/design.js';
import { useDroppable } from '@dnd-kit/core';
import PropTypes from 'prop-types';
import { useElementHandlers } from '@/hooks/template/use-element-handlers.js';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import DragResizeRotateWrapper from '@/components/core/templates/create/DragResizeRotateWrapper.jsx';
import DataNotConfiguredOverlay from '@/components/core/templates/create/DataNotConfiguredOverlay.jsx';
import Cursors from './Cursors';

const PageContent = ({ id }) => {
  const { setNodeRef, node } = useDroppable({ id: `canvas-${id}` });
  const scale = useDesignStore((state) => state.scale);
  const design = useDesignStore((state) => state.design);
  const page = useDesignStore((state) => state.pages.find((page) => page.id === id));
  const elements = useDesignStore((state) => state.elements.filter((e) => e.page === id));
  const selectedElements = useDesignStore((state) => state.selectedElements);
  const activeElement = useDesignStore((state) => state.activeElement);
  const { handleContextMenu, renderContextMenu } = useContextMenu({ id, node });
  const { handleMouseDown, handleMouseMove, handleMouseUp, handleMouseLeave, highlightedElements, renderSelectionBox } =
    useSelectionBox({
      id,
      node,
    });
  const { handleClick, handleDoubleClick } = useElementHandlers({ id });

  const filtered = elements.filter((e) => !e.parent);
  const sorted = filtered.sort((a, b) => a.order - b.order);

  return (
    <div
      style={{ width: page.size.width * scale, height: page.size.height * scale }}
      ref={setNodeRef}
      id={`canvas-${id}`}
      draggable={false}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onContextMenu={handleContextMenu}
      className={cn('bg-white text-black relative overflow-hidden canvas')}
    >
      <Cursors page={id} />
      {design.type === 'project' && <DataNotConfiguredOverlay />}
      <div
        style={{
          transform: `scale(${scale})`,
          width: page.size.width,
          height: page.size.height,
          background: page.background.value,
        }}
        className="origin-top-left pointer-events-none"
      >
        {sorted.map((element) => {
          const component = getElementEditComponent(element);
          if (!component) {
            return (
              <span key={element.key} className="border border-red-500 text-red-500 rounded-2xl px-6 py-2">
                {element.type}
              </span>
            );
          }
          const config = getElementConfig(element);
          const selected = selectedElements.includes(element.key);
          const highlighted = highlightedElements.includes(element.key);
          const active = activeElement === element.key;

          return config?.wrapper ? (
            <ElementWrapper
              key={element.key}
              element={element}
              editable={!!config?.editable}
              fit={!!config?.fit}
              resizeHandles={config?.resizeHandles}
              selected={selected}
              highlighted={highlighted}
              active={active}
              onClick={handleClick}
              onDoubleClick={handleDoubleClick}
            >
              {createElement(component, { element, active, selected })}
            </ElementWrapper>
          ) : (
            <span key={element.key} className="pointer-events-auto">
              {createElement(component, {
                element,
                active,
                selected,
                onClick: handleClick,
                onDoubleClick: handleDoubleClick,
              })}
            </span>
          );
        })}
      </div>

      <DragResizeRotateWrapper id={id} />
      {renderSelectionBox()}
      {renderContextMenu()}
    </div>
  );
};

PageContent.propTypes = {
  id: PropTypes.string.isRequired,
};

export default memo(PageContent);
