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
import { MapCostaricaPreview } from '@/components/core/templates/create/elements/maps/MapCostarica.jsx';
import { MapCyprusPreview } from '@/components/core/templates/create/elements/maps/MapCyprus.jsx';
import { MapCongoDrPreview } from '@/components/core/templates/create/elements/maps/MapCongoDr.jsx';
import { MapDenmarkPreview } from '@/components/core/templates/create/elements/maps/MapDenmark.jsx';
import { MapDjiboutiPreview } from '@/components/core/templates/create/elements/maps/MapDjibouti.jsx';
import { MapTaiwanPreview } from '@/components/core/templates/create/elements/maps/MapTaiwan.jsx';
import { MapTogoPreview } from '@/components/core/templates/create/elements/maps/MapTogo.jsx';
import { MapTrinidadAndTobagoPreview } from '@/components/core/templates/create/elements/maps/MapTrinidadAndTobago.jsx';
import { MapTanzaniaPreview } from '@/components/core/templates/create/elements/maps/MapTanzania.jsx';
import { MapTunisiaPreview } from '@/components/core/templates/create/elements/maps/MapTunisia.jsx';
import { MapTurkmenistanPreview } from '@/components/core/templates/create/elements/maps/MapTurkmenistan.jsx';
import { MapEritreaPreview } from '@/components/core/templates/create/elements/maps/MapEritrea.jsx';
import { MapEstoniaPreview } from '@/components/core/templates/create/elements/maps/MapEstonia.jsx';
import { MapEthiopiaPreview } from '@/components/core/templates/create/elements/maps/MapEthiopia.jsx';
import { MapTimorLestePreview } from '@/components/core/templates/create/elements/maps/MapTimorLeste.jsx';
import { MapTajikistanPreview } from '@/components/core/templates/create/elements/maps/MapTajikistan.jsx';
import { MapThailandPreview } from '@/components/core/templates/create/elements/maps/MapThailand.jsx';
import { MapTurkeyPreview } from '@/components/core/templates/create/elements/maps/MapTurkey.jsx';
import { MapEcuadorPreview } from '@/components/core/templates/create/elements/maps/MapEcuador.jsx';
import { MapEgyptPreview } from '@/components/core/templates/create/elements/maps/MapEgypt.jsx';
import { MapElSalvadorPreview } from '@/components/core/templates/create/elements/maps/MapElSalvador.jsx';
import { MapEquatorialGuineaPreview } from '@/components/core/templates/create/elements/maps/MapEquatorialGuinea.jsx';
import { MapFalklandIslandsPreview } from '@/components/core/templates/create/elements/maps/MapFalkLandIslands.jsx';
import { MapFijiPreview } from '@/components/core/templates/create/elements/maps/MapFiji.jsx';
import { MapFinlandPreview } from '@/components/core/templates/create/elements/maps/MapFinland.jsx';
import { MapFrancePreview } from '@/components/core/templates/create/elements/maps/MapFrance.jsx';
import { MapFrenchSouthernAndAntarcticLandsPreview } from '@/components/core/templates/create/elements/maps/MapFrenchSouthernAndAntarcticLands.jsx';
import { MapGabonPreview } from '@/components/core/templates/create/elements/maps/MapGabon.jsx';
import { MapGambiaPreview } from '@/components/core/templates/create/elements/maps/MapGambia.jsx';
import { MapGeorgiaPreview } from '@/components/core/templates/create/elements/maps/MapGeorgia.jsx';
import { MapGermanyPreview } from '@/components/core/templates/create/elements/maps/MapGermany.jsx';
import { MapGhanaPreview } from '@/components/core/templates/create/elements/maps/MapGhana.jsx';
import { MapGreecePreview } from '@/components/core/templates/create/elements/maps/MapGreece.jsx';
import { MapGreenlandPreview } from '@/components/core/templates/create/elements/maps/MapGreenland.jsx';
import { MapGrenadaPreview } from '@/components/core/templates/create/elements/maps/MapGrenada.jsx';
import { MapGuatemalaPreview } from '@/components/core/templates/create/elements/maps/MapGuatemala.jsx';
import { MapGuineaBissauPreview } from '@/components/core/templates/create/elements/maps/MapGuineaBissau.jsx';
import { MapGuineaPreview } from '@/components/core/templates/create/elements/maps/MapGuinea.jsx';
import { MapGuyanaPreview } from '@/components/core/templates/create/elements/maps/MapGuyana.jsx';
import { MapHaitiPreview } from '@/components/core/templates/create/elements/maps/MapHaiti.jsx';
import { MapHondurasPreview } from '@/components/core/templates/create/elements/maps/MapHonduras.jsx';
import { MapHongKongPreview } from '@/components/core/templates/create/elements/maps/MapHongKong.jsx';
import { MapIcelandPreview } from '@/components/core/templates/create/elements/maps/MapIceland.jsx';
import { MapIndiaPreview } from '@/components/core/templates/create/elements/maps/MapIndia.jsx';
import { MapIndonesiaPreview } from '@/components/core/templates/create/elements/maps/MapIndonesia.jsx';
import { MapHungaryPreview } from '@/components/core/templates/create/elements/maps/MapHungary.jsx';
import { MapIranPreview } from '@/components/core/templates/create/elements/maps/MapIran.jsx';
import { MapIraqPreview } from '@/components/core/templates/create/elements/maps/MapIraq.jsx';
import { MapIrelandPreview } from '@/components/core/templates/create/elements/maps/MapIreland.jsx';
import { MapIsraelPreview } from '@/components/core/templates/create/elements/maps/MapIsrael.jsx';
import { MapItalyPreview } from '@/components/core/templates/create/elements/maps/MapItaly.jsx';
import { MapIvoryCoastPreview } from '@/components/core/templates/create/elements/maps/MapIvoryCoast.jsx';
import { MapJamaicaPreview } from '@/components/core/templates/create/elements/maps/MapJamaica.jsx';
import { MapJapanPreview } from '@/components/core/templates/create/elements/maps/MapJapan.jsx';
import { MapJordanPreview } from '@/components/core/templates/create/elements/maps/MapJordan.jsx';
import { MapKazakhstanPreview } from '@/components/core/templates/create/elements/maps/MapKazakhstan.jsx';

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
  'taiwan',
  'togo',
  'trinidad-and-tobago',
  'tanzania',
  'tunisia',
  'turkmenistan',
  'eritrea',
  'estonia',
  'ethiopia',
  'timor-leste',
  'tajikistan',
  'thailand',
  'turkey',
  'ecuador',
  'egypt',
  'el-salvador',
  'equatorial-guinea',
  'falkland-islands',
  'fiji',
  'finland',
  'france',
  'french-southern-and-antarctic-lands',
  'gabon',
  'gambia',
  'georgia',
  'germany',
  'ghana',
  'greece',
  'greenland',
  'grenada',
  'guatemala',
  'guinea-bissau',
  'guinea',
  'guyana',
  'haiti',
  'honduras',
  'hong-kong',
  'iceland',
  'india',
  'indonesia',
  'hungary',
  'iran',
  'iraq',
  'ireland',
  'israel',
  'italy',
  'ivory-coast',
  'jamaica',
  'japan',
  'jordan',
  'kazakhstan',
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
  'cayland-islands': <MapCaylandIslandsPreview />,
  cambodia: <MapCambodiaPreview />,
  cameroon: <MapCameroonPreview />,
  canada: <MapCanadaPreview />,
  'central-african-republic': <MapCentralAfricanRepublicPreview />,
  chile: <MapChilePreview />,
  china: <MapChinaPreview />,
  costarica: <MapCostaricaPreview />,
  cyprus: <MapCyprusPreview />,
  'congo-dr': <MapCongoDrPreview />,
  denmark: <MapDenmarkPreview />,
  djibouti: <MapDjiboutiPreview />,
  taiwan: <MapTaiwanPreview />,
  togo: <MapTogoPreview />,
  'trinidad-and-tobago': <MapTrinidadAndTobagoPreview />,
  tanzania: <MapTanzaniaPreview />,
  tunisia: <MapTunisiaPreview />,
  turkmenistan: <MapTurkmenistanPreview />,
  eritrea: <MapEritreaPreview />,
  estonia: <MapEstoniaPreview />,
  ethiopia: <MapEthiopiaPreview />,
  'timor-leste': <MapTimorLestePreview />,
  tajikistan: <MapTajikistanPreview />,
  thailand: <MapThailandPreview />,
  turkey: <MapTurkeyPreview />,
  ecuador: <MapEcuadorPreview />,
  egypt: <MapEgyptPreview />,
  'el-salvador': <MapElSalvadorPreview />,
  'equatorial-guinea': <MapEquatorialGuineaPreview />,
  'falkland-islands': <MapFalklandIslandsPreview />,
  fiji: <MapFijiPreview />,
  finland: <MapFinlandPreview />,
  france: <MapFrancePreview />,
  'french-southern-and-antarctic-lands': <MapFrenchSouthernAndAntarcticLandsPreview />,
  gabon: <MapGabonPreview />,
  gambia: <MapGambiaPreview />,
  georgia: <MapGeorgiaPreview />,
  germany: <MapGermanyPreview />,
  ghana: <MapGhanaPreview />,
  greece: <MapGreecePreview />,
  greenland: <MapGreenlandPreview />,
  grenada: <MapGrenadaPreview />,
  guatemala: <MapGuatemalaPreview />,
  'guinea-bissau': <MapGuineaBissauPreview />,
  guinea: <MapGuineaPreview />,
  guyana: <MapGuyanaPreview />,
  haiti: <MapHaitiPreview />,
  honduras: <MapHondurasPreview />,
  'hong-kong': <MapHongKongPreview />,
  iceland: <MapIcelandPreview />,
  india: <MapIndiaPreview />,
  indonesia: <MapIndonesiaPreview />,
  hungary: <MapHungaryPreview />,
  iran: <MapIranPreview />,
  iraq: <MapIraqPreview />,
  ireland: <MapIrelandPreview />,
  israel: <MapIsraelPreview />,
  italy: <MapItalyPreview />,
  'ivory-coast': <MapIvoryCoastPreview />,
  jamaica: <MapJamaicaPreview />,
  japan: <MapJapanPreview />,
  jordan: <MapJordanPreview />,
  kazakhstan: <MapKazakhstanPreview />,
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
