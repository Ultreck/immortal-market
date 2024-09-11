import { GiAfrica, GiEarthAfricaEurope, GiNigeria, GiSouthAmerica } from 'react-icons/gi';
import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import { Button } from '@nextui-org/react';
import { RiArrowLeftSLine } from 'react-icons/ri';
import PropTypes from 'prop-types';

const elements = [
  {
    id: 'chart-a-map',
    type: 'chart-a-map',
    name: 'Map Chart',
    data: {
      type: 'chart-a-map',
      text: 'Map Chart',
      width: 400,
      height: 400,
      showLabels: true,
      showValues: true,
      backgroundColor: '#f9fafb',
      style: { opacity: 1 },
      config: {
        data: [],
        colors: [
          '#f9fafb',
          '#c2410c',
          '#15803d',
          '#1d4ed8',
          '#4d7c0f',
          '#be185d',
          '#0369a1',
          '#5a189a',
          '#b91c1c',
          '#a16207',
          '#b45309',
          '#047857',
          '#374151',
          '#404E4D',
          '#5D737E',
          '#A4036F',
        ],
        keys: { name: 'label', data: 'value' },
      },
    },
    preview: (
      <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 bg-white/5 rounded-2xl p-4">
        <GiNigeria className="w-full h-full" />
      </div>
    ),
  },
  {
    id: 'chart-a-europe-map',
    type: 'chart-a-europe-map',
    name: 'Europe-map Chart',
    data: {
      type: 'chart-a-europe-map',
      text: 'Europe-map Chart',
      width: 500,
      height: 500,
      showLabels: true,
      showValues: true,
      backgroundColor: '#f9fafb',
      style: { opacity: 1 },
      config: {
        data: [],
        colors: [
          '#f9fafb',
          '#c2410c',
          '#15803d',
          '#1d4ed8',
          '#4d7c0f',
          '#be185d',
          '#0369a1',
          '#5a189a',
          '#b91c1c',
          '#a16207',
          '#b45309',
          '#047857',
          '#374151',
          '#404E4D',
          '#5D737E',
          '#A4036F',
        ],
      },
    },
    preview: (
      <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 bg-white/5 rounded-2xl p-4">
        <GiEarthAfricaEurope className="w-full h-full" />
      </div>
    ),
  },
  {
    id: 'chart-a-africa-map',
    type: 'chart-a-africa-map',
    name: 'Africa-map Chart',
    data: {
      type: 'chart-a-africa-map',
      text: 'Africa-map Chart',
      width: 500,
      height: 500,
      showLabels: true,
      showValues: true,
      backgroundColor: '#f9fafb',
      style: { opacity: 1 },
      config: {
        data: [],
        colors: [
          '#f9fafb',
          '#c2410c',
          '#15803d',
          '#1d4ed8',
          '#4d7c0f',
          '#be185d',
          '#0369a1',
          '#5a189a',
          '#b91c1c',
          '#a16207',
          '#b45309',
          '#047857',
          '#374151',
          '#404E4D',
          '#5D737E',
          '#A4036F',
        ],
      },
    },
    preview: (
      <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 bg-white/5 rounded-2xl p-4">
        <GiAfrica className="w-full h-full" />
      </div>
    ),
  },
  {
    id: 'chart-a-north-america-map',
    type: 'chart-a-north-america-map',
    name: 'North-america-map Chart',
    data: {
      type: 'chart-a-north-america-map',
      text: 'North-america-map Chart',
      width: 500,
      height: 500,
      showLabels: true,
      showValues: true,
      backgroundColor: '#f9fafb',
      style: { opacity: 1 },
      config: {
        data: [],
        colors: [
          '#f9fafb',
          '#c2410c',
          '#15803d',
          '#1d4ed8',
          '#4d7c0f',
          '#be185d',
          '#0369a1',
          '#5a189a',
          '#b91c1c',
          '#a16207',
          '#b45309',
          '#047857',
          '#374151',
          '#404E4D',
          '#5D737E',
          '#A4036F',
        ],
      },
    },
    preview: (
      <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 bg-white/5 rounded-2xl p-4">
        <GiSouthAmerica className="w-full h-full" />
      </div>
    ),
  },
];

const Maps = ({ onBack }) => {
  return (
    <>
      <div className="flex items-center space-x-3 mb-6">
        <Button variant="bordered" radius="full" size="sm" isIconOnly onClick={onBack}>
          <RiArrowLeftSLine size="20" />
        </Button>
        <h3 className="text-base font-medium">Maps</h3>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {elements.map((element) => {
          return <DraggableElementWrapper key={element.id} element={element} />;
        })}
      </div>
    </>
  );
};

Maps.propTypes = {
  onBack: PropTypes.func.isRequired,
};

export default Maps;
