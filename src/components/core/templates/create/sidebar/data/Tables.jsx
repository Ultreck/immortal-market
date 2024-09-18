import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import { Button } from '@nextui-org/react';
import { RiArrowLeftSLine } from 'react-icons/ri';
import PropTypes from 'prop-types';
import { TableContentPreview } from '@/components/core/templates/create/elements/Table.jsx';

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
    data: [
      {
        cells: [
          { value: 'Key 1', colSpan: 1, rowSpan: 1 },
          { value: 'Value 1', colSpan: 1, rowSpan: 1 },
        ],
      },
      {
        cells: [
          { value: 'Key 2', colSpan: 1, rowSpan: 1 },
          { value: 'Value 2', colSpan: 1, rowSpan: 1 },
        ],
      },
      {
        cells: [
          { value: 'Key 3', colSpan: 1, rowSpan: 1 },
          { value: 'Value 3', colSpan: 1, rowSpan: 1 },
        ],
      },
      {
        cells: [
          { value: 'Key 4', colSpan: 1, rowSpan: 1 },
          { value: 'Value 4', colSpan: 1, rowSpan: 1 },
        ],
      },
    ],
    colors: [],
    scheme: [],
  },
  {
    data: [
      {
        cells: [
          { value: 'Heading 1', colSpan: 1, rowSpan: 1 },
          { value: 'Heading 2', colSpan: 1, rowSpan: 1 },
          { value: 'Heading 3', colSpan: 1, rowSpan: 1 },
          { value: 'Heading 4', colSpan: 1, rowSpan: 1 },
        ],
      },
      {
        cells: [
          { value: 'Cell 1', colSpan: 1, rowSpan: 1 },
          { value: 'Cell 2', colSpan: 1, rowSpan: 1 },
          { value: 'Cell 3', colSpan: 1, rowSpan: 1 },
          { value: 'Cell 4', colSpan: 1, rowSpan: 1 },
        ],
      },
      {
        cells: [
          { value: 'Cell 4', colSpan: 1, rowSpan: 1 },
          { value: 'Cell 5', colSpan: 1, rowSpan: 1 },
          { value: 'Cell 6', colSpan: 1, rowSpan: 1 },
          { value: 'Cell 7', colSpan: 1, rowSpan: 1 },
        ],
      },
      {
        cells: [
          { value: 'Cell 4', colSpan: 1, rowSpan: 1 },
          { value: 'Cell 5', colSpan: 1, rowSpan: 1 },
          { value: 'Cell 6', colSpan: 1, rowSpan: 1 },
          { value: 'Cell 7', colSpan: 1, rowSpan: 1 },
        ],
      },
    ],
    colors: colors.slice(0, 1),
    scheme: ['r0/0'],
  },
  {
    data: [
      {
        cells: [
          { value: 'S/N', colSpan: 1, rowSpan: 1 },
          { value: 'Heading 1', colSpan: 1, rowSpan: 1 },
          { value: 'Heading 2', colSpan: 1, rowSpan: 1 },
          { value: 'Heading 3', colSpan: 1, rowSpan: 1 },
        ],
      },
      {
        cells: [
          { value: '1', colSpan: 1, rowSpan: 1 },
          { value: 'Cell 2', colSpan: 1, rowSpan: 1 },
          { value: 'Cell 3', colSpan: 1, rowSpan: 1 },
          { value: 'Cell 4', colSpan: 1, rowSpan: 1 },
        ],
      },
      {
        cells: [
          { value: '2', colSpan: 1, rowSpan: 1 },
          { value: 'Cell 5', colSpan: 1, rowSpan: 1 },
          { value: 'Cell 6', colSpan: 1, rowSpan: 1 },
          { value: 'Cell 7', colSpan: 1, rowSpan: 1 },
        ],
      },
      {
        cells: [
          { value: '3', colSpan: 1, rowSpan: 1 },
          { value: 'Cell 5', colSpan: 1, rowSpan: 1 },
          { value: 'Cell 6', colSpan: 1, rowSpan: 1 },
          { value: 'Cell 7', colSpan: 1, rowSpan: 1 },
        ],
      },
    ],
    colors: colors.slice(1, 3),
    scheme: ['r0/0', 'c0/1'],
  },
  {
    data: [
      {
        cells: [
          { value: '', colSpan: 1, rowSpan: 1 },
          { value: 'Heading 1', colSpan: 1, rowSpan: 1 },
          { value: 'Heading 2', colSpan: 1, rowSpan: 1 },
          { value: 'Heading 3', colSpan: 1, rowSpan: 1 },
          { value: 'Heading 4', colSpan: 1, rowSpan: 1 },
          { value: 'Heading 5', colSpan: 1, rowSpan: 1 },
        ],
      },
      {
        cells: [
          { value: '1', colSpan: 1, rowSpan: 2 },
          { value: 'Cell 1', colSpan: 1, rowSpan: 1 },
          { value: 'Cell 2', colSpan: 1, rowSpan: 1 },
          { value: 'Cell 3', colSpan: 1, rowSpan: 1 },
          { value: 'Cell 4', colSpan: 1, rowSpan: 1 },
          { value: 'Cell 5', colSpan: 1, rowSpan: 1 },
        ],
      },
      {
        cells: [
          { value: 'Cell 8', colSpan: 1, rowSpan: 1 },
          { value: 'Cell 9', colSpan: 1, rowSpan: 1 },
          { value: 'Cell 10', colSpan: 1, rowSpan: 1 },
          { value: 'Cell 11', colSpan: 1, rowSpan: 1 },
          { value: 'Cell 12', colSpan: 1, rowSpan: 1 },
        ],
      },
      {
        cells: [
          { value: '1', colSpan: 1, rowSpan: 2 },
          { value: 'Cell 1', colSpan: 1, rowSpan: 1 },
          { value: 'Cell 2', colSpan: 1, rowSpan: 1 },
          { value: 'Cell 3', colSpan: 1, rowSpan: 1 },
          { value: 'Cell 4', colSpan: 1, rowSpan: 1 },
          { value: 'Cell 5', colSpan: 1, rowSpan: 1 },
        ],
      },
      {
        cells: [
          { value: 'Cell 8', colSpan: 1, rowSpan: 1 },
          { value: 'Cell 9', colSpan: 1, rowSpan: 1 },
          { value: 'Cell 10', colSpan: 1, rowSpan: 1 },
          { value: 'Cell 11', colSpan: 1, rowSpan: 1 },
          { value: 'Cell 12', colSpan: 1, rowSpan: 1 },
        ],
      },
    ],
    colors: colors.slice(3, 5),
    scheme: ['r0/0', 'c0/1'],
  },
  {
    data: [
      {
        cells: [
          { value: '', colSpan: 1, rowSpan: 1 },
          { value: 'Title 1', colSpan: 2, rowSpan: 1 },
          { value: 'Title 2', colSpan: 2, rowSpan: 1 },
          { value: 'Title 3', colSpan: 2, rowSpan: 1 },
        ],
      },
      {
        cells: [
          { value: '', colSpan: 1, rowSpan: 1 },
          { value: 'Heading 1', colSpan: 1, rowSpan: 1 },
          { value: 'Heading 2', colSpan: 1, rowSpan: 1 },
          { value: 'Heading 3', colSpan: 1, rowSpan: 1 },
          { value: 'Heading 4', colSpan: 1, rowSpan: 1 },
          { value: 'Heading 5', colSpan: 1, rowSpan: 1 },
          { value: 'Heading 6', colSpan: 1, rowSpan: 1 },
        ],
      },
      {
        cells: [
          { value: 'Label 1', colSpan: 1, rowSpan: 1 },
          { value: 'Cell 1', colSpan: 1, rowSpan: 1 },
          { value: 'Cell 2', colSpan: 1, rowSpan: 1 },
          { value: 'Cell 3', colSpan: 1, rowSpan: 1 },
          { value: 'Cell 4', colSpan: 1, rowSpan: 1 },
          { value: 'Cell 5', colSpan: 1, rowSpan: 1 },
          { value: 'Cell 6', colSpan: 1, rowSpan: 1 },
        ],
      },
      {
        cells: [
          { value: 'Label 2', colSpan: 1, rowSpan: 1 },
          { value: 'Cell 1', colSpan: 1, rowSpan: 1 },
          { value: 'Cell 2', colSpan: 1, rowSpan: 1 },
          { value: 'Cell 3', colSpan: 1, rowSpan: 1 },
          { value: 'Cell 4', colSpan: 1, rowSpan: 1 },
          { value: 'Cell 5', colSpan: 1, rowSpan: 1 },
          { value: 'Cell 6', colSpan: 1, rowSpan: 1 },
        ],
      },
      {
        cells: [
          { value: 'Label 2', colSpan: 1, rowSpan: 1 },
          { value: 'Cell 1', colSpan: 1, rowSpan: 1 },
          { value: 'Cell 2', colSpan: 1, rowSpan: 1 },
          { value: 'Cell 3', colSpan: 1, rowSpan: 1 },
          { value: 'Cell 4', colSpan: 1, rowSpan: 1 },
          { value: 'Cell 5', colSpan: 1, rowSpan: 1 },
          { value: 'Cell 6', colSpan: 1, rowSpan: 1 },
        ],
      },
    ],
    colors: colors.slice(5, 6),
    scheme: ['r0/0', 'r1/0'],
  },
].map((item, i) => {
  return {
    id: `table-${i}`,
    category: 'basic',
    data: {
      type: 'table',
      text: 'Table',
      width: 500,
      height: 300,
      style: {
        fontSize: 14,
        opacity: 1,
        animationDuration: '1s',
      },
      config: {
        scheme: item.scheme,
        colors: item.colors,
        data: item.data,
      },
    },
    preview: (
      <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 rounded-lg h-full">
        <TableContentPreview
          element={{
            config: {
              data: item.data,
              scheme: item.scheme,
              colors: item.colors,
            },
          }}
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
          return (
            <div key={element.id} className="aspect-[16/8]">
              <DraggableElementWrapper element={element} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

Tables.propTypes = {
  onBack: PropTypes.func.isRequired,
};

export default Tables;
