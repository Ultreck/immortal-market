import { ElementPropTypes } from '@/lib/prop-types.js';
import useMapElement from '@/lib/design/use-map-element.jsx';
import PropTypes from 'prop-types';

const MapMauritius = ({ element }) => {
  return <MapMauritiusContent element={element} />;
};

export const MapMauritiusPresent = ({ element }) => {
  return <MapMauritiusContent element={element} />;
};

export const MapMauritiusPreview = () => {
  return <MapMauritiusContent element={{ config: { data: [], fill: '#f9fafb', stroke: '#f9fafb' } }} present={false} />;
};

const MapMauritiusContent = ({ element, present = true }) => {
  const { el, assignColor, renderLabels, handleMouseMove, handleMouseLeave, renderTooltip } = useMapElement(element);

  return (
    <svg
      style={{ width: element.width, height: element.height }}
      ref={el}
      width="100%"
      viewBox="0 0 380 442"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M125.317 154.993L129.593 172.485L122.644 184.148L121.04 196.645L118.367 216.643L118.902 227.476L120.505 255.814L121.574 266.651L123.713 280.823L129.593 286.66L131.197 288.327L127.989 293.33H117.298L112.487 298.333L116.229 315.011L121.574 328.355L114.09 335.027L120.505 343.368L135.473 346.705L142.957 351.71L141.888 363.389L132.801 358.383L116.229 363.389L100.726 370.063L82.5508 384.247L68.6519 388.42V405.109L77.2049 412.621L74.5319 425.14L58.4949 432.652L14.6599 392.592L4.50292 380.91L1.29492 370.063L13.5899 365.058L32.3009 369.229L42.9919 367.56L47.8029 356.715L51.5449 334.193L50.4759 325.018L42.4569 320.848L48.3379 300.834L49.4069 255.814L52.6139 230.81L57.9599 216.643L75.6009 181.649L82.0158 174.985L83.6198 172.485L100.192 158.325L107.676 154.993L124.247 149.996L125.317 154.993Z"
        stroke={element.config.stroke}
        fill={assignColor('Rivière Noire')}
        data-name="Rivière Noire"
        data-x="125"
        data-y="154"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Rivière Noire')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M365.339 266.651L363.736 279.99L368.012 292.496L349.303 298.333L327.92 315.845L314.556 335.027L320.971 348.373L321.505 354.212L325.247 360.886L325.782 365.058L323.109 372.566L318.832 374.235H314.021L309.745 376.738L299.588 395.095L293.707 403.44L284.085 410.116L252.545 420.131L250.941 410.95L248.269 392.592L238.112 365.058L224.213 349.207L208.71 345.871L187.327 346.705L228.489 298.333L254.683 299.167L272.324 294.164L281.412 286.66L296.915 285.826L326.316 282.491L348.769 264.984L365.339 266.651Z"
        stroke={element.config.stroke}
        fill={assignColor('Grand Port')}
        data-name="Grand Port"
        data-x="265"
        data-y="266"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Grand Port')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M365.34 266.651L348.769 264.984L326.316 282.491L296.915 285.826L281.412 286.66L289.431 255.814L251.476 224.143L276.066 199.145L249.872 179.15L234.37 172.485L234.904 169.153L235.973 161.657L249.338 153.328L252.545 144.999L331.128 96.7039L339.681 104.197L341.819 109.192L339.681 135.838L345.561 144.166L353.58 149.996L360.529 173.318L375.497 191.646L378.704 199.978L377.635 219.976L373.359 241.644L365.34 266.651Z"
        stroke={element.config.stroke}
        fill={assignColor('Flacq')}
        data-name="Flacq"
        data-x="365"
        data-y="266"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Flacq')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M141.354 174.152L143.492 189.147L154.184 215.81L172.359 232.477L187.327 234.143L194.811 244.978L207.641 262.483L204.434 273.32L211.918 287.493L228.489 298.333L187.327 346.705L179.309 348.373L172.359 343.368L161.133 341.7L159.529 348.373L154.184 365.058L141.888 363.389L142.957 351.71L135.473 346.705L120.505 343.368L114.09 335.027L121.574 328.355L116.229 315.011L112.487 298.333L117.298 293.33H127.989L131.197 288.327L129.593 286.66L139.215 280.823L154.718 301.668L193.742 284.992L190.535 274.987L173.963 259.982L160.598 244.145L147.769 220.809L139.215 197.478L121.04 196.645L122.644 184.148L129.593 172.485L141.354 174.152Z"
        stroke={element.config.stroke}
        fill={assignColor('Plaines Wilhems')}
        data-name="Plaines Wilhems"
        data-x="141"
        data-y="174"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Plaines Wilhems')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M187.327 183.315L194.811 185.814L207.641 179.983L223.678 169.986L234.904 169.153L234.37 172.485L249.872 179.15L276.066 199.145L251.476 224.143L289.431 255.814L281.412 286.66L272.324 294.164L254.683 299.167L228.489 298.333L211.918 287.493L204.434 273.32L207.641 262.483L194.811 244.978L187.327 234.143L172.359 232.477L154.184 215.81L143.492 189.147L141.354 174.152L155.787 168.32L165.944 173.318L181.447 180.816L187.327 183.315Z"
        stroke={element.config.stroke}
        fill={assignColor('Moka')}
        data-name="Moka"
        data-x="187"
        data-y="183"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Moka')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M252.545 144.999L249.338 153.328L235.973 161.657L234.904 169.153L223.678 169.986L207.641 179.983L194.811 185.814L187.327 183.315L190.535 161.657L188.396 128.343L182.516 117.518L168.617 121.682L151.511 118.351H147.234L147.769 102.532L159.529 80.8869L168.617 51.7559L173.428 43.4339L177.17 38.4409L198.019 20.9669L203.364 18.4709L213.521 17.6389L236.508 45.9299L238.112 56.7489L233.301 67.5689L255.753 90.8758L243.457 105.862L252.545 144.999Z"
        stroke={element.config.stroke}
        fill={assignColor('Pamplemousses')}
        data-name="Pamplemousses"
        data-x="252"
        data-y="144"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Pamplemousses')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M187.327 346.705L208.71 345.871L224.213 349.207L238.112 365.058L248.269 392.592L250.941 410.951L252.545 420.132L219.936 430.983L154.718 441L131.731 439.33L95.9148 427.644L74.5318 425.14L77.2048 412.621L68.6519 405.109V388.42L82.5508 384.247L100.726 370.063L116.229 363.389L132.801 358.383L141.888 363.389L154.184 365.058L159.529 348.373L161.133 341.7L172.359 343.368L179.309 348.373L187.327 346.705Z"
        stroke={element.config.stroke}
        fill={assignColor('Savanne')}
        data-name="Savanne"
        data-x="187"
        data-y="346"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Savanne')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M331.128 96.7039L252.545 144.999L243.457 105.862L255.753 90.8759L233.301 67.5689L238.112 56.7489L236.508 45.93L213.521 17.639L217.798 15.143L221.54 9.31899L225.816 3.496L234.37 1L246.13 3.496L280.878 13.479L289.965 17.639L293.707 26.791L289.431 40.937L292.638 49.259L297.984 56.7489L303.864 70.0659L310.279 81.7189L312.418 91.7089L316.16 96.7039L319.367 97.5359L328.455 95.8709L331.128 96.7039Z"
        stroke={element.config.stroke}
        fill={assignColor('Rivière du Rempart')}
        data-name="Rivière du Rempart"
        data-x="331"
        data-y="96"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Rivière du Rempart')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M187.327 183.315L181.447 180.816L165.944 173.318L155.787 168.32L141.354 174.152L129.593 172.485L125.317 154.993L134.939 153.328L145.096 155.826L153.114 158.325L159.529 154.161L161.668 146.665L169.152 139.169L167.013 128.343L161.668 127.511L156.322 131.674L151.511 125.845V118.351L168.617 121.682L182.516 117.518L188.396 128.343L190.535 161.657L187.327 183.315Z"
        stroke={element.config.stroke}
        fill={assignColor('Port Louis')}
        data-name="Port Louis"
        data-x="187"
        data-y="183"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Port Louis')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M173.963 259.982L139.215 280.823L129.593 286.66L123.713 280.823L121.574 266.651L120.505 255.814L160.598 244.145L173.963 259.982Z"
        stroke={element.config.stroke}
        fill={assignColor('Vacoas-Phoenix')}
        data-name="Vacoas-Phoenix"
        data-x="173"
        data-y="259"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Vacoas-Phoenix')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M139.215 280.823L173.963 259.982L190.535 274.987L193.742 284.992L154.718 301.668L139.215 280.823Z"
        stroke={element.config.stroke}
        fill={assignColor('Curepipe')}
        data-name="Curepipe"
        data-x="139"
        data-y="280"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Curepipe')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M151.511 118.351V125.845L156.322 131.674L161.668 127.511L167.013 128.343L169.152 139.169L161.668 146.665L159.529 154.161L153.114 158.325L145.096 155.826L134.939 153.328L125.317 154.993L124.247 149.996L131.731 146.665L145.096 133.34L147.234 118.351H151.511Z"
        stroke={element.config.stroke}
        fill={assignColor('Port Louis city')}
        data-name="Port Louis city"
        data-x="151"
        data-y="118"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Port Louis city')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M160.598 244.145L120.505 255.814L118.902 227.476L147.769 220.809L160.598 244.145Z"
        stroke={element.config.stroke}
        fill={assignColor('Quatre Bornes')}
        data-name="Quatre Bornes"
        data-x="160"
        data-y="244"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Quatre Bornes')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M147.769 220.809L118.902 227.476L118.367 216.643L121.04 196.645L139.215 197.478L147.769 220.809Z"
        stroke={element.config.stroke}
        fill={assignColor('Beau Bassin-Rose Hill')}
        data-name="Beau Bassin-Rose Hill"
        data-x="147"
        data-y="220"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Beau Bassin-Rose Hill')}
        onMouseLeave={handleMouseLeave}
      />
      {present && renderTooltip()}
      {renderLabels()}
    </svg>
  );
};

MapMauritius.propTypes = ElementPropTypes;
MapMauritiusPresent.propTypes = {
  element: PropTypes.object.isRequired,
};
MapMauritiusContent.propTypes = {
  element: PropTypes.object.isRequired,
  present: PropTypes.bool,
};

export default MapMauritius;
