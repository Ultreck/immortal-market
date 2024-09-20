import { createElement } from 'react';
import MapNigeria from '@/components/core/templates/create/elements/maps/MapNigeria.jsx';
import { ElementPropTypes } from '@/lib/prop-types.js';
import MapEurope from '@/components/core/templates/create/elements/maps/MapEurope.jsx';
import MapAfrica from '@/components/core/templates/create/elements/maps/MapAfrica.jsx';
import MapNorthAmerica from '@/components/core/templates/create/elements/maps/MapNorthAmerica.jsx';
import MapWorld from '@/components/core/templates/create/elements/maps/MapWorld.jsx';
import MapAsia from '@/components/core/templates/create/elements/maps/MapAsia.jsx';

const Map = ({ element, active, highlighted, width, onClick, onChange }) => {
  const components = {
    nigeria: MapNigeria,
    europe: MapEurope,
    africa: MapAfrica,
    'north-america': MapNorthAmerica,
    world: MapWorld,
    asia: MapAsia,
  };

  if (components[element.config.name]) {
    return createElement(components[element.config.name], { element, active, highlighted, width, onClick, onChange });
  }

  return null;
};

Map.propTypes = ElementPropTypes;

export default Map;
