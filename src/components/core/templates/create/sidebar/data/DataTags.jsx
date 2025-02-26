import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import PropTypes from 'prop-types';
import { Button } from '@heroui/react';
import { TbChevronLeft } from 'react-icons/tb';
import { getElementDefaultStyle } from '@/lib/elements.js';
import { cn } from '@/lib/utils';

const styles = {
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 16,
  },
  number: {
    fontSize: 24,
  },
  label: {
    fontSize: 16,
  },
  description: {
    fontSize: 16,
  },
};

const elements = [
  {
    name: 'Title',
    content: 'Lorem ipsum dolor sit',
  },
  {
    name: 'Body',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci provident consequuntur fugit harum! Ratione magni animi repellat doloribus nisi? Praesentium.`,
  },
  {
    name: 'Number',
    content: '00',
  },
  {
    name: 'Label',
    content: 'Label',
  },
  {
    name: 'Description',
    content: 'Description',
  },
].map((item) => {
  return {
    id: item.name,
    data: {
      type: 'data-tag',
      text: 'Data Tag',
      width: 150,
      height: 70,
      style: {
        ...getElementDefaultStyle({ type: 'data-tag' }),
        ...(styles[item.name.toLowerCase()] || {}),
      },
      config: {
        type: item.name.toLowerCase(),
        table: 'default',
        column: 'default',
        content: item.content,
      },
    },
    preview: (
      <div className="text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 border border-default-200 rounded-2xl px-5 py-2">
        {item.name}
      </div>
    ),
  };
});

const DataTags = ({ mini = false, onBack }) => {
  return (
    <>
      {mini ? (
        <div>
          <div className="grid grid-cols-1 gap-4">
            {elements.slice(0, 4).map((element) => {
              return (
                <div key={element.id}>
                  <DraggableElementWrapper element={element} />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <>
          <div
            className={cn('flex items-center space-x-3 mb-4 bg-white/[.07] rounded-full px-2 py-1', {
              'px-5 py-2': !onBack,
            })}
          >
            {!!onBack && (
              <Button onPress={onBack} variant="light" radius="full" isIconOnly size="sm">
                <TbChevronLeft size="20" />
              </Button>
            )}
            <h2 className="text-base font-semibold">Data tags</h2>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {elements.map((element) => {
              return <DraggableElementWrapper key={element.id} element={element} />;
            })}
          </div>
        </>
      )}
    </>
  );
};

DataTags.propTypes = {
  mini: PropTypes.bool,
  onBack: PropTypes.func,
};

export default DataTags;
