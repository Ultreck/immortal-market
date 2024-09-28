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
import { MapBeninPreview } from '@/components/core/templates/create/elements/maps/MapBenin.jsx';
import { MapBangladeshPreview } from '@/components/core/templates/create/elements/maps/MapBangladesh';
import { MapBelarusPreview } from '@/components/core/templates/create/elements/maps/MapBelarus';
import { MapBermudaPreview } from '@/components/core/templates/create/elements/maps/MapBermuda';
import { MapBotswanaPreview } from '@/components/core/templates/create/elements/maps/MapBotswana';
import { MapBahrainPreview } from '@/components/core/templates/create/elements/maps/MapBahrain';
import { MapBulgariaPreview } from '@/components/core/templates/create/elements/maps/MapBulgaria';
import { MapBurkinafasoPreview } from '@/components/core/templates/create/elements/maps/MapBurkinafaso';
import { MapBurundiPreview } from '@/components/core/templates/create/elements/maps/MapBurundi';
import { MapArmeniaPreview } from '@/components/core/templates/create/elements/maps/MapArmenia.jsx';
import { MapAustraliaPreview } from '@/components/core/templates/create/elements/maps/MapAustralia.jsx';
import { MapBelgiumPreview } from '@/components/core/templates/create/elements/maps/MapBelgium.jsx';
import { MapBelizePreview } from '@/components/core/templates/create/elements/maps/MapBelize.jsx';
import { MapBhutanPreview } from '@/components/core/templates/create/elements/maps/MapBhutan.jsx';
import { MapBoliviaPreview } from '@/components/core/templates/create/elements/maps/MapBolivia.jsx';
import { MapBosniaAndHerzegovinaPreview } from '@/components/core/templates/create/elements/maps/MapBosniaAndHerzegovina.jsx';
import { MapBrazilPreview } from '@/components/core/templates/create/elements/maps/MapBrazil.jsx';
import { MapBahamasPreview } from '@/components/core/templates/create/elements/maps/MapBahamas.jsx';
import { MapChadPreview } from '@/components/core/templates/create/elements/maps/MapChad.jsx';
import { MapColombiaPreview } from '@/components/core/templates/create/elements/maps/MapColombia.jsx';
import { MapCroatiaPreview } from '@/components/core/templates/create/elements/maps/MapCroatia.jsx';
import { MapCubaPreview } from '@/components/core/templates/create/elements/maps/MapCuba.jsx';
import { MapCzechRepublicPreview } from '@/components/core/templates/create/elements/maps/MapCzechRepublic.jsx';
import { MapCongoPreview } from '@/components/core/templates/create/elements/maps/MapCongo.jsx';
import { MapDominicanRepublicPreview } from '@/components/core/templates/create/elements/maps/MapDominicanRepublic.jsx';
import { MapBruneiDarussalamPreview } from '@/components/core/templates/create/elements/maps/MapBruneiDarussalam.jsx';
import { MapCaylandIslandsPreview } from '@/components/core/templates/create/elements/maps/MapCaylandIslands.jsx';
import { MapCambodiaPreview } from '@/components/core/templates/create/elements/maps/MapCambodia.jsx';
import { MapCameroonPreview } from '@/components/core/templates/create/elements/maps/MapCameroon.jsx';
import { MapCanadaPreview } from '@/components/core/templates/create/elements/maps/MapCanada.jsx';
import { MapCentralAfricanRepublicPreview } from '@/components/core/templates/create/elements/maps/MapCentralAfricanRepublic.jsx';
import { MapChilePreview } from '@/components/core/templates/create/elements/maps/MapChile.jsx';
import { MapChinaPreview } from '@/components/core/templates/create/elements/maps/MapChina.jsx';
import { MapCostaricaPreview } from '@/components/core/templates/create/elements/maps/MapCostarica';
import { MapCyprusPreview } from '@/components/core/templates/create/elements/maps/MapCyprus';
import { MapCongoDrPreview } from '@/components/core/templates/create/elements/maps/MapCongoDr';
import { MapDenmarkPreview } from '@/components/core/templates/create/elements/maps/MapDenmark';
import { MapDjiboutiPreview } from '@/components/core/templates/create/elements/maps/MapDjibouti';

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
  'benin',
  'bangladesh',
  'belarus',
  'bermuda',
  'botswana',
  'bahrain',
  'bulgaria',
  'burkinafaso',
  'burundi',
  'armenia',
  'australia',
  'belgium',
  'belize',
  'bhutan',
  'bolivia',
  'bosnia-and-aerzegovina',
  'brazil',
  'brunei-darussalam',
  'bahamas',
  'chad',
  'colombia',
  'croatia',
  'cuba',
  'czech-republic',
  'congo',
  'dominican-republic',
  'cayland-islands',
  'cambodia',
  'cameroon',
  'canada',
  'central-african-republic',
  'chile',
  'china',
  'costarica',
  'cyprus',
  'congo-dr',
  'denmark',
  'djibouti',
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
  benin: <MapBeninPreview />,
  bangladesh: <MapBangladeshPreview />,
  belarus: <MapBelarusPreview />,
  bermuda: <MapBermudaPreview />,
  botswana: <MapBotswanaPreview />,
  bahrain: <MapBahrainPreview />,
  bulgaria: <MapBulgariaPreview />,
  burkinafaso: <MapBurkinafasoPreview />,
  burundi: <MapBurundiPreview />,
  armenia: <MapArmeniaPreview />,
  australia: <MapAustraliaPreview />,
  belgium: <MapBelgiumPreview />,
  belize: <MapBelizePreview />,
  bhutan: <MapBhutanPreview />,
  bolivia: <MapBoliviaPreview />,
  'bosnia-and-aerzegovina': <MapBosniaAndHerzegovinaPreview />,
  brazil: <MapBrazilPreview />,
  'brunei-darussalam': <MapBruneiDarussalamPreview />,
  bahamas: <MapBahamasPreview />,
  chad: <MapChadPreview />,
  colombia: <MapColombiaPreview />,
  croatia: <MapCroatiaPreview />,
  cuba: <MapCubaPreview />,
  'czech-republic': <MapCzechRepublicPreview />,
  congo: <MapCongoPreview />,
  'dominican-republic': <MapDominicanRepublicPreview />,
  'cayland-islands': <MapCaylandIslandsPreview/>,
  cambodia: <MapCambodiaPreview/>,
  cameroon: <MapCameroonPreview/>,
  canada: <MapCanadaPreview/>,
  'central-african-republic' : <MapCentralAfricanRepublicPreview/>,
  chile : <MapChilePreview/>,
  china : <MapChinaPreview/>,
  costarica : <MapCostaricaPreview/>,
  cyprus : <MapCyprusPreview/>,
  'congo-dr' : <MapCongoDrPreview/>,
  'denmark' : <MapDenmarkPreview/>,
  'djibouti': <MapDjiboutiPreview/>,
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
  preview: (
    <div className="flex flex-col items-center justify-center">
      {previews[name]}
      <p className="text-sm text-center leading-tight mt-2 opacity-80">{name.split('-').map(capitalize).join(' ')}</p>
    </div>
  ),
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
