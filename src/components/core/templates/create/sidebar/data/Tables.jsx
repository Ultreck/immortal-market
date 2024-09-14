import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import { Button, Image } from '@nextui-org/react';
import { RiArrowLeftSLine } from 'react-icons/ri';
import PropTypes from 'prop-types';

const colors = [
  '#E66B5B',
  '#1D9085',
  '#264A5A',
  '#E8C22C',
  '#F6881F',
  '#2673D9',
  '#2BA385',
  '#E6A333',
  '#AB52D9',
  '#D93566',
];

const elements = [
  {
    theme: 'basic',
    data: [
      ['Heading 1', 'Heading 2', 'Heading 3', 'Heading 4'],
      ['Cell 1', 'Cell 2', 'Cell 3', 'Cell 4'],
      ['Cell 4', 'Cell 5', 'Cell 6', 'Cell 7'],
    ],
    colors: colors.slice(0, 1),
  },
  {
    theme: 'basic-striped',
    data: [
      ['Heading 1', 'Heading 2', 'Heading 3', 'Heading 4'],
      ['Cell 1', 'Cell 2', 'Cell 3', 'Cell 4'],
      ['Cell 4', 'Cell 5', 'Cell 6', 'Cell 7'],
    ],
    colors: colors.slice(0, 1),
  },
  {
    theme: 'trend-analysis',
    data: [
      ['Trend Analysis'],
      ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
      ['2020', 'Cell 2', 'Cell 3', 'Cell 4', 'Cell 5', 'Cell 6'],
      ['2021', 'Cell 2', 'Cell 3', 'Cell 4', 'Cell 5', 'Cell 6'],
      ['2022', 'Cell 2', 'Cell 3', 'Cell 4', 'Cell 5', 'Cell 6'],
      ['2023', 'Cell 2', 'Cell 3', 'Cell 4', 'Cell 5', 'Cell 6'],
    ],
    colors: colors.slice(0, 2),
  },
  {
    theme: 'marketing-report',
    data: [
      ['', 'Feb', 'March', 'April', 'May', 'June'],
      ['2020', 'Cell 2', 'Cell 3', 'Cell 4', 'Cell 5', 'Cell 6'],
      ['2021', 'Cell 2', 'Cell 3', 'Cell 4', 'Cell 5', 'Cell 6'],
      ['2022', 'Cell 2', 'Cell 3', 'Cell 4', 'Cell 5', 'Cell 6'],
      ['2023', 'Cell 2', 'Cell 3', 'Cell 4', 'Cell 5', 'Cell 6'],
    ],
    colors: colors.slice(0, 2),
  },
].map((i) => {
  return {
    id: `table-${i.theme}`,
    category: 'basic',
    data: {
      type: 'table',
      text: 'Table',
      width: 400,
      height: 200,
      style: {
        fontSize: 14,
        opacity: 1,
        animationDuration: '1s',
      },
      config: {
        theme: i.theme,
        colors: i.colors,
        data: i.data,
      },
    },
    preview: (
      <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 rounded-xl overflow-hidden">
        <Image
          src={`/images/previews/tables/${i.theme}.png`}
          alt="Table"
          className="w-full rounded-lg scale-[1.01]"
          width={400}
          height={400}
        />
      </div>
    ),
  };
});

const Tables = ({ onBack }) => {
  return (
    <div>
      <div className="flex items-center space-x-3 mb-6">
        <Button variant="bordered" radius="full" size="sm" isIconOnly onClick={onBack}>
          <RiArrowLeftSLine size="20" />
        </Button>
        <h3 className="text-base font-medium">Tables</h3>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {elements.map((element) => {
          return <DraggableElementWrapper key={element.id} element={element} />;
        })}
      </div>
    </div>
  );
};

Tables.propTypes = {
  onBack: PropTypes.func.isRequired,
};

export default Tables;
