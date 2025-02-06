import { ElementPropTypes } from '@/lib/prop-types.js';
import useMapElement from '@/lib/design/use-map-element.jsx';
import PropTypes from 'prop-types';

const MapNevada = ({ element }) => {
  return <MapNevadaContent element={element} />;
};

export const MapNevadaPresent = ({ element }) => {
  return <MapNevadaContent element={element} />;
};

export const MapNevadaPreview = () => {
  return <MapNevadaContent element={{ config: { data: [], fill: '#f9fafb', stroke: '#f9fafb' } }} present={false} />;
};

export const MapNevadaContent = ({ element, present = true }) => {
  const { el, assignColor, renderLabels, handleMouseMove, handleMouseLeave, renderTooltip } = useMapElement(element);

  return (
    <svg
      style={{ width: element.width, height: element.height }}
      ref={el}
      width="100%"
      viewBox="0 0 294 441"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M167.628 183.697L201.493 183.761L220.53 196.555L245.977 214.141V232.22L245.927 253.275H223.466H202.227L202.177 273.613L202.031 284.304L201.982 306.287L202.177 327.8L202.129 350.979V378.886L185.686 363.072L167.873 346.23L147.809 327.311L140.028 319.967V306.226L139.93 275.036V256.319L135.085 250.664L114.287 226.973L98.1377 208.998L89.4761 199.26V193.973L106.164 189.185L110.128 188.113L124.858 184.896L131.806 183.635L167.628 183.697Z"
        stroke={element.config.stroke}
        data-name="Nye"
        fill={assignColor('Nye')}
        data-x="167"
        data-y="183"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Nye')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M292.515 122.879L268.879 122.815L234.036 122.431L204.967 122.239H196.942L194.641 112.436L189.258 88.2484L189.112 85.8612L189.258 66.0649L168.216 66.1296H147.222L147.173 32.4739L147.222 0.787109L175.704 0.918573L197.333 1.05004L234.868 1.1825L253.023 0.787109L265.6 1.11677L292.908 1.24823L292.956 31.1662L292.908 63.7294L292.858 79.272L292.711 94.9521L292.515 122.879Z"
        stroke={element.config.stroke}
        data-name="Elko"
        fill={assignColor('Elko')}
        data-x="292"
        data-y="122"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Elko')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M292.418 327.739L292.515 349.336L292.467 367.198L291.488 367.986L287.475 377.253L283.413 378.16L276.562 370.289L274.752 370.168L273.333 371.319L269.858 369.744L264.034 370.41L261.587 372.168L258.798 372.713L257.966 374.106L259.434 377.011L258.406 379.915L259.043 382.333L262.028 386.502L260.266 388.133L259.973 390.547L260.805 394.709L260.364 396.276L261.441 397.964L261.342 400.554L262.615 402.179L261.784 404.165L262.615 407.052L261.685 408.256L262.077 410.961L264.426 415.705L265.699 419.665L266.384 426.438L266.922 428.355L266.285 431.527L264.083 431.885L263.252 433.202L265.16 434.517L263.789 437.028L263.888 439L249.108 424.341L235.112 410.72L217.006 393.141L202.129 378.886V350.979L202.178 327.8L209.861 327.739V327.066H231.1L257.82 327.127V327.677L273.87 327.739H292.418Z"
        stroke={element.config.stroke}
        data-name="Clark"
        fill={assignColor('Clark')}
        data-x="292"
        data-y="327"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Clark')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M147.222 0.787109L147.173 32.4739L147.222 66.1296L147.27 89.2802L136.015 89.4097L133.323 96.8842L133.275 86.635L116.588 86.5703V75.3919H96.0334L65.3018 75.5214H60.6029L60.5541 68.6573L35.0581 68.7868H34.0801L34.0303 50.8639H35.3031L35.4007 39.2652H34.3729V27.6346L34.0801 27.5689L34.1289 10.1937L34.3241 1.1825L61.1417 1.24823L87.6656 1.05004L113.064 0.918573L134.057 0.852841L147.222 0.787109Z"
        stroke={element.config.stroke}
        data-name="Humboldt"
        fill={assignColor('Humboldt')}
        data-x="147"
        data-y="0"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Humboldt')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M292.466 214.141V242.635L292.222 278.436L292.271 289.362L292.418 327.739H273.87L257.82 327.677V327.127L231.1 327.066H209.861V327.739L202.178 327.8L201.982 306.287L202.031 284.304L202.178 273.613L202.227 253.275H223.466H245.927L245.977 232.22V214.141H265.551H292.466Z"
        stroke={element.config.stroke}
        data-name="Lincoln"
        fill={assignColor('Lincoln')}
        data-x="292"
        data-y="214"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Lincoln')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M292.515 122.879L292.614 153.044L292.467 180.162L292.32 193.973L292.467 214.141H265.551H245.977L220.53 196.555L201.494 183.761L201.591 164.596L203.402 163.264L205.457 159.902L205.016 158.252L206.093 156.665L205.408 152.917L205.261 147.257L206.044 146.493V142.099L207.023 139.422L205.212 131.318L205.408 126.781L204.967 122.239L234.036 122.431L268.879 122.815L292.515 122.879Z"
        stroke={element.config.stroke}
        data-name="White Pine"
        fill={assignColor('White Pine')}
        data-x="292"
        data-y="122"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'White Pine')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M34.3242 1.18243L34.129 10.1937L34.0802 27.5688L34.373 27.6346V39.2651H35.4008L35.3032 50.8638H34.0304L34.0802 68.7867H35.0582L34.863 86.1838V97.2696H33.6878L33.639 130.552H39.1694L39.1206 136.935H39.9522V142.672L41.714 144.137V150.755L40.8326 153.87L36.7224 154.441H36.1348L34.2266 155.776L31.8284 156.792L28.3047 156.856L27.2281 158.062H24.0481L18.42 161.996L16.1194 160.854L16.0706 165.673H18.1262L17.0008 168.398V176.244L15.3366 178.14L15.484 178.456H13.3796L12.4494 180.288L9.65975 180.793L6.28352 183.508L1.04688 183.445L1.14547 147.129L1.38948 126.781L1.43828 102.61L1.24307 70.4719L1.29187 42.2002L1.34068 21.0863L1.24307 1.1167L25.4175 1.3139L34.3242 1.18243Z"
        stroke={element.config.stroke}
        data-name="Washoe"
        fill={assignColor('Washoe')}
        data-x="34"
        data-y="1"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Washoe')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M168.216 66.1296L167.971 86.5065L168.069 104.474L167.971 114.744L167.628 125.886L168.117 125.822L167.971 154.759L168.069 170.361L167.628 183.697L131.807 183.634L124.858 184.896L110.128 188.113L109.198 187.042L109.394 183.256L112.721 180.477V178.204L110.911 172.512L111.156 170.107L113.944 169.601L115.217 167.194L116.539 167.004L119.23 161.045L123.879 160.092L124.662 158.633L124.368 153.171L125.347 150.946L123.83 146.493L124.221 141.589L125.543 138.019L124.662 134.383L123.34 133.361L121.677 130.296L133.323 96.8842L136.015 89.4097L147.27 89.2802L147.222 66.1296H168.216Z"
        stroke={element.config.stroke}
        data-name="Lander"
        fill={assignColor('Lander')}
        data-x="168"
        data-y="66"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Lander')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M133.324 96.8841L121.677 130.296L110.96 130.423L99.9976 130.36L92.5101 130.552L75.8231 130.616H53.8507L39.1696 130.552H33.6392L33.688 97.2695H34.8632V86.1838L35.0584 68.7867L60.5544 68.6572L60.6032 75.5212H65.302L96.0337 75.3918H116.588V86.5702L133.275 86.6349L133.324 96.8841Z"
        stroke={element.config.stroke}
        data-name="Pershing"
        fill={assignColor('Pershing')}
        data-x="133"
        data-y="96"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Pershing')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M140.028 319.966L123.047 304.136L107.241 289.486L93.7827 277.138L78.2212 262.897L81.9888 263.082L92.8525 250.912L114.287 226.973L135.085 250.664L139.931 256.319V275.036L140.028 306.225V319.966Z"
        stroke={element.config.stroke}
        data-name="Esmeralda"
        fill={assignColor('Esmeralda')}
        data-x="140"
        data-y="319"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Esmeralda')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M62.2182 189.185L91.1403 189.249L106.164 189.185L89.4761 193.973V199.26L98.1378 208.998L114.287 226.973L92.8523 250.912L81.9886 263.082L78.221 262.897L57.0802 243.695L42.6431 230.722L54.682 230.597V208.747L54.9758 203.283H49.3477V197.12L54.1432 189.185H62.2182Z"
        stroke={element.config.stroke}
        data-name="Mineral"
        fill={assignColor('Mineral')}
        data-x="62"
        data-y="189"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Mineral')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M121.677 130.296L123.34 133.361L124.662 134.383L125.543 138.019L124.222 141.589L123.83 146.493L125.347 150.946L124.368 153.171L124.662 158.633L123.879 160.092L119.23 161.045L116.539 167.004L115.217 167.193L113.944 169.601L111.156 170.107L110.911 172.512L112.721 178.204V180.477L109.394 183.256L109.198 187.041L110.128 188.113L106.164 189.185L91.1405 189.248L62.2184 189.185V186.789L56.689 181.362L55.5626 179.657L50.8647 174.852L49.7881 174.916L44.3563 169.41L44.4051 161.045L45.7755 161.108L45.7267 149.038L40.8326 153.87L41.714 150.755V144.137L39.9522 142.672V136.935H39.1206L39.1694 130.552L53.8505 130.616H75.8229L92.5099 130.552L99.9974 130.36L110.96 130.423L121.677 130.296Z"
        stroke={element.config.stroke}
        data-name="Churchill"
        fill={assignColor('Churchill')}
        data-x="121"
        data-y="130"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Churchill')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M204.967 122.239L205.407 126.781L205.212 131.318L207.023 139.422L206.044 142.099V146.493L205.261 147.257L205.407 152.917L206.093 156.665L205.016 158.252L205.457 159.902L203.402 163.265L201.591 164.596L201.493 183.761L167.628 183.697L168.069 170.361L167.971 154.759L168.117 125.822L167.628 125.886L167.971 114.744L168.069 104.474L167.971 86.5066L168.216 66.1297L189.258 66.0649L189.112 85.8612L189.258 88.2485L194.641 112.436L196.942 122.239H204.967Z"
        stroke={element.config.stroke}
        data-name="Eureka"
        fill={assignColor('Eureka')}
        data-x="204"
        data-y="122"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Eureka')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M62.2183 189.185H54.1432L49.3477 197.121V203.283H54.9758L54.682 208.747V230.597L42.6431 230.722L33.9814 223.034L34.0302 216.084H33.101L33.0522 210.567L30.2138 210.88L30.5076 205.859L29.675 205.482L29.7238 196.743L30.5076 194.981L34.7642 194.54L34.7154 188.618L23.4603 188.492L22.0411 184.139L22.6775 181.615L18.3711 181.551L16.8532 180.857L15.4838 178.456L15.3364 178.14L17.9797 177.256L26.7389 172.638L36.282 154.505L36.7222 154.442L40.8325 153.87L45.7265 149.039L45.7753 161.108L44.4049 161.045L44.3561 169.411L49.7879 174.916L50.8645 174.852L55.5624 179.657L56.6888 181.362L62.2183 186.789V189.185Z"
        stroke={element.config.stroke}
        data-name="Lyon"
        fill={assignColor('Lyon')}
        data-x="62"
        data-y="189"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Lyon')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M23.4605 188.492L34.7156 188.618L34.7644 194.54L30.5078 194.981L29.724 196.743L29.6752 205.482L30.5078 205.859L30.214 210.88L33.0524 210.567L33.1012 216.084H34.0304L33.9816 223.034L15.7768 206.801L1.1943 193.848L1.0957 186.852L12.9394 186.726L13.3796 188.554L23.4605 188.492Z"
        stroke={element.config.stroke}
        data-name="Douglas"
        fill={assignColor('Douglas')}
        data-x="23"
        data-y="188"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Douglas')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M15.3364 178.14L17.0006 176.243V168.397L18.1261 165.673H16.0704L16.1192 160.854L18.4199 161.996L24.0479 158.062H27.2279L28.3045 156.856L31.8282 156.792L34.2264 155.776L36.1346 154.441H36.7222L36.282 154.505L26.7389 172.638L17.9797 177.255L15.3364 178.14Z"
        stroke={element.config.stroke}
        data-name="Storey"
        fill={assignColor('Storey')}
        data-x="15"
        data-y="178"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Storey')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M15.484 178.456L16.8534 180.857L18.3712 181.551L22.6777 181.615L22.0413 184.139L23.4605 188.492L13.3796 188.554L12.9394 186.726L1.09568 186.852L1.04688 183.445L6.28352 183.508L9.65975 180.793L12.4494 180.288L13.3796 178.456H15.484Z"
        stroke={element.config.stroke}
        data-name="Cars"
        fill={assignColor('Cars')}
        data-x="15"
        data-y="178"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Cars')}
        onMouseLeave={handleMouseLeave}
      />
      {present && renderTooltip()}
      {renderLabels()}
    </svg>
  );
};

MapNevada.propTypes = ElementPropTypes;
MapNevadaPresent.propTypes = {
  element: PropTypes.object.isRequired,
};
MapNevadaContent.propTypes = {
  element: PropTypes.object.isRequired,
  present: PropTypes.bool,
};

export default MapNevada;
