import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import { Button } from '@nextui-org/react';
import { RiArrowLeftSLine } from 'react-icons/ri';
import PropTypes from 'prop-types';
import { GiAfrica, GiEarthAfricaEurope, GiNigeria, GiSouthAmerica } from 'react-icons/gi';
import { BiWorld } from 'react-icons/bi';
import { FaEarthAsia } from "react-icons/fa6";

const names = ['nigeria', 'africa', 'europe', 'north-america', 'world', 'asia',];

const previews = {
  nigeria: (
    <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
      <GiNigeria className="w-full h-full" />
    </div>
  ),
  africa: (
    <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
      <GiAfrica className="w-full h-full" />
    </div>
  ),
  europe: (
    <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
      <GiEarthAfricaEurope className="w-full h-full" />
    </div>
  ),
  'north-america': (
    <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
      <GiSouthAmerica className="w-full h-full" />
    </div>
  ),
  world: (
    <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
      <BiWorld className="w-full h-full" />
    </div>
  ),
  asia: (
    <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
      <FaEarthAsia className="w-full h-full" />
    </div>
  ),
};

const elements = names.map((name) => ({
  id: `map-${name}`,
  data: {
    type: 'map',
    text: name,
    width: 400,
    height: 400,
    style: { opacity: 1 },
    config: {
      data: [],
      name,
      fill: '#f9fafb',
      stroke: '#333',
      showLabels: true,
      showValues: true,
      labelsCount: 1,
    },
  },
  preview: previews[name],
}));

const Maps = ({ onBack }) => {
  return (
    <>
      {/* <div className="flex items-center mb-6 space-x-3"> */}
        {/* <Button variant="bordered" radius="full" size="sm" isIconOnly onClick={onBack}>
          <RiArrowLeftSLine size="20" />
        </Button> */}
        {/* <h3 className="text-base font-medium">Maps</h3> */}
      {/* </div> */}
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
