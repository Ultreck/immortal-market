import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';

const elements = [
  {
    id: 'data-1',
    data: {
      type: 'data',
      text: 'Data',
      width: 150,
      height: 100,
      style: {},
      config: {
        column: 'default',
        group: 'average',
        order: 'top-1',
        type: 'number',
        decimal: '2',
        unit: '%',
        words: 20,
        content: '25.00',
      },
    },
    preview: (
      <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 border border-default-200 rounded-2xl p-6">
        <p className="text-2xl">25.00%</p>
      </div>
    ),
  },
  {
    id: 'data-2',
    data: {
      type: 'data',
      text: 'Data',
      width: 150,
      height: 100,
      style: {},
      config: {
        column: 'default',
        group: 'average',
        order: 'top-1',
        type: 'text',
        decimal: null,
        unit: null,
        words: 150,
        content:
          'lorem ipsum dolor sit amet consectetur adipisicing elit. fugiat, quidem, voluptate, doloremque, quos, aspernatur',
      },
    },
    preview: (
      <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 border border-default-200 rounded-2xl p-6">
        <p className="text-base">
          lorem ipsum dolor sit amet consectetur adipisicing elit. fugiat, quidem, voluptate, doloremque, quos,
          aspernatur
        </p>
      </div>
    ),
  },
];

const DataTags = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {elements.map((element) => {
        return (
          <div key={element.id}>
            <DraggableElementWrapper element={element} />
          </div>
        );
      })}
    </div>
  );
};

export default DataTags;
