import { GiAfrica, GiEarthAfricaEurope, GiNigeria, GiSouthAmerica } from 'react-icons/gi';
import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import { Button } from '@nextui-org/react';
import { RiArrowLeftSLine } from 'react-icons/ri';
import PropTypes from 'prop-types';

const elements = [
  {
    id: 'map-nigeria',
    data: {
      type: 'map',
      text: 'Map',
      width: 400,
      height: 400,
      style: {
        opacity: 1,
      },
      config: {
        data: [],
        name: 'nigeria',
        fill: '#f9fafb',
        stroke: '#333',
        showLabels: true,
        showValues: true,
        labelsCount: 1,
      },
    },
    preview: (
      <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
        <GiNigeria className="w-full h-full" />
      </div>
    ),
  },
  {
    id: 'map-europe',
    data: {
      type: 'map',
      text: 'Europe',
      width: 500,
      height: 500,
      style: { opacity: 1 },
      config: {
        data: [],
        name: 'europe',
        fill: '#f9fafb',
        stroke: '#333',
        showLabels: true,
        showValues: true,
        labelsCount: 1,
      },
    },
    preview: (
      <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
        <GiEarthAfricaEurope className="w-full h-full" />
      </div>
    ),
  },
  {
    id: 'map-africa',
    data: {
      type: 'map',
      text: 'Africa',
      width: 500,
      height: 500,
      style: { opacity: 1 },
      config: {
        data: [],
        name: 'africa',
        fill: '#f9fafb',
        stroke: '#333',
        showLabels: true,
        showValues: true,
        labelsCount: 1,
      },
    },
    preview: (
      <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
        <GiAfrica className="w-full h-full" />
      </div>
    ),
  },
  {
    id: 'map-north-america',
    data: {
      type: 'map',
      text: 'North America',
      width: 500,
      height: 500,
      style: { opacity: 1 },
      config: {
        data: [],
        name: 'north-america',
        fill: '#f9fafb',
        stroke: '#333',
        showLabels: true,
        showValues: true,
        labelsCount: 1,
      },
    },
    preview: (
      <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
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
