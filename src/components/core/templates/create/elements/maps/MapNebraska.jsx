import { ElementPropTypes } from '@/lib/prop-types.js';
import useMapElement from '@/lib/design/use-map-element.jsx';
import PropTypes from 'prop-types';

const MapNebraska = ({ element }) => {
  return <MapNebraskaContent element={element} />;
};

export const MapNebraskaPresent = ({ element }) => {
  return <MapNebraskaContent element={element} />;
};

export const MapNebraskaPreview = () => {
  return <MapNebraskaContent element={{ config: { data: [], fill: '#f9fafb', stroke: '#f9fafb' } }} />;
};

export const MapNebraskaContent = ({ element }) => {
  const { el, assignColor, renderLabels } = useMapElement(element);

  return (
    <svg ref={el} width="100%" viewBox="0 0 401 184" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M176.448 0.95018L176.402 10.3352L177.085 14.2432V35.8242L177.813 35.7632L177.859 57.1022L173.262 57.1632L147.047 56.9792L120.605 56.7342L103.401 56.7952L94.1619 56.6112H92.6609L92.6149 35.1462H91.3859V13.9952L90.5669 14.0572L90.6579 0.888184L109.136 1.07419H129.571H151.28L176.448 0.95018Z"
        stroke={element.config.stroke}
        data-name="Cherry"
        fill={assignColor('Cherry')}
        data-x="176"
        data-y="0"
      />
      <path
        d="M94.1621 56.6112L94.0711 62.0052L91.3861 61.9442L78.1881 62.1272L63.7151 62.1892H62.6231L62.4411 56.8562H60.6201L60.3021 35.5162L59.2091 35.4542L59.1181 14.0572H58.2991L58.4811 0.763184L90.6581 0.888184L90.5671 14.0572L91.3861 13.9952V35.1462H92.6151L92.6611 56.6112H94.1621Z"
        stroke={element.config.stroke}
        data-name="Sheridan"
        fill={assignColor('Sheridan')}
        data-x="94"
        data-y="56"
      />
      <path
        d="M262.601 15.4833L262.829 35.6393V57.0403L241.848 57.1633H220.958H220.366V35.9483H219.957L219.866 14.3053L219.365 12.8793L223.689 10.7693L228.331 9.34126L230.516 7.72726L233.064 7.41626L236.023 10.4593L238.253 10.3353L244.078 13.0033L247.264 12.8793L249.767 14.3673L255.866 15.1733L260.462 14.8013L262.601 15.4833Z"
        stroke={element.config.stroke}
        data-name="Holt"
        fill={assignColor('Holt')}
        data-x="262"
        data-y="15"
      />
      <path
        d="M153.009 99.433L174.036 99.372L174.718 99.554L174.582 120.368H175.355V141.194L150.005 141.314L128.751 141.494L128.66 122.962L127.705 120.308L127.659 99.311L153.009 99.433Z"
        stroke={element.config.stroke}
        data-name="Lincoln"
        fill={assignColor('Lincoln')}
        data-x="153"
        data-y="99"
      />
      <path
        d="M199.841 78.3242L220.913 78.3852H221.186L221.413 99.4332H221.823L221.504 120.368L211.628 120.428H196.109L175.355 120.368H174.582L174.718 99.5542L174.036 99.3722V78.3242H199.841Z"
        stroke={element.config.stroke}
        data-name="Custer"
        fill={assignColor('Custer')}
        data-x="199"
        data-y="78"
      />
      <path
        d="M25.895 0.701157L26.213 14.0572H27.124L27.169 35.5782L28.717 35.5162L28.626 56.9792H30.674L30.765 62.2502L1.046 62.3721V24.7711L1 0.577148L25.895 0.701157Z"
        stroke={element.config.stroke}
        data-name="Sioux"
        fill={assignColor('Sioux')}
        data-x="25"
        data-y="0"
      />
      <path
        d="M95.027 78.2631L95.118 99.3721L91.932 99.4331L91.887 109.914H66.673L66.764 99.3721L65.354 96.7621L65.49 78.2631L64.17 78.3241L63.533 72.8311L63.715 62.1891L78.188 62.1271L91.386 61.9441L91.341 78.2021L95.027 78.2631Z"
        stroke={element.config.stroke}
        data-name="Garden"
        fill={assignColor('Garden')}
        data-x="95"
        data-y="78"
      />
      <path
        d="M63.715 62.1892L63.533 72.8312L64.17 78.3242L65.49 78.2632L65.354 96.7622L32.085 96.8842L32.176 80.8852L32.494 78.1412V62.2502L57.344 62.3112L62.623 62.1892H63.715Z"
        stroke={element.config.stroke}
        data-name="Morrill"
        fill={assignColor('Morrill')}
        data-x="63"
        data-y="62"
      />
      <path
        d="M58.481 0.763168L58.299 14.0572H59.118L59.209 35.4542L37.91 35.5782L28.717 35.5162L27.169 35.5782L27.124 14.0572H26.213L25.895 0.701172L38.502 0.763168H58.481Z"
        stroke={element.config.stroke}
        data-name="Dawes"
        fill={assignColor('Dawes')}
        data-x="58"
        data-y="0"
      />
      <path
        d="M200.114 17.5282L200.25 35.8862H200.796V57.2242H199.841L177.859 57.1022L177.813 35.7632L177.085 35.8242V14.2432L176.402 10.3352L179.315 12.7552L182 13.8092L186.142 14.2432L195.153 16.9712L200.114 17.5282Z"
        stroke={element.config.stroke}
        data-name="Brown"
        fill={assignColor('Brown')}
        data-x="200"
        data-y="17"
      />
      <path
        d="M299.966 8.96912L299.875 35.4541H283.992L262.829 35.6391L262.601 15.4831L262.374 8.09912L265.469 9.09312L270.702 11.9481L273.934 14.9871L275.936 15.5451L279.122 14.6771L284.356 8.90712L285.949 10.7071L289.772 9.52812L290.955 11.1411L293.14 9.46512L295.142 10.5831L299.966 8.96912Z"
        stroke={element.config.stroke}
        data-name="Knox"
        fill={assignColor('Knox')}
        data-x="299"
        data-y="8"
      />
      <path
        d="M284.31 112.817L281.398 116.504L275.618 119.282L272.568 122.6L270.475 123.505L263.603 130.975L263.466 120.428L263.421 99.3721L263.967 107.312L271.84 107.372L274.025 105.495L281.17 105.676L281.125 104.647L289.908 104.525V99.3721H294.778L294.824 103.132L292.184 104.586L287.132 109.067L284.31 112.817Z"
        stroke={element.config.stroke}
        data-name="Merrick"
        fill={assignColor('Merrick')}
        data-x="284"
        data-y="112"
      />
      <path
        d="M66.6731 109.914L66.7191 120.368L66.2181 123.083H31.4021L31.7201 120.428V99.4932L32.0851 96.8842L65.3541 96.7622L66.7641 99.3722L66.6731 109.914Z"
        stroke={element.config.stroke}
        data-name="Cheyenne"
        fill={assignColor('Cheyenne')}
        data-x="66"
        data-y="109"
      />
      <path
        d="M62.623 62.1891L57.344 62.3111L32.494 62.2501H30.765L30.674 56.9791H28.626L28.717 35.5161L37.91 35.5781L59.209 35.4541L60.302 35.5161L60.62 56.8561H62.441L62.623 62.1891Z"
        stroke={element.config.stroke}
        data-name="Box Butte"
        fill={assignColor('Box Butte')}
        data-x="62"
        data-y="62"
      />
      <path
        d="M219.365 12.8792L219.866 14.3051L219.957 35.9482H220.366V57.1631L200.796 57.2242V35.8862H200.25L200.114 17.5282L206.758 18.1481L208.989 17.4671L212.447 14.8632L215.952 14.3051L219.365 12.8792Z"
        stroke={element.config.stroke}
        data-name="Rock"
        fill={assignColor('Rock')}
        data-x="219"
        data-y="12"
      />
      <path
        d="M127.659 99.311L127.705 120.308L128.66 122.962L123.472 123.022H92.16L91.887 109.914L91.932 99.433L95.118 99.372H121.515L127.659 99.311Z"
        stroke={element.config.stroke}
        data-name="Keith"
        fill={assignColor('Keith')}
        data-x="127"
        data-y="99"
      />
      <path
        d="M175.355 120.368L196.109 120.428H211.628L211.537 141.314L211.992 143.174L201.707 142.214L199.021 141.314H186.278L175.355 141.194V120.368Z"
        stroke={element.config.stroke}
        data-name="Dawson"
        fill={assignColor('Dawson')}
        data-x="175"
        data-y="120"
      />
      <path
        d="M181.226 162.21L176.539 162.27L151.007 162.33H150.142L149.778 142.154L150.005 141.314L175.355 141.194L186.278 141.314V156.951L181.135 157.071L181.226 162.21Z"
        stroke={element.config.stroke}
        data-name="Frontier"
        fill={assignColor('Frontier')}
        data-x="181"
        data-y="162"
      />
      <path
        d="M346.388 151.925L346.434 167.462L346.388 182.939L321.949 182.999L325.726 182.939L325.817 162.27L325.999 151.925H346.388Z"
        stroke={element.config.stroke}
        data-name="Gage"
        fill={assignColor('Gage')}
        data-x="346"
        data-y="151"
      />
      <path
        d="M242.44 120.368L243.577 120.428L243.623 141.314L243.441 141.974L238.662 142.814L235.385 144.074L231.653 143.714L227.785 144.134L222.824 143.774L211.992 143.174L211.537 141.314L211.628 120.428L221.504 120.368H242.44Z"
        stroke={element.config.stroke}
        data-name="Buffalo"
        fill={assignColor('Buffalo')}
        data-x="242"
        data-y="120"
      />
      <path
        d="M31.72 99.4931V120.428L31.402 123.083L1 123.143L1.046 99.3721L16.383 99.4931H31.72Z"
        stroke={element.config.stroke}
        data-name="Kimball"
        fill={assignColor('Kimball')}
        data-x="31"
        data-y="99"
      />
      <path
        d="M219.456 0.95018L219.365 12.8792L215.952 14.3052L212.447 14.8632L208.989 17.4672L206.758 18.1482L200.114 17.5282L195.153 16.9712L186.142 14.2432L182 13.8092L179.315 12.7552L176.402 10.3352L176.448 0.95018L201.252 0.888184L219.456 0.95018Z"
        stroke={element.config.stroke}
        data-name="Keya Paha"
        fill={assignColor('Keya Paha')}
        data-x="219"
        data-y="0"
      />
      <path
        d="M345.979 99.4332L348.345 101.192L349.074 104.404L351.622 107.372L350.894 109.006L352.624 111.789L353.306 116.444L352.077 118.316L352.988 120.549L351.577 122.359H346.388L346.434 120.489L326.181 120.368L326.363 95.7302L330.641 96.6412L332.871 96.0942L336.194 97.4912L341.2 97.0052L345.979 99.4332Z"
        stroke={element.config.stroke}
        data-name="Saunders"
        fill={assignColor('Saunders')}
        data-x="345"
        data-y="99"
      />
      <path
        d="M125.247 162.21L125.293 182.88H92.2051V162.33L120.104 162.27L124.382 162.15L125.247 162.21Z"
        stroke={element.config.stroke}
        data-name="Dundy"
        fill={assignColor('Dundy')}
        data-x="125"
        data-y="162"
      />
      <path
        d="M128.66 122.962L128.751 141.494H124.337L92.1599 141.434V123.143V123.022H123.472L128.66 122.962Z"
        stroke={element.config.stroke}
        data-name="Perkins"
        fill={assignColor('Perkins')}
        data-x="128"
        data-y="122"
      />
      <path
        d="M92.2049 162.33L92.1599 141.434L124.337 141.494L124.382 162.15L120.104 162.27L92.2049 162.33Z"
        stroke={element.config.stroke}
        data-name="Chase"
        fill={assignColor('Chase')}
        data-x="92"
        data-y="162"
      />
      <path
        d="M284.083 67.5131L263.056 67.6971L262.829 57.0401V35.6391L283.992 35.4541L284.037 56.9181L284.083 67.5131Z"
        stroke={element.config.stroke}
        data-name="Antelope"
        fill={assignColor('Antelope')}
        data-x="284"
        data-y="67"
      />
      <path
        d="M321.22 15.5452L321.129 40.8162L305.2 40.7542V35.4542H299.875L299.966 8.96919L301.923 10.3352L305.792 8.59619L312.027 10.2732L312.437 12.6312L315.85 14.8012L321.22 15.5452Z"
        stroke={element.config.stroke}
        data-name="Cedar"
        fill={assignColor('Cedar')}
        data-x="321"
        data-y="15"
      />
      <path
        d="M147.047 78.3851L153.146 78.3242L153.009 99.4332L127.659 99.3112L121.515 99.3721L121.561 78.2021L147.047 78.3851Z"
        stroke={element.config.stroke}
        data-name="McPherson"
        fill={assignColor('McPherson')}
        data-x="147"
        data-y="78"
      />
      <path
        d="M310.616 78.019L310.48 100.342L305.246 99.372L301.514 100.949L298.237 101.373L294.824 103.132L294.778 99.372H289.908V91.355H284.219V78.1411L305.291 78.019H310.616Z"
        stroke={element.config.stroke}
        data-name="Platte"
        fill={assignColor('Platte')}
        data-x="310"
        data-y="78"
      />
      <path
        d="M346.388 122.359V136.328V151.925H325.999L325.908 141.494L326.045 120.368H326.181L346.434 120.489L346.388 122.359Z"
        stroke={element.config.stroke}
        data-name="Lancaster"
        fill={assignColor('Lancaster')}
        data-x="346"
        data-y="122"
      />
      <path
        d="M120.605 56.7341V78.2021L95.0271 78.2631L91.3411 78.2021L91.3861 61.9441L94.0711 62.0051L94.1621 56.6111L103.401 56.7951L120.605 56.7341Z"
        stroke={element.config.stroke}
        data-name="Grant"
        fill={assignColor('Grant')}
        data-x="120"
        data-y="56"
      />
      <path
        d="M262.374 8.09918L262.601 15.4832L260.462 14.8012L255.866 15.1732L249.767 14.3672L247.264 12.8792L244.078 13.0032L238.253 10.3352L236.023 10.4592L233.064 7.41618L230.516 7.72719L228.331 9.34119L223.689 10.7692L219.365 12.8792L219.456 0.95018L253.727 0.888184L256.548 5.11719L262.374 8.09918Z"
        stroke={element.config.stroke}
        data-name="Boyd"
        fill={assignColor('Boyd')}
        data-x="262"
        data-y="8"
      />
      <path
        d="M284.31 112.817V120.428L284.447 141.374H263.83H263.603V130.975L270.475 123.505L272.568 122.6L275.618 119.282L281.398 116.504L284.31 112.817Z"
        stroke={element.config.stroke}
        data-name="Hamilton"
        fill={assignColor('Hamilton')}
        data-x="284"
        data-y="112"
      />
      <path
        d="M32.4939 62.2502V78.1413L32.1759 80.8852L1.0459 80.9462V62.3722L30.7649 62.2502H32.4939Z"
        stroke={element.config.stroke}
        data-name="Scotts Bluff"
        fill={assignColor('Scotts Bluff')}
        data-x="32"
        data-y="62"
      />
      <path
        d="M32.0849 96.8843L31.7199 99.4933H16.3829L1.0459 99.3723V80.9463L32.1759 80.8853L32.0849 96.8843Z"
        stroke={element.config.stroke}
        data-name="Banner"
        fill={assignColor('Banner')}
        data-x="32"
        data-y="96"
      />
      <path
        d="M147.047 78.3851L121.561 78.2021H120.605V56.7341L147.047 56.9791V78.3851Z"
        stroke={element.config.stroke}
        data-name="Hooker"
        fill={assignColor('Hooker')}
        data-x="147"
        data-y="47"
      />
      <path
        d="M263.239 94.2122L263.011 78.2632L263.056 67.6972L284.083 67.5132L284.219 78.1412V91.3552L281.762 92.3282L274.571 92.2672L272.887 94.1512L263.239 94.2122Z"
        stroke={element.config.stroke}
        data-name="Boone"
        fill={assignColor('Boone')}
        data-x="263"
        data-y="94"
      />
      <path
        d="M121.561 78.2021L121.515 99.3721H95.1181L95.0271 78.2632L120.605 78.2021H121.561Z"
        stroke={element.config.stroke}
        data-name="Arthur"
        fill={assignColor('Arthur')}
        data-x="121"
        data-y="78"
      />
      <path
        d="M177.859 57.1021L199.841 57.224V78.3241H174.036H173.353L173.262 57.163L177.859 57.1021Z"
        stroke={element.config.stroke}
        data-name="Blaine"
        fill={assignColor('Blaine')}
        data-x="177"
        data-y="57"
      />
      <path
        d="M173.353 78.3242H153.146L147.047 78.3852V56.9792L173.262 57.1632L173.353 78.3242Z"
        stroke={element.config.stroke}
        data-name="Thomas"
        fill={assignColor('Thomas')}
        data-x="173"
        data-y="78"
      />
      <path
        d="M342.247 78.1411H347.299V81.8001L347.344 90.8081L347.754 93.4221L352.487 99.4331H345.979L341.2 97.0051L336.194 97.4911L332.871 96.0941L330.641 96.6411L326.363 95.7301L326.272 78.0801L342.247 78.1411Z"
        stroke={element.config.stroke}
        data-name="Dodge"
        fill={assignColor('Dodge')}
        data-x="342"
        data-y="78"
      />
      <path
        d="M150.005 141.314L149.778 142.154L150.142 162.33L125.247 162.21L124.382 162.15L124.337 141.494H128.751L150.005 141.314Z"
        stroke={element.config.stroke}
        data-name="Hayes"
        fill={assignColor('Hayes')}
        data-x="150"
        data-y="141"
      />
      <path
        d="M339.334 30.0242L334.646 30.0852L334.419 45.3092L329.959 46.1702H321.175L321.129 40.8162L321.22 15.5452L328.411 17.9622L332.644 21.6772L335.966 21.8012L335.056 25.0182L338.925 28.6652L339.334 30.0242Z"
        stroke={element.config.stroke}
        data-name="Dixon"
        fill={assignColor('Dixon')}
        data-x="339"
        data-y="30"
      />
      <path
        d="M201.752 162.27H202.253L202.389 182.939H176.721L176.539 162.27L181.226 162.21L201.752 162.27Z"
        stroke={element.config.stroke}
        data-name="Furnas"
        fill={assignColor('Furnas')}
        data-x="201"
        data-y="162"
      />
      <path
        d="M375.106 136.208L372.603 139.152L374.697 142.694L377.746 144.494L378.747 147.792L378.429 151.626L380.704 151.865L364.366 151.925H346.388V136.328L375.106 136.208Z"
        stroke={element.config.stroke}
        data-name="Otoe"
        fill={assignColor('Otoe')}
        data-x="375"
        data-y="136"
      />
      <path
        d="M150.142 162.33H151.007V182.939L125.293 182.88L125.247 162.21L150.142 162.33Z"
        stroke={element.config.stroke}
        data-name="Hitchcock"
        fill={assignColor('Hitchcock')}
        data-x="150"
        data-y="162"
      />
      <path
        d="M176.539 162.27L176.721 182.939H151.007V162.33L176.539 162.27Z"
        stroke={element.config.stroke}
        data-name="Red Willow"
        fill={assignColor('Red Willow')}
        data-x="176"
        data-y="162"
      />
      <path
        d="M326.363 95.7302L326.181 120.368H326.045L305.246 120.428V99.3722L310.48 100.342L317.671 99.7972L321.949 98.2192L326.363 95.7302Z"
        stroke={element.config.stroke}
        data-name="Butler"
        fill={assignColor('Butler')}
        data-x="326"
        data-y="95"
      />
      <path
        d="M367.051 183.058V167.522H387.85L391.582 169.132L391.217 172.052L393.266 173.779L395.086 176.755L394.312 180.978L397.134 181.394L399 183.117L367.051 183.058Z"
        stroke={element.config.stroke}
        data-name="Richardson"
        fill={assignColor('Richardson')}
        data-x="367"
        data-y="183"
      />
      <path
        d="M373.013 120.006L373.468 122.721L375.334 124.892L374.879 126.941L376.108 129.289L374.651 131.095L375.106 136.208L346.388 136.328V122.359H351.577L352.988 120.549L357.22 123.445L360.679 122.48L364.73 119.402L368.189 120.187L373.013 120.006Z"
        stroke={element.config.stroke}
        data-name="Cass"
        fill={assignColor('Cass')}
        data-x="373"
        data-y="120"
      />
      <path
        d="M362.09 81.9212L347.299 81.8002V78.1412H342.247L342.292 61.4542L353.352 61.3312L355.081 59.6152L361.407 64.3322L360.224 68.1252L362.545 73.1362L364.411 75.5792L362.09 81.9212Z"
        stroke={element.config.stroke}
        data-name="Burt"
        fill={assignColor('Burt')}
        data-x="362"
        data-y="81"
      />
      <path
        d="M299.875 35.4541H305.2V40.7541V56.8561L284.037 56.9181L283.992 35.4541H299.875Z"
        stroke={element.config.stroke}
        data-name="Pierce"
        fill={assignColor('Pierce')}
        data-x="299"
        data-y="35"
      />
      <path
        d="M342.247 78.1412L326.272 78.0802L321.084 78.0192L321.175 56.8562L330.05 56.7952H342.201L342.292 61.4542L342.247 78.1412Z"
        stroke={element.config.stroke}
        data-name="Cuming"
        fill={assignColor('Cuming')}
        data-x="342"
        data-y="78"
      />
      <path
        d="M263.011 78.263L242.212 78.385H241.939L241.848 57.163L262.829 57.04L263.056 67.6971L263.011 78.263Z"
        stroke={element.config.stroke}
        data-name="Wheeler"
        fill={assignColor('Wheeler')}
        data-x="263"
        data-y="78"
      />
      <path
        d="M305.291 78.0192L284.219 78.1412L284.083 67.5132L284.037 56.9182L305.2 56.8562L305.291 78.0192Z"
        stroke={element.config.stroke}
        data-name="Madison"
        fill={assignColor('Madison')}
        data-x="305"
        data-y="78"
      />
      <path
        d="M220.913 78.3851L199.841 78.3241V57.2241H200.796L220.366 57.1631H220.958L220.913 78.3851Z"
        stroke={element.config.stroke}
        data-name="Loup"
        fill={assignColor('Loup')}
        data-x="220"
        data-y="78"
      />
      <path
        d="M242.212 78.3853L242.349 99.4333H221.823H221.413L221.186 78.3853H241.939H242.212Z"
        stroke={element.config.stroke}
        data-name="Valley"
        fill={assignColor('Valley')}
        data-x="242"
        data-y="78"
      />
      <path
        d="M263.421 99.3721L263.466 120.428H243.577L242.44 120.368L242.576 99.4331L263.239 99.3721H263.421Z"
        stroke={element.config.stroke}
        data-name="Howard"
        fill={assignColor('Howard')}
        data-x="263"
        data-y="99"
      />
      <path
        d="M263.239 99.3722L242.576 99.4332H242.349L242.212 78.3852L263.011 78.2632L263.239 94.2122V99.3722Z"
        stroke={element.config.stroke}
        data-name="Greeley"
        fill={assignColor('Greeley')}
        data-x="263"
        data-y="99"
      />
      <path
        d="M241.848 57.1631L241.939 78.3851H221.186H220.913L220.958 57.1631H241.848Z"
        stroke={element.config.stroke}
        data-name="Garfield"
        fill={assignColor('Garfield')}
        data-x="241"
        data-y="57"
      />
      <path
        d="M173.353 78.3242H174.036V99.3722L153.009 99.4332L153.146 78.3242H173.353Z"
        stroke={element.config.stroke}
        data-name="Logan"
        fill={assignColor('Logan')}
        data-x="173"
        data-y="78"
      />
      <path
        d="M326.045 120.368L325.908 141.494L305.246 141.374V120.428L326.045 120.368Z"
        stroke={element.config.stroke}
        data-name="Seward"
        fill={assignColor('Seward')}
        data-x="326"
        data-y="120"
      />
      <path
        d="M221.823 99.4331H242.349H242.576L242.44 120.368H221.504L221.823 99.4331Z"
        stroke={element.config.stroke}
        data-name="Sherman"
        fill={assignColor('Sherman')}
        data-x="221"
        data-y="99"
      />
      <path
        d="M305.246 141.374H284.447L284.31 120.428H305.246V141.374Z"
        stroke={element.config.stroke}
        data-name="York"
        fill={assignColor('York')}
        data-x="305"
        data-y="141"
      />
      <path
        d="M305.246 99.3721V120.428H284.31V112.817L287.132 109.067L292.184 104.586L294.824 103.132L298.237 101.373L301.514 100.949L305.246 99.3721Z"
        stroke={element.config.stroke}
        data-name="Polk"
        fill={assignColor('Polk')}
        data-x="305"
        data-y="99"
      />
      <path
        d="M325.999 151.925L325.817 162.27L305.2 162.21L305.246 141.374L325.908 141.494L325.999 151.925Z"
        stroke={element.config.stroke}
        data-name="Saline"
        fill={assignColor('Saline')}
        data-x="325"
        data-y="151"
      />
      <path
        d="M305.246 141.374L305.2 162.21H284.629H284.493L284.447 141.374H305.246Z"
        stroke={element.config.stroke}
        data-name="Fillmore"
        fill={assignColor('Fillmore')}
        data-x="305"
        data-y="141"
      />
      <path
        d="M263.83 162.21H264.012L263.967 182.88L243.304 182.939L243.395 162.15H243.532L263.83 162.21Z"
        stroke={element.config.stroke}
        data-name="Webster"
        fill={assignColor('Webster')}
        data-x="263"
        data-y="162"
      />
      <path
        d="M325.817 162.27L325.726 182.939L321.949 182.999L305.109 182.88L305.2 162.21L325.817 162.27Z"
        stroke={element.config.stroke}
        data-name="Jefferson"
        fill={assignColor('Jefferson')}
        data-x="325"
        data-y="162"
      />
      <path
        d="M201.707 142.214L201.752 162.27L181.226 162.21L181.135 157.071L186.278 156.951V141.314H199.021L201.707 142.214Z"
        stroke={element.config.stroke}
        data-name="Gosper"
        fill={assignColor('Gosper')}
        data-x="201"
        data-y="142"
      />
      <path
        d="M243.304 182.939L222.779 182.999L222.824 162.27L243.395 162.15L243.304 182.939Z"
        stroke={element.config.stroke}
        data-name="Franklin"
        fill={assignColor('Franklin')}
        data-x="243"
        data-y="182"
      />
      <path
        d="M263.83 141.374H284.447L284.493 162.21H264.012H263.83V141.374Z"
        stroke={element.config.stroke}
        data-name="Clay"
        fill={assignColor('Clay')}
        data-x="263"
        data-y="141"
      />
      <path
        d="M284.493 162.21H284.629L284.584 182.88H263.967L264.012 162.21H284.493Z"
        stroke={element.config.stroke}
        data-name="Nuckolls"
        fill={assignColor('Nuckolls')}
        data-x="284"
        data-y="162"
      />
      <path
        d="M222.824 162.27L222.779 182.999L202.389 182.939L202.253 162.27H222.824Z"
        stroke={element.config.stroke}
        data-name="Harlan"
        fill={assignColor('Harlan')}
        data-x="222"
        data-y="162"
      />
      <path
        d="M305.2 162.21L305.109 182.88H284.584L284.629 162.21H305.2Z"
        stroke={element.config.stroke}
        data-name="Thayer"
        fill={assignColor('Thayer')}
        data-x="305"
        data-y="162"
      />
      <path
        d="M243.623 141.314L263.603 141.374H263.83V162.21L243.532 162.15L243.441 141.974L243.623 141.314Z"
        stroke={element.config.stroke}
        data-name="Adams"
        fill={assignColor('Adams')}
        data-x="243"
        data-y="141"
      />
      <path
        d="M211.992 143.174L222.824 143.774V162.27H202.253H201.752L201.707 142.214L211.992 143.174Z"
        stroke={element.config.stroke}
        data-name="Phelps"
        fill={assignColor('Phelps')}
        data-x="211"
        data-y="143"
      />
      <path
        d="M289.908 99.3722V104.525L281.125 104.647L281.17 105.676L274.025 105.495L271.84 107.372L263.967 107.312L263.421 99.3722H263.239V94.2122L272.887 94.1512L274.571 92.2672L281.762 92.3282L284.219 91.3552H289.908V99.3722Z"
        stroke={element.config.stroke}
        data-name="Nance"
        fill={assignColor('Nance')}
        data-x="289"
        data-y="99"
      />
      <path
        d="M243.441 141.974L243.532 162.15H243.395L222.824 162.27V143.774L227.785 144.134L231.653 143.714L235.385 144.074L238.662 142.814L243.441 141.974Z"
        stroke={element.config.stroke}
        data-name="Kearney"
        fill={assignColor('Kearney')}
        data-x="243"
        data-y="141"
      />
      <path
        d="M263.603 130.975V141.374L243.623 141.314L243.577 120.428H263.466L263.603 130.975Z"
        stroke={element.config.stroke}
        data-name="Hall"
        fill={assignColor('Hall')}
        data-x="263"
        data-y="130"
      />
      <path
        d="M370.373 99.433H352.487L347.754 93.422L347.344 90.808L347.299 81.8L362.09 81.9211L363.228 84.48L362.272 86.306L364.138 88.558L363.137 90.261L366.732 93.786L370.965 95.366L370.373 99.433Z"
        stroke={element.config.stroke}
        data-name="Washington"
        fill={assignColor('Washington')}
        data-x="370"
        data-y="99"
      />
      <path
        d="M355.081 59.6151L353.352 61.3311L342.292 61.4541L342.201 56.7951H330.05L329.959 46.1701L334.419 45.3091L351.258 45.4941L352.851 48.2611L351.213 49.3051L352.032 52.7451L355.263 55.4461L355.081 59.6151Z"
        stroke={element.config.stroke}
        data-name="Thurston"
        fill={assignColor('Thurston')}
        data-x="355"
        data-y="59"
      />
      <path
        d="M321.129 40.8161L321.175 46.1702H329.959L330.05 56.7952L321.175 56.8562H305.2V40.7542L321.129 40.8161Z"
        stroke={element.config.stroke}
        data-name="Wayne"
        fill={assignColor('Wayne')}
        data-x="321"
        data-y="40"
      />
      <path
        d="M387.85 167.522H367.051H364.548L364.366 151.925L380.704 151.865L384.937 164.419L387.941 166.09L387.85 167.522Z"
        stroke={element.config.stroke}
        data-name="Nemaha"
        fill={assignColor('Nemaha')}
        data-x="387"
        data-y="167"
      />
      <path
        d="M310.48 100.342L310.616 78.019H321.084L326.272 78.08L326.363 95.73L321.949 98.219L317.671 99.797L310.48 100.342Z"
        stroke={element.config.stroke}
        data-name="Colfax"
        fill={assignColor('Colfax')}
        data-x="310"
        data-y="100"
      />
      <path
        d="M91.887 109.914L92.16 123.022V123.143L66.218 123.083L66.719 120.368L66.673 109.914H91.887Z"
        stroke={element.config.stroke}
        data-name="Deuel"
        fill={assignColor('Deuel')}
        data-x="91"
        data-y="109"
      />
      <path
        d="M305.2 56.8562H321.175L321.084 78.0192H310.616H305.291L305.2 56.8562Z"
        stroke={element.config.stroke}
        data-name="Stanton"
        fill={assignColor('Stanton')}
        data-x="305"
        data-y="56"
      />
      <path
        d="M346.434 167.462L364.548 167.522H367.051V183.058L346.388 182.939L346.434 167.462Z"
        stroke={element.config.stroke}
        data-name="Pawnee"
        fill={assignColor('Pawnee')}
        data-x="346"
        data-y="167"
      />
      <path
        d="M371.101 111.85L352.624 111.789L350.894 109.006L351.622 107.372L349.074 104.404L348.345 101.192L345.979 99.4331H352.487H370.373L370.464 103.495L371.647 109.309L371.101 111.85Z"
        stroke={element.config.stroke}
        data-name="Douglas"
        fill={assignColor('Douglas')}
        data-x="371"
        data-y="111"
      />
      <path
        d="M364.366 151.925L364.548 167.522L346.434 167.462L346.388 151.925H364.366Z"
        stroke={element.config.stroke}
        data-name="Johnson"
        fill={assignColor('Johnson')}
        data-x="364"
        data-y="151"
      />
      <path
        d="M351.258 45.4942L334.419 45.3092L334.646 30.0852L339.334 30.0242L342.429 30.3942L345.569 32.9252L348.436 32.2462L350.075 35.5782L348.619 37.3662L348.436 40.8782L350.621 43.2172L351.258 45.4942Z"
        stroke={element.config.stroke}
        data-name="Dakota"
        fill={assignColor('Dakota')}
        data-x="351"
        data-y="45"
      />
      <path
        d="M373.013 120.006L368.189 120.187L364.73 119.402L360.679 122.48L357.22 123.445L352.988 120.549L352.077 118.316L353.306 116.444L352.624 111.789L371.101 111.85L373.923 112.031L372.967 114.45L373.878 118.014L373.013 120.006Z"
        stroke={element.config.stroke}
        data-name="Sarpy"
        fill={assignColor('Sarpy')}
        data-x="373"
        data-y="120"
      />

      {renderLabels()}
    </svg>
  );
};

MapNebraska.propTypes = ElementPropTypes;
MapNebraskaPresent.propTypes = {
  element: PropTypes.object.isRequired,
};
MapNebraskaContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default MapNebraska;
