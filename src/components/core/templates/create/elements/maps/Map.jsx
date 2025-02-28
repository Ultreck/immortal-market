import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';
import useMapElement from '@/lib/design/use-map-element.jsx';
import ElementMapWrapper from '@/components/core/templates/create/elements/maps/helpers/ElementMapWrapper.jsx';
import { useGetMap } from '@/api/design.js';

export const Map = ({ element }) => {
  return <MapWrapper element={element} />;
};

export const MapPresent = ({ element, isMapWrapperDisabled = false }) => {
  return <MapWrapper element={element} isMapWrapperDisabled={isMapWrapperDisabled} />;
};

export const MapPreview = ({ element }) => {
  return <MapWrapper element={element} />;
};

const MapWrapper = ({ element, isMapWrapperDisabled }) => {
  const { data: { map } = {}, isLoading: isMapLoading } = useGetMap(element.config.name);

  if (isMapLoading) return <p>Loading...</p>;
  if (map) return <MapContent element={element} config={map} isMapWrapperDisabled={isMapWrapperDisabled} />;
  return null;
};

const MapContent = ({ element, config, isMapWrapperDisabled }) => {
  const { el, assignColor, renderLabels, handleMouseMove, handleMouseLeave, renderTooltip } = useMapElement(element);

  return (
    <ElementMapWrapper element={element} isDisabled={isMapWrapperDisabled}>
      <svg
        style={{ width: element.width }}
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
  isMapWrapperDisabled: PropTypes.bool,
};
MapContent.propTypes = {
  element: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired,
  isMapWrapperDisabled: PropTypes.bool,
};
