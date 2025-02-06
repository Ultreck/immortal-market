import { ElementPropTypes } from '@/lib/prop-types.js';
import useMapElement from '@/lib/design/use-map-element.jsx';
import PropTypes from 'prop-types';

const MapChad = ({ element }) => {
  return <MapChadContent element={element} />;
};

export const MapChadPresent = ({ element }) => {
  return <MapChadContent element={element} />;
};

export const MapChadPreview = () => {
  return <MapChadContent element={{ config: { data: [], fill: '#f9fafb', stroke: '#f9fafb' } }} present={false} />;
};

const MapChadContent = ({ element, present = true }) => {
  const { el, assignColor, renderLabels, handleMouseMove, handleMouseLeave, renderTooltip } = useMapElement(element);

  return (
    <svg
      style={{ width: element.width, height: element.height }}
      ref={el}
      width="100%"
      viewBox="0 0 279 442"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M188.889 220.264L179.637 219.936L174.155 216.87L161.398 214.103L157.26 207.578L153.888 207.139L153.335 214.484L147.376 223.821L141.419 227.485L133.406 228.714L126.58 227.238L121.65 224.149L116.142 216.76L85.6993 203.161L53.1797 186.627L54.7686 180.229L100.304 97.4274L104.205 89.5077L104.653 85.1764L115.46 81.7988L126.801 76.1381L139.956 71.6011L142.713 67.6961L140.92 50.6244L144.479 44.2637L148.535 42.485L199.579 69.5457L175.475 122.023L178.48 133.979L186.81 156.498L183.172 190.321L191.438 211.708L191.814 216.626L188.889 220.264Z"
        stroke={element.config.stroke}
        fill={assignColor('Borkou')}
        data-name="Borkou"
        data-x="188"
        data-y="220"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Borkou')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M54.7692 180.229L56.8854 134.346L61.0979 100.381L67.4766 89.1312L56.7885 77.1388L57.7243 71.8157L48.8419 58.554L46.464 56.8832L46.2932 42.7406L41.127 13.8642L67.5445 1L93.4728 13.9981L148.536 42.485L144.479 44.2636L140.921 50.6243L142.714 67.6961L139.956 71.601L126.801 76.1381L115.46 81.7987L104.653 85.1763L104.206 89.5077L100.305 97.4274L54.7692 180.229Z"
        stroke={element.config.stroke}
        fill={assignColor('Tibesti')}
        data-name="Tibesti"
        data-x="54"
        data-y="180"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Tibesti')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M227.044 211.623L222.682 212.607L203.937 213.977L202.669 217.571L195.479 221.164L188.889 220.264L191.814 216.626L191.438 211.707L183.173 190.321L186.81 156.498L178.481 133.999L175.476 122.023L199.579 69.5657L278.454 112.712V177.912L269.996 178.753L240.866 179.131L227.052 200.406L227.044 211.623Z"
        stroke={element.config.stroke}
        fill={assignColor('Ennedi-Oest')}
        data-name="Ennedi-Oest"
        data-x="227"
        data-y="211"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Ennedi-Ouest')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M174.156 216.87L174.656 262.15L174.498 265.572L180.086 269.021L180.06 274.881L182.616 280.086L182.458 289.888L181.747 291.458L174.208 293.242L167.145 290.646L151.514 299.945L132.827 299.811L122.811 305.374L117.197 306.454L108.895 313.117L109.711 315.113L104.783 313.522L101.672 305.347L97.9029 302.053L93.8701 293.188L97.7111 289.65L100.302 285.801L101.093 273.552L109.395 270.893L121.651 224.149L126.581 227.238L133.407 228.714L141.419 227.485L147.376 223.821L153.336 214.484L153.889 207.139L157.261 207.578L161.398 214.103L174.156 216.87Z"
        stroke={element.config.stroke}
        fill={assignColor('Batha')}
        data-name="Batha"
        data-x="174"
        data-y="216"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Batha')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M53.1799 186.627L85.6995 203.161L81.3772 210.513L72.3889 241.68L70.2806 251.598L62.4259 260.437L57.5502 263.508L57.1018 271.192L64.5341 271.246L65.8524 279.3L65.8574 288.914L61.8486 288.727L56.2719 285.793L55.8105 281.684L51.593 271.382L35.7786 274.285L32.2731 267.745L27.766 261.851L24.2336 260.981L14.8508 251.706L5.49902 250.35L9.86934 244.741L9.33403 240.885L14.0918 232.881L25.0196 217.154L53.1799 186.627Z"
        stroke={element.config.stroke}
        fill={assignColor('Kanem')}
        data-name="Kanem"
        data-x="53"
        data-y="186"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Kanem')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M170.545 317.404L181.009 317.539L201.99 328.177L207.769 328.723L216.539 326.643L224.393 326.454L230.034 328.338L237.994 345.511L220.163 350.893L218.291 358.582L217.975 364.788L213.529 366.109L208.357 373.158L206.074 372.443L198.893 381.138L197.147 384.88L186.955 389.911L185.039 394.28L181.019 395.668L175.698 394.731L172.638 396.368L164.614 373.204L162.822 370.393L165.195 356.435L164.957 345.353L148.141 338.799L144.082 336.487V326.777L152.331 328.23L155.653 322.388L154.915 318.967L158.921 315.167L170.545 317.404Z"
        stroke={element.config.stroke}
        fill={assignColor('Salamat')}
        data-name="Salamat"
        data-x="170"
        data-y="317"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Salamat')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M174.208 293.242L179.084 296.892L173.048 308.1L170.544 317.404L158.92 315.167L154.914 318.967L155.652 322.388L152.331 328.23L144.081 326.777V336.487L148.14 338.799L164.956 345.353L165.194 356.435L162.057 359.384L157.998 359.625L154.149 366.189L150.301 368.733L148.72 372.508L137.228 371.517L133.38 367.207L124.63 362.921L119.306 361.554L116.722 358.875L108.261 360.107L102.569 356.81L103.438 347.125L101.988 339.201L102.779 332.696L108.314 327.315L111.872 327.1L108.314 320.88L109.711 315.113L108.894 313.117L117.196 306.454L122.811 305.374L132.827 299.811L151.514 299.945L167.144 290.646L174.208 293.242Z"
        stroke={element.config.stroke}
        fill={assignColor('Guéra')}
        data-name="Guéra"
        data-x="174"
        data-y="293"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Guera')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M121.65 224.149L109.394 270.893L101.092 273.552L100.301 285.801L97.7107 289.65L89.5373 289.355L79.012 291.625L71.9962 292.193L66.9218 291.184L65.8572 288.914L65.8522 279.3L64.5339 271.246L57.1016 271.192L57.55 263.508L62.4256 260.437L70.2804 251.598L72.3886 241.68L81.3769 210.513L85.6993 203.161L116.142 216.76L121.65 224.149Z"
        stroke={element.config.stroke}
        fill={assignColor('Bahr el Gazel')}
        data-name="Bahr el Gazel"
        data-x="121"
        data-y="224"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Bahr el Gazel')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M165.194 356.435L162.822 370.393L164.614 373.204L172.638 396.368L164.378 398.358L149.081 398.366L143.739 401.552L144.285 404.06L149.885 407.679L141.509 418.62L137.877 420.082L136.599 424.164L125.948 425.046L124.997 416.514L121.596 407.967L120.197 400.005L125.576 394.211L120.603 393.602L115.708 391.027L108.552 382.966L109.527 380.934L103.992 376.842L108.262 360.107L116.723 358.875L119.306 361.554L124.63 362.921L133.381 367.207L137.229 371.517L148.721 372.508L150.302 368.733L154.15 366.189L157.999 359.625L162.058 359.384L165.194 356.435Z"
        stroke={element.config.stroke}
        fill={assignColor('Moyen-Chari')}
        data-name="Moyen-Chari"
        data-x="165"
        data-y="356"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Ouled Abbes')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M42.5258 312.416L48.3242 310.96L51.0657 308.694L54.5711 312.497L59.263 309.368H66.9589L69.964 306.832L85.1463 312.308L86.2528 318.617L88.414 321.068L90.2067 327.207L94.4501 327.423L102.779 332.696L101.988 339.201L103.438 347.125L102.569 356.81L108.261 360.107L103.992 376.842L98.2722 374.328L92.4208 373.658L85.0404 370.286L82.9851 365.092L80.3225 366.832L72.7025 366.586L70.9917 363.778L71.519 353.243L60.8709 350.077L55.5728 346.991L51.6988 339.686L47.3225 339.766L42.1173 342.904L41.9355 337.783L44.9906 330.937L42.9632 326.273L43.5245 318.765L45.452 316.623L42.5258 312.416Z"
        stroke={element.config.stroke}
        fill={assignColor('Chari-Baguirmi')}
        data-name="Chari-Baguirmi"
        data-x="42"
        data-y="312"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Chari-Baguirmi')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M170.544 317.404L173.048 308.1L179.084 296.893L174.208 293.242L181.746 291.458L182.457 289.888L193.133 291.024L193.158 294.514L197.139 295.459L197.587 299.757L201.672 301.351L208.815 301.026L212.136 297.487L217.329 295.244L221.499 296.847L224.184 301.337L229.329 300.516L230.953 298.238L237.819 301.645L235.536 306.792L238.551 313.568L238.696 317.93L242.579 317.194L240.658 328.696L246.533 334.546L250.653 334.17L251.728 340.018L248.966 347.235L237.993 345.511L230.033 328.338L224.393 326.454L216.538 326.643L207.768 328.723L201.989 328.177L181.008 317.539L170.544 317.404Z"
        stroke={element.config.stroke}
        fill={assignColor('Sila')}
        data-name="Sila"
        data-x="170"
        data-y="317"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Sila')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M188.889 220.264L195.478 221.164L202.669 217.571L203.936 213.976L222.682 212.607L227.044 211.623L234.277 212.843L236.159 214.837L250.146 222.385L252.195 228.725L250.516 234.218L243.52 241.004L244.732 245.57L236.575 248.169L237.025 256.435L239.875 261.155L231.261 266.659L217.065 261.878L210.897 260.954L206.048 263.318L199.511 260.22L195.32 255.679L188.994 253.121L182.431 253.883L174.656 262.15L174.155 216.87L179.637 219.936L188.889 220.264Z"
        stroke={element.config.stroke}
        fill={assignColor('Wadi Fira')}
        data-name="Wadi Fira"
        data-x="188"
        data-y="220"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Wadi Fira')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M56.272 285.793L61.8487 288.727L65.8575 288.914L66.9221 291.184L71.9965 292.193L79.0123 291.625L89.5376 289.355L97.711 289.65L93.87 293.188L97.9027 302.053L101.672 305.347L104.783 313.522L109.711 315.113L108.314 320.88L111.873 327.1L108.314 327.315L102.779 332.696L94.4502 327.423L90.2067 327.207L88.4141 321.068L86.2529 318.617L85.1463 312.308L69.9641 306.832L66.959 309.368H59.2631L54.5712 312.497L51.0657 308.694L48.3243 310.96L42.5259 312.416L38.7598 312.408L38.8756 308.257L36.7933 301.526L29.4189 297.276L29.4369 292.84L40.0012 292.734L42.7106 286.559L47.6891 290.05L51.1347 288.662L47.9398 283.053L50.6972 281.665L56.272 285.793Z"
        stroke={element.config.stroke}
        fill={assignColor('Hadjer-Lamis')}
        data-name="Hadjer-Lamis"
        data-x="56"
        data-y="285"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Hadjer-Lamis')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M174.656 262.15L182.432 253.884L188.994 253.122L195.32 255.679L199.511 260.22L206.048 263.318L210.898 260.954L217.066 261.878L231.261 266.659L228.13 270.742L231.586 276.614L233.228 282.018L229.288 286.943L223.779 290.215L221.499 296.847L217.329 295.244L212.136 297.487L208.815 301.026L201.673 301.351L197.587 299.757L197.14 295.459L193.159 294.514L193.133 291.024L182.458 289.888L182.616 280.086L180.06 274.881L180.086 269.021L174.498 265.572L174.656 262.15Z"
        stroke={element.config.stroke}
        fill={assignColor('Ouaddaï')}
        data-name="Ouaddaï"
        data-x="174"
        data-y="262"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Ouaddaï')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M78.8463 395.762L83.3005 394.934L87.9395 397.016L97.481 396.829L97.6918 405.26L95.1621 408.753L101.725 417.68L96.7959 422.074L101.432 430.79L98.1771 434.429L91.3371 435.765L89.07 437.913L85.1991 432.528L81.2662 429.667L77.9445 434.312L69.3337 436.684L62.5735 440.427L60.4223 438.354L55.6386 438.564L56.9778 431.748L54.6978 430.985L51.5379 424.473L47.7129 413.039L48.414 412.725L55.1772 418.292L62.3998 416.667L63.9547 413.977L70.676 409.366L76.8429 408.114L80.5861 405.687L83.2486 401.606L78.8463 395.762Z"
        stroke={element.config.stroke}
        fill={assignColor('Logone Oriental')}
        data-name="Logone Oriental"
        data-x="78"
        data-y="395"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Logone Oriental')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M56.272 285.793L50.6973 281.665L47.9398 283.053L51.1347 288.662L47.6892 290.05L42.7107 286.559L40.0012 292.734L29.437 292.84L26.9991 289.469L17.0621 289.336L5.33036 272.483L1 252.338L5.49914 250.35L14.851 251.706L24.2337 260.981L27.7661 261.851L32.2733 267.745L35.7787 274.285L51.5931 271.382L55.8106 281.684L56.272 285.793Z"
        stroke={element.config.stroke}
        fill={assignColor('Lac')}
        data-name="Lac"
        data-x="56"
        data-y="285"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Lac')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M227.045 211.623L227.053 200.406L240.867 179.131L269.997 178.753L278.455 177.911L278.497 217.904L269.544 216.458L261.388 218.414L255.561 217.749L250.147 222.385L236.159 214.837L234.278 212.843L227.045 211.623Z"
        stroke={element.config.stroke}
        fill={assignColor('Ennedi-Est')}
        data-name="Ennedi-Est"
        data-x="227"
        data-y="211"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Ennedi-Est')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M42.1179 342.904L47.3231 339.766L51.6994 339.686L55.5733 346.991L60.8714 350.077L71.5196 353.243L70.9923 363.778L72.703 366.586L74.5246 371.357L71.2299 377.26L65.3386 381.394L60.3971 380.854L58.7632 385.452L52.3316 393.305L44.8673 389.369L42.1309 381.242L34.6196 381.02L34.0684 373.496L40.8525 372.157L47.4579 372.283L52.7001 373.972L59.2555 372.585L54.0503 369.002L49.4114 363.955L43.0646 350.604L42.1179 342.904Z"
        stroke={element.config.stroke}
        fill={assignColor('Mayo-Kébbi-Est')}
        data-name="Mayo-Kébbi-Est"
        data-x="42"
        data-y="342"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Mayo-Kébbi-Est')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M72.7025 366.586L80.3226 366.832L82.9851 365.092L85.0404 370.286L92.4208 373.659L98.2722 374.328L103.992 376.842L109.527 380.934L108.552 382.966L106.706 381.79L99.4576 383.528L99.959 389.005L95.9263 391.944L97.4812 396.829L87.9397 397.016L83.3007 394.934L78.8465 395.762L77.1857 392.371L71.7298 396.802L67.1707 395.468L62.8214 397.87L52.8584 397.283L52.3311 393.305L58.7627 385.452L60.3965 380.854L65.3381 381.394L71.2294 377.26L74.5241 371.356L72.7025 366.586Z"
        stroke={element.config.stroke}
        fill={assignColor('Tandjilé')}
        data-name="Tandjilé"
        data-x="72"
        data-y="366"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Tandjilé')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M34.0677 373.496L34.619 381.02L42.1302 381.242L44.8667 389.369L52.3309 393.305L52.8583 397.283L50.6441 405.34L48.1664 409.286L48.414 412.725L47.713 413.039L46.7063 409.292L40.9288 407.516L38.5429 404.007L34.7399 403.708L24.9137 393.655L15.459 381.626L20.3985 372.465L28.6618 372.069L34.0677 373.496Z"
        stroke={element.config.stroke}
        fill={assignColor('Mayo-Kébbi-Ouest')}
        data-name="Mayo-Kébbi-Ouest"
        data-x="34"
        data-y="373"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Mayo-Kébbi-Ouest')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M108.552 382.966L115.707 391.027L120.602 393.602L125.575 394.211L120.196 400.005L121.596 407.967L124.996 416.514L125.947 425.046L118.24 426.663L111.654 426.019L107.526 429.055L101.432 430.79L96.796 422.074L101.725 417.68L95.1621 408.753L97.6918 405.26L97.4811 396.829L95.9261 391.944L99.9589 389.005L99.4575 383.528L106.706 381.79L108.552 382.966Z"
        stroke={element.config.stroke}
        fill={assignColor('Mandoul')}
        data-name="Mandoul"
        data-x="108"
        data-y="382"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Mandoul')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M78.847 395.762L83.2493 401.606L80.5868 405.687L76.8436 408.114L70.6767 409.366L63.9554 413.977L62.4004 416.667L55.1779 418.292L48.4147 412.725L48.167 409.286L50.6448 405.34L52.8589 397.283L62.8219 397.87L67.1712 395.468L71.7303 396.802L77.1862 392.371L78.847 395.762Z"
        stroke={element.config.stroke}
        fill={assignColor('Logone Occidental')}
        data-name="Logone Occidental"
        data-x="78"
        data-y="395"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Logone Occidental')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M38.7598 312.408L42.5259 312.416L45.4521 316.623L43.5246 318.765L38.7598 312.408Z"
        stroke={element.config.stroke}
        fill={assignColor('Ville de Ndjamena')}
        data-name="Ville de Ndjamena"
        data-x="38"
        data-y="312"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Ville de Ndjamena')}
        onMouseLeave={handleMouseLeave}
      />
      {present && renderTooltip()}
      {renderLabels()}
    </svg>
  );
};

MapChad.propTypes = ElementPropTypes;
MapChadPresent.propTypes = {
  element: PropTypes.object.isRequired,
};
MapChadContent.propTypes = {
  element: PropTypes.object.isRequired,
  present: PropTypes.bool,
};

export default MapChad;
