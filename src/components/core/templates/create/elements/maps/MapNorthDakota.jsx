import { ElementPropTypes } from '@/lib/prop-types.js';
import useMapElement from '@/lib/design/use-map-element.jsx';
import PropTypes from 'prop-types';

const MapNorthDakota = ({ element }) => {
  return <MapNorthDakotaContent element={element} />;
};

export const MapNorthDakotaPresent = ({ element }) => {
  return <MapNorthDakotaContent element={element} />;
};

export const MapNorthDakotaPreview = () => {
  return (
    <MapNorthDakotaContent element={{ config: { data: [], fill: '#f9fafb', stroke: '#f9fafb' } }} present={false} />
  );
};

export const MapNorthDakotaContent = ({ element, present = true }) => {
  const { el, assignColor, renderLabels, handleMouseMove, handleMouseLeave, renderTooltip } = useMapElement(element);

  return (
    <svg ref={el} width="100%" viewBox="0 0 400 243" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M164.607 92.9818H184.999V106.726H180.273L180.326 133.923L176.343 134.001L176.237 147.141H165.085L163.439 144.329L164.183 141.515L163.386 138.934L160.412 136.82L156.324 136.585L153.137 137.76L152.819 139.716L151.704 140.264L149.314 138.542L147.137 136.977L144.907 136.899L143.845 133.844L143.685 130.788L141.667 128.356L141.296 126.316L139.649 123.568L139.596 122.154L142.995 119.01L140.127 115.471L138.641 115.392L131.419 117.988L129.348 118.303L126.002 117.438L123.825 117.988L119.577 120.74L115.754 120.033L113.576 118.146L110.868 117.359L108.903 117.752L108.319 114.605L105.133 114.448L101.469 115.235L99.0801 114.605L97.2211 112.322L95.7871 109.328L95.9461 102.545L94.5661 101.124L96.1591 99.7018V98.2008L91.4331 96.6988L89.4681 99.9388L89.3091 92.8228H116.709L137.154 92.9818L150.854 92.9028L164.607 92.9818Z"
        stroke={element.config.stroke}
        data-name="McLean"
        fill={assignColor('McLean')}
        data-x="164"
        data-y="92"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'McLean')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M65.8381 70.9258L67.1121 71.4028L69.8731 70.6868L70.6701 72.3568L69.7671 73.4698L74.2811 74.5828L74.8121 77.7608L77.0951 77.1258L78.7411 80.0638L80.6531 80.7778L79.6441 83.5548L76.1391 87.2008L75.1301 92.1898L75.7681 94.6428L75.8211 106.569L64.9351 106.49L51.3411 106.648L51.1811 113.975L51.0751 133.844L21.1791 133.688L1.31911 133.844L1.42511 112.479L1.47811 87.9148L1.26611 81.0958L3.23011 83.3958L5.51411 81.8888L7.37211 84.4268L10.0271 83.5548L11.9921 80.0638L13.6911 82.1268L14.4351 80.8578L14.7531 76.1728L16.8781 77.2848L18.8421 76.1728L17.4621 73.8678L20.0641 71.3228L24.5241 72.1978L27.3391 74.7418L25.8521 76.1728L26.4361 77.9198L28.6661 78.3168L31.0031 80.1428L34.1361 77.9998L36.3131 78.8728L39.8181 77.6028L41.4641 77.5228L42.4731 75.9338H44.0131L44.4911 74.3448L43.9061 72.3568L45.7651 70.5278L51.3411 69.1748L52.9871 70.3688L58.4031 69.8118L61.0051 71.0048L63.1291 70.1298L65.8381 70.9258Z"
        stroke={element.config.stroke}
        data-name="McKenzie"
        fill={assignColor('McKenzie')}
        data-x="65"
        data-y="70"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'McKenzie')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M108.638 16.3867L108.691 23.3947L118.09 23.3147V44.3477H138.959L159.828 44.2677V51.3087L162.218 51.2287V79.0317L164.554 79.1107L164.607 92.9817L150.854 92.9027L137.154 92.9817L116.709 92.8227L116.603 79.0317L113.948 78.8727L114.054 51.3087L111.346 51.2287L111.187 37.3757L97.4331 37.2147L97.3271 23.2337H101.628V16.3867H108.638Z"
        stroke={element.config.stroke}
        data-name="Ward"
        fill={assignColor('Ward')}
        data-x="108"
        data-y="16"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Ward')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M166.413 160.785L166.254 161.797L167.847 163.275V166.852L170.767 172.289L172.36 173.764L172.626 175.548L171.511 177.72L172.52 179.812L174.644 179.89L173.741 181.516L174.166 183.375L176.29 183.297L176.609 185.697L178.414 186.006L179.954 184.923L182.078 184.459L180.91 187.863L182.928 189.641L186.061 191.032L185.158 192.964L187.229 195.821L185.423 197.75L184.308 201.451L184.627 203.84L182.131 204.919L179.954 204.842L178.042 207.46L176.343 206.305L174.856 206.844L168.325 206.151L166.466 207.306L164.289 211.691L161.899 212.383L161.634 215.304L160.306 215.073L160.359 208.229L147.084 208.152L147.031 188.172L124.887 188.095L124.993 181.439H104.868L104.708 160.941L122.444 160.863H142.676L166.413 160.785Z"
        stroke={element.config.stroke}
        data-name="Morton"
        fill={assignColor('Morton')}
        data-x="166"
        data-y="160"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Morton')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M65.838 70.9259L63.129 70.1299L61.005 71.0049L58.403 69.8119L52.987 70.3689L51.341 69.1749L45.765 70.5279L43.906 72.3569L44.491 74.3449L44.013 75.9339H42.473L41.464 77.5229L39.818 77.6029L36.313 78.8729L34.136 77.9999L31.003 80.1429L28.666 78.3169L26.436 77.9199L25.852 76.1729L27.339 74.7419L24.524 72.1979L20.064 71.3229L17.462 73.8679L18.842 76.1729L16.878 77.2849L14.753 76.1729L14.435 80.8579L13.691 82.1269L11.992 80.0639L10.027 83.5549L7.37196 84.4269L5.51396 81.8889L3.22996 83.3959L1.26596 81.0959L1.15896 49.8689L1.10596 30.3109H28.188L41.995 30.1499L62.705 30.3109L62.758 37.1349L62.864 51.1489L65.785 51.2289L65.838 70.9259Z"
        stroke={element.config.stroke}
        data-name="Williams"
        fill={assignColor('Williams')}
        data-x="65"
        data-y="70"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Williams')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M89.4682 99.9388L91.4332 96.6988L96.1592 98.2008V99.7018L94.5662 101.124L95.9462 102.545L95.7872 109.328L97.2212 112.322L99.0802 114.605L98.8142 133.766L102.213 133.844V158.528L81.9812 158.683L82.0342 160.863L77.9982 160.941L55.1642 160.785L54.9522 147.454L55.0052 133.844H51.0752L51.1812 113.975L51.3412 106.648L64.9352 106.49L75.8212 106.569L75.7682 94.6428L76.7242 96.1448L79.8572 98.1218H83.1492L84.5832 99.3068L88.1942 100.413L89.4682 99.9388Z"
        stroke={element.config.stroke}
        data-name="Dunn"
        fill={assignColor('Dunn')}
        data-x="89"
        data-y="99"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Dunn')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M97.4328 37.2148L111.187 37.3758L111.346 51.2288L114.054 51.3088L113.948 78.8728L116.603 79.0318L116.709 92.8228H89.3088L89.4678 99.9388L88.1938 100.413L84.5828 99.3068L83.1488 98.1218H79.8568L76.7238 96.1448L75.7678 94.6428L75.1298 92.1898L76.1388 87.2008L79.6438 83.5548L80.6528 80.7778L78.7408 80.0638L77.0948 77.1258L74.8118 77.7608L74.2808 74.5828L69.7668 73.4698L70.6698 72.3568L69.8728 70.6868L67.1118 71.4028L65.8378 70.9258L65.7848 51.2288L62.8638 51.1488L62.7578 37.1348L84.6358 37.2958L97.4328 37.2148Z"
        stroke={element.config.stroke}
        data-name="Mountrail"
        fill={assignColor('Mountrail')}
        data-x="97"
        data-y="37"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Mountrail')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M109.806 232.555L109.859 220.755L109.806 214.843H107.31L107.257 194.663L107.151 188.172L104.868 188.095V181.439H124.993L124.887 188.095L147.031 188.172L147.084 208.152L160.359 208.229L160.306 215.073L158.288 215.611L157.226 217.454L157.492 218.913L152.5 222.98L152.925 224.13L147.933 226.199L147.349 227.655L144.482 230.795L141.774 230.565L138.906 232.555L136.623 233.091L136.463 234.697L131.525 235.768L129.879 234.085L127.489 235.615L124.409 233.779L121.489 233.55L118.621 233.932L118.037 231.178L115.329 232.02L109.806 232.555Z"
        stroke={element.config.stroke}
        data-name="Grant"
        fill={assignColor('Grant')}
        data-x="109"
        data-y="232"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Grant')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M295.77 133.923H297.469L297.416 140.733V161.097H298.849L298.903 188.172L280.37 188.249L267.148 188.095L245.27 188.017L245.376 174.695V161.097H243.57L243.517 147.298L243.676 133.923H254.987H277.29H295.77Z"
        stroke={element.config.stroke}
        data-name="Stutsman"
        fill={assignColor('Stutsman')}
        data-x="295"
        data-y="133"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Stutsman')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M188.875 240.887L158.554 240.964L109.912 240.887L109.806 232.555L115.329 232.02L118.037 231.178L118.621 233.932L121.489 233.55L124.409 233.779L127.489 235.615L129.879 234.085L131.525 235.768L136.463 234.697L136.623 233.091L138.906 232.555L141.774 230.565L144.482 230.795L147.349 227.655L147.933 226.199L152.925 224.13L152.5 222.98L157.492 218.913L157.226 217.454L158.288 215.611L160.306 215.073L161.634 215.304L161.899 212.383L164.289 211.691L166.466 207.306L168.325 206.151L174.856 206.844L176.343 206.305L178.042 207.46L179.954 204.842L182.131 204.919L184.627 203.84L186.645 207.998L187.07 210.537L186.432 212.921L185.158 215.227L186.432 217.378L186.167 219.45L184.415 221.752L182.768 225.127L183.459 227.962L183.406 230.948L186.326 235.691L187.919 236.761L189.194 238.978L188.875 240.887Z"
        stroke={element.config.stroke}
        data-name="Sioux"
        fill={assignColor('Sioux')}
        data-x="188"
        data-y="240"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Sioux')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M258.386 51.3877L258.492 68.3787L260.988 69.8117L261.89 69.6527L262.953 72.3567L265.236 72.4367L265.395 78.9527L267.148 77.2047L269.059 76.8877V78.9527L270.865 80.6987L272.776 80.8577L274.954 80.0637L275.803 78.3167L277.874 77.0467L278.618 75.8547L280.529 78.6347V80.3807L281.698 80.6987L282.866 82.7617L284.724 80.6197L286.477 80.6987L287.273 83.7927L288.919 85.4577L289.344 87.3597L294.389 87.5177L294.336 92.9027H271.343H253.394H225.94L225.887 79.1907H224.082L224.135 51.4677H242.986L258.386 51.3877Z"
        stroke={element.config.stroke}
        data-name="Benson"
        fill={assignColor('Benson')}
        data-x="258"
        data-y="51"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Benson')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M201.354 37.5359L201.301 51.3879H203.425V79.1109L205.602 79.1909L205.496 92.9029L184.999 92.9819H164.607L164.554 79.1109L162.218 79.0319V51.2289L159.828 51.3089V44.2679L159.934 37.2959V30.4719L175.759 30.3909L187.601 30.5519H194.504L194.61 37.4559L201.354 37.5359Z"
        stroke={element.config.stroke}
        data-name="McHenry"
        fill={assignColor('McHenry')}
        data-x="201"
        data-y="37"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'McHenry')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M206.399 0.632812V23.5558H208.31V37.4558L201.354 37.5358L194.61 37.4558L194.504 30.5518H187.601L175.759 30.3908L159.934 30.4718V37.2958L152.925 37.3758H138.853V23.3948H136.57L136.463 0.794815L162.855 0.713814L178.68 0.794815L206.399 0.632812Z"
        stroke={element.config.stroke}
        data-name="Bottineau"
        fill={assignColor('Bottineau')}
        data-x="206"
        data-y="0"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Bottineau')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M210.063 133.923L209.904 161.019L211.921 161.097L211.815 188.017L200.504 187.863H180.91L182.078 184.459L179.954 184.923L178.414 186.006L176.609 185.697L176.29 183.297L174.166 183.375L173.741 181.516L174.644 179.89L172.52 179.812L171.511 177.72L172.626 175.548L172.36 173.764L170.767 172.289L167.847 166.852V163.275L166.254 161.797L166.413 160.785L168.696 158.917L169.28 156.268L166.466 152.526L165.616 147.844L165.085 147.141H176.237L176.343 134.001L180.326 133.923L203.319 134.001L210.063 133.923Z"
        stroke={element.config.stroke}
        data-name="Burleigh"
        fill={assignColor('Burleigh')}
        data-x="210"
        data-y="133"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Burleigh')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M305.275 37.5359L305.381 51.5479H306.762L306.602 65.3529H299.858L299.752 79.1909H294.389V87.5179L289.344 87.3599L288.919 85.4579L287.273 83.7929L286.477 80.6989L284.724 80.6199L282.866 82.7619L281.698 80.6989L280.529 80.3809V78.6349L278.618 75.8549L277.874 77.0469L275.803 78.3169L274.954 80.0639L272.776 80.8579L270.865 80.6989L269.059 78.9529V76.8879L267.148 77.2049L265.395 78.9529L265.236 72.4369L262.953 72.3569L261.89 69.6529L260.988 69.8119L258.492 68.3789L258.386 51.3879H270.599L270.705 37.5359H289.663H305.275Z"
        stroke={element.config.stroke}
        data-name="Ramsey"
        fill={assignColor('Ramsey')}
        data-x="305"
        data-y="37"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Ramsey')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M351.474 140.811L383.972 140.889L384.716 145.189L384.45 149.093L385.087 150.888L384.131 158.45L384.875 159.54V161.875L386.096 162.264L386.415 164.909L387.318 167.241L386.68 171.901L385.937 173.764L386.309 176.712L386.946 177.875L386.627 183.839L385.831 186.161L386.84 188.249H360.395H339.101L339.048 161.097H337.88V140.733L351.474 140.811Z"
        stroke={element.config.stroke}
        data-name="Cass"
        fill={assignColor('Cass')}
        data-x="351"
        data-y="140"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Cass')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M149.314 138.542V140.576H122.391L122.444 160.863L104.708 160.941L102.213 160.863V158.528V133.844L98.814 133.766L99.08 114.605L101.469 115.235L105.133 114.448L108.319 114.605L108.903 117.752L110.868 117.359L113.576 118.146L115.754 120.033L119.577 120.74L123.825 117.988L126.002 117.438L129.348 118.303L131.419 117.988L138.641 115.392L140.127 115.471L142.995 119.01L139.596 122.154L139.649 123.568L141.296 126.316L141.667 128.356L143.685 130.788L143.845 133.844L144.907 136.899L147.137 136.977L149.314 138.542Z"
        stroke={element.config.stroke}
        data-name="Mercer"
        fill={assignColor('Mercer')}
        data-x="149"
        data-y="138"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Mercer')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M242.933 37.5358L242.986 51.4678H224.135L224.082 79.1908H225.887L225.94 92.9028L212.399 92.9818L205.496 92.9028L205.602 79.1908L203.425 79.1108V51.3878H201.301L201.354 37.5358L208.31 37.4558L222.17 37.6158L242.933 37.5358Z"
        stroke={element.config.stroke}
        data-name="Pierce"
        fill={assignColor('Pierce')}
        data-x="242"
        data-y="37"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Pierce')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M211.815 188.017H220.736L220.471 214.996H222.542L222.329 234.468L222.436 241.04H215.692L188.875 240.887L189.194 238.978L187.919 236.761L186.326 235.691L183.406 230.948L183.459 227.962L182.768 225.127L184.415 221.752L186.167 219.45L186.432 217.378L185.158 215.227L186.432 212.921L187.07 210.537L186.645 207.998L184.627 203.84L184.308 201.451L185.423 197.75L187.229 195.821L185.158 192.964L186.061 191.032L182.928 189.641L180.91 187.863H200.504L211.815 188.017Z"
        stroke={element.config.stroke}
        data-name="Emmons"
        fill={assignColor('Emmons')}
        data-x="211"
        data-y="188"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Emmons')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M381.37 106.884L356.943 106.805L350.199 106.726H343.561L328.427 106.648L328.48 86.0917L328.427 79.1907H327.312L327.206 65.5117L367.882 65.5917L367.51 66.3887L368.838 72.4367L369.847 73.2317V75.0597L371.387 76.8877L372.502 85.2197L374.308 87.2007V90.8447L375.051 91.2407L376.697 96.4617L378.768 99.3067L379.034 101.834L380.202 105.386L381.37 106.884Z"
        stroke={element.config.stroke}
        data-name="Grand Forks"
        fill={assignColor('Grand Forks')}
        data-x="381"
        data-y="106"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Grand Forks')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M136.463 0.794815L136.57 23.3948H138.853V37.3758H152.925L159.934 37.2958L159.828 44.2678L138.959 44.3478H118.09V23.3148L108.691 23.3948L108.638 16.3868L108.585 0.632812L136.463 0.794815Z"
        stroke={element.config.stroke}
        data-name="Renville"
        fill={assignColor('Renville')}
        data-x="136"
        data-y="0"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Renville')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M363.103 241.498V236.991L361.563 236.685L361.457 214.996H360.342L360.395 188.249H386.84L388.858 193.195L389.389 199.832L390.504 200.835L390.185 202.145L391.088 204.457L392.468 205.689L392.893 207.306L395.601 209.999L396.717 212.383L396.345 214.074L396.876 217.378L396.717 219.527L397.354 220.678L397.301 222.98L398.257 226.429L399 231.025L397.832 234.238L398.681 241.498L375.263 241.575L363.103 241.498Z"
        stroke={element.config.stroke}
        data-name="Richland"
        fill={assignColor('Richland')}
        data-x="363"
        data-y="341"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Richland')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M324.763 0.632812L324.816 23.5558H325.985L326.091 37.5358H305.275H289.663H270.705V23.6358L269.006 23.5558L268.953 16.5478L269.006 0.632812L289.45 0.713814H308.355L324.763 0.632812Z"
        stroke={element.config.stroke}
        data-name="Cavalier"
        fill={assignColor('Cavalier')}
        data-x="324"
        data-y="0"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Cavalier')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M339.101 188.249H320.409L298.903 188.172L298.849 161.097H297.416V140.733L324.338 140.655L337.88 140.733V161.097H339.048L339.101 188.249Z"
        stroke={element.config.stroke}
        data-name="Barnes"
        fill={assignColor('Barnes')}
        data-x="339"
        data-y="188"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Barnes')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M243.676 133.923L243.517 147.298L243.57 161.097H245.376V174.695L245.27 188.017H220.736H211.815L211.921 161.097L209.904 161.019L210.063 133.923H214.205H243.676Z"
        stroke={element.config.stroke}
        data-name="Kidder"
        fill={assignColor('Kidder')}
        data-x="243"
        data-y="133"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Kidder')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M51.075 133.844H55.005L54.952 147.454L55.164 160.785L44.491 160.863V188.095L24.365 188.172L24.418 161.097L21.126 161.019L21.179 154.32L21.126 140.576L21.179 133.688L51.075 133.844Z"
        stroke={element.config.stroke}
        data-name="Billings"
        fill={assignColor('Billings')}
        data-x="51"
        data-y="133"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Billings')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M104.708 160.941L104.868 181.439V188.095H60.5812H44.4912V160.863L55.1642 160.785L77.9982 160.941L82.0342 160.863L81.9812 158.683L102.213 158.528V160.863L104.708 160.941Z"
        stroke={element.config.stroke}
        data-name="Stark"
        fill={assignColor('Stark')}
        data-x="104"
        data-y="160"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Stark')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M59.837 0.632812L59.996 23.1538L62.758 23.2338L62.705 30.3108L41.995 30.1498L28.188 30.3108H1.106L1 0.713814H18.099H56.757L59.837 0.632812Z"
        stroke={element.config.stroke}
        data-name="Divide"
        fill={assignColor('Divide')}
        data-x="59"
        data-y="0"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Divide')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M367.882 65.5919L327.206 65.5119L306.602 65.3529L306.762 51.5479H305.381L305.275 37.5359H326.091L366.714 37.6159L367.617 38.1779L367.033 42.6659L368.626 44.4279L368.838 45.9489L366.82 49.5499L367.033 51.6279L368.519 53.8659L368.095 56.1819L369.263 57.2989L367.882 62.4839L368.944 63.9189L367.882 65.5919Z"
        stroke={element.config.stroke}
        data-name="Walsh"
        fill={assignColor('Walsh')}
        data-x="367"
        data-y="65"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Walsh')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M253.394 92.9028V106.805L254.881 106.726L254.934 113.503L254.987 133.923H243.676H214.205L214.311 106.726H212.293L212.399 92.9818L225.94 92.9028H253.394Z"
        stroke={element.config.stroke}
        data-name="Wells"
        fill={assignColor('Wells')}
        data-x="253"
        data-y="92"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Wells')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M59.8369 0.632812L87.5559 0.794815L108.585 0.632812L108.638 16.3868H101.628V23.2338H97.3269L97.4329 37.2148L84.6359 37.2958L62.7579 37.1348L62.7049 30.3108L62.7579 23.2338L59.9959 23.1538L59.8369 0.632812Z"
        stroke={element.config.stroke}
        data-name="Burke"
        fill={assignColor('Burke')}
        data-x="59"
        data-y="0"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Burke')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M109.859 220.755L83.5211 220.832V214.92L60.8461 215.15L60.6341 201.683L60.5811 188.095H104.868L107.151 188.172L107.257 194.663L107.31 214.843H109.806L109.859 220.755Z"
        stroke={element.config.stroke}
        data-name="Hettinger"
        fill={assignColor('Hettinger')}
        data-x="109"
        data-y="220"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Hettinger')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M24.3651 188.172L44.4911 188.095H60.5811L60.6341 201.683L60.8461 215.15L56.9161 215.073L31.0031 215.227L1.26611 215.073V195.049L14.0631 194.971L14.1161 188.095L24.3651 188.172Z"
        stroke={element.config.stroke}
        data-name="Slope"
        fill={assignColor('Slope')}
        data-x="24"
        data-y="188"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Slope')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M366.714 37.6158L326.091 37.5358L325.985 23.5558H324.816L324.763 0.632812L338.782 0.875816L363.262 0.632812L362.678 3.38481L363.9 6.37582L364.059 8.31581L365.864 11.0618L366.13 13.9668L365.493 15.8218L367.988 20.9798L368.095 22.9928L370.431 26.2108L370.059 28.4628L367.51 31.9178L367.457 35.2088L366.714 37.6158Z"
        stroke={element.config.stroke}
        data-name="Pembina"
        fill={assignColor('Pembina')}
        data-x="366"
        data-y="37"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Pembina')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M56.9161 215.073L56.9701 240.887H1.31911L1.26611 215.073L31.0031 215.227L56.9161 215.073Z"
        stroke={element.config.stroke}
        data-name="Bowman"
        fill={assignColor('Bowman')}
        data-x="56"
        data-y="215"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Bowman')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M269.006 0.632812L268.953 16.5478L269.006 23.5558L270.705 23.6358V37.5358L270.599 51.3878H258.386L242.986 51.4678L242.933 37.5358L242.88 23.6358L241.128 23.5558L241.074 0.632812L259.66 0.713814L269.006 0.632812Z"
        stroke={element.config.stroke}
        data-name="Towner"
        fill={assignColor('Towner')}
        data-x="269"
        data-y="0"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Towner')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M267.148 188.095L280.37 188.249L298.903 188.172L320.409 188.249L320.303 215.073L313.665 214.996L295.61 215.073H280.423L268.9 214.996H267.041L267.148 188.095Z"
        stroke={element.config.stroke}
        data-name="LaMoure"
        fill={assignColor('LaMoure')}
        data-x="267"
        data-y="188"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'LaMoure')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M320.303 215.073H321.79L321.736 241.498L303.469 241.575L283.662 241.422L268.9 241.269L268.794 234.621L268.9 214.996L280.423 215.073H295.61L313.665 214.996L320.303 215.073Z"
        stroke={element.config.stroke}
        data-name="Dickey"
        fill={assignColor('Dickey')}
        data-x="320"
        data-y="215"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Dickey')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M21.1791 133.688L21.1261 140.576L21.1791 154.32L21.1261 161.019L24.4181 161.097L24.3651 188.172L14.1161 188.095L14.0631 194.971L1.26611 195.049V187.399V144.876L1.31911 133.844L21.1791 133.688Z"
        stroke={element.config.stroke}
        data-name="Golden Valley"
        fill={assignColor('Golden Valley')}
        data-x="21"
        data-y="133"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Golden Valley')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M109.859 220.755L109.806 232.555L109.912 240.887H87.45H56.97L56.916 215.073L60.846 215.15L83.521 214.92V220.832L109.859 220.755Z"
        stroke={element.config.stroke}
        data-name="Adams"
        fill={assignColor('Adams')}
        data-x="109"
        data-y="220"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Adams')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M327.206 65.5118L327.312 79.1908H328.427L328.48 86.0918L328.427 106.648H322.905L295.61 106.726L294.389 106.648L294.336 92.9028L294.389 87.5178V79.1908H299.752L299.858 65.3528H306.602L327.206 65.5118Z"
        stroke={element.config.stroke}
        data-name="Nelson"
        fill={assignColor('Nelson')}
        data-x="327"
        data-y="65"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Nelson')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M214.205 133.923H210.063L203.319 134.001L180.326 133.923L180.273 106.726H184.999V92.9818L205.496 92.9028L212.399 92.9818L212.293 106.726H214.311L214.205 133.923Z"
        stroke={element.config.stroke}
        data-name="Sheridan"
        fill={assignColor('Sheridan')}
        data-x="214"
        data-y="133"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Sheridan')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M241.074 0.632812L241.128 23.5558L242.88 23.6358L242.933 37.5358L222.17 37.6158L208.31 37.4558V23.5558H206.399V0.632812H216.063H241.074Z"
        stroke={element.config.stroke}
        data-name="Rolette"
        fill={assignColor('Rolette')}
        data-x="241"
        data-y="0"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Rolette')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M245.27 188.017L267.148 188.095L267.041 214.996H249.146H222.542H220.471L220.736 188.017H245.27Z"
        stroke={element.config.stroke}
        data-name="Logan"
        fill={assignColor('Logan')}
        data-x="245"
        data-y="188"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Logan')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M267.041 214.996H268.9L268.794 234.621L268.9 241.269L230.879 241.04H222.436L222.329 234.468L222.542 214.996H249.146H267.041Z"
        stroke={element.config.stroke}
        data-name="McIntosh"
        fill={assignColor('McIntosh')}
        data-x="267"
        data-y="214"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'McIntosh')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M383.972 140.889L351.474 140.811L351.367 134.079H350.305L350.146 113.582L350.199 106.726L356.943 106.805L381.37 106.884L381.317 109.643L382.804 111.613L383.282 113.424L382.485 114.999L383.176 116.179L382.167 118.303L383.016 119.168L383.229 121.997L382.751 125.924L383.919 128.984L383.122 130.788L384.185 133.296L383.441 138.464L383.972 140.889Z"
        stroke={element.config.stroke}
        data-name="Traill"
        fill={assignColor('Traill')}
        data-x="383"
        data-y="140"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Traill')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M165.085 147.141L165.616 147.844L166.466 152.526L169.28 156.268L168.696 158.917L166.413 160.785L142.676 160.863H122.444L122.391 140.576H149.314V138.542L151.704 140.264L152.819 139.716L153.137 137.76L156.324 136.585L160.412 136.82L163.386 138.934L164.183 141.515L163.439 144.329L165.085 147.141Z"
        stroke={element.config.stroke}
        data-name="Oliver"
        fill={assignColor('Oliver')}
        data-x="165"
        data-y="147"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Oliver')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M360.342 214.996H361.457L361.563 236.685L363.103 236.991V241.498H343.243H321.736L321.79 215.073L328.48 214.92L347.066 214.996H360.342Z"
        stroke={element.config.stroke}
        data-name="Sargent"
        fill={assignColor('Sargent')}
        data-x="360"
        data-y="214"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Sargent')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M339.101 188.249H360.395L360.342 214.996H347.066L328.48 214.92L321.79 215.073H320.303L320.409 188.249H339.101Z"
        stroke={element.config.stroke}
        data-name="Ransom"
        fill={assignColor('Ransom')}
        data-x="339"
        data-y="188"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Ransom')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M324.338 140.655L297.416 140.733L297.469 133.923H295.77L295.61 113.346V106.726L322.905 106.648L323.011 134.001H324.285L324.338 140.655Z"
        stroke={element.config.stroke}
        data-name="Griggs"
        fill={assignColor('Griggs')}
        data-x="324"
        data-y="140"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Griggs')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M328.427 106.648L343.561 106.726H350.199L350.146 113.582L350.305 134.079H351.367L351.474 140.811L337.88 140.733L324.338 140.655L324.285 134.001H323.011L322.905 106.648H328.427Z"
        stroke={element.config.stroke}
        data-name="Steele"
        fill={assignColor('Steele')}
        data-x="328"
        data-y="106"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Steele')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M294.336 92.9028L294.389 106.648L295.61 106.726V113.346L254.934 113.503L254.881 106.726L253.394 106.805V92.9028H271.343H294.336Z"
        stroke={element.config.stroke}
        data-name="Eddy"
        fill={assignColor('Eddy')}
        data-x="294"
        data-y="92"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Eddy')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M295.61 113.346L295.77 133.923H277.29H254.987L254.934 113.503L295.61 113.346Z"
        stroke={element.config.stroke}
        data-name="Foster"
        fill={assignColor('Foster')}
        data-x="295"
        data-y="113"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Foster')}
        onMouseLeave={handleMouseLeave}
      />
      {present && renderTooltip()}
      {renderLabels()}
    </svg>
  );
};

MapNorthDakota.propTypes = ElementPropTypes;
MapNorthDakotaPresent.propTypes = {
  element: PropTypes.object.isRequired,
};
MapNorthDakotaContent.propTypes = {
  element: PropTypes.object.isRequired,
  present: PropTypes.bool,
};

export default MapNorthDakota;
