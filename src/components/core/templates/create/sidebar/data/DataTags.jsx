import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import { getElementDefaultStyle } from '@/lib/elements.js';

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
      size: {
        width: 150,
        height: 70,
      },
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

elements.push({
  id: 'data-tag-group',
  data: [
    {
      type: 'icon',
      text: 'Infographic icon',
      size: {
        width: 40,
        height: 40,
      },
      position: {
        x: 0,
        y: 0,
      },
      style: {
        ...getElementDefaultStyle({ type: 'icon' }),
      },
      config: {
        name: 'bell',
        type: 'react-icons',
      },
    },
    {
      type: 'data-tag',
      text: 'Infographic value',
      size: {
        width: 150,
        height: 20,
      },
      position: {
        x: 0,
        y: 40,
      },
      style: {
        ...getElementDefaultStyle({ type: 'data-tag' }),
        fontWeight: 'bold',
        fontSize: 20,
      },
      config: {
        type: 'value',
        table: 'default',
        column: 'default',
        content: '100%',
      },
    },
    {
      type: 'data-tag',
      text: 'Infographic label',
      size: {
        width: 150,
        height: 20,
      },
      position: {
        x: 0,
        y: 60,
      },
      style: {
        ...getElementDefaultStyle({ type: 'data-tag' }),
        fontWeight: 'medium',
      },
      config: {
        type: 'label',
        table: 'default',
        column: 'default',
        content: 'Label',
      },
    },
    {
      type: 'data-tag',
      text: 'Infographic description',
      size: {
        width: 200,
        height: 40,
      },
      position: {
        x: 0,
        y: 80,
      },
      style: {
        ...getElementDefaultStyle({ type: 'data-tag' }),
        fontSize: 14,
      },
      config: {
        type: 'description',
        table: 'default',
        column: 'default',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
      },
    },
  ],
  preview: (
    <div className="text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 border border-default-200 rounded-2xl px-5 py-2">
      Infographic label
    </div>
  ),
});

const DataTags = () => {
  return (
    <div className="grid grid-cols-1 gap-3">
      {elements.map((element) => {
        return <DraggableElementWrapper key={element.id} element={element} />;
      })}
    </div>
  );
};

export default DataTags;
