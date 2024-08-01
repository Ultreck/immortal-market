import { cn } from '@/lib/utils.js';
import { createElement } from 'react';
import { getElementIcon } from '@/lib/elements.jsx';
import DraggableElement from '@/components/core/templates/create/sidebar/DraggableElement.jsx';
import PropTypes from 'prop-types';

const DraggableElementWrapper = ({ element }) => {
  return (
    <DraggableElement
      element={element}
      className={cn('relative')}
      content={
        element.preview ? (
          <div className="bg-black/10 dark:bg-white/10 hover:bg-black/15 dark:hover:bg-white/15 rounded-2xl px-6 py-4">
            {element.preview}
          </div>
        ) : (
          <div
            className={cn(
              'relative rounded-2xl px-4 py-5 flex flex-col items-center justify-center text-center h-full',
              'bg-black/10 dark:bg-white/10 hover:bg-black/15 dark:hover:bg-white/15',
              'cursor-grab'
            )}
          >
            <span>{createElement(getElementIcon(element.type), { size: 40 })}</span>
            {/*<span className="text-md leading-tight mt-2">{element.name}</span>*/}
          </div>
        )
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
  }),
};

export default DraggableElementWrapper;
