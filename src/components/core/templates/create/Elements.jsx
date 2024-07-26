import { DragOverlay, useDraggable } from '@dnd-kit/core';
import { capitalize, cn, mergeRefs } from '@/lib/utils.js';
import PropTypes from 'prop-types';
import { createElement } from 'react';
import elements, { icons } from '@/lib/elements.jsx';
import { Image } from '@nextui-org/react';

const Elements = () => {
  const groups = elements.reduce((acc, element) => {
    const group = acc.find((group) => group.key === element.group);
    if (group) {
      group.elements.push(element);
    } else {
      acc.push({
        key: element.group,
        title: capitalize(element.group),
        elements: [element],
      });
    }
    return acc;
  }, []);

  const images = [
    'https://picsum.photos/id/1005/400/300',
    'https://picsum.photos/id/1006/400/300',
    'https://picsum.photos/id/1008/400/300',
    'https://picsum.photos/id/1009/400/300',
    'https://picsum.photos/id/1010/400/300',
    'https://picsum.photos/id/1011/400/300',
    'https://picsum.photos/id/1012/400/300',
    'https://picsum.photos/id/1013/400/300',
  ].map((src) => ({
    id: src,
    type: 'image',
    name: 'Image',
    icon: icons['image'],
    data: {
      type: 'image',
      text: 'Image',
      width: 400,
      height: 300,
      src,
      style: {
        borderWidth: 0,
        borderColor: '#000',
        opacity: 1,
        borderRadius: 0,
      },
      tools: ['border', 'border-radius', 'opacity'],
    },
  }));

  return (
    <div className="space-y-8">
      {groups.map((group) => (
        <div key={group.key}>
          <h2 className="text-lg font-semibold mb-6">{capitalize(group.title)}</h2>
          <div className="grid grid-cols-2 gap-4">
            {group.elements.map((element) => (
              <DraggableElement
                key={element.id}
                element={element}
                className={cn(
                  'relative bg-default-200 dark:bg-default-50 border border-default-300 dark:border-default-100 hover:bg-default-200 dark:hover:bg-default-100 rounded-2xl px-4 py-5',
                  { 'col-span-2 bg-transparent dark:bg-transparent text-default-700 px-6 py-4': element.preview },
                  { 'border-0': !element.preview }
                )}
                content={
                  element.preview || (
                    <div className="cursor-grab flex flex-col items-center justify-center pointer-events-none text-center h-full">
                      <span>{createElement(element.icon, { size: 20 })}</span>
                      <span className="text-sm leading-tight mt-2">{element.name}</span>
                    </div>
                  )
                }
                dragging={
                  element.preview ? (
                    <div className="px-6 py-6 text-default-100">{element.preview}</div>
                  ) : (
                    <div className="bg-default-200/60 dark:bg-default-50/80 flex items-center space-x-2 px-4 py-2 w-max rounded-2xl">
                      {createElement(element.icon, { size: 20 })}
                      <span className="text-sm">{element.name}</span>
                    </div>
                  )
                }
              />
            ))}
          </div>
        </div>
      ))}
      <div>
        <h2 className="text-lg font-semibold mb-6">Image</h2>
        <div className="grid grid-cols-2 gap-4">
          {images.map((image) => (
            <DraggableElement
              key={image.id}
              element={image}
              className="overflow-hidden"
              content={
                <Image
                  src={image.data.src}
                  alt={image.data.text}
                  className="w-full h-full object-cover rounded-2xl cursor-grab aspect-square"
                />
              }
              dragging={
                <Image src={image.data.src} alt={image.data.text} className="w-full h-full object-cover rounded-2xl" />
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const DraggableElement = ({ element, content, dragging, className }) => {
  const { attributes, listeners, setNodeRef, isDragging, setActivatorNodeRef } = useDraggable({
    id: element.id,
    data: element.data,
  });

  return (
    <div className={className} ref={mergeRefs(setNodeRef, setActivatorNodeRef)} {...listeners} {...attributes}>
      {content}
      <DragOverlay zIndex={1} dropAnimation={null}>
        {isDragging && dragging}
      </DragOverlay>
    </div>
  );
};

DraggableElement.propTypes = {
  element: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.any.isRequired,
    data: PropTypes.shape({
      type: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }),
  }),
  content: PropTypes.any,
  dragging: PropTypes.any,
  className: PropTypes.string,
};

export default Elements;
