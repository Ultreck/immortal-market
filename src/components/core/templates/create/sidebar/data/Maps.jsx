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
import { MapAlgeriaPreview } from '@/components/core/templates/create/elements/maps/MapAlgeria.jsx';
import { MapAlbaniaPreview } from '@/components/core/templates/create/elements/maps/MapAlbania.jsx';
import { MapAngolaPreview } from '@/components/core/templates/create/elements/maps/MapAngola.jsx';
import { MapSouthAmericaPreview } from '@/components/core/templates/create/elements/maps/MapSouthAmerica.jsx';
import { MapAfghanistanPreview } from '@/components/core/templates/create/elements/maps/MapAfghanistan.jsx';
import { MapAustriaPreview } from '@/components/core/templates/create/elements/maps/MapAustria.jsx';
import { MapArgentinaPreview } from '@/components/core/templates/create/elements/maps/MapArgentina.jsx';
import { MapAzerbaijanPreview } from '@/components/core/templates/create/elements/maps/MapAzerbaijan.jsx';

const names = [
  'nigeria',
  'nigeria-regions',
  'africa',
  'europe',
  'north-america',
  'south-america',
  'world',
  'asia',
  'oceanic',
  'algeria',
  'angola',
  'albania',
  'afghanistan',
  'austria',
  'argentina',
  'azerbaijan',
];

const previews = {
  nigeria: <MapNigeriaPreview />,
  'nigeria-regions': <MapNigeriaRegionsPreview />,
  africa: <MapAfricaPreview />,
  europe: <MapEuropePreview />,
  'north-america': <MapNorthAmericaPreview />,
  'south-america': <MapSouthAmericaPreview />,
  world: <MapWorldPreview />,
  asia: <MapAsiaPreview />,
  oceanic: <MapOceanicPreview />,
  algeria: <MapAlgeriaPreview />,
  angola: <MapAngolaPreview />,
  albania: <MapAlbaniaPreview />,
  afghanistan: <MapAfghanistanPreview />,
  austria: <MapAustriaPreview />,
  argentina: <MapArgentinaPreview />,
  azerbaijan: <MapAzerbaijanPreview />,
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
