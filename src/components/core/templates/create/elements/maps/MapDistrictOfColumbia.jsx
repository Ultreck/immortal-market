import { ElementPropTypes } from '@/lib/prop-types.js';
import useMapElement from '@/lib/design/use-map-element.jsx';
import PropTypes from 'prop-types';

const MapDistrictOfColumbia = ({ element }) => {
  return <MapDistrictOfColumbiaContent element={element} />;
};

export const MapDistrictOfColumbiaPresent = ({ element }) => {
  return <MapDistrictOfColumbiaContent element={element} />;
};

export const MapDistrictOfColumbiaPreview = () => {
  return (
    <MapDistrictOfColumbiaContent
      element={{ config: { data: [], fill: '#f9fafb', stroke: '#f9fafb' } }}
      presen={false}
    />
  );
};

const MapDistrictOfColumbiaContent = ({ element, present = true }) => {
  const { el, assignColor, renderLabels, handleMouseMove, handleMouseLeave, renderTooltip } = useMapElement(element);

  return (
    <svg
      style={{ width: element.width, height: element.height }}
      ref={el}
      width="100%"
      viewBox="0 0 400 442"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M357.094 206.635L398.484 247.732L244.213 402.364L191.535 441L180.247 407.194L187.772 300.903L121.925 228.394L54.1956 213.888L1.51758 148.598L152.026 1L357.094 206.635Z"
        fill={assignColor('Washington, District of Columbia')}
        stroke={element.config.stroke}
        data-name="Washington, District of Columbia"
        data-x="169"
        data-y="144"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Washington, District of Columbia')}
        onMouseLeave={handleMouseLeave}
      />
      {present && renderTooltip()}
      {renderLabels()}
    </svg>
  );
};

MapDistrictOfColumbia.propTypes = ElementPropTypes;
MapDistrictOfColumbiaPresent.propTypes = {
  element: PropTypes.object.isRequired,
};
MapDistrictOfColumbiaContent.propTypes = {
  element: PropTypes.object.isRequired,
  present: PropTypes.bool,
};

export default MapDistrictOfColumbia;
