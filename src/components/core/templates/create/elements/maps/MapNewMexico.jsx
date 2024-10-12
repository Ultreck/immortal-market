import { ElementPropTypes } from '@/lib/prop-types.js';
import ElementWrapper from '../../ElementWrapper.jsx';
import useMapElement from '@/lib/design/use-map-element.jsx';
import PropTypes from 'prop-types';

const MapNewMexico = ({ element, active, highlighted, width, onClick, onChange }) => {
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
      <MapNewMexicoContent element={element} />
    </ElementWrapper>
  );
};

export const MapNewMexicoPresent = ({ element }) => {
  return <MapNewMexicoContent element={element} />;
};

export const MapNewMexicoPreview = () => {
  return <MapNewMexicoContent element={{ config: { data: [], fill: '#f9fafb', stroke: '#f9fafb' } }} />;
};

export const MapNewMexicoContent = ({ element }) => {
  const { el, assignColor, renderLabels } = useMapElement(element);

  return (
    <svg ref={el} width="100%" viewBox="0 0 388 440" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M326.908 229.95L333.615 230.028L333.679 250.206L341.537 250.436L341.664 262.574L355.079 262.727L354.952 269.478L341.728 269.555L341.537 282.806H338.662L338.406 315.628L335.467 315.703H301.099H270.051L269.796 349.578L269.157 349.654L250.695 349.275L236.896 349.426L237.088 315.932H239.452V303.052L265.58 302.823L265.644 289.306L266.474 282.346L266.538 249.897L266.346 229.487H272.926L272.99 236.503L313.555 236.735L313.492 230.028L326.908 229.95Z"
        stroke={element.config.stroke}
        data-name="Chaves"
        fill={assignColor('Chaves')}
        data-x="326"
        data-y="229"
      />
      <path
        d="M195.181 1.28229L197.352 9.03572L196.586 16.3015L197.352 29.1333L199.589 43.846L197.991 52.6573L193.392 54.6397L192.37 57.1764L204.763 62.3264L212.365 72.6136L225.844 79.5669L223.161 82.646L217.476 83.8302L213.706 82.2519L213.771 80.2774L191.731 80.1988L192.37 85.9609L180.104 86.0395L180.04 83.1993L179.977 80.4357L139.347 80.5143L139.602 63.5147L105.937 63.3554L92.0737 63.039L92.2648 26.9837L92.7126 16.9394L94.0541 14.3062L103.317 8.39681L105.233 1.12207H139.475L139.922 1.68235L195.181 1.28229Z"
        stroke={element.config.stroke}
        data-name="Rio Arriba"
        fill={assignColor('Rio Arriba')}
        data-x="195"
        data-y="1"
      />
      <path
        d="M239.451 303.052V315.932H237.088L236.896 349.426L250.695 349.275L269.156 349.654L269.285 388.635L243.348 388.711H211.279H171.799L171.863 360.478L171.672 316.16H174.099V309L173.907 283.265L213.387 283.188V289.688H239.579L239.451 303.052Z"
        stroke={element.config.stroke}
        data-name="Otero"
        fill={assignColor('Otero')}
        data-x="239"
        data-y="303"
      />
      <path
        d="M169.308 202.201V216.283L200.547 216.361L200.738 249.744H192.625L192.497 263.188L172.055 262.421V276.375L131.744 276.758L123.759 276.452L86.2597 276.682L86.1323 216.67L85.5571 191.346L118.905 191.501L139.283 191.657L146.31 195.302L163.558 200.961L169.308 202.201Z"
        stroke={element.config.stroke}
        data-name="Socorro"
        fill={assignColor('Socorro')}
        data-x="169"
        data-y="202"
      />
      <path
        d="M67.8619 297.557H76.5498L78.5302 307.628L77.4445 313.114L83.0025 319.51L82.5547 324.15L85.7492 329.927L85.3014 339.191L89.2622 342.983L73.0358 343.211L72.9084 349.578L53.4239 349.73V382.756H54.2549L54.1912 399.249L34.5145 399.174L34.5792 382.756H33.7482L33.9403 349.805H26.785V343.287H13.6895L13.6248 330.003L0.976074 329.775V297.099H23.5268L67.8619 297.557Z"
        stroke={element.config.stroke}
        data-name="Grant"
        fill={assignColor('Grant')}
        data-x="67"
        data-y="297"
      />
      <path
        d="M86.2597 276.682L68.053 276.452L67.8619 297.557L23.5268 297.099H0.976074V250.359L1.04076 191.657L85.5571 191.346L86.1324 216.67L86.2597 276.682Z"
        stroke={element.config.stroke}
        data-name="Catron"
        fill={assignColor('Catron')}
        data-x="86"
        data-y="276"
      />
      <path
        d="M91.818 80.2774L112.196 80.4356L112.452 135.39L91.9454 135.077L91.8817 131.71H85.1743V135.077H58.7264L38.0924 134.921L37.9651 162.105L1.04102 162.026V131.397L1.10471 80.0405L57.8965 80.2774H91.818Z"
        stroke={element.config.stroke}
        data-name="McKinley"
        fill={assignColor('McKinley')}
        data-x="91"
        data-y="80"
      />
      <path
        d="M266.474 209.555L266.346 229.487L266.538 249.897L266.474 282.346L265.644 289.306L265.58 302.823L239.452 303.052L239.579 289.689H213.387V283.188L173.907 283.265L172.055 276.375V262.421L192.497 263.188L192.625 249.744H200.738L200.547 216.361L239.707 216.283V209.478L266.474 209.555Z"
        stroke={element.config.stroke}
        data-name="Lincoln"
        fill={assignColor('Lincoln')}
        data-x="266"
        data-y="209"
      />
      <path
        d="M299.885 97.8621L321.988 97.7835L324.927 96.2081L341.089 125.99H346.647V128.576L346.711 140.163L332.593 140.084V138.364L315.536 147.824L315.472 142.196L279.953 142.119L240.985 142.04L241.049 155.631H213.898V125.99L213.515 90.6929H237.344L252.42 95.7364L256.7 98.7289L259.383 98.3348L299.885 97.8621Z"
        stroke={element.config.stroke}
        data-name="San Miguel"
        fill={assignColor('San Miguel')}
        data-x="299"
        data-y="97"
      />
      <path
        d="M105.233 1.12207L103.317 8.39681L94.054 14.3062L92.7125 16.9394L92.2647 26.9837L92.0736 63.039L91.8178 80.2774H57.8962L1.10449 80.0406V26.506V1.12207L33.6209 1.20168L70.0981 1.28229L105.233 1.12207Z"
        stroke={element.config.stroke}
        data-name="San Juan"
        fill={assignColor('San Juan')}
        data-x="105"
        data-y="1"
      />
      <path
        d="M112.452 135.39H116.732L119.16 141.805L127.656 161.949L119.096 162.026L118.905 191.501L85.5574 191.346L1.04102 191.657V162.026L37.9651 162.105L38.0924 134.921L58.7264 135.077H85.1743V131.71H91.8817L91.9454 135.077L112.452 135.39Z"
        stroke={element.config.stroke}
        data-name="Cibola"
        fill={assignColor('Cibola')}
        data-x="112"
        data-y="135"
      />
      <path
        d="M172.055 276.375L173.907 283.265L174.099 309L139.156 326.431V329.775H112.835L112.708 342.983H89.2626L85.3018 339.191L85.7496 329.927L82.5551 324.149L83.0029 319.51L77.4449 313.114L78.5306 307.628L76.5502 297.557H67.8623L68.0534 276.452L86.2601 276.681L123.759 276.452L131.745 276.758L172.055 276.375Z"
        stroke={element.config.stroke}
        data-name="Sierra"
        fill={assignColor('Sierra')}
        data-x="172"
        data-y="276"
      />
      <path
        d="M92.0736 63.0391L105.936 63.3555L139.602 63.5148L139.347 80.5144L179.977 80.4357L180.04 83.1994L170.394 83.5934V94.003L177.74 96.8392L179.848 99.988L179.913 134.372L180.168 142.196L135.45 142.04L119.159 141.805L116.732 135.39H112.452L112.196 80.4357L91.8179 80.2775L92.0736 63.0391Z"
        stroke={element.config.stroke}
        data-name="Sandoval"
        fill={assignColor('Sandoval')}
        data-x="92"
        data-y="63"
      />
      <path
        d="M384.658 100.932L363.384 101.012L363.32 80.6725L363.895 73.7202H336.617L336.554 66.7599H322.818V63.2768L322.947 45.911V1.28229L387.212 1.12207V40.8276L384.658 40.9062V100.932Z"
        stroke={element.config.stroke}
        data-name="Union"
        fill={assignColor('Union')}
        data-x="384"
        data-y="100"
      />
      <path
        d="M384.529 162.65L369.197 162.494L369.325 169.505H362.554L362.617 176.275L355.974 176.12L355.846 182.806L342.43 182.728L342.239 189.562L340.195 189.639H326.843H315.28V175.965L315.536 147.824L332.593 138.364V140.085L346.71 140.163L346.647 128.576L361.787 128.42L363.193 127.48L363.384 101.012L384.658 100.932L384.529 162.65Z"
        stroke={element.config.stroke}
        data-name="Quay"
        fill={assignColor('Quay')}
        data-x="384"
        data-y="162"
      />
      <path
        d="M54.1913 399.248L54.7655 405.038L54.5108 438.851L0.785156 439L0.848848 395.562L0.912539 369.928L0.97623 329.775L13.6249 330.003L13.6896 343.287H26.7851V349.805H33.9405L33.7484 382.756H34.5794L34.5147 399.174L54.1913 399.248Z"
        stroke={element.config.stroke}
        data-name="Hidalgo"
        fill={assignColor('Hidalgo')}
        data-x="54"
        data-y="399"
      />
      <path
        d="M171.799 388.711L156.084 388.786L154.998 398.722L161.833 405.113H113.219L112.771 373.779L112.708 342.983L112.835 329.775H139.155V326.432L174.099 309V316.16H171.672L171.863 360.479L171.799 388.711Z"
        stroke={element.config.stroke}
        data-name="Dona Ana"
        fill={assignColor('Dona Ana')}
        data-x="171"
        data-y="388"
      />
      <path
        d="M341.537 388.711L341.472 349.275L335.532 349.199L335.467 315.703L338.406 315.628L338.662 282.806H341.537L341.728 269.555L354.952 269.478L383.891 269.248L383.252 312.962L383.188 349.426V388.861L341.537 388.711Z"
        stroke={element.config.stroke}
        data-name="Lea"
        fill={assignColor('Lea')}
        data-x="341"
        data-y="388"
      />
      <path
        d="M335.467 315.703L335.532 349.199L341.472 349.275L341.536 388.711L321.669 388.786L269.285 388.635L269.156 349.654L269.795 349.578L270.051 315.703H301.098H335.467Z"
        stroke={element.config.stroke}
        data-name="Eddy"
        fill={assignColor('Eddy')}
        data-x="335"
        data-y="315"
      />
      <path
        d="M322.947 1.28223V45.9109L322.818 63.2768L295.477 63.1971L268.135 63.2768V59.7917L236.002 59.712L238.11 56.7006L238.621 48.9283L237.279 44.8789L238.621 41.3043L235.491 36.4548L237.088 29.8508L236.002 26.5856L239.452 23.0796L244.69 23.1592L244.818 13.1885L246.415 8.7162L244.179 2.96109L245.456 1.36184L257.403 1.60168H302.248L322.947 1.28223Z"
        stroke={element.config.stroke}
        data-name="Colfax"
        fill={assignColor('Colfax')}
        data-x="322"
        data-y="1"
      />
      <path
        d="M315.536 147.824L315.28 175.965H301.737L301.865 182.805L295.157 182.961L295.029 189.639L266.602 189.717L266.473 209.555L239.707 209.478V189.329L241.049 189.406V155.631L240.985 142.04L279.953 142.119L315.472 142.196L315.536 147.824Z"
        stroke={element.config.stroke}
        data-name="Guadalupe"
        fill={assignColor('Guadalupe')}
        data-x="315"
        data-y="147"
      />
      <path
        d="M384.593 213.191L384.529 236.427L383.89 269.248L354.952 269.478L355.079 262.727L341.664 262.574L341.537 250.436L333.679 250.206L333.615 230.028L326.907 229.95L326.843 189.639H340.195L340.322 213.114L384.593 213.191Z"
        stroke={element.config.stroke}
        data-name="Roosevelt"
        fill={assignColor('Roosevelt')}
        data-x="384"
        data-y="213"
      />
      <path
        d="M241.048 155.631V189.406L239.707 189.329V209.478V216.283L200.547 216.361L169.308 216.283V202.2V196H165.858L166.306 169.272L169.499 169.193L186.365 168.96V162.494L180.487 162.339L180.36 155.787L213.898 155.631H241.048Z"
        stroke={element.config.stroke}
        data-name="Torrance"
        fill={assignColor('Torrance')}
        data-x="241"
        data-y="155"
      />
      <path
        d="M322.819 63.2769V66.76H336.554L336.618 73.7203H363.895L363.32 80.6726L363.384 101.012L363.193 127.48L361.788 128.42L346.647 128.576V125.99H341.089L324.927 96.2083L321.989 97.7836L299.885 97.8623L298.479 91.7967L301.482 87.5383L301.609 80.4357L296.499 69.3713L295.477 63.1973L322.819 63.2769Z"
        stroke={element.config.stroke}
        data-name="Harding"
        fill={assignColor('Harding')}
        data-x="322"
        data-y="63"
      />
      <path
        d="M236.002 59.712L230.061 77.0391L225.844 79.5668L212.365 72.6135L204.763 62.3264L192.37 57.1763L193.392 54.6396L197.991 52.6572L199.589 43.8459L197.352 29.1332L196.586 16.3014L197.352 9.03565L195.181 1.28223L245.456 1.36184L244.179 2.96109L246.415 8.7162L244.817 13.1885L244.69 23.1592L239.451 23.0796L236.002 26.5856L237.088 29.8508L235.491 36.4548L238.62 41.3043L237.279 44.8789L238.62 48.9283L238.11 56.7006L236.002 59.712Z"
        stroke={element.config.stroke}
        data-name="Taos"
        fill={assignColor('Taos')}
        data-x="236"
        data-y="59"
      />
      <path
        d="M112.708 342.983L112.771 373.779L113.219 405.113L82.5546 405.189L54.7653 405.038L54.1911 399.248L54.2548 382.756H53.4238V349.729L72.9084 349.578L73.0358 343.211L89.2621 342.983H112.708Z"
        stroke={element.config.stroke}
        data-name="Luna"
        fill={assignColor('Luna')}
        data-x="112"
        data-y="342"
      />
      <path
        d="M315.28 175.965V189.639H326.843L326.908 229.95L313.492 230.028L313.555 236.735L272.99 236.503L272.926 229.487H266.346L266.474 209.555L266.602 189.717L295.029 189.639L295.158 182.961L301.865 182.805L301.738 175.965H315.28Z"
        stroke={element.config.stroke}
        data-name="DeBaca"
        fill={assignColor('DeBaca')}
        data-x="315"
        data-y="175"
      />
      <path
        d="M295.477 63.1973L296.499 69.3713L301.609 80.4357L301.482 87.5383L298.479 91.7967L299.885 97.8623L259.383 98.335L256.7 98.7291L252.42 95.7366L237.344 90.693H213.515L213.706 82.2519L217.476 83.8303L223.161 82.646L225.844 79.5669L230.061 77.0392L236.002 59.7122L268.134 59.7918V63.2769L295.477 63.1973Z"
        stroke={element.config.stroke}
        data-name="Mora"
        fill={assignColor('Mora')}
        data-x="295"
        data-y="63"
      />
      <path
        d="M213.706 82.2518L213.515 90.6929L213.898 125.99V155.631L180.36 155.787L180.168 142.196L179.913 134.372L179.848 99.9878L184.704 94.0815L179.913 92.8992L179.977 91.8751L180.104 86.0394L192.369 85.9608L191.731 80.1987L213.771 80.2774L213.706 82.2518Z"
        stroke={element.config.stroke}
        data-name="Santa Fe"
        fill={assignColor('Santa Fe')}
        data-x="213"
        data-y="82"
      />
      <path
        d="M384.529 162.65L384.593 213.191L340.323 213.114L340.195 189.639L342.239 189.562L342.43 182.728L355.846 182.805L355.974 176.12L362.618 176.275L362.554 169.505H369.325L369.198 162.494L384.529 162.65Z"
        stroke={element.config.stroke}
        data-name="Curry"
        fill={assignColor('Curry')}
        data-x="384"
        data-y="162"
      />
      <path
        d="M127.656 161.949L130.595 168.882L150.08 169.038L152.507 166.235L168.67 166.702L169.5 169.194L166.306 169.272L165.858 196.001H169.309V202.201L163.558 200.961L146.31 195.302L139.283 191.657L118.905 191.501L119.096 162.026L127.656 161.949Z"
        stroke={element.config.stroke}
        data-name="Valencia"
        fill={assignColor('Valencia')}
        data-x="127"
        data-y="161"
      />
      <path
        d="M119.16 141.805L135.451 142.04L180.168 142.196L180.36 155.787L180.487 162.339L186.365 162.494V168.961L169.5 169.193L168.67 166.702L152.507 166.235L150.08 169.038L130.595 168.882L127.656 161.949L119.16 141.805Z"
        stroke={element.config.stroke}
        data-name="Bernalillo"
        fill={assignColor('Bernalillo')}
        data-x="191"
        data-y="141"
      />
      <path
        d="M180.104 86.0395L179.977 91.8752L179.913 92.8992L184.704 94.0815L179.848 99.9879L177.74 96.8391L170.394 94.0029V83.5933L180.04 83.1992L180.104 86.0395Z"
        stroke={element.config.stroke}
        data-name="Los Alamos"
        fill={assignColor('Los Alamos')}
        data-x="180"
        data-y="86"
      />

      {renderLabels()}
    </svg>
  );
};

MapNewMexico.propTypes = ElementPropTypes;
MapNewMexicoPresent.propTypes = {
  element: PropTypes.object.isRequired,
};
MapNewMexicoContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default MapNewMexico;
