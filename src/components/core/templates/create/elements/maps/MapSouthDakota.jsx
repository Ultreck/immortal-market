import { ElementPropTypes } from '@/lib/prop-types.js';
import useMapElement from '@/lib/design/use-map-element.jsx';
import PropTypes from 'prop-types';

const MapSouthDakota = ({ element }) => {
  return <MapSouthDakotaContent element={element} />;
};

export const MapSouthDakotaPresent = ({ element }) => {
  return <MapSouthDakotaContent element={element} />;
};

export const MapSouthDakotaPreview = () => {
  return (
    <MapSouthDakotaContent element={{ config: { data: [], fill: '#f9fafb', stroke: '#f9fafb' } }} present={false} />
  );
};

const MapSouthDakotaContent = ({ element, present = true }) => {
  const { el, assignColor, renderLabels, handleMouseMove, handleMouseLeave, renderTooltip } = useMapElement(element);

  return (
    <svg ref={el} width="100%" viewBox="0 0 400 254" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M108.349 107.555L107.983 119.478L107.879 144.967H107.252L107.304 165.612L105.319 167.129L100.983 166.263L99.05 167.202L66.088 167.346L66.506 165.829L72.043 159.393L72.514 155.121H57.103L26.231 154.976L1.104 155.193V134.207L32.604 134.426L56.111 134.353H87.976L87.454 131.804L89.7 127.432L89.23 124.15L90.536 119.332L92.73 117.067L92.364 113.191L93.827 111.874L96.7 111.655L98.215 113.484L103.909 111.582L106.05 108.287L108.349 107.555Z"
        fill={assignColor('Pennington')}
        stroke={element.config.stroke}
        data-name="Pennington"
        data-x="108"
        data-y="107"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Pennington')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M108.453 68.4077L108.349 107.555L106.05 108.287L103.909 111.582L98.215 113.484L96.7 111.655L93.827 111.874L92.364 113.191L92.73 117.067L90.536 119.332L89.23 124.15L89.7 127.432L87.454 131.804L87.976 134.353H56.111L32.604 134.426L32.447 125.755H26.231L26.492 119.405L26.597 100.444H57.991L58.357 94.1287L58.409 68.4077H83.901H108.453Z"
        fill={assignColor('Meade')}
        stroke={element.config.stroke}
        data-name="Meade"
        data-x="108"
        data-y="68"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Meade')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M195.116 36.2007L195.325 37.9887L198.407 42.8257L196.422 48.1767L199.243 53.0027L198.25 59.6007L195.743 64.2657L196.161 66.7067L198.25 69.5157L194.228 69.2947L191.877 70.1807L190.676 72.4717L190.78 76.6047L191.877 78.7447L192.138 81.5457L188.116 84.9347L185.086 88.6147L181.429 88.4677L177.512 83.9767L174.795 86.1127L175.527 88.4677L172.601 89.0557L169.833 87.4377L165.967 87.5107L161.475 90.8217L158.706 91.4827L153.534 89.6447V71.7327H134.52L135.303 68.4817V42.7507L136.139 42.6767V36.2757H160.43L195.116 36.2007Z"
        fill={assignColor('Dewey')}
        stroke={element.config.stroke}
        data-name="Dewey"
        data-x="195"
        data-y="36"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Dewey')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M108.505 0.966797V36.3498L108.453 68.4078H83.9009H58.4089L58.3569 55.5248L58.5659 16.8628L59.1409 16.9378L59.1929 0.966797H86.4089H108.505Z"
        fill={assignColor('Perkins')}
        stroke={element.config.stroke}
        data-name="Perkins"
        data-x="108"
        data-y="0"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Perkins')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M136.139 36.2759V42.6769L135.303 42.7509V68.4819L134.52 71.7329H153.534V89.6449L150.452 93.4679L143.505 94.2029L136.923 98.0959L136.191 100.224L133.162 103.011L128.095 102.718L126.005 101.838L123.55 102.351L120.154 105.357L117.072 106.236L113.416 105.577L109.132 106.383L108.349 107.555L108.453 68.4079L108.505 36.3499L136.139 36.2759Z"
        fill={assignColor('Ziebach')}
        stroke={element.config.stroke}
        data-name="Ziebach"
        data-x="136"
        data-y="36"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Ziebach')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M280.368 180.761L280.525 189.969H282.04L311.711 202.527L313.33 204.533L312.024 207.469L311.606 216.621L312.599 218.334L311.084 223.115L311.711 224.256L309.83 228.176L299.382 224.256L296.248 221.831L294.524 221.546L291.286 216.692L288.517 212.476L281.883 211.618L277.86 206.753L274.413 206.18L272.271 204.748L272.219 201.094L270.338 199.086L266.055 198.297L261.615 193.633L256.547 185.44L252.107 185.224L249.234 183.497L249.913 180.689H275.823L280.368 180.761Z"
        fill={assignColor('Charles Mix')}
        stroke={element.config.stroke}
        data-name="Charles Mix"
        data-x="280"
        data-y="180"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Charles Mix')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M58.357 55.5248L39.186 55.5988L1.83596 55.4508L1.73096 29.9388L1.67896 0.966797H59.193L59.141 16.9378L58.566 16.8628L58.357 55.5248Z"
        fill={assignColor('Harding')}
        stroke={element.config.stroke}
        data-name="Harding"
        data-x="58"
        data-y="55"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Harding')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M108.505 0.966797L156.355 1.0418L186.183 0.966797L188.22 3.5958L190.519 3.1448L190.623 5.8468L194.28 7.6478L192.713 10.4968L193.758 11.6208L195.429 16.8628L197.362 18.7338L195.22 22.6218L192.452 22.1728L190.519 23.3688L190.467 27.1028L187.646 30.3868L188.325 32.7728L193.026 33.4438L195.116 36.2008L160.43 36.2758H136.139L108.505 36.3498V0.966797Z"
        fill={assignColor('Corson')}
        stroke={element.config.stroke}
        data-name="Corson"
        data-x="108"
        data-y="0"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Corson')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M175.527 88.4677L179.549 90.3067L181.012 94.4227L179.027 100.444L181.586 103.891L185.713 104.697L185.817 106.529L182.683 108.58L182.735 110.923L184.303 112.094L190.467 110.923L192.556 112.24L193.653 118.309L194.384 119.259L201.489 121.011L204.414 120.792L208.332 121.961L214.705 125.463L217.212 125.244L218.571 127.432L216.324 130.42L193.601 130.493V132.387L158.288 132.169L151.863 132.314L151.758 119.551H152.385L152.542 94.2027L153.534 89.6447L158.706 91.4827L161.475 90.8217L165.967 87.5107L169.833 87.4377L172.601 89.0557L175.527 88.4677Z"
        fill={assignColor('Stanley')}
        stroke={element.config.stroke}
        data-name="Stanley"
        data-x="175"
        data-y="88"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Stanley')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M246.57 149.322L246.466 151.86L249.182 155.121L246.048 159.538L243.54 161.853L243.854 166.046L241.451 167.129L241.137 169.368L245.316 169.513L247.51 171.462L247.824 175.645L250.436 178.601L249.913 180.689H237.324L232.727 180.761L232.623 163.371L231.526 161.997L228.652 162.721L226.197 165.901L224.473 165.468L219.929 168.502L218.205 166.552L211.571 166.407L208.854 167.129L200.757 165.54L197.937 166.479L195.272 165.034L195.22 155.7H193.81L193.601 132.387V130.493L216.324 130.42L218.988 135.081L220.973 135.736L224.63 134.717L231.421 137.336L233.981 136.027L232.257 132.751L229.332 132.169L228.757 129.4L230.585 128.744L235.182 130.493L236.958 133.115L236.175 135.736L236.749 138.645L238.525 140.39L242.913 141.48L246.727 145.766L246.57 149.322Z"
        fill={assignColor('Lyman')}
        stroke={element.config.stroke}
        data-name="Lyman"
        data-x="246"
        data-y="149"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Lyman')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M158.288 132.169L158.236 144.822L157.243 144.895L126.841 144.967H107.879L107.983 119.478L108.349 107.555L109.132 106.383L113.416 105.577L117.072 106.236L120.154 105.357L123.55 102.351L126.005 101.838L128.095 102.718L133.162 103.011L136.191 100.224L136.923 98.0958L143.505 94.2028L150.452 93.4678L153.534 89.6448L152.542 94.2028L152.385 119.551H151.758L151.863 132.314L158.288 132.169Z"
        fill={assignColor('Haakon')}
        stroke={element.config.stroke}
        data-name="Haakon"
        data-x="158"
        data-y="132"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Haakon')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M58.357 55.5247L58.409 68.4077L58.357 94.1287L57.991 100.444H26.597L13.589 100.371L12.492 101.544L9.097 101.104L7.425 102.205L1.052 102.791L1 71.3637H1.888L1.836 55.4507L39.186 55.5987L58.357 55.5247Z"
        fill={assignColor('Butte')}
        stroke={element.config.stroke}
        data-name="Butte"
        data-x="58"
        data-y="55"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Butte')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M157.243 144.895L157.139 155.845L153.482 156.207L148.676 159.393L148.467 160.261L148.781 188.748L121.304 188.676H102.394V182.489H101.035L100.983 166.263L105.319 167.129L107.304 165.612L107.252 144.967H107.879H126.841L157.243 144.895Z"
        fill={assignColor('Jackson')}
        stroke={element.config.stroke}
        data-name="Jackson"
        data-x="157"
        data-y="144"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Jackson')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M100.983 166.263L101.035 182.489H102.394V188.676L102.603 207.397H103.961L104.117 216.692L81.9161 216.621V216.406L56.2681 216.549L56.1631 182.417L56.1111 172.977L59.7151 172.039L61.0741 168.213L65.8791 168.718L66.0881 167.346L99.0501 167.202L100.983 166.263Z"
        fill={assignColor('Shannon')}
        stroke={element.config.stroke}
        data-name="Shannon"
        data-x="100"
        data-y="166"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Shannon')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M237.324 180.689V216.692H202.586V207.397H201.75L201.645 188.748L201.698 182.417H200.81L200.757 165.54L208.854 167.129L211.571 166.407L218.205 166.552L219.929 168.502L224.473 165.468L226.197 165.901L228.652 162.721L231.526 161.997L232.623 163.371L232.727 180.761L237.324 180.689Z"
        fill={assignColor('Tripp')}
        stroke={element.config.stroke}
        data-name="Tripp"
        data-x="237"
        data-y="180"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Tripp')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M318.606 1.64268L318.449 27.6257V53.4477L279.898 53.1507L279.532 53.0767V34.4877L279.271 27.4017L279.428 1.49268L298.912 1.64268H318.606Z"
        fill={assignColor('Brown')}
        stroke={element.config.stroke}
        data-name="Brown"
        data-x="318"
        data-y="1"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Brown')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M291.286 216.692L251.951 216.763L237.324 216.692V180.689H249.913L249.234 183.497L252.107 185.224L256.547 185.44L261.615 193.633L266.055 198.297L270.338 199.086L272.219 201.094L272.271 204.748L274.413 206.18L277.86 206.753L281.883 211.618L288.517 212.476L291.286 216.692Z"
        fill={assignColor('Gregory')}
        stroke={element.config.stroke}
        data-name="Gregory"
        data-x="291"
        data-y="216"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Gregory')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M66.088 167.346L65.879 168.718L61.074 168.213L59.715 172.039L56.111 172.977L56.163 182.417H32.238L1.157 182.345L1.104 155.193L26.231 154.976L57.103 155.121H72.514L72.043 159.393L66.506 165.829L66.088 167.346Z"
        fill={assignColor('Custer')}
        stroke={element.config.stroke}
        data-name="Custer"
        data-x="66"
        data-y="167"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Custer')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M56.163 182.417L56.268 216.549L22.94 216.478L1.20898 216.335L1.15698 182.345L32.238 182.417H56.163Z"
        fill={assignColor('Fall River')}
        stroke={element.config.stroke}
        data-name="Fall River"
        data-x="56"
        data-y="182"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Fall River')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M397.328 46.9149L369.904 46.9889L369.172 49.1429L357.837 49.0689L357.784 29.7149L357.575 1.56787H392.575L391.634 9.37287L387.038 16.6379L383.694 18.4339L378.523 22.4719L377.217 26.2069L381.5 32.0279L383.642 37.2439L386.672 40.7429L390.067 40.9659L395.448 43.8669L397.328 46.9149Z"
        fill={assignColor('Roberts')}
        stroke={element.config.stroke}
        data-name="Roberts"
        data-x="397"
        data-y="46"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Roberts')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M195.272 165.034L197.937 166.479L200.757 165.54L200.81 182.417H201.698L201.645 188.748L170.616 188.676L148.781 188.748L148.467 160.261L148.676 159.393L153.482 156.207L157.139 155.845L161.266 155.556L163.146 158.307L164.922 157.366L166.072 159.755L170.564 161.491L172.392 164.528L177.355 165.395L182.422 161.563L188.325 164.745L191.198 163.733L195.272 165.034Z"
        fill={assignColor('Mellette')}
        stroke={element.config.stroke}
        data-name="Mellette"
        data-x="195"
        data-y="165"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Mellette')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M318.606 98.3889H294.002L280.472 98.1689V78.9659H279.846L279.741 63.7479L279.898 53.1509L318.449 53.4479L318.397 59.8239L318.293 79.1869L318.606 79.2609V98.3889Z"
        fill={assignColor('Spink')}
        stroke={element.config.stroke}
        data-name="Spink"
        data-x="318"
        data-y="98"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Spink')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M230.585 128.744L228.757 129.4L229.332 132.169L232.257 132.751L233.981 136.027L231.421 137.336L224.63 134.717L220.973 135.736L218.988 135.081L216.324 130.42L218.571 127.432L217.212 125.244L214.705 125.463L208.332 121.961L204.414 120.792L201.489 121.011L194.384 119.259L193.653 118.309L192.556 112.24L190.467 110.923L184.303 112.094L182.735 110.923L182.683 108.58L185.817 106.529L185.713 104.697L211.466 104.551L229.906 104.404H230.533L230.585 128.744Z"
        fill={assignColor('Hughes')}
        stroke={element.config.stroke}
        data-name="Hughes"
        data-x="230"
        data-y="128"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Hughes')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M280.786 130.129H269.032L249.548 130.275L249.391 104.404H248.868L248.816 78.8179L279.846 78.9659H280.472V98.1689L280.89 112.826L280.786 130.129Z"
        fill={assignColor('Hand')}
        stroke={element.config.stroke}
        data-name="Hand"
        data-x="280"
        data-y="130"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Hand')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M201.645 188.748L201.75 207.397H202.586V216.692L173.698 216.906H148.781V188.748L170.616 188.676L201.645 188.748Z"
        fill={assignColor('Todd')}
        stroke={element.config.stroke}
        data-name="Todd"
        data-x="201"
        data-y="188"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Todd')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M325.083 104.771L325.188 130.275L300.062 130.202L280.786 130.129L280.89 112.826L280.472 98.1687L294.002 98.3887H318.606L324.979 98.4627L325.083 104.771Z"
        fill={assignColor('Beadle')}
        stroke={element.config.stroke}
        data-name="Beadle"
        data-x="325"
        data-y="104"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Beadle')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M191.877 78.7449L229.906 78.8179V104.404L211.466 104.551L185.713 104.697L181.586 103.891L179.027 100.444L181.012 94.4229L179.549 90.3069L175.527 88.4679L174.795 86.1129L177.512 83.9769L181.429 88.4679L185.086 88.6149L188.116 84.9349L192.138 81.5459L191.877 78.7449Z"
        fill={assignColor('Sully')}
        stroke={element.config.stroke}
        data-name="Sully"
        data-x="191"
        data-y="78"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Sully')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M148.781 188.748V216.906H125.326L104.117 216.692L103.961 207.397H102.603L102.394 188.676H121.304L148.781 188.748Z"
        fill={assignColor('Bennett')}
        stroke={element.config.stroke}
        data-name="Bennett"
        data-x="148"
        data-y="188"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Bennett')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M279.428 1.4927L279.271 27.4017L247.092 27.1777L228.078 27.1027L227.555 27.0287L227.503 1.1167L264.905 1.3427L279.428 1.4927Z"
        fill={assignColor('McPherson')}
        stroke={element.config.stroke}
        data-name="McPherson"
        data-x="279"
        data-y="1"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'McPherson')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M279.532 53.0768L254.458 53.1508L235.13 53.0768H228.026L228.078 27.1028L247.092 27.1778L279.271 27.4018L279.532 34.4878V53.0768Z"
        fill={assignColor('Edmunds')}
        stroke={element.config.stroke}
        data-name="Edmunds"
        data-x="279"
        data-y="53"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Edmunds')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M158.288 132.169L193.601 132.387L193.81 155.7H195.22L195.272 165.034L191.198 163.733L188.325 164.745L182.422 161.563L177.355 165.395L172.392 164.528L170.564 161.491L166.072 159.755L164.922 157.366L163.146 158.307L161.266 155.556L157.139 155.845L157.243 144.895L158.236 144.822L158.288 132.169Z"
        fill={assignColor('Jones')}
        stroke={element.config.stroke}
        data-name="Jones"
        data-x="158"
        data-y="132"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Jones')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M357.784 29.7148L357.837 49.0688V59.8978H343.785L318.397 59.8238L318.449 53.4478V27.6258L350.158 27.5508L350.68 29.7148H357.784Z"
        fill={assignColor('Day')}
        stroke={element.config.stroke}
        data-name="Day"
        data-x="357"
        data-y="29"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Day')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M343.994 85.6707L343.941 104.844L325.083 104.771L324.979 98.4627L318.606 98.3887V79.2607L318.293 79.1867L318.397 59.8237L343.785 59.8977L343.994 85.6707Z"
        fill={assignColor('Clark')}
        stroke={element.config.stroke}
        data-name="Clark"
        data-x="343"
        data-y="85"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Clark')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M279.532 53.0769L279.898 53.1509L279.741 63.7479L279.846 78.9659L248.816 78.8179H235.234L235.13 53.0769L254.458 53.1509L279.532 53.0769Z"
        fill={assignColor('Faulk')}
        stroke={element.config.stroke}
        data-name="Faulk"
        data-x="279"
        data-y="53"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Faulk')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M228.026 53.0767H235.13L235.234 78.8177H229.906L191.877 78.7447L190.78 76.6047L190.676 72.4717L191.877 70.1807L194.228 69.2947L198.25 69.5157L196.161 66.7067L195.743 64.2657L198.25 59.6007L199.243 53.0027L228.026 53.0767Z"
        fill={assignColor('Potter')}
        stroke={element.config.stroke}
        data-name="Potter"
        data-x="228"
        data-y="53"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Potter')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M275.249 149.249L275.771 155.483L275.823 180.689H249.913L250.436 178.601L247.824 175.645L247.51 171.462L245.316 169.513L241.137 169.368L241.451 167.129L243.854 166.046L243.54 161.853L246.048 159.538L249.182 155.121L246.466 151.86L246.57 149.322L269.032 149.177L275.249 149.249Z"
        fill={assignColor('Brule')}
        stroke={element.config.stroke}
        data-name="Brule"
        data-x="275"
        data-y="149"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Brule')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M357.784 29.7149H350.68L350.158 27.5509L318.449 27.6259L318.606 1.64287L357.575 1.56787L357.784 29.7149Z"
        fill={assignColor('Marshall')}
        stroke={element.config.stroke}
        data-name="Marshall"
        data-x="357"
        data-y="29"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Marshall')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M26.597 100.444L26.492 119.405L26.231 125.755H32.447L32.604 134.426L1.104 134.207L1.052 102.791L7.425 102.205L9.097 101.104L12.492 101.544L13.589 100.371L26.597 100.444Z"
        fill={assignColor('Lawrence')}
        stroke={element.config.stroke}
        data-name="Lawrence"
        data-x="26"
        data-y="100"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Lawrence')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M227.503 1.1168L227.555 27.0288L190.467 27.1028L190.519 23.3688L192.452 22.1728L195.22 22.6218L197.362 18.7338L195.429 16.8628L193.758 11.6208L192.713 10.4968L194.28 7.6478L190.623 5.8468L190.519 3.1448L188.22 3.5958L186.183 0.966797L212.563 1.1168H227.503Z"
        fill={assignColor('Campbell')}
        stroke={element.config.stroke}
        data-name="Campbell"
        data-x="227"
        data-y="1"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Campbell')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M398.216 72.8408L375.65 72.9148V59.9718L357.837 59.8978V49.0688L369.172 49.1428L369.904 46.9888L397.328 46.9148L398.269 48.9198L398.216 72.8408Z"
        fill={assignColor('Grant')}
        stroke={element.config.stroke}
        data-name="Grant"
        data-x="398"
        data-y="72"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Grant')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M228.078 27.1028L228.026 53.0768L199.243 53.0028L196.422 48.1768L198.407 42.8258L195.325 37.9888L195.116 36.2008L193.026 33.4438L188.325 32.7728L187.646 30.3868L190.467 27.1028L227.555 27.0288L228.078 27.1028Z"
        fill={assignColor('Walworth')}
        stroke={element.config.stroke}
        data-name="Walworth"
        data-x="228"
        data-y="27"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Walworth')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M248.816 78.8179L248.868 104.404H249.391L249.548 130.275L235.182 130.493L230.585 128.744L230.533 104.404H229.906V78.8179H235.234H248.816Z"
        fill={assignColor('Hyde')}
        stroke={element.config.stroke}
        data-name="Hyde"
        data-x="248"
        data-y="78"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Hyde')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M325.083 104.771L343.941 104.844L362.956 104.771L362.904 130.275H350.314H325.188L325.083 104.771Z"
        fill={assignColor('Kingsbury')}
        stroke={element.config.stroke}
        data-name="Kingsbury"
        data-x="325"
        data-y="104"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Kingsbury')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M348.695 180.689L348.956 204.461H336.367L313.33 204.533L311.711 202.527L311.449 180.761L319.39 180.833L338.038 180.761L348.695 180.689Z"
        fill={assignColor('Hutchinson')}
        stroke={element.config.stroke}
        data-name="Hutchinson"
        data-x="348"
        data-y="180"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Hutchinson')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M398.164 155.411V180.473L390.694 180.545L373.665 180.689H362.904V155.411H375.389L394.142 155.556L398.164 155.411Z"
        fill={assignColor('Minnehaha')}
        stroke={element.config.stroke}
        data-name="Minnehaha"
        data-x="398"
        data-y="155"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Minnehaha')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M375.545 130.202L362.904 130.275L362.956 104.771H375.545L398.216 104.844L398.164 130.129L375.545 130.202Z"
        fill={assignColor('Brookings')}
        stroke={element.config.stroke}
        data-name="Brookings"
        data-x="375"
        data-y="130"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Brookings')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M375.597 85.7447H356.687L343.994 85.6707L343.785 59.8977H357.837L375.65 59.9717V72.9147L375.597 85.7447Z"
        fill={assignColor('Codington')}
        stroke={element.config.stroke}
        data-name="Codington"
        data-x="375"
        data-y="85"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Codington')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M300.062 148.959L300.323 155.338L300.375 174.564L300.584 180.689L280.368 180.761L275.823 180.689L275.771 155.483L275.249 149.249L300.062 148.959Z"
        fill={assignColor('Aurora')}
        stroke={element.config.stroke}
        data-name="Aurora"
        data-x="300"
        data-y="148"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Aurora')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M379.724 238.28L379.881 210.617L398.321 210.545L394.873 213.262L396.179 216.121L395.866 219.405L393.828 222.331L392.993 227.464L391.06 230.882L388.814 233.089L389.075 237.356L393.724 240.838L396.858 248.078L397.015 251.41L395.761 253.181L393.097 250.559L390.224 251.835L389.075 248.574L384.635 244.388L385.679 240.696L381.866 240.554L379.724 238.28Z"
        fill={assignColor('Union')}
        stroke={element.config.stroke}
        data-name="Union"
        data-x="379"
        data-y="238"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Union')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M336.367 204.461L336.524 226.537L334.016 228.461L332.658 226.609L328.27 227.962L326.442 225.896L323.882 226.751L323.516 228.817L320.434 232.52L316.778 233.516L313.905 231.879L309.83 228.176L311.711 224.256L311.084 223.115L312.599 218.334L311.606 216.621L312.024 207.469L313.33 204.533L336.367 204.461Z"
        fill={assignColor('Bon Homme')}
        stroke={element.config.stroke}
        data-name="Bon Homme"
        data-x="336"
        data-y="204"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Bon Homme')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M398.321 210.545L379.881 210.617L373.717 210.545L373.665 180.689L390.694 180.545L390.746 184.864L394.716 188.46L392.731 200.377L397.381 201.524L397.642 205.75L399 208.184L398.321 210.545Z"
        fill={assignColor('Lincoln')}
        stroke={element.config.stroke}
        data-name="Lincoln"
        data-x="398"
        data-y="210"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Lincoln')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M373.665 180.689L373.717 210.545H361.337L361.389 204.39L348.956 204.461L348.695 180.689H362.904H373.665Z"
        fill={assignColor('Turner')}
        stroke={element.config.stroke}
        data-name="Turner"
        data-x="373"
        data-y="180"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Turner')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M398.216 72.8408V104.844L375.545 104.771L375.597 85.7448L375.65 72.9148L398.216 72.8408Z"
        fill={assignColor('Deuel')}
        stroke={element.config.stroke}
        data-name="Deuel"
        data-x="398"
        data-y="72"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Deuel')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M300.584 180.689L311.449 180.761L311.711 202.527L282.04 189.969H280.525L280.368 180.761L300.584 180.689Z"
        fill={assignColor('Douglas')}
        stroke={element.config.stroke}
        data-name="Douglas"
        data-x="300"
        data-y="180"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Douglas')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M361.337 210.545L361.389 230.811L358.672 230.17L358.202 227.464L351.046 225.54L346.605 227.535L344.359 225.967L338.822 227.82L336.524 226.537L336.367 204.461H348.956L361.389 204.39L361.337 210.545Z"
        fill={assignColor('Yankton')}
        stroke={element.config.stroke}
        data-name="Yankton"
        data-x="361"
        data-y="210"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Yankton')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M269.032 130.129V149.177L246.57 149.322L246.727 145.766L242.913 141.48L238.525 140.39L236.749 138.645L236.175 135.736L236.958 133.115L235.182 130.493L249.548 130.275L269.032 130.129Z"
        fill={assignColor('Buffalo')}
        stroke={element.config.stroke}
        data-name="Buffalo"
        data-x="269"
        data-y="130"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Buffalo')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M348.695 180.689L338.038 180.761L337.882 155.411H350.419H362.904V180.689H348.695Z"
        fill={assignColor('McCook')}
        stroke={element.config.stroke}
        data-name="McCook"
        data-x="348"
        data-y="180"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'McCook')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M375.389 155.411H362.904H350.419L350.314 130.275H362.904L375.545 130.202L375.389 155.411Z"
        fill={assignColor('Lake')}
        stroke={element.config.stroke}
        data-name="Lake"
        data-x="375"
        data-y="155"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Lake')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M325.188 130.275L325.292 155.411L319.181 155.338H300.323L300.062 148.959V130.202L325.188 130.275Z"
        fill={assignColor('Sanborn')}
        stroke={element.config.stroke}
        data-name="Sanborn"
        data-x="325"
        data-y="130"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Sanborn')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M350.314 130.275L350.419 155.411H337.882H325.292L325.188 130.275H350.314Z"
        fill={assignColor('Miner')}
        stroke={element.config.stroke}
        data-name="Miner"
        data-x="350"
        data-y="130"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Miner')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M375.597 85.7449L375.545 104.771H362.956L343.941 104.844L343.994 85.6709L356.687 85.7449H375.597Z"
        fill={assignColor('Hamlin')}
        stroke={element.config.stroke}
        data-name="Hamlin"
        data-x="375"
        data-y="85"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Hamlin')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M300.062 148.959L275.249 149.249L269.032 149.177V130.129H280.786L300.062 130.202V148.959Z"
        fill={assignColor('Jerauld')}
        stroke={element.config.stroke}
        data-name="Jerauld"
        data-x="300"
        data-y="148"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Jerauld')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M398.164 155.411L394.142 155.556L375.389 155.411L375.545 130.202L398.164 130.129V155.411Z"
        fill={assignColor('Moody')}
        stroke={element.config.stroke}
        data-name="Moody"
        data-x="398"
        data-y="155"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Moody')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M379.881 210.617L379.724 238.28L377.008 236.29L373.769 235.579L372.254 236.574L370.948 233.872L366.038 233.587L362.59 232.662L361.389 230.811L361.337 210.545H373.717L379.881 210.617Z"
        fill={assignColor('Clay')}
        stroke={element.config.stroke}
        data-name="Clay"
        data-x="379"
        data-y="210"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Clay')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M319.39 180.833L311.449 180.761L300.584 180.689L300.375 174.564L300.323 155.338H319.181L319.39 180.833Z"
        fill={assignColor('Davison')}
        stroke={element.config.stroke}
        data-name="Davison"
        data-x="319"
        data-y="180"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Davison')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M337.882 155.411L338.038 180.761L319.39 180.833L319.181 155.338L325.292 155.411H337.882Z"
        fill={assignColor('Hanson')}
        stroke={element.config.stroke}
        data-name="Hanson"
        data-x="337"
        data-y="155"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Hanson')}
        onMouseLeave={handleMouseLeave}
      />
      {present && renderTooltip()}
      {renderLabels()}
    </svg>
  );
};

MapSouthDakota.propTypes = ElementPropTypes;
MapSouthDakotaPresent.propTypes = {
  element: PropTypes.object.isRequired,
};
MapSouthDakotaContent.propTypes = {
  element: PropTypes.object.isRequired,
  present: PropTypes.bool,
};

export default MapSouthDakota;
