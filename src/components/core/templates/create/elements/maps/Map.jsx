import { createElement } from 'react';
import MapNigeria, { MapNigeriaPresent } from '@/components/core/templates/create/elements/maps/MapNigeria.jsx';
import { ElementPropTypes } from '@/lib/prop-types.js';
import MapEurope, { MapEuropePresent } from '@/components/core/templates/create/elements/maps/MapEurope.jsx';
import MapAfrica, { MapAfricaPresent } from '@/components/core/templates/create/elements/maps/MapAfrica.jsx';
import MapNorthAmerica, {
  MapNorthAmericaPresent,
} from '@/components/core/templates/create/elements/maps/MapNorthAmerica.jsx';
import MapWorld, { MapWorldPresent } from '@/components/core/templates/create/elements/maps/MapWorld.jsx';
import MapAsia, { MapAsiaPresent } from '@/components/core/templates/create/elements/maps/MapAsia.jsx';
import MapOceanic, { MapOceanicPresent } from '@/components/core/templates/create/elements/maps/MapOceanic.jsx';
import MapNigeriaRegions, {
  MapNigeriaRegionsPresent,
} from '@/components/core/templates/create/elements/maps/MapNigeriaRegions.jsx';
import PropTypes from 'prop-types';
import MapAlgeria, { MapAlgeriaPresent } from '@/components/core/templates/create/elements/maps/MapAlgeria.jsx';
import MapAngola, { MapAngolaPresent } from '@/components/core/templates/create/elements/maps/MapAngola.jsx';
import MapAlbania, { MapAlbaniaPresent } from '@/components/core/templates/create/elements/maps/MapAlbania.jsx';
import MapSouthAmerica, {
  MapSouthAmericaPresent,
} from '@/components/core/templates/create/elements/maps/MapSouthAmerica.jsx';
import MapAfghanistan, {
  MapAfghanistanPresent,
} from '@/components/core/templates/create/elements/maps/MapAfghanistan.jsx';
import MapAustria, { MapAustriaPresent } from '@/components/core/templates/create/elements/maps/MapAustria.jsx';
import MapArgentina, { MapArgentinaPresent } from '@/components/core/templates/create/elements/maps/MapArgentina.jsx';
import MapAzerbaijan, {
  MapAzerbaijanPresent,
} from '@/components/core/templates/create/elements/maps/MapAzerbaijan.jsx';
import MapBenin, { MapBeninPresent } from '@/components/core/templates/create/elements/maps/MapBenin.jsx';
import MapBangladesh, {
  MapBangladeshPresent,
} from '@/components/core/templates/create/elements/maps/MapBangladesh.jsx';
import MapBelarus, { MapBelarusPresent } from '@/components/core/templates/create/elements/maps/MapBelarus.jsx';
import MapBermuda, { MapBermudaPresent } from '@/components/core/templates/create/elements/maps/MapBermuda.jsx';
import MapBotswana, { MapBotswanaPresent } from '@/components/core/templates/create/elements/maps/MapBotswana.jsx';
import MapBahrain, { MapBahrainPresent } from '@/components/core/templates/create/elements/maps/MapBahrain.jsx';
import MapBulgaria, { MapBulgariaPresent } from '@/components/core/templates/create/elements/maps/MapBulgaria.jsx';
import MapBurkinafaso, {
  MapBurkinafasoPresent,
} from '@/components/core/templates/create/elements/maps/MapBurkinafaso.jsx';
import MapBurundi, { MapBurundiPresent } from '@/components/core/templates/create/elements/maps/MapBurundi.jsx';
import MapArmenia, { MapArmeniaPresent } from '@/components/core/templates/create/elements/maps/MapArmenia.jsx';
import MapAustralia, { MapAustraliaPresent } from '@/components/core/templates/create/elements/maps/MapAustralia.jsx';
import MapBelgium, { MapBelgiumPresent } from '@/components/core/templates/create/elements/maps/MapBelgium.jsx';
import MapBelize, { MapBelizePresent } from '@/components/core/templates/create/elements/maps/MapBelize.jsx';
import MapBhutan, { MapBhutanPresent } from '@/components/core/templates/create/elements/maps/MapBhutan.jsx';
import MapBolivia, { MapBoliviaPresent } from '@/components/core/templates/create/elements/maps/MapBolivia.jsx';
import MapBosniaAndHerzegovina, {
  MapBosniaAndHerzegovinaPresent,
} from '@/components/core/templates/create/elements/maps/MapBosniaAndHerzegovina.jsx';
import MapBrazil, { MapBrazilPresent } from '@/components/core/templates/create/elements/maps/MapBrazil.jsx';
import MapBahamas, { MapBahamasPresent } from '@/components/core/templates/create/elements/maps/MapBahamas.jsx';
import MapChad, { MapChadPresent } from '@/components/core/templates/create/elements/maps/MapChad.jsx';
import MapColombia, { MapColombiaPresent } from '@/components/core/templates/create/elements/maps/MapColombia.jsx';
import MapCroatia, { MapCroatiaPresent } from '@/components/core/templates/create/elements/maps/MapCroatia.jsx';
import MapCuba, { MapCubaPresent } from '@/components/core/templates/create/elements/maps/MapCuba.jsx';
import MapCzechRepublic, {
  MapCzechRepublicPresent,
} from '@/components/core/templates/create/elements/maps/MapCzechRepublic.jsx';
import MapCongo, { MapCongoPresent } from '@/components/core/templates/create/elements/maps/MapCongo.jsx';
import MapDominicanRepublic, {
  MapDominicanRepublicPresent,
} from '@/components/core/templates/create/elements/maps/MapDominicanRepublic.jsx';
import MapBruneiDarussalam, {
  MapBruneiDarussalamPresent,
} from '@/components/core/templates/create/elements/maps/MapBruneiDarussalam.jsx';
import MapCaylandIslands, {
  MapCaylandIslandsPresent,
} from '@/components/core/templates/create/elements/maps/MapCaylandIslands.jsx';
import MapCambodia, { MapCambodiaPresent } from '@/components/core/templates/create/elements/maps/MapCambodia.jsx';
import MapCameroon, { MapCameroonPresent } from '@/components/core/templates/create/elements/maps/MapCameroon.jsx';
import MapCanada, { MapCanadaPresent } from '@/components/core/templates/create/elements/maps/MapCanada.jsx';
import MapCentralAfricanRepublic, {
  MapCentralAfricanRepublicPresent,
} from '@/components/core/templates/create/elements/maps/MapCentralAfricanRepublic.jsx';
import MapChile, { MapChilePresent } from '@/components/core/templates/create/elements/maps/MapChile.jsx';
import MapChina, { MapChinaPresent } from '@/components/core/templates/create/elements/maps/MapChina.jsx';
import MapCostarica, { MapCostaricaPresent } from '@/components/core/templates/create/elements/maps/MapCostarica.jsx';
import MapCyprus, { MapCyprusPresent } from '@/components/core/templates/create/elements/maps/MapCyprus.jsx';
import MapCongoDr, { MapCongoDrPresent } from '@/components/core/templates/create/elements/maps/MapCongoDr.jsx';
import MapDenmark, { MapDenmarkPresent } from '@/components/core/templates/create/elements/maps/MapDenmark.jsx';
import MapDjibouti, { MapDjiboutiPresent } from '@/components/core/templates/create/elements/maps/MapDjibouti.jsx';
import MapTaiwan, { MapTaiwanPresent } from '@/components/core/templates/create/elements/maps/MapTaiwan.jsx';
import MapTogo, { MapTogoPresent } from '@/components/core/templates/create/elements/maps/MapTogo.jsx';
import MapTrinidadAndTobago, {
  MapTrinidadAndTobagoPresent,
} from '@/components/core/templates/create/elements/maps/MapTrinidadAndTobago.jsx';
import MapTanzania, { MapTanzaniaPresent } from '@/components/core/templates/create/elements/maps/MapTanzania.jsx';
import MapTunisia, { MapTunisiaPresent } from '@/components/core/templates/create/elements/maps/MapTunisia.jsx';
import MapTurkmenistan, {
  MapTurkmenistanPresent,
} from '@/components/core/templates/create/elements/maps/MapTurkmenistan.jsx';
import MapEritrea, { MapEritreaPresent } from '@/components/core/templates/create/elements/maps/MapEritrea.jsx';
import MapEstonia, { MapEstoniaPresent } from '@/components/core/templates/create/elements/maps/MapEstonia.jsx';
import MapEthiopia, { MapEthiopiaPresent } from '@/components/core/templates/create/elements/maps/MapEthiopia.jsx';
import MapTimorLeste, {
  MapTimorLestePresent,
} from '@/components/core/templates/create/elements/maps/MapTimorLeste.jsx';
import MapTajikistan, {
  MapTajikistanPresent,
} from '@/components/core/templates/create/elements/maps/MapTajikistan.jsx';
import MapThailand, { MapThailandPresent } from '@/components/core/templates/create/elements/maps/MapThailand.jsx';
import MapTurkey, { MapTurkeyPresent } from '@/components/core/templates/create/elements/maps/MapTurkey.jsx';
import MapEcuador, { MapEcuadorPresent } from '@/components/core/templates/create/elements/maps/MapEcuador.jsx';
import MapEgypt, { MapEgyptPresent } from '@/components/core/templates/create/elements/maps/MapEgypt.jsx';
import MapElSalvador, {
  MapElSalvadorPresent,
} from '@/components/core/templates/create/elements/maps/MapElSalvador.jsx';
import MapEquatorialGuinea, {
  MapEquatorialGuineaPresent,
} from '@/components/core/templates/create/elements/maps/MapEquatorialGuinea.jsx';
import MapFalklandIslands, {
  MapFalklandIslandsPresent,
} from '@/components/core/templates/create/elements/maps/MapFalkLandIslands.jsx';
import MapFiji, { MapFijiPresent } from '@/components/core/templates/create/elements/maps/MapFiji.jsx';
import MapFinland, { MapFinlandPresent } from '@/components/core/templates/create/elements/maps/MapFinland.jsx';
import MapFrance, { MapFrancePresent } from '@/components/core/templates/create/elements/maps/MapFrance.jsx';
import MapFrenchSouthernAndAntarcticLands, {
  MapFrenchSouthernAndAntarcticLandsPresent,
} from '@/components/core/templates/create/elements/maps/MapFrenchSouthernAndAntarcticLands.jsx';
import MapGabon, { MapGabonPresent } from '@/components/core/templates/create/elements/maps/MapGabon.jsx';
import MapGambia, { MapGambiaPresent } from '@/components/core/templates/create/elements/maps/MapGambia.jsx';
import MapGeorgia, { MapGeorgiaPresent } from '@/components/core/templates/create/elements/maps/MapGeorgia.jsx';
import MapGermany, { MapGermanyPresent } from '@/components/core/templates/create/elements/maps/MapGermany.jsx';
import MapGhana, { MapGhanaPresent } from '@/components/core/templates/create/elements/maps/MapGhana.jsx';
import MapGreece, { MapGreecePresent } from '@/components/core/templates/create/elements/maps/MapGreece.jsx';
import MapGreenland, { MapGreenlandPresent } from '@/components/core/templates/create/elements/maps/MapGreenland.jsx';
import MapGrenada, { MapGrenadaPresent } from '@/components/core/templates/create/elements/maps/MapGrenada.jsx';
import MapGuatemala, { MapGuatemalaPresent } from '@/components/core/templates/create/elements/maps/MapGuatemala.jsx';

const Map = ({ element, active, highlighted, width, onClick, onChange }) => {
  const components = {
    nigeria: MapNigeria,
    'nigeria-regions': MapNigeriaRegions,
    europe: MapEurope,
    africa: MapAfrica,
    'north-america': MapNorthAmerica,
    'south-america': MapSouthAmerica,
    world: MapWorld,
    asia: MapAsia,
    oceanic: MapOceanic,
    algeria: MapAlgeria,
    angola: MapAngola,
    albania: MapAlbania,
    afghanistan: MapAfghanistan,
    austria: MapAustria,
    argentina: MapArgentina,
    azerbaijan: MapAzerbaijan,
    benin: MapBenin,
    bangladesh: MapBangladesh,
    belarus: MapBelarus,
    bermuda: MapBermuda,
    botswana: MapBotswana,
    bahrain: MapBahrain,
    bulgaria: MapBulgaria,
    burkinafaso: MapBurkinafaso,
    burundi: MapBurundi,
    armenia: MapArmenia,
    australia: MapAustralia,
    belgium: MapBelgium,
    belize: MapBelize,
    bhutan: MapBhutan,
    bolivia: MapBolivia,
    'bosnia-and-aerzegovina': MapBosniaAndHerzegovina,
    brazil: MapBrazil,
    bahamas: MapBahamas,
    chad: MapChad,
    colombia: MapColombia,
    croatia: MapCroatia,
    cuba: MapCuba,
    'czech-republic': MapCzechRepublic,
    congo: MapCongo,
    'dominican-republic': MapDominicanRepublic,
    'brunei-darussalam': MapBruneiDarussalam,
    'cayland-islands': MapCaylandIslands,
    cambodia: MapCambodia,
    cameroon: MapCameroon,
    canada: MapCanada,
    'central-african-republic': MapCentralAfricanRepublic,
    chile: MapChile,
    china: MapChina,
    costarica: MapCostarica,
    cyprus: MapCyprus,
    'congo-dr': MapCongoDr,
    denmark: MapDenmark,
    djibouti: MapDjibouti,
    taiwan: MapTaiwan,
    togo: MapTogo,
    'trinidad-and-tobago': MapTrinidadAndTobago,
    tanzania: MapTanzania,
    tunisia: MapTunisia,
    turkmenistan: MapTurkmenistan,
    eritrea: MapEritrea,
    estonia: MapEstonia,
    ethiopia: MapEthiopia,
    'timor-leste': MapTimorLeste,
    tajikistan: MapTajikistan,
    thailand: MapThailand,
    turkey: MapTurkey,
    ecuador: MapEcuador,
    egypt: MapEgypt,
    'el-salvador': MapElSalvador,
    'equatorial-guinea': MapEquatorialGuinea,
    'falkland-islands': MapFalklandIslands,
    fiji: MapFiji,
    finland: MapFinland,
    france: MapFrance,
    'french-southern-and-antarctic-lands': MapFrenchSouthernAndAntarcticLands,
    gabon: MapGabon,
    gambia: MapGambia,
    georgia: MapGeorgia,
    germany: MapGermany,
    ghana: MapGhana,
    greece: MapGreece,
    greenland: MapGreenland,
    grenada: MapGrenada,
    guatemala: MapGuatemala,
  };

  if (components[element.config.name]) {
    return createElement(components[element.config.name], { element, active, highlighted, width, onClick, onChange });
  }

  return null;
};

export const MapPresent = ({ element }) => {
  const components = {
    nigeria: MapNigeriaPresent,
    'nigeria-regions': MapNigeriaRegionsPresent,
    europe: MapEuropePresent,
    africa: MapAfricaPresent,
    'north-america': MapNorthAmericaPresent,
    'south-america': MapSouthAmericaPresent,
    world: MapWorldPresent,
    asia: MapAsiaPresent,
    oceanic: MapOceanicPresent,
    algeria: MapAlgeriaPresent,
    angola: MapAngolaPresent,
    albania: MapAlbaniaPresent,
    afghanistan: MapAfghanistanPresent,
    austria: MapAustriaPresent,
    argentina: MapArgentinaPresent,
    azerbaijan: MapAzerbaijanPresent,
    benin: MapBeninPresent,
    bangladesh: MapBangladeshPresent,
    belarus: MapBelarusPresent,
    bermuda: MapBermudaPresent,
    botswana: MapBotswanaPresent,
    bahrain: MapBahrainPresent,
    bulgaria: MapBulgariaPresent,
    burkinafaso: MapBurkinafasoPresent,
    burundi: MapBurundiPresent,
    armenia: MapArmeniaPresent,
    australia: MapAustraliaPresent,
    belgium: MapBelgiumPresent,
    belize: MapBelizePresent,
    bhutan: MapBhutanPresent,
    bolivia: MapBoliviaPresent,
    'bosnia-and-aerzegovina': MapBosniaAndHerzegovinaPresent,
    brazil: MapBrazilPresent,
    bahamas: MapBahamasPresent,
    chad: MapChadPresent,
    colombia: MapColombiaPresent,
    croatia: MapCroatiaPresent,
    cuba: MapCubaPresent,
    'czech-republic': MapCzechRepublicPresent,
    congo: MapCongoPresent,
    'dominican-republic': MapDominicanRepublicPresent,
    'brunei-darussalam': MapBruneiDarussalamPresent,
    'cayland-islands': MapCaylandIslandsPresent,
    cambodia: MapCambodiaPresent,
    cameroon: MapCameroonPresent,
    canada: MapCanadaPresent,
    'central-african-republic': MapCentralAfricanRepublicPresent,
    chile: MapChilePresent,
    china: MapChinaPresent,
    costarica: MapCostaricaPresent,
    cyprus: MapCyprusPresent,
    'congo-dr': MapCongoDrPresent,
    denmark: MapDenmarkPresent,
    djibouti: MapDjiboutiPresent,
    taiwan: MapTaiwanPresent,
    togo: MapTogoPresent,
    'trinidad-and-tobago': MapTrinidadAndTobagoPresent,
    tanzania: MapTanzaniaPresent,
    tunisia: MapTunisiaPresent,
    turkmenistan: MapTurkmenistanPresent,
    eritrea: MapEritreaPresent,
    estonia: MapEstoniaPresent,
    ethiopia: MapEthiopiaPresent,
    'timor-leste': MapTimorLestePresent,
    tajikistan: MapTajikistanPresent,
    thailand: MapThailandPresent,
    turkey: MapTurkeyPresent,
    ecuador: MapEcuadorPresent,
    egypt: MapEgyptPresent,
    'el-salvador': MapElSalvadorPresent,
    'equatorial-guinea': MapEquatorialGuineaPresent,
    'falkland-islands': MapFalklandIslandsPresent,
    fiji: MapFijiPresent,
    finland: MapFinlandPresent,
    france: MapFrancePresent,
    'french-southern-and-antarctic-lands': MapFrenchSouthernAndAntarcticLandsPresent,
    gabon: MapGabonPresent,
    gambia: MapGambiaPresent,
    georgia: MapGeorgiaPresent,
    germany: MapGermanyPresent,
    ghana: MapGhanaPresent,
    greece: MapGreecePresent,
    greenland: MapGreenlandPresent,
    grenada: MapGrenadaPresent,
    guatemala: MapGuatemalaPresent,
  };

  if (components[element.config.name]) {
    return createElement(components[element.config.name], { element });
  }

  return null;
};

Map.propTypes = ElementPropTypes;
MapPresent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default Map;
