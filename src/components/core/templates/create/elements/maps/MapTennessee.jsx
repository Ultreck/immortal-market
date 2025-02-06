import { ElementPropTypes } from '@/lib/prop-types.js';
import useMapElement from '@/lib/design/use-map-element.jsx';
import PropTypes from 'prop-types';

const MapTennessee = ({ element }) => {
  return <MapTennesseeContent element={element} />;
};

export const MapTennesseePresent = ({ element }) => {
  return <MapTennesseeContent element={element} />;
};

export const MapTennesseePreview = () => {
  return <MapTennesseeContent element={{ config: { data: [], fill: '#f9fafb', stroke: '#f9fafb' } }} present={false} />;
};

const MapTennesseeContent = ({ element, present = true }) => {
  const { el, assignColor, renderLabels, handleMouseMove, handleMouseLeave, renderTooltip } = useMapElement(element);

  return (
    <svg
      style={{ width: element.width, height: element.height }}
      ref={el}
      width="100%"
      viewBox="0 0 400 98"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M355.584 34.2149L356.273 35.2949L355.125 37.4549L353.655 35.9769L347.085 40.0109L346.626 42.4519L345.063 43.9839L343.042 42.4519L341.664 43.0189L333.118 33.7599L330.913 32.7369L328.892 30.7449L329.213 29.4359L333.027 25.9629L337.621 23.1709L339.688 20.6619L340.883 21.0039L344.145 18.6089L345.431 19.0649L350.485 16.3259L353.884 15.8689L353.012 31.0869L355.584 34.2149Z"
        fill={assignColor('Greene')}
        stroke={element.config.stroke}
        data-name="Greene"
        data-x="355"
        data-y="34"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Greene')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M32.103 74.9111L31.598 96.3851L1 96.3291L2.562 93.9171L6.008 94.4781L7.018 89.5941L8.672 88.4711L10.74 89.4261L12.164 87.6841L9.959 86.0541L11.842 83.8621L10.464 81.8371L8.259 81.7801L8.075 79.2481L10.28 78.7971V76.8831L11.796 74.5171L12.761 74.2911L13.818 73.9531L28.887 74.2911L32.103 74.9111Z"
        fill={assignColor('Shelby')}
        stroke={element.config.stroke}
        data-name="Shelby"
        data-x="32"
        data-y="74"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Shelby')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M282.26 61.7629L286.027 64.3059L286.854 65.6039L291.081 65.2089L290.392 67.1289L293.424 69.1599L292.781 70.1189L289.932 73.1639L290.3 75.5869L289.335 76.4889L289.795 79.5859L286.854 81.8929L281.893 82.3429L280.422 81.1049L277.62 83.4679L277.482 84.5359L268.156 80.0919L269.993 78.2339L272.061 77.5589L272.107 73.7279L270.729 72.3749L270.177 69.2169L268.064 64.2489L266.823 62.8369L266.686 60.8589L267.513 58.8799L274.45 58.7109L277.115 59.1069L279.32 61.4239L282.26 61.7629Z"
        fill={assignColor('Monroe')}
        stroke={element.config.stroke}
        data-name="Monroe"
        data-x="282"
        data-y="61"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Monroe')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M258.692 18.6089L262.735 24.2539L264.572 24.5389L264.756 26.2479L269.258 28.1269L270.637 30.4039L271.601 33.5899L273.485 34.3289L275.185 36.9429L270.407 40.5219L268.202 40.5789L263.102 42.4519L259.702 45.0049L257.819 40.0109L252.673 34.9539L250.835 31.8829L249.273 30.8019L248.952 27.8989L250.284 25.9629L250.606 23.6839L254.419 22.7149L255.338 20.7189L256.946 20.5479L258.692 18.6089Z"
        fill={assignColor('Morgan')}
        stroke={element.config.stroke}
        data-name="Morgan"
        data-x="258"
        data-y="18"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Morgan')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M322.781 45.4019V47.1029L324.757 49.5969L323.7 51.3529L323.884 54.8069L325.17 55.8819L323.241 59.0499L321.036 58.8239L318.647 61.0289L316.212 61.9329L313.96 64.4189L310.147 64.3619L309.366 63.6279L306.38 64.0229V57.4099L303.807 54.0149L300.315 46.1389L306.793 41.3169L305.92 37.5119L306.701 37.2839L312.812 41.7709L315.293 44.0969L318.876 43.5869L322.781 45.4019Z"
        fill={assignColor('Sevier')}
        stroke={element.config.stroke}
        data-name="Sevier"
        data-x="322"
        data-y="45"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Sevier')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M175.398 33.988L185.781 41.544L192.029 42.225L191.753 46.48L191.064 46.877L190.375 51.014L190.697 52.826L188.951 56.448L187.802 57.353V60.407L183.3 58.767L177.373 59.728L174.065 56.844L170.344 56.561L169.655 57.523L167.496 56.165L166.99 53.449L170.39 50.844L170.804 47.614L170.16 44.608L170.482 41.43L170.987 39.159L173.147 37.739L173.193 36.034L175.398 33.988Z"
        fill={assignColor('Rutherford')}
        stroke={element.config.stroke}
        data-name="Rutherford"
        data-x="175"
        data-y="33"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Rutherford')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M45.3802 46.706L44.7372 50.05L42.7162 49.937L41.0162 53.109L41.3382 55.034L39.7752 57.693L39.5922 62.667L37.7542 63.345L33.1602 60.576H30.7252L26.4522 59.615L23.3282 62.159L20.6632 63.176L19.5152 65.887L17.8152 64.532L17.9532 62.272L21.5362 60.576L21.1232 58.485L19.2852 59.333L17.2642 57.014L17.4012 54.581L19.5612 53.335L21.0772 54.354L23.5582 53.505L24.7062 51.353L28.7032 50.107V48.86L26.1762 47.84L25.9012 45.969L28.4282 45.062L30.5872 46.366L31.5982 45.119L35.5952 43.36L37.7542 43.927L38.6272 42.679L42.3482 42.736L44.9212 45.289L45.3802 46.706Z"
        fill={assignColor('Lauderdale')}
        stroke={element.config.stroke}
        data-name="Lauderdale"
        data-x="45"
        data-y="46"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Lauderdale')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M244.082 73.0509L245.92 75.9819L247.436 80.0359L244.633 85.6049L243.714 88.8079L245.184 91.9519L244.909 93.5799L246.747 95.3189L246.011 96.8339L229.242 97.0579H223.178L227.405 93.5239L228.324 91.2229L226.807 90.0429L227.175 87.8529L233.469 78.3469L234.572 76.2069L237.236 70.5139L238.707 70.4009L240.269 72.0369L241.877 71.5859L244.082 73.0509Z"
        fill={assignColor('Hamilton')}
        stroke={element.config.stroke}
        data-name="Hamilton"
        data-x="244"
        data-y="73"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Hamilton')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M162.901 56.3349L161.707 56.9569L161.018 63.4019L160.007 66.5639L157.848 69.1039L155.137 70.7399L154.907 72.5439L153.07 73.0509L151.646 71.9239L147.511 70.6269L143.606 71.7549L139.563 71.1339L140.068 70.3449L139.838 65.3219L136.898 63.2889L137.495 59.1069L139.471 57.0709L142.273 55.4859L143.192 48.1799L155.918 53.2219L162.901 56.3349Z"
        fill={assignColor('Maury')}
        stroke={element.config.stroke}
        data-name="Maury"
        data-x="162"
        data-y="56"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Maury')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M249.273 30.802L250.835 31.883L252.673 34.954L257.819 40.011L259.702 45.005L255.062 49.71L254.235 49.654L249.319 52.543L243.668 54.071L243.071 52.656L233.285 52.882L234.526 46.423L232.826 40.919L234.02 33.703L237.971 34.044L240.269 31.826L241.187 32.168L243.622 29.949L248.171 31.428L249.273 30.802Z"
        fill={assignColor('Cumberland')}
        stroke={element.config.stroke}
        data-name="Cumberland"
        data-x="249"
        data-y="30"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Cumberland')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M171.722 25.792L173.468 31.94L175.398 33.988L173.193 36.034L173.147 37.739L170.987 39.159L170.482 41.43L169.241 41.146L162.901 37.682L156.332 36.716L151.6 40.465L150.543 37.057L151.324 34.386L153.162 32.395L153.759 26.931L157.205 19.065L156.883 17.81L157.894 17.582L160.926 19.75L162.901 19.179L163.039 17.582L164.693 15.812L165.98 20.434L169.196 22.943L169.747 25.108L171.722 25.792Z"
        fill={assignColor('Davidson')}
        stroke={element.config.stroke}
        data-name="Davidson"
        data-x="171"
        data-y="25"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Davidson')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M354.757 5.86694V10.1559L350.577 13.9269L351.404 15.2979L350.485 16.3259L345.431 19.0649L344.145 18.6089L340.883 21.004L339.688 20.6619L337.621 23.1709L333.027 25.963L332.108 24.1399L328.57 21.974L325.124 23.2849L323.93 17.239L327.927 15.5839L331.051 10.5559L336.334 7.58295L339.091 8.78395L344.65 5.86694H354.757Z"
        fill={assignColor('Hawkins')}
        stroke={element.config.stroke}
        data-name="Hawkins"
        data-x="354"
        data-y="5"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Hawkins')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M273.761 27.3869L271.831 30.1759L270.637 30.4039L269.258 28.1269L264.756 26.2479L264.572 24.5389L262.735 24.2539L258.692 18.6089L260.575 17.2389L259.059 14.8979L257.267 9.81293L254.878 5.17993L267.604 5.57993L278.906 5.80893L279.412 7.52592L278.998 10.3849L275.69 10.6709L274.68 13.4129L275.644 17.8099L275.736 23.5699L273.577 24.9379L273.761 27.3869Z"
        fill={assignColor('Scott')}
        stroke={element.config.stroke}
        data-name="Scott"
        data-x="273"
        data-y="27"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Scott')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M293.562 29.1521L294.435 30.1191L303.164 30.3471L306.15 35.1251L305.92 37.5121L306.793 41.3171L300.315 46.1391L297.697 48.7471L296.043 48.5771L293.194 46.8201L287.176 48.1241L283.271 50.7871L278.814 45.5721L278.401 44.8351L280.56 42.7361L281.938 40.0681L284.052 40.4081L288.187 37.6821L286.579 35.8071L293.562 29.1521Z"
        fill={assignColor('Knox')}
        stroke={element.config.stroke}
        data-name="Knox"
        data-x="293"
        data-y="29"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Knox')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M186.011 19.9211L187.71 20.6621L189.089 19.8071L192.488 22.2591L196.531 34.4991L196.853 37.1711L198.369 41.8281L194.877 41.6011L192.029 42.2251L185.781 41.5441L175.398 33.9881L173.468 31.9401L171.722 25.7921L173.284 23.8551L179.073 20.3771L179.9 21.8601L182.427 19.3501L183.805 21.5751L186.011 19.9211Z"
        fill={assignColor('Wilson')}
        stroke={element.config.stroke}
        data-name="Wilson"
        data-x="186"
        data-y="19"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Wilson')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M239.488 31.4849L240.269 31.8259L237.971 34.0439L234.02 33.7029L232.826 40.9189L230.667 40.1239L230.759 37.9089L227.864 36.7159L221.57 35.0109L216.884 37.2839L215.322 38.8749L213.3 35.7499L209.579 34.3289L207.879 32.2249L208.844 26.0769L216.47 27.6719L220.743 26.0199L222.213 22.5439L223.775 22.3159L224.373 24.8809L225.751 26.1339L229.932 27.3299V28.2979L235.582 31.0299L239.488 31.4849Z"
        fill={assignColor('Putnam')}
        stroke={element.config.stroke}
        data-name="Putnam"
        data-x="239"
        data-y="31"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Putnam')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M306.38 64.0229L301.786 64.3619L298.983 66.5639L296.456 66.9029L295.492 68.7649L292.781 70.1189L293.424 69.1599L290.392 67.1289L291.081 65.2089L286.854 65.6039L286.027 64.3059L282.26 61.7629L283.776 60.9719L284.787 58.6539L283.546 57.8059L282.995 54.9199L283.73 53.6179L283.271 50.7869L287.176 48.1239L293.194 46.8199L296.043 48.5769L297.697 48.7469L300.315 46.1389L303.807 54.0149L306.38 57.4099V64.0229Z"
        fill={assignColor('Blount')}
        stroke={element.config.stroke}
        data-name="Blount"
        data-x="306"
        data-y="64"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Blount')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M249.319 52.543L242.612 61.481L239.993 63.967L240.085 66.225L238.201 68.483L238.707 70.401L237.236 70.514L234.572 76.207L226.44 68.483L225.016 65.604L225.475 64.193L232.78 55.543L233.285 52.882L243.071 52.656L243.668 54.071L249.319 52.543Z"
        fill={assignColor('Bledsoe')}
        stroke={element.config.stroke}
        data-name="Bledsoe"
        data-x="249"
        data-y="52"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Bledsoe')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M189.502 3.17613L188.308 11.9281L186.654 13.9271L186.47 19.2361L186.011 19.9211L183.805 21.5751L182.427 19.3501L179.9 21.8601L179.073 20.3771L173.284 23.8551L171.722 25.7921L169.747 25.1081L169.196 22.9431L165.98 20.4341L164.693 15.8121L166.807 16.3831L169.058 13.0131L169.885 9.24113L173.101 3.52013L175.627 2.43213L183.392 2.66113L189.502 3.17613Z"
        fill={assignColor('Sumner')}
        stroke={element.config.stroke}
        data-name="Sumner"
        data-x="189"
        data-y="3"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Sumner')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M119.991 68.8219L123.391 69.5549L126.653 73.6709L126.423 85.7169L125.964 88.1339L126.01 92.8509L125.045 95.8799L107.724 95.7119L107.862 79.6979L106.346 79.1919L106.852 76.4889L105.979 74.1219L106.438 72.3189L108.184 70.3449L113.651 69.9499L116.086 68.7649L119.991 68.8219Z"
        fill={assignColor('Wayne')}
        stroke={element.config.stroke}
        data-name="Wayne"
        data-x="119"
        data-y="68"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Wayne')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M75.381 35.864L74.508 51.523L64.952 51.297L63.068 49.371L60.771 49.257L56.177 47.443L55.12 45.459L54.569 41.43L52.502 39.897L53.742 38.591L53.972 28.07L62.793 28.298L62.885 26.874L68.719 32.509L71.889 33.419L75.381 35.864Z"
        fill={assignColor('Gibson')}
        stroke={element.config.stroke}
        data-name="Gibson"
        data-x="75"
        data-y="35"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Gibson')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M127.066 29.607L128.031 34.443L127.709 37.682L128.445 40.068L128.536 41.317L120.542 45.062L120.175 48.86L115.489 48.917L113.927 50.844L110.986 48.86L108.827 48.747L109.884 47.273L110.573 43.53L106.53 42.736L107.081 38.08L110.711 32.793L110.94 30.29L109.332 27.159L109.424 25.906L114.386 26.476L116.408 25.792L119.164 26.248L122.61 28.241L125.872 28.583L127.066 29.607Z"
        fill={assignColor('Humphreys')}
        stroke={element.config.stroke}
        data-name="Humphreys"
        data-x="127"
        data-y="29"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Humphreys')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M278.401 44.8351L278.814 45.5721L275.598 46.5931L275.139 49.2571L273.761 49.8241L273.026 52.8821L270.361 53.3351L266.548 57.1841L266.502 58.3711L264.021 59.8421H262.413L262.229 56.3351L258.783 55.7131L257.635 53.7321L256.992 51.5801L255.062 49.7101L259.702 45.0051L263.102 42.4521L268.202 40.5791L270.407 40.5221L275.185 36.9431L276.196 40.1811L278.401 44.8351Z"
        fill={assignColor('Roane')}
        stroke={element.config.stroke}
        data-name="Roane"
        data-x="278"
        data-y="44"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Roane')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M170.482 41.4301L170.16 44.6081L170.804 47.6141L170.39 50.8441L166.99 53.4491L167.496 56.1651L162.901 56.3351L155.918 53.2221L143.192 48.1801L143.56 41.9411L144.616 36.8871L150.543 37.0571L151.6 40.4651L156.332 36.7161L162.901 37.6821L169.241 41.1461L170.482 41.4301Z"
        fill={assignColor('Williamson')}
        stroke={element.config.stroke}
        data-name="Williamson"
        data-x="170"
        data-y="41"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Williamson')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M143.56 41.9411L143.192 48.1801L142.273 55.4861L139.471 57.0711L137.495 59.1071L131.89 61.4811L127.847 60.6901L126.699 59.3331L124.677 61.3111L122.748 61.8761L118.843 58.7111L120.175 48.8601L120.542 45.0621L128.536 41.3171L128.445 40.0681L131.385 40.2951L143.56 41.9411Z"
        fill={assignColor('Hickman')}
        stroke={element.config.stroke}
        data-name="Hickman"
        data-x="143"
        data-y="41"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Hickman')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M257.267 9.81296L259.059 14.898L260.575 17.239L258.692 18.609L256.946 20.548L255.338 20.719L254.419 22.715L250.606 23.684L250.284 25.963L248.952 27.899L249.273 30.802L248.171 31.428L243.622 29.949L241.187 32.168L240.269 31.826L239.488 31.485L241.142 28.583L239.35 22.373L239.534 16.383H240.223L240.866 11.242L242.658 8.26897L246.563 6.66797L250.698 7.01096L254.832 9.75597L257.267 9.81296Z"
        fill={assignColor('Fentress')}
        stroke={element.config.stroke}
        data-name="Fentress"
        data-x="257"
        data-y="9"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Fentress')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M68.9028 11.0129L69.7298 12.8989L69.6378 16.2689L66.8358 17.1249L63.5278 16.2119L62.8848 26.8739L62.7928 28.2979L53.9718 28.0699L38.9028 27.6719L41.5208 24.9379L42.6698 21.7459L42.5778 19.6929L44.5538 16.3829L44.1858 15.2409L45.5638 12.6139L45.1968 11.0129L47.4478 10.7849L63.2518 11.0129H68.9028Z"
        fill={assignColor('Obion')}
        stroke={element.config.stroke}
        data-name="Obion"
        data-x="68"
        data-y="11"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Obion')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M104.6 11.356L104.279 14.156L107.541 19.179H102.625L102.487 22.088L103.176 24.767L100.833 27.501L97.3408 32.85L97.3868 31.428L82.7778 31.144L83.3748 11.071L104.6 11.356Z"
        fill={assignColor('Henry')}
        stroke={element.config.stroke}
        data-name="Henry"
        data-x="104"
        data-y="11"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Henry')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M83.3748 11.071L82.7778 31.144L82.6858 33.0779L77.0348 33.021L77.0808 36.0909L75.3808 35.864L71.8888 33.4189L68.7188 32.5089L62.8848 26.8739L63.5278 16.2119L66.8358 17.1249L69.6378 16.269L69.7298 12.8989L68.9028 11.0129L83.3748 11.071Z"
        fill={assignColor('Weakley')}
        stroke={element.config.stroke}
        data-name="Weakley"
        data-x="83"
        data-y="11"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Weakley')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M295.262 15.8121L293.194 16.8971L291.724 23.4561L290.392 24.2541L288.968 23.6271L287.727 26.5901L280.468 25.7921L280.376 29.2661L278.768 29.0381L277.298 27.2731L273.761 27.3871L273.577 24.9381L275.736 23.5701L275.644 17.8101L274.68 13.4131L275.69 10.6711L278.998 10.3851L279.412 7.52608L278.906 5.80908L290.438 5.98108L291.954 8.78409L294.527 15.3551L295.262 15.8121Z"
        fill={assignColor('Campbell')}
        stroke={element.config.stroke}
        data-name="Campbell"
        data-x="295"
        data-y="15"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Campbell')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M174.617 76.2071L174.892 78.4031L177.833 79.6981L181.095 82.8491L182.014 88.5831L184.494 88.9761L184.357 96.6091L160.558 96.5531L160.972 81.3301L164.877 81.9491L167.036 79.5291L171.447 77.7281L171.585 75.7561L174.617 76.2071Z"
        fill={assignColor('Lincoln')}
        stroke={element.config.stroke}
        data-name="Lincoln"
        data-x="174"
        data-y="76"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Lincoln')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M37.7541 63.345L39.6841 65.548L39.4081 73.502H35.8701L32.1031 74.911L28.8871 74.291L13.8181 73.953L14.3691 69.781L12.9911 67.411L13.5881 65.096L15.7931 64.701L17.3101 66.677L19.5151 65.887L20.6631 63.176L23.3281 62.159L26.4521 59.615L30.7251 60.576H33.1601L37.7541 63.345ZM12.7611 74.291L11.7961 74.517L9.45314 72.77L8.90214 74.855L6.97314 74.46L7.38614 72.6L10.6941 69.16L12.0261 70.345L11.9341 73.051L12.7611 74.291Z"
        fill={assignColor('Tipton')}
        stroke={element.config.stroke}
        data-name="Tipton"
        data-x="37"
        data-y="63"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Tipton')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M390.776 4.66505L386.044 7.35405L383.517 10.785L382.874 11.6421L378.096 13.6421L374.145 16.9541L371.067 15.7551L369 17.125L365.232 16.6681L362.614 14.384L355.125 15.6411L352.276 14.7271L351.404 15.298L350.577 13.927L354.757 10.1561V5.86705L385.769 5.80905L386.32 4.55005L390.776 4.66505Z"
        fill={assignColor('Sullivan')}
        stroke={element.config.stroke}
        data-name="Sullivan"
        data-x="390"
        data-y="4"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Sullivan')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M97.3408 32.85L97.0198 48.407L98.9488 48.464L98.9028 50.107L87.6938 49.824H80.7558L79.2858 51.637L74.5078 51.523L75.3808 35.864L77.0808 36.091L77.0348 33.021L82.6858 33.078L82.7778 31.144L97.3868 31.428L97.3408 32.85Z"
        fill={assignColor('Carroll')}
        stroke={element.config.stroke}
        data-name="Carroll"
        data-x="97"
        data-y="32"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Carroll')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M341.664 43.019L340.653 48.634L338.494 51.467L336.932 52.543L333.44 51.693L329.397 53.166L328.386 55.034L325.17 55.882L323.884 54.807L323.7 51.353L324.757 49.597L322.781 47.103V45.402L323.379 44.835L324.114 39.273L325.814 36.546L326.043 34.897L325.538 32.793L328.8 32.225L328.249 29.721L329.213 29.436L328.892 30.745L330.913 32.737L333.118 33.76L341.664 43.019Z"
        fill={assignColor('Cocke')}
        stroke={element.config.stroke}
        data-name="Cocke"
        data-x="341"
        data-y="43"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Cocke')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M52.0881 96.3849H31.5981L32.1031 74.9109L35.8701 73.502H39.4081L52.7771 73.84L52.0881 96.3849Z"
        fill={assignColor('Fayette')}
        stroke={element.config.stroke}
        data-name="Fayette"
        data-x="52"
        data-y="96"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Fayette')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M52.5021 39.8971L51.2611 42.6791L48.2291 46.1961L45.3801 46.7061L44.9211 45.2891L42.3481 42.7361L38.6271 42.6791L37.7541 43.9271L35.5951 43.3601L31.5981 45.1191L28.2901 41.8841L28.2441 39.6131L29.8981 37.2841L31.0461 33.9311L33.2981 33.0211L34.0791 31.3141L31.9191 29.2661L38.8111 29.0381L38.9031 27.6721L53.9721 28.0701L53.7421 38.5911L52.5021 39.8971Z"
        fill={assignColor('Dyer')}
        stroke={element.config.stroke}
        data-name="Dyer"
        data-x="52"
        data-y="39"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Dyer')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M290.392 24.254L293.562 29.1519L286.579 35.8069L288.187 37.6819L284.052 40.4079L281.938 40.0679L280.56 42.7359L278.401 44.8349L276.196 40.1809L275.185 36.9429L273.485 34.3289L271.601 33.59L270.637 30.4039L271.831 30.1759L273.761 27.3869L277.298 27.2729L278.768 29.0379L280.376 29.2659L280.468 25.7919L287.727 26.59L288.968 23.627L290.392 24.254Z"
        fill={assignColor('Anderson')}
        stroke={element.config.stroke}
        data-name="Anderson"
        data-x="290"
        data-y="24"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Anderson')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M57.9689 57.41L57.5549 71.867L52.8229 71.811L52.7769 73.84L39.4079 73.502L39.6839 65.548L37.7539 63.345L39.5919 62.667L39.7749 57.693L41.3379 55.034L41.0159 53.109L42.7159 49.937L44.7369 50.05L45.9319 51.806L48.7339 53.505L51.6749 54.015L57.9689 57.41Z"
        fill={assignColor('Haywood')}
        stroke={element.config.stroke}
        data-name="Haywood"
        data-x="57"
        data-y="57"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Haywood')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M262.413 59.8419L259.473 63.6279L258.232 65.9999L254.097 70.5699L251.387 76.4889L248.354 79.8669L247.436 80.0359L245.92 75.9819L244.082 73.0509L245.782 71.4159L248.4 71.5859L249.365 69.5549L251.065 68.5399L250.468 66.3949L251.433 64.9269L253.959 65.4349V63.1189L255.705 56.6749L257.773 57.1839L257.635 53.7319L258.783 55.7129L262.229 56.3349L262.413 59.8419Z"
        fill={assignColor('Meigs')}
        stroke={element.config.stroke}
        data-name="Meigs"
        data-x="262"
        data-y="59"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Meigs')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M143.606 71.7549L143.192 74.5169L142.825 86.7289L143.238 89.2569L142.825 96.1609L125.045 95.8799L126.01 92.8509L125.964 88.1339L126.423 85.7169L126.653 73.6709L132.35 72.4879L132.442 70.4009L138.092 70.5139L139.563 71.1339L143.606 71.7549Z"
        fill={assignColor('Lawrence')}
        stroke={element.config.stroke}
        data-name="Lawrence"
        data-x="143"
        data-y="71"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Lawrence')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M266.686 60.859L266.823 62.837L268.064 64.249L270.177 69.217L270.729 72.375L272.107 73.728L272.061 77.559L269.993 78.234L268.156 80.092L267.191 81.161L260.254 81.105L258.462 82.793L257.313 79.867L256.073 79.754L251.387 76.489L254.097 70.57L258.232 66L259.473 63.628L262.413 59.842H264.021L266.686 60.859Z"
        fill={assignColor('McMinn')}
        stroke={element.config.stroke}
        data-name="McMinn"
        data-x="266"
        data-y="60"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'McMinn')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M154.907 72.5439L156.515 73.1639L156.332 75.1369L157.342 78.4029L160.834 79.1919L160.972 81.3299L160.558 96.5529L142.825 96.1609L143.238 89.2569L142.825 86.729L143.192 74.517L143.606 71.7549L147.511 70.627L151.646 71.924L153.07 73.0509L154.907 72.5439Z"
        fill={assignColor('Giles')}
        stroke={element.config.stroke}
        data-name="Giles"
        data-x="154"
        data-y="72"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Giles')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M52.0879 96.385L52.7769 73.84L52.8229 71.811L57.5549 71.867L68.4899 72.093L68.4439 74.517L70.4649 77.559L71.0619 82.287L70.9699 96.329L52.0879 96.385Z"
        fill={assignColor('Hardeman')}
        stroke={element.config.stroke}
        data-name="Hardeman"
        data-x="52"
        data-y="96"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Hardeman')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M257.635 53.7321L257.773 57.1841L255.705 56.675L253.959 63.119V65.4351L251.433 64.927L250.468 66.3951L251.065 68.5401L249.365 69.5551L248.4 71.5861L245.782 71.416L244.082 73.0511L241.877 71.5861L240.269 72.037L238.707 70.401L238.201 68.483L240.085 66.2251L239.993 63.9671L242.612 61.481L249.319 52.5431L254.235 49.6541L255.062 49.7101L256.992 51.58L257.635 53.7321Z"
        fill={assignColor('Rhea')}
        stroke={element.config.stroke}
        data-name="Rhea"
        data-x="257"
        data-y="53"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Rhea')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M98.903 50.107L98.352 61.876L95.963 66.395L95.917 72.488L90.45 72.6L90.404 68.427L88.658 68.878L83.926 67.354L81.032 63.119L78.873 63.176L79.286 51.637L80.756 49.824H87.694L98.903 50.107Z"
        fill={assignColor('Henderson')}
        stroke={element.config.stroke}
        data-name="Henderson"
        data-x="98"
        data-y="50"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Henderson')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M78.8732 63.1761L78.7812 64.5881L75.9322 68.6521L69.6842 72.1491L68.4902 72.0931L57.5552 71.8671L57.9692 57.4101L60.3582 58.2581L65.8712 51.9761L64.9522 51.2971L74.5082 51.5231L79.2862 51.6371L78.8732 63.1761Z"
        fill={assignColor('Madison')}
        stroke={element.config.stroke}
        data-name="Madison"
        data-x="78"
        data-y="63"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Madison')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M164.693 15.8121L163.039 17.5821L162.901 19.1791L160.926 19.7501L157.894 17.5821L156.883 17.8101L153.621 18.7231L152.656 17.1821L147.511 13.8131L147.649 9.87013L146.638 7.81213L147.786 3.00414L171.86 2.43213L173.101 3.52013L169.885 9.24113L169.058 13.0131L166.807 16.3831L164.693 15.8121Z"
        fill={assignColor('Robertson')}
        stroke={element.config.stroke}
        data-name="Robertson"
        data-x="164"
        data-y="15"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Robertson')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M147.511 13.8129L146.27 15.9259L143.743 16.2689L140.16 19.6359L139.792 21.6319L138.23 21.9169L129.226 20.6619L126.101 20.2629L125.826 18.7799L123.575 3.29089L147.786 3.00391L146.638 7.8119L147.649 9.8699L147.511 13.8129Z"
        fill={assignColor('Montgomery')}
        stroke={element.config.stroke}
        data-name="Montgomery"
        data-x="147"
        data-y="13"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Montgomery')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M227.175 87.8529L226.807 90.0429L228.324 91.2229L227.405 93.5239L223.178 97.0579L205.214 96.7779V83.8049L204.847 83.5799L207.19 82.5119L210.957 84.0869L213.071 82.6799L212.382 79.9229L219.273 78.2339L223.04 80.9929L224.189 81.1609L226.991 84.8169L227.175 87.8529Z"
        fill={assignColor('Marion')}
        stroke={element.config.stroke}
        data-name="Marion"
        data-x="227"
        data-y="87"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Marion')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M202.963 79.9231L204.847 83.5801L205.214 83.8051V96.7781L184.357 96.6091L184.494 88.9761L185.229 83.0741L187.848 77.9531L186.975 77.3901L189.41 77.1081L191.799 75.7561L197.542 76.8831L198.828 78.2341L200.804 78.5161L202.963 79.9231Z"
        fill={assignColor('Franklin')}
        stroke={element.config.stroke}
        data-name="Franklin"
        data-x="202"
        data-y="79"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Franklin')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M105.979 74.122L106.852 76.489L106.346 79.192L107.862 79.698L107.724 95.7121L97.8469 95.6561L97.9389 96.273H89.6689L90.4039 74.517L90.4499 72.6L95.9169 72.488L98.0309 74.517L101.384 74.573L104.095 72.657L105.979 74.122Z"
        fill={assignColor('Hardin')}
        stroke={element.config.stroke}
        data-name="Hardin"
        data-x="105"
        data-y="74"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Hardin')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M123.575 3.291L125.826 18.78H120.956L117.786 20.434L115.305 21.004L108 19.579L107.541 19.179L104.279 14.156L104.6 11.356L105.611 9.12701L103.865 1L114.019 1.802L113.881 3.52L123.575 3.291Z"
        fill={assignColor('Stewart')}
        stroke={element.config.stroke}
        data-name="Stewart"
        data-x="123"
        data-y="3"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Stewart')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M107.541 19.179L108 19.579L109.516 23.513L109.424 25.906L109.332 27.159L110.94 30.29L110.711 32.793L107.081 38.08L106.53 42.736L110.573 43.53L109.884 47.273L108.827 48.747L108.46 50.164L107.173 50.447L104.6 48.18L98.949 48.464L97.02 48.407L97.341 32.85L100.833 27.501L103.176 24.767L102.487 22.088L102.625 19.179H107.541Z"
        fill={assignColor('Benton')}
        stroke={element.config.stroke}
        data-name="Benton"
        data-x="107"
        data-y="19"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Benton')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M169.655 57.523L168.415 70.514L170.206 74.799L171.585 75.756L171.447 77.728L167.036 79.529L164.877 81.949L160.972 81.33L160.834 79.192L157.342 78.403L156.332 75.137L156.515 73.164L154.907 72.544L155.137 70.74L157.848 69.104L160.007 66.564L161.018 63.402L161.707 56.957L162.901 56.335L167.496 56.165L169.655 57.523Z"
        fill={assignColor('Marshall')}
        stroke={element.config.stroke}
        data-name="Marshall"
        data-x="169"
        data-y="57"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Marshall')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M315.155 5.63806L318.509 9.24107L319.887 14.6131L319.06 16.2121L316.579 16.2691L316.166 18.4371L314.006 18.1521L312.352 19.1221L309.642 18.7231L308.631 20.0351L306.15 20.1491L302.704 18.6661L299.81 14.8981L295.262 15.8121L294.527 15.3551L291.954 8.78407L290.438 5.98106L305.139 6.43907L305.829 5.46606L315.155 5.63806Z"
        fill={assignColor('Claiborne')}
        stroke={element.config.stroke}
        data-name="Claiborne"
        data-x="315"
        data-y="5"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Claiborne')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M90.4042 74.517L89.6692 96.2729L70.9702 96.3289L71.0622 82.287L74.0952 82.23L76.4842 76.996L78.6432 75.475L82.9162 74.46L90.4042 74.517Z"
        fill={assignColor('McNairy')}
        stroke={element.config.stroke}
        data-name="McNairy"
        data-x="90"
        data-y="74"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'McNairy')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M385.814 24.6529L381.312 32.8499L379.015 33.8169L376.718 33.6459L375.983 31.4849L372.583 30.8589L371.021 26.4759L369.689 25.3929L367.162 25.3359L369 18.6089V17.1249L371.067 15.7549L374.145 16.9539L378.096 13.6419L382.874 11.6419L383.517 10.7849L385.079 12.7849L381.128 17.7529L380.853 19.0649L382.69 20.8899L384.161 23.9689L385.814 24.6529Z"
        fill={assignColor('Carter')}
        stroke={element.config.stroke}
        data-name="Carter"
        data-x="385"
        data-y="24"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Carter')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M120.175 48.8601L118.843 58.7111L122.748 61.8761L123.207 63.6281L121.553 65.3791L121.278 67.7491L119.991 68.8221L116.086 68.7651L113.651 69.9501L108.184 70.3451L106.438 72.3191L105.152 71.0221L105.933 69.5551L108 68.5961L108.322 67.2421L105.519 61.4811L106.3 57.6931L105.657 55.2601L107.77 52.9391L108.46 50.1641L108.827 48.7471L110.986 48.8601L113.927 50.8441L115.489 48.9171L120.175 48.8601Z"
        fill={assignColor('Perry')}
        stroke={element.config.stroke}
        data-name="Perry"
        data-x="120"
        data-y="48"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Perry')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M199.793 59.163L201.309 61.82L201.447 63.91L204.663 66.677L204.112 71.304L204.985 74.742L203.515 77.502L202.963 79.923L200.804 78.516L198.828 78.234L197.542 76.883L191.799 75.756L189.41 77.108L186.975 77.39L187.159 72.939L188.032 67.467L187.802 60.407V57.353L188.951 56.448L192.442 58.824L195.153 59.785L199.793 59.163Z"
        fill={assignColor('Coffee')}
        stroke={element.config.stroke}
        data-name="Coffee"
        data-x="199"
        data-y="59"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Coffee')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M90.4498 72.5999L90.4038 74.5169L82.9158 74.4599L78.6428 75.4749L76.4838 76.9959L74.0948 82.2299L71.0618 82.2869L70.4648 77.5589L68.4438 74.5169L68.4898 72.0929L69.6838 72.1489L75.9318 68.6519L78.7808 64.5879L78.8728 63.1759L81.0318 63.1189L83.9258 67.3539L88.6578 68.8779L90.4038 68.4269L90.4498 72.5999Z"
        fill={assignColor('Chester')}
        stroke={element.config.stroke}
        data-name="Chester"
        data-x="90"
        data-y="72"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Chester')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M239.534 16.3829L239.35 22.3729L241.142 28.5829L239.488 31.4849L235.582 31.03L229.932 28.2979V27.3299L225.751 26.1339L224.373 24.881L223.775 22.3159L222.213 22.5439L222.167 16.782L222.81 13.8699L224.832 11.185H226.302L229.426 9.64195L231.861 9.12695L234.71 10.3849L238.155 13.5849L239.534 16.3829Z"
        fill={assignColor('Overton')}
        stroke={element.config.stroke}
        data-name="Overton"
        data-x="239"
        data-y="16"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Overton')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M323.93 17.2389L325.124 23.2849L323.516 24.6529L321.817 22.8289L317.452 26.4189L315.385 29.7779L311.204 29.5499L307.896 33.9879L306.15 35.1249L303.164 30.3469L304.956 26.3049L304.542 24.1969L306.15 20.1489L308.631 20.0349L309.642 18.7229L312.352 19.1219L314.006 18.1519L316.166 18.4369L316.579 16.2689L319.06 16.2119L320.668 15.8689L323.93 17.2389Z"
        fill={assignColor('Grainger')}
        stroke={element.config.stroke}
        data-name="Grainger"
        data-x="323"
        data-y="17"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Grainger')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M187.802 60.407L188.032 67.467L187.159 72.939L182.151 76.77L178.292 77.897L176.73 75.869L174.617 76.207L171.585 75.756L170.206 74.799L168.415 70.514L169.655 57.523L170.344 56.561L174.065 56.844L177.373 59.728L183.3 58.767L187.802 60.407Z"
        fill={assignColor('Bedford')}
        stroke={element.config.stroke}
        data-name="Bedford"
        data-x="187"
        data-y="60"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Bedford')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M234.572 76.2071L233.469 78.3471L227.175 87.8531L226.991 84.8171L224.189 81.1611L223.04 80.9931L219.273 78.2341L221.662 75.9821L222.673 73.3331L220.33 71.8671L220.284 68.7651L217.343 66.2251L219.319 66.1691L220.054 65.4911L223.913 65.2661L225.475 64.1931L225.016 65.6041L226.44 68.4831L234.572 76.2071Z"
        fill={assignColor('Sequatchie')}
        stroke={element.config.stroke}
        data-name="Sequatchie"
        data-x="234"
        data-y="76"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Sequatchie')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M147.511 13.813L152.656 17.182L153.621 18.723L156.883 17.81L157.205 19.065L153.759 26.931L153.162 32.395L151.324 34.386L150.543 37.057L144.616 36.887L145.949 29.152L144.387 27.672L145.811 24.254L145.122 22.031L139.792 21.632L140.16 19.636L143.743 16.269L146.27 15.926L147.511 13.813Z"
        fill={assignColor('Cheatham')}
        stroke={element.config.stroke}
        data-name="Cheatham"
        data-x="147"
        data-y="13"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Cheatham')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M129.226 20.6621L138.23 21.9171L139.792 21.6321L145.122 22.0311L145.811 24.2541L144.387 27.6721L145.949 29.1521L144.616 36.8871L143.56 41.9411L131.385 40.2951L128.445 40.0681L127.709 37.6821L128.031 34.4431L127.066 29.6071L128.628 26.0771L129.226 20.6621Z"
        fill={assignColor('Dickson')}
        stroke={element.config.stroke}
        data-name="Dickson"
        data-x="129"
        data-y="20"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Dickson')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M64.9518 51.297L65.8708 51.976L60.3578 58.258L57.9688 57.41L51.6748 54.015L48.7338 53.505L45.9318 51.806L44.7368 50.05L45.3798 46.706L48.2288 46.196L51.2608 42.679L52.5018 39.897L54.5688 41.43L55.1198 45.459L56.1768 47.443L60.7708 49.257L63.0678 49.371L64.9518 51.297Z"
        fill={assignColor('Crockett')}
        stroke={element.config.stroke}
        data-name="Crockett"
        data-x="64"
        data-y="51"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Crockett')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M213.622 49.3139L217.297 51.3529L217.803 54.5809L217.16 56.2779L217.665 61.3679L219.319 66.1689L217.343 66.2249L212.933 66.3949L207.42 67.2419L204.663 66.6769L201.447 63.9099L201.309 61.8199L199.793 59.1629L199.701 54.7509L202.963 49.6539L204.525 48.9739L208.89 48.0669L213.622 49.3139Z"
        fill={assignColor('Warren')}
        stroke={element.config.stroke}
        data-name="Warren"
        data-x="213"
        data-y="49"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Warren')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M277.482 84.536L276.15 96.778L255.246 96.722L256.532 91.335L258.554 86.954L258.462 82.793L260.254 81.105L267.191 81.161L268.156 80.092L277.482 84.536Z"
        fill={assignColor('Polk')}
        stroke={element.config.stroke}
        data-name="Polk"
        data-x="277"
        data-y="84"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Polk')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M232.826 40.919L234.526 46.423L233.285 52.882L232.091 50.73L228.324 51.24L223.132 49.767L220.421 51.127L217.297 51.353L213.622 49.314L215.689 46.423L214.679 44.438L214.541 41.657L215.322 38.875L216.884 37.284L221.57 35.011L227.864 36.716L230.759 37.909L230.667 40.124L232.826 40.919Z"
        fill={assignColor('White')}
        stroke={element.config.stroke}
        data-name="White"
        data-x="232"
        data-y="40"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'White')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M369 17.125V18.609L367.162 25.336L365.278 28.184L362.476 30.916L358.479 31.314L355.584 34.215L353.012 31.087L353.884 15.869L350.485 16.326L351.404 15.298L352.276 14.727L355.125 15.641L362.614 14.384L365.232 16.668L369 17.125Z"
        fill={assignColor('Washington')}
        stroke={element.config.stroke}
        data-name="Washington"
        data-x="369"
        data-y="17"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Washington')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M385.814 24.653L384.161 23.969L382.69 20.89L380.853 19.065L381.128 17.753L385.079 12.785L383.517 10.785L386.044 7.35403L390.776 4.66504L399 4.83604L396.198 9.24104L396.703 13.013L394.819 16.44L395.462 19.522L394.452 20.605L391.603 19.693L386.871 22.772L385.814 24.653Z"
        fill={assignColor('Johnson')}
        stroke={element.config.stroke}
        data-name="Johnson"
        data-x="385"
        data-y="24"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Johnson')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M217.343 66.2251L220.284 68.7651L220.33 71.8671L222.673 73.3331L221.662 75.9821L219.273 78.2341L212.382 79.9231L213.071 82.6801L210.957 84.0871L207.19 82.5121L204.847 83.5801L202.963 79.9231L203.515 77.5021L204.985 74.7421L204.112 71.3041L204.663 66.6771L207.42 67.2421L212.933 66.3951L217.343 66.2251Z"
        fill={assignColor('Grundy')}
        stroke={element.config.stroke}
        data-name="Grundy"
        data-x="217"
        data-y="66"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Grundy')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M344.65 5.86694L339.091 8.78395L336.334 7.58295L331.051 10.5559L327.927 15.5839L323.93 17.239L320.668 15.8689L319.06 16.2119L319.887 14.6129L318.509 9.24095L315.155 5.63794L324.252 5.52295L325.17 5.86694H344.65Z"
        fill={assignColor('Hancock')}
        stroke={element.config.stroke}
        data-name="Hancock"
        data-x="344"
        data-y="5"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Hancock')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M278.814 45.572L283.271 50.787L283.73 53.618L282.995 54.92L283.546 57.806L284.787 58.654L283.776 60.972L282.26 61.763L279.32 61.424L277.115 59.107L274.45 58.711L267.513 58.88L266.686 60.859L264.021 59.842L266.502 58.371L266.548 57.184L270.361 53.335L273.026 52.882L273.761 49.824L275.139 49.257L275.598 46.593L278.814 45.572Z"
        fill={assignColor('Loudon')}
        stroke={element.config.stroke}
        data-name="Loudon"
        data-x="278"
        data-y="50"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Loudon')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M108.46 50.1639L107.77 52.9389L105.657 55.2599L106.3 57.6929L105.519 61.4809L108.322 67.2419L108 68.5959L105.933 69.5549L105.152 71.0219L106.438 72.3189L105.979 74.1219L104.095 72.6569L101.384 74.5729L98.031 74.5169L95.917 72.4879L95.963 66.3949L98.352 61.8759L98.903 50.1069L98.949 48.4639L104.6 48.1799L107.173 50.4469L108.46 50.1639Z"
        fill={assignColor('Decatur')}
        stroke={element.config.stroke}
        data-name="Decatur"
        data-x="108"
        data-y="50"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Decatur')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M215.322 38.8751L214.541 41.6571L214.679 44.4381L215.689 46.4231L213.622 49.3141L208.89 48.0671L204.525 48.9741L203.285 46.9331L198.369 41.8281L196.853 37.1711L196.531 34.4991L198.553 34.7271L203.744 33.1921L205.352 34.2721L207.879 32.2251L209.579 34.3291L213.3 35.7501L215.322 38.8751Z"
        fill={assignColor('DeKalb')}
        stroke={element.config.stroke}
        data-name="DeKalb"
        data-x="215"
        data-y="38"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'DeKalb')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M231.861 9.12691L229.426 9.64191L226.302 11.1849H224.832L222.81 13.8699L222.167 16.7819L218.446 12.8989L212.887 11.1849L212.611 9.9269L207.603 11.2419L208.752 4.20689L221.662 4.6649L232.275 3.9209L232.688 7.0679L231.861 9.12691Z"
        fill={assignColor('Clay')}
        stroke={element.config.stroke}
        data-name="Clay"
        data-x="231"
        data-y="9"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Clay')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M315.385 29.778L315.798 30.8591L319.703 30.9731L323.379 31.8831L326.043 34.897L325.814 36.5461L324.114 39.2731L323.379 44.8351L322.781 45.4021L318.876 43.5871L315.293 44.097L312.812 41.7711L306.701 37.2841L305.92 37.5121L306.15 35.125L307.896 33.9881L311.204 29.55L315.385 29.778Z"
        fill={assignColor('Jefferson')}
        stroke={element.config.stroke}
        data-name="Jefferson"
        data-x="315"
        data-y="29"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Jefferson')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M207.006 16.383L206.087 23.342L207.282 25.393L208.844 26.077L207.879 32.225L205.352 34.272L203.744 33.192L198.553 34.727L196.531 34.499L192.488 22.259L196.394 18.266L199.334 16.954L199.977 15.355L207.006 16.383Z"
        fill={assignColor('Smith')}
        stroke={element.config.stroke}
        data-name="Smith"
        data-x="207"
        data-y="16"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Smith')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M254.878 5.1799L257.267 9.8129L254.832 9.75591L250.698 7.01089L246.563 6.66791L242.658 8.26891L240.866 11.2419L240.223 16.3829H239.534L238.155 13.5849L234.71 10.3849L231.861 9.12691L232.688 7.0679L232.275 3.9209L245.965 4.4929L254.878 5.1799Z"
        fill={assignColor('Pickett')}
        stroke={element.config.stroke}
        data-name="Pickett"
        data-x="254"
        data-y="5"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Pickett')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M258.462 82.793L258.554 86.954L256.532 91.335L255.246 96.722L246.011 96.834L246.747 95.319L244.909 93.58L245.184 91.952L243.714 88.808L244.633 85.605L247.436 80.036L248.354 79.867L251.387 76.489L256.073 79.754L257.313 79.867L258.462 82.793Z"
        fill={assignColor('Bradley')}
        stroke={element.config.stroke}
        data-name="Bradley"
        data-x="258"
        data-y="82"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Bradley')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M372.583 30.8589L371.48 32.1679L366.565 33.0779L364.084 34.7839L361.649 39.3289L356.871 42.2819L355.125 41.6009L354.574 39.6129L355.125 37.4549L356.273 35.2949L355.584 34.2149L358.479 31.3139L362.476 30.9159L365.278 28.1839L367.162 25.3359L369.689 25.3929L371.021 26.4759L372.583 30.8589Z"
        fill={assignColor('Unicoi')}
        stroke={element.config.stroke}
        data-name="Unicoi"
        data-x="372"
        data-y="30"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Unicoi')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M38.9028 27.672L38.8108 29.0379L31.9188 29.2659L29.0708 26.59L30.2648 25.3929L33.2518 26.0199L35.8698 25.3929L36.0998 23.8549L32.8378 21.575L33.4348 20.0919L37.0188 20.0349L37.3408 17.6389L35.8698 14.6129L38.4888 12.9559L39.8208 13.6989L41.8888 11.3559L45.1968 11.0129L45.5638 12.614L44.1858 15.241L44.5538 16.3829L42.5778 19.6929L42.6698 21.7459L41.5208 24.9379L38.9028 27.672Z"
        fill={assignColor('Lake')}
        stroke={element.config.stroke}
        data-name="Lake"
        data-x="38"
        data-y="27"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Lake')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M137.495 59.1069L136.898 63.2889L139.838 65.3219L140.068 70.3449L139.563 71.1339L138.092 70.5139L132.442 70.4009L132.35 72.4879L126.653 73.6709L123.391 69.5549L119.991 68.8219L121.278 67.7489L121.553 65.3789L123.207 63.6279L122.748 61.8759L124.677 61.3109L126.699 59.3329L127.847 60.6899L131.89 61.4809L137.495 59.1069Z"
        fill={assignColor('Lewis')}
        stroke={element.config.stroke}
        data-name="Lewis"
        data-x="137"
        data-y="59"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Lewis')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M222.167 16.782L222.213 22.544L220.743 26.02L216.47 27.672L208.844 26.077L207.282 25.393L206.087 23.342L207.006 16.383L207.603 11.242L212.611 9.927L212.887 11.185L218.446 12.899L222.167 16.782Z"
        fill={assignColor('Jackson')}
        stroke={element.config.stroke}
        data-name="Jackson"
        data-x="222"
        data-y="16"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Jackson')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M198.369 41.8281L203.285 46.9331L204.525 48.9741L202.963 49.6541L199.701 54.7511L199.793 59.1631L195.153 59.7851L192.442 58.8241L188.951 56.4481L190.697 52.8261L190.375 51.0141L191.064 46.8771L191.753 46.4801L192.029 42.2251L194.877 41.6011L198.369 41.8281Z"
        fill={assignColor('Cannon')}
        stroke={element.config.stroke}
        data-name="Cannon"
        data-x="198"
        data-y="41"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Cannon')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M207.603 11.242L207.006 16.383L199.977 15.355L191.432 14.556L190.191 12.214L188.308 11.928L189.502 3.17603L200.207 3.86302L208.752 4.20702L207.603 11.242Z"
        fill={assignColor('Macon')}
        stroke={element.config.stroke}
        data-name="Macon"
        data-x="207"
        data-y="11"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Macon')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M233.285 52.8821L232.78 55.5431L225.475 64.1931L223.913 65.2661L220.054 65.4911L219.319 66.1691L217.665 61.3681L217.16 56.2781L217.803 54.5811L217.297 51.3531L220.421 51.1271L223.132 49.7671L228.324 51.2401L232.091 50.7301L233.285 52.8821Z"
        fill={assignColor('Van Buren')}
        stroke={element.config.stroke}
        data-name="Van Buren"
        data-x="233"
        data-y="52"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Van Buren')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M306.15 20.1489L304.542 24.1969L304.956 26.3049L303.164 30.3469L294.435 30.1189L293.562 29.1519L290.392 24.254L291.724 23.4559L293.194 16.8969L295.262 15.812L299.81 14.8979L302.704 18.6659L306.15 20.1489Z"
        fill={assignColor('Union')}
        stroke={element.config.stroke}
        data-name="Union"
        data-x="306"
        data-y="20"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Union')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M129.226 20.662L128.628 26.077L127.066 29.607L125.872 28.583L122.61 28.241L119.164 26.248L116.408 25.792L114.386 26.476L109.424 25.906L109.516 23.513L108 19.579L115.305 21.004L117.786 20.434L120.956 18.78H125.826L126.101 20.263L129.226 20.662Z"
        fill={assignColor('Houston')}
        stroke={element.config.stroke}
        data-name="Houston"
        data-x="129"
        data-y="20"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Houston')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M333.027 25.9631L329.213 29.4361L328.249 29.7211L328.8 32.2251L325.538 32.7931L326.043 34.8971L323.379 31.8831L319.703 30.9731L315.798 30.8591L315.385 29.7781L317.452 26.4191L321.817 22.8291L323.516 24.6531L325.124 23.2851L328.57 21.9741L332.108 24.1401L333.027 25.9631Z"
        fill={assignColor('Hamblen')}
        stroke={element.config.stroke}
        data-name="Hamblen"
        data-x="333"
        data-y="25"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Hamblen')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M186.975 77.39L187.848 77.953L185.229 83.074L184.494 88.976L182.014 88.5829L181.095 82.849L177.833 79.698L174.892 78.403L174.617 76.207L176.73 75.869L178.292 77.897L182.151 76.77L187.159 72.939L186.975 77.39Z"
        fill={assignColor('Moore')}
        stroke={element.config.stroke}
        data-name="Moore"
        data-x="186"
        data-y="77"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Moore')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M199.977 15.355L199.334 16.954L196.394 18.266L192.488 22.259L189.089 19.807L187.71 20.662L186.011 19.921L186.47 19.236L186.654 13.927L188.308 11.928L190.191 12.214L191.432 14.556L199.977 15.355Z"
        fill={assignColor('Trousdale')}
        stroke={element.config.stroke}
        data-name="Trousdale"
        data-x="199"
        data-y="15"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Trousdale')}
        onMouseLeave={handleMouseLeave}
      />
      {present && renderTooltip()}
      {renderLabels()}
    </svg>
  );
};

MapTennessee.propTypes = ElementPropTypes;
MapTennesseePresent.propTypes = {
  element: PropTypes.object.isRequired,
};
MapTennesseeContent.propTypes = {
  element: PropTypes.object.isRequired,
  present: PropTypes.bool,
};

export default MapTennessee;
