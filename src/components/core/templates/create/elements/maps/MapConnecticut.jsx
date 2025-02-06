import { ElementPropTypes } from '@/lib/prop-types.js';
import useMapElement from '@/lib/design/use-map-element.jsx';
import PropTypes from 'prop-types';

const MapConnecticut = ({ element }) => {
  return <MapConnecticutContent element={element} />;
};

export const MapConnecticutPresent = ({ element }) => {
  return <MapConnecticutContent element={element} />;
};

export const MapConnecticutPreview = () => {
  return (
    <MapConnecticutContent element={{ config: { data: [], fill: '#f9fafb', stroke: '#f9fafb' } }} present={false} />
  );
};

export const MapConnecticutContent = ({ element, present = true }) => {
  const { el, assignColor, renderLabels, handleMouseMove, handleMouseLeave, renderTooltip } = useMapElement(element);

  return (
    <svg
      style={{ width: element.width, height: element.height }}
      ref={el}
      width="100%"
      viewBox="0 0 400 289"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M87.076 160.88L96.094 169.631L105.931 171.817L126.835 198.312L137.082 207.043L128.065 226.129L125.606 237.57L128.475 242.472L124.786 248.46L117.818 244.65L91.79 253.631L77.854 260.432L73.755 258.8L61.458 273.482L40.964 279.189L33.381 287.881L15.961 285.436L1 261.248L51.416 230.488L37.48 208.953L44.038 106.369L48.547 114.323L59.204 145.557L59.614 154.589L71.091 148.295L73.55 155.409L87.076 160.88Z"
        stroke={element.config.stroke}
        data-name="Fairfield"
        fill={assignColor('Fairfield')}
        data-x="87"
        data-y="160"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Fairfield')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M201.435 130.769L204.099 169.084H221.314L230.127 183.294V199.403L245.702 219.315L237.3 215.225L227.257 214.68L211.067 217.952L200.615 215.498L186.064 216.589L172.947 222.586L163.725 218.224L157.987 221.223L148.354 232.123L139.952 231.306L128.475 242.472L125.606 237.57L128.065 226.129L137.082 207.043L126.835 198.312L105.931 171.817L96.0939 169.631L87.0759 160.88L85.2319 150.758L118.637 148.568L116.793 136.522L131.754 133.235L138.517 123.096L154.093 114.049L163.11 112.678L164.135 122.822L161.676 136.795L201.435 130.769Z"
        stroke={element.config.stroke}
        data-name="New Haven"
        fill={assignColor('New Haven')}
        data-x="201"
        data-y="130"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'New Haven')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M148.764 4.01293L144.46 24.1459L173.767 22.4919L168.029 43.4299L162.905 43.7049L160.036 54.9899L163.725 58.8419L161.061 68.1919L147.125 70.3919L154.093 114.049L138.517 123.096L131.754 133.235L116.793 136.522L118.637 148.568L85.2321 150.758L87.0761 160.88L73.5501 155.409L71.0911 148.295L59.6141 154.589L59.2041 145.557L48.5471 114.323L44.0381 106.369L49.7771 18.6319L50.1861 1.25293H75.5991L148.764 4.01293Z"
        stroke={element.config.stroke}
        data-name="Litchfield"
        fill={assignColor('Litchfield')}
        data-x="148"
        data-y="4"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Litchfield')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M251.236 5.39294L254.72 29.3819L250.211 30.2089L249.186 54.4399L251.646 67.3679L257.999 66.5429L263.737 105.271L271.525 116.517L271.32 124.467L260.048 129.399L252.056 112.129L209.222 117.339L208.813 123.37L201.435 130.769L161.676 136.795L164.135 122.822L163.11 112.678L154.093 114.049L147.125 70.3919L161.061 68.1919L163.725 58.8419L160.036 54.9899L162.905 43.7049L168.029 43.4299L173.767 22.4919L144.46 24.1459L148.764 4.01294L188.318 4.56494L187.908 15.5989L197.951 13.9439L200.41 5.11694L238.119 6.77194L251.236 5.39294Z"
        stroke={element.config.stroke}
        data-name="Hartford"
        fill={assignColor('Hartford')}
        data-x="251"
        data-y="5"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Hartford')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M306.366 93.7439L324.606 106.917L365.389 115.42L384.654 112.678L399 114.049L396.951 174.551L388.138 177.283L389.982 195.582L364.16 196.674L357.601 202.132L342.436 202.678L326.245 205.952L319.277 201.314L301.857 211.407L289.15 212.771L285.051 205.679V196.401L279.313 187.937L268.451 181.382L267.836 173.457L293.044 169.904L289.355 143.094L267.426 145.557L260.048 129.399L271.32 124.467L285.256 125.289L287.101 112.952L298.578 105.271L306.366 93.7439Z"
        stroke={element.config.stroke}
        data-name="New London"
        fill={assignColor('New London')}
        data-x="306"
        data-y="93"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'New London')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M334.648 6.77195L335.058 26.3509H311.079V60.2169L321.941 60.492L323.581 82.7589L306.366 93.7439L298.578 105.271L287.101 112.952L285.256 125.289L271.32 124.467L271.525 116.517L263.737 105.271L257.999 66.5429L251.646 67.3679L249.186 54.4399L250.211 30.2089L254.72 29.382L251.236 5.39294L334.648 6.77195Z"
        stroke={element.config.stroke}
        data-name="Tolland"
        fill={assignColor('Tolland')}
        data-x="334"
        data-y="6"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Tolland')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M334.648 6.77197L396.746 8.42797L399 114.049L384.654 112.678L365.389 115.42L324.606 106.917L306.366 93.744L323.581 82.759L321.941 60.492L311.079 60.217V26.351H335.058L334.648 6.77197Z"
        stroke={element.config.stroke}
        data-name="Windham"
        fill={assignColor('Windham')}
        data-x="334"
        data-y="6"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Windham')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M260.048 129.399L267.426 145.557L289.355 143.094L293.044 169.904L267.836 173.457L268.451 181.382L279.313 187.937L283.207 201.586L280.543 216.861L273.37 212.771H262.713L245.702 219.315L230.127 199.403V183.294L221.314 169.084H204.099L201.435 130.769L208.813 123.37L209.222 117.339L252.056 112.129L260.048 129.399Z"
        stroke={element.config.stroke}
        data-name="Middlesex"
        fill={assignColor('Middlesex')}
        data-x="260"
        data-y="129"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Middlesex')}
        onMouseLeave={handleMouseLeave}
      />
      {present && renderTooltip()}
      {renderLabels()}
    </svg>
  );
};

MapConnecticut.propTypes = ElementPropTypes;
MapConnecticutPresent.propTypes = {
  element: PropTypes.object.isRequired,
};
MapConnecticutContent.propTypes = {
  element: PropTypes.object.isRequired,
  present: PropTypes.bool,
};

export default MapConnecticut;
