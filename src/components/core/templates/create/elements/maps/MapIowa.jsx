import { ElementPropTypes } from '@/lib/prop-types.js';
import useMapElement from '@/lib/design/use-map-element.jsx';
import PropTypes from 'prop-types';

const MapIowa = ({ element }) => {
  return <MapIowaContent element={element} />;
};

export const MapIowaPresent = ({ element }) => {
  return <MapIowaContent element={element} />;
};

export const MapIowaPreview = () => {
  return <MapIowaContent element={{ config: { data: [], fill: '#f9fafb', stroke: '#f9fafb' } }} present={false} />;
};

const MapIowaContent = ({ element, present = true }) => {
  const { el, assignColor, renderLabels, handleMouseMove, handleMouseLeave, renderTooltip } = useMapElement(element);

  return (
    <svg
      style={{ width: element.width, height: element.height }}
      ref={el}
      width="100%"
      viewBox="0 0 400 259"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M352.66 70.584L352.537 73.085H338.132L309.139 73.168L309.262 36.54L335.374 36.707L335.497 39.979L337.335 46.684L337.458 50.954L340.155 53.883L341.565 57.06L341.626 60.152L343.097 65.162L349.104 69.584L352.66 70.584Z"
        fill={assignColor('Clayton')}
        stroke={element.config.stroke}
        data-name="Clayton"
        data-x="352"
        data-y="70"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Clayton')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M70.6331 167.231L91.5351 167.312L91.4741 195.475L77.4981 195.394L47.2181 195.475L48.4441 193.277H45.2561L44.2141 192.381L45.3791 189.61L44.1531 185.125L46.7271 182.433L43.7851 181.78L43.6631 176.635L44.4591 170.831L39.4331 169.604L40.2301 167.149L70.6331 167.231Z"
        fill={assignColor('Pottawattamie')}
        stroke={element.config.stroke}
        data-name="Pottawattamie"
        data-x="70"
        data-y="167"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Pottawattamie')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M48.4439 80.0801H55.7379V87.2321L60.0289 87.3151V109.209L45.5629 109.126L17.8569 108.795L20.0629 107.388L19.5119 105.152L17.3049 102.584L17.0599 100.595L14.1179 97.4441L14.3629 92.7141L16.3239 90.3061L16.1399 86.9001L14.1179 85.8191L10.6849 85.4871L10.5619 82.4101L9.2749 79.9971L48.4439 80.0801Z"
        fill={assignColor('Woodbury')}
        stroke={element.config.stroke}
        data-name="Woodbury"
        data-x="48"
        data-y="80"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Woodbury')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M164.172 51.205H135.056L135.24 21.916L135.363 1.085L164.295 1L164.233 21.832L164.172 51.205Z"
        fill={assignColor('Kossuth')}
        stroke={element.config.stroke}
        data-name="Kossuth"
        data-x="164"
        data-y="51"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Kossuth')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M48.566 51.0381L48.382 65.6631L48.444 80.0801L9.275 79.9971L9.949 79.0811L6.762 71.9181L3.329 68.8331L1.306 67.8321L1 62.8251L3.636 60.2361L4.433 57.1441L5.904 56.2241L6.884 50.9541L48.566 51.0381Z"
        fill={assignColor('Plymouth')}
        stroke={element.config.stroke}
        data-name="Plymouth"
        data-x="48"
        data-y="51"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Plymouth')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M321.153 223.652L323.911 225.434L328.386 226.891L328.999 228.347L331.267 228.833L333.719 231.179L336.355 231.341L339.42 233.039L338.929 234.817L334.884 237.726L330.409 237.887L325.137 240.068L321.398 243.458L320.969 245.071L322.931 246.685L323.973 249.506L323.053 253.213L323.911 256.997L321.153 258.446L316.495 258.043L314.165 255.951L313.92 252.165L311.591 251.924L308.281 247.572L308.342 245.878L304.419 244.426L303.99 242.005L302.274 240.714L302.212 223.49L321.153 223.652Z"
        fill={assignColor('Lee')}
        stroke={element.config.stroke}
        data-name="Lee"
        data-x="321"
        data-y="223"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Lee')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M398.142 123.836H380.917H352.537L352.476 102.336L366.635 102.253V94.9551L378.466 95.0381L381.408 99.0201V102.584L382.45 105.98L385.27 109.292L387.108 109.871L394.832 113.924L395.2 115.495L397.529 116.734L397.345 120.534L398.142 123.836Z"
        fill={assignColor('Jackson')}
        stroke={element.config.stroke}
        data-name="Jackson"
        data-x="398"
        data-y="123"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Jackson')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M378.466 95.038L366.635 94.955V102.253L352.476 102.336L338.377 102.17L338.132 73.085H352.537L352.66 70.584L362.835 73.085L364.306 73.835L367.187 80.663L368.658 83.158L367.555 86.817L369.026 88.312L373.133 90.472L374.297 92.465L378.466 95.038Z"
        fill={assignColor('Dubuque')}
        stroke={element.config.stroke}
        data-name="Dubuque"
        data-x="378"
        data-y="95"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Dubuque')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M48.2602 21.6631L48.5662 51.0381L6.88417 50.9541L9.27517 46.7681L8.17217 45.3441L9.64317 42.9141L8.11017 39.5601L11.4822 37.9661L12.9532 33.6011L11.3592 30.7451L11.0532 25.7861L5.59717 24.4401V21.4951L26.4382 21.7471L48.2602 21.6631Z"
        fill={assignColor('Sioux')}
        stroke={element.config.stroke}
        data-name="Sioux"
        data-x="48"
        data-y="21"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Sioux')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M59.8449 137.929L38.3299 137.847L31.4649 137.6L29.9929 134.142L31.3419 133.071L31.5869 129.033L29.0739 128.373L28.0319 125.817L25.2119 123.176L23.2509 123.011L22.8219 119.956L23.3119 117.065L21.1049 115.825L18.9599 113.428L17.8569 108.795L45.5629 109.126L60.0289 109.209L59.8449 137.929Z"
        fill={assignColor('Monona')}
        stroke={element.config.stroke}
        data-name="Monona"
        data-x="59"
        data-y="137"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Monona')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M335.374 36.707L309.262 36.54L309.384 14.841H308.955L309.016 1.08496L332.799 1.16896L332.064 4.88596L334.087 9.69696L333.842 13.745L337.397 15.01L340.155 17.2L342.423 22.337L338.929 26.375L337.152 30.493L335.374 32.174V36.707Z"
        fill={assignColor('Allamakee')}
        stroke={element.config.stroke}
        data-name="Allamakee"
        data-x="335"
        data-y="36"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Allamakee')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M59.8448 137.929H66.8938L66.8328 159.449H70.5718L70.6328 167.231L40.2298 167.149L39.3718 163.874L37.3488 166.166L35.1418 165.839L33.9158 163.956L35.2648 161.662L32.7518 158.629L34.0388 156.169L32.6288 151.656L35.3868 150.753L33.4868 148.7L35.6328 144.181L35.2038 142.454L33.1198 140.891L31.4648 137.6L38.3298 137.847L59.8448 137.929Z"
        fill={assignColor('Harrison')}
        stroke={element.config.stroke}
        data-name="Harrison"
        data-x="59"
        data-y="137"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Harrison')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M388.028 148.782L386.373 148.043L382.572 148.207L380.917 146.4L378.343 145.167L372.091 146.318L366.697 145.825L364.429 148.043L362.59 148.618L359.402 145.332H352.414V130.929L352.537 123.836H380.917H398.142L399 125.652L397.406 129.857L398.142 134.224L397.161 136.365L395.935 142.619L389.499 146.318L388.028 148.782Z"
        fill={assignColor('Clinton')}
        stroke={element.config.stroke}
        data-name="Clinton"
        data-x="388"
        data-y="148"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Clinton')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M135.056 73.168L164.172 73.252L164.111 80.413L164.049 87.481L166.563 87.565V109.292H152.158H137.937L138.06 87.481H135.24L135.117 80.413L135.056 73.168Z"
        fill={assignColor('Webster')}
        stroke={element.config.stroke}
        data-name="Webster"
        data-x="135"
        data-y="73"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Webster')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M280.023 36.4561L309.262 36.5401L309.139 73.1681L279.9 73.4181V51.289L280.023 36.4561Z"
        fill={assignColor('Fayette')}
        stroke={element.config.stroke}
        data-name="Fayette"
        data-x="280"
        data-y="36"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Fayette')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M237.973 137.929L237.912 159.367H238.586L238.648 166.903L231.476 166.985L203.463 167.067L203.402 159.449H202.237L202.299 137.929H209.348H237.973Z"
        fill={assignColor('Jasper')}
        stroke={element.config.stroke}
        data-name="Jasper"
        data-x="237"
        data-y="137"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Jasper')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M309.691 102.087H323.911L323.789 130.846L323.728 138.094L295.286 137.929L295.163 116.321L295.286 101.838L309.691 102.087Z"
        fill={assignColor('Linn')}
        stroke={element.config.stroke}
        data-name="Linn"
        data-x="309"
        data-y="102"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Linn')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M323.789 159.531L323.666 173.856L316.617 174.02L314.962 168.131L313.92 166.739L295.47 166.658L295.163 159.367L295.286 137.929L323.728 138.094L323.789 159.531Z"
        fill={assignColor('Johnson')}
        stroke={element.config.stroke}
        data-name="Johnson"
        data-x="323"
        data-y="159"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Johnson')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M266.66 137.929H237.973L238.035 123.671L237.851 109.209L237.789 102.087L252.194 102.004H266.599L266.66 137.929Z"
        fill={assignColor('Tama')}
        stroke={element.config.stroke}
        data-name="Tama"
        data-x="266"
        data-y="137"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Tama')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M295.286 101.838L295.163 116.321L295.286 137.929H266.66L266.599 102.004H280.942L295.286 101.838Z"
        fill={assignColor('Benton')}
        stroke={element.config.stroke}
        data-name="Benton"
        data-x="295"
        data-y="101"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Benton')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M81.2992 109.209H95.4582L95.2742 137.847L66.8942 137.929H59.8452L60.0292 109.209H81.2992Z"
        fill={assignColor('Crawford')}
        stroke={element.config.stroke}
        data-name="Crawford"
        data-x="81"
        data-y="109"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Crawford')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M309.262 36.54L280.023 36.456L279.962 25.534L280.084 1.16896L309.016 1.08496L308.955 14.841H309.384L309.262 36.54Z"
        fill={assignColor('Winneshiek')}
        stroke={element.config.stroke}
        data-name="Winneshiek"
        data-x="309"
        data-y="36"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Winneshiek')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M349.411 202.554L323.544 202.391L323.482 195.312L316.433 195.231L316.617 174.02L323.666 173.856L323.605 181.127L341.933 181.29L341.81 182.841L339.358 187.817L341.013 192.055L343.159 194.742L346.959 195.882L349.533 200.683L349.411 202.554Z"
        fill={assignColor('Louisa')}
        stroke={element.config.stroke}
        data-name="Louisa"
        data-x="349"
        data-y="202"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Louisa')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M388.028 148.782L388.089 151.738L386.495 155.349L386.618 159.449L385.821 160.679L382.389 162.072L379.508 165.511L377.914 166.166L373.684 165.593L371.478 166.494L367.064 170.913L361.364 171.73L359.341 171.485L359.464 159.777L352.353 159.695L352.414 145.332H359.402L362.59 148.618L364.429 148.043L366.697 145.825L372.091 146.318L378.343 145.167L380.917 146.4L382.572 148.207L386.373 148.043L388.028 148.782Z"
        fill={assignColor('Scott')}
        stroke={element.config.stroke}
        data-name="Scott"
        data-x="388"
        data-y="148"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Scott')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M106.308 80.1631V87.3151H109.863L109.618 109.209H95.458H81.299L81.421 87.3151H77.376L77.314 80.1631H106.308Z"
        fill={assignColor('Sac')}
        stroke={element.config.stroke}
        data-name="Sac"
        data-x="106"
        data-y="80"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Sac')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M95.274 137.847L95.336 159.367L98.462 159.449L98.523 167.312H91.535L70.633 167.231L70.572 159.449H66.833L66.894 137.929L95.274 137.847Z"
        fill={assignColor('Shelby')}
        stroke={element.config.stroke}
        data-name="Shelby"
        data-x="95"
        data-y="137"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Shelby')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M203.463 167.067V168.376L202.789 169.195L197.579 167.067L175.083 166.739L175.144 159.531H173.734L173.673 137.929H180.783H202.299L202.237 159.449H203.402L203.463 167.067Z"
        fill={assignColor('Polk')}
        stroke={element.config.stroke}
        data-name="Polk"
        data-x="203"
        data-y="167"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Polk')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M135.117 80.4131L135.24 87.4811H138.06L137.937 109.292H123.777L109.618 109.209L109.863 87.3151H106.308V80.1631L135.117 80.4131Z"
        fill={assignColor('Calhoun')}
        stroke={element.config.stroke}
        data-name="Calhoun"
        data-x="135"
        data-y="80"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Calhoun')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M147.499 167.394H119.425L119.364 159.367H116.728L116.544 138.012L123.777 137.929H145.17V159.449L147.561 159.531L147.499 167.394Z"
        fill={assignColor('Guthrie')}
        stroke={element.config.stroke}
        data-name="Guthrie"
        data-x="147"
        data-y="167"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Guthrie')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M48.26 21.663L26.438 21.747L5.59703 21.495L4.31003 18.295L6.51703 18.464L7.92703 10.457L6.02603 9.35996L3.26803 6.23696L4.06503 3.95696L3.20703 1.16896L34.652 1.08496H48.444L48.26 21.663Z"
        fill={assignColor('Lyon')}
        stroke={element.config.stroke}
        data-name="Lyon"
        data-x="48"
        data-y="21"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Lyon')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M193.043 80.4131V87.6481H195.249V109.374H180.722L166.563 109.292V87.5651L164.049 87.4811L164.111 80.4131H193.043Z"
        fill={assignColor('Hamilton')}
        stroke={element.config.stroke}
        data-name="Hamilton"
        data-x="193"
        data-y="80"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Hamilton')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M173.673 137.929L173.734 159.531H175.144L175.083 166.739L168.463 167.558L147.499 167.394L147.561 159.531L145.17 159.449V137.929L152.28 137.847L173.673 137.929Z"
        fill={assignColor('Dallas')}
        stroke={element.config.stroke}
        data-name="Dallas"
        data-x="173"
        data-y="137"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Dallas')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M339.42 233.039L336.355 231.341L333.719 231.179L331.267 228.833L328.999 228.347L328.386 226.891L323.911 225.434L321.153 223.652H323.36L323.544 202.391L349.411 202.554L349.595 206.699L348.43 214.493L346.04 216.115L342.73 220.817L340.829 222.68L340.768 226.243L339.297 230.613L339.42 233.039Z"
        fill={assignColor('Des Moines')}
        stroke={element.config.stroke}
        data-name="Des Moines"
        data-x="339"
        data-y="233"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Des Moines')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M221.975 80.4961L222.036 87.6481H223.507V109.292L209.47 109.374H195.249V87.6481H193.043V80.4131L221.975 80.4961Z"
        fill={assignColor('Hardin')}
        stroke={element.config.stroke}
        data-name="Hardin"
        data-x="221"
        data-y="80"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Hardin')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M221.975 80.4961L250.968 80.5791V87.6481L252.194 87.7311V102.004L237.789 102.087L237.851 109.209L223.507 109.292V87.6481H222.036L221.975 80.4961Z"
        fill={assignColor('Grundy')}
        stroke={element.config.stroke}
        data-name="Grundy"
        data-x="221"
        data-y="80"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Grundy')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M309.691 102.087L295.286 101.838L280.942 102.004L281.004 87.814H279.962L279.9 73.418L309.139 73.168L309.016 87.814L309.691 87.731V102.087Z"
        fill={assignColor('Buchanan')}
        stroke={element.config.stroke}
        data-name="Buchanan"
        data-x="309"
        data-y="102"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Buchanan')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M280.942 102.004H266.599H252.194V87.731L250.968 87.648V80.579V73.418H279.9L279.962 87.814H281.004L280.942 102.004Z"
        fill={assignColor('Black Hawk')}
        stroke={element.config.stroke}
        data-name="Black Hawk"
        data-x="280"
        data-y="102"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Black Hawk')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M338.132 73.085L338.377 102.17L323.911 102.087H309.691V87.731L309.016 87.814L309.139 73.168L338.132 73.085Z"
        fill={assignColor('Delaware')}
        stroke={element.config.stroke}
        data-name="Delaware"
        data-x="338"
        data-y="73"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Delaware')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M250.968 73.4181V80.5791L221.975 80.4961L222.097 51.2051L251.03 51.2891L250.968 73.4181Z"
        fill={assignColor('Butler')}
        stroke={element.config.stroke}
        data-name="Butler"
        data-x="250"
        data-y="73"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Butler')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M222.097 51.2051L221.975 80.4961L193.043 80.4131L193.104 51.2051H222.097Z"
        fill={assignColor('Franklin')}
        stroke={element.config.stroke}
        data-name="Franklin"
        data-x="222"
        data-y="51"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Franklin')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M266.599 166.821L266.538 152.149L266.66 137.929H295.286L295.163 159.367L295.47 166.658L288.298 166.739L266.599 166.821Z"
        fill={assignColor('Iowa')}
        stroke={element.config.stroke}
        data-name="Iowa"
        data-x="266"
        data-y="166"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Iowa')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M222.22 21.916L222.159 25.618L222.097 51.205H193.104L193.165 21.832L222.22 21.916Z"
        fill={assignColor('Cerro Gordo')}
        stroke={element.config.stroke}
        data-name="Cerro Gordo"
        data-x="222"
        data-y="21"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Cerro Gordo')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M78.234 242.328L54.206 241.924L55.064 240.068L52.367 235.787L49.486 234.574L48.873 232.553L46.666 229.804L50.037 225.838L49.363 223.571L49.424 218.953L51.386 216.52L77.56 216.358L77.498 230.451H78.357L78.234 242.328Z"
        fill={assignColor('Fremont')}
        stroke={element.config.stroke}
        data-name="Fremont"
        data-x="78"
        data-y="242"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Fremont')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M77.3138 51.0381H48.5658L48.2598 21.6631H62.7868L77.3138 21.9161V51.0381Z"
        fill={assignColor('OBrien')}
        stroke={element.config.stroke}
        data-name="OBrien"
        data-x="77"
        data-y="51"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'OBrien')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M266.599 166.821L259.611 166.903H238.648L238.586 159.367H237.912L237.973 137.929H266.66L266.538 152.149L266.599 166.821Z"
        fill={assignColor('Poweshiek')}
        stroke={element.config.stroke}
        data-name="Poweshiek"
        data-x="266"
        data-y="166"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Poweshiek')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M164.233 21.832H193.165L193.104 51.205H164.172L164.233 21.832Z"
        fill={assignColor('Hancock')}
        stroke={element.config.stroke}
        data-name="Hancock"
        data-x="164"
        data-y="21"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Hancock')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M193.043 80.4131H164.111L164.172 73.2521V51.2051H193.104L193.043 80.4131Z"
        fill={assignColor('Wright')}
        stroke={element.config.stroke}
        data-name="Wright"
        data-x="193"
        data-y="80"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Wright')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M106.43 21.916L106.247 51.122L77.314 51.038V21.916H106.43Z"
        fill={assignColor('Clay')}
        stroke={element.config.stroke}
        data-name="Clay"
        data-x="106"
        data-y="21"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Clay')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M135.056 73.1681L135.117 80.4131L106.308 80.1631L106.247 51.1221L135.056 51.2051V73.1681Z"
        fill={assignColor('Pocahontas')}
        stroke={element.config.stroke}
        data-name="Pocahontas"
        data-x="135"
        data-y="73"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Pocahontas')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M135.056 51.205L106.247 51.122L106.43 21.916H135.24L135.056 51.205Z"
        fill={assignColor('Palo Alto')}
        stroke={element.config.stroke}
        data-name="Palo Alto"
        data-x="135"
        data-y="51"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Palo Alto')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M106.247 51.1221L106.308 80.1631H77.314V51.0381L106.247 51.1221Z"
        fill={assignColor('Buena Vista')}
        stroke={element.config.stroke}
        data-name="Buena Vista"
        data-x="106"
        data-y="51"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Buena Vista')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M77.3138 80.1631L55.7378 80.0801H48.4438L48.3818 65.6631L48.5658 51.0381H77.3138V80.1631Z"
        fill={assignColor('Cherokee')}
        stroke={element.config.stroke}
        data-name="Cherokee"
        data-x="77"
        data-y="80"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Cherokee')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M352.353 159.695L323.789 159.531L323.728 138.094L323.789 130.846L352.414 130.929V145.332L352.353 159.695Z"
        fill={assignColor('Cedar')}
        stroke={element.config.stroke}
        data-name="Cedar"
        data-x="352"
        data-y="159"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Cedar')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M259.734 195.312L259.611 166.903L266.599 166.821L288.298 166.739L288.237 195.068L273.832 195.231L259.734 195.312Z"
        fill={assignColor('Keokuk')}
        stroke={element.config.stroke}
        data-name="Keokuk"
        data-x="259"
        data-y="195"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Keokuk')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M323.911 102.087L338.377 102.17L352.476 102.336L352.537 123.836L352.414 130.929L323.789 130.846L323.911 102.087Z"
        fill={assignColor('Jones')}
        stroke={element.config.stroke}
        data-name="Jones"
        data-x="323"
        data-y="102"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Jones')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M203.463 168.376L203.525 195.475L189.304 195.394L175.144 195.312L175.083 166.739L197.579 167.067L202.789 169.195L203.463 168.376Z"
        fill={assignColor('Warren')}
        stroke={element.config.stroke}
        data-name="Warren"
        data-x="203"
        data-y="168"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Warren')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M237.973 137.929H209.348L209.47 109.374L223.507 109.292L237.851 109.209L238.035 123.671L237.973 137.929Z"
        fill={assignColor('Marshall')}
        stroke={element.config.stroke}
        data-name="Marshall"
        data-x="237"
        data-y="137"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Marshall')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M123.777 137.929L116.544 138.012L95.2739 137.847L95.4579 109.209H109.618L123.777 109.292V137.929Z"
        fill={assignColor('Carroll')}
        stroke={element.config.stroke}
        data-name="Carroll"
        data-x="123"
        data-y="137"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Carroll')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M209.348 137.929H202.299H180.783L180.722 109.374H195.249H209.47L209.348 137.929Z"
        fill={assignColor('Story')}
        stroke={element.config.stroke}
        data-name="Story"
        data-x="209"
        data-y="137"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Story')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M180.783 137.929H173.673L152.28 137.847L152.158 109.292H166.563L180.722 109.374L180.783 137.929Z"
        fill={assignColor('Boone')}
        stroke={element.config.stroke}
        data-name="Boone"
        data-x="180"
        data-y="137"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Boone')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M316.617 174.02L316.433 195.231H302.335L288.237 195.068L288.298 166.739L295.47 166.658L313.92 166.739L314.962 168.131L316.617 174.02Z"
        fill={assignColor('Washington')}
        stroke={element.config.stroke}
        data-name="Washington"
        data-x="316"
        data-y="174"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Washington')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M238.648 166.903H259.611L259.734 195.312L245.513 195.394L231.598 195.475L231.476 166.985L238.648 166.903Z"
        fill={assignColor('Mahaska')}
        stroke={element.config.stroke}
        data-name="Mahaska"
        data-x="238"
        data-y="166"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Mahaska')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M152.158 109.292L152.28 137.847L145.17 137.929H123.777V109.292H137.937H152.158Z"
        fill={assignColor('Greene')}
        stroke={element.config.stroke}
        data-name="Greene"
        data-x="152"
        data-y="109"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Greene')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M175.083 166.739L175.144 195.312L168.402 195.882L161.475 195.801L147.499 195.719V167.394L168.463 167.558L175.083 166.739Z"
        fill={assignColor('Madison')}
        stroke={element.config.stroke}
        data-name="Madison"
        data-x="175"
        data-y="166"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Madison')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M231.598 195.475H217.562H203.525L203.463 168.376V167.067L231.476 166.985L231.598 195.475Z"
        fill={assignColor('Marion')}
        stroke={element.config.stroke}
        data-name="Marion"
        data-x="231"
        data-y="195"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Marion')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M147.499 195.719L133.401 195.638H119.364L119.425 167.394H147.499V195.719Z"
        fill={assignColor('Adair')}
        stroke={element.config.stroke}
        data-name="Adair"
        data-x="147"
        data-y="195"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Adair')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M119.364 195.638L105.45 195.557L91.4741 195.475L91.5351 167.312H98.5231L119.425 167.394L119.364 195.638Z"
        fill={assignColor('Cass')}
        stroke={element.config.stroke}
        data-name="Cass"
        data-x="119"
        data-y="195"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Cass')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M359.341 171.485H355.112L350.821 173.856L346.898 173.202L343.71 174.265L342.178 178.759L341.933 181.29L323.605 181.127L323.666 173.856L323.789 159.531L352.353 159.695L359.464 159.777L359.341 171.485Z"
        fill={assignColor('Muscatine')}
        stroke={element.config.stroke}
        data-name="Muscatine"
        data-x="359"
        data-y="171"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Muscatine')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M105.327 216.439V230.451H106.247L106.185 242.812L78.234 242.328L78.357 230.451H77.498L77.56 216.358L105.327 216.439Z"
        fill={assignColor('Page')}
        stroke={element.config.stroke}
        data-name="Page"
        data-x="105"
        data-y="216"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Page')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M133.401 243.216L106.185 242.812L106.247 230.451H105.327V216.439L133.462 216.602L133.401 243.216Z"
        fill={assignColor('Taylor')}
        stroke={element.config.stroke}
        data-name="Taylor"
        data-x="133"
        data-y="243"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Taylor')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M161.475 216.845L161.291 242.974L148.357 243.135L133.401 243.216L133.462 216.602L161.475 216.845Z"
        fill={assignColor('Ringgold')}
        stroke={element.config.stroke}
        data-name="Ringgold"
        data-x="161"
        data-y="216"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Ringgold')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M161.291 242.974L161.475 216.845L175.389 216.602H189.488L189.549 242.489L161.291 242.974Z"
        fill={assignColor('Decatur')}
        stroke={element.config.stroke}
        data-name="Decatur"
        data-x="161"
        data-y="242"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Decatur')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M217.684 216.683V242.086L205.915 242.409L189.549 242.489L189.488 216.602L203.525 216.764L217.684 216.683Z"
        fill={assignColor('Wayne')}
        stroke={element.config.stroke}
        data-name="Wayne"
        data-x="217"
        data-y="216"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Wayne')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M55.7378 80.0801L77.3138 80.1631L77.3758 87.3151H81.4208L81.2988 109.209H60.0288V87.3151L55.7378 87.2321V80.0801Z"
        fill={assignColor('Ida')}
        stroke={element.config.stroke}
        data-name="Ida"
        data-x="55"
        data-y="80"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Ida')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M279.9 51.2889H251.03V25.5339H279.962L280.023 36.4559L279.9 51.2889Z"
        fill={assignColor('Chickasaw')}
        stroke={element.config.stroke}
        data-name="Chickasaw"
        data-x="279"
        data-y="51"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Chickasaw')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M251.03 51.2889L222.097 51.2049L222.159 25.6179L251.03 25.5339V51.2889Z"
        fill={assignColor('Floyd')}
        stroke={element.config.stroke}
        data-name="Floyd"
        data-x="251"
        data-y="51"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Floyd')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M245.758 216.683L245.819 241.521L217.684 242.086V216.683H245.758Z"
        fill={assignColor('Appanoose')}
        stroke={element.config.stroke}
        data-name="Appanoose"
        data-x="245"
        data-y="216"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Appanoose')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M245.819 241.521L245.758 216.683L273.955 216.602L274.016 240.714L245.819 241.521Z"
        fill={assignColor('Davis')}
        stroke={element.config.stroke}
        data-name="Davis"
        data-x="245"
        data-y="241"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Davis')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M119.425 167.394L98.5229 167.312L98.4619 159.449L95.3359 159.367L95.2739 137.847L116.544 138.012L116.728 159.367H119.364L119.425 167.394Z"
        fill={assignColor('Audubon')}
        stroke={element.config.stroke}
        data-name="Audubon"
        data-x="119"
        data-y="167"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Audubon')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M302.274 240.714L301.661 239.664L291.118 240.148L274.016 240.714L273.955 216.602H302.274L302.212 223.49L302.274 240.714Z"
        fill={assignColor('Van Buren')}
        stroke={element.config.stroke}
        data-name="Van Buren"
        data-x="302"
        data-y="240"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Van Buren')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M251.03 25.534L222.159 25.618L222.22 21.916V1.08496H251.091L251.03 25.534Z"
        fill={assignColor('Mitchell')}
        stroke={element.config.stroke}
        data-name="Mitchell"
        data-x="251"
        data-y="25"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Mitchell')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M280.084 1.16896L279.962 25.534H251.03L251.091 1.08496L280.084 1.16896Z"
        fill={assignColor('Howard')}
        stroke={element.config.stroke}
        data-name="Howard"
        data-x="280"
        data-y="1"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Howard')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M77.4978 195.394L77.5598 216.358L51.3858 216.52L49.7308 213.357L50.3438 210.597L47.8308 207.674L48.3208 205.236L47.1558 203.042L48.3818 201.334L47.2178 195.475L77.4978 195.394Z"
        fill={assignColor('Mills')}
        stroke={element.config.stroke}
        data-name="Mills"
        data-x="77"
        data-y="195"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Mills')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M164.172 51.2051V73.2521L135.056 73.1681V51.2051H164.172Z"
        fill={assignColor('Humboldt')}
        stroke={element.config.stroke}
        data-name="Humboldt"
        data-x="164"
        data-y="51"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Humboldt')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M279.9 51.2891V73.4181H250.968L251.03 51.2891H279.9Z"
        fill={assignColor('Bremer')}
        stroke={element.config.stroke}
        data-name="Bremer"
        data-x="279"
        data-y="51"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Bremer')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M302.335 195.231L302.274 216.602H273.955L273.832 195.231L288.237 195.068L302.335 195.231Z"
        fill={assignColor('Jefferson')}
        stroke={element.config.stroke}
        data-name="Jefferson"
        data-x="302"
        data-y="195"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Jefferson')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M245.758 216.683L245.513 195.394L259.734 195.312L273.832 195.231L273.955 216.602L245.758 216.683Z"
        fill={assignColor('Wapello')}
        stroke={element.config.stroke}
        data-name="Wapello"
        data-x="245"
        data-y="216"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Wapello')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M321.153 223.652L302.212 223.49L302.274 216.602L302.335 195.231H316.433L323.482 195.312L323.544 202.391L323.36 223.652H321.153Z"
        fill={assignColor('Henry')}
        stroke={element.config.stroke}
        data-name="Henry"
        data-x="321"
        data-y="223"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Henry')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M203.525 195.475H217.562L217.684 216.683L203.525 216.764L189.488 216.602L189.304 195.394L203.525 195.475Z"
        fill={assignColor('Lucas')}
        stroke={element.config.stroke}
        data-name="Lucas"
        data-x="203"
        data-y="195"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Lucas')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M189.304 195.394L189.488 216.602H175.389L161.475 216.845V195.801L168.402 195.882L175.144 195.312L189.304 195.394Z"
        fill={assignColor('Clarke')}
        stroke={element.config.stroke}
        data-name="Clarke"
        data-x="189"
        data-y="195"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Clarke')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M245.513 195.394L245.758 216.683H217.684L217.562 195.475H231.598L245.513 195.394Z"
        fill={assignColor('Monroe')}
        stroke={element.config.stroke}
        data-name="Monroe"
        data-x="245"
        data-y="195"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Monroe')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M133.401 195.638L147.499 195.719L161.475 195.801V216.845L133.462 216.602L133.401 195.638Z"
        fill={assignColor('Union')}
        stroke={element.config.stroke}
        data-name="Union"
        data-x="133"
        data-y="195"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Union')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M105.45 195.557L119.364 195.638H133.401L133.462 216.602L105.327 216.439L105.45 195.557Z"
        fill={assignColor('Adams')}
        stroke={element.config.stroke}
        data-name="Adams"
        data-x="105"
        data-y="182"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Adams')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M105.327 216.439L77.56 216.358L77.498 195.394L91.474 195.475L105.45 195.557L105.327 216.439Z"
        fill={assignColor('Montgomery')}
        stroke={element.config.stroke}
        data-name="Montgomery"
        data-x="105"
        data-y="216"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Montgomery')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M77.4368 1L77.3138 21.916L62.7868 21.663H48.2598L48.4438 1.085L77.4368 1Z"
        fill={assignColor('Osceola')}
        stroke={element.config.stroke}
        data-name="Osceola"
        data-x="77"
        data-y="1L77"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Osceola')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M106.369 1L106.43 21.916H77.314L77.437 1H106.369Z"
        fill={assignColor('Dickinson')}
        stroke={element.config.stroke}
        data-name="Dickinson"
        data-x="106"
        data-y="1L06"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Dickinson')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M193.288 1L222.22 1.085V21.916L193.165 21.832L193.288 1Z"
        fill={assignColor('Worth')}
        stroke={element.config.stroke}
        data-name="Worth"
        data-x="193"
        data-y="1L222"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Worth')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M135.363 1.085L135.24 21.916H106.43L106.369 1L135.363 1.085Z"
        fill={assignColor('Emmet')}
        stroke={element.config.stroke}
        data-name="Emmet"
        data-x="135"
        data-y="1"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Emmet')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M193.165 21.832H164.233L164.295 1H193.288L193.165 21.832Z"
        fill={assignColor('Winnebago')}
        stroke={element.config.stroke}
        data-name="Winnebago"
        data-x="193"
        data-y="21"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Winnebago')}
        onMouseLeave={handleMouseLeave}
      />
      {present && renderTooltip()}
      {renderLabels()}
    </svg>
  );
};

MapIowa.propTypes = ElementPropTypes;
MapIowaPresent.propTypes = {
  element: PropTypes.object.isRequired,
};
MapIowaContent.propTypes = {
  element: PropTypes.object.isRequired,
  present: PropTypes.bool,
};

export default MapIowa;
