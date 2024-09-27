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
