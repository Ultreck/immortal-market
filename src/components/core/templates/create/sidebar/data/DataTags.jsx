import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import { capitalize } from '@/lib/utils.js';
import PropTypes from 'prop-types';
import { Button } from '@heroui/react';
import { TbChevronLeft } from 'react-icons/tb';
import { getElementDefaultStyle } from '@/lib/elements.js';

const groups = [
  { key: 'rank', label: 'Rank' },
  { key: 'sum', label: 'Sum' },
  { key: 'average', label: 'Average' },
  { key: 'min', label: 'Min' },
  { key: 'max', label: 'Max' },
];

const orders = [
  { key: 'all', label: 'All' },
  { key: 'top-1', label: 'Top 1' },
  { key: 'top-2', label: 'Top 2' },
  { key: 'top-3', label: 'Top 3' },
  { key: 'top-4', label: 'Top 4' },
  { key: 'top-5', label: 'Top 5' },
  { key: 'top-6', label: 'Top 6' },
  { key: 'top-7', label: 'Top 7' },
  { key: 'bottom-3', label: 'Bottom 3' },
  { key: 'bottom-2', label: 'Bottom 2' },
  { key: 'bottom-1', label: 'Bottom 1' },
];

const numbers = [
  ...groups
    .map((group) => {
      return orders.map((order) => ({
        type: 'number',
        combination: group.key + '/' + order.key,
      }));
    })
    .flat(),
].map((el) => {
  const [group, order] = el.combination.split('/');
  const content = `${capitalize(group)} (${capitalize(order.replace('-', ' '))})`;
  return {
    id: `data-${group}-${order}`,
    data: {
      type: 'data-tag',
      text: 'Data',
      width: 150,
      height: 100,
      style: getElementDefaultStyle({ type: 'data-tag' }),
      config: {
        ...el,
        column: 'default',
        decimal: 0,
        unit: 'percent',
        words: 20,
        content,
      },
    },
    preview: (
      <div className="text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 border border-default-200 rounded-2xl px-5 py-2">
        {content}
      </div>
    ),
  };
});

const texts = [
  {
    type: 'text',
    compare: [{ combination: 'average/top-2' }, { combination: 'sum/top-2' }],
  },
  {
    type: 'text',
    compare: [{ combination: 'average/top-3' }, { combination: 'sum/top-3' }],
  },
  {
    type: 'text',
    compare: [{ combination: 'average/top-4' }, { combination: 'sum/top-4' }],
  },
].map((el) => {
  const [g1, o1] = el.compare[0].combination.split('/');
  const [g2, o2] = el.compare[1].combination.split('/');
  const content = `Comparison of ${capitalize(g1)} (${capitalize(o1.replace('-', ' '))}) and ${capitalize(g2)} (${capitalize(o2.replace('-', ' '))})`;
  return {
    id: `data-${g1}-${o1}-${g2}-${o2}`,
    data: {
      type: 'data-tag',
      text: 'Data',
      width: 150,
      height: 100,
      style: getElementDefaultStyle({ type: 'data-tag' }),
      config: {
        ...el,
        column: 'default',
        decimal: 0,
        unit: '',
        words: 20,
        content,
      },
    },
    preview: (
      <div className="text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 border border-default-200 rounded-2xl px-5 py-2">
        {content}
      </div>
    ),
  };
});

const elements = [...texts, ...numbers];

const DataTags = ({ mini = false, onBack }) => {
  return (
    <>
      {mini ? (
        <div>
          <div className="grid grid-cols-1 gap-4">
            {[...texts.slice(0, 1), ...numbers.slice(0, 2)].map((element) => {
              return (
                <div key={element.id}>
                  <DraggableElementWrapper element={element} />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-center space-x-3 mb-8">
            <Button onPress={onBack} variant="bordered" radius="full" isIconOnly size="sm">
              <TbChevronLeft size="20" />
            </Button>
            <h2 className="text-xl font-semibold">Data tags</h2>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {elements.map((element) => {
              return <DraggableElementWrapper key={element.id} element={element} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};

DataTags.propTypes = {
  mini: PropTypes.bool,
  onBack: PropTypes.func,
};

export default DataTags;
