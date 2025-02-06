import { ElementPropTypes } from '@/lib/prop-types.js';
import useMapElement from '@/lib/design/use-map-element.jsx';
import PropTypes from 'prop-types';

const MapVermont = ({ element }) => {
  return <MapVermontContent element={element} />;
};

export const MapVermontPresent = ({ element }) => {
  return <MapVermontContent element={element} />;
};

export const MapVermontPreview = () => {
  return <MapVermontContent element={{ config: { data: [], fill: '#f9fafb', stroke: '#f9fafb' } }} present={false} />;
};

const MapVermontContent = ({ element, present = true }) => {
  const { el, assignColor, renderLabels, handleMouseMove, handleMouseLeave, renderTooltip } = useMapElement(element);

  return (
    <svg
      style={{ width: element.width, height: element.height }}
      ref={el}
      width="100%"
      viewBox="0 0 275 441"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M172.724 242.082L168.712 246.678L163.455 249.742L159.304 255.867L159.443 260.268L155.569 268.298L154.186 275.942L148.652 279.952L145.886 291.975L148.237 294.836L143.81 319.601L146.162 328.921L144.502 335.005L140.905 340.134V344.312L124.58 343.933L106.042 346.591L87.5043 340.325V331.964L80.8638 331.773L81.1403 322.836L82.8002 318.269L86.6738 316.556L94.4212 320.743L98.8478 308.559L100.37 299.603L94.2824 297.887L91.5157 294.645L94.006 276.323L95.9433 277.088L103.967 258.737L87.5043 252.231L87.642 246.678L92.6226 235.566L90.6862 230.773L80.0334 228.855V225.21L68.2737 231.348L66.4751 223.292L79.6182 216.765L81.1403 224.635L88.0572 210.043L91.5157 205.239L92.6226 211.58L121.813 222.332L137.308 229.047L154.325 234.415L172.724 242.082Z"
        fill={assignColor('Windsor')}
        stroke={element.config.stroke}
        data-name="Windsor"
        data-x="172"
        data-y="242"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Windsor')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M80.8637 331.773L49.5969 330.443L26.9089 328.922L27.877 291.594L27.7393 283.579L21.7906 277.088L20.2684 269.445L10.7225 270.21L9.20041 278.234L3.11394 277.851L3.94337 270.018L2.69873 266.769L12.1059 245.338L33.9645 242.849L32.3047 229.238L40.8814 228.088L58.5899 227.321L60.2497 235.375L68.2735 231.348L80.0332 225.21V228.855L90.6861 230.773L92.6224 235.566L87.6418 246.678L87.5041 252.231L103.967 258.737L95.9431 277.088L94.0058 276.323L91.5155 294.645L94.2822 297.887L100.37 299.603L98.8476 308.559L94.421 320.743L86.6737 316.556L82.8 318.269L81.1401 322.836L80.8637 331.773Z"
        fill={assignColor('Rutland')}
        stroke={element.config.stroke}
        data-name="Rutland"
        data-x="80"
        data-y="331"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Rutland')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M69.104 166.735L71.5943 166.348L74.0845 184.078L76.8513 183.885L98.2947 192.163L91.5155 205.239L88.0571 210.043L81.1402 224.635L79.618 216.765L66.475 223.292L68.2735 231.348L60.2497 235.375L58.5899 227.321L40.8814 228.088L32.3047 229.238L33.9645 242.849L12.1059 245.338L12.7976 239.399L8.23228 232.307L10.4461 228.28L9.47792 218.877L5.88073 210.427L4.91258 192.739L1.45312 186.773L7.40285 169.241L8.23228 161.14L17.9169 150.91L19.3003 147.047L28.1535 147.627L66.3372 141.25L69.104 166.735Z"
        fill={assignColor('Addison')}
        stroke={element.config.stroke}
        data-name="Addison"
        data-x="69"
        data-y="166"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Addison')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M223.358 131.001L218.516 133.129L214.642 131.195L205.373 133.323L197.072 136.61L191.954 144.728L193.614 150.91L191.4 160.948L194.997 167.699L177.428 160.948L158.751 162.684L149.897 158.632L157.229 145.501L156.952 140.476L163.593 132.549L170.925 118.614L169.957 115.902L140.766 100.2L149.067 85.0595L164.7 93.0204L180.747 61.9203L188.633 65.6183L185.036 52.9633L199.148 62.6988L209.246 49.0667L223.358 59.3901L213.398 72.8157L222.666 79.8134L213.535 92.2439L220.73 102.14L214.366 110.089L210.216 112.802L223.358 131.001Z"
        fill={assignColor('Caledonia')}
        stroke={element.config.stroke}
        data-name="Caledonia"
        data-x="223"
        data-y="131"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Caledonia')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M140.766 100.2L169.957 115.902L170.925 118.614L163.593 132.549L156.953 140.476L157.229 145.501L149.897 158.632L142.841 155.35L139.522 173.097L123.473 166.542L119.462 167.12L106.319 195.432L98.2947 192.162L76.8513 183.885L74.0846 184.078L71.5943 166.348L69.104 166.735L76.8513 144.728L74.7763 143.57L82.5236 127.519L86.6737 128.68L89.5792 122.68L84.8751 120.163L89.5792 110.865L95.1127 112.415L110.469 121.131L118.355 105.242L133.019 115.708L140.766 100.2Z"
        fill={assignColor('Washington')}
        stroke={element.config.stroke}
        data-name="Washington"
        data-x="140"
        data-y="100"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Washington')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M223.358 131.001L210.216 112.802L214.366 110.089L220.73 102.14L213.535 92.2439L222.666 79.8134L213.398 72.8157L223.358 59.3901L209.247 49.0667L204.405 45.7539L218.24 28.0016L210.769 22.5339L215.195 2.00581L274.546 0.832031L265.138 4.15873L264.17 7.09317L267.628 12.1775L267.075 15.8915L270.395 22.5339L263.201 30.7344L259.465 44.7788L251.58 52.7686L256.561 63.2827L258.221 70.4821L261.542 72.2318L262.786 83.1172L264.723 85.2531L257.114 91.662L259.604 95.5436L259.189 100.782L248.537 110.089L247.568 113.189L242.034 118.032L229.169 121.712L226.816 128.68L223.358 131.001Z"
        fill={assignColor('Essex')}
        stroke={element.config.stroke}
        data-name="Essex"
        data-x="223"
        data-y="131"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Essex')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M149.897 158.632L158.751 162.684L177.428 160.948L194.998 167.699L195.413 173.675L193.199 176.18L194.582 181.382L186.143 196.01L184.76 212.924L177.013 220.796L175.214 225.403L175.491 235.758L172.724 242.082L154.325 234.416L137.308 229.047L121.813 222.332L92.6225 211.58L91.5156 205.239L98.2948 192.163L106.319 195.432L119.462 167.12L123.473 166.542L139.522 173.097L142.841 155.35L149.897 158.632Z"
        fill={assignColor('Orange')}
        stroke={element.config.stroke}
        data-name="Orange"
        data-x="149"
        data-y="158"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Orange')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M215.195 2.00586L210.768 22.534L218.239 28.0016L204.404 45.754L209.246 49.0667L199.147 62.6989L185.036 52.9633L188.633 65.6184L180.747 61.9204L164.7 93.0204L149.067 85.0595L150.035 83.3108L134.264 75.3429L143.118 58.0267L120.845 46.7281L127.209 36.3937L126.24 18.6274L124.303 2.39712L163.731 3.37626L189.049 3.18063L202.191 2.20149L215.195 2.00586Z"
        fill={assignColor('Orleans')}
        stroke={element.config.stroke}
        data-name="Orleans"
        data-x="215"
        data-y="2"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Orleans')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M69.1039 166.735L66.3372 141.25L28.1535 147.627L19.3003 147.047L15.9796 127.325L21.7905 113.383L21.0989 105.242L17.9169 96.5137L12.2446 89.1377L21.6518 86.2242L27.4618 80.3962L27.6005 73.7878L30.3673 72.2317L30.9212 58.0266L57.3442 72.0371L72.9776 75.5374L74.9139 75.9257L86.1207 91.2736L85.9819 98.0658L89.7169 100.2L84.875 109.313L89.5791 110.865L84.875 120.163L89.5791 122.68L86.6736 128.68L82.5235 127.519L74.7762 143.57L76.8512 144.728L69.1039 166.735Z"
        fill={assignColor('Chittenden')}
        stroke={element.config.stroke}
        data-name="Chittenden"
        data-x="69"
        data-y="166"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Chittenden')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M87.5043 340.325L106.042 346.591L124.58 343.933L140.905 344.313L138.83 352.096L138.138 361.011L140.766 365.75L139.66 374.465L136.478 377.685L139.107 386.013L136.063 393.39L127.347 398.116L128.177 404.352L124.027 414.737L127.347 426.622L130.944 432.653L134.541 433.029L137.723 440L72.2862 438.117L73.5308 402.462L61.4956 401.895L63.0167 366.129L80.7252 367.266L81.6934 349.818L83.4919 338.995L87.5043 340.325Z"
        fill={assignColor('Windham')}
        stroke={element.config.stroke}
        data-name="Windham"
        data-x="87"
        data-y="340"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Windham')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M124.303 2.39707L126.24 18.6273L127.209 36.3937L120.845 46.7281L116.141 42.6348L97.6028 45.7539L92.6222 55.3008L90.8236 64.0613L83.215 60.3633L77.5428 71.2596L72.9774 75.5375L57.344 72.0371L30.9211 58.0267L26.9087 50.2364L29.8142 41.0748L33.4114 38.7342L36.0394 22.1437L31.1976 19.7991L29.1225 13.7406L35.9007 1.41892L55.1312 0.832031L68.965 1.22329L87.5039 0.832031L115.311 1.41892L124.303 2.39707Z"
        fill={assignColor('Franklin')}
        stroke={element.config.stroke}
        data-name="Franklin"
        data-x="124"
        data-y="2"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Franklin')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M80.8635 331.773L87.5039 331.964V340.325L83.4915 338.994L81.6929 349.818L80.7247 367.266L63.0163 366.129L61.4952 401.895L73.5304 402.462L72.2857 438.117L24.5571 436.609L22.2046 425.678L24.0032 420.02L25.1101 376.927L26.9087 328.921L49.5967 330.442L80.8635 331.773Z"
        fill={assignColor('Bennington')}
        stroke={element.config.stroke}
        data-name="Bennington"
        data-x="80"
        data-y="331"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Bennington')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M120.845 46.728L143.118 58.0266L134.264 75.3428L150.036 83.3107L149.067 85.0594L140.766 100.2L133.019 115.708L118.355 105.242L110.469 121.131L95.1126 112.415L89.5791 110.865L84.875 109.313L89.7168 100.2L85.9819 98.0658L86.1206 91.2736L74.9139 75.9257L72.9775 75.5374L77.5429 71.2595L83.2151 60.3632L90.8237 64.0612L92.6223 55.3008L97.6029 45.7539L116.141 42.6348L120.845 46.728Z"
        fill={assignColor('Lamoille')}
        stroke={element.config.stroke}
        data-name="Lamoille"
        data-x="120"
        data-y="46"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Lamoille')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M12.2446 89.1378L9.89204 84.0883L8.78613 75.5375L12.3823 63.2828L12.1058 54.5214L15.9795 43.0241L9.61556 35.0283L12.6598 23.3155L15.4266 19.6035L15.703 11.0038L13.628 6.70194L15.0113 2.00583L35.9008 1.41895L29.1226 13.7406L31.1977 19.7991L36.0395 22.1437L33.4115 38.7343L29.8143 41.0748L26.9088 50.2365L30.9212 58.0267L30.3673 72.2318L27.6005 73.7879L27.4618 80.3963L21.6518 86.2243L12.2446 89.1378Z"
        fill={assignColor('Grand Isle')}
        stroke={element.config.stroke}
        data-name="Grand Isle"
        data-x="12"
        data-y="89"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Grand Isle')}
        onMouseLeave={handleMouseLeave}
      />
      {present && renderTooltip()}
      {renderLabels()}
    </svg>
  );
};

MapVermont.propTypes = ElementPropTypes;
MapVermontPresent.propTypes = {
  element: PropTypes.object.isRequired,
};
MapVermontContent.propTypes = {
  element: PropTypes.object.isRequired,
  present: PropTypes.bool,
};

export default MapVermont;
