import { ElementPropTypes } from '@/lib/prop-types.js';
import useMapElement from '@/lib/design/use-map-element.jsx';
import PropTypes from 'prop-types';

const MapWisconsin = ({ element }) => {
  return <MapWisconsinContent element={element} />;
};

export const MapWisconsinPresent = ({ element }) => {
  return <MapWisconsinContent element={element} />;
};

export const MapWisconsinPreview = () => {
  return <MapWisconsinContent element={{ config: { data: [], fill: '#f9fafb', stroke: '#f9fafb' } }} present={false} />;
};

export const MapWisconsinContent = ({ element, present = true }) => {
  const { el, assignColor, renderLabels, handleMouseMove, handleMouseLeave, renderTooltip } = useMapElement(element);

  return (
    <svg ref={el} width="100%" viewBox="0 0 400 428" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M164.549 1.58887L163.692 7.48687L160.464 9.51587L160.529 4.97387L161.847 2.07187L164.549 1.58887ZM156.18 15.0199L153.676 16.4669L148.669 18.2039L147.614 17.2389L148.8 14.7299L155.719 12.1239L157.301 13.1859L156.18 15.0199ZM142.343 12.8959L143.792 13.1859L145.374 16.8529L142.277 17.5279L140.366 13.9579L142.343 12.8959ZM146.494 28.4169L143.463 29.9559L140.234 32.9389L138.455 30.0529L142.672 28.2239L143.661 26.4909L146.428 24.9499L149.986 21.1919L153.215 23.8909L146.362 26.5869L146.494 28.4169ZM141.025 25.3359L141.618 21.9639L143.199 22.4449L141.025 25.3359ZM154.665 49.2619L154.863 56.7339L154.665 81.6599H162.836L162.968 89.7519L171.007 90.0369V106.373L146.428 106.278H129.757L129.823 89.8469L130.152 56.5429L129.955 48.9739L131.734 48.4949L136.346 45.6169L138.653 44.9459L141.025 42.9309L143.792 42.8349L145.308 41.6829L153.018 48.2069L154.665 49.2619Z"
        stroke={element.config.stroke}
        data-name="Ashland"
        fill={assignColor('Ashland')}
        data-x="164"
        data-y="1"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Ashland')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M338.443 202.034L338.575 199.425H330.47L326.582 199.053L326.517 196.35L314.787 196.163L314.919 187.859L310.175 187.673L310.504 180.103L302.465 179.823L302.663 163.526L294.624 163.338L294.756 159.209L294.822 130.875L311.097 131.253L318.939 131.725L319.005 125.209L323.024 123.792L323.42 126.154L325.528 127.382L330.931 127.854L333.106 131.064L335.017 131.819L337.06 135.31L334.028 137.384L337.125 141.53L336.467 145.579L334.49 145.391L335.61 150.001L336.928 152.164L335.215 154.513L332.052 157.425L332.513 160.523L330.273 164.464L332.249 165.871L336.005 165.496L338.641 165.964L342.397 162.4L345.099 163.901L345.824 166.621L342.99 171.119L341.804 173.834L339.893 182.16L344.242 186.178L345.23 188.513L348.064 189.166L348.459 191.313L347.471 193.739L346.944 200.264L345.23 201.475L343.056 201.195L338.443 202.034Z"
        stroke={element.config.stroke}
        data-name="Marinette"
        fill={assignColor('Marinette')}
        data-x="338"
        data-y="202"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Marinette')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M129.427 9.99878L129.23 12.7998L126.989 12.7028L125.935 10.7718L129.427 9.99878ZM129.955 48.9738L130.152 56.5428L129.823 89.8468H121.784L96.8098 89.5618L88.7708 89.6568L88.6388 73.0778L88.5068 39.8578L88.7708 32.6498L96.5458 30.2448L99.3138 29.6678L102.279 26.8758L108.012 24.5648L109.593 22.3488L112.559 23.9868L116.842 23.0238L120.4 20.9028L122.377 18.3958L125.013 17.0458L126.594 14.7298L130.152 15.6948L133.711 12.6068L135.687 13.2828L136.083 15.5018L137.994 15.1158L139.18 17.7208L141.223 19.2638L138.982 23.2158L137.928 26.2988L135.951 29.0898L134.501 29.4748L132.327 33.1308L134.501 37.7448L133.645 39.1858L130.548 41.3948L130.152 44.8498L128.11 47.2478L129.955 48.9738Z"
        stroke={element.config.stroke}
        data-name="Bayfield"
        fill={assignColor('Bayfield')}
        data-x="129"
        data-y="9"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Bayfield')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M393.399 161.368L394.19 160.523L397.682 160.336L399 161.743L397.419 164.464L396.825 167.652L392.147 167.277L391.356 163.057L393.399 161.368ZM387.732 171.119L389.775 171.4L389.973 176.268L389.445 178.514L386.546 176.736L385.36 182.534L383.054 185.244L385.228 188.326L384.306 191.126L380.484 192.246L379.429 197.282L377.914 198.121L376.135 201.475L377.057 205.478L374.29 207.525L374.883 210.595L371.061 212.826L369.809 216.077L367.832 217.749L362.956 213.29L363.022 209.2L361.572 207.618L364.735 199.519L368.491 193.645L371.193 190.287L371.325 187.579L372.445 186.085L372.84 182.721L375.41 183.375L378.639 180.758H380.352L380.154 177.952L381.077 174.771L383.251 174.115L383.844 171.119L386.612 171.962L387.732 171.119ZM366.251 179.916L366.185 182.815L363.681 182.067V180.29L366.251 179.916ZM363.944 228.787L346.482 228.695L340.025 228.602L341.145 226.563L340.881 224.431L344.901 218.306L348.262 213.755L350.37 212.361L352.874 213.197L356.63 211.989L359.068 209.479L360.847 210.223L362.824 214.498L367.634 217.935L365.921 224.801L363.944 228.787Z"
        stroke={element.config.stroke}
        data-name="Door"
        fill={assignColor('Door')}
        data-x="393"
        data-y="161"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Door')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M338.443 202.034L334.687 203.151L333.04 205.478L333.831 209.2L331.327 213.662L329.021 215.241L326.714 221.369L323.485 225.172L323.551 228.509L314.194 228.602L307.737 228.973L306.814 227.861L306.155 220.256L306.419 212.361L290.604 212.082L290.934 187.673H280.654L280.72 179.449H278.019L278.15 163.151L294.624 163.338L302.663 163.526L302.465 179.823L310.504 180.103L310.175 187.673L314.919 187.859L314.787 196.163L326.517 196.35L326.582 199.053L330.47 199.425H338.575L338.443 202.034Z"
        stroke={element.config.stroke}
        data-name="Oconto"
        fill={assignColor('Oconto')}
        data-x="338"
        data-y="202"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Oconto')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M162.572 363.862L162.638 370.908L162.77 398.553L162.836 425.973L148.734 425.884L149.196 424.543L147.614 421.86L144.517 414.52L142.936 413.714L132.393 411.205L128.175 409.95L121.718 405.197L120.927 403.851L120.136 399.811L120.071 396.487L118.555 393.071L115.656 389.923L115.524 385.333L114.733 382.091H120.532L127.714 377.945L128.834 376.231L134.963 374.608L138.323 372.081L141.947 370.637L145.044 366.663L147.021 366.482L150.579 365.217L154.731 363.048L160.859 363.952L162.572 363.862Z"
        stroke={element.config.stroke}
        data-name="Grant"
        fill={assignColor('Grant')}
        data-x="162"
        data-y="363"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Grant')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M253.77 114.522L245.401 114.143V117.929L237.098 117.74V113.953L233.013 114.143L188.205 114.332L188.139 106.278H195.717V76.0359L239.339 88.0389L251.331 91.5589L261.347 97.4519V106.278H253.77V114.522Z"
        stroke={element.config.stroke}
        data-name="Vilas"
        fill={assignColor('Vilas')}
        data-x="253"
        data-y="114"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Vilas')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M188.139 187.299L190.445 187.392L228.862 187.486H242.172V195.79L242.106 224.987L242.238 228.231H234.133L224.644 227.768L201.252 227.861H170.216L170.282 195.417H177.991L178.057 187.392L188.139 187.299Z"
        stroke={element.config.stroke}
        data-name="Marathon"
        fill={assignColor('Marathon')}
        data-x="188"
        data-y="187"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Marathon')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M129.823 89.8468L129.757 106.278H146.428L146.362 138.798L121.85 138.704L89.5625 138.798L89.4305 106.278L88.7715 106.183V89.6568L96.8105 89.5618L121.784 89.8468H129.823Z"
        stroke={element.config.stroke}
        data-name="Sawyer"
        fill={assignColor('Sawyer')}
        data-x="129"
        data-y="89"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Sawyer')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M170.216 251.904V268.026H170.479V276.759L162.375 276.207L130.877 276.391L126.924 279.054L126.858 284.468H115.194L115.128 283.551L115.063 268.302L114.272 268.21V252.088L114.206 236.01L130.218 236.103V244.055L138.191 244.148V252.088L154.204 252.181L170.216 251.904Z"
        stroke={element.config.stroke}
        data-name="Jackson"
        fill={assignColor('Jackson')}
        data-x="170"
        data-y="251"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Jackson')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M57.208 138.609L49.037 138.704L49.103 130.592L32.431 130.404L24.458 130.215L24.392 138.421L1 138.232L2.252 131.347L4.954 129.837L7.524 127.099L9.434 122.941L9.039 120.672L10.357 119.537L11.214 116.509L14.838 112.817L17.342 111.112L23.075 109.027L23.997 106.562L28.017 107.131L31.179 102.673L35.133 103.622L36.253 103.148L37.242 99.1608L40.141 97.8318L40.207 89.4668L55.956 89.6568V106.088H57.076L57.208 130.498V138.609Z"
        stroke={element.config.stroke}
        data-name="Burnett"
        fill={assignColor('Burnett')}
        data-x="57"
        data-y="138"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Burnett')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M88.771 32.6499L88.507 39.8579L88.639 73.0779L88.771 89.6569H55.956L40.207 89.4669V59.8919L40.273 40.8179L41.064 42.0669L45.281 42.4509L47.455 39.2819L45.874 37.2639L51.936 32.8419L58.657 39.6659L63.468 39.8579L67.026 38.8019L72.627 38.5129L76.515 36.5919L82.709 34.4769L85.41 32.9389L88.771 32.6499Z"
        stroke={element.config.stroke}
        data-name="Douglas"
        fill={assignColor('Douglas')}
        data-x="88"
        data-y="32"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Douglas')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M258.184 195.79V203.896H274.328V211.989L290.604 212.082L306.419 212.361L306.155 220.256L306.814 227.861L306.682 237.121L282.895 236.658L282.961 228.509L258.119 228.324L242.238 228.231L242.106 224.987L242.172 195.79H258.184Z"
        stroke={element.config.stroke}
        data-name="Shawano"
        fill={assignColor('Shawano')}
        data-x="258"
        data-y="195"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Shawano')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M277.821 103.243L278.348 106.278L278.282 130.592L294.822 130.875L294.756 159.209L294.624 163.338L278.15 163.151L269.979 163.245L261.809 163.057L262.006 154.983L253.835 154.889L253.77 114.522V106.278H261.347V97.4519L267.937 101.819L270.309 101.25L272.615 102.673L273.999 101.914L277.821 103.243Z"
        stroke={element.config.stroke}
        data-name="Forest"
        fill={assignColor('Forest')}
        data-x="277"
        data-y="103"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Forest')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M253.77 114.522L253.835 154.889L228.796 154.513L228.664 146.614H188.205L188.073 121.807L188.205 114.332L233.013 114.143L237.098 113.953V117.74L245.401 117.929V114.143L253.77 114.522Z"
        stroke={element.config.stroke}
        data-name="Oneida"
        fill={assignColor('Oneida')}
        data-x="253"
        data-y="114"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Oneida')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M188.139 106.278L188.205 114.332L188.073 121.807L188.205 146.614L188.271 162.869L171.929 162.963L162.572 163.338L146.296 163.245L146.362 138.798L146.428 106.278L171.007 106.373L188.139 106.278Z"
        stroke={element.config.stroke}
        data-name="Price"
        fill={assignColor('Price')}
        data-x="188"
        data-y="106"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Price')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M49.037 138.704L48.971 178.981L32.497 179.075L9.303 178.981L9.764 173.741L9.303 171.493L12.861 168.12L13.256 164.745L16.749 160.617L16.683 156.768L14.64 155.171L11.543 150.565L11.279 147.649L8.38 145.391L5.283 146.144L1.198 144.826L1 138.232L24.392 138.421L24.458 130.215L32.431 130.404L49.103 130.592L49.037 138.704Z"
        stroke={element.config.stroke}
        data-name="Polk"
        fill={assignColor('Polk')}
        data-x="49"
        data-y="138"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Polk')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M195.717 76.0359V106.278H188.139L171.007 106.373V90.0369L162.968 89.7519L162.836 81.6599H154.665L154.863 56.7339L154.665 49.2619L157.564 48.4949L160.464 50.6999L163.429 50.5079L165.142 53.1909L167.712 53.0949L169.425 51.6579L170.743 55.1059L172.786 54.7229L173.906 56.4469H176.739L183.065 70.5009L183.263 72.5059L195.717 76.0359Z"
        stroke={element.config.stroke}
        data-name="Iron"
        fill={assignColor('Iron')}
        data-x="195"
        data-y="76"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Iron')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M170.282 195.417L170.216 227.861V251.904L154.204 252.181L138.191 252.088V244.148L130.218 244.055V236.103L130.284 211.803L130.218 195.697H162.506L170.282 195.417Z"
        stroke={element.config.stroke}
        data-name="Clark"
        fill={assignColor('Clark')}
        data-x="170"
        data-y="195"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Clark')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M256.339 355.992V363.771L256.076 387.674L256.142 395.588L232.618 395.498V394.69H217.198L201.713 394.42L201.647 363.319L203.624 360.426L206.985 360.335L209.093 357.983L209.291 355.268L217.33 355.358L233.079 355.177V356.263H248.564L256.339 355.992Z"
        stroke={element.config.stroke}
        data-name="Dane"
        fill={assignColor('Dane')}
        data-x="256"
        data-y="355"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Dane')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M278.15 163.151L278.019 179.449H280.72L280.654 187.673L258.119 187.579L258.184 195.79H242.172V187.486H228.862V171.212L228.796 154.513L253.835 154.889L262.006 154.983L261.809 163.057L269.979 163.245L278.15 163.151Z"
        stroke={element.config.stroke}
        data-name="Langlade"
        fill={assignColor('Langlade')}
        data-x="278"
        data-y="163"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Langlade')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M205.074 323.762L206.458 327.221L209.555 328.131L208.896 330.587L212.256 330.496L217.396 331.678L217.33 347.386L214.365 349.289L211.861 349.561L209.291 353.094V355.268L209.093 357.983L206.985 360.335L203.624 360.426L201.647 363.319L200.659 364.314L197.298 364.856L192.093 364.133L190.577 364.314L187.414 367.205L185.767 367.476L178.189 366.844V339.583L178.387 331.588L170.545 331.678L170.414 323.762L186.294 323.671L205.074 323.762Z"
        stroke={element.config.stroke}
        data-name="Sauk"
        fill={assignColor('Sauk')}
        data-x="205"
        data-y="323"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Sauk')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M130.086 171.306L129.955 187.486L130.218 195.697L130.284 211.803L106.299 211.896L90.2864 211.803L82.3134 211.989L82.1814 187.299H81.1934L81.2594 179.168L89.3644 179.262L89.4964 171.306H105.376H130.086Z"
        stroke={element.config.stroke}
        data-name="Chippewa"
        fill={assignColor('Chippewa')}
        data-x="130"
        data-y="171"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Chippewa')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M170.479 268.026L197.76 268.118L198.155 269.682L196.442 270.969L197.562 274.83L193.147 276.024L192.356 279.146L190.314 280.248L189.325 284.101L189.852 286.394L192.356 290.976L194.201 295.188L194.465 297.293L192.818 299.214L193.476 302.688L196.112 305.613L197.101 307.713L200.198 311.365L201.45 315.744L203.492 320.301L204.942 321.577L205.074 323.762L186.294 323.671L170.414 323.762L170.479 315.561L170.414 293.448L170.479 276.759V268.026Z"
        stroke={element.config.stroke}
        data-name="Juneau"
        fill={assignColor('Juneau')}
        data-x="170"
        data-y="268"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Juneau')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M82.2471 236.103H90.2861L90.2211 268.302L87.7171 270.602L85.4761 270.969L85.6741 273.451L85.0151 275.84L87.8481 277.31L89.7591 282.083L87.5191 287.035L88.3751 288.502L85.8061 287.494L80.9951 282.909L78.3601 281.257L77.3051 278.962L75.1311 278.32L71.6381 276.299L68.2121 272.9L66.6301 270.418L66.6961 267.566L65.9721 265.634L64.3241 264.53L64.8511 262.044L61.9521 257.898L57.3391 255.593L53.9131 253.38L56.0871 243.871L56.9441 237.491L58.5911 235.918L62.2811 236.01L82.2471 236.103Z"
        stroke={element.config.stroke}
        data-name="Buffalo"
        fill={assignColor('Buffalo')}
        data-x="882"
        data-y="236"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Buffalo')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M188.271 162.869L188.007 171.025L188.139 187.299L178.057 187.392L177.991 195.417H170.282L162.506 195.697H130.218L129.955 187.486L130.086 171.306L130.021 163.057L146.296 163.245L162.572 163.338L171.929 162.963L188.271 162.869Z"
        stroke={element.config.stroke}
        data-name="Taylor"
        fill={assignColor('Taylor')}
        data-x="188"
        data-y="162"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Taylor')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M146.362 138.798L146.296 163.245L130.021 163.057L130.086 171.306H105.376H89.4961L89.5621 138.798L121.85 138.704L146.362 138.798Z"
        stroke={element.config.stroke}
        data-name="Rusk"
        fill={assignColor('Rusk')}
        data-x="146"
        data-y="138"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Rusk')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M170.479 315.561L170.414 323.762L170.545 331.678L146.758 331.769L146.955 343.667L111.504 343.395L109.857 340.4L110.714 334.86L109.198 332.497L109.857 328.95L107.551 325.401L107.089 321.85L108.012 316.017L131.009 316.109L162.506 316.017L170.479 315.561Z"
        stroke={element.config.stroke}
        data-name="Vernon"
        fill={assignColor('Vernon')}
        data-x="170"
        data-y="315"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Vernon')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M170.479 276.759L170.414 293.448L170.479 315.561L162.506 316.017L131.009 316.109V300.22L130.877 284.376L126.858 284.468L126.924 279.054L130.877 276.391L162.375 276.207L170.479 276.759Z"
        stroke={element.config.stroke}
        data-name="Monroe"
        fill={assignColor('Monroe')}
        data-x="170"
        data-y="176"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Monroe')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M312.152 300.951L312.283 316.564L312.218 332.679H296.403V324.673L278.282 324.491L264.444 324.4V300.586H280.325L296.205 300.86L296.271 296.561L312.152 296.652V300.951Z"
        stroke={element.config.stroke}
        data-name="Fond du Lac"
        fill={assignColor('Fond du Lac')}
        data-x="312"
        data-y="300"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Fond du Lac')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M256.471 324.491L256.669 348.02L256.339 355.992L248.564 356.263H233.079V355.177L217.33 355.358L209.291 355.268V353.094L211.861 349.561L214.365 349.289L217.33 347.386L217.396 331.678L212.256 330.496L208.896 330.587L209.555 328.131L206.458 327.221L205.074 323.762L217.396 323.58H240.788L248.564 323.489V324.582L256.471 324.491Z"
        stroke={element.config.stroke}
        data-name="Columbia"
        fill={assignColor('Columbia')}
        data-x="256"
        data-y="324"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Columbia')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M114.206 236.01L114.272 252.088V268.21L115.063 268.302L115.128 283.551L111.966 282.817L110.779 285.018L108.012 284.56L104.52 285.385L102.675 287.952L103.597 292.441H97.2047L96.4797 291.251L91.4726 288.96L88.3746 288.502L87.5186 287.035L89.7587 282.083L87.8476 277.31L85.0146 275.84L85.6737 273.451L85.4756 270.969L87.7167 270.602L90.2206 268.302L90.2857 236.103L114.206 236.01Z"
        stroke={element.config.stroke}
        data-name="Trempealeau"
        fill={assignColor('Trempealeau')}
        data-x="114"
        data-y="236"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Trempealeau')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M242.238 228.231L242.106 268.67L224.776 268.578L217.528 268.394L209.159 268.21L209.027 243.963L201.252 243.871V227.861L224.644 227.768L234.133 228.231H242.238Z"
        stroke={element.config.stroke}
        data-name="Portage"
        fill={assignColor('Portage')}
        data-x="242"
        data-y="228"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Portage')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M282.895 236.658L274.263 236.566L274.328 252.734L274.065 268.67H264.378H242.106L242.238 228.231L258.119 228.324L282.961 228.509L282.895 236.658Z"
        stroke={element.config.stroke}
        data-name="Waupaca"
        fill={assignColor('Waupaca')}
        data-x="282"
        data-y="236"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Waupaca')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M228.796 154.513L228.862 171.212V187.486L190.445 187.392L188.139 187.299L188.007 171.025L188.271 162.869L188.205 146.614H228.664L228.796 154.513Z"
        stroke={element.config.stroke}
        data-name="Lincoln"
        fill={assignColor('Lincoln')}
        data-x="228"
        data-y="154"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Lincoln')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M89.4957 171.306L89.3637 179.262L81.2587 179.168H65.0487L48.9707 178.981L49.0367 138.704L57.2077 138.609L89.5617 138.798L89.4957 171.306Z"
        stroke={element.config.stroke}
        data-name="Barron"
        fill={assignColor('Barron')}
        data-x="89"
        data-y="171"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Barron')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M81.2593 179.168L81.1933 187.299H82.1813L82.3133 211.989V227.953L50.3553 227.861L50.2233 211.803L50.2893 187.299H48.9053L48.9713 178.981L65.0493 179.168H81.2593Z"
        stroke={element.config.stroke}
        data-name="Dunn"
        fill={assignColor('Dunn')}
        data-x="81"
        data-y="179"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Dunn')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M264.444 324.4L278.282 324.491L296.403 324.673V332.679L296.337 348.383H295.217L295.283 364.133L287.244 363.952L256.339 363.771V355.992L256.669 348.02L256.471 324.491L264.444 324.4Z"
        stroke={element.config.stroke}
        data-name="Dodge"
        fill={assignColor('Dodge')}
        data-x="264"
        data-y="324"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Dodge')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M89.562 138.798L57.2081 138.609V130.498L57.0761 106.088H55.9561V89.6567H88.7711V106.183L89.4301 106.278L89.562 138.798Z"
        stroke={element.config.stroke}
        data-name="Washburn"
        fill={assignColor('Washburn')}
        data-x="89"
        data-y="138"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Washburn')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M217.528 268.394V292.624L217.594 300.586L217.396 323.58L205.074 323.762L204.942 321.577L203.492 320.301L201.45 315.744L200.198 311.365L197.101 307.713L196.112 305.613L193.476 302.688L192.818 299.214L194.465 297.293L194.201 295.188L192.356 290.976L189.852 286.394L189.325 284.101L190.314 280.248L192.356 279.146L193.147 276.024L197.562 274.83L196.442 270.969L198.155 269.682L197.76 268.118L209.159 268.21L217.528 268.394Z"
        stroke={element.config.stroke}
        data-name="Adams"
        fill={assignColor('Adams')}
        data-x="217"
        data-y="268"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Adams')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M209.159 268.21L197.76 268.118L170.479 268.026H170.216V251.904V227.861H201.252V243.871L209.027 243.963L209.159 268.21Z"
        stroke={element.config.stroke}
        data-name="Wood"
        fill={assignColor('Wood')}
        data-x="209"
        data-y="268"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Wood')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M178.189 366.844L185.767 367.476L187.414 367.205L190.577 364.314L192.093 364.133L197.298 364.856L200.659 364.314L201.647 363.319L201.713 394.42L201.779 398.643L162.77 398.553L162.638 370.908L162.572 363.862L168.503 362.867L173.379 363.952L178.189 366.844Z"
        stroke={element.config.stroke}
        data-name="Iowa"
        fill={assignColor('Iowa')}
        data-x="178"
        data-y="366"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Iowa')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M48.9712 178.981L48.9052 187.299H50.2892L50.2232 211.803H42.2502L34.5402 211.431H8.90716L8.18216 208.083L9.36916 206.874L9.50016 202.592L8.57816 200.45L8.64416 195.604L6.86516 193.925L6.53516 191.873L10.0272 188.513L9.89616 182.441L9.30316 178.981L32.4972 179.075L48.9712 178.981Z"
        stroke={element.config.stroke}
        data-name="Saint Croix"
        fill={assignColor('Saint Croix')}
        data-x="48"
        data-y="178"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Saint Croix')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M147.021 366.482L145.044 366.663L141.947 370.637L138.323 372.081L134.963 374.608L128.834 376.231L127.714 377.945L120.532 382.091H114.733L113.547 378.125L113.415 369.734L115.326 367.928L117.237 363.5L120.993 359.159L118.555 353.638L115.59 351.283L111.768 349.924L111.043 348.655L112.031 345.572L111.504 343.395L146.955 343.667L147.021 366.482Z"
        stroke={element.config.stroke}
        data-name="Crawford"
        fill={assignColor('Crawford')}
        data-x="147"
        data-y="366"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Crawford')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M338.246 260.938L352.808 260.846L352.676 263.149L354.785 269.13L354.587 274.554L352.018 278.136L347.734 280.064L345.758 281.808L345.362 286.577L343.715 288.685L342.529 294.181L341.145 297.201L340.486 300.768L331.92 300.951L320.059 300.86L319.927 284.743L319.993 268.854L330.207 268.946V260.846L338.246 260.938Z"
        stroke={element.config.stroke}
        data-name="Manitowoc"
        fill={assignColor('Manitowoc')}
        data-x="338"
        data-y="260"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Manitowoc')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M50.2231 211.803L50.3551 227.861V241.375L38.4941 241.19L35.1331 239.618L33.2881 239.803L29.8621 238.786L23.5361 238.601L21.8231 235.548L18.5281 234.344L18.2641 232.215L15.5631 229.899L10.9501 225.08L6.40305 222.297L6.20605 220.163L7.45806 218.213L8.90705 213.662V211.431H34.5401L42.2501 211.803H50.2231Z"
        stroke={element.config.stroke}
        data-name="Pierce"
        fill={assignColor('Pierce')}
        data-x="50"
        data-y="211"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Pierce')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M323.551 228.509L322.431 228.88L321.575 232.493V237.121L320.454 239.803L321.443 241.005L324.078 242.207L327.373 241.745L330.47 235.455L335.149 232.4L338.443 231.289L338.246 260.938L330.207 260.846V268.946L319.993 268.854L310.109 268.762L310.241 237.028L306.682 237.121L306.814 227.861L307.737 228.973L314.194 228.602L323.551 228.509Z"
        stroke={element.config.stroke}
        data-name="Brown"
        fill={assignColor('Brown')}
        data-x="323"
        data-y="228"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Brown')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M232.618 395.498L256.142 395.588L271.693 395.678L271.825 427.045L232.881 426.42L232.618 395.498Z"
        stroke={element.config.stroke}
        data-name="Rock"
        fill={assignColor('Rock')}
        data-x="232"
        data-y="395"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Rock')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M319.005 125.209L318.939 131.725L311.097 131.253L294.822 130.875L278.282 130.592L278.348 106.278L277.821 103.243L280.588 105.899L283.949 103.717L288.364 102.673L289.879 104.666L291.988 104.381L295.349 106.468L297.655 105.424L300.423 106.942L301.345 108.459L304.508 108.838L305.958 107.985L307.473 109.312L309.714 108.933L316.369 112.438L316.237 115.563L318.016 116.699L313.865 121.996L316.303 124.359L319.005 125.209Z"
        stroke={element.config.stroke}
        data-name="Florence"
        fill={assignColor('Florence')}
        data-x="319"
        data-y="125"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Florence')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M306.682 237.121L310.241 237.028L310.109 268.762L296.205 268.578L274.065 268.67L274.328 252.734L274.263 236.566L282.895 236.658L306.682 237.121Z"
        stroke={element.config.stroke}
        data-name="Outagamie"
        fill={assignColor('Outagamie')}
        data-x="396"
        data-y="237"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Outagamie')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M130.284 211.803L130.218 236.103L114.206 236.01L90.2861 236.103H82.2471L82.3131 227.953V211.989L90.2861 211.803L106.299 211.896L130.284 211.803Z"
        stroke={element.config.stroke}
        data-name="Eau Claire"
        fill={assignColor('Eau Claire')}
        data-x="130"
        data-y="211"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Eau Claire')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M217.528 268.394L224.776 268.578L242.106 268.67H264.378L264.444 292.533H245.994L217.528 292.624V268.394Z"
        stroke={element.config.stroke}
        data-name="Waushara"
        fill={assignColor('Waushara')}
        data-x="217"
        data-y="268"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Waushara')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M115.128 283.551L115.194 284.468H126.858L130.877 284.376L131.009 300.22V316.109L108.012 316.017L108.934 311.548L107.748 309.722L106.76 305.521L103.992 300.951L101.62 298.391L100.961 296.561L97.2051 292.441H103.597L102.675 287.952L104.52 285.385L108.012 284.56L110.779 285.018L111.966 282.817L115.128 283.551Z"
        stroke={element.config.stroke}
        data-name="La Crosse"
        fill={assignColor('La Crosse')}
        data-x="115"
        data-y="283"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'La Crosse')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M178.189 366.844L173.379 363.952L168.503 362.867L162.572 363.862L160.859 363.952L154.731 363.048L150.579 365.217L147.021 366.482L146.955 343.667L146.758 331.769L170.545 331.678L178.387 331.588L178.189 339.583V366.844Z"
        stroke={element.config.stroke}
        data-name="Richland"
        fill={assignColor('Richland')}
        data-x="178"
        data-y="366"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Richland')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M82.3131 227.953L82.2471 236.103L62.2811 236.01L58.5911 235.918L56.9441 237.491L56.0871 243.871L53.9131 253.38L45.2811 250.889L40.4711 246.642L38.4941 241.19L50.3551 241.375V227.861L82.3131 227.953Z"
        stroke={element.config.stroke}
        data-name="Pepin"
        fill={assignColor('Pepin')}
        data-x="82"
        data-y="227"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Pepin')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M201.713 425.973L186.294 425.884L162.836 425.973L162.77 398.553L201.779 398.643L201.713 425.973Z"
        stroke={element.config.stroke}
        data-name="Lafayette"
        fill={assignColor('Lafayette')}
        data-x="201"
        data-y="425"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Lafayette')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M296.205 268.578L296.271 296.561L296.205 300.86L280.325 300.586H264.444V292.533L264.378 268.67H274.065L296.205 268.578Z"
        stroke={element.config.stroke}
        data-name="Winnebago"
        fill={assignColor('Winnebago')}
        data-x="296"
        data-y="268"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Winnebago')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M232.618 395.498L232.881 426.42L212.059 426.062L201.713 425.973L201.779 398.643L201.713 394.42L217.198 394.69H232.618V395.498Z"
        stroke={element.config.stroke}
        data-name="Green"
        fill={assignColor('Green')}
        data-x="232"
        data-y="395"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Green')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M318.214 395.768L302.795 395.858H287.178L287.244 363.952L295.283 364.133L318.609 364.314L318.28 384.253L318.214 395.768Z"
        stroke={element.config.stroke}
        data-name="Waukesha"
        fill={assignColor('Waukesha')}
        data-x="318"
        data-y="395"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Waukesha')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M256.339 363.771L287.244 363.952L287.178 395.858L271.693 395.678L256.142 395.588L256.076 387.674L256.339 363.771Z"
        stroke={element.config.stroke}
        data-name="Jefferson"
        fill={assignColor('Jefferson')}
        data-x="256"
        data-y="363"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Jefferson')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M302.861 416.579L302.926 426.867H281.379L271.825 427.045L271.693 395.678L287.178 395.858H302.795L302.861 416.579Z"
        stroke={element.config.stroke}
        data-name="Walworth"
        fill={assignColor('Walworth')}
        data-x="302"
        data-y="416"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Walworth')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M340.486 300.768L340.091 302.597L340.75 308.718L342.265 312.369L341.936 315.561L342.331 318.297L341.672 321.577L336.598 330.496L336.467 332.679L320.191 332.769L312.218 332.679L312.283 316.564L312.152 300.951L320.059 300.86L331.92 300.951L340.486 300.768Z"
        stroke={element.config.stroke}
        data-name="Sheboygan"
        fill={assignColor('Sheboygan')}
        data-x="340"
        data-y="300"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Sheboygan')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M245.994 292.533L246.06 302.323H243.951V308.9L245.862 308.353V312.643L241.052 312.551L240.788 313.19V323.58H217.396L217.594 300.586L217.528 292.624L245.994 292.533Z"
        stroke={element.config.stroke}
        data-name="Marquette"
        fill={assignColor('Marquette')}
        data-x="245"
        data-y="292"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Marquette')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M363.944 228.787L362.561 232.215L359.595 235.64L357.487 240.728L354.258 257.068L352.808 260.846L338.246 260.938L338.443 231.289L340.025 228.602L346.482 228.695L363.944 228.787Z"
        stroke={element.config.stroke}
        data-name="Kewaunee"
        fill={assignColor('Kewaunee')}
        data-x="363"
        data-y="228"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Kewaunee')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M296.403 332.679H312.218L320.191 332.769V348.564L318.741 348.655L318.609 364.314L295.283 364.133L295.217 348.383H296.337L296.403 332.679Z"
        stroke={element.config.stroke}
        data-name="Washington"
        fill={assignColor('Washington')}
        data-x="296"
        data-y="332"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Washington')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M280.654 187.673H290.934L290.604 212.082L274.328 211.989V203.896H258.184V195.79L258.119 187.579L280.654 187.673Z"
        stroke={element.config.stroke}
        data-name="Menominee"
        fill={assignColor('Menominee')}
        data-x="280"
        data-y="187"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Menominee')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M310.109 268.762L319.993 268.854L319.927 284.743L320.059 300.86L312.152 300.951V296.652L296.271 296.561L296.205 268.578L310.109 268.762Z"
        stroke={element.config.stroke}
        data-name="Calumet"
        fill={assignColor('Calumet')}
        data-x="310"
        data-y="268"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Calumet')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M318.214 395.768H334.226L336.335 399.272L338.707 401.607L337.191 404.569L337.521 406.901L335.939 411.384L310.504 411.294L310.57 416.49L302.861 416.579L302.795 395.858L318.214 395.768Z"
        stroke={element.config.stroke}
        data-name="Racine"
        fill={assignColor('Racine')}
        data-x="318"
        data-y="395"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Racine')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M264.444 300.586V324.4L256.471 324.491L248.564 324.582V323.489L240.788 323.58V313.19L241.052 312.551L245.862 312.643V308.353L243.951 308.9V302.323H246.06L245.994 292.533H264.444V300.586Z"
        stroke={element.config.stroke}
        data-name="Green Lake"
        fill={assignColor('Green Lake')}
        data-x="264"
        data-y="300"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Green Lake')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M336.467 332.679L336.401 337.676L334.819 341.671L331.854 346.116L331.063 348.111L329.943 354.634L328.691 359.792L329.745 364.223L318.609 364.314L318.741 348.655L320.191 348.564V332.769L336.467 332.679Z"
        stroke={element.config.stroke}
        data-name="Ozaukee"
        fill={assignColor('Ozaukee')}
        data-x="336"
        data-y="332"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Ozaukee')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M335.939 411.384L334.819 415.774L335.28 424.632L335.808 427.045L302.926 426.867L302.861 416.579L310.57 416.49L310.504 411.294L335.939 411.384Z"
        stroke={element.config.stroke}
        data-name="Kenosha"
        fill={assignColor('Kenosha')}
        data-x="335"
        data-y="411"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Kenosha')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M334.226 395.768H318.214L318.28 384.253L318.609 364.314L329.745 364.223L330.602 366.302L329.284 370.637L331.129 373.254L331.722 375.69L329.679 378.125L328.955 380.198L332.052 383.802L333.04 386.053L333.238 390.103L332.645 391.363L334.226 395.768Z"
        stroke={element.config.stroke}
        data-name="Milwaukee"
        fill={assignColor('Milwaukee')}
        data-x="334"
        data-y="395"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Milwaukee')}
        onMouseLeave={handleMouseLeave}
      />
      {present && renderTooltip()}
      {renderLabels()}
    </svg>
  );
};

MapWisconsin.propTypes = ElementPropTypes;
MapWisconsinPresent.propTypes = {
  element: PropTypes.object.isRequired,
};
MapWisconsinContent.propTypes = {
  element: PropTypes.object.isRequired,
  present: PropTypes.bool,
};

export default MapWisconsin;
