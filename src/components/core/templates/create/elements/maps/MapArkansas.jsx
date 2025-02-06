import { ElementPropTypes } from '@/lib/prop-types.js';
import useMapElement from '@/lib/design/use-map-element.jsx';
import PropTypes from 'prop-types';

const MapArkansas = ({ element }) => {
  return <MapArkansasContent element={element} />;
};

export const MapArkansasPresent = ({ element }) => {
  return <MapArkansasContent element={element} />;
};

export const MapArkansasPreview = () => {
  return <MapArkansasContent element={{ config: { data: [], fill: '#f9fafb', stroke: '#f9fafb' } }} present={false} />;
};

export const MapArkansasContent = ({ element, present = true }) => {
  const { el, assignColor, renderLabels, handleMouseMove, handleMouseLeave, renderTooltip } = useMapElement(element);

  return (
    <svg
      style={{ width: element.width, height: element.height }}
      ref={el}
      width="100%"
      viewBox="0 0 400 343"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M136.707 132.325L131.906 137.511L127.185 138.294L127.105 141.618L124.865 142.694L119.184 148.362L119.104 150.022L113.023 154.221L107.341 159.881V171.188H98.8602V174.013L73.5752 173.623L74.0552 146.994L73.8952 135.75L77.4152 134.086L88.0572 134.184L91.7382 129.192L93.8992 127.723L108.062 128.212L108.142 117.824L110.862 121.648L115.663 122.922L118.624 127.331L119.584 130.563L125.585 137.511L127.585 136.826L128.466 133.108L136.707 132.325Z"
        stroke={element.config.stroke}
        data-name="Yell"
        fill={assignColor('Yell')}
        data-x="136"
        data-y="132"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Yell')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M280.896 234.549H294.099L297.3 237.158L300.9 237.255L299.46 243.436L291.538 244.208L293.459 249.034L290.818 249.516L289.058 245.849L283.617 248.069L283.537 250.095L288.578 251.638L289.938 252.989L284.817 258.869L286.817 263.975L290.178 265.227L291.298 267.345L288.578 268.885L286.097 267.441L279.056 267.922L278.816 272.061L282.257 274.273L286.577 273.985L287.458 277.639L283.057 279.081L279.776 277.062L277.536 274.466L273.855 274.85L272.975 278.697L275.775 279.273L279.616 282.349V285.327L272.014 288.305L270.814 292.72L264.493 292.528L262.573 290.897V288.016L254.171 287.92L254.491 267.249L246.089 267.056L246.569 248.358H253.211L253.291 245.56L256.971 244.594L258.972 247.586L262.493 245.753L265.613 249.999L268.734 248.744L273.215 248.551L273.695 250.384L279.776 249.999L278.016 246.332L275.775 244.112L274.815 241.022L275.775 237.834L280.896 234.549Z"
        stroke={element.config.stroke}
        data-name="Desha"
        fill={assignColor('Desha')}
        data-x="280"
        data-y="234"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Desha')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M286.017 213.451L286.097 215.97L284.577 219.748L285.617 224.878L283.057 227.78L283.937 232.229L280.896 234.549L275.775 237.834L274.815 241.022L275.775 244.112L278.016 246.332L279.776 249.999L273.695 250.384L273.215 248.551L268.734 248.744L265.613 249.999L262.493 245.753L258.972 247.586L256.971 244.594L254.811 238.317L254.331 232.809L251.05 233.292L249.45 232.035L248.25 225.265L242.729 223.62L233.527 223.426L234.087 199.388H236.247L242.809 199.582V191.23L260.252 191.522L267.294 191.716L266.653 193.95L269.534 194.825L270.174 198.32L275.135 203.27L277.696 204.046L278.416 206.762L283.057 212.579L286.017 213.451Z"
        stroke={element.config.stroke}
        data-name="Arkansas"
        fill={assignColor('Arkansas')}
        data-x="286"
        data-y="213"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Arkansas')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M262.653 105.95L262.973 107.423L255.851 112.527L256.491 116.55L255.451 119.197L257.692 120.276L259.452 125.372L259.212 127.233L255.291 132.716L254.251 135.848L256.011 139.174L253.211 140.152L243.689 139.956L243.609 146.505L239.208 146.408L238.648 144.551L233.687 142.987L226.405 144.844L225.205 145.919L217.764 145.626L213.203 144.16L209.042 141.618L200.88 142.401L201.6 113.41L222.324 113.901L222.485 106.146L226.805 104.28L227.125 96.6138L244.009 96.9088L243.689 105.655L262.653 105.95Z"
        stroke={element.config.stroke}
        data-name="White"
        fill={assignColor('White')}
        data-x="262"
        data-y="105"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'White')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M208.002 198.612L193.759 198.32H190.798L190.878 189.772L182.637 189.675L182.797 185.398L174.795 185.301L174.955 180.924L170.474 180.826L166.233 179.269L166.473 172.162L158.152 171.968L158.232 163.489L151.27 163.294L149.99 163.197L150.07 157.637L158.472 157.93L158.552 154.904L166.873 155.197L166.953 153.342L171.754 153.733L174.075 158.125L177.035 155.783L192.158 156.075L192.398 147.385L200.8 147.776L204.801 147.873L204.321 175.084L203.121 176.934L202.641 182.188L201.44 185.69L208.082 185.884L208.002 198.612Z"
        stroke={element.config.stroke}
        data-name="Pulaski"
        fill={assignColor('Pulaski')}
        data-x="208"
        data-y="198"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Pulaski')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M359.072 106.244L347.79 106.048L347.55 93.1718L347.71 80.2748L347.87 63.1118L347.39 50.9558L370.434 50.8568L382.997 50.4618H393.159L393.239 54.3178L397.8 57.8758L399 60.0498L397.24 62.2228L393.479 59.9508L389.078 61.5308L389.558 64.7898L393.959 66.5668V68.7378L389.478 69.3298L386.998 70.9088L384.997 74.6568L380.516 76.1348L378.036 74.3608L374.275 76.5298L374.035 80.7678L377.556 84.8058L380.756 83.3288L381.476 86.9718L375.235 89.9248L374.995 93.8608L377.476 95.1388L376.836 98.5808L374.115 97.5968L371.474 94.1558L367.634 94.8438L366.593 98.8748L368.994 103.003L368.034 107.03L364.753 108.699L364.913 103.985L362.593 101.922L359.072 106.244Z"
        stroke={element.config.stroke}
        data-name="Mississippi"
        fill={assignColor('Mississippi')}
        data-x="359"
        data-y="106"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Mississippi')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M151.27 163.294L158.232 163.489L158.152 171.968L166.473 172.162L166.233 179.269L170.474 180.826L174.955 180.924L174.795 185.301L182.797 185.398L182.637 189.675L190.878 189.772L190.798 198.32L178.156 198.029L178.076 202.3L163.273 202.009L160.552 204.822L156.951 205.986H155.591L155.511 200.262L151.35 200.165L151.43 197.349L146.949 197.252L147.189 191.619L145.749 188.898L140.388 188.703V184.523L131.906 184.328L132.867 179.756L132.947 171.188H124.465L124.385 162.709L143.989 163.197L147.91 164.659L151.27 163.294Z"
        stroke={element.config.stroke}
        data-name="Saline"
        fill={assignColor('Saline')}
        data-x="151"
        data-y="163"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Saline')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M139.508 230.972L138.948 247.779L134.467 247.49L135.747 252.41L138.548 255.592L138.388 259.736L140.228 261.182L138.868 264.456L127.425 268.115L124.945 266.478L122.064 267.441L118.624 263.59L115.183 263.686L109.822 262.337L106.701 260.314L106.541 256.17L101.1 250.674L99.8198 246.718L95.7388 241.408L94.2988 228.361L95.0988 226.232L90.2178 225.265L92.0578 221.587L92.1378 213.064L97.8988 213.161L101.98 213.257L101.9 218.973L114.623 219.263L114.543 222.168L122.864 222.361L127.665 223.136L128.386 226.619L127.105 230.392L139.508 230.972Z"
        stroke={element.config.stroke}
        data-name="Clark"
        fill={assignColor('Clark')}
        data-x="139"
        data-y="230"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Clark')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M73.7352 112.233L76.5352 109.681L79.3362 111.35L83.2572 111.448L85.5772 109.288L91.0182 110.27L95.2592 107.423L96.6992 111.251L101.34 116.55L104.301 115.667L106.461 116.942L108.142 117.824L108.062 128.212L93.8992 127.723L91.7382 129.192L88.0572 134.184L77.4152 134.086L73.8952 135.75L74.0552 146.994L44.5292 146.31L44.6092 143.769L38.9282 143.476L39.0882 139.272L39.1682 134.967L47.8892 135.163L48.0492 128.017V126.351L56.7712 126.547L57.0112 117.726L65.5732 118.315L65.8132 109.386L70.5342 113.312L73.7352 112.233Z"
        stroke={element.config.stroke}
        data-name="Logan"
        fill={assignColor('Logan')}
        data-x="73"
        data-y="112"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Logan')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M165.033 307.008H166.553L168.474 311.606L172.234 310.744L172.554 313.712L175.675 315.626L179.996 315.339L182.316 313.137L181.756 314.765L184.477 316.87L186.877 315.148L190.878 318.019L192.719 321.749L195.599 322.419L197.439 325.383L199.44 326.339L201.36 329.206L199.2 332.645L201.12 335.128L201.84 338.851L205.281 341.142L160.472 340.664L131.346 340.378L132.226 306.05L146.069 306.625L149.67 304.996L154.311 306.912L160.712 307.679L165.033 307.008Z"
        stroke={element.config.stroke}
        data-name="Union"
        fill={assignColor('Union')}
        data-x="165"
        data-y="307"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Union')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M208.002 198.612L234.087 199.388L233.527 223.426L242.729 223.62L248.25 225.265L249.45 232.035L251.05 233.292L254.331 232.809L254.811 238.317L250.01 238.897L246.649 235.805L243.449 237.544L242.168 235.129L236.247 230.102L232.407 229.038L230.886 236.578L214.163 236.868V239.96L192.078 240.153L191.918 223.813H193.519L193.759 198.32L208.002 198.612Z"
        stroke={element.config.stroke}
        data-name="Jefferson"
        fill={assignColor('Jefferson')}
        data-x="208"
        data-y="198"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Jefferson')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M39.088 139.272L38.928 143.476L44.609 143.769L44.529 146.31L74.055 146.994L73.575 173.623L67.893 176.447L61.092 176.934L60.292 181.605L55.971 181.507V180.145L47.489 179.853L47.569 178.88L25.005 178.394L25.085 175.571L14.123 175.376L14.683 155.392L19.164 154.514L21.644 152.659L27.005 153.538L32.046 152.073L32.686 141.227L39.088 139.272Z"
        stroke={element.config.stroke}
        data-name="Scott"
        fill={assignColor('Scott')}
        data-x="39"
        data-y="139"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Scott')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M59.4119 27.3819L54.8509 41.6539L54.2909 67.0609L53.3309 74.2619L40.5279 73.8679L40.4479 75.3469L10.8419 74.4589L6.44092 40.4659L19.3239 40.8619V36.5029H23.4849L23.6449 29.3659L49.4099 30.0599V27.0839L59.4119 27.3819Z"
        stroke={element.config.stroke}
        data-name="Washington"
        fill={assignColor('Washington')}
        data-x="59"
        data-y="27"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Washington')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M323.705 183.939L324.265 187.634L327.146 193.756L323.465 197.155L323.305 200.747L325.065 203.367L324.425 205.792L322.025 207.732L317.704 209.477L317.784 214.323H315.063L316.183 210.447L310.662 209.962L308.902 211.707L310.822 215.777L308.982 219.263L304.021 219.651L303.221 224.587L300.02 225.265L296.979 222.168L295.619 223.523L297.46 227.006L299.78 227.974L303.621 227.587L305.461 230.778L303.141 232.519L297.7 230.102L294.099 232.615V234.549H280.896L283.937 232.229L283.057 227.78L285.617 224.878L284.577 219.748L286.097 215.97L286.017 213.451L290.338 213.548L290.418 200.65L286.097 200.456L286.417 183.647L303.701 183.939H323.705Z"
        stroke={element.config.stroke}
        data-name="Phillips"
        fill={assignColor('Phillips')}
        data-x="323"
        data-y="183"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Phillips')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M59.412 27.3818L49.41 27.0838V30.0598L23.645 29.3658L23.485 36.5028H19.324V40.8618L6.441 40.4658L1 1.24783L37.247 1.04883L60.852 1.24783V20.2358V27.3818H59.412Z"
        stroke={element.config.stroke}
        data-name="Benton"
        fill={assignColor('Benton')}
        data-x="59"
        data-y="27"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Benton')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M134.387 77.8109L145.669 78.1069L145.349 95.2379L142.548 95.1389L142.468 103.494L142.228 112.135L141.988 132.521L136.707 132.325L128.466 133.108L127.585 136.826L125.585 137.511L119.584 130.563L118.624 127.331L115.663 122.922L110.862 121.648L108.142 117.824L106.461 116.942L106.861 102.905L112.542 103.003L112.782 90.2199L117.023 90.3189L117.263 77.4169L134.387 77.8109Z"
        stroke={element.config.stroke}
        data-name="Pope"
        fill={assignColor('Pope')}
        data-x="134"
        data-y="77"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Pope')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M282.497 161.929L282.257 174.792L286.577 175.084L286.417 183.647L286.097 200.456L290.418 200.65L290.338 213.548L286.017 213.451L283.057 212.579L278.416 206.762L277.696 204.046L275.135 203.27L270.174 198.32L269.534 194.825L266.653 193.95L267.294 191.716L260.252 191.522L260.412 188.509L257.452 188.412L254.651 186.856L254.731 181.41L260.412 181.507L260.812 166.121L262.333 161.929L261.132 157.637H266.893L267.053 150.413L271.454 150.511L271.534 148.655L278.416 148.85V157.832L281.216 157.734L282.497 161.929Z"
        stroke={element.config.stroke}
        data-name="Monroe"
        fill={assignColor('Monroe')}
        data-x="282"
        data-y="161"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Monroe')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M287.938 62.0249L287.698 79.4869L287.378 89.6299L287.538 105.655L287.298 114.293L270.414 113.999L270.334 105.262L262.653 105.95L243.689 105.655L244.009 96.9089L260.812 97.4009L260.972 86.1849L263.613 85.2979L262.012 80.2749L264.013 76.3329L271.854 68.8369L271.774 67.0609L274.575 61.5309L287.938 62.0249Z"
        stroke={element.config.stroke}
        data-name="Jackson"
        fill={assignColor('Jackson')}
        data-x="287"
        data-y="62"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Jackson')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M55.9711 181.507L55.5711 212.191L29.9661 211.707L29.7261 219.941L30.8461 220.038L30.9261 227.393L12.6821 227.684L13.2421 199.971L13.8831 177.226L14.1231 175.376L25.0851 175.571L25.0051 178.394L47.5691 178.88L47.4891 179.853L55.9711 180.145V181.507Z"
        stroke={element.config.stroke}
        data-name="Polk"
        fill={assignColor('Polk')}
        data-x="55"
        data-y="181"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Polk')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M226.405 144.844L226.245 156.661L235.127 156.856L234.407 180.826L239.048 184.036L237.368 189.87L240.088 191.619L236.967 195.796L236.247 199.388H234.087L208.002 198.612L208.082 185.884L201.44 185.69L202.641 182.188L203.121 176.934L204.321 175.084L204.801 147.873L200.8 147.776L200.88 142.401L209.042 141.618L213.203 144.16L217.764 145.626L225.205 145.919L226.405 144.844Z"
        stroke={element.config.stroke}
        data-name="Lonoke"
        fill={assignColor('Lonoke')}
        data-x="226"
        data-y="144"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Lonoke')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M60.8521 20.2358L76.8551 20.4348L80.9361 24.8018L80.7761 30.6548L83.6571 32.2408L83.5771 35.2148L86.3771 35.3138V38.1868L92.1381 38.2858L92.0581 42.7428H94.7791L94.3791 53.7248L91.6581 55.2078L90.4581 57.9748L90.3781 62.3218H88.6981L88.8581 73.9658L74.7751 73.4728L57.5711 72.9798L57.4911 74.3608L53.3311 74.2618L54.2911 67.0608L54.8511 41.6538L59.4121 27.3818H60.8521V20.2358Z"
        stroke={element.config.stroke}
        data-name="Madison"
        fill={assignColor('Madison')}
        data-x="60"
        data-y="20"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Madison')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M261.692 61.3338L274.575 61.5308L271.774 67.0608L271.854 68.8368L264.013 76.3328L262.012 80.2748L263.613 85.2978L260.972 86.1848L260.812 97.4008L244.009 96.9088L227.125 96.6138L227.446 78.6978L223.525 79.7818L223.605 75.4448L221.284 73.2758L220.804 69.3298L222.485 63.8028L230.166 56.2948L233.447 56.3938L253.451 56.9868L253.371 61.4328L261.692 61.3338Z"
        stroke={element.config.stroke}
        data-name="Independence"
        fill={assignColor('Independence')}
        data-x="261"
        data-y="61"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Independence')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M261.132 157.637L262.333 161.929L260.812 166.121L260.412 181.507L254.731 181.41L254.651 186.856L257.452 188.412L260.412 188.509L260.252 191.522L242.809 191.23V199.582L236.247 199.388L236.967 195.796L240.088 191.619L237.368 189.87L239.048 184.036L234.407 180.826L235.127 156.856L226.245 156.661L226.405 144.844L233.687 142.987L238.648 144.551L239.208 146.408L243.609 146.505L243.689 139.956L253.211 140.152L255.291 143.671L261.372 143.965L261.132 157.637Z"
        stroke={element.config.stroke}
        data-name="Prairie"
        fill={assignColor('Prairie')}
        data-x="261"
        data-y="157"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Prairie')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M269.294 25.0008V26.5878L263.613 26.4888L262.172 27.6798L262.253 35.1158L261.692 61.3338L253.371 61.4328L253.451 56.9868L233.447 56.3938L233.527 50.5608H236.007L236.487 30.2578L235.047 25.6948L245.369 25.8938L245.609 17.1568L254.411 17.5548L254.651 1.2478H257.612L261.772 4.4318L262.493 8.4108L265.373 8.5108V11.6918L268.334 13.2818L269.534 17.4548L269.294 25.0008Z"
        stroke={element.config.stroke}
        data-name="Sharp"
        fill={assignColor('Sharp')}
        data-x="269"
        data-y="25"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Sharp')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M93.9792 249.999L93.5792 263.012L92.7782 262.915L91.8182 296.463L72.8542 295.887L70.6142 292.241L69.2542 292.72L65.7332 289.457L64.2932 286.864L64.3732 283.598L59.4122 281.676L57.0112 278.312L54.7712 278.793L52.9302 271.964L53.8912 270.136L63.7332 270.425L64.6132 245.174L70.3742 245.463L78.3762 247.779L81.0962 249.902H84.8572L88.2182 251.445L93.9792 249.999Z"
        stroke={element.config.stroke}
        data-name="Hempstead"
        fill={assignColor('Hempstead')}
        data-x="93"
        data-y="249"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Hempstead')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M330.506 105.852L347.79 106.048L359.072 106.244L356.832 107.914L356.111 111.153L359.472 111.84L360.432 108.208L364.513 111.251L361.873 115.372V118.707L358.032 119.491L358.352 123.902L362.193 124L364.593 127.527L361.312 131.346L365.153 134.184L362.673 137.218L359.072 135.554L356.191 137.511L354.431 146.017L348.43 145.04L346.109 146.408L345.789 149.827L350.59 153.928L350.91 157.832L347.63 160.271L344.669 163.977L342.669 162.612L337.948 165.537L337.868 158.32L338.588 134.478L330.346 134.967L330.106 131.542L330.506 105.852Z"
        stroke={element.config.stroke}
        data-name="Crittenden"
        fill={assignColor('Crittenden')}
        data-x="330"
        data-y="105"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Crittenden')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M254.011 304.804L253.691 321.654L253.611 341.428L205.281 341.142L201.84 338.851L201.12 335.128L199.2 332.645L201.36 329.206L199.44 326.339V323.758L203.841 319.071L212.402 313.137L211.602 309.69L213.683 305.667L211.362 304.229H226.885L254.011 304.804Z"
        stroke={element.config.stroke}
        data-name="Ashley"
        fill={assignColor('Ashley')}
        data-x="254"
        data-y="304"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Ashley')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M64.6131 245.174L63.7331 270.425L53.8911 270.136L52.6101 264.167L50.4501 262.53L46.1291 256.556L44.6891 253.085L45.5691 248.937L43.6491 242.953L43.0081 238.511L43.8091 236.192L42.6881 231.939L42.7681 227.49L30.9261 227.393L30.8461 220.038L29.7261 219.941L29.9661 211.707L55.5711 212.191L55.3311 220.619H56.3711V227.974L64.7731 228.264L64.6131 245.174Z"
        stroke={element.config.stroke}
        data-name="Howard"
        fill={assignColor('Howard')}
        data-x="64"
        data-y="245"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Howard')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M53.891 270.136L52.93 271.964L54.771 278.793L57.011 278.312L59.412 281.676L64.373 283.598L62.132 283.502L55.571 289.361L52.53 289.649L49.65 287.92L46.929 289.361L43.008 286.864L41.088 287.728L37.727 286.768L31.646 289.169L30.046 288.112L25.485 289.169L23.645 288.016L19.644 289.937L14.123 282.637L11.562 280.619L12.202 251.735L19.724 252.699L19.084 255.978L23.164 257.231L25.965 260.411L26.765 263.108L31.806 265.13L38.528 266.767L40.688 266.093L47.009 267.056L46.929 269.847L53.891 270.136Z"
        stroke={element.config.stroke}
        data-name="Little River"
        fill={assignColor('Little River')}
        data-x="53"
        data-y="270"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Little River')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M156.951 205.986L156.311 231.552L139.508 230.972L127.105 230.392L128.386 226.619L127.665 223.136L122.864 222.361L114.543 222.168L114.623 219.263L101.9 218.973L101.98 213.257L97.8989 213.161V207.635L134.467 208.314L134.627 202.591L137.427 202.688L137.347 197.155L146.949 197.252L151.43 197.349L151.35 200.165L155.511 200.262L155.591 205.986H156.951Z"
        stroke={element.config.stroke}
        data-name="Hot Spring"
        fill={assignColor('Hot Spring')}
        data-x="156"
        data-y="205"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Hot Spring')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M177.275 71.3029L176.955 78.6979L191.278 79.0919L190.958 96.2209L190.558 98.8749L190.238 113.41L171.914 112.92L172.154 104.28L159.672 104.084L142.468 103.494L142.548 95.1389L145.349 95.2379L145.669 78.1069L159.992 78.5009L160.232 71.3029H177.275Z"
        stroke={element.config.stroke}
        data-name="Van Buren"
        fill={assignColor('Van Buren')}
        data-x="177"
        data-y="71"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Van Buren')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M165.673 138.098L167.193 141.227L166.313 144.356L162.552 149.436L164.153 151.878L166.953 153.342L166.873 155.197L158.552 154.904L158.472 157.93L150.07 157.637L149.99 163.197L151.27 163.294L147.91 164.659L143.989 163.197L124.385 162.709L124.465 171.188H107.341V159.881L113.023 154.221L119.104 150.022L119.184 148.362L124.865 142.694L127.105 141.618L153.351 142.01L156.871 141.227L159.192 138.294L161.992 140.934L165.673 138.098Z"
        stroke={element.config.stroke}
        data-name="Perry"
        fill={assignColor('Perry')}
        data-x="165"
        data-y="138"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Perry')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M138.868 264.456L163.753 265.227L163.673 271.58L159.672 275.716L158.312 278.6L152.951 279.658L151.67 282.541L153.751 286.192L150.39 289.937L148.87 292.816L150.31 295.695L154.551 300.874L158.152 300.395L159.512 302.312L163.353 303.558L165.033 307.008L160.712 307.679L154.311 306.912L149.67 304.996L146.069 306.625L132.226 306.05L120.864 305.762L121.024 298.477L122.064 267.441L124.945 266.478L127.425 268.115L138.868 264.456Z"
        stroke={element.config.stroke}
        data-name="Ouachita"
        fill={assignColor('Ouachita')}
        data-x="138"
        data-y="264"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Ouachita')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M222.485 63.8028L220.804 69.3298L221.284 73.2758L223.605 75.4448L223.525 79.7818L191.278 79.0918L176.955 78.6978L177.275 71.3028L177.435 53.1318L185.997 53.2308L186.077 44.6238L194.719 44.7228L194.959 37.8898L196.959 40.4658L199.28 39.4748L201.52 44.4258L203.681 45.0198L203.121 48.5818L203.841 52.8348L201.76 55.6028L204.401 58.0738L207.522 56.4928L209.442 59.0618L212.883 56.9868L218.404 62.1238L222.485 63.8028Z"
        stroke={element.config.stroke}
        data-name="Stone"
        fill={assignColor('Stone')}
        data-x="222"
        data-y="63"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Stone')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M44.4488 105.361L39.3278 104.869L37.7268 107.226L39.4878 109.288L37.8868 111.644L32.7658 114.195L29.2458 114.882L24.7648 113.999L22.6838 110.761L22.4438 107.325L17.8028 104.771L15.9628 109.779L14.2028 98.7768L10.8418 74.4588L40.4478 75.3468L40.5278 73.8678L53.3308 74.2618L57.4908 74.3608L57.4108 77.1208H53.2508L51.8098 79.8808L51.7298 84.1168L44.6088 83.9198L44.3688 92.4828L48.5298 92.5818L47.2488 97.1058L48.0488 98.5808L47.1688 103.003L44.4488 105.361Z"
        stroke={element.config.stroke}
        data-name="Crawford"
        fill={assignColor('Crawford')}
        data-x="44"
        data-y="105"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Crawford')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M182.316 313.137L179.996 315.339L175.675 315.626L172.554 313.712L172.234 310.744L168.474 311.606L166.553 307.008H165.033L163.353 303.558L159.512 302.312L158.152 300.395L154.551 300.874L150.31 295.695L148.87 292.816L150.39 289.937L153.751 286.192L151.67 282.541L152.951 279.658L158.312 278.6L159.672 275.716L163.673 271.58L163.753 265.227L183.837 265.997L184.157 274.369L184.717 280.139L184.397 287.44L185.677 289.553L184.957 296.654L183.117 302.216L180.556 305.858L180.236 311.701L182.316 313.137Z"
        stroke={element.config.stroke}
        data-name="Calhoun"
        fill={assignColor('Calhoun')}
        data-x="182"
        data-y="313"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Calhoun')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M117.263 77.4168L117.023 90.3188L112.782 90.2198L112.542 103.003L106.861 102.905L106.461 116.942L104.301 115.667L101.34 116.55L96.6989 111.251L95.2589 107.423L91.0179 110.27L85.5769 109.288L83.2569 111.448L79.3359 111.35L76.5349 109.681L73.7349 112.233L74.7749 73.4728L88.8579 73.9658L88.6979 76.9238L117.263 77.4168Z"
        stroke={element.config.stroke}
        data-name="Johnson"
        fill={assignColor('Johnson')}
        data-x="117"
        data-y="77"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Johnson')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M124.465 171.188H132.947L132.867 179.756L131.906 184.328L140.388 184.523V188.703L145.749 188.898L147.189 191.619L146.949 197.252L137.347 197.155L137.427 202.688L134.627 202.591L134.467 208.314L97.8989 207.635L98.2999 179.561L98.8599 174.013V171.188H107.341H124.465Z"
        stroke={element.config.stroke}
        data-name="Garland"
        fill={assignColor('Garland')}
        data-x="124"
        data-y="171"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Garland')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M134.387 77.8109L117.263 77.4169L88.6982 76.9239L88.8582 73.9659L88.6982 62.3219H90.3782L90.4582 57.9749L91.6582 55.2079L94.3792 53.7249L94.7792 42.7429H92.0582L92.1382 38.2859L106.381 38.6829L134.867 39.2769L135.427 43.6339L134.387 77.8109Z"
        stroke={element.config.stroke}
        data-name="Newton"
        fill={assignColor('Newton')}
        data-x="134"
        data-y="77"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Newton')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M306.181 24.3058L305.861 35.9088L287.218 35.7098L284.017 36.2058L279.856 34.4218L277.776 30.4568L272.815 28.0758L270.814 28.4728L269.294 25.0008L269.534 17.4548L268.334 13.2818L265.373 11.6918V8.5108L262.493 8.4108L261.772 4.4318L257.612 1.2478L308.102 1.3468L308.982 2.4418L308.742 8.2118L310.662 9.9028L310.422 22.8168L306.181 22.2218V24.3058Z"
        stroke={element.config.stroke}
        data-name="Randolph"
        fill={assignColor('Randolph')}
        data-x="306"
        data-y="24"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Randolph')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M92.1381 213.064L92.0581 221.587L90.2181 225.265L95.0991 226.232L94.2991 228.361L95.7391 241.408L99.8201 246.718L101.1 250.674L93.979 249.999L88.2181 251.445L84.8571 249.902H81.0961L78.3761 247.779L70.3741 245.463L64.6131 245.174L64.7731 228.264L56.3711 227.974V220.619H55.3311L55.5711 212.191L92.1381 213.064Z"
        stroke={element.config.stroke}
        data-name="Pike"
        fill={assignColor('Pike')}
        data-x="92"
        data-y="213"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Pike')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M305.861 35.9089L310.742 36.0079L308.902 39.7719L304.821 43.1389L302.181 50.5609L302.421 53.9229L299.46 62.4199L287.938 62.0249L274.575 61.5309L261.692 61.3339L262.253 35.1159L262.172 27.6799L263.613 26.4889L269.294 26.5879V25.0009L270.814 28.4729L272.815 28.0759L277.776 30.4569L279.856 34.4219L284.017 36.2059L287.218 35.7099L305.861 35.9089Z"
        stroke={element.config.stroke}
        data-name="Lawrence"
        fill={assignColor('Lawrence')}
        data-x="305"
        data-y="35"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Lawrence')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M30.9261 227.393L42.7682 227.49L42.6881 231.939L43.8091 236.192L43.0081 238.511L43.6491 242.953L45.5691 248.937L44.6891 253.085L46.1292 256.556L50.4501 262.53L52.6101 264.167L53.8911 270.136L46.9291 269.847L47.0091 267.056L40.6881 266.093L38.5281 266.767L31.8061 265.13L26.7651 263.108L25.9651 260.411L23.1641 257.231L19.0841 255.978L19.7241 252.699L12.2021 251.735L12.6821 227.684L30.9261 227.393Z"
        stroke={element.config.stroke}
        data-name="Sevier"
        fill={assignColor('Sevier')}
        data-x="30"
        data-y="227"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Sevier')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M272.014 288.305L273.215 290.897L275.535 292.528L274.495 296.654L271.694 300.107H275.855L276.975 298.764L276.335 294.544L280.416 296.654L279.936 300.97L274.975 302.025L274.015 303.846L276.975 305.667L281.536 304.325L282.817 299.052L285.937 301.162L282.897 304.325L278.976 309.978L279.136 312.85L281.536 318.497L283.697 315.531L286.417 314.861L286.177 318.401L283.137 321.271L283.537 327.486L282.257 329.588L279.536 329.684L276.415 328.346L274.575 331.881L279.856 335.319L280.656 337.706L277.456 341.523L253.611 341.428L253.691 321.654L254.011 304.804L254.171 287.92L262.573 288.016V290.897L264.493 292.528L270.814 292.72L272.014 288.305Z"
        stroke={element.config.stroke}
        data-name="Chicot"
        fill={assignColor('Chicot')}
        data-x="272"
        data-y="288"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Chicot')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M198.08 1.3468L197.76 24.7028L197.68 33.4308L193.519 33.2328L193.359 37.3948L194.959 37.8898L194.719 44.7228L186.077 44.6238L185.997 53.2308L177.435 53.1318L177.515 44.4258L177.756 37.2958L171.914 31.3488L172.715 25.3978L169.034 24.3058L168.554 21.1298L164.793 18.6468L162.953 15.1708L167.834 12.1888L168.234 1.4468L198.08 1.3468Z"
        stroke={element.config.stroke}
        data-name="Baxter"
        fill={assignColor('Baxter')}
        data-x="198"
        data-y="1"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Baxter')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M101.34 299.532L97.3389 307.679L96.2189 311.797L95.7389 317.445L91.8179 317.349L91.1779 340.187L65.2529 339.996L63.4929 334.746L61.7319 333.409L62.5319 329.015L68.2139 326.912L72.6139 321.367L72.2139 319.741L75.2549 315.435L75.5749 309.403L73.8149 308.158L74.0549 304.708L70.9339 300.107L72.8539 295.887L91.8179 296.463L91.7379 299.244L101.34 299.532Z"
        stroke={element.config.stroke}
        data-name="Lafayette"
        fill={assignColor('Lafayette')}
        data-x="101"
        data-y="299"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Lafayette')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M287.298 114.293L287.057 134.478L287.138 149.046L278.416 148.85L271.534 148.655L271.454 150.511L267.053 150.413L266.893 157.637H261.132L261.372 143.965L255.291 143.671L253.211 140.152L256.011 139.174L254.251 135.848L255.291 132.716L259.212 127.233L259.452 125.372L257.692 120.276L255.451 119.197L256.491 116.55L255.851 112.527L262.973 107.423L262.653 105.95L270.334 105.262L270.414 113.999L287.298 114.293Z"
        stroke={element.config.stroke}
        data-name="Woodruff"
        fill={assignColor('Woodruff')}
        data-x="287"
        data-y="114"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Woodruff')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M184.157 274.369L212.483 274.754L212.402 291.377L209.522 298.477L211.122 300.586L211.362 304.229L213.683 305.667L211.602 309.69L212.402 313.137L203.841 319.071L199.44 323.758V326.339L197.439 325.383L195.599 322.419L192.719 321.749L190.878 318.019L186.877 315.148L184.477 316.87L181.756 314.765L182.316 313.137L180.236 311.701L180.556 305.858L183.117 302.216L184.957 296.654L185.677 289.553L184.397 287.44L184.717 280.139L184.157 274.369Z"
        stroke={element.config.stroke}
        data-name="Bradley"
        fill={assignColor('Bradley')}
        data-x="184"
        data-y="174"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Bradley')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M246.089 267.056L254.491 267.249L254.171 287.92L254.011 304.804L226.885 304.229H211.362L211.122 300.586L209.522 298.477L212.402 291.377L212.483 274.754L212.402 266.19L237.368 266.286L246.089 267.056Z"
        stroke={element.config.stroke}
        data-name="Drew"
        fill={assignColor('Drew')}
        data-x="246"
        data-y="267"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Drew')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M171.914 112.92L190.238 113.41H201.6L200.88 142.401L200.8 147.776L192.398 147.385L192.158 156.075L177.035 155.783L174.075 158.125L171.754 153.733L166.953 153.342L164.153 151.878L162.552 149.436L166.313 144.356L167.193 141.227L165.673 138.098L168.954 137.609L170.394 131.933L168.154 130.269L167.994 127.233L169.434 123.902L171.914 121.452V112.92Z"
        stroke={element.config.stroke}
        data-name="Faulkner"
        fill={assignColor('Faulkner')}
        data-x="171"
        data-y="112"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Faulkner')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M121.024 298.477L120.864 305.762L132.226 306.05L131.346 340.378L91.1782 340.187L91.8182 317.349L95.7392 317.445L96.2192 311.797L97.3392 307.679L101.34 299.532L112.702 299.819V298.477H121.024Z"
        stroke={element.config.stroke}
        data-name="Columbia"
        fill={assignColor('Columbia')}
        data-x="121"
        data-y="298"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Columbia')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M183.517 240.346L172.715 240.539L172.474 248.937L174.155 249.034L178.156 253.856L179.676 258.773L181.676 259.736L183.837 265.997L163.753 265.227L138.868 264.456L140.228 261.182L138.388 259.736L138.548 255.592L135.747 252.41L134.467 247.49L138.948 247.779L139.508 230.972L156.311 231.552L170.874 232.132L176.395 233.969L183.517 240.346Z"
        stroke={element.config.stroke}
        data-name="Dallas"
        fill={assignColor('Dallas')}
        data-x="183"
        data-y="240"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Dallas')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M347.71 80.2748L330.426 79.5848L316.263 79.7818L287.698 79.4868L287.938 62.0248L299.46 62.4198L302.421 53.9228L322.505 54.3178L339.628 54.1198L340.348 51.1538L347.39 50.9558L347.87 63.1118L347.71 80.2748Z"
        stroke={element.config.stroke}
        data-name="Craighead"
        fill={assignColor('Craighead')}
        data-x="347"
        data-y="80"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Craighead')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M74.7752 73.4729L73.7352 112.233L70.5342 113.312L65.8132 109.386L65.5732 118.315L57.0112 117.726L56.7712 126.547L48.0492 126.351V128.017L46.6892 129.388L43.8892 127.919L44.4492 105.361L47.1692 103.003L48.0492 98.5809L47.2492 97.1059L48.5302 92.5819L44.3692 92.4829L44.6092 83.9199L51.7302 84.1169L51.8102 79.8809L53.2512 77.1209H57.4112L57.4912 74.3609L57.5712 72.9799L74.7752 73.4729Z"
        stroke={element.config.stroke}
        data-name="Franklin"
        fill={assignColor('Franklin')}
        data-x="74"
        data-y="73"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Franklin')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M254.811 238.317L256.971 244.594L253.291 245.56L253.211 248.358H246.569L246.089 267.056L237.368 266.286L212.402 266.19L212.002 248.358H214.163V239.96V236.868L230.886 236.578L232.407 229.038L236.247 230.102L242.168 235.129L243.449 237.544L246.649 235.805L250.01 238.897L254.811 238.317Z"
        stroke={element.config.stroke}
        data-name="Lincoln"
        fill={assignColor('Lincoln')}
        data-x="254"
        data-y="238"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Lincoln')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M171.914 112.92V121.452L169.434 123.902L167.994 127.233L168.154 130.269L170.394 131.933L168.954 137.609L165.673 138.098L161.992 140.934L159.192 138.294L156.871 141.227L153.351 142.01L127.105 141.618L127.185 138.294L131.906 137.511L136.707 132.325L141.988 132.521L142.228 112.135L142.468 103.494L159.672 104.084L172.154 104.28L171.914 112.92Z"
        stroke={element.config.stroke}
        data-name="Conway"
        fill={assignColor('Conway')}
        data-x="171"
        data-y="112"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Conway')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M98.8598 174.013L98.2998 179.561L97.8988 207.635V213.161L92.1378 213.064L55.5708 212.191L55.9708 181.507L60.2918 181.605L61.0918 176.934L67.8928 176.447L73.5748 173.623L98.8598 174.013Z"
        stroke={element.config.stroke}
        data-name="Montgomery"
        fill={assignColor('Montgomery')}
        data-x="98"
        data-y="174"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Montgomery')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M355.071 30.6548L344.909 30.7538V25.0008H334.987L321.784 24.4048L306.181 24.3058V22.2218L310.422 22.8168L310.662 9.9028L308.742 8.2118L308.982 2.4418L308.102 1.3468L358.192 1.4468L359.552 8.8088L365.233 12.5868L364.033 18.8458L365.073 21.1298L361.392 24.4048L360.272 27.8778L355.071 30.6548Z"
        stroke={element.config.stroke}
        data-name="Clay"
        fill={assignColor('Clay')}
        data-x="355"
        data-y="30"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Clay')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M106.621 1.3468L106.381 38.6828L92.1381 38.2858L86.377 38.1868V35.3138L83.5771 35.2148L83.657 32.2408L80.7761 30.6548L80.936 24.8018L76.8551 20.4348L60.8521 20.2358V1.2478L106.621 1.3468Z"
        stroke={element.config.stroke}
        data-name="Carroll"
        fill={assignColor('Carroll')}
        data-x="106"
        data-y="1"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Carroll')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M44.4491 105.361L43.8891 127.919L46.6891 129.388L48.0491 128.017L47.8891 135.163L39.1681 134.967L39.0881 139.272L32.6861 141.227L32.0461 152.073L27.0051 153.538L21.6441 152.659L19.1641 154.514L14.6831 155.392L15.9631 109.779L17.8031 104.771L22.4441 107.325L22.6841 110.761L24.7651 113.999L29.2461 114.882L32.7661 114.195L37.8871 111.644L39.4881 109.288L37.7271 107.226L39.3281 104.869L44.4491 105.361Z"
        stroke={element.config.stroke}
        data-name="Sebastian"
        fill={assignColor('Sebastian')}
        data-x="44"
        data-y="105"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Sebastian')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M139.188 39.3759H143.589V43.7329L167.513 44.4259H177.515L177.435 53.1319L177.275 71.3029H160.232L159.992 78.5009L145.669 78.1069L134.387 77.8109L135.427 43.6339L134.867 39.2769L139.188 39.3759Z"
        stroke={element.config.stroke}
        data-name="Searcy"
        fill={assignColor('Searcy')}
        data-x="139"
        data-y="39"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Searcy')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M330.346 134.967L338.588 134.478L337.868 158.32L303.701 158.222L282.657 157.734L282.497 161.929L281.216 157.734L278.416 157.832V148.85L287.138 149.046L287.057 134.478L295.619 134.184L314.183 134.38L330.346 134.967Z"
        stroke={element.config.stroke}
        data-name="Saint Francis"
        fill={assignColor('Saint Francis')}
        data-x="330"
        data-y="134"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Saint Francis')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M233.447 56.3939L230.166 56.2949L222.485 63.8029L218.404 62.1239L212.883 56.9869L209.442 59.0619L207.522 56.4929L204.401 58.0739L201.76 55.6029L203.841 52.8349L203.121 48.5819L203.681 45.0199L201.52 44.4259L199.28 39.4749L196.959 40.4659L194.959 37.8899L193.359 37.3949L193.519 33.2329L197.68 33.4309L197.76 24.7029L219.684 25.3979L235.047 25.6949L236.487 30.2579L236.007 50.5609H233.527L233.447 56.3939Z"
        stroke={element.config.stroke}
        data-name="Izard"
        fill={assignColor('Izard')}
        data-x="233"
        data-y="56"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Izard')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M72.854 295.887L70.934 300.107L74.055 304.708L73.815 308.158L75.575 309.403L75.255 315.435L72.214 319.741L72.614 321.367L68.214 326.912L62.532 329.015L61.732 333.409L63.493 334.746L65.253 339.996H46.769L46.929 289.361L49.65 287.92L52.53 289.649L55.571 289.361L62.132 283.502L64.373 283.598L64.293 286.864L65.733 289.457L69.254 292.72L70.614 292.241L72.854 295.887Z"
        stroke={element.config.stroke}
        data-name="Miller"
        fill={assignColor('Miller')}
        data-x="72"
        data-y="295"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Miller')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M168.234 1.4468L167.834 12.1888L162.953 15.1708L164.793 18.6468L168.554 21.1298L169.034 24.3058L172.715 25.3978L171.914 31.3488L177.756 37.2958L177.515 44.4258H167.513L143.589 43.7328V39.3758H139.188L139.428 2.6408L142.148 1.3468L168.234 1.4468Z"
        stroke={element.config.stroke}
        data-name="Marion"
        fill={assignColor('Marion')}
        data-x="168"
        data-y="1"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Marion')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M193.759 198.32L193.519 223.813H191.918L192.078 240.153L183.517 240.346L176.395 233.969L170.874 232.132L156.311 231.552L156.951 205.986L160.552 204.822L163.273 202.009L178.076 202.3L178.156 198.029L190.798 198.32H193.759Z"
        stroke={element.config.stroke}
        data-name="Grant"
        fill={assignColor('Grant')}
        data-x="193"
        data-y="198"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Grant')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M347.71 80.2748L347.55 93.1718L347.79 106.048L330.506 105.852L304.741 105.361L287.538 105.655L287.378 89.6298L287.698 79.4868L316.263 79.7818L330.426 79.5848L347.71 80.2748Z"
        stroke={element.config.stroke}
        data-name="Poinsett"
        fill={assignColor('Poinsett')}
        data-x="347"
        data-y="80"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Poinsett')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M355.071 30.6548L352.751 32.7368L351.47 36.9988L347.31 39.2768L340.348 51.1538L339.628 54.1198L322.505 54.3178L302.421 53.9228L302.181 50.5608L304.821 43.1388L308.902 39.7718L310.742 36.0078L305.861 35.9088L306.181 24.3058L321.784 24.4048L334.987 25.0008H344.909V30.7538L355.071 30.6548Z"
        stroke={element.config.stroke}
        data-name="Greene"
        fill={assignColor('Greene')}
        data-x="355"
        data-y="30"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Greene')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M101.1 250.674L106.541 256.17L106.701 260.314L109.822 262.337L115.183 263.686L118.624 263.59L122.064 267.441L121.024 298.477H112.702V299.819L101.34 299.532L91.7378 299.244L91.8178 296.463L92.7778 262.915L93.5788 263.012L93.9788 249.999L101.1 250.674Z"
        stroke={element.config.stroke}
        data-name="Nevada"
        fill={assignColor('Nevada')}
        data-x="101"
        data-y="250"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Nevada')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M337.868 158.32L337.948 165.537L335.147 159.978L333.307 159.393L331.626 162.124L333.707 166.121L332.667 168.948L334.747 172.844L331.466 175.473L329.386 168.46L326.585 170.409L327.306 172.649L325.065 175.084L327.306 177.81L332.347 178.199L332.747 181.021L329.226 184.523L325.865 183.356L327.066 180.729L323.465 180.34L323.705 183.939H303.701L286.417 183.647L286.577 175.084L282.257 174.792L282.497 161.929L282.657 157.734L303.701 158.222L337.868 158.32Z"
        stroke={element.config.stroke}
        data-name="Lee"
        fill={assignColor('Lee')}
        data-x="337"
        data-y="158"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Lee')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M214.163 239.96V248.358H212.002L212.402 266.19L212.483 274.754L184.157 274.369L183.837 265.997L181.676 259.736L179.676 258.773L178.156 253.856L174.155 249.034L172.474 248.937L172.715 240.539L183.517 240.346L192.078 240.153L214.163 239.96Z"
        stroke={element.config.stroke}
        data-name="Cleveland"
        fill={assignColor('Cleveland')}
        data-x="214"
        data-y="239"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Cleveland')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M235.047 25.6948L219.684 25.3978L197.76 24.7028L198.08 1.3468L229.846 1.2478H254.651L254.411 17.5548L245.609 17.1568L245.369 25.8938L235.047 25.6948Z"
        stroke={element.config.stroke}
        data-name="Fulton"
        fill={assignColor('Fulton')}
        data-x="235"
        data-y="25"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Fulton')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M142.148 1.3468L139.428 2.6408L139.188 39.3758L134.867 39.2768L106.381 38.6828L106.621 1.3468H142.148Z"
        stroke={element.config.stroke}
        data-name="Boone"
        fill={assignColor('Boone')}
        data-x="142"
        data-y="1"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Boone')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M227.125 96.6139L226.805 104.28L222.485 106.146L222.324 113.901L201.6 113.41H190.238L190.558 98.8749L190.958 96.2209L191.278 79.0919L223.525 79.7819L227.446 78.6979L227.125 96.6139Z"
        stroke={element.config.stroke}
        data-name="Cleburne"
        fill={assignColor('Cleburne')}
        data-x="227"
        data-y="96"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Cleburne')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M330.506 105.852L330.106 131.542L330.346 134.967L314.183 134.38L295.619 134.184L287.057 134.478L287.298 114.293L287.538 105.655L304.741 105.361L330.506 105.852Z"
        stroke={element.config.stroke}
        data-name="Cross"
        fill={assignColor('Cross')}
        data-x="330"
        data-y="105"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Cross')}
        onMouseLeave={handleMouseLeave}
      />
      {present && renderTooltip()}
      {renderLabels()}
    </svg>
  );
};

MapArkansas.propTypes = ElementPropTypes;
MapArkansasPresent.propTypes = {
  element: PropTypes.object.isRequired,
};
MapArkansasContent.propTypes = {
  element: PropTypes.object.isRequired,
  present: PropTypes.bool,
};

export default MapArkansas;
