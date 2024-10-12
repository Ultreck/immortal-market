import { ElementPropTypes } from '@/lib/prop-types.js';
import ElementWrapper from '../../ElementWrapper.jsx';
import useMapElement from '@/lib/design/use-map-element.jsx';
import PropTypes from 'prop-types';

const MapMississippi = ({ element, active, highlighted, width, onClick, onChange }) => {
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
      <MapMississippiContent element={element} />
    </ElementWrapper>
  );
};

export const MapMississippiPresent = ({ element }) => {
  return <MapMississippiContent element={element} />;
};

export const MapMississippiPreview = () => {
  return <MapMississippiContent element={{ config: { data: [], fill: '#f9fafb', stroke: '#f9fafb' } }} />;
};

export const MapMississippiContent = ({ element }) => {
  const { el, assignColor, renderLabels } = useMapElement(element);

  return (
    <svg ref={el} width="100%" viewBox="0 0 275 441" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M130.972 197.165L127.059 204.105L124.757 210.036L120.998 213.228L119.003 213.046L113.019 216.51L106.881 217.239L102.814 221.703L97.2136 224.708H93.9147L92.2264 227.529L87.2392 231.169L85.9348 230.624L83.327 227.439L78.3398 227.165L78.263 223.433L75.6542 223.342L73.2758 220.701L73.1222 216.783L76.9586 216.327L77.4951 213.957L71.6643 210.493L74.0427 203.74L70.3599 200.819L78.3398 193.145L93.9915 193.236V185.098L100.589 184.914H102.431L130.281 196.709L130.972 197.165Z"
        stroke={element.config.stroke}
        data-name="Yazoo"
        fill={assignColor('Yazoo')}
        data-x="130"
        data-y="197"
      />
      <path
        d="M149.078 196.709L149.155 219.334L145.012 223.798L141.099 223.525L137.186 225.8L136.573 227.712L131.509 232.079L126.752 233.716L123.683 237.263L122.992 240.807L109.567 240.535L109.719 232.625L93.838 232.535L93.9148 224.708H97.2137L102.814 221.703L106.881 217.239L113.019 216.51L119.003 213.046L120.998 213.228L124.758 210.036L127.059 204.105L130.972 197.165L140.946 197.257L149.078 196.709Z"
        stroke={element.config.stroke}
        data-name="Madison"
        fill={assignColor('Madison')}
        data-x="149"
        data-y="196"
      />
      <path
        d="M93.9148 224.708L93.838 232.535L109.719 232.625L109.567 240.534L122.992 240.807L120.998 241.716L119.08 246.167L114.63 250.887L112.635 255.605L113.863 259.051L109.413 261.318L109.336 266.754L110.487 272.187L73.4295 272.278L72.7384 256.331L74.6571 250.887L75.1168 244.714L80.1808 245.803L79.7979 243.078L82.636 236.081L82.2521 233.352L85.9349 230.624L87.2393 231.169L92.2265 227.529L93.9148 224.708Z"
        stroke={element.config.stroke}
        data-name="Hinds"
        fill={assignColor('Hinds')}
        data-x="93"
        data-y="224"
      />
      <path
        d="M78.1095 95.2075L77.8023 129.462L69.9002 129.369L69.8234 137.381L35.8344 137.473L34.6068 133.791L41.3591 131.58V128.725L37.6763 125.775L34.9908 125.222L35.8344 121.535L39.3637 121.166L44.658 125.591L48.8773 124.208L48.0337 120.704L43.8911 120.981L40.5913 118.859L40.8216 114.891L47.5739 114.43L49.9524 115.814L51.4861 112.307L48.264 111.107L46.3463 106.211L51.2558 100.573L45.1187 97.7973L45.1955 95.8547L50.4121 93.7266L52.1004 97.2429L54.6324 96.7801L52.7905 92.1529L60.3865 91.413L61.7677 85.4854L58.3152 85.3926L55.2457 82.8915L77.8791 82.7061L78.1095 95.2075Z"
        stroke={element.config.stroke}
        data-name="Bolivar"
        fill={assignColor('Bolivar')}
        data-x="78"
        data-y="95"
      />
      <path
        d="M115.013 155.216L147.851 166.228L144.321 170.996L144.398 174.295L142.48 175.486L141.176 182.444L137.34 187.11L136.342 192.322L130.972 197.166L130.281 196.709L102.431 184.914H100.589L98.6716 181.437L95.602 179.972L95.2959 177.042L103.198 173.47L103.044 158.154L105.576 157.236L106.037 152.92L115.013 155.216Z"
        stroke={element.config.stroke}
        data-name="Holmes"
        fill={assignColor('Holmes')}
        data-x="115"
        data-y="155"
      />
      <path
        d="M85.9348 230.624L82.252 233.352L82.636 236.081L79.7978 243.079L80.1808 245.803L75.1168 244.714L74.6571 250.887L72.7384 256.331L71.9715 258.145L67.7522 260.592L69.2091 262.768L60.3865 265.939L56.8573 269.381L49.4917 266.301L51.6397 262.224L48.8773 261.227L47.7265 265.667L39.2111 264.489L38.9039 259.505L48.1105 255.243L53.1745 257.691V250.887L55.86 251.068L59.3125 247.801L57.7009 246.076L52.3308 244.805L51.18 243.351L54.4021 238.263L51.6397 236.081L49.1845 237.353L46.0392 236.262L43.2768 233.444L42.8929 230.351L44.658 227.166L50.2585 232.898L52.1004 230.624L47.3436 228.349L46.0392 225.8L48.7248 224.435L54.5556 224.617L55.5529 236.626L62.4578 236.536V224.617L69.5931 224.708L72.5858 225.527L73.2759 220.701L75.6543 223.342L78.2631 223.433L78.3399 227.166L83.3271 227.439L85.9348 230.624Z"
        stroke={element.config.stroke}
        data-name="Warren"
        fill={assignColor('Warren')}
        data-x="85"
        data-y="230"
      />
      <path
        d="M97.7502 54.2946L97.827 69.2562H93.9148L93.838 86.7827L93.7612 95.3002L78.1095 95.2074L77.8791 82.706L55.2457 82.8915V81.0376L58.6982 78.6273L63.9157 80.9449L66.1406 79.2755L64.3755 76.2159L64.7594 68.606L69.5163 68.235L71.2814 64.8913L69.4395 60.9891L71.1278 59.3157L76.4212 59.7804L84.3243 55.3177L83.4029 47.0366L84.9376 45.0811L97.7502 54.2946Z"
        stroke={element.config.stroke}
        data-name="Coahoma"
        fill={assignColor('Coahoma')}
        data-x="97"
        data-y="54"
      />
      <path
        d="M73.5063 161.183L72.1251 164.302L75.7311 166.779L74.6571 177.042H58.3911L58.4679 185.19L39.3637 185.006L42.3564 181.803L41.5895 179.514L36.5255 176.218L38.2897 172.829L43.8912 174.02L45.1188 172.004L44.7348 166.045L47.6498 163.293L45.2714 160.541L43.2001 163.385L40.8984 157.971L40.7449 155.216L47.4204 146.763L44.4277 144.741L43.2001 149.797L38.8272 151.083L36.9095 147.591L41.6663 146.579L42.1261 142.441L38.2129 140.417L38.8272 144.464L33.7632 145.752L37.6764 139.958L35.8345 137.473L69.8235 137.381L69.7467 161.275L73.5063 161.183Z"
        stroke={element.config.stroke}
        data-name="Washington"
        fill={assignColor('Washington')}
        data-x="73"
        data-y="161"
      />
      <path
        d="M145.013 223.798L149.001 244.441L149.078 256.875L149.309 272.55L110.487 272.187L109.336 266.754L109.413 261.318L113.863 259.051L112.635 255.605L114.63 250.887L119.08 246.167L120.998 241.716L122.992 240.807L123.684 237.263L126.752 233.716L131.509 232.079L136.573 227.712L137.186 225.8L141.099 223.525L145.013 223.798Z"
        stroke={element.config.stroke}
        data-name="Rankin"
        fill={assignColor('Rankin')}
        data-x="145"
        data-y="223"
      />
      <path
        d="M39.9012 312.373L39.594 335.762L33.8399 333.516L28.6224 334.325L24.1727 335.942L16.0402 340.342L14.5054 346.267L11.2065 347.433L8.82812 345.639L5.98897 350.482L5.60602 348.6L2 345.19L2.23036 343.036L10.8226 342.497L12.3574 338.367L7.90766 332.887L9.05847 328.303L12.127 333.606L15.5027 332.258L15.0429 329.471L12.7413 327.313L12.4341 319.216L17.6517 317.866L20.5666 314.895L19.4926 313.273L14.5054 314.264L12.4341 312.552L13.201 308.948L18.1114 311.832L21.181 310.12L21.2577 303.359L23.0986 299.751L27.0886 299.661L29.3902 304.712L29.3135 306.785L33.8399 310.39L39.8244 310.48L39.9012 312.373Z"
        stroke={element.config.stroke}
        data-name="Adams"
        fill={assignColor('Adams')}
        data-x="39"
        data-y="312"
      />
      <path
        d="M58.4679 185.19L58.5447 191.134L56.3966 198.718L54.7093 200.819V216.691L73.1223 216.783L73.2759 220.701L72.5858 225.527L69.5931 224.708L62.4578 224.617V236.536L55.5529 236.626L54.5557 224.617L48.7248 224.435L47.4972 221.703L41.5896 222.978L40.0548 218.514L47.0365 212.955L47.1901 210.766L39.9012 209.124L39.5173 203.193L40.6681 200.271L43.8912 198.718L46.8829 194.608L44.7349 187.933L41.1288 188.573L41.5128 193.876L37.1389 194.608L35.4515 192.322L36.9095 188.299L39.3637 185.006L58.4679 185.19Z"
        stroke={element.config.stroke}
        data-name="Issaquena"
        fill={assignColor('Issaquena')}
        data-x="58"
        data-y="185"
      />
      <path
        d="M178.464 365.894L179.077 374.841L179.154 398.328L163.349 398.15L163.502 410.003H159.513L155.6 411.249V415.166H152.301L146.01 409.824L143.708 406.172L140.639 396.365L141.714 390.566L141.56 386.369L144.859 383.154L144.705 380.205L147.391 371.711L149.385 369.564L148.926 366.7H155.139H162.889L166.802 365.625L168.72 368.4L172.633 368.49V365.984L178.464 365.894Z"
        stroke={element.config.stroke}
        data-name="Pearl River"
        fill={assignColor('Pearl River')}
        data-x="178"
        data-y="365"
      />
      <path
        d="M155.984 159.622H170.638H180.689V175.76L180.766 192.505L149.078 192.688V196.709L140.946 197.257L130.972 197.165L136.342 192.322L137.34 187.11L141.176 182.444L142.48 175.485L144.398 174.295L144.321 170.996L147.851 166.228L151.457 159.531L155.984 159.622Z"
        stroke={element.config.stroke}
        data-name="Attala"
        fill={assignColor('Attala')}
        data-x="155"
        data-y="159"
      />
      <path
        d="M133.887 78.4419L134.348 80.574L134.118 103.531V110.09L130.358 111.568L117.929 111.476V119.597H111.331L109.336 118.306L106.804 122.087L104.579 118.029L109.106 115.815L112.558 116.092L114.937 114.522L114.399 111.476L93.7612 111.291V95.3003L93.838 86.7828L118.005 86.8756V78.8129L132.046 78.9974L133.887 78.4419Z"
        stroke={element.config.stroke}
        data-name="Tallahatchie"
        fill={assignColor('Tallahatchie')}
        data-x="133"
        data-y="78"
      />
      <path
        d="M144.859 123.748L145.089 147.682L150.383 147.591L155.754 148.877L155.984 159.622L151.457 159.531L147.851 166.228L115.013 155.216L115.09 147.682H117.776L117.853 143.821L120.614 143.728L120.308 125.13L118.619 123.748H144.859Z"
        stroke={element.config.stroke}
        data-name="Carroll"
        fill={assignColor('Carroll')}
        data-x="144"
        data-y="123"
      />
      <path
        d="M149.616 1.1875H178.08V15.0362H182.224L182.376 39.3978L186.366 39.4916V47.8744L180.074 44.7081L172.326 45.3603L168.643 42.1931H153.989L153.835 29.9799H149.846L149.769 21.9511L149.616 1.1875Z"
        stroke={element.config.stroke}
        data-name="Marshall"
        fill={assignColor('Marshall')}
        data-x="149"
        data-y="1"
      />
      <path
        d="M72.7383 256.331L73.4294 272.278L73.6598 278.974L73.3526 291.265L71.8947 296.231L63.6086 296.321L63.7622 292.801L50.4121 289.55L32.4587 288.646L37.8299 284.037L37.4459 280.964L39.2111 278.612L44.3509 277.617L45.5017 275.717L43.584 272.006L49.4916 266.301L56.8573 269.381L60.3865 265.939L69.2091 262.768L67.7521 260.592L71.9715 258.145L72.7383 256.331Z"
        stroke={element.config.stroke}
        data-name="Claiborne"
        fill={assignColor('Claiborne')}
        data-x="72"
        data-y="256"
      />
      <path
        d="M119.08 299.481L109.49 302.728L106.574 304.171L99.2849 304.081L96.5993 305.343L93.9148 304.351L71.9714 304.26L71.8947 296.232L73.3526 291.265L73.6598 278.974L73.4294 272.278L110.487 272.187L109.336 273.636L111.484 277.797L117.699 286.839L118.235 290.452L117.238 295.058L120.231 296.773L119.08 299.481Z"
        stroke={element.config.stroke}
        data-name="Copiah"
        fill={assignColor('Copiah')}
        data-x="119"
        data-y="299"
      />
      <path
        d="M242.374 126.328L243.602 123.379H226.569V111.475L226.646 86.7827V85.3926L240.149 85.4853L266.542 85.6708L262.936 117.476L256.645 117.66L256.337 119.69L252.885 122.825L242.374 126.328Z"
        stroke={element.config.stroke}
        data-name="Monroe"
        fill={assignColor('Monroe')}
        data-x="242"
        data-y="126"
      />
      <path
        d="M247.438 327.853L217.516 328.033L209.537 327.943L209.46 292.981L212.145 292.71L222.196 291.988L233.244 290.182L245.75 286.658L247.438 327.853Z"
        stroke={element.config.stroke}
        data-name="Wayne"
        fill={assignColor('Wayne')}
        data-x="247"
        data-y="327"
      />
      <path
        d="M93.7612 111.291V155.675H85.9348L85.858 161.091L73.5062 161.183L69.7466 161.275L69.8234 137.381L69.9001 129.369L77.8023 129.462L78.1094 95.2075L93.7612 95.3003V111.291Z"
        stroke={element.config.stroke}
        data-name="Sunflower"
        fill={assignColor('Sunflower')}
        data-x="93"
        data-y="111"
      />
      <path
        d="M39.594 335.762L44.5044 338.098L47.19 341.6L47.1132 366.879H2.69006L7.44691 364.014L8.67452 361.865L3.76409 355.951L5.98894 350.482L8.82809 345.639L11.2065 347.433L14.5054 346.267L16.0401 340.342L24.1727 335.942L28.6223 334.325L33.8399 333.516L39.594 335.762Z"
        stroke={element.config.stroke}
        data-name="Wilkinson"
        fill={assignColor('Wilkinson')}
        data-x="39"
        data-y="355"
      />
      <path
        d="M252.195 224.435L211.839 224.708L211.608 192.962L219.587 192.87L255.417 192.505L252.195 224.435Z"
        stroke={element.config.stroke}
        data-name="Kemper"
        fill={assignColor('Kemper')}
        data-x="252"
        data-y="224"
      />
      <path
        d="M250.353 390.476L251.351 421.573L246.977 426.641L243.832 427.441L241.838 425.751L237.771 425.219L235.469 422.195L227.873 425.574L225.112 425.219L219.51 421.75L216.519 417.48L214.217 418.37L214.14 395.741V390.476L217.9 390.833L250.353 390.476Z"
        stroke={element.config.stroke}
        data-name="Jackson"
        fill={assignColor('Jackson')}
        data-x="250"
        data-y="390"
      />
      <path
        d="M117.929 119.597L118.619 123.748L120.308 125.13L120.614 143.728L117.853 143.821L117.776 147.682H115.09L115.013 155.216L106.037 152.92L105.577 157.236L103.045 158.154L101.127 158.705L99.976 163.11L96.8297 163.477L93.6844 161.367L93.7612 155.675V111.291L114.399 111.476L114.937 114.522L112.558 116.092L109.106 115.815L104.579 118.029L106.804 122.087L109.336 118.306L111.331 119.597H117.929Z"
        stroke={element.config.stroke}
        data-name="Leflore"
        fill={assignColor('Leflore')}
        data-x="117"
        data-y="119"
      />
      <path
        d="M262.936 117.476L258.793 159.255L230.482 159.347L230.175 139.497L235.239 139.405L240.073 137.473L243.602 134.067L245.29 130.567L243.065 129.645L242.374 126.328L252.885 122.825L256.338 119.69L256.645 117.66L262.936 117.476Z"
        stroke={element.config.stroke}
        data-name="Lowndes"
        fill={assignColor('Lowndes')}
        data-x="262"
        data-y="117"
      />
      <path
        d="M212.145 292.71L211.992 256.422L248.896 256.331L245.75 286.658L233.244 290.182L222.196 291.988L212.145 292.71Z"
        stroke={element.config.stroke}
        data-name="Clarke"
        fill={assignColor('Clarke')}
        data-x="212"
        data-y="292"
      />
      <path
        d="M150 75.7523V78.4419H133.887L132.046 78.9973L118.005 78.8128L118.159 68.977L113.479 65.727L113.019 46.198V42.2869L149.923 42.1931L150 75.7523Z"
        stroke={element.config.stroke}
        data-name="Panola"
        fill={assignColor('Panola')}
        data-x="150"
        data-y="75"
      />
      <path
        d="M180.305 224.617L180.382 256.694L149.078 256.875L149.001 244.441L145.012 223.798L149.155 219.334V224.526L180.305 224.617Z"
        stroke={element.config.stroke}
        data-name="Scott"
        fill={assignColor('Scott')}
        data-x="180"
        data-y="224"
      />
      <path
        d="M86.3187 335.583V366.879H47.1132L47.19 341.6L44.5044 338.098L52.7905 335.672L79.7978 335.583H86.3187Z"
        stroke={element.config.stroke}
        data-name="Amite"
        fill={assignColor('Amite')}
        data-x="86"
        data-y="335"
      />
      <path
        d="M219.587 192.87L219.357 178.325L219.51 159.439L230.482 159.347L258.793 159.255L255.417 192.505L219.587 192.87Z"
        stroke={element.config.stroke}
        data-name="Noxubee"
        fill={assignColor('Noxubee')}
        data-x="219"
        data-y="192"
      />
      <path
        d="M219.51 159.439L219.357 178.324L219.587 192.87L211.608 192.962L210.304 193.51L203.629 192.414L180.766 192.505L180.689 175.76H188.821V167.787L196.723 167.604L196.877 159.714L198.412 159.622L219.51 159.439Z"
        stroke={element.config.stroke}
        data-name="Winston"
        fill={assignColor('Winston')}
        data-x="218"
        data-y="159"
      />
      <path
        d="M186.366 47.8744V58.2936L186.443 78.6273H166.188V75.9378L150 75.7523L149.923 42.1931H153.989H168.643L172.326 45.3604L180.074 44.7082L186.366 47.8744Z"
        stroke={element.config.stroke}
        data-name="Lafayette"
        fill={assignColor('Lafayette')}
        data-x="186"
        data-y="47"
      />
      <path
        d="M252.195 224.435L248.896 256.331L211.992 256.422L211.839 224.708L252.195 224.435Z"
        stroke={element.config.stroke}
        data-name="Lauderdale"
        fill={assignColor('Lauderdale')}
        data-x="252"
        data-y="224"
      />
      <path
        d="M180.382 256.694L180.458 288.375L180.919 294.968L174.244 295.419L155.063 296.682L155.139 276.531L154.065 272.459L149.309 272.55L149.078 256.875L180.382 256.694Z"
        stroke={element.config.stroke}
        data-name="Smith"
        fill={assignColor('Smith')}
        data-x="180"
        data-y="256"
      />
      <path
        d="M247.438 327.853L249.433 367.058L217.746 366.879H217.516V328.033L247.438 327.853Z"
        stroke={element.config.stroke}
        data-name="Greene"
        fill={assignColor('Greene')}
        data-x="247"
        data-y="327"
      />
      <path
        d="M149.309 272.55L154.065 272.459L155.14 276.531L155.063 296.682L147.314 297.405L130.435 298.398L119.08 299.481L120.231 296.773L117.238 295.058L118.236 290.452L117.699 286.839L111.484 277.797L109.336 273.636L110.487 272.187L149.309 272.55Z"
        stroke={element.config.stroke}
        data-name="Simpson"
        fill={assignColor('Simpson')}
        data-x="149"
        data-y="272"
      />
      <path
        d="M109.49 302.728L109.566 335.583H108.262H86.3188H79.7978V312.103L71.8179 312.012L71.9714 304.26L93.9148 304.351L96.5993 305.343L99.2849 304.081L106.574 304.171L109.49 302.728Z"
        stroke={element.config.stroke}
        data-name="Lincoln"
        fill={assignColor('Lincoln')}
        data-x="109"
        data-y="302"
      />
      <path
        d="M209.537 327.943H193.962H174.704L174.244 295.419L180.919 294.968L209.46 292.981L209.537 327.943Z"
        stroke={element.config.stroke}
        data-name="Jones"
        fill={assignColor('Jones')}
        data-x="209"
        data-y="327"
      />
      <path
        d="M214.14 395.741L214.217 418.37L216.058 421.305L205.24 421.483L199.409 422.996L192.658 426.018L184.908 428.685L184.141 425.219L181.302 422.551L179.077 422.729L179.154 398.328H186.827V395.741H214.14Z"
        stroke={element.config.stroke}
        data-name="Harrison"
        fill={assignColor('Harrison')}
        data-x="214"
        data-y="395"
      />
      <path
        d="M209.46 292.982L180.919 294.968L180.458 288.375L180.382 256.694L211.992 256.422L212.145 292.71L209.46 292.982Z"
        stroke={element.config.stroke}
        data-name="Jasper"
        fill={assignColor('Jasper')}
        data-x="209"
        data-y="292"
      />
      <path
        d="M104.962 13.634L112.942 13.7267V26.4336L110.87 28.0202L111.945 32.3123L109.796 37.9068L113.019 42.2867V46.1979L104.962 46.2916L105.193 54.2945H97.7502L84.9377 45.081L86.9331 43.7766L84.1708 37.9068L85.7055 33.8042L88.9276 34.9231L92.3033 31.5654L91.9194 28.8598L87.0857 28.4869L84.9377 25.8731L89.0812 19.5217L91.0757 26.2461L94.221 23.726L92.2265 19.9894L93.2237 17.2799L91.2293 13.4465L94.6049 11.3892L96.2165 16.4382L101.817 13.9142L104.962 13.634Z"
        stroke={element.config.stroke}
        data-name="Tunica"
        fill={assignColor('Tunica')}
        data-x="104"
        data-y="13"
      />
      <path
        d="M226.569 111.476V123.379H243.602L242.374 126.328L243.065 129.645L245.29 130.567L243.602 134.067L240.073 137.473L235.239 139.405L230.175 139.497L230.098 133.974L203.782 134.159L202.325 127.526L202.402 118.121L202.479 116.83L210.304 116.737L210.457 111.291L226.569 111.476Z"
        stroke={element.config.stroke}
        data-name="Clay"
        fill={assignColor('Clay')}
        data-x="226"
        data-y="111"
      />
      <path
        d="M155.063 328.032L155.139 366.7H148.926H141.176L141.099 360.342L134.961 360.252L133.427 355.056H127.749V350.841H125.831L125.217 346.267V336.93V331.539L131.816 331.899L142.096 331.989V328.123L155.063 328.032Z"
        stroke={element.config.stroke}
        data-name="Marion"
        fill={assignColor('Marion')}
        data-x="155"
        data-y="328"
      />
      <path
        d="M149.616 1.18749L149.769 21.9511L135.499 21.8573L132.046 25.22L125.065 27.8338L120.154 25.4065L118.85 23.4459L115.627 23.1657L112.942 26.4337V13.7268L104.962 13.6341L109.796 9.33097L109.413 5.58832L104.733 1.09375L149.616 1.18749Z"
        stroke={element.config.stroke}
        data-name="DeSoto"
        fill={assignColor('DeSoto')}
        data-x="149"
        data-y="1"
      />
      <path
        d="M179.154 398.328L179.077 422.729L179.768 429.04L172.787 433.927L173.093 435.525L167.723 439.787L164.193 438.544L161.124 439.698L158.209 436.413L156.828 433.038L156.521 425.219L154.756 423.796L152.761 419.527L152.301 415.167H155.6V411.249L159.513 410.003H163.502L163.349 398.15L179.154 398.328Z"
        stroke={element.config.stroke}
        data-name="Hancock"
        fill={assignColor('Hancock')}
        data-x="179"
        data-y="398"
      />
      <path
        d="M71.8947 296.232L71.9714 304.26L71.8179 312.012L39.9011 312.373L39.8244 310.48L33.8399 310.39L29.3134 306.785L29.3902 304.712L27.0886 299.661L23.2522 298.037L25.7842 291.265L28.1626 289.82L30.1571 293.343L32.4587 288.646L50.4121 289.55L63.7622 292.801L63.6086 296.321L71.8947 296.232Z"
        stroke={element.config.stroke}
        data-name="Jefferson"
        fill={assignColor('Jefferson')}
        data-x="71"
        data-y="296"
      />
      <path
        d="M103.044 158.154L103.198 173.47L95.2959 177.042L95.6021 179.972L98.6716 181.437L100.589 184.914L93.9915 185.098V193.236L78.3398 193.145L77.9559 177.042H74.657L75.731 166.779L72.125 164.302L73.5062 161.183L85.858 161.091L85.9348 155.675H93.7612L93.6844 161.367L96.8297 163.477L99.976 163.11L101.127 158.705L103.044 158.154Z"
        stroke={element.config.stroke}
        data-name="Humphreys"
        fill={assignColor('Humphreys')}
        data-x="103"
        data-y="158"
      />
      <path
        d="M186.443 78.6272V86.8754L194.729 86.7826L194.652 111.475H190.663L190.586 118.121V119.597L166.341 119.505V106.118L166.188 78.6272H186.443Z"
        stroke={element.config.stroke}
        data-name="Calhoun"
        fill={assignColor('Calhoun')}
        data-x="186"
        data-y="78"
      />
      <path
        d="M193.962 327.943L194.116 366.789L194.652 374.931L179.077 374.841L178.464 365.894V335.852L170.714 335.942L170.638 327.943H174.704H193.962Z"
        stroke={element.config.stroke}
        data-name="Forrest"
        fill={assignColor('Forrest')}
        data-x="193"
        data-y="327"
      />
      <path
        d="M213.987 375.02L194.652 374.931L194.116 366.789L193.962 327.943H209.537L217.516 328.033V366.879H217.746V374.931L213.987 375.02Z"
        stroke={element.config.stroke}
        data-name="Perry"
        fill={assignColor('Perry')}
        data-x="213"
        data-y="375"
      />
      <path
        d="M218.436 86.6899L226.646 86.7827L226.569 111.475L210.457 111.291L210.304 116.737L202.479 116.83L202.402 118.121H190.586L190.663 111.475H194.652L194.729 86.7827L218.436 86.6899Z"
        stroke={element.config.stroke}
        data-name="Chickasaw"
        fill={assignColor('Chickasaw')}
        data-x="218"
        data-y="86"
      />
      <path
        d="M166.265 123.563L166.572 143.545H176.086L173.63 146.028L170.484 146.211L170.638 159.622H155.984L155.754 148.877L150.383 147.591L145.089 147.682L144.859 123.747L166.265 123.563Z"
        stroke={element.config.stroke}
        data-name="Montgomery"
        fill={assignColor('Montgomery')}
        data-x="166"
        data-y="123"
      />
      <path
        d="M198.335 137.105L198.412 159.622L196.877 159.714L196.723 167.604L188.821 167.787V175.76H180.689V159.622H170.638L170.484 146.211L173.63 146.028L176.086 143.545L184.755 138.301L191.584 137.013L198.335 137.105Z"
        stroke={element.config.stroke}
        data-name="Choctaw"
        fill={assignColor('Choctaw')}
        data-x="198"
        data-y="137"
      />
      <path
        d="M44.5044 338.098L39.594 335.762L39.9011 312.373L71.8179 312.012L79.7978 312.102V335.583L52.7905 335.672L44.5044 338.098Z"
        stroke={element.config.stroke}
        data-name="Franklin"
        fill={assignColor('Franklin')}
        data-x="44"
        data-y="338"
      />
      <path
        d="M131.816 331.899L131.893 320.116L130.435 320.027V298.398L147.314 297.405L147.391 312.192L154.526 316.515L159.36 318.676L160.203 320.836V327.943L155.063 328.033L142.097 328.123V331.989L131.816 331.899Z"
        stroke={element.config.stroke}
        data-name="Jefferson Davis"
        fill={assignColor('Jefferson Davis')}
        data-x="131"
        data-y="331"
      />
      <path
        d="M125.217 336.93V346.267L125.831 350.841H127.749V355.056H133.427L134.961 360.252L141.099 360.342L141.176 366.699H108.262V335.583H109.566L119.924 335.672L121.995 337.469L125.217 336.93Z"
        stroke={element.config.stroke}
        data-name="Walthall"
        fill={assignColor('Walthall')}
        data-x="125"
        data-y="336"
      />
      <path
        d="M256.645 50.573L269.995 50.6667L266.542 85.6709L240.149 85.4854L240.303 50.4802L256.645 50.573Z"
        stroke={element.config.stroke}
        data-name="Itawamba"
        fill={assignColor('Itawamba')}
        data-x="256"
        data-y="50"
      />
      <path
        d="M218.82 1.09375L218.667 13.8206L224.114 14.008L224.19 23.3522H226.799V38.2799H225.572L198.489 38.1862V17.8404L202.478 17.7467L203.935 13.8206V1.18749L218.82 1.09375Z"
        stroke={element.config.stroke}
        data-name="Tippah"
        fill={assignColor('Tippah')}
        data-x="218"
        data-y="1"
      />
      <path
        d="M180.382 256.694L180.305 224.616H180.689L211.839 224.708L211.992 256.421L180.382 256.694Z"
        stroke={element.config.stroke}
        data-name="Newton"
        fill={assignColor('Newton')}
        data-x="180"
        data-y="256"
      />
      <path
        d="M180.766 192.505L180.689 224.617H180.305L149.155 224.526V219.334L149.078 196.709V192.688L180.766 192.505Z"
        stroke={element.config.stroke}
        data-name="Leake"
        fill={assignColor('Leake')}
        data-x="180"
        data-y="192"
      />
      <path
        d="M211.608 192.962L211.839 224.708L180.689 224.617L180.766 192.505L203.629 192.414L210.304 193.511L211.608 192.962Z"
        stroke={element.config.stroke}
        data-name="Neshoba"
        fill={assignColor('Neshoba')}
        data-x="211"
        data-y="192"
      />
      <path
        d="M269.995 50.6666L256.645 50.5729L256.414 24.9398L253.882 23.3522V1H266.619L270.225 7.64662L274.444 10.5476L273.447 21.1104L269.995 50.6666Z"
        stroke={element.config.stroke}
        data-name="Tishomingo"
        fill={assignColor('Tishomingo')}
        data-x="269"
        data-y="50"
      />
      <path
        d="M113.019 46.198L113.479 65.727L118.159 68.977L118.005 78.8128V86.8755L93.838 86.7827L93.9148 69.2562H97.827L97.7502 54.2946H105.193L104.962 46.2917L113.019 46.198Z"
        stroke={element.config.stroke}
        data-name="Quitman"
        fill={assignColor('Quitman')}
        data-x="113"
        data-y="46"
      />
      <path
        d="M166.341 106.118V119.505L166.265 123.563L144.859 123.748H118.619L117.929 119.597V111.476L130.358 111.568L134.118 110.09V103.53L146.24 103.438V106.026L166.341 106.118Z"
        stroke={element.config.stroke}
        data-name="Grenada"
        fill={assignColor('Grenada')}
        data-x="166"
        data-y="106"
      />
      <path
        d="M166.188 78.6272L166.341 106.118L146.24 106.025V103.438L134.118 103.53L134.348 80.5739L133.887 78.4418H150V75.7522L166.188 75.9377V78.6272Z"
        stroke={element.config.stroke}
        data-name="Yalobusha"
        fill={assignColor('Yalobusha')}
        data-x="166"
        data-y="78"
      />
      <path
        d="M203.935 1.1875V13.8206L202.478 17.7467L198.489 17.8404V38.1862H186.366V39.4916L182.376 39.3978L182.223 15.0362H178.08V1.1875H203.935Z"
        stroke={element.config.stroke}
        data-name="Benton"
        fill={assignColor('Benton')}
        data-x="203"
        data-y="1"
      />
      <path
        d="M170.638 327.943L170.714 335.942L178.464 335.852V365.894L172.633 365.984V368.49L168.72 368.4L166.802 365.626L162.889 366.7H155.139L155.063 328.033L160.203 327.943H170.638Z"
        stroke={element.config.stroke}
        data-name="Lamar"
        fill={assignColor('Lamar')}
        data-x="170"
        data-y="327"
      />
      <path
        d="M202.402 118.121L202.325 127.526L203.782 134.159L198.412 134.25L198.335 137.105L191.584 137.013L184.755 138.301L176.085 143.545H166.572L166.265 123.563L166.341 119.505L190.586 119.597V118.121H202.402Z"
        stroke={element.config.stroke}
        data-name="Webster"
        fill={assignColor('Webster')}
        data-x="202"
        data-y="118"
      />
      <path
        d="M74.6571 177.042H77.9559L78.3399 193.144L70.3599 200.819L74.0428 203.74L71.6643 210.492L77.4952 213.957L76.9587 216.327L73.1223 216.783L54.7092 216.691V200.819L56.3966 198.718L58.5446 191.134L58.4678 185.189L58.391 177.042H74.6571Z"
        stroke={element.config.stroke}
        data-name="Sharkey"
        fill={assignColor('Sharkey')}
        data-x="74"
        data-y="177"
      />
      <path
        d="M218.436 86.6899L194.729 86.7827L186.443 86.8754V78.6272L186.366 58.2935L210.688 58.3862V59.6876L218.59 59.7803L218.436 86.6899Z"
        stroke={element.config.stroke}
        data-name="Pontotoc"
        fill={assignColor('Pontotoc')}
        data-x="218"
        data-y="86"
      />
      <path
        d="M170.638 327.943H160.203V320.836L159.36 318.676L154.526 316.515L147.391 312.192L147.314 297.405L155.063 296.682L174.244 295.419L174.704 327.943H170.638Z"
        stroke={element.config.stroke}
        data-name="Covington"
        fill={assignColor('Covington')}
        data-x="170"
        data-y="327"
      />
      <path
        d="M217.746 366.879L249.433 367.058L250.353 390.476L217.9 390.833L214.14 390.476L213.987 375.02L217.746 374.931V366.879Z"
        stroke={element.config.stroke}
        data-name="George"
        fill={assignColor('George')}
        data-x="217"
        data-y="366"
      />
      <path
        d="M130.435 298.397V320.027L131.893 320.116L131.816 331.899L125.217 331.539V336.93L121.995 337.469L119.924 335.672L109.567 335.583L109.49 302.727L119.08 299.48L130.435 298.397Z"
        stroke={element.config.stroke}
        data-name="Lawrence"
        fill={assignColor('Lawrence')}
        data-x="130"
        data-y="298"
      />
      <path
        d="M149.769 21.9512L149.846 29.98H153.835L153.989 42.1932H149.923L113.019 42.2869L109.796 37.907L111.945 32.3125L110.87 28.0204L112.942 26.4338L115.627 23.1658L118.85 23.446L120.154 25.4066L125.065 27.8339L132.046 25.2201L135.499 21.8574L149.769 21.9512Z"
        stroke={element.config.stroke}
        data-name="Tate"
        fill={assignColor('Tate')}
        data-x="149"
        data-y="21"
      />
      <path
        d="M240.303 50.4802L240.149 85.4854L226.646 85.3926V86.7828L218.436 86.69L218.59 59.7805L221.276 56.9922L221.506 47.6879L225.495 46.571L240.303 46.3845V50.4802Z"
        stroke={element.config.stroke}
        data-name="Lee"
        fill={assignColor('Lee')}
        data-x="240"
        data-y="50"
      />
      <path
        d="M179.154 398.328L179.077 374.841L194.652 374.931L213.987 375.02L214.14 390.476V395.741H186.827V398.328H179.154Z"
        stroke={element.config.stroke}
        data-name="Stone"
        fill={assignColor('Stone')}
        data-x="179"
        data-y="398"
      />
      <path
        d="M256.645 50.573L240.303 50.4803V46.3846L225.495 46.5711L225.572 38.28H226.799V23.3523H253.882L256.414 24.9399L256.645 50.573Z"
        stroke={element.config.stroke}
        data-name="Prentiss"
        fill={assignColor('Prentiss')}
        data-x="256"
        data-y="50"
      />
      <path
        d="M225.495 46.5708L221.506 47.6878L221.276 56.992L218.59 59.7803L210.688 59.6876V58.3862L186.366 58.2934V47.8742V39.4914V38.186H198.489L225.572 38.2798L225.495 46.5708Z"
        stroke={element.config.stroke}
        data-name="Union"
        fill={assignColor('Union')}
        data-x="225"
        data-y="46"
      />
      <path
        d="M230.175 139.497L230.482 159.347L219.51 159.439L198.412 159.622L198.335 137.104L198.412 134.25L203.782 134.159L230.098 133.974L230.175 139.497Z"
        stroke={element.config.stroke}
        data-name="Oktibbeha"
        fill={assignColor('Oktibbeha')}
        data-x="230"
        data-y="139"
      />
      <path
        d="M253.882 23.3522H226.799H224.19L224.114 14.008L218.667 13.8205L218.82 1.09374L253.882 1V23.3522Z"
        stroke={element.config.stroke}
        data-name="Alcorn"
        fill={assignColor('Alcorn')}
        data-x="253"
        data-y="23"
      />
      <path
        d="M86.3188 366.879V335.583H108.262V366.699L86.3188 366.879Z"
        stroke={element.config.stroke}
        data-name="Pike"
        fill={assignColor('Pike')}
        data-x="86"
        data-y="366"
      />

      {renderLabels()}
    </svg>
  );
};

MapMississippi.propTypes = ElementPropTypes;
MapMississippiPresent.propTypes = {
  element: PropTypes.object.isRequired,
};
MapMississippiContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default MapMississippi;
