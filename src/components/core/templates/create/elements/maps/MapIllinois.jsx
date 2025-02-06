import { ElementPropTypes } from '@/lib/prop-types.js';
import useMapElement from '@/lib/design/use-map-element.jsx';
import PropTypes from 'prop-types';

const MapIllinois = ({ element }) => {
  return <MapIllinoisContent element={element} />;
};

export const MapIllinoisPresent = ({ element }) => {
  return <MapIllinoisContent element={element} />;
};

export const MapIllinoisPreview = () => {
  return <MapIllinoisContent element={{ config: { data: [], fill: '#f9fafb', stroke: '#f9fafb' } }} present={false} />;
};

const MapIllinoisContent = ({ element, present = true }) => {
  const { el, assignColor, renderLabels, handleMouseMove, handleMouseLeave, renderTooltip } = useMapElement(element);

  return (
    <svg
      style={{ width: element.width, height: element.height }}
      ref={el}
      width="100%"
      viewBox="0 0 246 441"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M229.381 30.1331L230.72 32.5939L234.248 36.8579L235.891 44.2286L237.351 48.0739L238.75 56.0825L241.792 62.4475L243.192 63.508L243.556 66.2789L243.374 85.965L227.435 85.8833L227.252 78.8146L220.256 78.8963L220.013 71.8187L212.773 71.9811L212.712 68.3979L216.606 68.3162L219.831 65.953L219.586 57.6334V43.3286L205.655 43.8189H198.598V37.2675H200.119V30.1331H202.492H229.381Z"
        fill={assignColor('Cook')}
        stroke={element.config.stroke}
        data-name="Cook"
        data-x="229"
        data-y="30"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Cook')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M81.4257 76.6196L80.8177 80.2776L78.1405 81.66L72.3008 82.6348L70.11 85.1525L66.6424 87.1828L66.46 97.6433L45.2888 97.4809L27.7676 97.0762L28.0108 94.6452L29.5318 90.1849L32.6953 89.1304L36.5895 89.7793L40.8475 87.426L47.053 87.6692L52.7114 86.8579L55.6915 84.4219L57.0909 82.4723L59.2817 81.5783L63.4789 82.1474L65.0607 81.4976L67.9202 78.0828L71.327 76.7004L72.1184 75.4804L71.9968 71.4108L73.5786 67.8276L73.5168 64.7308L74.977 62.4474L78.0797 60.5715L77.9582 63.752L78.6279 65.3009L78.4455 68.8861L83.0075 71.9809L82.6427 75.8053L81.4257 76.6196Z"
        fill={assignColor('Rock Island')}
        stroke={element.config.stroke}
        data-name="Rock Island"
        data-x="81"
        data-y="76"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Rock Island')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M177.975 72.7954L178.218 87.183L178.704 101.207L178.887 115.114L157.958 115.437V129.869L150.841 130.031L150.537 119.23L150.841 115.598H143.906L143.723 99.021L143.541 76.7823L143.602 73.1203L153.153 73.2838L157.533 73.1203L164.955 72.8761L177.975 72.7954Z"
        fill={assignColor('La Salle')}
        stroke={element.config.stroke}
        data-name="La Salle"
        data-x="177"
        data-y="72"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'La Salle')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M212.712 68.3978L212.773 71.9809L220.013 71.8185L220.256 78.8962L227.252 78.8144L227.435 85.8831L243.374 85.9649L243.435 99.9926L213.686 100.317L213.808 107.356L199.754 107.679L199.267 86.533L198.598 65.301L212.651 64.8933L212.712 68.3978Z"
        fill={assignColor('Will')}
        stroke={element.config.stroke}
        data-name="Will"
        data-x="212"
        data-y="68"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Will')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M186.674 154.853V172.456L186.613 181.714H179.556L144.696 181.555L137.761 181.635L137.7 178.045L137.457 156.616L145.67 156.376L147.556 154.131L151.023 153.972L150.963 151.085L154.673 151.005L154.552 143.862H158.02L179.131 143.621L179.617 154.934L186.674 154.853Z"
        fill={assignColor('McLean')}
        stroke={element.config.stroke}
        data-name="McLean"
        data-x="186"
        data-y="154"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'McLean')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M58.1256 216.849L56.4222 220.887L56.0574 222.629L53.6842 226.98L53.5626 228.245L55.8142 232.909L57.9432 239.619L57.5784 241.907L55.8142 247.03L55.5092 251.914L35.7982 251.52L29.9584 247.819L28.4374 245.849L26.3683 241.118L22.1103 239.145L21.1365 235.83L17.3649 233.303L15.3576 230.537L9.8208 225.557L9.8816 223.183L37.1368 223.341L37.1976 216.452L38.2322 216.69L58.1256 216.849Z"
        fill={assignColor('Pike')}
        stroke={element.config.stroke}
        data-name="Pike"
        data-x="58"
        data-y="216"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Pike')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M140.499 210.744L140.439 219.066L138.614 218.037L136.18 220.096L134.78 222.312L131.799 222.471L129.913 224.37L128.149 223.895L127.906 229.194L124.621 229.115V232.593H121.214L121.336 241.67L111.054 241.748L97.4264 241.827L97.6088 238.988L93.9588 226.347L93.3508 221.124L93.29 214.153V211.775H106.978L107.039 210.744H111.115L111.298 205.982H118.598L124.317 205.904L124.256 209.395L129.123 209.475V210.506L140.499 210.744Z"
        fill={assignColor('Sangamon')}
        stroke={element.config.stroke}
        data-name="Sangamon"
        data-x="140"
        data-y="210"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Sangamon')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M186.674 154.853L179.617 154.934L179.131 143.621L158.02 143.862L157.958 129.869V115.437L178.887 115.114L199.267 114.79L199.571 124.633L200.241 154.693L186.674 154.853Z"
        fill={assignColor('Livingston')}
        stroke={element.config.stroke}
        data-name="Livingston"
        data-x="186"
        data-y="154"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Livingston')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M243.435 122.94V164.942L235.708 165.102L218.492 165.262L207.298 165.182V158.218L206.567 124.391L219.222 123.666L243.435 122.94Z"
        fill={assignColor('Iroquois')}
        stroke={element.config.stroke}
        data-name="Iroquois"
        data-x="243"
        data-y="122"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Iroquois')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M218.492 165.262L218.674 172.137L186.674 172.456V154.853L200.241 154.692L199.571 124.633L206.567 124.391L207.298 158.218V165.182L218.492 165.262Z"
        fill={assignColor('Ford')}
        stroke={element.config.stroke}
        data-name="Ford"
        data-x="218"
        data-y="165"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Ford')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M80.6962 189.524L77.0462 189.206L65.4873 188.966L65.5481 182.033L65.7305 153.891V146.993L93.7153 147.314L93.5937 154.131L100.59 154.212L100.772 163.181L99.7992 166.221L97.5476 169.34L93.8369 172.776L90.6733 174.213L88.7267 178.922L88.5443 180.837L86.4751 183.309L85.5631 185.541L82.582 187.453L80.6962 189.524Z"
        fill={assignColor('Fulton')}
        stroke={element.config.stroke}
        data-name="Fulton"
        data-x="80"
        data-y="189"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Fulton')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M143.541 76.7823L143.724 99.021L138.553 98.1299L133.442 99.7496L132.165 105.173H125.411V112.044H114.887V105.253L101.625 105.173L101.746 87.5069L101.381 76.6198L115.373 76.5381H133.442L143.541 76.7823Z"
        fill={assignColor('Bureau')}
        stroke={element.config.stroke}
        data-name="Bureau"
        data-x="143"
        data-y="76"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Bureau')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M145.123 255.69L145.184 265.909L138.369 265.988V280.886L118.05 280.808V283H114.826H111.298L110.871 255.69H111.237L111.054 241.748L121.336 241.67L121.396 255.769L145.123 255.69Z"
        fill={assignColor('Montgomery')}
        stroke={element.config.stroke}
        data-name="Montgomery"
        data-x="145"
        data-y="255"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Montgomery')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M185.884 247.818V253.567L186.005 266.144L165.442 265.988L145.184 265.909L145.123 255.691L152.241 255.848L152.301 241.907L152.241 231.486L165.199 231.565L165.32 237.409L170.856 237.489V242.064H175.48L178.887 245.454V247.74L185.884 247.818Z"
        fill={assignColor('Shelby')}
        stroke={element.config.stroke}
        data-name="Shelby"
        data-x="185"
        data-y="247"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Shelby')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M117.016 178.524L117.198 194.38L115.373 191.913L113.305 191.356L111.662 192.788L109.594 192.708L107.951 194.062L104.545 194.38L99.9817 193.265L94.6891 192.868L93.229 195.334H90.795L87.9962 197.641L85.2592 198.037L82.886 199.389L75.7685 199.469L75.0379 198.913L73.7003 194.857L71.3271 194.22L72.4225 193.185L76.4373 191.753L79.2969 192.231L80.6963 189.525L82.582 187.453L85.5632 185.541L86.4752 183.309L88.5444 180.837L88.7268 178.923L90.6734 174.213L93.837 172.776L97.5477 169.34H110.141L110.263 178.683L117.016 178.524Z"
        fill={assignColor('Mason')}
        stroke={element.config.stroke}
        data-name="Mason"
        data-x="117"
        data-y="178"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Mason')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M137.457 156.616L137.701 178.045L117.016 178.524L110.263 178.683L110.141 169.34H97.5479L99.7994 166.221L100.772 163.181L104.91 160.701L108.681 160.14L113.852 158.378L113.791 156.376L116.347 152.608L117.198 150.122L120.058 147.956L120.301 144.343L133.624 144.264L133.807 155.013L137.396 154.934L137.457 156.616Z"
        fill={assignColor('Tazewell')}
        stroke={element.config.stroke}
        data-name="Tazewell"
        data-x="137"
        data-y="156"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Tazewell')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M218.675 172.137L218.857 186.179H218.066V192.788L218.431 213.678L207.116 213.52L186.37 213.757L186.492 186.258L186.613 181.714L186.674 172.456L218.675 172.137Z"
        fill={assignColor('Champaign')}
        stroke={element.config.stroke}
        data-name="Champaign"
        data-x="218"
        data-y="172"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Champaign')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M145.184 265.909L165.442 265.988L165.503 289.885L172.316 289.651L172.255 296.527L165.442 296.683H145.305L145.245 303.55L138.248 303.16L138.126 285.191L138.369 280.887V265.988L145.184 265.909Z"
        fill={assignColor('Fayette')}
        stroke={element.config.stroke}
        data-name="Fayette"
        data-x="145"
        data-y="265"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Fayette')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M20.9544 153.09L30.7491 153.411L37.9285 153.25L37.5627 181.555V188.807L1.3042 188.17L1.365 185.143L3.73718 177.566L6.53595 173.974L8.78753 173.415L9.76033 171.337L9.03073 168.541L9.94273 164.862L8.90913 162.061L6.96155 160.46L7.38814 158.859L11.0989 155.494L16.3307 153.33L20.9544 153.09Z"
        fill={assignColor('Hancock')}
        stroke={element.config.stroke}
        data-name="Hancock"
        data-x="20"
        data-y="153"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Hancock')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M37.1977 216.452L37.1369 223.341L9.88172 223.183L9.63853 219.779L5.68456 216.373L4.89317 214.075L6.53575 210.585L2.09439 201.615L2.15619 199.31L1 193.823L1.304 188.17L37.5625 188.807L37.4409 195.732L37.2585 204.951L37.1977 216.452Z"
        fill={assignColor('Adams')}
        stroke={element.config.stroke}
        data-name="Adams"
        data-x="37"
        data-y="216"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Adams')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M65.6091 285.427L64.3313 285.974L62.1405 290.354L59.9507 292.387L58.0649 293.168L55.023 291.604L52.7116 288.555L51.8594 284.018L49.6088 278.615L51.4338 274.383L50.156 272.108L48.6958 263.395L44.4379 258.443L35.7983 251.52L55.5094 251.914L55.0838 254.354L56.3008 260.016L55.8752 262.767L56.848 265.595L55.7536 269.755L56.1792 273.442L58.0649 280.808L57.8825 282.296L59.9507 285.661L61.2893 286.365L65.6091 285.427Z"
        fill={assignColor('Calhoun')}
        stroke={element.config.stroke}
        data-name="Calhoun"
        data-x="65"
        data-y="285"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Calhoun')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M243.435 164.942L243.009 193.663L243.07 213.44L241.61 214.392L238.203 213.52L218.431 213.678L218.065 192.788V186.179H218.857L218.674 172.137L218.492 165.262L235.708 165.102L243.435 164.942Z"
        fill={assignColor('Vermilion')}
        stroke={element.config.stroke}
        data-name="Vermilion"
        data-x="243"
        data-y="164"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Vermilion')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M110.871 343.65H117.624L117.503 364.133L114.156 371.228L112.757 375.849L108.742 372.461L105.335 371.536L105.213 369.84L102.536 368.067L99.7991 370.148L97.9123 370.687L96.0266 369.763L94.5056 367.064L96.5748 362.976L93.9584 363.67L92.255 362.899L89.6994 360.042L86.2927 358.266L85.1983 355.949L80.3921 353.785L90.7948 350.151L90.734 343.417L99.0077 343.495L110.871 343.65Z"
        fill={assignColor('Randolph')}
        stroke={element.config.stroke}
        data-name="Randolph"
        data-x="110"
        data-y="343"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Randolph')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M101.381 76.6196L101.746 87.5067L101.624 105.173H100.955L100.894 111.963H93.7154L66.1562 111.802L66.4602 97.6433L66.6426 87.1828L70.1102 85.1525L72.301 82.6348L78.1407 81.66L80.8179 80.2776L81.4259 76.6196H101.381Z"
        fill={assignColor('Henry')}
        stroke={element.config.stroke}
        data-name="Henry"
        data-x="101"
        data-y="76"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Henry')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M114.887 126.164H126.628L126.02 129.386L125.046 130.433L123.403 134.216L120.118 139.684L119.693 141.854L120.301 144.344L120.058 147.956L117.198 150.123L116.347 152.608L113.791 156.376L113.852 158.378L108.681 160.14L104.909 160.701L100.772 163.181L100.59 154.212L93.5938 154.131L93.7153 147.314L93.7761 126.084L114.887 126.164Z"
        fill={assignColor('Peoria')}
        stroke={element.config.stroke}
        data-name="Peoria"
        data-x="114"
        data-y="126"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Peoria')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M110.749 309.786L110.81 328.219L110.871 343.65L99.008 343.495L97.6087 339.234L98.2177 336.832L90.6735 336.754V335.513L84.0424 328.84V327.675L76.8022 320.293L78.1408 317.416L81.2436 313.991L82.035 311.655L81.9134 309.474L90.6127 309.631L110.749 309.786Z"
        fill={assignColor('Saint Clair')}
        stroke={element.config.stroke}
        data-name="Saint Clair"
        data-x="110"
        data-y="309"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Saint Clair')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M152.241 231.486L152.301 241.907L152.241 255.848L145.123 255.691L121.396 255.769L121.335 241.67L121.214 232.593H124.621V229.115L127.906 229.194L128.149 223.895L129.913 224.37L131.799 222.471L134.78 222.313L136.18 220.096L138.614 218.037L140.438 219.066L142.385 218.671L145 220.175L145.184 231.486H152.241Z"
        fill={assignColor('Christian')}
        stroke={element.config.stroke}
        data-name="Christian"
        data-x="152"
        data-y="231"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Christian')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M93.2898 214.153L93.3506 221.125L93.9586 226.347L97.6086 238.988L97.4262 241.827L83.4951 242.143L74.5516 242.064V232.829L72.4226 232.909L72.3618 230.696L70.1711 230.617V223.658H63.4791V220.887H56.4224L58.1257 216.849L57.3962 213.916L76.0726 214.153H93.2898Z"
        fill={assignColor('Morgan')}
        stroke={element.config.stroke}
        data-name="Morgan"
        data-x="93"
        data-y="214"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Morgan')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M111.054 241.749L111.237 255.691H110.871L111.297 283.001L84.1031 283.078L83.7991 262.296L83.4951 242.143L97.4262 241.827L111.054 241.749Z"
        fill={assignColor('Macoupin')}
        stroke={element.config.stroke}
        data-name="Macoupin"
        data-x="111"
        data-y="241"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Macoupin')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M157.412 30.133L157.168 37.4309L157.412 51.671L150.476 51.8344L131.799 51.9162L129.305 50.8537L125.107 50.0364L124.377 50.6902L115.434 50.8537V48.5642H112.027V33.6603L111.845 26.3564L129.488 26.1102L143.236 25.863L143.297 30.2964L157.412 30.133Z"
        fill={assignColor('Ogle')}
        stroke={element.config.stroke}
        data-name="Ogle"
        data-x="157"
        data-y="30"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Ogle')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M114.826 283L114.948 292.777H117.137L117.442 303.082V309.786H110.749L90.6128 309.631L81.9135 309.474L80.0267 305.734V304.564L83.3737 300.117L85.8675 297.776L85.9891 294.574L81.0005 291.604L79.1755 289.963L76.0728 288.79L76.1944 283L84.1033 283.078L111.298 283H114.826Z"
        fill={assignColor('Madison')}
        stroke={element.config.stroke}
        data-name="Madison"
        data-x="114"
        data-y="283"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Madison')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M97.426 1.08273L97.8516 26.5209L73.2736 26.6843L70.7798 25.6996L67.981 22.4124L66.9464 19.0415V15.5042L64.2095 11.6349L59.8897 8.99863L58.7335 7.02115L54.6579 4.87722L53.1978 3.39311L53.8666 1L67.1298 1.08273L88.5442 1L97.426 1.08273Z"
        fill={assignColor('Jo Daviess')}
        stroke={element.config.stroke}
        data-name="Jo Daviess"
        data-x="97"
        data-y="1"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Jo Daviess')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M157.411 51.671L157.533 73.1203L153.153 73.2838L143.602 73.1203L143.541 76.7822L133.441 76.538H115.373L115.312 69.6198L115.434 50.8537L124.377 50.6902L125.107 50.0364L129.305 50.8537L131.799 51.9162L150.476 51.8344L157.411 51.671Z"
        fill={assignColor('Lee')}
        stroke={element.config.stroke}
        data-name="Lee"
        data-x="157"
        data-y="51"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Lee')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M243.435 99.9927V122.94L219.222 123.666L206.568 124.391L199.572 124.632L199.268 114.79H199.936L199.754 107.679L213.808 107.356L213.686 100.317L243.435 99.9927Z"
        fill={assignColor('Kankakee')}
        stroke={element.config.stroke}
        data-name="Kankakee"
        data-x="243"
        data-y="99"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Kankakee')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M65.5483 182.033L65.4875 188.967L77.0464 189.206L80.6963 189.525L79.297 192.231L76.4374 191.753L72.4226 193.186L71.3272 194.22L69.9278 194.777L68.8942 197.72L66.8251 199.231L66.3995 202.329L62.3239 204.156L61.5933 205.189L56.1791 205.427L56.3008 203.998L51.7986 200.025L52.0418 197.959L50.5816 195.811L37.4409 195.732L37.5625 188.807V181.555L65.5483 182.033Z"
        fill={assignColor('Schuyler')}
        stroke={element.config.stroke}
        data-name="Schuyler"
        data-x="65"
        data-y="182"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Schuyler')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M115.373 76.5381L101.381 76.6199H81.4261L82.6431 75.8056L83.0078 71.9812L78.4459 68.8864L78.6283 65.3012L77.9585 63.7523L78.0801 60.5718L81.3653 58.7767L83.3736 48.4826L101.442 48.4009L112.027 48.5643H115.434V50.8538L115.312 69.6199L115.373 76.5381Z"
        fill={assignColor('Whiteside')}
        stroke={element.config.stroke}
        data-name="Whiteside"
        data-x="115"
        data-y="76"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Whiteside')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M157.959 129.869L158.021 143.862H154.552L154.674 151.004L150.963 151.085L151.024 153.972L147.556 154.131L145.67 156.376L137.457 156.616L137.397 154.934L133.807 155.013L133.624 144.264L120.301 144.343L119.693 141.854L120.118 139.684L123.404 134.216L125.046 130.433L133.077 130.353L146.217 129.95L150.841 130.031L157.959 129.869Z"
        fill={assignColor('Woodford')}
        stroke={element.config.stroke}
        data-name="Woodford"
        data-x="157"
        data-y="129"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Woodford')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M99.0081 343.495L90.7344 343.417L90.7952 350.151L80.3924 353.785L77.7761 351.079L75.2823 347.288L73.5789 346.592L71.6313 344.115L70.2319 339.157L70.2927 335.746L71.9971 330.703L74.7949 327.753L75.7079 325.423L76.8023 320.293L84.0424 327.675V328.84L90.6736 335.513V336.754L98.2177 336.832L97.6087 339.234L99.0081 343.495Z"
        fill={assignColor('Monroe')}
        stroke={element.config.stroke}
        data-name="Monroe"
        data-x="99"
        data-y="343"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Monroe')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M93.7152 147.314L65.7305 146.993L65.9737 140.006L66.1561 118.907V111.802L93.7152 111.963L93.776 126.084L93.7152 147.314Z"
        fill={assignColor('Knox')}
        stroke={element.config.stroke}
        data-name="Knox"
        data-x="93"
        data-y="147"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Knox')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M142.811 364.365H144.514L144.575 371.073L144.393 391.381L126.446 391.458L125.655 393.915L122.065 393.608L124.803 391.918L122.37 388.463L122.431 384.62L118.354 383.005L115.738 380.544L112.94 379.313L112.758 375.849L114.156 371.228L117.503 364.133L137.701 364.442L142.811 364.365Z"
        fill={assignColor('Jackson')}
        stroke={element.config.stroke}
        data-name="Jackson"
        data-x="142"
        data-y="364"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Jackson')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M205.473 340.862H192.027L171.769 340.784L171.891 323.869L172.012 313.68L179.069 313.603L199.085 314.147L205.595 314.224L205.655 316.56V324.413L205.473 340.862Z"
        fill={assignColor('Wayne')}
        stroke={element.config.stroke}
        data-name="Wayne"
        data-x="205"
        data-y="340"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Wayne')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M169.214 220.729L168.484 224.687H165.138L165.199 231.565L152.241 231.486H145.184L145 220.175L142.385 218.671L140.438 219.066L140.499 210.744H145L144.879 200.185L169.274 199.628L169.214 220.729Z"
        fill={assignColor('Macon')}
        stroke={element.config.stroke}
        data-name="Macon"
        data-x="169"
        data-y="220"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Macon')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M56.1789 273.442L55.7533 269.755L56.8477 265.595L55.8749 262.767L56.3005 260.016L55.0835 254.354L55.5091 251.914L55.8141 247.03L57.5783 241.907L74.5513 242.064L83.4949 242.143L83.7989 262.296L80.5137 262.688L80.6353 265.202L73.8217 265.28V269.206H63.4788L59.4641 268.107L57.4567 269.049L57.2733 271.559L56.1789 273.442Z"
        fill={assignColor('Greene')}
        stroke={element.config.stroke}
        data-name="Greene"
        data-x="56"
        data-y="273"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Greene')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M144.696 181.555L144.879 200.184L145 210.744H140.499L129.123 210.506V209.475L124.256 209.395L124.317 205.904L118.597 205.982L118.537 196.766L117.198 194.38L117.016 178.524L137.7 178.045L137.761 181.635L144.696 181.555Z"
        fill={assignColor('Logan')}
        stroke={element.config.stroke}
        data-name="Logan"
        data-x="144"
        data-y="181"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Logan')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M178.765 30.0503L178.826 37.2675H177.914L177.792 65.627L177.975 72.7954L164.956 72.8761L157.533 73.1203L157.412 51.671L157.168 37.431L157.412 30.133L171.648 30.0503H178.765Z"
        fill={assignColor('DeKalb')}
        stroke={element.config.stroke}
        data-name="DeKalb"
        data-x="178"
        data-y="30"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'DeKalb')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M66.1564 111.802V118.907L63.4792 119.069L45.046 118.423L35.1905 118.262L35.3121 116.406L32.7565 111.64L31.4797 110.59L28.9849 110.509L26.856 107.841L25.2134 103.635L27.6464 98.6971L27.768 97.0764L45.2892 97.4811L66.4604 97.6435L66.1564 111.802Z"
        fill={assignColor('Mercer')}
        stroke={element.config.stroke}
        data-name="Mercer"
        data-x="66"
        data-y="111"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Mercer')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M138.247 303.16L145.244 303.55L145.305 310.254L145 321.615L137.275 321.382L133.807 320.76L131.13 321.926L127.905 322.082L124.134 324.102L121.396 323.326L116.894 323.713L115.494 325.423L110.81 328.219L110.749 309.786H117.442V303.082L138.247 303.16Z"
        fill={assignColor('Clinton')}
        stroke={element.config.stroke}
        data-name="Clinton"
        data-x="138"
        data-y="303"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Clinton')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M243.07 213.44L243.131 245.454H233.579L233.762 244.508L217.032 244.982L216.667 228.878L216.545 220.57L218.492 220.491L218.431 213.678L238.203 213.519L241.61 214.392L243.07 213.44Z"
        fill={assignColor('Edgar')}
        stroke={element.config.stroke}
        data-name="Edgar"
        data-x="243"
        data-y="213"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Edgar')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M202.613 1.90796V15.8341L202.492 30.1329H200.119L178.765 30.0502H171.647L171.769 15.8341L171.647 1.98969L202.613 1.90796Z"
        fill={assignColor('McHenry')}
        stroke={element.config.stroke}
        data-name="McHenry"
        data-x="202"
        data-y="1"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'McHenry')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M35.1902 118.261L45.0457 118.423V146.753L44.9241 153.33L37.9282 153.25L30.7488 153.411L20.9541 153.09L23.7529 151.325L25.2131 149.16L25.1523 146.11L26.6125 141.773L26.6732 138.237L28.559 136.388L31.8442 131.721L34.2164 130.11L35.3726 122.376L35.1902 118.261Z"
        fill={assignColor('Henderson')}
        stroke={element.config.stroke}
        data-name="Henderson"
        data-x="35"
        data-y="118"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Henderson')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M111.845 26.3564L112.027 33.6604V48.5642L101.442 48.4008L83.3736 48.4825L82.8255 46.1103L84.468 42.5092L82.947 38.6599V33.0863L80.6357 31.8553L80.2709 30.2965L73.2739 26.6844L97.8519 26.5209L111.845 26.3564Z"
        fill={assignColor('Carroll')}
        stroke={element.config.stroke}
        data-name="Carroll"
        data-x="111"
        data-y="26"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Carroll')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M145 321.615V323.946L144.636 344.115L131.191 344.037L117.625 343.651H110.871L110.81 328.219L115.495 325.423L116.894 323.713L121.396 323.326L124.134 324.102L127.906 322.082L131.13 321.926L133.807 320.76L137.275 321.382L145 321.615Z"
        fill={assignColor('Washington')}
        stroke={element.config.stroke}
        data-name="Washington"
        data-x="145"
        data-y="615"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Washington')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M215.389 340.784L215.632 343.805L216.667 346.205L219.77 348.294L216.667 352.781L216.423 355.562L212.53 358.035L213.99 362.359L212.712 363.747L213.686 368.761L209.123 368.375L206.324 367.373L191.845 367.605L192.027 340.862H205.473H212.894L215.085 340.474L215.389 340.784Z"
        fill={assignColor('White')}
        stroke={element.config.stroke}
        data-name="White"
        data-x="215"
        data-y="340"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'White')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M65.5483 182.033L37.5625 181.555L37.9283 153.25L44.9242 153.33L51.981 153.731L65.7307 153.891L65.5483 182.033Z"
        fill={assignColor('McDonough')}
        stroke={element.config.stroke}
        data-name="McDonough"
        data-x="65"
        data-y="182"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'McDonough')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M129.244 1.4954L129.488 8.75149V26.1103L111.845 26.3565L97.8519 26.5209L97.4263 1.08276L112.331 1.16549L129.244 1.4954Z"
        fill={assignColor('Stephenson')}
        stroke={element.config.stroke}
        data-name="Stephenson"
        data-x="129"
        data-y="1"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Stephenson')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M157.411 30.133L143.297 30.2964L143.236 25.863L129.487 26.1102V8.75144L129.244 1.49536L157.472 1.908L157.411 30.133Z"
        fill={assignColor('Winnebago')}
        stroke={element.config.stroke}
        data-name="Winnebago"
        data-x="157"
        data-y="30"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Winnebago')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M216.667 228.878L217.032 244.982L213.625 245.061L213.747 253.094L187.952 253.645L185.884 253.567V247.819L185.762 231.644L210.705 231.565V229.115L216.667 228.878Z"
        fill={assignColor('Coles')}
        stroke={element.config.stroke}
        data-name="Coles"
        data-x="216"
        data-y="228"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Coles')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M243.131 245.454L243.192 255.298L240.332 256.005L238.446 258.443L238.75 262.217L240.393 263.788L240.454 265.987L237.412 270.618L235.587 269.362L230.051 268.892L217.579 269.048L214.051 269.206L213.747 253.094L213.625 245.06L217.032 244.982L233.762 244.508L233.579 245.454H243.131Z"
        fill={assignColor('Clark')}
        stroke={element.config.stroke}
        data-name="Clark"
        data-x="243"
        data-y="245"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Clark')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M189.716 391.228L189.351 404.88L187.587 405.57L185.762 407.79L185.275 410.929L183.389 416.054L183.875 417.506L187.221 421.633L188.742 425.602L188.56 427.205L186.917 430.562L184.849 432.392L184.788 425.45L179.617 420.18L171.587 411.541V391.305L189.716 391.228Z"
        fill={assignColor('Pope')}
        stroke={element.config.stroke}
        data-name="Pope"
        data-x="189"
        data-y="391"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Pope')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M200.119 30.133V37.2675H198.598V43.8189V65.3011L177.792 65.627L177.914 37.2675H178.826L178.765 30.0503L200.119 30.133Z"
        fill={assignColor('Kane')}
        stroke={element.config.stroke}
        data-name="Kane"
        data-x="200"
        data-y="30"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Kane')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M172.256 296.527L172.012 313.68L171.891 323.869L158.446 323.713L145 323.946V321.615L145.305 310.254L145.245 303.55L145.305 296.682H165.442L172.256 296.527Z"
        fill={assignColor('Marion')}
        stroke={element.config.stroke}
        data-name="Marion"
        data-x="172"
        data-y="296"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Marion')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M171.647 350.925H145.67L144.575 350.847L144.635 344.115L145 323.947L158.446 323.713L171.891 323.869L171.769 340.784L171.647 350.925Z"
        fill={assignColor('Jefferson')}
        stroke={element.config.stroke}
        data-name="Jefferson"
        data-x="171"
        data-y="350"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Jefferson')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M84.1032 283.078L76.1942 283L76.0726 288.79L73.2739 288.321L69.6239 286.052L65.6091 285.426L61.2894 286.365L59.9508 285.661L57.8826 282.296L58.065 280.808L56.1792 273.442L57.2736 271.559L57.457 269.048L59.4644 268.106L63.4791 269.206H73.8221V265.28L80.6356 265.202L80.514 262.688L83.7992 262.296L84.1032 283.078Z"
        fill={assignColor('Jersey')}
        stroke={element.config.stroke}
        data-name="Jersey"
        data-x="84"
        data-y="283"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Jersey')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M66.1563 118.907L65.9739 140.006L65.7307 146.993V153.891L51.9811 153.73L44.9243 153.33L45.0459 146.752V118.423L63.4792 119.069L66.1563 118.907Z"
        fill={assignColor('Warren')}
        stroke={element.config.stroke}
        data-name="Warren"
        data-x="66"
        data-y="118"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Warren')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M229.381 30.1329H202.492L202.613 15.8341V1.90796L226.583 2.07242L227.009 5.20708L226.462 10.9761L225.549 12.7054L224.698 17.7258L225.914 24.1387L229.381 30.1329Z"
        fill={assignColor('Lake')}
        stroke={element.config.stroke}
        data-name="Lake"
        data-x="229"
        data-y="30"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Lake')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M71.3271 194.22L73.7003 194.857L75.0378 198.913L75.7684 199.469L82.886 199.389L85.2592 198.038L87.9961 197.641L90.7949 195.335H93.2289L93.2897 211.775V214.154H76.0724L57.396 213.916L60.133 210.507L61.7148 206.697L61.5932 205.189L62.3238 204.156L66.3993 202.329L66.8249 199.231L68.8941 197.72L69.9277 194.777L71.3271 194.22Z"
        fill={assignColor('Cass')}
        stroke={element.config.stroke}
        data-name="Cass"
        data-x="71"
        data-y="194"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Cass')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M237.412 270.618L235.648 271.717L237.778 275.872L240.697 278.536L240.332 282.609L241.367 284.331L244.226 286.522L243.374 290.51L241.975 293.871L243.131 294.496L220.256 294.574H217.944V283.235L217.579 269.049L230.051 268.892L235.587 269.363L237.412 270.618Z"
        fill={assignColor('Crawford')}
        stroke={element.config.stroke}
        data-name="Crawford"
        data-x="237"
        data-y="270"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Crawford')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M186.37 213.757L186.309 220.65H185.762L169.213 220.729L169.274 199.628L169.213 196.209H172.682V192.628L179.556 181.714H186.613L186.491 186.258L186.37 213.757Z"
        fill={assignColor('Piatt')}
        stroke={element.config.stroke}
        data-name="Piatt"
        data-x="186"
        data-y="213"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Piatt')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M143.358 432.164L142.689 434.222L143.42 436.508L145.61 438.565L143.297 439.555L141.899 438.641L141.655 436.508L139.282 434.222L138.553 432.545L135.145 432.469L135.754 434.145L138.005 435.899L136.058 438.107L134.172 436.279L130.339 433.917L130.705 430.18L128.149 427.282L125.899 423.084L125.29 420.792L125.472 418.041L123.404 417.965L122.248 416.206L122.735 413.454L124.499 411.693H138.674L141.229 413.3L140.925 415.824L139.222 416.512L137.457 420.028L138.248 422.855L137.579 428.808L139.404 430.257L141.899 430.791L143.358 432.164Z"
        fill={assignColor('Alexander')}
        stroke={element.config.stroke}
        data-name="Alexander"
        data-x="143"
        data-y="432"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Alexander')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M198.781 294.809L198.842 303.94L197.138 303.862V307.76L197.807 309.084L196.286 311.422L199.085 314.147L179.069 313.603L172.012 313.68L172.255 296.527L172.316 289.65L176.271 289.572L192.575 289.885L192.515 294.496L198.781 294.809Z"
        fill={assignColor('Clay')}
        stroke={element.config.stroke}
        data-name="Clay"
        data-x="198"
        data-y="294"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Clay')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M217.579 269.049L217.944 283.235V294.574L205.412 294.886L198.781 294.809L192.515 294.496L192.575 289.885L192.636 269.52L200.849 269.598L214.051 269.206L217.579 269.049Z"
        fill={assignColor('Jasper')}
        stroke={element.config.stroke}
        data-name="Jasper"
        data-x="217"
        data-y="269"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Jasper')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M186.005 266.144V269.441L192.636 269.52L192.575 289.885L176.271 289.572L172.316 289.651L165.503 289.885L165.442 265.988L186.005 266.144Z"
        fill={assignColor('Effingham')}
        stroke={element.config.stroke}
        data-name="Effingham"
        data-x="186"
        data-y="266"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Effingham')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M143.906 115.598H150.841L150.537 119.23L150.841 130.031L146.217 129.95L133.077 130.353L125.046 130.433L126.02 129.386L126.628 126.164H114.887V112.044H125.411H133.929L133.138 115.679L143.906 115.598Z"
        fill={assignColor('Marshall')}
        stroke={element.config.stroke}
        data-name="Marshall"
        data-x="143"
        data-y="115"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Marshall')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M169.274 199.628L144.879 200.185L144.696 181.555L179.556 181.714L172.682 192.628V196.209H169.213L169.274 199.628Z"
        fill={assignColor('De Witt')}
        stroke={element.config.stroke}
        data-name="De Witt"
        data-x="169"
        data-y="199"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'De Witt')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M144.392 391.381L151.267 391.612L151.084 400.282L151.206 412.076L146.948 411.77L138.674 411.693H124.499L126.81 411.235L127.966 407.254L126.749 403.425L124.864 401.508L122.552 396.6L122.065 393.608L125.655 393.915L126.445 391.458L144.392 391.381Z"
        fill={assignColor('Union')}
        stroke={element.config.stroke}
        data-name="Union"
        data-x="144"
        data-y="391"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Union')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M142.811 364.365L137.7 364.442L117.503 364.133L117.625 343.651L131.191 344.037L144.635 344.115L144.575 350.847L145.67 350.925L146.278 356.027L144.879 358.344L144.818 361.587L142.811 364.365Z"
        fill={assignColor('Perry')}
        stroke={element.config.stroke}
        data-name="Perry"
        data-x="142"
        data-y="364"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Perry')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M178.887 115.114L178.704 101.207L178.218 87.1828L199.267 86.533L199.754 107.679L199.936 114.79H199.267L178.887 115.114Z"
        fill={assignColor('Grundy')}
        stroke={element.config.stroke}
        data-name="Grundy"
        data-x="178"
        data-y="115"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Grundy')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M171.647 350.925L171.708 367.759V371.15L157.898 371.304L144.575 371.073L144.514 364.365H142.811L144.818 361.586L144.879 358.344L146.278 356.027L145.67 350.925H171.647Z"
        fill={assignColor('Franklin')}
        stroke={element.config.stroke}
        data-name="Franklin"
        data-x="171"
        data-y="350"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Franklin')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M216.667 228.878L210.705 229.115V231.565L185.762 231.644V220.65H186.309L186.37 213.757L207.116 213.52L218.432 213.678L218.492 220.492L216.546 220.57L216.667 228.878Z"
        fill={assignColor('Douglas')}
        stroke={element.config.stroke}
        data-name="Douglas"
        data-x="216"
        data-y="228"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Douglas')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M171.709 371.15L171.587 391.305L163.982 391.535L151.267 391.612L144.393 391.381L144.575 371.073L157.898 371.304L171.709 371.15Z"
        fill={assignColor('Williamson')}
        stroke={element.config.stroke}
        data-name="Williamson"
        data-x="171"
        data-y="371"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Williamson')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M184.849 432.392L180.956 431.935L177.305 428.808L173.168 426.977L169.944 426.443L166.233 423.465L158.203 420.105V414.065L159.845 411.77L171.587 411.541L179.617 420.18L184.788 425.45L184.849 432.392Z"
        fill={assignColor('Massac')}
        stroke={element.config.stroke}
        data-name="Massac"
        data-x="184"
        data-y="432"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Massac')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M209.123 368.375L210.826 371.459L213.077 372.845L212.469 378.389L211.373 380.313L207.419 383.005L205.29 386.081L205.046 387.771L207.115 393.608L205.046 393.071L202.978 391.304L191.966 391.228L191.845 367.605L206.324 367.373L209.123 368.375Z"
        fill={assignColor('Gallatin')}
        stroke={element.config.stroke}
        data-name="Gallatin"
        data-x="209"
        data-y="368"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Gallatin')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M235.83 316.56L219.952 316.482L220.256 294.574L243.131 294.496L243.435 296.995L244.956 299.181L245.199 303.005L242.766 307.682L239.724 308.617L237.777 310.954L237.29 313.758L235.83 316.56Z"
        fill={assignColor('Lawrence')}
        stroke={element.config.stroke}
        data-name="Lawrence"
        data-x="235"
        data-y="316"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Lawrence')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M185.762 220.65V231.644L185.884 247.818L178.887 247.74V245.454L175.48 242.064H170.856V237.488L165.321 237.409L165.199 231.565L165.138 224.687H168.484L169.214 220.729L185.762 220.65Z"
        fill={assignColor('Moultrie')}
        stroke={element.config.stroke}
        data-name="Moultrie"
        data-x="185"
        data-y="220"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Moultrie')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M191.845 367.605L171.708 367.759L171.647 350.925L171.769 340.784L192.027 340.862L191.845 367.605Z"
        fill={assignColor('Hamilton')}
        stroke={element.config.stroke}
        data-name="Hamilton"
        data-x="191"
        data-y="367"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Hamilton')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M215.389 340.784L215.085 340.474L217.214 338.072L217.64 335.823L215.937 330.859L217.64 328.064L218.005 324.879L217.336 321.926V316.482H219.952L235.83 316.56L234.736 318.505L236.013 320.605L232.302 323.403L230.538 323.559L230.051 329.074L228.409 331.48L226.157 332.798L225.063 334.506L224.698 337.994L222.75 338.227L222.081 336.677L219.222 337.452L217.64 339.234L216.789 341.946L215.389 340.784Z"
        fill={assignColor('Wabash')}
        stroke={element.config.stroke}
        data-name="Wabash"
        data-x="215"
        data-y="340"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Wabash')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M220.256 294.574L219.952 316.482H217.336L205.655 316.56L205.594 314.224L199.085 314.147L196.286 311.422L197.807 309.084L197.138 307.76V303.862L198.842 303.94L198.781 294.808L205.412 294.886L217.944 294.574H220.256Z"
        fill={assignColor('Richland')}
        stroke={element.config.stroke}
        data-name="Richland"
        data-x="220"
        data-y="294"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Richland')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M138.247 303.16L117.442 303.082L117.137 292.777H114.947L114.826 283H118.05V280.808L138.369 280.886L138.126 285.191L138.247 303.16Z"
        fill={assignColor('Bond')}
        stroke={element.config.stroke}
        data-name="Bond"
        data-x="138"
        data-y="303"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Bond')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M61.5933 205.189L61.7149 206.697L60.1332 210.506L57.3962 213.916L58.1258 216.849L38.2323 216.69L37.1978 216.452L37.2586 204.951L37.4409 195.732L50.5816 195.811L52.0418 197.959L51.7986 200.025L56.3008 203.998L56.1792 205.427L61.5933 205.189Z"
        fill={assignColor('Brown')}
        stroke={element.config.stroke}
        data-name="Brown"
        data-x="61"
        data-y="205"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Brown')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M117.198 194.379L118.537 196.766L118.597 205.982H111.297L111.115 210.744H107.038L106.978 211.775H93.2898L93.229 195.334L94.6892 192.867L99.9817 193.265L104.545 194.379L107.951 194.062L109.594 192.708L111.662 192.788L113.305 191.355L115.373 191.913L117.198 194.379Z"
        fill={assignColor('Menard')}
        stroke={element.config.stroke}
        data-name="Menard"
        data-x="117"
        data-y="194"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Menard')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M212.712 68.3977L212.651 64.8933L198.598 65.3009V43.8188H205.655L219.586 43.3284V57.6332L219.831 65.9528L216.606 68.316L212.712 68.3977Z"
        fill={assignColor('DuPage')}
        stroke={element.config.stroke}
        data-name="DuPage"
        data-x="212"
        data-y="68"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'DuPage')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M171.587 391.304L171.709 371.15V367.759L191.845 367.604L191.967 391.228H189.716L171.587 391.304Z"
        fill={assignColor('Saline')}
        stroke={element.config.stroke}
        data-name="Saline"
        data-x="171"
        data-y="391"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Saline')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M171.587 391.304V411.541L159.846 411.77L158.203 414.065L156.804 414.677L153.944 413.606L151.206 414.753V412.076L151.084 400.282L151.267 391.611L163.982 391.535L171.587 391.304Z"
        fill={assignColor('Johnson')}
        stroke={element.config.stroke}
        data-name="Johnson"
        data-x="171"
        data-y="391"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Johnson')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M213.747 253.094L214.051 269.206L200.849 269.598L192.637 269.52L186.005 269.441V266.144L185.884 253.566L187.952 253.645L213.747 253.094Z"
        fill={assignColor('Cumberland')}
        stroke={element.config.stroke}
        data-name="Cumberland"
        data-x="213"
        data-y="253"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Cumberland')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M198.598 65.301L199.268 86.533L178.218 87.1829L177.975 72.7953L177.792 65.6269L198.598 65.301Z"
        fill={assignColor('Kendall')}
        stroke={element.config.stroke}
        data-name="Kendall"
        data-x="198"
        data-y="65"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Kendall')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M74.5513 242.064L57.5783 241.907L57.9431 239.618L55.8141 232.909L53.5625 228.245L53.6841 226.98L56.0573 222.628L56.4221 220.887H63.4788V223.658H70.1708V230.617L72.3615 230.696L72.4223 232.909L74.5513 232.829V242.064Z"
        fill={assignColor('Scott')}
        stroke={element.config.stroke}
        data-name="Scott"
        data-x="74"
        data-y="242"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Scott')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M151.206 412.076V414.753L153.944 413.606L156.803 414.678L158.203 414.066V420.105L153.336 420.334L148.894 424.229L146.948 427.969L143.358 432.164L141.898 430.791L139.404 430.257L137.579 428.808L138.247 422.855L137.457 420.028L139.221 416.512L140.925 415.824L141.229 413.3L138.674 411.693L146.948 411.77L151.206 412.076Z"
        fill={assignColor('Pulaski')}
        stroke={element.config.stroke}
        data-name="Pulaski"
        data-x="151"
        data-y="412"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Pulaski')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M101.624 105.173L114.887 105.253V112.044V126.164L93.7761 126.084L93.7153 111.963H100.894L100.954 105.173H101.624Z"
        fill={assignColor('Stark')}
        stroke={element.config.stroke}
        data-name="Stark"
        data-x="101"
        data-y="105"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Stark')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M171.648 1.98969L171.769 15.8341L171.648 30.0502L157.412 30.1329L157.472 1.90796L171.648 1.98969Z"
        fill={assignColor('Boone')}
        stroke={element.config.stroke}
        data-name="Boone"
        data-x="171"
        data-y="1"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Boone')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M207.116 393.608L210.097 396.677L210.34 399.438L209.427 400.818L202.857 402.121L198.842 402.428L195.008 403.961L193.305 406.029L192.027 406.258L189.351 404.88L189.716 391.228H191.966L202.978 391.305L205.046 393.071L207.116 393.608Z"
        fill={assignColor('Hardin')}
        stroke={element.config.stroke}
        data-name="Hardin"
        data-x="207"
        data-y="393"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Hardin')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M143.724 99.021L143.906 115.598L133.138 115.679L133.929 112.044H125.411V105.173H132.165L133.442 99.7495L138.553 98.1299L143.724 99.021Z"
        fill={assignColor('Putnam')}
        stroke={element.config.stroke}
        data-name="Putnam"
        data-x="143"
        data-y="99"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Putnam')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M215.085 340.474L212.895 340.862H205.473L205.656 324.413V316.56L217.336 316.482V321.926L218.005 324.879L217.64 328.064L215.937 330.859L217.64 335.823L217.214 338.072L215.085 340.474Z"
        fill={assignColor('Edwards')}
        stroke={element.config.stroke}
        data-name="Edwards"
        data-x="215"
        data-y="340"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Edwards')}
        onMouseLeave={handleMouseLeave}
      />
      {present && renderTooltip()}
      {renderLabels()}
    </svg>
  );
};

MapIllinois.propTypes = ElementPropTypes;
MapIllinoisPresent.propTypes = {
  element: PropTypes.object.isRequired,
};
MapIllinoisContent.propTypes = {
  element: PropTypes.object.isRequired,
  present: PropTypes.bool,
};

export default MapIllinois;
