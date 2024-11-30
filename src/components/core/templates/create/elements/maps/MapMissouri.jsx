import { ElementPropTypes } from '@/lib/prop-types.js';
import useMapElement from '@/lib/design/use-map-element.jsx';
import PropTypes from 'prop-types';

const MapMissouri = ({ element }) => {
  return <MapMissouriContent element={element} />;
};

export const MapMissouriPresent = ({ element }) => {
  return <MapMissouriContent element={element} />;
};

export const MapMissouriPreview = () => {
  return <MapMissouriContent element={{ config: { data: [], fill: '#f9fafb', stroke: '#f9fafb' } }} present={false} />;
};

export const MapMissouriContent = ({ element, present = true }) => {
  const { el, assignColor, renderLabels, handleMouseMove, handleMouseLeave, renderTooltip } = useMapElement(element);

  return (
    <svg ref={el} width="100%" viewBox="0 0 400 354" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M338.393 141.603L337.021 139.765L333.442 140.225L329.923 137.927L328.312 135.552L326.582 134.786L325.329 135.552L324.852 138.234L323.898 139.842L322.347 140.378L320.199 139.842L318.589 140.531L316.441 144.817L313.638 147.647L313.757 149.94L311.788 150.857H308.686L306.897 150.399L305.107 151.24L301.767 153.913L298.665 159.105L297.293 158.341L294.668 159.105L294.131 160.02L291.208 162.08L287.927 161.393L288.405 136.319L289.836 135.246L297.174 135.092L297.77 132.869L301.111 131.873L302.721 133.253L304.093 131.412L305.823 131.566L306.3 132.793L308.269 135.246L311.251 136.778L313.101 136.012L315.248 134.019L316.561 131.949L317.396 129.725L318.708 129.111L322.585 129.802L326.165 132.026L330.221 132.716L333.74 135.246L338.632 138.157L338.93 139.153L338.393 141.603Z"
        stroke={element.config.stroke}
        data-name="Saint Charles"
        fill={assignColor('Saint Charles')}
        data-x="338"
        data-y="141"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Saint Charles')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M284.706 270.749L281.724 270.973L279.338 271.646L272.895 271.496L272.478 286.657L246.588 286.582L246.708 274.487L247.006 259.444H247.185V246.314L273.253 246.84L275.341 246.99L275.222 254.496H276.355L276.295 258.844L278.323 258.919L278.144 262.965L280.471 262.74L280.411 264.762L281.604 265.735L283.573 265.436V267.532L284.766 267.307L284.706 270.749Z"
        stroke={element.config.stroke}
        data-name="Shannon"
        fill={assignColor('Shannon')}
        data-x="284"
        data-y="270"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Shannon')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M302.423 109.202L274.744 109.048V115.821L270.091 115.744L261.323 115.513L259.652 101.959L258.221 91.9255L273.432 80.4795H274.983L275.997 83.8075L277.011 84.6585L279.039 84.8905L280.173 85.7415L281.783 88.8345L282.201 90.3805L283.692 92.3115L286.257 94.1655L288.763 95.1695L290.254 96.9445L294.31 99.6455L297.889 102.73L300.395 105.89L301.767 106.968L302.423 109.202Z"
        stroke={element.config.stroke}
        data-name="Pike"
        fill={assignColor('Pike')}
        data-x="302"
        data-y="109"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Pike')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M247.185 246.315V259.445H247.006L246.708 274.488L240.385 274.189L227.44 273.815L220.759 273.666L211.274 273.441L211.513 258.845H211.095L211.155 242.483L211.215 232.854L224.278 232.778L237.581 233.004L240.862 233.079L240.981 246.09L247.185 246.315Z"
        stroke={element.config.stroke}
        data-name="Texas"
        fill={assignColor('Texas')}
        data-x="247"
        data-y="246"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Texas')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M385.22 305.644L383.848 305.57L382.536 306.609L380.031 315.522L378.599 317.674L377.346 318.564L376.153 318.341L375.616 316.635L376.988 313.073L376.69 310.919L375.318 309.582L373.171 309.359L371.5 310.027L370.904 311.958L371.56 313.667L373.767 316.561L373.469 318.638L372.216 319.75L374.125 323.678L374.185 325.753L373.707 326.79L372.156 327.383L372.216 326.272L371.023 325.457L369.83 322.641L368.637 321.974L366.967 322.715L364.998 322.863L363.567 321.529L361.717 320.788L360.644 321.381L360.345 323.456L358.854 323.975L347.699 323.901L347.759 318.118L348.057 316.783L347.818 313.37L348.176 312.107L347.759 305.941L363.089 306.09L362.97 288.745L363.805 288.671L368.816 288.522L370.963 288H373.946V289.639L376.094 290.684L378.42 293.887V295.526L382.655 300.513L383.252 302.596L385.22 305.644Z"
        stroke={element.config.stroke}
        data-name="New Madrid"
        fill={assignColor('New Madrid')}
        data-x="285"
        data-y="305"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'New Madrid')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M301.409 257.645L301.469 265.511H300.335L300.216 267.681L298.963 267.606L298.903 274.412L287.927 274.113L288.047 270.599L284.706 270.749L284.766 267.307L283.573 267.532V265.436L281.604 265.735L280.411 264.762L280.471 262.74L278.144 262.965L278.323 258.919L276.295 258.844L276.355 254.496H275.222L275.341 246.99L273.253 246.84L273.313 240.227H267.049L267.168 233.681L276.594 233.982L279.874 234.057L286.854 232.627L299.619 233.003L299.321 249.994L300.574 250.069L300.395 257.645H301.409Z"
        stroke={element.config.stroke}
        data-name="Reynolds"
        fill={assignColor('Reynolds')}
        data-x="301"
        data-y="457"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Reynolds')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M184.55 185.67L185.803 186.43L187.891 186.506L187.831 189.845H189.978V193.335L191.112 195.154L192.007 195.23L191.947 197.731L193.14 197.807L195.287 200.988L201.909 201.14L201.73 213.62H201.074L199.284 215.735L196.242 215.962L195.466 217.321L192.663 217.774L192.066 216.34L190.336 214.98L189.143 211.126L175.125 210.597L162.24 210.068L162.658 198.11L162.777 188.555H161.524L161.882 183.164L163.016 182.1L165.879 184.455L166.118 186.657L167.191 188.327L168.802 185.367L170.412 186.506L168.862 187.644L180.553 188.176L180.732 186.809L181.985 185.822L184.55 185.67Z"
        stroke={element.config.stroke}
        data-name="Camden"
        fill={assignColor('Camden')}
        data-x="184"
        data-y="185"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Camden')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M287.927 161.393L291.208 162.08L294.131 160.02L294.668 159.105L297.293 158.341L298.665 159.105L301.767 153.913L301.528 166.272L301.349 171.223L298.963 187.189H287.57L280.053 187.265L263.888 187.189V186.809L263.768 149.635L265.379 149.864L267.109 149.176L271.941 153.532L272.239 155.67L274.923 156.662L278.741 157.349L281.664 156.586L283.573 157.426L285.482 160.325L287.927 161.393Z"
        stroke={element.config.stroke}
        data-name="Franklin"
        fill={assignColor('Franklin')}
        data-x="287"
        data-y="161"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Franklin')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M338.393 141.603L335.47 144.205L334.576 144.052L333.561 145.735L330.46 148.182L327.537 152.997L326.284 157.807L326.701 158.952L329.923 162.461L329.088 165.053L328.551 168.406L327.656 170.691L324.912 173.583L324.733 169.929L325.329 168.33L324.196 167.872L322.347 168.406L320.617 167.796L321.034 164.672L310.178 164.519L309.164 166.577L307.255 165.587L306.241 165.891L306.36 168.025L304.63 168.71L303.855 166.958L301.528 166.272L301.767 153.913L305.107 151.24L306.897 150.399L308.686 150.857H311.788L313.757 149.94L313.638 147.647L316.441 144.817L318.589 140.531L320.199 139.842L322.347 140.378L323.898 139.842L324.852 138.234L325.329 135.552L326.582 134.786L328.312 135.552L329.923 137.927L333.442 140.225L337.021 139.765L338.393 141.603Z"
        stroke={element.config.stroke}
        data-name="Saint Louis"
        fill={assignColor('Saint Louis')}
        data-x="338"
        data-y="141"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Saint Louis')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M159.794 97.3306L161.584 98.5656L162.18 101.034L163.851 102.345L168.325 102.576L168.981 103.27L169.16 105.583L171.248 106.661L171.188 108.895L172.679 109.665L174.648 108.664L175.304 109.049L174.767 111.128L172.142 114.052L171.904 115.899L169.756 117.36L170.412 119.128L172.023 120.281L170.353 121.817L163.374 128.651L163.254 131.949L150.131 131.566L143.509 131.336L136.709 130.876L137.067 120.972L137.783 104.349L139.513 105.891L141.958 106.353L141.72 108.125L142.555 109.28L145.478 108.587L146.85 106.584L145.955 104.812L146.373 103.116L150.19 102.499L151.204 100.726L153.292 101.266L155.022 98.5656L154.485 96.0186L155.917 95.0146L158.422 97.6396L159.794 97.3306Z"
        stroke={element.config.stroke}
        data-name="Saline"
        fill={assignColor('Saline')}
        data-x="159"
        data-y="97"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Saline')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M248.02 121.97L247.185 149.481L244.322 149.099L241.995 149.251L239.907 150.78L235.672 151.391L234.002 152.079L232.332 154.6L229.468 157.577L227.38 158.188L225.591 159.638L222.429 160.629L219.327 160.248L217.061 159.332L214.257 157.348L214.018 155.363L212.945 154.065V150.169L213.481 147.875L214.674 147.417L216.345 143.056L217.597 140.53L216.583 136.164L216.703 133.252L217.359 128.113L218.254 125.273L217.836 124.505L218.134 121.74H219.506L248.02 121.97Z"
        stroke={element.config.stroke}
        data-name="Callaway"
        fill={assignColor('Callaway')}
        data-x="248"
        data-y="121"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Callaway')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M279.815 222.378L293.237 222.906L299.56 222.678L306.957 222.829L306.778 229.841H313.518V233.23H312.802L312.743 247.667L312.624 254.422L312.564 257.721L304.988 257.496L301.409 257.646H300.395L300.574 250.07L299.321 249.995L299.619 233.004L286.854 232.628L279.874 234.057L276.594 233.983L276.713 225.695L277.13 222.302L279.815 222.378Z"
        stroke={element.config.stroke}
        data-name="Iron"
        fill={assignColor('Iron')}
        data-x="279"
        data-y="222"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Iron')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M183.894 102.036L178.883 100.185L175.304 109.048L174.648 108.663L172.679 109.664L171.188 108.894L171.248 106.66L169.16 105.582L168.981 103.269L168.325 102.575L163.851 102.344L162.18 101.033L161.584 98.5655L159.794 97.3305L158.959 95.0145L156.394 94.3965L155.44 93.3935L153.889 93.8565L152.696 92.0024L152.576 90.5345L150.369 90.2255L149.653 88.9885L150.548 88.1385L149.355 86.5925L150.369 82.6465L149.475 79.2405L150.608 78.3115L149.057 76.6075L149.653 73.6625L151.025 72.4215L161.465 72.1895L174.767 72.6545L184.729 72.7325L184.49 79.6275H184.252L183.894 102.036Z"
        stroke={element.config.stroke}
        data-name="Chariton"
        fill={assignColor('Chariton')}
        data-x="183"
        data-y="102"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Chariton')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M363.805 288.671L362.97 288.745L363.089 306.09L347.759 305.941L336.723 305.718L337.379 303.488L336.544 302.224L336.365 299.397L334.576 296.121L333.502 295.005L333.382 292.472L332.189 291.578L332.547 289.938L330.877 288L330.042 283.972L332.01 282.927L332.07 280.912L335.232 277.551H336.305L336.484 275.086H338.811L345.432 275.16L345.492 273.815L347.639 273.965L347.818 268.655H353.247L359.451 268.805L358.198 271.946L360.107 275.908L362.135 279.12L362.433 281.733L364.163 283.972L363.567 287.329L363.805 288.671Z"
        stroke={element.config.stroke}
        data-name="Stoddard"
        fill={assignColor('Stoddard')}
        data-x="363"
        data-y="288"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Stoddard')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M254.284 218.756L237.939 218.529L237.581 225.093V233.004L224.278 232.778L224.338 224.867H224.636L224.875 201.821L228.096 201.897L229.11 199.398L230.423 200.079L232.391 198.564L234.658 198.716L241.1 198.64L248.08 198.868L248.139 191.059H253.806H254.403L254.284 218.756Z"
        stroke={element.config.stroke}
        data-name="Phelps"
        fill={assignColor('Phelps')}
        data-x="254"
        data-y="121"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Phelps')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M219.506 121.741H218.134L217.836 124.506L218.254 125.274L217.359 128.114L216.703 133.253L216.583 136.165L217.597 140.531L216.345 143.057L214.674 147.418L213.481 147.876L212.945 150.17V154.066L210.678 153.913L208.65 152.309L205.369 151.622L204.534 150.399L205.667 148.564L204.355 147.265L202.684 146.576L201.849 144.128L202.983 143.44L203.46 141.833L202.446 140.301L200.895 139.995L198.031 136.702L197.614 134.403L196.361 132.486L192.424 128.728L192.245 126.962L200.418 107.586L207.397 107.74L219.805 108.279L219.506 121.741Z"
        stroke={element.config.stroke}
        data-name="Boone"
        fill={assignColor('Boone')}
        data-x="219"
        data-y="121"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Boone')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M69.063 4.7706L69.004 12.5396H70.376V19.2786L70.972 19.3566L70.435 39.6016L44.606 39.2896L43.413 37.8846L43.592 36.8706L42.757 34.2936L43.353 30.7006L42.578 29.0586H36.433L36.612 11.9906H35.181L35.061 4.1416L61.07 4.6136L69.063 4.7706Z"
        stroke={element.config.stroke}
        data-name="Nodaway"
        fill={assignColor('Nodaway')}
        data-x="69"
        data-y="4"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Nodaway')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M336.723 305.718L347.759 305.941L348.176 312.107L347.818 313.37L348.057 316.783L347.759 318.119L347.699 323.901L347.878 352.432L330.102 352.58L322.943 352.727L326.165 347.121L326.403 345.866L328.133 343.873L329.028 343.725L331.235 342.174L332.189 338.997L334.277 337.149L337.797 335.375L338.632 332.786L340.362 332.12L341.376 330.344L340.6 328.641L341.495 323.975L340.243 322.641L338.692 322.419L337.26 321.159V318.934L335.948 316.635L336.246 315.67H332.309L332.607 313.147L334.516 310.919V308.617L335.411 306.833L336.723 305.718Z"
        stroke={element.config.stroke}
        data-name="Dunklin"
        fill={assignColor('Dunklin')}
        data-x="336"
        data-y="305"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Dunklin')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M159.794 97.3305L158.422 97.6395L155.917 95.0145L154.485 96.0185L155.022 98.5655L153.292 101.265L151.204 100.725L150.19 102.498L146.373 103.115L145.955 104.811L146.85 106.583L145.478 108.586L142.555 109.279L141.72 108.124L141.958 106.352L139.513 105.89L137.783 104.348L136.59 106.352L137.126 108.74L135.695 110.203L132.891 109.818L131.281 108.124L128.537 107.739L125.494 109.279L123.585 110.973H121.08L120.901 106.506L120.961 86.2055L121.02 79.4735L127.88 79.5505L141.302 79.3185L149.475 79.2405L150.369 82.6465L149.355 86.5925L150.548 88.1385L149.653 88.9885L150.369 90.2255L152.576 90.5345L152.696 92.0025L153.889 93.8565L155.44 93.3935L156.394 94.3965L158.959 95.0145L159.794 97.3305Z"
        stroke={element.config.stroke}
        data-name="Carroll"
        fill={assignColor('Carroll')}
        data-x="159"
        data-y="97"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Carroll')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M332.428 254.572L332.189 271.572L338.751 271.722L338.811 275.086H336.484L336.305 277.551H335.232L332.07 280.912L332.01 282.927L330.042 283.972L304.988 283.524H303.974V280.389L302.96 280.315L302.9 278.224H301.826L301.767 274.413H298.903L298.963 267.607L300.216 267.682L300.335 265.512H301.469L301.409 257.646L304.988 257.496L312.564 257.721L312.624 254.422L332.428 254.572Z"
        stroke={element.config.stroke}
        data-name="Wayne"
        fill={assignColor('Wayne')}
        data-x="332"
        data-y="254"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Wayne')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M245.694 315.522L218.79 315.596L219.327 293.738L220.282 293.664L220.878 276.057L220.759 273.666L227.44 273.815L240.385 274.189L246.708 274.488L246.588 286.583L246.35 293.962H245.634L245.276 307.428H245.694V315.522Z"
        stroke={element.config.stroke}
        data-name="Howell"
        fill={assignColor('Howell')}
        data-x="245"
        data-y="315"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Howell')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M324.912 173.583L324.196 175.105L323.242 178.528L323.182 181.872L324.554 186.733L326.463 189.162L328.133 189.845L329.266 191.135L330.579 193.562L328.789 194.699L327.716 196.14L325.687 195.382L320.736 199.549L310.655 202.275L308.865 201.594L308.448 200.155L308.746 197.125L307.255 196.822L305.644 195.988L298.963 187.189L301.349 171.223L301.528 166.272L303.855 166.958L304.63 168.71L306.36 168.025L306.241 165.891L307.255 165.587L309.164 166.577L310.178 164.519L321.034 164.672L320.617 167.796L322.347 168.406L324.196 167.872L325.329 168.33L324.733 169.929L324.912 173.583Z"
        stroke={element.config.stroke}
        data-name="Jefferson"
        fill={assignColor('Jefferson')}
        data-x="324"
        data-y="173"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Jefferson')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M242.83 100.57V101.727L255.119 101.959H259.652L261.323 115.513L248.259 115.282L248.02 121.97L219.506 121.74L219.805 108.278L207.397 107.739L207.635 99.8765L214.555 100.262L221.236 100.493L234.777 100.57H242.83Z"
        stroke={element.config.stroke}
        data-name="Audrain"
        fill={assignColor('Audrain')}
        data-x="242"
        data-y="100"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Audrain')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M175.125 210.597L189.143 211.126L190.336 214.98L192.066 216.34L192.663 217.774L195.466 217.321L196.242 215.962L199.284 215.735L201.074 213.62H201.73L201.491 224.565H201.969L211.215 229.464V232.854L211.155 242.483L185.147 241.957L175.244 241.806L175.662 223.811H174.767L175.125 210.597Z"
        stroke={element.config.stroke}
        data-name="Laclede"
        fill={assignColor('Laclede')}
        data-x="175"
        data-y="210"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Laclede')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M102.946 169.015L102.349 186.657L103.841 186.733L103.363 200.231L101.812 200.61L98.889 198.564L93.163 200.231L92.507 199.095L70.137 198.413L70.256 173.431L70.316 166.806L88.212 167.187L88.868 167.949L93.938 168.939L96.861 169.015L101.335 168.253L102.946 169.015Z"
        stroke={element.config.stroke}
        data-name="Bates"
        fill={assignColor('Bates')}
        data-x="102"
        data-y="169"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Bates')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M208.829 53.0025L208.471 66.6035L208.232 80.0155H208.053L201.074 79.9375L184.49 79.6275L184.729 72.7325L174.767 72.6545L175.602 46.3845L205.488 46.2285L205.428 53.0025H208.829Z"
        stroke={element.config.stroke}
        data-name="Macon"
        fill={assignColor('Macon')}
        data-x="208"
        data-y="53"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Macon')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M276.713 225.696L276.594 233.983L267.168 233.682L267.049 240.228H273.313L273.253 246.841L247.185 246.315L240.981 246.09L240.862 233.079L237.581 233.004V225.093L237.939 218.529L254.284 218.756L267.467 218.982L267.288 225.621L276.713 225.696Z"
        stroke={element.config.stroke}
        data-name="Dent"
        fill={assignColor('Dent')}
        data-x="276"
        data-y="225"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Dent')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M137.783 104.349L137.067 120.972L136.709 130.876V132.179L116.487 131.489L116.427 133.713L99.7839 133.099L100.321 115.745L102.051 116.437L103.363 116.129L104.914 114.899L104.556 112.59L107.42 110.897L108.732 112.59L107.3 114.975L108.672 115.822L109.925 114.975L110.522 112.821L112.848 112.513L114.28 111.051L116.785 110.358L119.35 111.359L121.08 110.974H123.585L125.494 109.28L128.537 107.74L131.281 108.125L132.891 109.819L135.695 110.204L137.126 108.741L136.59 106.353L137.783 104.349Z"
        stroke={element.config.stroke}
        data-name="Lafayette"
        fill={assignColor('Lafayette')}
        data-x="137"
        data-y="104"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Lafayette')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M349.19 212.487L345.194 216.793L338.811 227.731L336.305 225.621L333.323 227.882L331.116 225.621L318.171 211.882L326.045 204.017L320.736 199.549L325.687 195.382L327.716 196.14L328.789 194.699L330.579 193.562L331.653 195.003L333.979 196.746L337.856 198.337L338.93 200.61L342.271 202.351L344.776 205.152L346.446 205.908L349.011 205.227L349.906 206.514L347.818 207.497L346.983 209.236L349.19 212.487Z"
        stroke={element.config.stroke}
        data-name="Sainte Genevieve"
        fill={assignColor('Sainte Genevieve')}
        data-x="349"
        data-y="212"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Sainte Genevieve')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M136.709 132.179L136.888 134.326L136.053 154.601L135.933 160.478L103.005 159.868L99.546 159.715L99.665 153.073H99.009L99.546 139.612L99.784 133.099L116.427 133.713L116.487 131.489L136.709 132.179Z"
        stroke={element.config.stroke}
        data-name="Johnson"
        fill={assignColor('Johnson')}
        data-x="136"
        data-y="132"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Johnson')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M320.736 199.549L326.045 204.017L318.171 211.882L331.116 225.621L333.323 227.882L336.305 225.621L338.811 227.731L336.544 229.992L313.518 229.841H306.778L306.957 222.83L307.255 196.822L308.746 197.125L308.448 200.155L308.865 201.594L310.655 202.275L320.736 199.549Z"
        stroke={element.config.stroke}
        data-name="Saint Francois"
        fill={assignColor('Saint Francois')}
        data-x="320"
        data-y="199"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Saint Francois')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M336.723 305.717L335.411 306.832L334.516 308.616V310.918L332.607 313.146L332.309 315.669H311.013L311.192 308.541H310.058L310.178 302H307.971L308.03 292.322L305.942 292.247L306.062 286.88L304.869 286.806L304.988 283.523L330.042 283.971L330.877 287.999L332.547 289.937L332.189 291.577L333.382 292.471L333.502 295.004L334.576 296.12L336.365 299.396L336.544 302.223L337.379 303.487L336.723 305.717Z"
        stroke={element.config.stroke}
        data-name="Butler"
        fill={assignColor('Butler')}
        data-x="336"
        data-y="305"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Butler')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M103.363 200.231L102.886 210.37L102.409 221.397L102.349 230.142L70.0769 229.088L70.1369 198.413L92.5069 199.095L93.1629 200.231L98.8889 198.564L101.812 200.61L103.363 200.231Z"
        stroke={element.config.stroke}
        data-name="Vernon"
        fill={assignColor('Vernon')}
        data-x="103"
        data-y="200"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Vernon')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M247.185 149.482L247.603 149.405L247.364 180.884L234.24 180.2L233.465 180.732L214.496 180.352L214.555 176.931L214.973 174.42L216.703 174.344L219.029 173.127V171.452L217.061 170.081L216.046 167.568L217.538 167.034L219.327 168.253L223.682 167.492L225.233 166.501L225.591 164.748L224.398 161.851L225.591 159.639L227.38 158.189L229.468 157.578L232.332 154.601L234.002 152.08L235.672 151.392L239.907 150.781L241.995 149.252L244.322 149.1L247.185 149.482Z"
        stroke={element.config.stroke}
        data-name="Osage"
        fill={assignColor('Osage')}
        data-x="247"
        data-y="149"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Osage')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M219.327 293.738L199.881 293.142L194.572 292.919L180.494 292.621L172.023 292.397L172.321 272.769L185.445 272.918L194.93 273.217L211.274 273.441L220.759 273.666L220.878 276.057L220.282 293.664L219.327 293.738Z"
        stroke={element.config.stroke}
        data-name="Douglas"
        fill={assignColor('Douglas')}
        data-x="219"
        data-y="293"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Douglas')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M279.815 222.378L277.13 222.302L276.713 225.696L267.288 225.621L267.467 218.982L254.284 218.756L254.403 191.059H253.806V186.581L263.888 186.809V187.189L280.053 187.265L280.232 202.578L279.815 222.378Z"
        stroke={element.config.stroke}
        data-name="Crawford"
        fill={assignColor('Crawford')}
        data-x="276"
        data-y="222"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Crawford')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M184.55 185.67L181.985 185.822L180.732 186.809L180.553 188.176L168.862 187.644L170.412 186.506L168.802 185.367L167.191 188.327L166.118 186.657L165.879 184.455L163.016 182.1L161.882 183.164L162.419 169.015H162.121L162.3 162.385L162.717 149.864L166.475 150.323L176.079 150.705L175.841 157.578L188.905 169.929H188.487L188.368 176.246L185.027 176.17L184.55 185.67Z"
        stroke={element.config.stroke}
        data-name="Morgan"
        fill={assignColor('Morgan')}
        data-x="184"
        data-y="185"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Morgan')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M202.684 146.576L196.719 170.234L188.905 169.929L175.841 157.578L176.079 150.705L189.143 150.857L196.361 132.486L197.614 134.403L198.031 136.702L200.895 139.995L202.446 140.301L203.46 141.833L202.983 143.44L201.849 144.128L202.684 146.576Z"
        stroke={element.config.stroke}
        data-name="Moniteau"
        fill={assignColor('Moniteau')}
        data-x="202"
        data-y="146"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Moniteau')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M373.946 235.714L372.097 234.961L370.427 235.338L369.114 233.757L365.356 233.305L364.402 234.359L362.612 233.23L359.749 233.832L356.408 233.155H353.605L336.663 233.305L336.544 229.992L338.811 227.73L345.194 216.793L349.19 212.487L352.173 212.26L354.857 210.219L357.482 211.958L357.601 213.62L360.942 214.527L362.731 216.491L364.879 217.85L365.535 218.906L365.058 221.246L365.893 222.076L367.802 222.453L370.367 224.867L373.35 225.621L374.364 226.45L374.304 230.217L376.69 233.605L375.676 234.66L374.364 234.359L373.946 235.714Z"
        stroke={element.config.stroke}
        data-name="Perry"
        fill={assignColor('Perry')}
        data-x="373"
        data-y="235"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Perry')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M14.1831 28.9805L36.4331 29.0585H42.5781L43.3531 30.7005L42.7571 34.2935L43.5921 36.8705L43.4131 37.8845L44.6061 39.2895L45.0231 41.0055L44.6651 43.0325L44.9641 45.8385H46.5741L46.5151 49.3445L47.7081 53.8585L46.7531 55.1815L47.4691 57.2035L45.5601 57.9805L44.3081 59.9245H41.3251L39.2971 58.9915L38.1631 56.5815L36.4331 57.2815L34.8821 56.3475V54.0145L33.0931 53.7805L28.9171 50.3565L28.3801 48.4875L26.3521 47.1635L24.4431 47.3195L22.6541 46.6175L22.0571 44.8255L23.6681 41.0835L23.7281 39.9135L22.0571 39.2115L21.2821 37.1825L18.5971 34.9185L18.4181 33.7465L19.0751 31.0905L17.9411 29.9965H16.0321L14.1831 28.9805Z"
        stroke={element.config.stroke}
        data-name="Holt"
        fill={assignColor('Holt')}
        data-x="14"
        data-y="28"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Holt')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M278.86 291.204L278.622 294.93L278.443 308.022L278.204 315.596L256.55 315.522H245.694V307.428H245.276L245.634 293.962H246.35L246.588 286.583L272.478 286.658L272.418 291.204H278.86Z"
        stroke={element.config.stroke}
        data-name="Oregon"
        fill={assignColor('Oregon')}
        data-x="278"
        data-y="291"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Oregon')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M135.277 187.037L136.828 187.872L136.411 197.428L135.874 209.463L132.593 209.388L132.116 215.886L128.954 215.811L117.978 215.509L118.097 211.051L102.886 210.37L103.363 200.231L103.841 186.733L133.07 187.644L135.277 187.037Z"
        stroke={element.config.stroke}
        data-name="Saint Clair"
        fill={assignColor('Saint Clair')}
        data-x="135"
        data-y="187"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Saint Clair')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M130.028 283.823L129.968 291.578L132.235 291.652L132.056 301.926L131.638 315.522H112.371L102.29 315.448L102.826 297.015L103.065 290.833H102.707L103.125 283.077L130.028 283.823Z"
        stroke={element.config.stroke}
        data-name="Barry"
        fill={assignColor('Barry')}
        data-x="130"
        data-y="283"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Barry')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M103.005 159.868L102.767 167.568L102.946 169.015L101.335 168.253L96.8609 169.015L93.9379 168.939L88.8679 167.949L88.2119 167.187L70.3159 166.806L70.4349 146.806L70.5549 138.54L82.9029 139.229L99.5459 139.612L99.0089 153.073H99.6649L99.5459 159.715L103.005 159.868Z"
        stroke={element.config.stroke}
        data-name="Cass"
        fill={assignColor('Cass')}
        data-x="103"
        data-y="159"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Cass')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M162.3 162.385L162.121 169.015H162.419L161.882 183.164L161.524 188.555H162.777L162.658 198.11L136.411 197.428L136.828 187.872L135.277 187.037L135.933 168.482L135.874 163.91L148.938 164.367L149.236 162.08L162.3 162.385Z"
        stroke={element.config.stroke}
        data-name="Benton"
        fill={assignColor('Benton')}
        data-x="162"
        data-y="162"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Benton')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M307.255 196.821L306.957 222.829L299.56 222.678L293.237 222.905L279.815 222.377L280.232 202.577L280.053 187.264L287.57 187.188H298.963L305.644 195.987L307.255 196.821Z"
        stroke={element.config.stroke}
        data-name="Washington"
        fill={assignColor('Washington')}
        data-x="307"
        data-y="296"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Washington')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M192.424 128.728L196.361 132.486L189.143 150.857L176.079 150.705L166.475 150.323L162.717 149.864L163.254 131.949L163.374 128.651L170.353 121.817L171.606 125.12L175.006 127.96L179.897 128.728L183.417 127.807L184.789 128.421L187.234 128.344L190.277 129.034L192.424 128.728Z"
        stroke={element.config.stroke}
        data-name="Cooper"
        fill={assignColor('Cooper')}
        data-x="192"
        data-y="128"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Cooper')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M214.555 176.931L214.496 180.352L214.317 190.376H215.331L215.032 201.367L201.909 201.14L195.287 200.988L193.14 197.807L191.947 197.731L192.007 195.23L191.112 195.154L189.978 193.335V189.845H187.831L187.891 186.506L185.803 186.43L184.55 185.67L185.027 176.17L188.368 176.246L188.487 169.929H188.905L196.719 170.234L202.028 170.31L201.849 176.855L209.186 176.931L211.632 178.147L212.587 176.931H214.555Z"
        stroke={element.config.stroke}
        data-name="Miller"
        fill={assignColor('Miller')}
        data-x="214"
        data-y="176"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Miller')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M305.823 131.566L304.093 131.412L302.721 133.253L301.111 131.873L297.77 132.869L297.174 135.092L289.836 135.246L288.405 136.319H279.159V131.719L274.506 131.796L274.625 127.116H270.032L270.091 115.745L274.744 115.822V109.049L302.423 109.203L303.497 116.129L304.749 118.359L304.57 119.82L302.96 122.509L304.034 125.811L305.167 127.807V129.878L305.823 131.566Z"
        stroke={element.config.stroke}
        data-name="Lincoln"
        fill={assignColor('Lincoln')}
        data-x="305"
        data-y="131"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Lincoln')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M373.946 235.714L374.483 238.197L376.75 243.009L378.599 244.888L379.792 248.643L379.673 250.745L378.659 252.546L376.69 252.846L374.662 254.722L374.185 257.421L375.318 259.145L376.929 259.295L374.602 259.895L372.156 259.67L367.981 260.719L367.862 261.843L364.103 263.191L362.97 264.314L362.91 266.56L361.837 267.607L359.749 267.533L359.451 268.805L353.247 268.655L353.485 261.843L353.605 233.155H356.408L359.749 233.832L362.612 233.23L364.402 234.359L365.356 233.305L369.114 233.757L370.427 235.338L372.097 234.961L373.946 235.714Z"
        stroke={element.config.stroke}
        data-name="Cape Girardeau"
        fill={assignColor('Cape Girardeau')}
        data-x="373"
        data-y="235"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Cape Girardeau')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M385.22 305.644L383.252 302.596L382.655 300.513L378.42 295.526V293.887L376.094 290.684L373.946 289.64V288L375.02 287.329L375.199 285.24L377.227 285.315L377.287 283.077H379.315L380.448 280.837L382.536 280.912L382.596 278.672L384.385 277.701L386.592 277.626L387.726 278.896L389.456 278.149L389.635 276.73L387.427 275.011L386.831 273.367L390.171 273.441L390.887 275.086L393.154 277.178L393.572 279.867L394.824 280.315L397.091 279.344L398.582 279.941L399 282.256L397.747 285.912L397.27 288.671L394.466 290.162L394.347 292.174L395.481 293.738L397.33 294.036L397.867 296.196L397.031 296.643L394.705 296.121L393.691 296.866L393.035 298.652L394.586 301.257L395.182 303.191L393.273 305.495L392.737 308.914L391.424 310.325L389.635 310.622L388.68 310.028L386.055 306.313L385.22 305.644Z"
        stroke={element.config.stroke}
        data-name="Mississippi"
        fill={assignColor('Mississippi')}
        data-x="385"
        data-y="305"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Mississippi')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M120.901 28.8246V39.0556L93.879 38.9776L93.938 19.5916L94.058 12.7746L93.043 12.6956L92.865 4.77056L120.066 4.29956L120.245 12.5396H120.841L120.901 28.8246Z"
        stroke={element.config.stroke}
        data-name="Harrison"
        fill={assignColor('Harrison')}
        data-x="120"
        data-y="28"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Harrison')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M288.405 136.318L287.927 161.392L285.482 160.324L283.573 157.425L281.664 156.585L278.741 157.348L274.923 156.661L272.239 155.669L271.941 153.531L267.109 149.175L265.379 149.863L263.768 149.634L260.845 148.793L261.084 138.309L267.705 138.386L270.032 138.616L270.151 129.571L270.032 127.115H274.625L274.506 131.795L279.159 131.718V136.318H288.405Z"
        stroke={element.config.stroke}
        data-name="Warren"
        fill={assignColor('Warren')}
        data-x="288"
        data-y="136"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Warren')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M135.874 163.91L135.933 168.482L135.277 187.037L133.07 187.644L103.841 186.733L102.349 186.657L102.946 169.015L102.767 167.568L103.005 159.868L135.933 160.478L135.874 163.91Z"
        stroke={element.config.stroke}
        data-name="Henry"
        fill={assignColor('Henry')}
        data-x="135"
        data-y="163"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Henry')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M172.023 292.397L148.162 291.801H146.015L146.432 278.672L130.147 278.448V270.75L162.598 271.423L172.321 271.497V272.769L172.023 292.397Z"
        stroke={element.config.stroke}
        data-name="Christian"
        fill={assignColor('Christian')}
        data-x="172"
        data-y="292"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Christian')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M218.79 315.596L194.631 315.67L179.957 315.596L180.195 299.694L180.494 292.621L194.572 292.919L199.881 293.142L219.327 293.738L218.79 315.596Z"
        stroke={element.config.stroke}
        data-name="Ozark"
        fill={assignColor('Ozark')}
        data-x="218"
        data-y="315"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Ozark')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M94.1169 110.82L95.3099 110.281L96.2649 111.205L95.7869 112.898L98.4119 113.591L100.321 115.745L99.7839 133.099L99.5459 139.612L82.9029 139.229L70.5549 138.54V117.898L73.8349 116.821L76.0429 115.206L77.7129 115.668L79.3229 117.36L81.2919 115.745L82.6039 113.975L82.1869 111.898L83.3799 111.821L84.8109 114.283L86.6009 112.436L88.5099 109.126L89.5839 108.51L91.5519 108.587L94.1169 110.82Z"
        stroke={element.config.stroke}
        data-name="Jackson"
        fill={assignColor('Jackson')}
        data-x="94"
        data-y="110"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Jackson')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M162.717 149.863L162.3 162.384L149.236 162.079L148.938 164.367L135.874 163.91L135.933 160.477L136.053 154.6L136.888 134.326L136.709 132.178V130.875L143.509 131.335L150.131 131.565L163.254 131.949L162.717 149.863Z"
        stroke={element.config.stroke}
        data-name="Pettis"
        fill={assignColor('Pettis')}
        data-x="162"
        data-y="149"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Pettis')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M353.605 233.155L353.485 261.843L353.247 268.655H347.818L347.639 273.965L345.492 273.815L345.432 275.16L338.811 275.086L338.751 271.722L332.189 271.572L332.428 254.572L336.663 254.797L337.081 237.219L336.663 233.305L353.605 233.155Z"
        stroke={element.config.stroke}
        data-name="Bollinger"
        fill={assignColor('Bollinger')}
        data-x="353"
        data-y="233"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Bollinger')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M212.945 154.066L214.018 155.364L214.257 157.349L217.061 159.333L219.327 160.249L222.429 160.63L225.591 159.639L224.398 161.851L225.591 164.748L225.233 166.501L223.682 167.492L219.327 168.253L217.538 167.034L216.046 167.568L217.061 170.081L219.029 171.452V173.127L216.703 174.344L214.973 174.42L214.555 176.931H212.587L211.632 178.147L209.186 176.931L201.849 176.855L202.028 170.31L196.719 170.234L202.684 146.576L204.355 147.265L205.667 148.564L204.534 150.399L205.369 151.622L208.65 152.309L210.678 153.913L212.945 154.066Z"
        stroke={element.config.stroke}
        data-name="Cole"
        fill={assignColor('Cole')}
        data-x="212"
        data-y="154"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Cole')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M274.983 80.4796H273.432L258.221 91.9256L259.652 101.96H255.119L242.83 101.728V100.571L243.188 80.4026L243.009 75.8326L242.95 73.8176L255.357 73.6626L267.347 73.7396L269.376 75.3676L271.344 78.0796L274.983 80.4796Z"
        stroke={element.config.stroke}
        data-name="Ralls"
        fill={assignColor('Ralls')}
        data-x="274"
        data-y="80"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Ralls')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M35.061 4.14153L35.181 11.9905H36.612L36.433 29.0585L14.183 28.9805L14.302 27.1045L10.365 24.9145L8.695 25.5395L8.218 24.2105L10.067 22.8015L8.934 20.8445L8.755 19.2005L7.741 16.9285L7.8 14.5775L5.832 12.7745L5.474 9.95053L7.741 9.00953L8.278 7.36153L7.144 5.39853L5.772 5.86953L5.593 8.14653L3.147 8.38153L1.298 7.51853L1.656 6.10553L1 4.61353L1.537 3.59253L12.99 3.82753L35.061 4.14153Z"
        stroke={element.config.stroke}
        data-name="Atchison"
        fill={assignColor('Atchison')}
        data-x="35"
        data-y="4"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Atchison')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M162.598 271.422L130.147 270.749L130.386 257.12L129.133 257.045L129.372 245.939L155.619 246.615L162.121 246.84L161.882 257.72H162.956L162.598 271.422Z"
        stroke={element.config.stroke}
        data-name="Greene"
        fill={assignColor('Greene')}
        data-x="162"
        data-y="271"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Greene')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M200.418 107.586L192.245 126.962L192.424 128.728L190.277 129.034L187.234 128.344L184.789 128.421L183.417 127.807L179.897 128.728L175.006 127.96L171.606 125.12L170.353 121.817L172.023 120.281L170.412 119.128L169.756 117.36L171.904 115.899L172.142 114.052L174.767 111.128L175.304 109.049L178.883 100.186L183.894 102.037L200.418 107.586Z"
        stroke={element.config.stroke}
        data-name="Howard"
        fill={assignColor('Howard')}
        data-x="200"
        data-y="107"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Howard')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M235.254 75.7546L243.009 75.8326L243.188 80.4026L242.83 100.571H234.777L221.236 100.494L214.555 100.263L207.635 99.8766L208.053 80.0156H208.232L214.973 80.0926L215.092 75.5996L224.636 75.7546H235.254Z"
        stroke={element.config.stroke}
        data-name="Monroe"
        fill={assignColor('Monroe')}
        data-x="235"
        data-y="75"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Monroe')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M70.674 91.6166L70.793 114.437L68.705 114.899L65.663 112.744L64.53 113.591L62.144 113.514L59.877 110.82L56.954 109.819L57.431 107.586L56.596 106.276L53.852 104.349L52.957 102.731L52.599 100.186L54.21 97.7166L53.255 96.5585L51.287 97.0986L50.392 95.4006L49.08 94.4745L47.708 92.2346L45.083 91.1526L43.771 87.9066L41.146 85.6646L70.793 85.8966L70.674 91.6166Z"
        stroke={element.config.stroke}
        data-name="Platte"
        fill={assignColor('Platte')}
        data-x="70"
        data-y="91"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Platte')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M155.619 246.616L129.372 245.94L129.73 235.037L130.147 222.453L128.775 222.378L128.954 215.811L132.116 215.886V216.944L155.201 217.623L155.082 223.358H156.156L155.619 246.616Z"
        stroke={element.config.stroke}
        data-name="Polk"
        fill={assignColor('Polk')}
        data-x="155"
        data-y="246"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Polk')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M386.592 277.625L384.385 277.7L382.596 278.671L382.536 280.911L380.448 280.836L379.315 283.076H377.287L377.227 285.314L375.199 285.239L375.02 287.328L373.946 287.999H370.963L368.816 288.521L363.805 288.67L363.567 287.328L364.163 283.971L362.433 281.732L362.135 279.119L360.107 275.907L358.198 271.945L359.451 268.804L359.749 267.532L361.837 267.606L362.91 266.559L362.97 264.313L364.103 263.19L367.862 261.842L367.981 260.718L372.156 259.669L374.602 259.894L376.929 259.294L377.644 260.268L377.167 261.916L377.764 264.163L379.971 268.28L382.476 271.122L382.118 274.786L386.592 277.625Z"
        stroke={element.config.stroke}
        data-name="Scott"
        fill={assignColor('Scott')}
        data-x="386"
        data-y="277"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Scott')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M256.133 30.0746L228.931 29.2156L229.11 25.5396L229.528 2.02058L242.353 1.39258L244.62 3.67058L245.037 6.02658L248.855 7.43958L248.796 9.08758L250.466 10.8136L252.017 13.3236L254.284 13.5586L254.522 17.2416L256.312 18.2606L256.789 19.2786L259.414 19.3566L259.056 21.3926L257.982 23.4276L256.371 28.1986L256.133 30.0746Z"
        stroke={element.config.stroke}
        data-name="Clark"
        fill={assignColor('Clark')}
        data-x="256"
        data-y="30"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Clark')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M211.274 273.441L194.93 273.217L185.445 272.918L185.743 258.321H184.968L185.147 241.957L211.155 242.483L211.095 258.845H211.513L211.274 273.441Z"
        stroke={element.config.stroke}
        data-name="Wright"
        fill={assignColor('Wright')}
        data-x="211"
        data-y="273"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Wright')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M144.762 46.7736L144.404 46.8516L144.523 28.6676L144.404 19.5136L154.724 19.4356L168.265 19.1216H174.946L175.006 22.6446L175.244 46.3846L144.762 46.7736Z"
        stroke={element.config.stroke}
        data-name="Sullivan"
        fill={assignColor('Sullivan')}
        data-x="144"
        data-y="46"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Sullivan')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M311.013 315.67L298.903 315.596H278.204L278.443 308.022L278.622 294.93L278.86 291.205L285.303 291.354L288.882 292.025L305.942 292.248L308.03 292.323L307.971 302.001H310.178L310.058 308.542H311.192L311.013 315.67Z"
        stroke={element.config.stroke}
        data-name="Ripley"
        fill={assignColor('Ripley')}
        data-x="311"
        data-y="315"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Ripley')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M260.845 148.793L257.803 149.175L252.852 151.391L249.81 150.627L247.603 149.404L247.185 149.481L248.02 121.97L248.259 115.282L261.323 115.513L270.091 115.744L270.032 127.115L270.151 129.571L270.032 138.616L267.705 138.386L261.084 138.309L260.845 148.793Z"
        stroke={element.config.stroke}
        data-name="Montgomery"
        fill={assignColor('Montgomery')}
        data-x="260"
        data-y="148"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Montgomery')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M121.02 79.4736L120.961 65.9826L120.841 59.0696L121.02 52.6136L144.762 51.9136L144.523 72.4216H151.025L149.653 73.6626L149.057 76.6076L150.608 78.3116L149.475 79.2406L141.302 79.3186L127.88 79.5506L121.02 79.4736Z"
        stroke={element.config.stroke}
        data-name="Livingston"
        fill={assignColor('Livingston')}
        data-x="121"
        data-y="79"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Livingston')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M372.156 327.383L369.055 326.864L368.279 328.789L369.174 329.9L372.514 331.75L372.216 333.748L368.816 334.561L364.939 333.748L363.626 333.896L363.388 335.301L366.49 337.815L367.563 339.367L369.89 341.436L368.876 343.651L365.953 344.833L364.581 346.678L364.461 349.187L362.314 352.211H354.738L347.878 352.432L347.699 323.901L358.854 323.975L360.345 323.456L360.644 321.381L361.717 320.788L363.567 321.529L364.998 322.864L366.967 322.715L368.637 321.974L369.83 322.641L371.023 325.457L372.216 326.272L372.156 327.383Z"
        stroke={element.config.stroke}
        data-name="Pemiscot"
        fill={assignColor('Pemiscot')}
        data-x="372"
        data-y="327"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Pemiscot')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M103.542 256.447L103.184 274.488L69.8979 273.815L70.0179 250.895L101.753 252.021L101.693 256.372L103.542 256.447Z"
        stroke={element.config.stroke}
        data-name="Jasper"
        fill={assignColor('Jasper')}
        data-x="103"
        data-y="156"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Jasper')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M120.961 86.2057L120.901 106.507L121.08 110.974L119.35 111.359L116.785 110.358L114.28 111.051L112.848 112.513L110.522 112.821L109.925 114.975L108.672 115.822L107.3 114.975L108.732 112.59L107.42 110.897L104.556 112.59L104.914 114.899L103.363 116.129L102.051 116.437L100.321 115.745L98.4119 113.591L95.7869 112.898L96.2649 111.205L95.3099 110.281L94.1169 110.82L94.2369 91.7707L94.1769 86.1287L107.539 86.3607L120.961 86.2057Z"
        stroke={element.config.stroke}
        data-name="Ray"
        fill={assignColor('Ray')}
        data-x="1200"
        data-y="86"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Ray')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M175.602 46.3845L174.767 72.6545L161.465 72.1895L151.025 72.4215H144.523L144.762 51.9135V46.7735L175.244 46.3845H175.602Z"
        stroke={element.config.stroke}
        data-name="Linn"
        fill={assignColor('Linn')}
        data-x="175"
        data-y="46"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Linn')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M179.957 315.596H167.49H147.685L148.162 291.801L172.023 292.397L180.494 292.621L180.195 299.694L179.957 315.596Z"
        stroke={element.config.stroke}
        data-name="Taney"
        fill={assignColor('Taney')}
        data-x="179"
        data-y="315"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Taney')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M185.326 22.6446H175.006L174.946 19.1216H168.265L154.724 19.4356L144.404 19.5136L144.344 12.5396H143.867L143.629 4.06359H149.176L183.476 3.27759L185.087 5.79159L184.013 7.59659L185.564 8.53859L184.848 11.2846L184.132 12.3036L183.775 14.7346L185.624 16.6936L185.206 18.6516L185.326 22.6446Z"
        stroke={element.config.stroke}
        data-name="Putnam"
        fill={assignColor('Putnam')}
        data-x="186"
        data-y="22"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Putnam')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M103.125 283.076L102.707 290.832H103.065L102.826 297.014L69.8391 295.599L69.8981 273.814L103.184 274.487L103.125 283.076Z"
        stroke={element.config.stroke}
        data-name="Newton"
        fill={assignColor('Newton')}
        data-x="103"
        data-y="283"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Newton')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M175.244 241.806L162.121 241.581V246.841L155.619 246.616L156.156 223.358H155.082L155.201 217.622L155.559 209.917L162.24 210.068L175.125 210.597L174.767 223.811H175.662L175.244 241.806Z"
        stroke={element.config.stroke}
        data-name="Dallas"
        fill={assignColor('Dallas')}
        data-x="175"
        data-y="241"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Dallas')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M130.147 278.448L130.028 283.823L103.125 283.077L103.184 274.488L103.542 256.447L129.133 257.046L130.386 257.121L130.147 270.75V278.448Z"
        stroke={element.config.stroke}
        data-name="Lawrence"
        fill={assignColor('Lawrence')}
        data-x="130"
        data-y="278"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Lawrence')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M185.147 241.957L184.968 258.321H185.743L185.445 272.918L172.321 272.769V271.497L162.598 271.423L162.956 257.721H161.882L162.121 246.841V241.581L175.244 241.806L185.147 241.957Z"
        stroke={element.config.stroke}
        data-name="Webster"
        fill={assignColor('Webster')}
        data-x="185"
        data-y="241"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Webster')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M102.29 234.51L101.753 252.021L70.0181 250.895L70.0771 229.088L102.349 230.142L102.29 234.51Z"
        stroke={element.config.stroke}
        data-name="Barton"
        fill={assignColor('Barton')}
        data-x="102"
        data-y="234"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Barton')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M224.278 232.778L211.215 232.854V229.464L201.969 224.565H201.491L201.73 213.62L201.909 201.14L215.032 201.367L224.875 201.821L224.636 224.867H224.338L224.278 232.778Z"
        stroke={element.config.stroke}
        data-name="Pulaski"
        fill={assignColor('Pulaski')}
        data-x="224"
        data-y="232"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Pulaski')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M298.903 274.413H301.767L301.826 278.224H302.9L302.96 280.315L303.974 280.389V283.524H304.988L304.869 286.807L306.062 286.881L305.942 292.248L288.882 292.025L285.303 291.354L278.86 291.205H272.418L272.478 286.658L272.895 271.497L279.338 271.647L281.724 270.974L284.706 270.75L288.047 270.6L287.927 274.114L298.903 274.413Z"
        stroke={element.config.stroke}
        data-name="Carter"
        fill={assignColor('Carter')}
        data-x="298"
        data-y="274"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Carter')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M247.364 180.884V190.983L248.139 191.059L248.08 198.868L241.1 198.64L234.658 198.716L232.391 198.564L230.423 200.079L229.11 199.398L228.096 201.897L224.875 201.821L215.032 201.367L215.331 190.376H214.317L214.496 180.352L233.465 180.732L234.24 180.2L247.364 180.884Z"
        stroke={element.config.stroke}
        data-name="Maries"
        fill={assignColor('Maries')}
        data-x="247"
        data-y="180"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Maries')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M259.712 53.4696L235.612 53.3146L228.812 53.2366L229.23 32.4196L228.931 29.2156L256.133 30.0746L255.656 30.8566L255.238 35.3866L255.298 39.3676L256.431 44.7476L256.371 47.0076L258.161 50.9016L259.712 53.4696Z"
        stroke={element.config.stroke}
        data-name="Lewis"
        fill={assignColor('Lewis')}
        data-x="259"
        data-y="53"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Lewis')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M235.254 75.7547H224.636L215.092 75.5997L214.973 80.0927L208.232 80.0157L208.471 66.6037L208.829 53.0027L228.812 53.2367L235.612 53.3147L235.374 66.7587L235.254 75.7547Z"
        stroke={element.config.stroke}
        data-name="Shelby"
        fill={assignColor('Shelby')}
        data-x="235"
        data-y="75"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Shelby')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M120.961 65.9825L107.539 66.1375L94.356 65.9055V59.0695L94.594 46.8515H93.7L93.879 38.9775L120.901 39.0555L121.02 52.6135L120.841 59.0695L120.961 65.9825Z"
        stroke={element.config.stroke}
        data-name="Daviess"
        fill={assignColor('Daviess')}
        data-x="120"
        data-y="65"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Daviess')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M205.07 22.3315L205.13 25.5395L205.369 32.3405L205.488 46.2285L175.602 46.3845H175.244L175.006 22.6445H185.326L205.07 22.3315Z"
        stroke={element.config.stroke}
        data-name="Adair"
        fill={assignColor('Adair')}
        data-x="205"
        data-y="65"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Adair')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M267.347 73.7395L255.357 73.6625L242.95 73.8175L243.009 75.8325L235.254 75.7545L235.374 66.7585L235.612 53.3145L259.712 53.4695L260.726 55.8035L259.473 57.5145L259.115 59.2245L259.891 61.4785L263.768 64.8185L264.186 66.2935L263.709 69.2425L263.947 70.4835L267.347 73.7395Z"
        stroke={element.config.stroke}
        data-name="Marion"
        fill={assignColor('Marion')}
        data-x="267"
        data-y="73"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Marion')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M263.768 149.634L263.888 186.808L253.806 186.58V191.058H248.139L247.364 190.982V180.883L247.603 149.404L249.81 150.627L252.852 151.391L257.803 149.175L260.845 148.793L263.768 149.634Z"
        stroke={element.config.stroke}
        data-name="Gasconade"
        fill={assignColor('Gasconade')}
        data-x="263"
        data-y="149"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Gasconade')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M128.954 215.811L128.775 222.378L130.147 222.453L129.73 235.037L102.29 234.51L102.349 230.142L102.409 221.397L102.886 210.37L118.097 211.051L117.978 215.509L128.954 215.811Z"
        stroke={element.config.stroke}
        data-name="Cedar"
        fill={assignColor('Cedar')}
        data-x="128"
        data-y="215"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Cedar')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M148.162 291.801L147.685 315.596L131.638 315.522L132.056 301.926L132.235 291.652L129.968 291.578L130.028 283.823L130.147 278.448L146.432 278.672L146.015 291.801H148.162Z"
        stroke={element.config.stroke}
        data-name="Stone"
        fill={assignColor('Stone')}
        data-x="148"
        data-y="291"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Stone')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M70.614 63.4975L70.734 69.0865L70.793 85.8965L41.146 85.6645L40.311 83.9625L40.967 81.9505L43.711 81.7185L44.427 80.4025L43.89 78.7765L44.964 76.0645L46.336 74.6705L48.483 73.9725L48.96 73.1195L49.08 69.7075L50.034 69.0865L51.824 70.2505L53.554 70.7155L54.926 69.7855L54.866 67.2245L52.003 67.8455L51.525 65.7495L53.673 65.3615L54.389 63.3425L70.614 63.4975Z"
        stroke={element.config.stroke}
        data-name="Buchanan"
        fill={assignColor('Buchanan')}
        data-x="70"
        data-y="63"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Buchanan')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M102.826 297.015L102.29 315.448L80.8151 315.374L69.9581 315.522L69.8391 295.6L102.826 297.015Z"
        stroke={element.config.stroke}
        data-name="McDonald"
        fill={assignColor('McDonald')}
        data-x="102"
        data-y="297"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'McDonald')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M184.49 79.6277L201.074 79.9377L208.053 80.0157L207.635 99.8767L207.397 107.74L200.418 107.586L183.894 102.037L184.252 79.6277H184.49Z"
        stroke={element.config.stroke}
        data-name="Randolph"
        fill={assignColor('Randolph')}
        data-x="184"
        data-y="79"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Randolph')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M228.812 53.2365L208.829 53.0025H205.428L205.488 46.2285L205.369 32.3405L205.13 25.5396L222.31 25.3835L229.11 25.5396L228.931 29.2155L229.23 32.4195L228.812 53.2365Z"
        stroke={element.config.stroke}
        data-name="Knox"
        fill={assignColor('Knox')}
        data-x="228"
        data-y="53"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Knox')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M129.372 245.94L129.133 257.046L103.542 256.447L101.693 256.372L101.753 252.021L102.29 234.51L129.73 235.036L129.372 245.94Z"
        stroke={element.config.stroke}
        data-name="Dade"
        fill={assignColor('Dade')}
        data-x="129"
        data-y="245"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Dade')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M93.8791 38.9777L93.7001 46.8517L87.0191 46.5407H74.1931L70.6741 46.4627L70.4351 39.6017L70.9721 19.3567L73.8951 19.4357L93.9381 19.5917L93.8791 38.9777Z"
        stroke={element.config.stroke}
        data-name="Gentry"
        fill={assignColor('Gentry')}
        data-x="93"
        data-y="38"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Gentry')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M162.658 198.109L162.24 210.067L155.559 209.916L155.201 217.622L132.116 216.943V215.885L132.593 209.387L135.874 209.462L136.411 197.427L162.658 198.109Z"
        stroke={element.config.stroke}
        data-name="Hickory"
        fill={assignColor('Hickory')}
        data-x="162"
        data-y="198"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Hickory')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M313.518 229.841L336.544 229.992L336.663 233.305L337.081 237.219L336.663 254.797L332.428 254.572L312.624 254.422L312.743 247.667L312.802 233.23H313.518V229.841Z"
        stroke={element.config.stroke}
        data-name="Madison"
        fill={assignColor('Madison')}
        data-x="313"
        data-y="229"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Madison')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M44.606 39.2896L70.435 39.6015L70.674 46.4625L70.614 63.4976L54.389 63.3425L53.554 62.1775L51.585 61.7115L50.69 60.3125L51.406 58.7585L50.989 57.5925L49.318 57.0475L47.469 57.2035L46.753 55.1815L47.708 53.8586L46.515 49.3446L46.574 45.8385H44.964L44.665 43.0325L45.023 41.0055L44.606 39.2896Z"
        stroke={element.config.stroke}
        data-name="Andrew"
        fill={assignColor('Andrew')}
        data-x="44"
        data-y="39"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Andrew')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M94.1169 110.82L91.5519 108.587L89.5839 108.51L88.5099 109.126L86.6009 112.436L84.8109 114.283L83.3799 111.821L82.1869 111.898L82.6039 113.975L81.2919 115.745L79.3229 117.36L77.7129 115.668L76.0429 115.206L73.8349 116.821L70.5549 117.898L71.4489 115.283L70.7929 114.437L70.6739 91.6167L94.2369 91.7707L94.1169 110.82Z"
        stroke={element.config.stroke}
        data-name="Clay"
        fill={assignColor('Clay')}
        data-x="94"
        data-y="110"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Clay')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M143.629 4.06348L143.867 12.5395H144.344L144.404 19.5135L144.523 28.6675L120.901 28.8245L120.841 12.5395H120.245L120.066 4.29948L143.629 4.06348Z"
        stroke={element.config.stroke}
        data-name="Mercer"
        fill={assignColor('Mercer')}
        data-x="143"
        data-y="4"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Mercer')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M229.528 2.02051L229.11 25.5395L222.31 25.3835L205.13 25.5395L205.07 22.3315L204.891 2.72851L222.489 2.25651L229.528 2.02051Z"
        stroke={element.config.stroke}
        data-name="Scotland"
        fill={assignColor('Scotland')}
        data-x="229"
        data-y="2"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Scotland')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M144.523 28.6675L144.404 46.8515L144.762 46.7735V51.9135L121.02 52.6135L120.901 39.0555V28.8245L144.523 28.6675Z"
        stroke={element.config.stroke}
        data-name="Grundy"
        fill={assignColor('Grundy')}
        data-x="144"
        data-y="28"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Grundy')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M120.961 65.9825L121.02 79.4735L120.961 86.2055L107.539 86.3605L94.177 86.1285L94.296 69.3975L94.356 65.9055L107.539 66.1375L120.961 65.9825Z"
        stroke={element.config.stroke}
        data-name="Caldwell"
        fill={assignColor('Caldwell')}
        data-x="120"
        data-y="65"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Caldwell')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M70.674 46.4626L74.193 46.5406H87.019L93.7 46.8516H94.594L94.356 59.0696V65.9056L94.296 69.3976L70.734 69.0866L70.614 63.4977L70.674 46.4626Z"
        stroke={element.config.stroke}
        data-name="DeKalb"
        fill={assignColor('DeKalb')}
        data-x="70"
        data-y="46"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'DeKalb')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M94.1771 86.1287L94.2371 91.7707L70.6741 91.6167L70.7931 85.8967L70.7341 69.0867L94.2961 69.3977L94.1771 86.1287Z"
        stroke={element.config.stroke}
        data-name="Clinton"
        fill={assignColor('Clinton')}
        data-x="94"
        data-y="86"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Clinton')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M204.891 2.72852L205.07 22.3315L185.326 22.6445L185.206 18.6515L185.624 16.6935L183.775 14.7345L184.132 12.3035L184.848 11.2845L185.564 8.53852L184.013 7.59652L185.087 5.79152L183.476 3.27752L204.891 2.72852Z"
        stroke={element.config.stroke}
        data-name="Schuyler"
        fill={assignColor('Schuyler')}
        data-x="204"
        data-y="2"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Schuyler')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M69.0629 4.77051L77.2359 4.84851L92.8649 4.77051L93.0429 12.6955L94.0579 12.7745L93.9379 19.5915L73.8949 19.4355L70.9719 19.3565L70.3759 19.2785V12.5395H69.0039L69.0629 4.77051Z"
        stroke={element.config.stroke}
        data-name="Worth"
        fill={assignColor('Worth')}
        data-x="69"
        data-y="4"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Worth')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M329.923 162.461L326.701 158.952L326.284 157.807L327.537 152.997L330.46 148.182L333.561 145.735L334.576 144.052L335.47 144.205L332.786 147.953V149.1L334.337 151.622L334.754 154.906L333.979 157.197L332.01 159.181L329.923 162.461Z"
        stroke={element.config.stroke}
        data-name="Saint Lou"
        fill={assignColor('Saint Lou')}
        data-x="329"
        data-y="162"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Saint Lou')}
        onMouseLeave={handleMouseLeave}
      />
      {present && renderTooltip()}
      {renderLabels()}
    </svg>
  );
};

MapMissouri.propTypes = ElementPropTypes;
MapMissouriPresent.propTypes = {
  element: PropTypes.object.isRequired,
};
MapMissouriContent.propTypes = {
  element: PropTypes.object.isRequired,
  present: PropTypes.bool,
};

export default MapMissouri;
