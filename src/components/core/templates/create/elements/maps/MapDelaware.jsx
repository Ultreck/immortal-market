import { ElementPropTypes } from '@/lib/prop-types.js';
import useMapElement from '@/lib/design/use-map-element.jsx';
import PropTypes from 'prop-types';

const MapDelaware = ({ element }) => {
  return <MapDelawareContent element={element} />;
};

export const MapDelawarePresent = ({ element }) => {
  return <MapDelawareContent element={element} />;
};

export const MapDelawarePreview = () => {
  return <MapDelawareContent element={{ config: { data: [], fill: '#f9fafb', stroke: '#f9fafb' } }} present={false} />;
};

export const MapDelawareContent = ({ element, present = true }) => {
  const { el, assignColor, renderLabels, handleMouseMove, handleMouseLeave, renderTooltip } = useMapElement(element);

  return (
    <svg
      style={{ width: element.width, height: element.height }}
      ref={el}
      width="100%"
      viewBox="0 0 184 442"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M118.985 284.784L120.457 294.56L131.986 304.647L138.364 317.248L147.441 327.954L158.48 334.564L175.406 337.082L176.142 355.011L179.086 371.356L179.576 384.234L175.161 386.432L176.142 374.812L174.18 363.499L161.669 365.385L164.367 378.895L170.5 382.978L166.575 388.316L158.48 389.572L152.347 394.594H144.743L147.441 405.577L160.688 395.536L167.311 396.164L172.462 400.557L177.123 395.85L183.011 414.36V441L113.834 440.374L54.2226 438.807L24.0496 437.867L20.8606 394.281L17.1816 321.343L58.1476 319.138L66.2436 313.469L69.9226 305.592L76.5466 298.028L81.2066 295.506L95.9256 293.614L96.6616 284.469L101.323 280.368L116.532 281.946L118.985 284.784Z"
        stroke={element.config.stroke}
        data-name="Sussex"
        fill={assignColor('Sussex')}
        data-x="118"
        data-y="284"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Sussex')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M118.984 284.784L116.532 281.946L101.323 280.368L96.6615 284.469L95.9255 293.614L81.2065 295.506L76.5465 298.028L69.9225 305.592L66.2435 313.469L58.1475 319.138L17.1815 321.343L13.2565 257.642L8.10449 174.116L25.7665 173.482L30.4275 175.7L43.4295 169.677L52.9965 169.043L59.3745 155.723L67.9605 152.233L74.5835 163.653L80.7165 162.067L86.3585 167.458L89.5475 177.285L95.6805 186.158L98.6235 201.36L93.2275 218.766L96.4165 229.203L96.1705 241.531L98.8695 248.166L106.228 253.221L114.814 263.642L119.476 274.058L118.984 284.784Z"
        stroke={element.config.stroke}
        data-name="Kent"
        fill={assignColor('Kent')}
        data-x="118"
        data-y="284"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Kent')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M67.9602 152.233L59.3742 155.723L52.9962 169.043L43.4292 169.677L30.4272 175.7L25.7662 173.482L8.10423 174.116L0.990234 61.618V38.348H4.91524L10.8032 24.948L18.1622 16.649L27.9742 8.666L48.3352 1.639L64.0352 1L78.7532 5.153L94.9442 14.733L88.5662 17.926L80.9612 25.586L77.0362 35.158L69.4322 47.914L68.6962 54.289L56.9212 69.581L58.6382 76.587L68.9412 86.136L65.0162 97.908L63.7892 109.992L56.4302 110.31V118.574L61.3362 124.928L57.1662 127.787L65.2612 138.902L67.9602 152.233Z"
        stroke={element.config.stroke}
        data-name="New Castle"
        fill={assignColor('New Castle')}
        data-x="67"
        data-y="152"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'New Castle')}
        onMouseLeave={handleMouseLeave}
      />
      {present && renderTooltip()}
      {renderLabels()}
    </svg>
  );
};

MapDelaware.propTypes = ElementPropTypes;
MapDelawarePresent.propTypes = {
  element: PropTypes.object.isRequired,
};
MapDelawareContent.propTypes = {
  element: PropTypes.object.isRequired,
  present: PropTypes.bool,
};

export default MapDelaware;
