import { ElementPropTypes } from '@/lib/prop-types.js';
import useMapElement from '@/lib/design/use-map-element.jsx';
import PropTypes from 'prop-types';

const MapColorado = ({ element }) => {
  return <MapColoradoContent element={element} />;
};

export const MapColoradoPresent = ({ element }) => {
  return <MapColoradoContent element={element} />;
};

export const MapColoradoPreview = () => {
  return <MapColoradoContent element={{ config: { data: [], fill: '#f9fafb', stroke: '#f9fafb' } }} present={false} />;
};

export const MapColoradoContent = ({ element, present = true }) => {
  const { el, assignColor, renderLabels, handleMouseMove, handleMouseLeave, renderTooltip } = useMapElement(element);

  return (
    <svg
      style={{ width: element.width, height: element.height }}
      ref={el}
      width="100%"
      viewBox="0 0 400 295"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M284.573 240.727L284.63 247.032L321.77 247.175H340.312L340.539 265.833H340.085L339.802 293.023L287.578 293.165L269.206 293.449H229.401L223.163 293.236L222.369 272.394L224.864 272.037L230.194 267.83L235.581 264.976L237.906 265.547L245.391 264.191L248.68 261.621L249.02 258.192L251.231 257.906L252.592 255.618L256.448 252.472L256.505 249.824L262.459 239.579L268.016 234.772L284.573 240.727Z"
        stroke={element.config.stroke}
        data-name="Las Animas"
        fill={assignColor('Las Animas')}
        data-x="284"
        data-y="240"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Las Animas')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M95.5242 130.308L96.4882 134.481L97.8492 136.383L101.081 137.772L101.875 140.331H114.123L118.659 144.422L119.907 146.831L123.082 149.604L129.206 150.48L131.984 147.123L134.309 145.517L137.428 145.736L137.825 147.415L140.603 149.167L142.871 149.094L144.743 152.23L148.485 155.583L153.021 154.49L156.424 156.749L153.929 160.391L151.037 161.846L150.98 168.829L148.939 171.009L150.243 174.35L153.078 175.294L155.063 180.881L154.496 182.331L155.913 185.882H156.991L160.676 191.095L117.979 191.385V210.889L85.7152 211.105L85.9982 209.951L84.4672 203.385L81.9722 199.845L89.5142 199.773L89.5702 176.891L89.4572 173.333L89.5702 154.563L89.5142 132.944L93.1432 131.919L95.5242 130.308Z"
        stroke={element.config.stroke}
        data-name="Gunnison"
        fill={assignColor('Gunnison')}
        data-x="95"
        data-y="130"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Gunnison')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M312.074 0.735764L312.187 23.2998L311.734 36.6708L279.64 36.5958L279.47 69.0148L279.526 75.4588H233.483H228.21L228.096 56.1758V49.7078L234.447 49.6328V23.7488L234.561 1.03577L252.025 0.509766L255.768 0.735764L284.97 0.81076L312.074 0.735764Z"
        stroke={element.config.stroke}
        data-name="Weld"
        fill={assignColor('Weld')}
        data-x="312"
        data-y="0"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Weld')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M116.108 81.5247H111.458L111.571 94.6677L111.401 122.247H93.4261H37.9141L1.4541 122.173L1.5101 99.9747L10.4131 100.122V100.932L29.4081 101.227V98.0587L61.4461 98.2067L64.6781 98.1327V88.4697L78.5701 88.1007L93.4831 88.1747V81.5987L99.8341 81.7467L99.9471 68.7927H115.767L116.108 81.5247Z"
        stroke={element.config.stroke}
        data-name="Garfield"
        fill={assignColor('Garfield')}
        data-x="116"
        data-y="81"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Garfield')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M1.45413 122.173L37.9141 122.247H93.4261L91.4981 126.059L96.3751 128.843L95.5241 130.308L93.1431 131.919L89.5141 132.944L86.6791 136.529L84.8641 136.309L79.6471 141.5L74.4871 145.882L69.8941 143.253L66.9461 144.422L62.5801 144.714L58.2141 148.145L56.1721 151.647L52.5431 156.312L39.7281 161.701L39.7851 173.188L39.6721 185.375L23.5681 185.447H1.05713V172.825L1.39713 148.948L1.45413 122.173Z"
        stroke={element.config.stroke}
        data-name="Mesa"
        fill={assignColor('Mesa')}
        data-x="1"
        data-y="122"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Mesa')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M99.8339 0.735718L100.174 30.9227H96.9419L96.9989 35.1777H93.6529L93.4829 50.8977L92.9729 58.9987L92.9159 59.2957L55.2649 58.9987L23.2279 59.1477L1.56689 58.9987L1.62389 32.4907L1.67989 0.960716H39.7279L63.0899 0.735718H99.8339Z"
        stroke={element.config.stroke}
        data-name="Moffat"
        fill={assignColor('Moffat')}
        data-x="99"
        data-y="0"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Moffat')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M115.767 68.7928H99.9468L99.8338 81.7468L93.4828 81.5988V88.1748L78.5698 88.1008L64.6778 88.4698V98.1328L61.4458 98.2068L29.4078 98.0588V101.227L10.4128 100.932V100.122L1.50977 99.9748L1.56677 58.9988L23.2278 59.1478L55.2648 58.9988L92.9158 59.2958L92.9728 58.9988H115.767V68.7928Z"
        stroke={element.config.stroke}
        data-name="Rio Blanco"
        fill={assignColor('Rio Blanco')}
        data-x="115"
        data-y="68"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Rio Blanco')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M186.249 202.374L191.976 209.446L194.131 212.907V214.42L197.647 220.182L198.327 223.923L202.24 225.865L204.508 229.027L207.003 232.69L205.302 239.292L195.152 239.508L172.414 239.579L141.397 239.651L141.284 233.408L135.103 233.48V230.68L131.758 229.961L129.263 227.877L126.711 227.446L124.783 224.498L119.68 223.635L117.865 224.714L117.979 210.889V191.385L160.676 191.095L170.259 190.951L172.13 188.634L173.888 189.141L178.141 194.641L180.466 196.448L181.997 199.123L186.249 202.374Z"
        stroke={element.config.stroke}
        data-name="Saguache"
        fill={assignColor('Saguache')}
        data-x="186"
        data-y="202"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Saguache')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M336.003 107.557V139.819L335.492 146.247L335.379 171.517L334.925 177.326L334.982 183.635H315.816V184.215L309.976 183.78L284.913 183.708L285.083 173.842L284.856 158.716L303.909 158.861L303.739 146.101L304.135 139.746L304.249 107.63H304.589L336.003 107.557Z"
        stroke={element.config.stroke}
        data-name="Lincoln"
        fill={assignColor('Lincoln')}
        data-x="336"
        data-y="107"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Lincoln')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M234.561 1.03582L234.447 23.7488V49.6328L228.096 49.7078V56.1758L215.282 56.0278L208.307 56.3988L194.131 56.3248L192.77 55.5078L191.58 51.6418L187.043 47.8468L185.172 43.6778L185.682 40.9948L183.017 39.5038L181.543 36.8198L179.842 36.7448L179.729 33.8348L174.966 21.4298L171.337 14.8408L169.806 13.7168L167.367 9.21882L164.419 6.14182L163.455 1.03582L181.316 0.960815L214.885 1.03582H234.561Z"
        stroke={element.config.stroke}
        data-name="Larimer"
        fill={assignColor('Larimer')}
        data-x="234"
        data-y="1"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Larimer')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M125.577 0.65979L125.917 5.61679L128.752 8.01779L135.103 9.51879L137.315 12.0678L138.505 16.6388L136.974 18.4358L136.634 23.7488L134.82 29.0558L134.933 32.2678L136.748 35.9988L137.598 42.4108V50.2288H138.789L138.505 75.5328L139.016 81.0818V81.5248H116.108L115.767 68.7928V58.9988H92.9731L93.4831 50.8978L93.6531 35.1778H96.9991L96.9421 30.9228H100.174L99.8341 0.735794L125.577 0.65979Z"
        stroke={element.config.stroke}
        data-name="Routt"
        fill={assignColor('Routt')}
        data-x="124"
        data-y="0"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Routt')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M228.607 227.877L230.762 230.177L250.948 228.812L268.016 234.772L262.459 239.579L256.505 249.824L256.448 252.472L252.592 255.618L251.231 257.906L249.02 258.192L248.68 261.621L245.391 264.191L237.906 265.547L235.581 264.976L230.194 267.83L224.864 272.037L222.369 272.394L221.916 265.619L223.787 263.906L221.916 260.692L221.009 253.759L219.137 251.685L220.555 249.108L218.06 248.75L214.374 246.173L210.065 247.605L209.044 249.108L206.436 249.466L203.657 251.899L203.147 250.826L204.054 243.45L205.642 240.87L205.302 239.292L207.003 232.69L204.508 229.027L207.91 229.315L212.787 226.08L215.508 228.524L216.586 225.936L218.911 223.707L220.215 220.973L222.029 220.038L225.375 225.649L227.019 224.93L228.607 227.877Z"
        stroke={element.config.stroke}
        data-name="Huerfano"
        fill={assignColor('Huerfano')}
        data-x="228"
        data-y="227"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Huerfano')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M194.131 56.3248L192.884 60.7808L193.507 63.8978L195.832 66.5688L195.152 72.3488L192.6 74.5708L192.09 79.8978L193.054 80.7118L191.863 83.7428L192.26 86.5498L189.538 90.0938L186.023 90.2418L185.002 91.2008L181.316 90.5368L181.373 94.8888L179.048 97.9118L173.718 98.7218L171.337 95.5528L169.976 90.2418L167.311 87.1408L164.929 86.9928L160.506 82.0428L152.114 81.8948L149.959 81.0818H139.016L138.505 75.5328L138.789 50.2288H137.598V42.4108L140.093 47.5498L144.743 47.2518L146.784 45.1668L149.166 49.6328L151.774 50.0798L154.609 49.1868L157.104 51.1208L159.939 49.1868L161.243 51.3438L166.233 50.8978L173.038 48.0708L176.95 49.8568L177.971 47.1028L180.069 46.0608L180.522 41.1438L183.017 39.5038L185.682 40.9948L185.172 43.6778L187.043 47.8468L191.58 51.6418L192.77 55.5078L194.131 56.3248Z"
        stroke={element.config.stroke}
        data-name="Grand"
        fill={assignColor('Grand')}
        data-x="194"
        data-y="56"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Grand')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M357.21 43.0067L356.359 49.4847V75.3107H355.849L356.132 85.2197L356.019 107.336L336.003 107.557L304.589 107.63L304.646 94.8887L304.589 75.4587H318.084L317.914 62.7107L318.368 43.2307L327.894 43.3797L357.21 43.0067Z"
        stroke={element.config.stroke}
        data-name="Washington"
        fill={assignColor('Washington')}
        data-x="357"
        data-y="43"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Washington')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M89.457 173.333L89.57 176.891L89.514 199.773L81.972 199.845L82.199 197.75L53.961 197.605L55.549 198.978L56.569 203.096L62.239 203.601L64.734 205.695V209.014L63.147 210.528H41.259L2.134 210.456L1 201.507L1.057 185.447H23.568L39.672 185.375L39.785 173.188L65.245 173.333H89.457Z"
        stroke={element.config.stroke}
        data-name="Montrose"
        fill={assignColor('Montrose')}
        data-x="89"
        data-y="173"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Montrose')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M284.913 183.708L284.63 210.817L284.573 240.727L268.016 234.772L250.948 228.812L230.762 230.177L228.607 227.877L228.493 202.879L234.731 202.807L234.674 185.375L234.504 184.07L271.871 183.925L284.913 183.708Z"
        stroke={element.config.stroke}
        data-name="Pueblo"
        fill={assignColor('Pueblo')}
        data-x="284"
        data-y="183"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Pueblo')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M208.761 107.704L208.704 120.78L208.931 139.454H212.56L212.616 165.121L212.446 171.082L176.553 171.517L177.857 169.12L178.141 165.848L179.615 162.865L178.141 160.9L178.765 158.57L176.61 155.948L173.491 153.761L168.445 153.542V150.188L164.986 149.24L163.795 144.86L165.042 142.596L162.774 141.719L164.702 138.65L163.965 128.55L164.929 125.473L166.687 124.52L166.8 121.366L170.883 122.687L177.29 118.358L178.141 115.715L179.899 115.641L183.584 110.572L184.322 107.63L208.761 107.704Z"
        stroke={element.config.stroke}
        data-name="Park"
        fill={assignColor('Park')}
        data-x="208"
        data-y="107"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Park')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M62.9202 247.462L59.9712 250.969L59.1782 255.189L59.2342 259.978L56.9092 261.835L55.0952 265.904L50.5592 267.331L48.8582 269.399L49.1982 271.61L46.2492 276.455L44.7182 277.452L44.5482 282.078L42.3372 289.045L39.6152 293.094L1.90723 293.023L1.96423 258.978L9.33523 248.034L42.0532 247.605L62.9202 247.462Z"
        stroke={element.config.stroke}
        data-name="Montezuma"
        fill={assignColor('Montezuma')}
        data-x="62"
        data-y="247"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Montezuma')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M125.577 0.65979L156.083 0.735794L163.455 1.0358L164.419 6.14179L167.367 9.2188L169.806 13.7168L171.337 14.8408L174.966 21.4298L179.729 33.8348L179.842 36.7448L181.543 36.8198L183.017 39.5038L180.522 41.1438L180.069 46.0608L177.971 47.1028L176.95 49.8568L173.038 48.0708L166.233 50.8978L161.243 51.3438L159.939 49.1868L157.104 51.1208L154.609 49.1868L151.774 50.0798L149.166 49.6328L146.784 45.1668L144.743 47.2518L140.093 47.5498L137.598 42.4108L136.748 35.9988L134.933 32.2678L134.82 29.0558L136.634 23.7488L136.974 18.4358L138.505 16.6388L137.315 12.0678L135.103 9.51879L128.752 8.01779L125.917 5.61679L125.577 0.65979Z"
        stroke={element.config.stroke}
        data-name="Jackson"
        fill={assignColor('Jackson')}
        data-x="125"
        data-y="0"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Jackson')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M398.943 247.104V265.333L399 293.52L374.277 293.236H361.576L356.813 293.023H339.802L340.085 265.833H340.539L340.312 247.175L359.138 247.104H398.943Z"
        stroke={element.config.stroke}
        data-name="Baca"
        fill={assignColor('Baca')}
        data-x="398"
        data-y="247"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Baca')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M304.249 107.63L304.135 139.746L303.739 146.101L303.909 158.861L284.856 158.716L285.026 139.819L250.324 139.454L250.381 107.557L261.098 107.777L304.249 107.63Z"
        stroke={element.config.stroke}
        data-name="Elbert"
        fill={assignColor('Elbert')}
        data-x="304"
        data-y="107"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Elbert')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M398.603 42.8578V75.2368L398.66 106.968L368.04 107.483L356.019 107.336L356.132 85.2198L355.849 75.3108H356.359V49.4848L357.21 43.0068H363.787L398.603 42.8578Z"
        stroke={element.config.stroke}
        data-name="Yuma"
        fill={assignColor('Yuma')}
        data-x="398"
        data-y="42"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Yuma')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M250.324 139.454L285.026 139.819L284.856 158.716L285.083 173.842L284.913 183.708L271.871 183.925L234.504 184.07V174.713L234.731 163.957H227.473V158.716H229.571L229.798 146.028L229.457 139.454H250.324Z"
        stroke={element.config.stroke}
        data-name="El Paso"
        fill={assignColor('El Paso')}
        data-x="250"
        data-y="139"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'El Paso')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M398.66 106.968L398.773 145.663L385.675 145.736L369.798 146.101L335.492 146.247L336.003 139.819V107.557L356.019 107.336L368.04 107.483L398.66 106.968Z"
        stroke={element.config.stroke}
        data-name="Kit Carson"
        fill={assignColor('Kit Carson')}
        data-x="398"
        data-y="106"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Kit Carson')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M62.9202 247.462L90.4782 247.533L90.6482 262.835L90.7612 293.023L63.1472 293.165L39.6152 293.094L42.3372 289.045L44.5482 282.078L44.7182 277.452L46.2492 276.455L49.1982 271.61L48.8582 269.399L50.5592 267.331L55.0952 265.904L56.9092 261.835L59.2342 259.978L59.1782 255.189L59.9712 250.969L62.9202 247.462Z"
        stroke={element.config.stroke}
        data-name="La Plata"
        fill={assignColor('La Plata')}
        data-x="62"
        data-y="247"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'La Plata')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M162.718 121.22L158.295 123.2L154.836 122.98L151.774 121.22L150.98 122.247L134.139 122.54L111.401 122.247L111.571 94.6678L111.458 81.5248H116.108H139.016V81.0818H149.959L150.13 85.0728L153.702 93.7828L155.233 94.0038L158.068 97.3958L159.656 97.6908L161.357 100.638L164.079 101.374L164.475 104.54L162.434 106.159L160.96 108.881L160.336 114.76L161.867 117.404L162.718 121.22Z"
        stroke={element.config.stroke}
        data-name="Eagle"
        fill={assignColor('Eagle')}
        data-x="162"
        data-y="121"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Eagle')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M364.298 0.735718L364.468 19.7837L363.731 23.0007L363.787 43.0067H357.21L327.894 43.3797L318.368 43.2307L318.311 36.7447L311.734 36.6707L312.187 23.2997L312.074 0.735718H345.529H364.298Z"
        stroke={element.config.stroke}
        data-name="Logan"
        fill={assignColor('Logan')}
        data-x="364"
        data-y="0"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Logan')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M398.83 177.108L398.887 202.157L378.927 202.301L359.364 202.374H322.167H316.327L315.93 196.882L315.816 184.215V183.635H334.982L334.925 177.326L338.554 177.181L376.375 177.253L398.83 177.108Z"
        stroke={element.config.stroke}
        data-name="Kiowa"
        fill={assignColor('Kiowa')}
        data-x="398"
        data-y="177"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Kiowa')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M63.147 210.528L64.054 213.267H67.343L67.003 217.446L67.967 221.045L72.106 222.412L75.565 225.146L76.132 228.38L73.75 231.47L72.9 234.126L68.987 237.786L64.734 233.624L61.843 232.188L59.404 232.116L49.368 234.126L46.589 228.955L14.949 229.027L14.722 230.105H2.021L2.134 210.456L41.259 210.528H63.147Z"
        stroke={element.config.stroke}
        data-name="San Miguel"
        fill={assignColor('San Miguel')}
        data-x="63"
        data-y="210"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'San Miguel')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M68.9869 237.786L68.2499 241.802L63.0899 243.45L62.9199 247.462L42.0529 247.605L9.33487 248.034L1.96387 258.978L2.02087 230.105H14.7219L14.9489 229.027L46.5889 228.955L49.3679 234.126L59.4039 232.116L61.8429 232.188L64.7339 233.624L68.9869 237.786Z"
        stroke={element.config.stroke}
        data-name="Dolores"
        fill={assignColor('Dolores')}
        data-x="68"
        data-y="237"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Dolores')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M398.773 145.663L398.83 177.108L376.375 177.253L338.554 177.181L334.925 177.326L335.379 171.517L335.492 146.247L369.798 146.101L385.675 145.736L398.773 145.663Z"
        stroke={element.config.stroke}
        data-name="Cheyenne"
        fill={assignColor('Cheyenne')}
        data-x="398"
        data-y="145"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Cheyenne')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M89.514 132.944L89.57 154.563L89.457 173.333H65.245L39.785 173.188L39.728 161.701L52.543 156.312L56.172 151.647L58.214 148.145L62.58 144.714L66.946 144.422L69.894 143.253L74.487 145.882L79.647 141.5L84.864 136.309L86.679 136.529L89.514 132.944Z"
        stroke={element.config.stroke}
        data-name="Delta"
        fill={assignColor('Delta')}
        data-x="89"
        data-y="132"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Delta')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M234.504 174.713V184.07L234.674 185.375L234.731 202.807L228.493 202.879L216.132 202.807L192.827 202.301L186.249 202.374L181.997 199.123L180.466 196.448L178.141 194.641L173.888 189.141L177.914 185.375L179.615 185.085L179.785 182.331L181.089 180.59V176.818L179.615 175.874L178.708 172.825L176.553 171.517L212.446 171.082L217.72 171.154V174.786L234.504 174.713Z"
        stroke={element.config.stroke}
        data-name="Fremont"
        fill={assignColor('Fremont')}
        data-x="234"
        data-y="174"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Fremont')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M176.553 171.517L178.708 172.825L179.615 175.874L181.089 176.818V180.59L179.785 182.331L179.615 185.085L177.914 185.375L173.888 189.141L172.13 188.634L170.259 190.951L160.676 191.095L156.991 185.882H155.913L154.496 182.331L155.063 180.881L153.078 175.294L150.243 174.35L148.939 171.009L150.98 168.829L151.037 161.846L153.929 160.391L156.424 156.749L153.021 154.49L148.485 155.583L144.743 152.23L142.871 149.094L140.603 149.167L140.773 145.736L141.908 144.86H163.795L164.986 149.24L168.445 150.188V153.542L173.491 153.761L176.61 155.948L178.765 158.57L178.141 160.9L179.615 162.865L178.141 165.848L177.857 169.12L176.553 171.517Z"
        stroke={element.config.stroke}
        data-name="Chaffee"
        fill={assignColor('Chaffee')}
        data-x="175"
        data-y="171"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Chaffee')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M398.887 202.157L398.943 247.104H359.138L359.024 234.27H359.421L359.364 202.374L378.927 202.301L398.887 202.157Z"
        stroke={element.config.stroke}
        data-name="Prowers"
        fill={assignColor('Prowers')}
        data-x="398"
        data-y="202"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Prowers')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M117.865 224.714L114.123 224.57L110.097 225.936L109.643 244.74L111.061 244.812L110.834 262.977L90.6482 262.835L90.4782 247.533L90.4212 238.36L91.8952 236.423L90.4782 234.27L88.8332 233.911L87.6432 230.464L88.3232 228.883L87.6992 225.721L84.6372 223.635L87.0192 221.405L89.0602 217.014L85.9412 214.565L85.7152 211.105L117.979 210.889L117.865 224.714Z"
        stroke={element.config.stroke}
        data-name="Hinsdale"
        fill={assignColor('Hinsdale')}
        data-x="117"
        data-y="224"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Hinsdale')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M110.834 262.977L110.891 265.048L134.423 264.833L136.294 264.762L136.237 276.597L140.887 279.089L141.227 282.149L145.707 290.75L146.614 293.378L125.123 293.52L124.726 293.023H90.7609L90.6479 262.835L110.834 262.977Z"
        stroke={element.config.stroke}
        data-name="Archuleta"
        fill={assignColor('Archuleta')}
        data-x="110"
        data-y="262"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Archuleta')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M222.369 272.394L223.163 293.236L190.502 293.165L187.951 290.892L187.724 288.264L189.141 285.705L189.652 282.007L189.198 276.383L190.332 272.394L188.234 267.688H189.085L200.255 255.904L203.657 251.899L206.436 249.466L209.044 249.108L210.065 247.605L214.374 246.173L218.06 248.75L220.555 249.108L219.137 251.685L221.009 253.759L221.916 260.692L223.787 263.906L221.916 265.619L222.369 272.394Z"
        stroke={element.config.stroke}
        data-name="Costilla"
        fill={assignColor('Costilla')}
        data-x="222"
        data-y="272"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Costilla')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M359.364 202.374L359.421 234.27H359.024L359.138 247.104L340.312 247.175H321.77L322.167 215.429V202.374H359.364Z"
        stroke={element.config.stroke}
        data-name="Bent"
        fill={assignColor('Bent')}
        data-x="359"
        data-y="303"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Bent')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M316.327 202.374H322.167V215.429L321.77 247.175L284.63 247.032L284.573 240.727L284.63 210.817L288.429 211.033L291.774 212.475L293.078 211.826L297.274 213.34H309.636V209.158L315.816 209.086L316.327 202.374Z"
        stroke={element.config.stroke}
        data-name="Otero"
        fill={assignColor('Otero')}
        data-x="316"
        data-y="202"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Otero')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M111.401 122.247L134.139 122.54L150.98 122.247L150.186 125.693L146.444 126.792L147.294 130.015L146.671 134.334L145.253 137.48L142.701 137.991V141.208L141.397 142.011L141.908 144.86L140.773 145.736L140.603 149.167L137.825 147.415L137.428 145.736L134.309 145.517L131.984 147.123L129.206 150.48L123.082 149.604L119.907 146.831L118.659 144.422L114.123 140.331H101.875L101.081 137.772L97.849 136.383L96.488 134.481L95.524 130.308L96.375 128.843L91.498 126.059L93.426 122.247H111.401Z"
        stroke={element.config.stroke}
        data-name="Pitkin"
        fill={assignColor('Pitkin')}
        data-x="111"
        data-y="122"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Pitkin')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M188.234 267.688L190.332 272.394L189.198 276.383L189.652 282.007L189.141 285.705L187.724 288.264L187.951 290.892L190.502 293.165L163.115 293.307L146.614 293.378L145.707 290.75L141.227 282.149L140.887 279.089L136.237 276.597L136.294 264.762L172.414 264.477V267.688H188.234Z"
        stroke={element.config.stroke}
        data-name="Conejos"
        fill={assignColor('Conejos')}
        data-x="188"
        data-y="267"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Conejos')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M179.048 97.9118L179.502 100.417L182.053 100.27L183.358 101.816L186.873 102.994L187.327 104.614L184.322 107.63L183.584 110.572L179.899 115.641L178.141 115.715L177.29 118.358L170.883 122.687L166.8 121.366L162.718 121.22L161.867 117.404L160.336 114.76L160.96 108.881L162.434 106.159L164.475 104.54L164.079 101.374L161.357 100.638L159.656 97.6908L158.068 97.3958L155.233 94.0038L153.702 93.7828L150.13 85.0728L149.959 81.0818L152.114 81.8948L160.506 82.0428L164.929 86.9928L167.311 87.1408L169.976 90.2418L171.337 95.5528L173.718 98.7218L179.048 97.9118Z"
        stroke={element.config.stroke}
        data-name="Summit"
        fill={assignColor('Summit')}
        data-x="179"
        data-y="97"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Summit')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M318.368 43.2307L317.914 62.7107L318.084 75.4587H304.589H279.526L279.47 69.0147L279.64 36.5957L311.734 36.6707L318.311 36.7447L318.368 43.2307Z"
        stroke={element.config.stroke}
        data-name="Morgan"
        fill={assignColor('Morgan')}
        data-x="318"
        data-y="43"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Morgan')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M279.526 75.4587H304.589L304.646 94.8887L266.655 94.9627L237.736 94.7417L239.437 92.6027H246.355V90.4627L244.767 88.6177L252.876 88.4697L252.932 84.8507L251.969 82.4117L246.525 83.0037L246.412 87.0667L243.066 87.1407L243.123 90.3887H236.715L235.411 91.1267H228.323L228.267 81.8947L230.421 81.3767V76.9387L233.483 75.4587H279.526Z"
        stroke={element.config.stroke}
        data-name="Adams"
        fill={assignColor('Adams')}
        data-x="279"
        data-y="75"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Adams')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M172.414 239.579V264.477L136.294 264.762L134.423 264.833L134.139 245.743H135.33L135.103 233.48L141.284 233.408L141.397 239.651L172.414 239.579Z"
        stroke={element.config.stroke}
        data-name="Rio Grande"
        fill={assignColor('Rio Grande')}
        data-x="172"
        data-y="239"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Rio Grande')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M250.381 107.557L250.324 139.454H229.457H212.957L213.864 137.26L218.457 130.894L221.859 122.687V119.385L224.241 117.257L223.844 114.613L226.339 113.217L227.189 109.469L228.72 107.557H250.381Z"
        stroke={element.config.stroke}
        data-name="Douglas"
        fill={assignColor('Douglas')}
        data-x="250"
        data-y="107"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Douglas')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M228.607 227.877L227.019 224.93L225.375 225.649L222.029 220.038L220.215 220.973L218.911 223.707L216.586 225.936L215.508 228.524L212.787 226.08L207.91 229.315L204.508 229.027L202.24 225.865L198.327 223.923L197.647 220.182L194.131 214.42V212.907L191.976 209.446L186.249 202.374L192.827 202.301L216.132 202.807L228.493 202.879L228.607 227.877Z"
        stroke={element.config.stroke}
        data-name="Custer"
        fill={assignColor('Custer')}
        data-x="228"
        data-y="227"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Custer')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M228.267 81.8948L228.323 91.1268V100.122L225.261 102.626V104.319H228.323L228.72 107.557L227.189 109.469L226.339 113.217L223.844 114.613L224.241 117.257L221.859 119.385V122.687L218.457 130.894L213.864 137.26L212.957 139.454H212.56H208.931L208.704 120.78L208.761 107.704L208.874 94.0038L208.761 82.0428L222.653 81.9688L228.267 81.8948Z"
        stroke={element.config.stroke}
        data-name="Jefferson"
        fill={assignColor('Jefferson')}
        data-x="228"
        data-y="81"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Jefferson')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M81.9719 199.845L84.4669 203.385L85.9979 209.951L85.7149 211.105L85.9409 214.565L89.0599 217.014L87.0189 221.405L84.6369 223.635L81.5189 225.146L81.4619 227.59L78.5129 229.243L76.1319 228.38L75.5649 225.146L72.1059 222.412L67.9669 221.045L67.0029 217.446L67.3429 213.267H64.0539L63.1469 210.528L64.7339 209.014V205.695L62.2389 203.601L56.5689 203.096L55.5489 198.978L53.9609 197.605L82.1989 197.75L81.9719 199.845Z"
        stroke={element.config.stroke}
        data-name="Ouray"
        fill={assignColor('Ouray')}
        data-x="81"
        data-y="199"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Ouray')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M135.103 233.48L135.33 245.743H134.139L134.423 264.833L110.891 265.048L110.834 262.977L111.061 244.812L109.643 244.74L110.097 225.936L114.123 224.57L117.865 224.714L119.68 223.635L124.783 224.498L126.711 227.446L129.263 227.877L131.758 229.961L135.103 230.68V233.48Z"
        stroke={element.config.stroke}
        data-name="Mineral"
        fill={assignColor('Mineral')}
        data-x="135"
        data-y="233"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Mineral')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M304.646 94.8888L304.589 107.63H304.249L261.098 107.777L250.381 107.557H228.72L228.323 104.319L230.365 100.196H232.406L236.262 103.289L237.793 98.2068L237.736 94.7418L266.655 94.9628L304.646 94.8888Z"
        stroke={element.config.stroke}
        data-name="Arapahoe"
        fill={assignColor('Arapahoe')}
        data-x="304"
        data-y="94"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Arapahoe')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M205.302 239.292L205.642 240.87L204.054 243.45L203.147 250.826L203.657 251.899L200.255 255.904L189.085 267.688H188.234H172.414V264.477V239.579L195.152 239.508L205.302 239.292Z"
        stroke={element.config.stroke}
        data-name="Alamosa"
        fill={assignColor('Alamosa')}
        data-x="205"
        data-y="239"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Alamosa')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M315.816 184.215L315.93 196.882L316.327 202.374L315.816 209.086L309.636 209.158V213.34H297.274L293.078 211.826L291.774 212.475L288.429 211.033L284.63 210.817L284.913 183.708L309.976 183.78L315.816 184.215Z"
        stroke={element.config.stroke}
        data-name="Crowley"
        fill={assignColor('Crowley')}
        data-x="315"
        data-y="184"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Crowley')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M228.096 56.1757L228.21 75.4587L228.267 78.6407L226.225 80.2677L223.447 79.9717L222.653 81.9687L208.761 82.0427V80.4897L193.054 80.7117L192.09 79.8977L192.6 74.5707L195.152 72.3487L195.832 66.5687L193.507 63.8977L192.884 60.7807L194.131 56.3247L208.307 56.3987L215.282 56.0277L228.096 56.1757Z"
        stroke={element.config.stroke}
        data-name="Boulder"
        fill={assignColor('Boulder')}
        data-x="228"
        data-y="56"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Boulder')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M398.546 19.7838L398.603 42.8578L363.787 43.0068L363.731 23.0008L364.468 19.7838L377.736 19.8578L398.546 19.7838Z"
        stroke={element.config.stroke}
        data-name="Phillips"
        fill={assignColor('Phillips')}
        data-x="398"
        data-y="19"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Phillips')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M229.457 139.454L229.798 146.028L229.571 158.716H227.473V163.957H234.731L234.504 174.713L217.72 174.786V171.154L212.446 171.082L212.616 165.121L212.56 139.454H212.957H229.457Z"
        stroke={element.config.stroke}
        data-name="Teller"
        fill={assignColor('Teller')}
        data-x="229"
        data-y="139"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Teller')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M90.4779 247.533L62.9199 247.462L63.0899 243.45L68.2499 241.802L68.9869 237.786L72.8999 234.126L73.7499 231.47L76.1319 228.38L78.5129 229.243L81.4619 227.59L81.5189 225.146L84.6369 223.635L87.6989 225.721L88.3229 228.883L87.6429 230.464L88.8329 233.911L90.4779 234.27L91.8949 236.423L90.4209 238.36L90.4779 247.533Z"
        stroke={element.config.stroke}
        data-name="San Juan"
        fill={assignColor('San Juan')}
        data-x="90"
        data-y="247"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'San Juan')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M364.468 19.7837L364.298 0.735718L398.546 0.810715V19.7837L377.736 19.8577L364.468 19.7837Z"
        stroke={element.config.stroke}
        data-name="Sedgwick"
        fill={assignColor('Sedgwick')}
        data-x="364"
        data-y="19"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Sedgwick')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M208.874 94.0038L208.761 107.704L184.322 107.63L187.327 104.614L186.873 102.994L183.358 101.816L182.053 100.27L179.502 100.417L179.048 97.9118L181.373 94.8888L181.316 90.5368L185.002 91.2008L186.023 90.2418L189.538 90.0938L192.26 86.5498L195.379 87.2148L200.312 91.4228L203.771 93.4878L208.874 94.0038Z"
        stroke={element.config.stroke}
        data-name="Clear Creek"
        fill={assignColor('Clear Creek')}
        data-x="208"
        data-y="94"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Clear Creek')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M237.736 94.7417L237.793 98.2067L236.262 103.289L232.406 100.196H230.365L228.323 104.319H225.261V102.626L228.323 100.122V91.1267H235.411L236.715 90.3887H243.123L243.066 87.1407L246.412 87.0667L246.525 83.0037L251.969 82.4117L252.932 84.8507L252.876 88.4697L244.767 88.6177L246.355 90.4627V92.6027H239.437L237.736 94.7417Z"
        stroke={element.config.stroke}
        data-name="Denver"
        fill={assignColor('Denver')}
        data-x="237"
        data-y="94"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Denver')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M162.718 121.22L166.8 121.366L166.687 124.52L164.929 125.473L163.965 128.55L164.702 138.65L162.774 141.719L165.042 142.596L163.795 144.86H141.908L141.397 142.011L142.701 141.208V137.991L145.253 137.48L146.671 134.334L147.294 130.015L146.444 126.792L150.186 125.693L150.98 122.247L151.774 121.22L154.836 122.98L158.295 123.2L162.718 121.22Z"
        stroke={element.config.stroke}
        data-name="Lake"
        fill={assignColor('Lake')}
        data-x="162"
        data-y="121"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Lake')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M208.761 82.0427L208.874 94.0037L203.771 93.4877L200.312 91.4227L195.379 87.2147L192.26 86.5497L191.863 83.7427L193.054 80.7117L208.761 80.4897V82.0427Z"
        stroke={element.config.stroke}
        data-name="Gilpin"
        fill={assignColor('Gilpin')}
        data-x="208"
        data-y="82"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Gilpin')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M233.483 75.4587L230.421 76.9387V81.3767L228.267 81.8947L222.653 81.9687L223.447 79.9717L226.225 80.2677L228.267 78.6407L228.21 75.4587H233.483Z"
        stroke={element.config.stroke}
        data-name="Broomfield"
        fill={assignColor('Broomfield')}
        data-x="233"
        data-y="75"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Broomfield')}
        onMouseLeave={handleMouseLeave}
      />
      {present && renderTooltip()}
      {renderLabels()}
    </svg>
  );
};

MapColorado.propTypes = ElementPropTypes;
MapColoradoPresent.propTypes = {
  element: PropTypes.object.isRequired,
};
MapColoradoContent.propTypes = {
  element: PropTypes.object.isRequired,
  present: PropTypes.bool,
};

export default MapColorado;
