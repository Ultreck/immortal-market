import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';
import maps from '@/lib/design/maps';
import useMapElement from '@/lib/design/use-map-element.jsx';
import ElementMapWrapper from '@/components/core/templates/create/elements/maps/helpers/ElementMapWrapper.jsx';

export const Map = ({ element }) => {
  if (maps[element.config.name]) {
    return <MapWrapper element={element} config={maps[element.config.name]} />;
  }
  return null;
};

export const MapPresent = ({ element, isMapWrapperDisabled = false }) => {
  if (maps[element.config.name]) {
    return (
      <MapWrapper element={element} config={maps[element.config.name]} isMapWrapperDisabled={isMapWrapperDisabled} />
    );
  }
  return null;
};

export const MapPreview = ({ element }) => {
  if (maps[element.config.name]) {
    return <MapWrapper element={element} config={maps[element.config.name]} />;
  }
  return null;
};

const MapWrapper = ({ element, config, isMapWrapperDisabled }) => {
  if (maps[element.config.name]) {
    return <MapContent element={element} config={config} isMapWrapperDisabled={isMapWrapperDisabled} />;
  }
  return null;
};

const MapContent = ({ element, config, isMapWrapperDisabled }) => {
  const { el, assignColor, renderLabels, handleMouseMove, handleMouseLeave, renderTooltip } = useMapElement(element);

  return (
    <ElementMapWrapper element={element} isDisabled={isMapWrapperDisabled}>
      <svg
        style={{ width: element.width, height: element.height }}
        ref={el}
        width="100%"
        viewBox={config.viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {config.regions.map(({ name, d, x, y }, i) => (
          <path
            key={`${name}-${i}`}
            d={d}
            stroke={element.config.stroke}
            fill={assignColor(name)}
            data-name={name}
            data-x={x}
            data-y={y}
            className="hover:brightness-90"
            onMouseMove={(e) => handleMouseMove(e, name)}
            onMouseLeave={handleMouseLeave}
          />
        ))}
        {renderLabels()}
        {renderTooltip()}
      </svg>
    </ElementMapWrapper>
  );
};

Map.propTypes = ElementPropTypes;
MapPresent.propTypes = {
  element: PropTypes.object.isRequired,
  isMapWrapperDisabled: PropTypes.bool,
};
MapPreview.propTypes = {
  element: PropTypes.object.isRequired,
};
MapWrapper.propTypes = {
  element: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired,
  isMapWrapperDisabled: PropTypes.bool,
};
MapContent.propTypes = {
  element: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired,
  isMapWrapperDisabled: PropTypes.bool,
};
