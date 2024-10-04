import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import { capitalize, kebabToWords } from '@/lib/utils.js';

const elements = [
  [
    {
      type: 'text',
      compare: [
        { order: 'top-2', group: 'average' },
        { order: 'top-2', group: 'sum' },
      ],
    },
    {
      type: 'text',
      compare: [
        { order: 'top-3', group: 'average' },
        { order: 'top-3', group: 'sum' },
      ],
    },
    {
      type: 'text',
      compare: [
        { order: 'top-4', group: 'average' },
        { order: 'top-4', group: 'sum' },
      ],
    },
  ].map((el) => {
    const c1 = el.compare[0];
    const c2 = el.compare[1];
    const content = `Comparison of ${kebabToWords(`${c1.group}(${c1.order})`)} and ${kebabToWords(`${c2.group}(${c2.order})`)}`;
    return {
      id: `data-${el.group}-${el.order}`,
      data: {
        type: 'data',
        text: 'Data',
        width: 150,
        height: 100,
        style: {},
        config: {
          ...el,
          column: 'default',
          decimal: 0,
          unit: '%',
          words: 20,
          content: content,
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 border border-default-200 rounded-2xl p-6">
          {content}
        </div>
      ),
    };
  }),
  [
    {
      type: 'number',
      combination: 'average/top-2',
    },
    {
      type: 'average',
      combination: 'sum/top-3',
    },
    {
      type: 'number',
      combination: 'sum/top-2',
    },
  ].map((el) => {
    const [group, order] = el.combination.split('/');
    const content = `${capitalize(group)} (${order})`;
    return {
      id: `data-${el.group}-${el.order}`,
      data: {
        type: 'data',
        text: 'Data',
        width: 150,
        height: 100,
        style: {},
        config: {
          ...el,
          column: 'default',
          decimal: 0,
          unit: '%',
          words: 20,
          content: content,
        },
      },
      preview: (
        <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 border border-default-200 rounded-2xl p-6">
          {content}
        </div>
      ),
    };
  }),
].flat();

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
