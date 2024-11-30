import { ElementPropTypes } from '@/lib/prop-types.js';
import useMapElement from '@/lib/design/use-map-element.jsx';
import PropTypes from 'prop-types';

const MapOhio = ({ element }) => {
  return <MapOhioContent element={element} />;
};

export const MapOhioPresent = ({ element }) => {
  return <MapOhioContent element={element} />;
};

export const MapOhioPreview = () => {
  return <MapOhioContent element={{ config: { data: [], fill: '#f9fafb', stroke: '#f9fafb' } }} present={false} />;
};

export const MapOhioContent = ({ element, present = true }) => {
  const { el, assignColor, renderLabels, handleMouseMove, handleMouseLeave, renderTooltip } = useMapElement(element);

  return (
    <svg ref={el} width="100%" viewBox="0 0 400 436" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M328.209 291.666L332.003 294.908L351.251 295.748L350.973 299.589L342.275 310.861L338.759 311.7L334.039 318.167L329.135 318.407L322.102 322.955L318.863 323.075L314.329 315.533L303.225 323.075L302.114 331.805L294.249 330.968L290.917 332.403L287.678 338.377L287.771 331.805L278.702 331.566L275.464 326.185L276.204 310.382L278.425 305.107L288.974 306.546L288.049 294.908L290.64 293.467L299.986 293.948L310.535 294.428L312.571 288.663L317.845 292.266L328.209 291.666Z"
        stroke={element.config.stroke}
        data-name="Washington"
        fill={assignColor('Washington')}
        data-x="328"
        data-y="291"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Washington')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M186.443 415.064L182.742 410.21L179.226 393.377L171.452 396.817L168.029 396.224L158.96 403.339L155.073 409.263L144.524 409.736L144.247 362.23L149.521 365.207L149.706 368.897L187.184 370.325L192.181 370.682L191.533 381.384L201.712 382.097L200.509 394.089L197.548 393.852L196.437 402.509L191.163 402.153L193.384 411.986L186.443 415.064Z"
        stroke={element.config.stroke}
        data-name="Scioto"
        fill={assignColor('Scioto')}
        data-x="186"
        data-y="415"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Scioto')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M208.56 382.691L207.912 390.291L217.073 391.241L218.646 394.919L218.183 401.916L229.103 402.627L228.362 413.289L235.488 413.525L232.434 428.783L212.816 434.807L206.987 433.036L205.876 428.192L194.864 416.603L186.443 415.064L193.384 411.986L191.163 402.153L196.437 402.509L197.548 393.852L200.509 394.089L201.712 382.097L208.56 382.691Z"
        stroke={element.config.stroke}
        data-name="Lawrence"
        fill={assignColor('Lawrence')}
        data-x="208"
        data-y="382"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Lawrence')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M107.047 361.754L104.086 407.012L97.6078 404.05L95.7568 399.426L91.5008 397.173L88.9098 392.546L80.4888 389.46L71.8828 391.122L77.3428 333.837L89.1868 334.673L88.7248 361.635L107.047 361.754Z"
        stroke={element.config.stroke}
        data-name="Brown"
        fill={assignColor('Brown')}
        data-x="107"
        data-y="361"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Brown')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M398.907 61.0934L354.12 60.7234V34.3614L354.212 17.2354L363.373 15.2474L399 1.69141L398.907 61.0934Z"
        stroke={element.config.stroke}
        data-name="Ashtabula"
        fill={assignColor('Ashtabula')}
        data-x="398"
        data-y="61"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Ashtabula')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M154.241 45.5103L130.829 46.1293L116.578 46.5013L112.969 51.6983L104.641 56.7683L103.531 61.0933L95.5719 68.1334L87.6139 71.0953V62.5764L88.0769 43.1583L87.3369 33.8653L126.665 32.0063L129.533 37.0883L136.381 37.5843L138.694 35.3533L149.706 43.6533L154.241 45.5103Z"
        stroke={element.config.stroke}
        data-name="Lucas"
        fill={assignColor('Lucas')}
        data-x="154"
        data-y="45"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Lucas')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M193.291 308.225L192.551 320.203L191.255 339.333L189.127 343.989L136.566 340.647L134.16 334.196L133.512 325.588L134.808 319.126L144.617 302.469L170.99 303.549L169.509 306.786L193.291 308.225Z"
        stroke={element.config.stroke}
        data-name="Ross"
        fill={assignColor('Ross')}
        data-x="193"
        data-y="308"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Ross')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M290.177 263.273L289.807 273.631L254.828 271.825L255.106 266.406L246.037 265.924L246.87 255.193L240.207 254.712L243.446 250.245L244.464 224.01L288.049 225.826L286.938 252.419L290.455 252.539L290.177 263.273Z"
        stroke={element.config.stroke}
        data-name="Muskingum"
        fill={assignColor('Muskingum')}
        data-x="290"
        data-y="263"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Muskingum')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M235.488 413.525L228.362 413.289L229.103 402.627L218.183 401.916L218.646 394.919L217.073 391.241L207.912 390.291L208.56 382.691H219.757L221.607 359.967L231.971 360.801V362.588L253.07 363.898L252.607 369.849L248.721 376.867L248.258 383.76L242.521 387.798L245.112 398.478L246.222 409.144L242.15 412.697L235.488 413.525Z"
        stroke={element.config.stroke}
        data-name="Gallia"
        fill={assignColor('Gallia')}
        data-x="235"
        data-y="413"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Gallia')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M276.204 310.382L275.464 326.185L278.702 331.566L287.771 331.805L287.678 338.377L284.81 342.556L236.968 339.81L237.801 329.175L234.285 328.936L235.025 318.287L235.858 307.625L246.407 308.464L247.147 297.669L257.419 298.269L256.586 309.063L276.204 310.382Z"
        stroke={element.config.stroke}
        data-name="Athens"
        fill={assignColor('Athens')}
        data-x="276"
        data-y="310"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Athens')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M243.724 215.286L244.464 224.01L243.446 250.245L240.207 254.711L219.016 252.659L218.091 253.263L189.405 251.452L190.33 247.106L191.348 228.973L192.366 210.679L217.813 212.134L217.721 214.438L243.724 215.286Z"
        stroke={element.config.stroke}
        data-name="Licking"
        fill={assignColor('Licking')}
        data-x="243"
        data-y="215"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Licking')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M273.15 88.7214H264.452L264.267 97.9514H255.106L255.013 105.818L246.13 105.695L246.037 114.659L230.676 114.414L230.213 87.6134L229.565 69.7374L237.524 69.3674L244.927 64.4284L260.75 58.9934L264.822 60.3524L264.544 79.3584L273.243 79.4814L273.15 88.7214Z"
        stroke={element.config.stroke}
        data-name="Lorain"
        fill={assignColor('Lorain')}
        data-x="273"
        data-y="88"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Lorain')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M130.921 60.9704L130.459 91.3074L130.366 102.008L87.7993 101.885L87.6143 71.0954L95.5723 68.1334L103.531 61.0934L104.641 56.7684L112.969 51.6984L116.578 46.5014L130.829 46.1294L130.921 60.9704Z"
        stroke={element.config.stroke}
        data-name="Wood"
        fill={assignColor('Wood')}
        data-x="130"
        data-y="60"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Wood')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M309.147 44.6443L309.239 52.3163H318.216L318.123 79.6053L299.986 79.3583L302.392 88.3523L291.01 88.4753L273.15 88.7213L273.243 79.4813L264.544 79.3583L264.822 60.3523L269.819 62.2053L280.553 61.2173L285.087 62.3293L297.487 54.2953L309.147 44.6443Z"
        stroke={element.config.stroke}
        data-name="Cuyahoga"
        fill={assignColor('Cuyahoga')}
        data-x="309"
        data-y="44"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Cuyahoga')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M346.347 134.64V155.792L332.466 156.281L332.096 165.189L325.063 165.067L311.183 164.701L294.341 167.141V163.116L294.434 133.048L315.532 134.028L315.902 123.859H318.03L346.439 123.981L346.347 134.64Z"
        stroke={element.config.stroke}
        data-name="Stark"
        fill={assignColor('Stark')}
        data-x="346"
        data-y="134"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Stark')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M329.412 191.614L328.95 207.403L323.49 207.282L323.12 218.316L296.747 217.468L297.395 199.634L288.511 199.269L288.789 190.276L292.49 190.155L293.138 167.384L294.341 167.141L311.183 164.701L325.063 165.067L324.601 175.428L329.968 175.672L329.412 191.614Z"
        stroke={element.config.stroke}
        data-name="Tuscarawas"
        fill={assignColor('Tuscarawas')}
        data-x="329"
        data-y="191"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Tuscarawas')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M385.397 173.479L377.809 171.773L367.167 171.407L367.26 166.165H361.985V155.914L346.347 155.792V134.64H363.929L364.021 131.089H370.869V134.64L399 134.762L398.907 166.653L393.633 169.457L388.081 169.823L385.397 173.479Z"
        stroke={element.config.stroke}
        data-name="Columbiana"
        fill={assignColor('Columbiana')}
        data-x="385"
        data-y="173"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Columbiana')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M144.247 362.23L144.524 409.736L139.805 410.565L135.086 404.642L126.757 403.22L119.447 399.664L111.211 402.627L109.916 407.367L104.086 407.012L107.047 361.754L112.692 361.992L133.605 357.584L140.175 357.942L144.247 362.23Z"
        stroke={element.config.stroke}
        data-name="Adams"
        fill={assignColor('Adams')}
        data-x="144"
        data-y="362"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Adams')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M252.607 369.849L253.07 363.898L231.971 362.588V360.801L233.452 339.69L236.968 339.81L284.81 342.556L285.92 351.028L280.831 358.657L283.699 361.635L281.664 372.824L278.147 370.563L272.317 379.126L268.523 376.629L271.207 372.229L267.691 364.969L263.897 364.731L259.27 360.682L252.607 369.849Z"
        stroke={element.config.stroke}
        data-name="Meigs"
        fill={assignColor('Meigs')}
        data-x="252"
        data-y="369"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Meigs')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M333.484 223.646L332.743 250.125L318.678 250.245L318.586 253.745L311.645 253.504L311.368 257.002L300.911 256.641L300.726 263.633L290.177 263.272L290.454 252.539L286.938 252.418L288.049 225.826H292.398L292.583 217.347L296.747 217.468L323.12 218.316L322.935 223.525L333.484 223.646Z"
        stroke={element.config.stroke}
        data-name="Guernsey"
        fill={assignColor('Guernsey')}
        data-x="333"
        data-y="223"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Guernsey')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M244.741 188.818L243.724 215.287L217.721 214.439L217.813 212.135L192.366 210.68L192.921 201.821L202.082 202.428L203.285 180.909L204.21 177.5L230.676 176.891L241.503 175.307L245.297 174.698L244.741 188.818Z"
        stroke={element.config.stroke}
        data-name="Knox"
        fill={assignColor('Knox')}
        data-x="244"
        data-y="288"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Knox')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M87.8918 165.921V178.838L77.3428 179.325L76.6018 185.654L45.4178 185.898V198.297L36.6268 198.419V201.212L34.6828 200.848L34.5908 161.041H40.0498L56.1518 160.919L56.2438 164.457L66.7938 166.165L87.8918 165.921Z"
        stroke={element.config.stroke}
        data-name="Auglaize"
        fill={assignColor('Auglaize')}
        data-x="87"
        data-y="165"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Auglaize')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M136.566 340.646L133.605 357.584L112.692 361.992L107.047 361.754L88.7246 361.635L89.1866 334.673L94.2766 337.541L96.5896 332.881L114.635 318.886L134.808 319.125L133.512 325.587L134.16 334.195L136.566 340.646Z"
        stroke={element.config.stroke}
        data-name="Highland"
        fill={assignColor('Highland')}
        data-x="136"
        data-y="340"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Highland')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M150.262 231.151L149.706 238.407L145.08 238.166L144.709 243.362L147.578 253.142L146.005 254.228L146.745 266.766L145.912 280.969L108.898 278.323L109.453 271.584L114.913 272.065L122.13 243.725L121.668 242.879L122.686 230.788L150.262 231.151Z"
        stroke={element.config.stroke}
        data-name="Madison"
        fill={assignColor('Madison')}
        data-x="150"
        data-y="231"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Madison')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M235.025 318.287L234.285 328.936L237.801 329.175L236.968 339.81L233.452 339.69L231.971 360.801L221.607 359.967L222.533 347.688L211.891 346.972L212.169 342.556L201.619 341.601L191.255 339.332L192.551 320.202L203.193 319.245L214.019 320.083L214.204 316.85L235.025 318.287Z"
        stroke={element.config.stroke}
        data-name="Vinton"
        fill={assignColor('Vinton')}
        data-x="235"
        data-y="318"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Vinton')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M185.611 268.934L183.852 297.069L194.216 297.789L193.291 308.224L169.509 306.786L170.99 303.548L144.617 302.468L145.912 280.969L146.745 266.766L185.611 268.934Z"
        stroke={element.config.stroke}
        data-name="Pickaway"
        fill={assignColor('Pickaway')}
        data-x="185"
        data-y="168"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Pickaway')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M219.016 252.659L218.091 263.874L225.216 264.356L224.476 274.954L227.992 275.315L227.159 285.778L216.518 285.057L215.963 292.146L204.673 291.305L204.488 296.709L194.216 297.789L183.852 297.069L185.611 268.934L187.554 265.561L189.405 251.452L218.091 253.263L219.016 252.659Z"
        stroke={element.config.stroke}
        data-name="Fairfield"
        fill={assignColor('Fairfield')}
        data-x="219"
        data-y="252"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Fairfield')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M398.907 61.0934L399 106.186L354.212 106.064L354.12 79.7284V60.7234L398.907 61.0934Z"
        stroke={element.config.stroke}
        data-name="Trumbull"
        fill={assignColor('Trumbull')}
        data-x="398"
        data-y="61"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Trumbull')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M288.789 190.276L288.511 199.269L297.395 199.634L296.747 217.468L292.583 217.347L292.398 225.826H288.049L244.464 224.01L243.724 215.286L244.741 188.817L288.789 190.276Z"
        stroke={element.config.stroke}
        data-name="Coshocton"
        fill={assignColor('Coshocton')}
        data-x="288"
        data-y="190"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Coshocton')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M191.348 228.973L190.33 247.106L189.405 251.452L187.554 265.562L185.611 268.934L146.745 266.766L146.005 254.229L147.578 253.143L144.709 243.363L145.08 238.167L149.706 238.408L150.262 231.151L153.593 226.917L191.348 228.973Z"
        stroke={element.config.stroke}
        data-name="Franklin"
        fill={assignColor('Franklin')}
        data-x="191"
        data-y="228"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Franklin')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M221.792 123.369H223.18L223.458 143.572L226.882 148.462V155.914H230.491L230.676 176.89L204.21 177.499L203.84 158.112L194.587 157.868L194.772 123.001L221.792 123.369Z"
        stroke={element.config.stroke}
        data-name="Richland"
        fill={assignColor('Richland')}
        data-x="221"
        data-y="123"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Richland')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M247.147 297.669L246.407 308.464L235.858 307.625L235.025 318.287L214.204 316.85L214.019 320.083L203.193 319.245L192.551 320.202L193.291 308.224L194.216 297.789L204.488 296.709L204.673 291.305L215.963 292.146L216.518 285.057L227.159 285.778L226.697 292.747L237.616 293.467L237.431 296.949L247.147 297.669Z"
        stroke={element.config.stroke}
        data-name="Hocking"
        fill={assignColor('Hocking')}
        data-x="247"
        data-y="297"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Hocking')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M381.881 225.221L379.29 233.692L378.734 246.986L372.257 255.193L374.015 259.897L371.054 262.308L332.466 260.258L332.744 250.125L333.484 223.646L365.224 224.857L381.881 225.221Z"
        stroke={element.config.stroke}
        data-name="Belmont"
        fill={assignColor('Belmont')}
        data-x="381"
        data-y="225"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Belmont')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M332.744 250.125L332.466 260.258L325.433 259.897L324.878 279.526H328.487L328.209 291.666L317.845 292.266L312.571 288.663L310.535 294.428L299.986 293.948L300.171 284.697L294.896 284.456L295.174 273.991L289.807 273.63L290.177 263.272L300.726 263.633L300.911 256.641L311.368 257.002L311.645 253.504L318.586 253.745L318.678 250.245L332.744 250.125Z"
        stroke={element.config.stroke}
        data-name="Noble"
        fill={assignColor('Noble')}
        data-x="332"
        data-y="250"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Noble')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M257.419 298.269L247.147 297.669L237.431 296.949L237.616 293.467L226.697 292.747L227.159 285.778L227.992 275.315L224.476 274.954L225.216 264.356L218.091 263.874L219.016 252.659L240.207 254.711L246.87 255.193L246.037 265.923L255.106 266.405L254.828 271.824L254.458 277L259.64 277.361L257.419 298.269Z"
        stroke={element.config.stroke}
        data-name="Perry"
        fill={assignColor('Perry')}
        data-x="257"
        data-y="298"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Perry')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M36.6269 201.212L36.8119 220.376L37.3669 253.987L31.9069 254.107L1.46289 254.228L2.20289 201.455L36.6269 201.212Z"
        stroke={element.config.stroke}
        data-name="Darke"
        fill={assignColor('Darke')}
        data-x="36"
        data-y="201"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Darke')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M350.973 299.589L351.251 295.748L332.003 294.908L328.209 291.666L328.487 279.526H324.878L325.433 259.897L332.466 260.258L371.054 262.308L369.851 269.175L367.075 274.112L370.221 278.443L367.26 281.33L365.132 290.104L359.672 291.426L350.973 299.589Z"
        stroke={element.config.stroke}
        data-name="Monroe"
        fill={assignColor('Monroe')}
        data-x="350"
        data-y="299"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Monroe')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M77.3428 333.837L71.8828 391.122L57.8168 387.56L55.1338 383.285L54.7638 376.629L49.8588 369.135L47.2678 361.516L49.0268 343.272L47.1758 337.302L52.7278 331.925L76.1398 333.717L77.3428 333.837Z"
        stroke={element.config.stroke}
        data-name="Clermont"
        fill={assignColor('Clermont')}
        data-x="77"
        data-y="333"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Clermont')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M130.366 102.008L130.459 123.491H127.127L125.184 134.15H121.668L121.575 144.796L87.8918 144.55V132.191L87.7988 101.885L130.366 102.008Z"
        stroke={element.config.stroke}
        data-name="Hancock"
        fill={assignColor('Hancock')}
        data-x="130"
        data-y="102"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Hancock')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M87.7992 101.885L87.8922 132.191L77.2502 132.313L66.6082 134.272V139.535L45.2332 139.781V134.272L39.9582 134.395L39.8652 123.736L45.1402 123.614V102.254L55.6892 102.132L87.7992 101.885Z"
        stroke={element.config.stroke}
        data-name="Putnam"
        fill={assignColor('Putnam')}
        data-x="87"
        data-y="101"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Putnam')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M192.921 201.82L192.366 210.679L191.348 228.973L153.593 226.916L153.408 214.68L146.375 214.559V190.398L167.381 191.614L176.264 194.045L175.802 200.848L192.921 201.82Z"
        stroke={element.config.stroke}
        data-name="Delaware"
        fill={assignColor('Delaware')}
        data-x="192"
        data-y="201"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Delaware')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M249.924 123.491L250.201 163.116H241.41L241.503 175.306L230.676 176.89L230.491 155.914H226.882V148.462L223.458 143.572L223.18 123.369H221.792L221.422 114.537L230.676 114.414L246.037 114.659L245.759 123.491H249.924Z"
        stroke={element.config.stroke}
        data-name="Ashland"
        fill={assignColor('Ashland')}
        data-x="249"
        data-y="123"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Ashland')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M44.122 329.295L52.728 331.925L47.176 337.302L49.027 343.272L47.268 361.516L39.033 358.657L33.943 349.596L19.045 355.32L6.46 347.33L1 351.385V327.62H30.056L44.122 329.295Z"
        stroke={element.config.stroke}
        data-name="Hamilton"
        fill={assignColor('Hamilton')}
        data-x="44"
        data-y="329"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Hamilton')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M299.986 293.948L290.64 293.467L288.049 294.908L288.974 306.546L278.425 305.107L276.204 310.382L256.586 309.063L257.419 298.269L259.64 277.361L254.458 277L254.828 271.824L289.807 273.63L295.174 273.991L294.896 284.456L300.171 284.697L299.986 293.948Z"
        stroke={element.config.stroke}
        data-name="Morgan"
        fill={assignColor('Morgan')}
        data-x="299"
        data-y="293"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Morgan')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M290.732 123.859L294.434 123.981V133.048L294.341 163.116H250.201L249.924 123.491L290.732 123.859Z"
        stroke={element.config.stroke}
        data-name="Wayne"
        fill={assignColor('Wayne')}
        data-x="290"
        data-y="123"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Wayne')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M184.13 91.1833L185.148 122.878L158.867 123.369L130.459 123.491L130.366 102.008L130.459 91.3074L184.13 91.1833Z"
        stroke={element.config.stroke}
        data-name="Seneca"
        fill={assignColor('Seneca')}
        data-x="184"
        data-y="91"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Seneca')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M87.8922 178.838L88.3552 179.812L121.205 182.369V183.099L118.336 216.498L96.6832 214.559L96.7752 212.74L75.4922 211.042L76.4172 206.19L76.6022 185.654L77.3432 179.325L87.8922 178.838Z"
        stroke={element.config.stroke}
        data-name="Logan"
        fill={assignColor('Logan')}
        data-x="87"
        data-y="178"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Logan')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M381.881 225.221L365.224 224.857L366.89 193.194L359.764 192.708L361.43 187.479L361.708 176.768L367.075 176.89L367.167 171.407L377.809 171.773L385.397 173.479L389.099 179.569L391.69 187.966L390.209 194.895L391.412 204.248L389.839 211.649L386.23 214.923L381.881 225.221Z"
        stroke={element.config.stroke}
        data-name="Jefferson"
        fill={assignColor('Jefferson')}
        data-x="381"
        data-y="225"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Jefferson')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M182.464 158.6L182.279 165.799L173.211 165.921V184.681L167.751 185.533L167.381 191.614L146.375 190.398V182.734L130.551 182.977L130.459 160.797L141.1 158.967L159.053 158.844L182.464 158.6Z"
        stroke={element.config.stroke}
        data-name="Marion"
        fill={assignColor('Marion')}
        data-x="182"
        data-y="158"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Marion')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M55.6891 102.131L45.1401 102.254V96.8443L34.4981 96.7213L34.4061 91.3073L2.29613 91.4303L2.20312 70.1073L45.1401 69.8613H55.6891V102.131Z"
        stroke={element.config.stroke}
        data-name="Defiance"
        fill={assignColor('Defiance')}
        data-x="55"
        data-y="102"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Defiance')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M153.593 226.916L150.262 231.151L122.686 230.788L123.611 216.983L118.336 216.498L121.205 183.099L130.551 182.977L146.375 182.734V190.398V214.559L153.408 214.68L153.593 226.916Z"
        stroke={element.config.stroke}
        data-name="Union"
        fill={assignColor('Union')}
        data-x="153"
        data-y="226"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Union')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M230.213 87.6135L230.676 114.415L221.422 114.538L221.792 123.37L194.772 123.002L185.148 122.879L184.13 91.1835L183.945 86.8745L230.213 87.6135Z"
        stroke={element.config.stroke}
        data-name="Huron"
        fill={assignColor('Huron')}
        data-x="230"
        data-y="87"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Huron')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M66.2382 295.028L42.9192 293.587H32.4622L31.9072 254.107L37.3672 253.987L61.7042 253.504L61.4262 257.967L72.0682 258.691L71.7912 262.308L68.1822 263.754L66.2382 295.028Z"
        stroke={element.config.stroke}
        data-name="Montgomery"
        fill={assignColor('Montgomery')}
        data-x="66"
        data-y="295"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Montgomery')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M189.127 343.988L187.184 370.325L149.706 368.897L149.521 365.207L144.247 362.23L140.175 357.942L133.605 357.584L136.566 340.646L189.127 343.988Z"
        stroke={element.config.stroke}
        data-name="Pike"
        fill={assignColor('Pike')}
        data-x="189"
        data-y="343"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Pike')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M89.1866 334.673L77.3427 333.837L76.1396 333.717L78.9156 296.109L107.325 298.389L116.023 298.989L114.635 318.886L96.5896 332.881L94.2766 337.541L89.1866 334.673Z"
        stroke={element.config.stroke}
        data-name="Clinton"
        fill={assignColor('Clinton')}
        data-x="89"
        data-y="334"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Clinton')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M87.6139 62.5764V71.0954L87.7989 101.885L55.6889 102.131V69.8614H45.1399L45.0469 62.6994L87.6139 62.5764Z"
        stroke={element.config.stroke}
        data-name="Henry"
        fill={assignColor('Henry')}
        data-x="87"
        data-y="62"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Henry')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M109.453 271.585L92.611 268.574L92.796 265.683L82.247 264.839L71.791 262.309L72.068 258.691L73.456 239.375L121.668 242.88L122.13 243.726L114.913 272.066L109.453 271.585Z"
        stroke={element.config.stroke}
        data-name="Clark"
        fill={assignColor('Clark')}
        data-x="109"
        data-y="271"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Clark')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M87.8916 144.55L121.575 144.795H123.426L123.333 158.967L130.459 160.797L130.551 182.977L121.205 183.099V182.369L88.3546 179.812L87.8916 178.838V165.921V144.55Z"
        stroke={element.config.stroke}
        data-name="Hardin"
        fill={assignColor('Hardin')}
        data-x="87"
        data-y="144"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Hardin')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M204.21 177.499L203.285 180.908L202.082 202.427L192.921 201.82L175.802 200.848L176.264 194.045L167.381 191.614L167.751 185.533L173.211 184.681V165.921L182.279 165.799L182.464 158.6L194.587 157.868L203.84 158.112L204.21 177.499Z"
        stroke={element.config.stroke}
        data-name="Morrow"
        fill={assignColor('Morrow')}
        data-x="204"
        data-y="177"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Morrow')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M32.462 293.587H42.919L46.065 298.749L44.122 329.295L30.056 327.62H1L1.37 296.229H32.462V293.587Z"
        stroke={element.config.stroke}
        data-name="Butler"
        fill={assignColor('Butler')}
        data-x="32"
        data-y="293"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Butler')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M87.892 165.921L66.794 166.165L56.244 164.457L56.152 160.919L40.05 161.041L39.958 145.04H45.325L45.233 139.78L66.608 139.535V134.272L77.25 132.313L87.892 132.191V144.55V165.921Z"
        stroke={element.config.stroke}
        data-name="Allen"
        fill={assignColor('Allen')}
        data-x="87"
        data-y="165"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Allen')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M163.402 66.2814L176.264 70.7254L178.3 69.6144H183.482L183.945 86.8744L184.13 91.1834L130.459 91.3074L130.921 60.9704L137.954 60.8464L138.047 66.1574L163.402 66.2814Z"
        stroke={element.config.stroke}
        data-name="Sandusky"
        fill={assignColor('Sandusky')}
        data-x="163"
        data-y="66"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Sandusky')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M354.12 60.7233V79.7283L318.123 79.6053L318.216 52.3163H327.007L327.099 43.5303H344.959V34.4853L354.12 34.3613V60.7233Z"
        stroke={element.config.stroke}
        data-name="Geauga"
        fill={assignColor('Geauga')}
        data-x="254"
        data-y="60"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Geauga')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M122.686 230.788L121.668 242.879L73.4561 239.374L74.659 221.951L75.4921 211.042L96.7751 212.74L96.6831 214.559L118.336 216.498L123.611 216.983L122.686 230.788Z"
        stroke={element.config.stroke}
        data-name="Champaign"
        fill={assignColor('Champaign')}
        data-x="122"
        data-y="230"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Champaign')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M134.808 319.125L114.635 318.886L116.023 298.989L107.325 298.389L108.898 278.323L145.912 280.969L144.617 302.468L134.808 319.125Z"
        stroke={element.config.stroke}
        data-name="Fayette"
        fill={assignColor('Fayette')}
        data-x="134"
        data-y="319"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Fayette')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M39.865 123.736L39.958 134.395L45.233 134.272V139.78L45.325 145.04H39.958L40.05 161.041H34.591V155.792H2.57296L2.48096 123.859L39.865 123.736Z"
        stroke={element.config.stroke}
        data-name="Van Wert"
        fill={assignColor('Van Wert')}
        data-x="39"
        data-y="123"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Van Wert')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M318.123 79.6055L354.12 79.7285L354.212 106.064V123.981H346.439L318.03 123.859L318.123 79.6055Z"
        stroke={element.config.stroke}
        data-name="Portage"
        fill={assignColor('Portage')}
        data-x="318"
        data-y="79"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Portage')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M291.01 88.4753L290.732 123.859L249.924 123.491H245.759L246.037 114.659L246.13 105.695L255.013 105.818L255.106 97.9513H264.267L264.452 88.7213H273.15L291.01 88.4753Z"
        stroke={element.config.stroke}
        data-name="Medina"
        fill={assignColor('Medina')}
        data-x="291"
        data-y="88"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Medina')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M109.453 271.584L108.898 278.323L107.325 298.389L78.9163 296.109L66.2383 295.028L68.1823 263.754L71.7913 262.308L82.2473 264.838L92.7963 265.682L92.6113 268.573L109.453 271.584Z"
        stroke={element.config.stroke}
        data-name="Greene"
        fill={assignColor('Greene')}
        data-x="109"
        data-y="271"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Greene')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M346.347 155.792L361.985 155.914V166.165H367.26L367.167 171.407L367.075 176.89L361.708 176.768L361.43 187.479L359.764 192.708L329.412 191.614L329.968 175.672L324.601 175.428L325.063 165.067L332.096 165.189L332.466 156.281L346.347 155.792Z"
        stroke={element.config.stroke}
        data-name="Carroll"
        fill={assignColor('Carroll')}
        data-x="346"
        data-y="155"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Carroll')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M2.57313 155.792H34.5911V161.041L34.6831 200.848L36.6271 201.212L2.20312 201.455L2.57313 155.792Z"
        stroke={element.config.stroke}
        data-name="Mercer"
        fill={assignColor('Mercer')}
        data-x="2"
        data-y="155"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Mercer')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M221.607 359.967L219.757 382.691H208.56L201.712 382.098L191.533 381.385L192.181 370.683L187.184 370.326L189.127 343.989L191.255 339.333L201.619 341.602L212.169 342.557L211.891 346.973L222.533 347.689L221.607 359.967Z"
        stroke={element.config.stroke}
        data-name="Jackson"
        fill={assignColor('Jackson')}
        data-x="221"
        data-y="359"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Jackson')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M354.212 17.2354L354.12 34.3614L344.959 34.4854V43.5303H327.099L327.007 52.3164H318.216H309.239L309.147 44.6444L319.511 34.1133L328.395 28.6574L333.114 27.9124L343.108 22.2034L354.212 17.2354Z"
        stroke={element.config.stroke}
        data-name="Lake"
        fill={assignColor('Lake')}
        data-x="354"
        data-y="17"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Lake')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M399 134.762L370.869 134.64V131.089H364.021L363.929 134.64H346.347L346.439 123.981H354.212V106.064L399 106.186V134.762Z"
        stroke={element.config.stroke}
        data-name="Mahoning"
        fill={assignColor('Mahoning')}
        data-x="399"
        data-y="134"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Mahoning')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M318.03 123.859H315.902L315.532 134.028L294.434 133.048V123.981L290.732 123.859L291.01 88.4754L302.392 88.3524L299.986 79.3584L318.123 79.6054L318.03 123.859Z"
        stroke={element.config.stroke}
        data-name="Summit"
        fill={assignColor('Summit')}
        data-x="318"
        data-y="123"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Summit')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M74.659 221.951L73.456 239.374L72.068 258.691L61.426 257.967L61.704 253.504L37.367 253.987L36.812 220.376L56.522 220.013L74.659 221.951Z"
        stroke={element.config.stroke}
        data-name="Miami"
        fill={assignColor('Miami')}
        data-x="74"
        data-y="221"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Miami')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M45.0469 62.6995L45.1399 69.8615L2.20286 70.1075L2.10986 36.7165L39.8649 35.3535L41.5309 46.5015V59.2405L45.0469 62.6995Z"
        stroke={element.config.stroke}
        data-name="Williams"
        fill={assignColor('Williams')}
        data-x="45"
        data-y="62"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Williams')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M78.9159 296.109L76.1399 333.717L52.7279 331.925L44.1219 329.295L46.0649 298.749L42.9189 293.587L66.2379 295.028L78.9159 296.109Z"
        stroke={element.config.stroke}
        data-name="Warren"
        fill={assignColor('Warren')}
        data-x="78"
        data-y="296"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Warren')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M359.764 192.708L366.89 193.195L365.224 224.857L333.484 223.646L322.935 223.525L323.12 218.316L323.49 207.283L328.95 207.404L329.412 191.615L359.764 192.708Z"
        stroke={element.config.stroke}
        data-name="Harrison"
        fill={assignColor('Harrison')}
        data-x="359"
        data-y="192"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Harrison')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M75.492 211.042L74.659 221.951L56.522 220.013L36.812 220.376L36.627 201.212V198.419L45.418 198.297V185.898L76.602 185.654L76.417 206.19L75.492 211.042Z"
        stroke={element.config.stroke}
        data-name="Shelby"
        fill={assignColor('Shelby')}
        data-x="75"
        data-y="211"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Shelby')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M288.789 190.276L244.741 188.817L245.297 174.697L241.503 175.306L241.41 163.116H250.201H294.341V167.141L293.138 167.384L292.49 190.155L288.789 190.276Z"
        stroke={element.config.stroke}
        data-name="Holmes"
        fill={assignColor('Holmes')}
        data-x="288"
        data-y="190"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Holmes')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M158.867 123.369L159.053 158.844L141.1 158.967L130.459 160.797L123.333 158.967L123.426 144.795H121.575L121.668 134.15H125.184L127.127 123.491H130.459L158.867 123.369Z"
        stroke={element.config.stroke}
        data-name="Wyandot"
        fill={assignColor('Wyandot')}
        data-x="158"
        data-y="123"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Wyandot')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M45.1399 102.254V123.614L39.8649 123.736L2.4809 123.859L2.2959 91.4304L34.4059 91.3074L34.4979 96.7214L45.1399 96.8444V102.254Z"
        stroke={element.config.stroke}
        data-name="Paulding"
        fill={assignColor('Paulding')}
        data-x="45"
        data-y="102"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Paulding')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M87.6142 62.5765L45.0472 62.6995L41.5312 59.2405V46.5015L39.8652 35.3535L87.3372 33.8655L88.0772 43.1585L87.6142 62.5765Z"
        stroke={element.config.stroke}
        data-name="Fulton"
        fill={assignColor('Fulton')}
        data-x="87"
        data-y="62"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Fulton')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M31.9071 254.107L32.4621 293.587V296.229H1.37012L1.46312 254.228L31.9071 254.107Z"
        stroke={element.config.stroke}
        data-name="Preble"
        fill={assignColor('Preble')}
        data-x="31"
        data-y="254"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Preble')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M163.402 66.2815L138.047 66.1575L137.954 60.8465L130.921 60.9705L130.829 46.1295L154.241 45.5105L162.476 48.1105L165.808 52.9355L175.339 58.7455L182.187 55.7795L184.963 49.8425L189.127 56.3975L195.419 55.6555L195.142 59.7345L173.118 62.2055L171.638 65.1695L163.402 66.2815Z"
        stroke={element.config.stroke}
        data-name="Ottawa"
        fill={assignColor('Ottawa')}
        data-x="163"
        data-y="66"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Ottawa')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M185.148 122.878L194.772 123.001L194.587 157.868L182.464 158.6L159.053 158.844L158.867 123.369L185.148 122.878Z"
        stroke={element.config.stroke}
        data-name="Crawford"
        fill={assignColor('Crawford')}
        data-x="185"
        data-y="122"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Crawford')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M229.565 69.7374L230.213 87.6133L183.945 86.8744L183.482 69.6143H178.3L184.87 66.5284L190.885 67.5154L196.807 65.7874L203.1 68.3793L215.592 75.5364L229.565 69.7374Z"
        stroke={element.config.stroke}
        data-name="Erie"
        fill={assignColor('Erie')}
        data-x="229"
        data-y="69"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Erie')}
        onMouseLeave={handleMouseLeave}
      />
      {present && renderTooltip()}
      {renderLabels()}
    </svg>
  );
};

MapOhio.propTypes = ElementPropTypes;
MapOhioPresent.propTypes = {
  element: PropTypes.object.isRequired,
};
MapOhioContent.propTypes = {
  element: PropTypes.object.isRequired,
  present: PropTypes.bool,
};

export default MapOhio;
