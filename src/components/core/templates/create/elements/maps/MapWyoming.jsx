import { ElementPropTypes } from '@/lib/prop-types.js';
import useMapElement from '@/lib/design/use-map-element.jsx';
import PropTypes from 'prop-types';

const MapWyoming = ({ element }) => {
  return <MapWyomingContent element={element} />;
};

export const MapWyomingPresent = ({ element }) => {
  return <MapWyomingContent element={element} />;
};

export const MapWyomingPreview = () => {
  return <MapWyomingContent element={{ config: { data: [], fill: '#f9fafb', stroke: '#f9fafb' } }} />;
};

const MapWyomingContent = ({ element }) => {
  const { el, assignColor, renderLabels } = useMapElement(element);

  return (
    <svg ref={el} width="100%" viewBox="0 0 400 314" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M100.173 95.9683L104.663 99.8263L108.187 104.86L108.016 110.987L121.599 111.301L128.305 112.557L128.362 114.676H135.012L135.125 117.97H141.775V120.556H148.595V122.749L155.358 123.767L165.758 122.749L197.585 122.828V120.634L201.108 120.713L202.415 122.828L202.245 149.535L202.927 156.306L203.097 176.636H200.597L200.71 203.508L201.847 203.431V216.811L160.871 216.657L115.234 216.504L115.348 203.508H113.87L113.699 183.214L110.63 183.291L105.345 174.778L102.503 173.538L95.911 164.541L88.181 158.638L85.397 152.105L82.328 149.146L79.316 142.288L79.429 135.888L77.781 130.418L74.996 131.043L75.11 123.454L57.89 123.219L57.833 80.8223L61.243 85.0873L68.233 84.9293L72.041 96.6773L79.77 93.9993L80.85 87.7703L86.533 84.5343L94.49 88.5593L96.65 93.1323L100.173 95.9683Z"
        fill={assignColor('Fremont')}
        stroke={element.config.stroke}
        data-name="Fremont"
        data-x="100"
        data-y="99"
      />
      <path
        d="M115.234 216.504L160.871 216.657L201.847 216.811L201.79 230.001H203.041V262.897L178.489 262.744L178.546 282.407H179.341L179.455 312.395L153.141 312.621H115.007L58.1736 312.696L58.2866 268.978L58.4007 236.736L57.8896 236.2L57.9456 215.966L75.3936 216.35L115.234 216.504Z"
        fill={assignColor('Sweetwater')}
        stroke={element.config.stroke}
        data-name="Sweetwater"
        data-x="115"
        data-y="216"
      />
      <path
        d="M139.331 1.53104L139.501 12.77L140.922 12.85L141.093 39.792L142.002 39.871V68.004L143.309 67.925L143.252 75.05L129.442 74.892L129.669 81.928H122.622L122.679 88.717L112.676 88.796L113.017 95.653L100.173 95.968L96.65 93.132L94.49 88.559L86.533 84.534L80.85 87.77L79.77 93.999L72.041 96.677L68.233 84.929L61.243 85.087L57.833 80.822L57.946 70.776H54.309L54.764 64.675L52.377 58.089L49.308 56.739L48.001 51.654L44.136 46.96L44.477 38.277L39.646 35.006L23.051 34.926V28.299H1L1.114 1.61204L16.856 1.45104L20.778 2.17404L49.535 2.09404L53.457 1.45104L107.789 1.29004L139.331 1.53104Z"
        fill={assignColor('Park')}
        stroke={element.config.stroke}
        data-name="Park"
        data-x="139"
        data-y="1"
      />
      <path
        d="M284.027 203.585V254.446L284.255 282.786L269.876 282.862L270.046 312.545L231.343 312.32L205.428 312.395H179.455L179.341 282.407H178.546L178.489 262.744L203.041 262.897V230.001H201.79L201.847 216.811V203.431L263.738 203.739L284.027 203.585Z"
        fill={assignColor('Carbon')}
        stroke={element.config.stroke}
        data-name="Carbon"
        data-x="284"
        data-y="203"
      />
      <path
        d="M115.234 216.504L75.3941 216.35L57.9461 215.966L30.0981 215.429L30.2121 202.353L27.3701 202.276L27.5981 149.847L28.1661 141.352L27.8821 136.747H41.2941V129.949L57.8901 130.027V123.219L75.1101 123.454L74.9961 131.043L77.7811 130.418L79.4291 135.888L79.3161 142.288L82.3281 149.146L85.3971 152.105L88.1811 158.638L95.9111 164.541L102.503 173.538L105.345 174.778L110.63 183.291L113.699 183.214L113.87 203.508H115.348L115.234 216.504Z"
        fill={assignColor('Sublette')}
        stroke={element.config.stroke}
        data-name="Sublette"
        data-x="115"
        data-y="216"
      />
      <path
        d="M28.1661 141.352L27.5981 149.847L27.3701 202.276L30.2121 202.353L30.0981 215.429L57.9461 215.966L57.8901 236.2L58.4011 236.736L58.2871 268.978L1.51108 268.902V235.971L1.45508 204.047L1.56808 176.017L1.62508 135.185L8.21808 135.107L14.4691 136.669L14.7541 141.274L28.1661 141.352Z"
        fill={assignColor('Lincoln')}
        stroke={element.config.stroke}
        data-name="Lincoln"
        data-x="28"
        data-y="141"
      />
      <path
        d="M225.319 120.634L254.474 121.104H284.482L283.914 176.791L284.027 203.585L263.738 203.739L201.847 203.431L200.71 203.508L200.597 176.636H203.097L202.927 156.306L202.245 149.535L202.415 122.828L201.108 120.713L225.319 120.634Z"
        fill={assignColor('Natrona')}
        stroke={element.config.stroke}
        data-name="Natrona"
        data-x="225"
        data-y="120"
      />
      <path
        d="M329.096 203.585L329.266 225.481L329.891 242.239L329.38 262.897L329.437 312.621L286.926 312.771L270.046 312.545L269.876 282.862L284.255 282.786L284.027 254.446V203.585L313.58 203.739L310.284 207.818L311.421 214.43L323.526 214.353L324.435 207.818L326.652 203.662L329.096 203.585Z"
        fill={assignColor('Albany')}
        stroke={element.config.stroke}
        data-name="Albany"
        data-x="329"
        data-y="203"
      />
      <path
        d="M287.665 36.4421L287.153 39.9511V67.8451H287.721L287.835 95.3381H287.153V121.026L284.482 121.104H254.474L225.319 120.634L225.205 95.7321L224.41 95.6531L224.239 68.1621H223.159L223.273 55.6271L220.943 52.9261L220.09 46.0051L214.407 44.9701L214.748 41.5451L210.429 36.8411L223.785 37.0011H259.362L287.665 36.4421Z"
        fill={assignColor('Johnson')}
        stroke={element.config.stroke}
        data-name="Johnson"
        data-x="287"
        data-y="36"
      />
      <path
        d="M57.833 80.8221L57.89 123.219V130.027L41.294 129.949V136.747H27.882L28.166 141.352L14.754 141.274L14.469 136.669L8.218 135.107L1.625 135.185L1.568 102.815L1.341 43.4571L1 28.2991H23.051V34.9261L39.646 35.0061L44.477 38.2771L44.136 46.9601L48.001 51.6541L49.308 56.7391L52.377 58.0891L54.764 64.6751L54.309 70.7761H57.946L57.833 80.8221Z"
        fill={assignColor('Teton')}
        stroke={element.config.stroke}
        data-name="Teton"
        data-x="57"
        data-y="80"
      />
      <path
        d="M350.863 120.556L350.692 150.47L351.26 189.782L329.153 190.323L329.096 203.585L326.652 203.662L324.435 207.818L323.526 214.353L311.421 214.43L310.284 207.818L313.58 203.739L284.027 203.585L283.914 176.791L284.482 121.104L287.153 121.026L340.462 120.791L350.863 120.556Z"
        fill={assignColor('Converse')}
        stroke={element.config.stroke}
        data-name="Converse"
        data-x="350"
        data-y="120"
      />
      <path
        d="M340.178 1.61192L340.235 42.9789L340.803 67.1319L340.292 94.9439L340.462 120.791L287.153 121.026V95.3379H287.835L287.721 67.8449H287.153V39.9509L287.665 36.4419L287.835 11.9679L287.324 1.85293L292.836 1.45093L340.178 1.61192Z"
        fill={assignColor('Campbell')}
        stroke={element.config.stroke}
        data-name="Campbell"
        data-x="340"
        data-y="1"
      />
      <path
        d="M179.739 1.53101L181.387 2.737L182.353 11.728L188.435 19.82L189.969 24.381L197.073 25.821L203.041 30.695L203.438 32.692L209.519 34.288L210.429 36.841L214.748 41.545L214.407 44.97L220.09 46.005L220.943 52.926L223.273 55.627L223.159 68.162L143.309 67.925L142.002 68.004V39.871L141.093 39.792L140.922 12.85L139.501 12.77L139.331 1.53101H179.739Z"
        fill={assignColor('Big Horn')}
        stroke={element.config.stroke}
        data-name="Big Horn"
        data-x="179"
        data-y="1"
      />
      <path
        d="M197.585 120.634V122.828L165.758 122.749L155.358 123.767L148.595 122.749V120.556H141.775V117.97H135.125L135.012 114.676H128.362L128.305 112.557L121.599 111.301L108.016 110.987L108.187 104.86L104.663 99.8261L100.173 95.9681L113.017 95.6531L112.676 88.7961L122.679 88.7171L122.622 81.9281H129.669L129.442 74.8921L143.252 75.0501L146.606 74.8921V81.8491H150.072L150.129 88.7961H157.006L156.949 93.4471L163.712 93.3681L163.655 95.5741L177.182 95.7321L177.238 102.579H190.822L190.878 109.181H197.528L197.585 120.634Z"
        fill={assignColor('Hot Springs')}
        stroke={element.config.stroke}
        data-name="Hot Springs"
        data-x="197"
        data-y="120"
      />
      <path
        d="M225.319 120.634L201.108 120.713L197.585 120.634L197.528 109.181H190.878L190.822 102.579H177.238L177.182 95.7318L163.655 95.5738L163.712 93.3678L156.949 93.4468L157.006 88.7958H150.129L150.072 81.8488H146.606V74.8918L143.252 75.0498L143.309 67.9248L223.159 68.1618H224.239L224.41 95.6528L225.205 95.7318L225.319 120.634Z"
        fill={assignColor('Washakie')}
        stroke={element.config.stroke}
        data-name="Washakie"
        data-x="225"
        data-y="120"
      />
      <path
        d="M398.83 66.9741L340.803 67.1321L340.235 42.9791L340.178 1.61206L362.172 1.69206H398.716L398.83 66.9741Z"
        fill={assignColor('Crook')}
        stroke={element.config.stroke}
        data-name="Crook"
        data-x="398"
        data-y="66"
      />
      <path
        d="M287.324 1.853L287.835 11.968L287.665 36.442L259.362 37.001H223.785L210.429 36.841L209.519 34.288L203.438 32.692L203.041 30.695L197.073 25.821L189.969 24.381L188.435 19.82L182.353 11.728L181.387 2.737L179.739 1.53101H218.329L231.4 1.853H287.324Z"
        fill={assignColor('Sheridan')}
        stroke={element.config.stroke}
        data-name="Sheridan"
        data-x="287"
        data-y="1"
      />
      <path
        d="M329.38 262.897L364.957 263.353L365.071 269.814L399 269.89L398.943 312.47L354.784 312.621H329.437L329.38 262.897Z"
        fill={assignColor('Laramie')}
        stroke={element.config.stroke}
        data-name="Laramie"
        data-x="329"
        data-y="262"
      />
      <path
        d="M398.886 120.321L398.943 164.852L399 189.628L364.9 189.859L351.26 189.782L350.692 150.47L350.863 120.556L398.886 120.321Z"
        fill={assignColor('Niobrara')}
        stroke={element.config.stroke}
        data-name="Niobrara"
        data-x="398"
        data-y="120"
      />
      <path
        d="M398.83 66.9741L398.886 120.321L350.863 120.556L340.462 120.791L340.292 94.9441L340.803 67.1321L398.83 66.9741Z"
        fill={assignColor('Weston')}
        stroke={element.config.stroke}
        data-name="Weston"
        data-x="398"
        data-y="66"
      />
      <path
        d="M399 189.628V230.001V269.89L365.071 269.814L364.957 263.353L364.787 220.189L364.9 189.859L399 189.628Z"
        fill={assignColor('Goshen')}
        stroke={element.config.stroke}
        data-name="Goshen"
        data-x="399"
        data-y="628V230"
      />
      <path
        d="M364.9 189.859L364.787 220.189L364.957 263.353L329.38 262.897L329.891 242.239L329.266 225.481L329.096 203.585L329.153 190.323L351.26 189.782L364.9 189.859Z"
        fill={assignColor('Platte')}
        stroke={element.config.stroke}
        data-name="Platte"
        data-x="364"
        data-y="189"
      />
      <path
        d="M58.2867 268.978L58.1737 312.696L45.2727 312.922L1.51074 312.771V268.902L58.2867 268.978Z"
        fill={assignColor('Uinta')}
        stroke={element.config.stroke}
        data-name="Uinta"
        data-x="58"
        data-y="268"
      />

      {renderLabels()}
    </svg>
  );
};

MapWyoming.propTypes = ElementPropTypes;
MapWyomingPresent.propTypes = {
  element: PropTypes.object.isRequired,
};
MapWyomingContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default MapWyoming;
