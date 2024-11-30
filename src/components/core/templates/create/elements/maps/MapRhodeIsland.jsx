import { ElementPropTypes } from '@/lib/prop-types.js';
import useMapElement from '@/lib/design/use-map-element.jsx';
import PropTypes from 'prop-types';

const MapRhodeIsland = ({ element }) => {
  return <MapRhodeIslandContent element={element} />;
};

export const MapRhodeIslandPresent = ({ element }) => {
  return <MapRhodeIslandContent element={element} />;
};

export const MapRhodeIslandPreview = () => {
  return (
    <MapRhodeIslandContent element={{ config: { data: [], fill: '#f9fafb', stroke: '#f9fafb' } }} present={false} />
  );
};

const MapRhodeIslandContent = ({ element, present = true }) => {
  const { el, assignColor, renderLabels, handleMouseMove, handleMouseLeave, renderTooltip } = useMapElement(element);

  return (
    <svg ref={el} width="100%" viewBox="0 0 284 442" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M29.646 214.398H80.772L144.775 212.372L147.426 198.188L173.178 186.532L175.829 207.307L174.314 219.968L158.787 225.031L165.604 234.143L169.77 249.829L168.634 279.157L163.71 293.811L155.757 299.368V310.983L142.502 334.707L130.384 327.642L91.755 334.707L58.428 350.345L38.356 352.362L2 358.918L13.361 344.292L10.331 334.707L9.953 310.478L26.237 305.429L29.646 214.398ZM115.235 424.902L116.75 439.491L94.784 441L96.678 425.908L115.992 404.768L115.235 424.902Z"
        fill={assignColor('Washington')}
        stroke={element.config.stroke}
        data-name="Washington"
        data-x="29"
        data-y="214"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Washington')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M208.02 124.636L194.386 137.837L182.267 132.253L177.723 127.175L162.953 132.761L155 147.48L29.2671 151.54L26.2371 6.097L184.54 1L183.782 66.184L200.067 62.623L201.96 81.443L198.173 100.252L200.067 113.97L208.02 124.636Z"
        fill={assignColor('Providence')}
        stroke={element.config.stroke}
        data-name="Providence"
        data-x="208"
        data-y="124"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Providence')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M182.267 132.253L190.22 166.759L184.161 179.942L176.208 170.309L159.166 168.28L173.178 186.532L147.426 198.188L144.775 212.372L80.7721 214.398H29.6461L29.2671 151.54L155 147.48L162.953 132.761L177.723 127.175L182.267 132.253Z"
        fill={assignColor('Kent')}
        stroke={element.config.stroke}
        data-name="Kent"
        data-x="182"
        data-y="132"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Kent')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M278.461 216.423L282.626 266.519L261.797 285.221L250.057 265.507L252.329 258.933L245.512 241.228L247.785 194.641L254.223 175.886L278.082 183.998L275.052 211.866L278.461 216.423ZM207.641 221.993L201.96 222.5L203.854 194.641L215.594 206.294L207.641 221.993ZM241.725 248.311L234.908 268.541L207.641 275.619L205.748 256.91L211.428 237.179L223.547 212.372L224.304 203.254L240.21 191.6L235.666 219.462L239.453 226.044L241.725 248.311ZM189.842 268.035L190.978 276.124L177.723 279.662L176.587 270.563L184.161 262.979L179.616 252.358L185.676 228.575L192.114 231.106L189.842 268.035Z"
        fill={assignColor('Newport')}
        stroke={element.config.stroke}
        data-name="Newport"
        data-x="278"
        data-y="216"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Newport')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M208.02 124.636L229.606 137.33L242.104 155.599L236.423 169.294L237.938 177.914L230.364 189.573L219.76 178.421L216.73 152.047L199.688 149.51L194.386 137.837L208.02 124.636Z"
        fill={assignColor('Bristol')}
        stroke={element.config.stroke}
        data-name="Bristol"
        data-x="208"
        data-y="124"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Bristol')}
        onMouseLeave={handleMouseLeave}
      />
      {present && renderTooltip()}
      {renderLabels()}
    </svg>
  );
};

MapRhodeIsland.propTypes = ElementPropTypes;
MapRhodeIslandPresent.propTypes = {
  element: PropTypes.object.isRequired,
};
MapRhodeIslandContent.propTypes = {
  element: PropTypes.object.isRequired,
  present: PropTypes.bool,
};

export default MapRhodeIsland;
