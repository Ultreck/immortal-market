import ElementWrapper from '../../ElementWrapper.jsx';
import { ElementPropTypes } from '@/lib/prop-types.js';
import useMapElement from '@/lib/design/use-map-element.jsx';
import PropTypes from 'prop-types';

const MapHawaii = ({ element, active, highlighted, width, onClick, onChange }) => {
  return (
    <ElementWrapper
      element={element}
      onClick={onClick}
      onChange={onChange}
      maxWidth={width}
      active={active}
      highlighted={highlighted}
      resizeHandles={['e']}
      editable
      fit
    >
      <MapHawaiiContent element={element} />
    </ElementWrapper>
  );
};

export const MapHawaiiPresent = ({ element }) => {
  return <MapHawaiiContent element={element} />;
};

export const MapHawaiiPreview = () => {
  return <MapHawaiiContent element={{ config: { data: [], fill: '#f9fafb', stroke: '#f9fafb' } }} />;
};

const MapHawaiiContent = ({ element }) => {
  const { el, assignColor, renderLabels } = useMapElement(element);

  return (
    <svg ref={el} width="100%" viewBox="0 0 400 262" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M322.73 155.29L330.283 157.947L331.677 160.292L342.017 167.323L344.071 166.308L353.384 169.354L358.371 172.633L366.365 176.146L375.239 182.622L378.466 186.756L379.272 189.641L379.346 198.136L382.646 196.811L385.799 197.59L387.119 200.707L386.899 204.756L392.326 210.05L398.56 213.163L399 216.198L397.093 218.92L387.853 226.851L380.739 229.882L376.339 233.224L369.592 234.234L363.725 233.767L358.665 238.428L354.851 239.826L351.478 243.32L349.131 243.708L344.731 247.821L344.511 250.77L340.844 256.665L336.957 260.387L326.47 253.252L320.676 251.468L318.036 245.26L320.016 233.457L320.309 227.551L318.109 223.12L317.156 218.454L314.662 213.864L314.222 209.194L312.462 204.756L310.116 203.9L308.649 200.395L308.502 193.85L313.636 188.237L317.449 187.614L320.896 180.75L324.123 178.253L324.636 174.273L320.163 166.933L318.843 161.699L319.429 157.557L322.73 155.29Z"
        fill={assignColor('Hawaii')}
        stroke={element.config.stroke}
        data-name="Hawaii"
        data-x="322"
        data-y="155"
      />
      <path
        d="M237.439 83.8539L244.259 88.4929L244.772 84.9549L250.786 85.4269L257.46 84.5609L259.806 86.9209L254.306 92.7379L248.219 95.0169L242.352 93.5239L234.872 90.3009L220.058 91.3229L216.171 89.7509L220.058 84.7189L220.131 80.4709L225.265 82.3589H229.518L237.439 83.8539ZM269.047 95.8029L271.394 97.4529L276.16 105.228L279.534 106.327L287.894 102.558L295.521 103.971L298.235 107.504L302.929 109.78L303.955 112.134L311.069 114.096L313.562 118.175L311.876 122.644L307.989 125.701L302.562 128.13L297.942 127.503L290.755 131.029L282.834 131.499L280.341 130.167L279.314 122.565L277.554 115.194L273.3 116.214L266.113 113.311L262.96 109.545L261.273 105.385L263.18 98.1599L265.233 96.1169L269.047 95.8029ZM239.712 103.814L246.312 105.149L251.006 109.309L252.913 113.39L250.419 117.39L241.179 119.429L239.639 116.92L239.419 112.37L235.458 108.682L234.798 105.306L239.712 103.814ZM272.714 132.361L271.834 136.277L268.68 135.885L263.547 137.843L262.74 133.457L269.267 129.619L272.714 132.361Z"
        fill={assignColor('Maui')}
        stroke={element.config.stroke}
        data-name="Maui"
        data-x="237"
        data-y="83"
      />
      <path
        d="M54.683 3.42395L56.663 1.52295L62.31 1.68195L68.91 4.77095L70.89 9.52195L67.663 15.854L68.177 22.182L66.123 25.1069L59.156 29.771L47.276 27.1629L43.462 23.2889L37.302 21.549L34.002 16.724L40.602 6.59195L45.442 5.00795L51.603 1.12695L54.683 3.42395ZM14.714 19.4139L13.541 23.21L14.054 27.558L8.26 29.771L3.64 37.0389L1 34.432L2.687 28.269L5.4 25.503L10.24 22.8139L11.121 20.2049L14.714 19.4139Z"
        fill={assignColor('Kauai')}
        stroke={element.config.stroke}
        data-name="Kauai"
        data-x="54"
        data-y="3"
      />
      <path
        d="M167.182 42.408L169.528 43.592L174.149 52.349L177.889 56.923L177.229 60.785L179.649 63.937L186.543 66.616L187.643 71.341L191.53 73.703L186.689 77.796L185.663 76.3L178.549 77.717L173.415 72.207L171.655 73.782L167.695 73.388L158.015 75.041L155.448 69.057L152.808 66.773L151.781 63.386L148.554 60.943L148.627 56.529L145.034 52.902L150.681 51.955L156.915 52.034L163.588 44.223L167.182 42.408Z"
        fill={assignColor('Honolulu')}
        stroke={element.config.stroke}
        data-name="Honolulu"
        data-x="167"
        data-y="42"
      />
      <path
        d="M244.772 84.955L244.259 88.493L237.439 83.854L241.619 81.73L244.772 84.955Z"
        fill={assignColor('Kalawao')}
        stroke={element.config.stroke}
        data-name="Kalawao"
        data-x="244"
        data-y="84"
      />

      {renderLabels()}
    </svg>
  );
};

MapHawaii.propTypes = ElementPropTypes;
MapHawaiiPresent.propTypes = {
  element: PropTypes.object.isRequired,
};
MapHawaiiContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default MapHawaii;
