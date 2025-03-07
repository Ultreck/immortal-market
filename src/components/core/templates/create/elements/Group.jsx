import useDesignStore from '@/store/design';
import ElementWrapper from '../ElementWrapper';
import { getElementConfig, getElementEditComponent } from '@/lib/elements';
import { createElement, useCallback } from 'react';

export const Group = ({ element, ...props }) => {
  return <GroupContent element={element} {...props} />;
};

export const GroupPresent = ({ element, ...props }) => {
  return <GroupContent element={element} {...props} />;
};

const GroupContent = ({ element, selected }) => {
  const selectedElements = useDesignStore((state) => state.selectedElements);
  const activeElement = useDesignStore((state) => state.activeElement);
  const elements = useDesignStore((state) => state.elements.filter((e) => e.group === element.id));
  const sorted = elements.sort((a, b) => a.order - b.order);
  const selectElements = useDesignStore((state) => state.selectElements);
  const updateStore = useDesignStore((state) => state.updateStore);

  const handleClick = useCallback(
    (id) => {
      if (activeElement === id) return;
      selectElements([id]);
      updateStore({ activeElement: null });
    },
    [activeElement, selectElements, updateStore]
  );
  const handleChange = () => {};
  const handleDoubleClick = () => {};

  return (
    <div>
      {sorted.map((element) => {
        const component = getElementEditComponent(element);
        if (!component) {
          return (
            <span key={element.id} className="border border-red-500 text-red-500 rounded-2xl px-6 py-2">
              {element.type}
            </span>
          );
        }
        const config = getElementConfig(element);
        const _selected = selectedElements.includes(element.id);
        const active = activeElement === element.id;

        return config?.wrapper ? (
          <ElementWrapper
            key={element.id}
            element={element}
            editable={!!config?.editable}
            fit={!!config?.fit}
            resizeHandles={config?.resizeHandles}
            highlighted={selected}
            selected={_selected}
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
  );
};
