import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import { MapOceanicPreview } from '@/components/core/templates/create/elements/maps/MapOceanic.jsx';
import { MapNorthAmericaPreview } from '@/components/core/templates/create/elements/maps/MapNorthAmerica.jsx';
import { MapNigeriaRegionsPreview } from '@/components/core/templates/create/elements/maps/MapNigeriaRegions.jsx';
import { MapNigeriaPreview } from '@/components/core/templates/create/elements/maps/MapNigeria.jsx';
import { MapAfricaPreview } from '@/components/core/templates/create/elements/maps/MapAfrica.jsx';
import { MapEuropePreview } from '@/components/core/templates/create/elements/maps/MapEurope.jsx';
import { MapWorldPreview } from '@/components/core/templates/create/elements/maps/MapWorld.jsx';
import { MapAsiaPreview } from '@/components/core/templates/create/elements/maps/MapAsia.jsx';
import { capitalize } from '@/lib/utils.js';
import { GiAlgeria } from "react-icons/gi";
import { GiAngola } from "react-icons/gi";

const names = ['nigeria', 'nigeria-regions', 'africa', 'europe', 'north-america', 'world', 'asia', 'oceanic', 'algeria','angola','albania'];

const previews = {
  nigeria: <MapNigeriaPreview />,
  'nigeria-regions': <MapNigeriaRegionsPreview />,
  africa: <MapAfricaPreview />,
  europe: <MapEuropePreview />,
  'north-america': <MapNorthAmericaPreview />,
  world: <MapWorldPreview />,
  asia: <MapAsiaPreview />,
  oceanic: <MapOceanicPreview />,
  algeria: (
    <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
      <GiAlgeria className="w-full h-full" />
    </div>
  ),
  angola: (
    <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
      <GiAngola  className="w-full h-full" />
    </div>
  ),
  albania: (
    <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60 aspect-square">
      <GiAngola  className="w-full h-full" />
      albania
    </div>
  ),
};

const elements = names.map((name) => ({
  id: `map-${name}`,
  data: {
    type: 'map',
    text: name.split('-').map(capitalize).join(' '),
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

const Maps = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {elements.map((element) => {
        return <DraggableElementWrapper key={element.id} element={element} />;
      })}
    </div>
  );
};

export default Maps;
