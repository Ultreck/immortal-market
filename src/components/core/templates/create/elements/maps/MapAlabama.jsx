import { ElementPropTypes } from '@/lib/prop-types.js';
import useMapElement from '@/lib/design/use-map-element.jsx';
import PropTypes from 'prop-types';

const MapAlabama = ({ element }) => {
  return <MapAlabamaContent element={element} />;
};

export const MapAlabamaPresent = ({ element }) => {
  return <MapAlabamaContent element={element} />;
};

export const MapAlabamaPreview = () => {
  return <MapAlabamaContent element={{ config: { data: [], fill: '#f9fafb', stroke: '#f9fafb' } }} present={false} />;
};

export const MapAlabamaContent = ({ element, present = true }) => {
  const { el, assignColor, renderLabels, handleMouseMove, handleMouseLeave, renderTooltip } = useMapElement(element);

  return (
    <svg
      style={{ width: element.width, height: element.height }}
      ref={el}
      width="100%"
      viewBox="0 0 278 441"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M55.5873 343.35L59.7565 343.079L62.5357 346.513L67.0919 348.138V370.506H68.4042L68.9446 374.378L65.4704 382.207L72.4188 390.029L73.4998 393.174L78.4409 397.126L83.2284 399.64L84.0002 405.203L80.0623 413.543L81.2211 418.381L84.0002 420.262L81.2211 422.77L78.6732 427.782L74.504 427.871L74.4262 431.271L71.647 431.092L69.4073 433.864L71.2611 435.652L64.2349 437.797L50.9543 439.764L39.6043 439.585L42.3067 436.725L45.0869 438.602L48.6379 438.424L54.97 436.814L56.6682 434.669L51.418 429.84L49.8734 427.603L44.2373 423.128L42.8472 417.216L44.701 411.212L43.0795 401.884L41.3035 400.178L36.6706 399.012L37.2111 396.677L35.4351 392.545L38.2152 387.422L41.6894 385.984L38.3698 381.487L43.0795 375.908L39.9912 372.667L41.844 364.648L39.2962 362.035L41.9208 356.804L39.6043 355.45L41.4581 352.652L43.4654 353.374L46.09 351.66L49.1015 351.298L49.4107 348.5L51.3402 344.977L55.5873 343.35Z"
        stroke={element.config.stroke}
        data-name="Baldwin"
        fill={assignColor('Baldwin')}
        data-x="55"
        data-y="343"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Baldwin')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M63.0762 280.499L63.154 290.961L66.7059 291.416L66.7827 295.415L75.9709 295.142L74.6585 296.505L74.8121 307.129L70.8752 307.22L71.0288 320.096L66.7827 323.267L70.7974 326.618L70.4115 330.872L67.0141 333.405L64.7754 331.777L60.3738 333.767L58.7524 336.21L58.8301 339.284L54.1972 340.278L55.5873 343.35L51.3402 344.977L49.4107 348.5L49.1015 351.298L46.09 351.66L43.4654 353.374L41.4581 352.652L42.6158 349.854L39.5275 345.7L44.5464 341.001L45.9365 337.566L43.1563 332.953L42.7704 329.967L44.701 325.35L41.6127 322.362L35.1269 319.643L31.3436 315.837L30.4172 311.03L30.494 307.039L29.3362 301.411L26.6338 302.228L25.2438 300.957L23.4678 296.233L26.2479 292.325L27.3289 288.506L30.7253 286.687L28.1775 284.139L31.6517 280.499L37.8293 280.681L63.0762 280.499Z"
        stroke={element.config.stroke}
        data-name="Clarke"
        fill={assignColor('Clarke')}
        data-x="63"
        data-y="280"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Clarke')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M121.834 295.052L121.91 302.138L114.498 305.405L110.946 305.315L110.329 309.035L104.229 312.844L103.998 316.38L102.608 318.103L101.759 323.358L98.67 328.518L96.8172 329.243L88.0928 338.56L86.7805 341.544L83.6922 343.441L81.6838 346.784L76.8973 346.873L72.4189 349.402L67.0919 348.138L62.5358 346.513L59.7566 343.079L55.5874 343.35L54.1973 340.278L58.8302 339.284L58.7524 336.21L60.3739 333.767L64.7755 331.777L67.0142 333.405L70.4116 330.872L70.7975 326.618L66.7828 323.267L71.0288 320.096L70.8753 307.22L74.8122 307.129L74.6586 296.505L75.9709 295.142L97.0485 295.052L98.1295 295.325L121.834 295.052Z"
        stroke={element.config.stroke}
        data-name="Monroe"
        fill={assignColor('Monroe')}
        data-x="121"
        data-y="295"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Monroe')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M147.235 117.393H149.937L151.328 121.386V127.511L149.32 130.849L149.242 136.225L151.945 137.708V139.745L148.548 140.301L145.151 145.022H139.823L136.426 149.742L133.801 149.556L131.716 154.273L127.779 154.828V157.508L123.763 157.415L120.367 162.497L117.046 163.42L116.043 165.452L112.568 165.359H109.557L109.634 162.681L104.847 161.295L100.832 158.524L99.4427 155.105L96.7403 154.365V151.592L92.7257 147.428L88.71 145.948L89.0191 142.893H91.3356L94.038 140.764L96.1999 138.542L100.291 136.78L98.8245 134.649L100.832 131.406L103.457 130.015L107.55 130.107V127.418H110.174L111.565 124.82V120.737L114.189 115.35H116.892L118.282 112.748L123.61 110.146L133.26 110.332L141.83 116.465L147.235 117.393Z"
        stroke={element.config.stroke}
        data-name="Jefferson"
        fill={assignColor('Jefferson')}
        data-x="147"
        data-y="117"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Jefferson')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M94.0377 140.764L91.3353 142.893H89.0189L88.7097 145.948L92.7254 147.429L96.7401 151.592V154.365L99.4425 155.105L100.832 158.524L104.847 161.295L109.634 162.682L109.557 165.359L106.622 167.666L103.071 166.374L99.2879 170.712V176.061L92.9568 175.876L90.6403 179.472L90.0998 187.486L82.0704 187.67L59.525 187.486L59.8331 186.473L50.4136 186.565L50.0277 173.941L49.951 148.909L49.7964 139.652L57.2853 140.116L63.2305 139.931L63.1537 134.557L65.8561 134.464L65.9329 131.777L81.9159 132.425L86.0074 132.518L90.0998 133.816V140.672L94.0377 140.764Z"
        stroke={element.config.stroke}
        data-name="Tuscaloosa"
        fill={assignColor('Tuscaloosa')}
        data-x="94"
        data-y="140"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Tuscaloosa')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M113.263 213.041L113.417 219.096L121.061 219.005L122.374 228.629L121.988 230.552L126.234 239.615L126.62 242.816L128.86 245.925L128.628 248.666L128.087 251.773L125.153 254.879L127.47 257.891L121.756 259.17L121.91 275.308L100.678 275.399L100.138 271.755L96.6626 270.569L95.119 266.741L92.6479 266.011L89.6364 261.45L86.1622 260.903L80.7574 255.152L78.2096 255.518L78.1328 251.59L81.9929 251.499L81.9161 235.496L105.696 235.13L108.708 228.904L108.322 227.346L111.41 225.056L111.101 220.839L113.263 213.041Z"
        stroke={element.config.stroke}
        data-name="Dallas"
        fill={assignColor('Dallas')}
        data-x="113"
        data-y="213"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Dallas')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M36.6705 399.012L32.579 402.332L32.8103 405.472L30.5706 408.971L30.7252 412.288L29.3361 414.439L29.722 418.023L28.7956 427.245L27.3288 430.108L22.5413 431.539L20.9966 427.692L14.82 424.47L9.72437 423.844L6.63607 425.276L5.78647 396.946L4.16504 359.961L11.9631 359.87V357.254H35.7441L38.2919 354.548L39.6042 355.45L41.9207 356.803L39.2961 362.035L41.8439 364.648L39.9911 372.667L43.0794 375.908L38.3697 381.487L41.6893 385.984L38.2151 387.422L35.4349 392.545L37.2109 396.677L36.6705 399.012Z"
        stroke={element.config.stroke}
        data-name="Mobile"
        fill={assignColor('Mobile')}
        data-x="36"
        data-y="399"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Mobile')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M137.661 322.814L137.739 330.781H139.746L140.286 336.752L137.815 339.464V352.833L135.036 353.374L132.256 352.202L132.951 346.693L81.6836 346.784L83.6919 343.441L86.7802 341.544L88.0925 338.56L96.817 329.243L98.6697 328.518L101.759 323.358L102.608 318.103L103.998 316.38L104.229 312.844L110.329 309.035L110.946 305.315L114.498 305.405L121.91 302.138L121.833 313.026L124.767 320.368L127.084 322.724L137.661 322.814Z"
        stroke={element.config.stroke}
        data-name="Conecuh"
        fill={assignColor('Conecuh')}
        data-x="137"
        data-y="322"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Conecuh')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M180.435 125.284L188.079 125.84L189.855 128.438L190.241 132.517L192.326 133.909L207.691 134.001L207.614 136.689L207.536 138.078L203.29 142.061H199.198L197.807 146.133L197.731 151.592L193.716 152.886L193.407 161.019L182.752 160.742L182.521 170.158L178.505 170.066L178.428 178.458L153.798 178.55L155.96 176.153L152.872 172.003L153.413 170.066L156.114 169.605V165.913L158.276 165.543L158.044 162.681L160.901 162.866L163.604 161.111L163.218 156.676L165.147 155.198L162.677 151.683L168.004 146.04L169.471 141.505L173.795 142.061L176.421 138.356L174.645 134.187L177.038 133.445L178.659 130.571L178.583 128.067L180.435 125.284Z"
        stroke={element.config.stroke}
        data-name="Talladega"
        fill={assignColor('Talladega')}
        data-x="180"
        data-y="125"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Talladega')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M223.982 14.845L220.662 17.8556L218.191 24.7182L215.567 25.9408L208.386 37.208L196.65 46.4909L194.797 48.8333L191.322 50.6133L187.462 51.082L185.454 52.0183L184.064 48.3646L180.281 44.4287L180.436 39.5534L166.616 39.4597L164.145 36.3634L164.221 26.7864L165.843 24.6245L165.148 20.0185L166.383 17.9493L164.84 13.7152L167.387 10.7037L166.692 8.53782L169.163 7.03106L167.85 2.60254L202.286 2.88474L222.284 3.16795L223.982 14.845Z"
        stroke={element.config.stroke}
        data-name="Jackson"
        fill={assignColor('Jackson')}
        data-x="223"
        data-y="14"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Jackson')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M229.464 46.4908L224.522 50.332L224.368 54.4524L219.89 61.2841L216.647 63.809L209.467 71.1922L203.907 72.7807L203.984 76.8892L183.678 76.7954L183.369 55.5762L187.462 51.0819L191.322 50.6132L194.797 48.8332L196.65 46.4908L208.386 37.208L215.566 25.9407L218.191 24.7182L220.662 17.8555L223.982 14.845L224.831 20.3943L229.464 46.4908Z"
        stroke={element.config.stroke}
        data-name="DeKalb"
        fill={assignColor('DeKalb')}
        data-x="229"
        data-y="46"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'DeKalb')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M48.8702 230.919L45.0869 231.835L40.8398 236.595L34.741 240.347L34.1228 245.467L39.6043 248.027L43.0795 251.317L19.9936 251.59L4.93799 251.499L7.25346 228.904L11.3459 188.867L24.2396 188.499L24.3174 192.18L22.9273 196.32L23.4678 199.538L25.3983 201.009L29.8767 206.982L29.5676 212.031L33.8136 215.977L33.1196 220.747L31.4204 223.131L33.5823 225.513L39.373 223.772L43.0795 221.664L45.1637 223.405L48.8702 230.919Z"
        stroke={element.config.stroke}
        data-name="Sumter"
        fill={assignColor('Sumter')}
        data-x="48"
        data-y="230"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Sumter')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M264.44 273.942V277.95L262.432 285.05L260.039 287.687L257.954 294.415L259.035 301.138L256.873 300.139L252.935 303.227L252.318 306.676L237.03 306.222L236.953 314.205L211.319 314.386L213.558 310.94L213.481 307.311L215.026 302.954L217.341 300.957L217.11 292.688L218.114 290.597L218.886 287.961L221.511 284.413L223.75 279.952L229.541 279.679V278.404L235.949 278.314L236.104 266.924L237.417 266.286L249.075 266.194L251.623 270.479L254.711 274.033L264.44 273.942Z"
        stroke={element.config.stroke}
        data-name="Barbour"
        fill={assignColor('Barbour')}
        data-x="264"
        data-y="273"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Barbour')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M121.91 275.308L125.694 275.217V283.138H121.679L121.834 295.052L98.1294 295.325L97.0485 295.052L75.9708 295.142L66.7827 295.416L66.7059 291.416L63.154 290.961L63.0762 280.499L66.5514 279.133L66.4736 267.562H74.3494L74.1948 256.43L78.2095 255.518L80.7574 255.152L86.1621 260.903L89.6363 261.45L92.6479 266.011L95.1189 266.741L96.6626 270.57L100.138 271.755L100.678 275.399L121.91 275.308Z"
        stroke={element.config.stroke}
        data-name="Wilcox"
        fill={assignColor('Wilcox')}
        data-x="121"
        data-y="275"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Wilcox')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M162.678 151.683L165.148 155.198L163.218 156.676L163.604 161.111L160.902 162.866L158.045 162.681L158.276 165.543L156.114 165.913V169.605L153.413 170.066L152.872 172.003L155.961 176.154L153.799 178.55L152.409 179.657L151.637 186.105H148.085L143.992 182.973L144.533 181.683L123.918 181.591L123.841 183.526L119.749 182.236L117.046 179.011V173.572L112.722 172.834L112.568 165.359L116.043 165.452L117.046 163.42L120.367 162.497L123.763 157.415L127.779 157.508V154.828L131.716 154.273L133.801 149.556L136.426 149.742L139.823 145.022H145.151L148.549 140.301L151.945 139.745V137.708L154.725 137.615L154.647 141.69H162.678V151.683Z"
        stroke={element.config.stroke}
        data-name="Shelby"
        fill={assignColor('Shelby')}
        data-x="162"
        data-y="151"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Shelby')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M51.9583 231.743H58.4441L58.3663 235.772L74.1947 235.68V251.682L78.1326 251.59L78.2094 255.518L74.1947 256.43L74.3492 267.562H66.4734L66.5512 279.133L63.076 280.499L37.8291 280.681L31.6515 280.499L28.4097 278.314V274.579L33.8912 272.302L34.2771 266.924L36.2845 265.282L36.9027 259.717L35.9754 253.691L39.1414 251.407L43.0793 251.317L39.6041 248.027L34.1226 245.467L34.7408 240.347L40.8397 236.595L45.0867 231.835L48.87 230.919L51.9583 231.743Z"
        stroke={element.config.stroke}
        data-name="Marengo"
        fill={assignColor('Marengo')}
        data-x="51"
        data-y="231"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Marengo')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M41.4578 352.652L39.604 355.45L38.2917 354.548L35.7439 357.254H11.9629V359.87L4.16487 359.961L2.62121 330.148L1.69482 307.13L30.4937 307.039L30.4169 311.031L31.3433 315.837L35.1266 319.643L41.6124 322.362L44.7007 325.35L42.7701 329.967L43.156 332.953L45.9362 337.566L44.5461 341.001L39.5272 345.7L42.6155 349.854L41.4578 352.652Z"
        stroke={element.config.stroke}
        data-name="Washington"
        fill={assignColor('Washington')}
        data-x="41"
        data-y="352"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Washington')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M117.51 108.659L118.282 112.748L116.892 115.35H114.189L111.565 120.737V124.82L110.175 127.418H107.55V130.107L103.458 130.015L100.832 131.406L98.8246 134.649L100.291 136.78L96.2 138.541L94.0381 140.764L90.1002 140.671V133.816L86.0077 132.517L81.9162 132.425L81.993 124.449L73.8859 124.077L73.5777 107.821L65.5474 107.356V103.45V95.2584L76.1256 95.8168L96.4313 96.0033L99.2105 96.9347L102.994 96.1898L106.237 99.5414L108.09 104.38L107.55 105.682L114.113 105.869V108.007L117.51 108.659Z"
        stroke={element.config.stroke}
        data-name="Walker"
        fill={assignColor('Walker')}
        data-x="117"
        data-y="108"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Walker')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M43.0794 251.317L39.1415 251.408L35.9755 253.691L36.9028 259.717L36.2846 265.282L34.2772 266.924L33.8913 272.302L28.4098 274.579V278.314L31.6516 280.499L28.1774 284.139L30.7253 286.687L27.3288 288.506L26.2479 292.325L23.4677 296.233L25.2437 300.957L26.6338 302.228L29.3362 301.411L30.4939 307.039L1.69504 307.13L1 288.779L4.93791 251.499L19.9935 251.59L43.0794 251.317Z"
        stroke={element.config.stroke}
        data-name="Choctaw"
        fill={assignColor('Choctaw')}
        data-x="43"
        data-y="251"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Choctaw')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M168.468 86.3127L166.152 91.0663L166.229 96.7483L163.295 101.124H166.692L164.994 103.357L165.148 106.148L158.816 112.005L147.313 113.957L147.235 117.393L141.83 116.465L133.26 110.332L123.61 110.146L118.282 112.748L117.51 108.659L119.903 107.728L120.907 103.357L123.146 103.264L128.396 99.6341L130.094 100.1L134.496 95.4449L138.897 87.8972L143.684 84.1677L148.78 78.6632L149.011 76.5163L152.177 71.7537L156.887 71.286L160.516 76.7027L168.468 86.3127Z"
        stroke={element.config.stroke}
        data-name="Blount"
        fill={assignColor('Blount')}
        data-x="168"
        data-y="86"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Blount')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M146.927 67.0809L155.033 67.2683L156.887 71.286L152.177 71.7537L149.011 76.5163L148.78 78.6632L143.684 84.1677L138.896 87.8972L134.496 95.4449L130.094 100.1L128.396 99.6341L123.146 103.264L120.907 103.357L119.903 107.728L117.51 108.659L114.112 108.008V105.869L107.55 105.682L108.09 104.38L106.237 99.5414L102.994 96.1898L106.005 96.2826L106.16 67.5485V66.2402L129.013 66.8007L146.927 67.0809Z"
        stroke={element.config.stroke}
        data-name="Cullman"
        fill={assignColor('Cullman')}
        data-x="146"
        data-y="67"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Cullman')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M186.844 110.239L186.766 113.585L188.079 117.58L180.59 122.592L180.435 125.284L178.583 128.067L178.659 130.571L177.038 133.445L174.645 134.187L176.421 138.356L173.795 142.061L169.471 141.505L168.004 146.04L162.677 151.683V141.69H154.647L154.725 137.615L151.945 137.708L149.242 136.225L149.32 130.849L151.327 127.511V121.386L149.937 117.393H147.235L147.313 113.957L158.816 112.005L165.147 106.148L164.994 103.357L166.692 101.124L169.471 97.0274L172.406 98.5172L176.266 96.469L178.892 99.4486L179.045 102.519L180.744 104.845L183.292 105.125L183.987 108.193L186.844 110.239Z"
        stroke={element.config.stroke}
        data-name="Saint Clair"
        fill={assignColor('Saint Clair')}
        data-x="186"
        data-y="110"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Saint Clair')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M190.164 241.353L192.557 248.85L194.41 249.215L195.955 252.778L198.117 254.604L192.943 254.787L191.94 256.887L192.095 274.944L192.248 282.593L177.038 282.683L168.545 282.865L168.468 274.944L160.516 275.035L160.361 257.344L153.952 252.047L155.111 249.397L153.413 248.209L156.037 244.736L156.578 242.541L160.13 242.085L161.056 240.529L165.302 240.072L171.402 233.757L178.119 239.431L182.752 241.535L188.311 242.267L190.164 241.353Z"
        stroke={element.config.stroke}
        data-name="Montgomery"
        fill={assignColor('Montgomery')}
        data-x="190"
        data-y="241"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Montgomery')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M59.5251 187.486L56.8227 191.076L58.135 192.457L55.5104 194.94L55.4327 197.239L51.4948 198.251L50.4916 202.663L51.5725 203.399L50.9543 209.186L53.4253 214.509L54.1204 219.831L52.4211 221.206L54.1971 224.048L56.359 223.314L57.9037 225.789L53.8112 226.43L53.889 228.354L51.9585 231.743L48.8702 230.919L45.1636 223.405L43.0795 221.664L39.3729 223.772L33.5822 225.513L31.4203 223.131L33.1195 220.747L33.8136 215.977L29.5675 212.031L29.8767 206.982L25.3983 201.009L23.4677 199.538L22.9272 196.32L24.3173 192.18L24.2395 188.499L26.0155 184.815L28.4098 184.171L33.8136 184.723L35.0491 182.513L39.9134 180.67L41.458 178.274L50.0279 173.941L50.4138 186.565L59.8333 186.473L59.5251 187.486Z"
        stroke={element.config.stroke}
        data-name="Greene"
        fill={assignColor('Greene')}
        data-x="59"
        data-y="187"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Greene')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M113.186 203.122L113.263 213.041L111.101 220.839L111.41 225.056L108.322 227.346L108.708 228.904L105.696 235.13L81.9162 235.496L81.993 251.499L78.1329 251.59L74.1949 251.682V235.68L74.1182 219.739H78.0551L78.2096 203.674L82.1475 203.582V199.722L90.0233 199.538V203.582L97.4355 203.306L113.186 203.122Z"
        stroke={element.config.stroke}
        data-name="Perry"
        fill={assignColor('Perry')}
        data-x="113"
        data-y="203"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Perry')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M238.265 98.8892L245.523 143.541L241.817 142.616L219.426 142.338L209.929 142.061L208.695 144.838L201.977 144.097L203.29 142.061L207.536 138.078L207.614 136.689L211.628 136.78L211.783 132.61L215.798 130.107L218.5 130.2L219.812 128.252V116.557L223.827 113.957L223.905 109.867L219.89 109.773V107.077L222.591 105.776L227.996 105.868L228.151 100.937L230.853 99.5413L238.265 98.8892Z"
        stroke={element.config.stroke}
        data-name="Cleburne"
        fill={assignColor('Cleburne')}
        data-x="238"
        data-y="98"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Cleburne')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M176.884 330.51L176.961 352.924L177.193 369.966L177.424 370.775L138.742 370.596L137.816 370.236V352.833V339.464L140.287 336.752L139.746 330.781H137.739L137.661 322.814H153.335L160.978 322.633L161.056 329.514L163.835 326.346L165.766 325.894L168.777 322.452H170.244L170.476 329.062L171.633 330.419L176.884 330.51Z"
        stroke={element.config.stroke}
        data-name="Covington"
        fill={assignColor('Covington')}
        data-x="176"
        data-y="330"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Covington')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M41.6124 139.745L49.7964 139.652L49.9509 148.909L50.0277 173.941L41.4579 178.274L39.9132 180.67L35.0489 182.513L33.8134 184.723L28.4096 184.171L26.0154 184.815L24.2394 188.499L11.3457 188.867L16.2868 138.819L41.6124 139.745Z"
        stroke={element.config.stroke}
        data-name="Pickens"
        fill={assignColor('Pickens')}
        data-x="41"
        data-y="139"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Pickens')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M98.3616 1.84861L98.1293 19.1718L93.266 23.1207L94.5783 24.5307L92.5709 25.1888L87.6289 20.3944L81.7614 20.6766L77.0517 19.2655L74.2715 17.5733L69.3304 18.7959L68.404 20.2069L59.9877 23.3091L58.2117 25.4701L55.1234 26.7863L51.4947 26.6916L43.6199 20.2069L42.3066 16.1623L39.5274 12.8686L34.2772 10.6089L29.8766 11.645L25.6295 8.72623L21.8462 1L67.5544 1.37694L98.3616 1.84861Z"
        stroke={element.config.stroke}
        data-name="Lauderdale"
        fill={assignColor('Lauderdale')}
        data-x="98"
        data-y="1"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Lauderdale')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M187.462 51.0818L183.369 55.5762L183.678 76.7954V78.1965L178.892 78.1027L176.421 79.0361L168.468 86.3126L160.515 76.7027L156.887 71.2859L155.033 67.2682L146.927 67.0808L147.004 60.7227L149.397 44.6161L150.864 48.7394L153.258 50.4257L158.971 50.8006L161.673 47.5219L167.85 45.1785L168.314 39.9283L166.615 39.4596L180.435 39.5533L180.281 44.4286L184.064 48.3645L185.454 52.0182L187.462 51.0818Z"
        stroke={element.config.stroke}
        data-name="Marshall"
        fill={assignColor('Marshall')}
        data-x="187"
        data-y="51"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Marshall')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M151.637 186.104L152.177 194.848L154.57 199.446L157.35 201.468L156.423 205.236L159.666 207.532L162.446 210.654L159.975 211.205V215.06L136.735 215.152L136.812 219.188L128.01 219.28L121.061 219.005L113.417 219.097L113.263 213.041L113.186 203.123H124.227L124.15 183.526H123.841L123.918 181.591L144.533 181.683L143.992 182.973L148.085 186.104H151.637Z"
        stroke={element.config.stroke}
        data-name="Chilton"
        fill={assignColor('Chilton')}
        data-x="151"
        data-y="186"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Chilton')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M229.464 46.4908L234.405 75.0225L238.265 98.8892L230.853 99.5414L228.151 100.937L228.229 99.6341L212.014 98.4245L212.169 96.469L206.3 83.701L204.139 85.1928L203.984 76.8892L203.907 72.7808L209.467 71.1922L216.647 63.8091L219.89 61.2842L224.368 54.4524L224.522 50.332L229.464 46.4908Z"
        stroke={element.config.stroke}
        data-name="Cherokee"
        fill={assignColor('Cherokee')}
        data-x="229"
        data-y="46"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Cherokee')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M228.151 100.937L227.997 105.869L222.592 105.776L219.89 107.077V109.774L223.905 109.867L223.827 113.957L219.813 116.557V128.253L218.5 130.2L215.798 130.107L211.783 132.61L211.629 136.78L207.614 136.689L207.691 134.001L192.326 133.909L190.241 132.518L189.855 128.438L188.079 125.84L180.436 125.284L180.59 122.592L188.079 117.58L186.767 113.585L186.844 110.239L192.248 108.1L194.257 103.45L199.584 104.194L200.974 100.1L206.455 100.472L211.86 101.496L212.015 98.4246L228.229 99.6342L228.151 100.937Z"
        stroke={element.config.stroke}
        data-name="Calhoun"
        fill={assignColor('Calhoun')}
        data-x="228"
        data-y="100"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Calhoun')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M223.286 178.182V213.041L221.974 214.418L216.569 214.509L215.334 215.886V225.239L214.022 226.522L207.381 226.613L207.536 234.49L200.664 234.581L199.969 224.323L200.587 220.38L198.657 217.537L201.05 210.746L191.322 210.654L191.168 179.748L193.793 178.366L207.227 178.458L218.655 178.273L223.286 178.182Z"
        stroke={element.config.stroke}
        data-name="Tallapoosa"
        fill={assignColor('Tallapoosa')}
        data-x="223"
        data-y="178"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Tallapoosa')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M167.85 2.60255L169.163 7.03107L166.692 8.53782L167.387 10.7037L164.839 13.7152L166.383 17.9493L165.148 20.0185L165.843 24.6245L164.221 26.7864L164.144 36.3634L166.615 39.4597L168.314 39.9284L167.85 45.1786L161.673 47.522L158.971 50.8008L153.258 50.4258L150.864 48.7396L149.397 44.6162L147.235 41.1469L144.533 41.5229L141.985 44.2412L138.974 40.772L136.735 40.6783L133.415 43.7726L130.867 44.0538L131.408 2.50781L159.511 2.69628L167.85 2.60255Z"
        stroke={element.config.stroke}
        data-name="Madison"
        fill={assignColor('Madison')}
        data-x="167"
        data-y="2"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Madison')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M81.7615 20.6765L82.3787 23.5903L79.7541 31.1061L80.14 34.2981L77.9004 34.6741L74.9666 39.5533L73.7311 43.3038L73.8089 42.4601L41.1489 41.804L26.6338 41.1468L28.8725 22.275L29.8767 11.645L34.2773 10.6089L39.5275 12.8685L42.3066 16.1622L43.6199 20.2068L51.4947 26.6916L55.1235 26.7863L58.2118 25.47L59.9878 23.3091L68.4041 20.2068L69.3305 18.7958L74.2716 17.5733L77.0517 19.2655L81.7615 20.6765Z"
        stroke={element.config.stroke}
        data-name="Colbert"
        fill={assignColor('Colbert')}
        data-x="81"
        data-y="20"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Colbert')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M137.816 352.833V370.236L138.742 370.596L132.256 370.236L98.2071 370.145L68.4041 370.506H67.0918V348.138L72.4188 349.402L76.8972 346.873L81.6837 346.784L132.951 346.693L132.256 352.201L135.036 353.374L137.816 352.833Z"
        stroke={element.config.stroke}
        data-name="Escambia"
        fill={assignColor('Escambia')}
        data-x="137"
        data-y="352"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Escambia')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M264.44 273.942L254.711 274.033L251.623 270.479L249.075 266.194L237.417 266.286H236.103L235.641 258.256L235.563 242.267L243.593 242.175L243.284 236.961L264.517 236.503L264.44 233.025H268.918L269.613 238.425L271.697 240.803L270.462 242.633L269.073 250.312L273.242 252.138L277.102 255.335L274.554 259.535L270.616 260.265L270.771 262.089L267.837 263.184L264.131 267.653L265.058 271.573L264.44 273.942Z"
        stroke={element.config.stroke}
        data-name="Russell"
        fill={assignColor('Russell')}
        data-x="264"
        data-y="273"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Russell')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M235.641 258.256L236.104 266.286H237.417L236.104 266.924L235.949 278.314L229.541 278.404V279.679L223.75 279.952L221.511 284.412L218.886 287.961L218.114 290.597L208 290.506L208.076 282.683L200.819 282.593L200.047 275.308L198.734 274.67L192.095 274.944L191.94 256.887L192.943 254.787L198.117 254.604L201.822 253.874L201.436 257.161L202.826 258.439L235.641 258.256Z"
        stroke={element.config.stroke}
        data-name="Bullock"
        fill={assignColor('Bullock')}
        data-x="235"
        data-y="258"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Bullock')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M218.114 290.597L217.11 292.688L217.341 300.957L215.026 302.954L213.481 307.311L213.558 310.94L211.319 314.386H208.154L193.176 314.205L180.59 314.386L177.964 314.477L180.359 310.033L180.435 298.686H176.498L178.274 286.323L177.038 282.683L192.248 282.593L192.095 274.944L198.734 274.67L200.047 275.308L200.819 282.593L208.077 282.683L208 290.506L218.114 290.597Z"
        stroke={element.config.stroke}
        data-name="Pike"
        fill={assignColor('Pike')}
        data-x="218"
        data-y="290"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Pike')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M268.918 233.025H264.44L264.517 236.503L243.284 236.961L243.593 242.175L235.563 242.267L235.255 234.307H231.317L218.036 227.805L215.334 225.239V215.886L216.57 214.509L221.974 214.418L223.287 213.041L246.836 212.857L247.068 211.573L258.34 211.481L259.653 211.756L260.347 216.619L262.046 219.555L263.05 225.422L268.918 233.025Z"
        stroke={element.config.stroke}
        data-name="Lee"
        fill={assignColor('Lee')}
        data-x="268"
        data-y="233"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Lee')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M65.547 95.2585V103.45H57.8257L41.2255 102.985V93.4885L38.4463 93.3957L38.5231 90.6006L21.6147 90.0412L24.0858 65.5851L42.0751 66.333L65.6247 66.8944L65.547 95.2585Z"
        stroke={element.config.stroke}
        data-name="Marion"
        fill={assignColor('Marion')}
        data-x="65"
        data-y="95"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Marion')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M203.984 76.8891L204.139 85.1927L206.301 83.7009L212.169 96.469L212.015 98.4245L211.86 101.496L206.455 100.472L200.974 100.1L199.584 104.194L194.257 103.45L192.248 108.1L186.845 110.239L183.988 108.193L183.293 105.125L180.745 104.845L179.046 102.519L178.892 99.4486L176.266 96.469L172.406 98.5172L169.472 97.0274L166.692 101.124H163.295L166.229 96.7482L166.152 91.0662L168.468 86.3126L176.421 79.0361L178.892 78.1027L183.679 78.1965V76.7954L203.984 76.8891Z"
        stroke={element.config.stroke}
        data-name="Etowah"
        fill={assignColor('Etowah')}
        data-x="203"
        data-y="76"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Etowah')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M112.568 165.359L112.722 172.834L117.046 173.572V179.011L119.749 182.236L123.841 183.526H124.15L124.227 203.122H113.186L97.4355 203.306L90.0234 203.582V199.538L82.1476 199.722L82.0708 187.67L90.1002 187.486L90.6407 179.472L92.9571 175.876L99.2883 176.061V170.712L103.072 166.374L106.623 167.666L109.557 165.359H112.568Z"
        stroke={element.config.stroke}
        data-name="Bibb"
        fill={assignColor('Bibb')}
        data-x="112"
        data-y="165"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Bibb')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M262.046 342.356L260.039 345.519L261.274 349.493L260.579 352.743L265.984 360.322L268.146 366.001L268.763 370.055L239.887 370.236L231.394 370.506L231.548 352.291L213.945 352.652L215.412 351.298L216.801 347.145L218.5 345.429H222.051L230.005 347.868L231.625 344.345L236.876 344.434V341.815L255.251 342.447L262.046 342.356Z"
        stroke={element.config.stroke}
        data-name="Houston"
        fill={assignColor('Houston')}
        data-x="262"
        data-y="342"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Houston')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M153.413 248.209L155.111 249.397L153.952 252.047L160.361 257.344L160.516 275.035L160.67 282.957L157.273 282.865L125.694 283.138V275.217L121.91 275.308L121.756 259.17L127.47 257.891L125.153 254.879L128.087 251.773L128.627 248.666L129.786 251.407L132.179 248.575L131.562 243.822L136.272 242.907L136.812 246.564L139.128 247.204L141.985 242.816L144.225 245.285L149.706 246.199L150.71 248.666L153.413 248.209Z"
        stroke={element.config.stroke}
        data-name="Lowndes"
        fill={assignColor('Lowndes')}
        data-x="153"
        data-y="248"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Lowndes')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M98.3618 1.84863L123.61 2.60251L131.408 2.50778L130.867 44.0537L127.315 43.585L121.834 41.3354L112.105 34.5804L110.793 34.7679L106.546 31.3884L104.229 28.0069L96.8949 23.9673L94.5784 24.5307L93.2661 23.1207L98.1294 19.1718L98.3618 1.84863Z"
        stroke={element.config.stroke}
        data-name="Limestone"
        fill={assignColor('Limestone')}
        data-x="98"
        data-y="1"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Limestone')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M177.038 282.683L178.274 286.323L176.498 298.686H180.436L180.359 310.033L177.965 314.477L180.59 314.386L180.745 321.637L176.884 322.362V330.51L171.633 330.419L170.476 329.062L170.244 322.452H168.777L165.766 325.894L163.835 326.346L161.056 329.514L160.978 322.633L153.335 322.814V311.031L157.273 310.94L157.504 305.315L157.273 282.865L160.67 282.957L160.516 275.035L168.468 274.944L168.545 282.865L177.038 282.683Z"
        stroke={element.config.stroke}
        data-name="Crenshaw"
        fill={assignColor('Crenshaw')}
        data-x="177"
        data-y="282"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Crenshaw')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M219.427 142.338L218.655 169.697V178.274L207.227 178.458L193.793 178.366L191.168 179.748V178.458H178.428L178.505 170.066L182.521 170.158L182.752 160.742L193.407 161.019L193.716 152.886L197.731 151.592L197.808 146.133L199.198 142.061H203.29L201.977 144.097L208.695 144.838L209.929 142.061L219.427 142.338Z"
        stroke={element.config.stroke}
        data-name="Clay"
        fill={assignColor('Clay')}
        data-x="219"
        data-y="142"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Clay')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M59.5252 187.486L82.0707 187.67L82.1475 199.722V203.582L78.2096 203.674L78.055 219.739H74.1181L74.1949 235.68L58.3665 235.772L58.4443 231.743H51.9586L53.8891 228.354L53.8113 226.43L57.9038 225.789L56.3592 223.314L54.1973 224.048L52.4213 221.206L54.1205 219.83L53.4254 214.509L50.9544 209.185L51.5727 203.399L50.4917 202.663L51.4949 198.251L55.4328 197.239L55.5106 194.94L58.1352 192.457L56.8229 191.075L59.5252 187.486Z"
        stroke={element.config.stroke}
        data-name="Hale"
        fill={assignColor('Hale')}
        data-x="59"
        data-y="187"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Hale')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M215.334 225.239L218.037 227.805L231.317 234.307H235.255L235.563 242.267L235.641 258.256L202.826 258.439L201.436 257.161L201.822 253.874L198.117 254.605L195.955 252.778L194.41 249.215L192.557 248.85L190.164 241.353L194.642 238.517L200.742 238.609L200.664 234.581L207.536 234.49L207.382 226.613L214.022 226.522L215.334 225.239Z"
        stroke={element.config.stroke}
        data-name="Macon"
        fill={assignColor('Macon')}
        data-x="215"
        data-y="225"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Macon')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M94.5782 24.5308L96.8947 23.9673L104.229 28.007L106.546 31.3884L106.16 66.2402V67.5486H93.4973L73.731 67.0809V43.3039L74.9665 39.5534L77.9002 34.6742L80.1399 34.2982L79.754 31.1062L82.3786 23.5904L81.7613 20.6766L87.6288 20.3944L92.5709 25.1889L94.5782 24.5308Z"
        stroke={element.config.stroke}
        data-name="Lawrence"
        fill={assignColor('Lawrence')}
        data-x="94"
        data-y="24"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Lawrence')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M130.867 44.0537L133.415 43.7725L136.735 40.6783L138.974 40.772L141.985 44.2412L144.533 41.5229L147.235 41.1469L149.397 44.6162L147.004 60.7228L146.927 67.0809L129.013 66.8007L106.16 66.2402L106.546 31.3884L110.793 34.7679L112.105 34.5804L121.833 41.3354L127.315 43.5851L130.867 44.0537Z"
        stroke={element.config.stroke}
        data-name="Morgan"
        fill={assignColor('Morgan')}
        data-x="130"
        data-y="44"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Morgan')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M65.5471 103.45V107.356L73.5774 107.821L73.8856 124.077L81.9927 124.449L81.9159 132.425L65.933 131.777L65.8562 134.464L63.1538 134.557L63.2306 139.931L57.2853 140.116L49.7964 139.652L41.6125 139.745V128.809L41.2256 102.985L57.8258 103.45H65.5471Z"
        stroke={element.config.stroke}
        data-name="Fayette"
        fill={assignColor('Fayette')}
        data-x="65"
        data-y="103"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Fayette')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M157.273 282.865L157.504 305.315L157.273 310.94L153.335 311.031V322.814H137.661L127.084 322.724L124.767 320.368L121.834 313.026L121.911 302.138L121.834 295.052L121.679 283.138H125.694L157.273 282.865Z"
        stroke={element.config.stroke}
        data-name="Butler"
        fill={assignColor('Butler')}
        data-x="157"
        data-y="282"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Butler')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M159.975 215.06L160.129 242.085L156.577 242.542L156.037 244.736L153.412 248.21L150.71 248.666L149.706 246.199L144.224 245.285L141.985 242.816L139.128 247.204L136.812 246.564L136.272 242.907L131.562 243.822L132.179 248.576L129.786 251.408L128.627 248.666L128.86 245.925L126.62 242.816L126.234 239.615L121.988 230.552L122.374 228.629L121.061 219.005L128.01 219.28L136.812 219.188L136.734 215.152L159.975 215.06Z"
        stroke={element.config.stroke}
        data-name="Autauga"
        fill={assignColor('Autauga')}
        data-x="159"
        data-y="215"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Autauga')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M200.664 234.581L200.742 238.609L194.642 238.517L190.164 241.353L188.311 242.267L182.752 241.535L178.119 239.431L171.402 233.757L165.302 240.072L161.056 240.529L160.13 242.085L159.975 215.06V211.205L162.446 210.654H191.322L201.05 210.746L198.657 217.537L200.588 220.38L199.969 224.323L200.664 234.581Z"
        stroke={element.config.stroke}
        data-name="Elmore"
        fill={assignColor('Elmore')}
        data-x="200"
        data-y="234"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Elmore')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M191.168 179.748L191.322 210.654H162.446L159.666 207.532L156.423 205.236L157.35 201.468L154.57 199.446L152.177 194.848L151.637 186.104L152.409 179.657L153.799 178.55L178.428 178.458H191.168V179.748Z"
        stroke={element.config.stroke}
        data-name="Coosa"
        fill={assignColor('Coosa')}
        data-x="191"
        data-y="179"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Coosa')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M73.7311 67.0808L65.6249 66.8943L42.0753 66.3329L24.0859 65.585L26.6338 41.1469L41.1489 41.804L73.8089 42.4602L73.7311 43.3038V67.0808Z"
        stroke={element.config.stroke}
        data-name="Franklin"
        fill={assignColor('Franklin')}
        data-x="73"
        data-y="67"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Franklin')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M258.34 211.481L247.068 211.573L246.836 212.857L223.287 213.041V178.182L231.625 178.089L251.082 178.182L254.403 199.078L256.024 205.42L259.421 208.451L258.34 211.481Z"
        stroke={element.config.stroke}
        data-name="Chambers"
        fill={assignColor('Chambers')}
        data-x="258"
        data-y="211"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Chambers')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M41.2258 102.985L41.6128 128.809V139.745L16.2871 138.819L19.8391 104.938L21.6151 90.0411L38.5235 90.6006L38.4467 93.3957L41.2258 93.4884V102.985Z"
        stroke={element.config.stroke}
        data-name="Lamar"
        fill={assignColor('Lamar')}
        data-x="41"
        data-y="102"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Lamar')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M262.047 342.356L255.252 342.447L236.876 341.815L236.953 314.205L237.03 306.222L252.318 306.676L252.935 303.226L256.873 300.139L259.035 301.138L259.344 307.402L263.899 313.57L264.363 318.466L265.599 321.093L263.668 326.256V330.781L261.583 337.746L262.047 342.356Z"
        stroke={element.config.stroke}
        data-name="Henry"
        fill={assignColor('Henry')}
        data-x="262"
        data-y="342"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Henry')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M208 352.563H195.8L176.961 352.924L176.883 330.51V322.362L180.744 321.637L180.59 314.386L193.175 314.205L208.154 314.386V337.023L208 352.563Z"
        stroke={element.config.stroke}
        data-name="Coffee"
        fill={assignColor('Coffee')}
        data-x="208"
        data-y="."
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Coffee')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M73.7313 67.0808L93.4976 67.5484H106.16L106.005 96.2825L102.994 96.1897L99.2105 96.9347L96.4313 96.0033L76.1256 95.8168L65.5474 95.2584L65.6251 66.8943L73.7313 67.0808Z"
        stroke={element.config.stroke}
        data-name="Winston"
        fill={assignColor('Winston')}
        data-x="73"
        data-y="67"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Winston')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M245.523 143.541L248.689 163.974L251.082 178.182L231.625 178.089L223.287 178.182L218.655 178.274V169.697L219.427 142.338L241.818 142.616L245.523 143.541Z"
        stroke={element.config.stroke}
        data-name="Randolph"
        fill={assignColor('Randolph')}
        data-x="245"
        data-y="143"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Randolph')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M236.953 314.205L236.877 341.815V344.434L231.625 344.345L230.005 347.868L222.051 345.429H218.5L216.801 347.145L215.412 351.298L213.945 352.652L208 352.563L208.155 337.023V314.386H211.32L236.953 314.205Z"
        stroke={element.config.stroke}
        data-name="Dale"
        fill={assignColor('Dale')}
        data-x="236"
        data-y="314"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Dale')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M231.394 370.506L206.841 370.685L177.424 370.775L177.193 369.965L176.961 352.923L195.8 352.562H208L213.945 352.652L231.549 352.291L231.394 370.506Z"
        stroke={element.config.stroke}
        data-name="Geneva"
        fill={assignColor('Geneva')}
        data-x="231"
        data-y="370"
        className="hover-brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Geneva')}
        onMouseLeave={handleMouseLeave}
      />
      {present && renderTooltip()}
      {renderLabels()}
    </svg>
  );
};

MapAlabama.propTypes = ElementPropTypes;
MapAlabamaPresent.propTypes = {
  element: PropTypes.object.isRequired,
};
MapAlabamaContent.propTypes = {
  element: PropTypes.object.isRequired,
  present: PropTypes.bool,
};

export default MapAlabama;
