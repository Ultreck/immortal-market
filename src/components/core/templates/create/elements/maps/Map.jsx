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

const Map = ({ element, active, highlighted, width, onClick, onChange }) => {
  const components = {
    nigeria: MapNigeria,
    'nigeria-regions': MapNigeriaRegions,
    europe: MapEurope,
    africa: MapAfrica,
    'north-america': MapNorthAmerica,
     world: MapWorld,
    asia: MapAsia,
    oceanic: MapOceanic,
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
    world: MapWorldPresent,
    asia: MapAsiaPresent,
    oceanic: MapOceanicPresent,
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
