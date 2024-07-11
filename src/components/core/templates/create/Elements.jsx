import { DragOverlay, useDraggable } from '@dnd-kit/core';
import { capitalize, mergeRefs } from '@/lib/utils.js';
import PropTypes from 'prop-types';
import { createElement } from 'react';
import elements, { icons } from '@/lib/elements.js';
import { Accordion, AccordionItem, Image } from '@nextui-org/react';

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
      tools: [],
    },
  }));

  return (
    <div className="px-8">
      <Accordion
        variant="light"
        className="!px-0"
        defaultSelectedKeys={[groups[0].key]}
        itemClasses={{ heading: 'pt-2', content: 'pb-6' }}
      >
        {groups.map((group) => (
          <AccordionItem key={group.key} aria-label={group.title} title={capitalize(group.title)}>
            <div className="grid grid-cols-2 gap-4">
              {group.elements.map((element) => (
                <DraggableElement
                  key={element.id}
                  element={element}
                  className="relative bg-default-200/60 hover:bg-default-200 dark:bg-default-100/80 dark:hover:bg-default-100 rounded-xl px-4 py-5"
                  content={
                    <div className="cursor-grab flex flex-col items-center justify-center pointer-events-none text-center h-full">
                      <span>{createElement(element.icon, { size: 20 })}</span>
                      <span className="text-md leading-tight mt-2">{element.name}</span>
                    </div>
                  }
                  dragging={
                    <div className="bg-default-200/60 dark:bg-default-50/80 flex items-center space-x-2 px-4 py-2 w-max rounded-xl">
                      {createElement(element.icon, { size: 20 })}
                      <span>{element.name}</span>
                    </div>
                  }
                />
              ))}
            </div>
          </AccordionItem>
        ))}
        <AccordionItem key="image" aria-label="Image" title="Image">
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
                  <Image
                    src={image.data.src}
                    alt={image.data.text}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                }
              />
            ))}
          </div>
        </AccordionItem>
      </Accordion>
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
