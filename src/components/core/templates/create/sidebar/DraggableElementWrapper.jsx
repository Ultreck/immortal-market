import { cn } from '@/lib/utils.js';
import { createElement } from 'react';
import { getElementIcon } from '@/lib/elements.js';
import DraggableElement from '@/components/core/templates/create/sidebar/DraggableElement.jsx';
import PropTypes from 'prop-types';
import useTemplateStore from '@/store/template.js';

const DraggableElementWrapper = ({ element }) => {
  const addElements = useTemplateStore((state) => state.addElements);
  const activePage = useTemplateStore((state) => state.template.activePage);

  const handleClick = () => {
    addElements(
      [
        {
          id: crypto.randomUUID(),
          ...element.data,
          x: 10,
          y: 10,
          rotate: 0,
        },
      ],
      activePage
    );
  };

  return (
    <DraggableElement
      element={element}
      className={cn('relative')}
      content={
        <div className="relative" onClick={handleClick}>
          {element.preview ? (
            <div className="bg-black/10 dark:bg-white/10 hover:bg-black/15 dark:hover:bg-white/15 rounded-2xl px-6 py-4">
              {element.preview}
            </div>
          ) : (
            <div
              className={cn(
                'relative rounded-2xl px-4 py-4 flex flex-col items-center justify-center text-center h-full',
                'bg-black/10 dark:bg-white/10 hover:bg-black/15 dark:hover:bg-white/15',
                'cursor-grab'
              )}
            >
              <span>{createElement(getElementIcon(element.type), { size: 40 })}</span>
            </div>
          )}
        </div>
      }
      dragging={
        element.preview ? (
          <div className="px-6 py-6 text-default-100">{element.preview}</div>
        ) : (
          <div className="bg-default-200/60 dark:bg-default-50/80 flex items-center space-x-2 px-4 py-2 w-max rounded-2xl">
            {createElement(getElementIcon(element.type), { size: 20 })}
            <span className="text-sm">{element.name}</span>
          </div>
        )
      }
    />
  );
};

DraggableElementWrapper.propTypes = {
  element: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    preview: PropTypes.any,
    data: PropTypes.any,
  }),
};

export default DraggableElementWrapper;
