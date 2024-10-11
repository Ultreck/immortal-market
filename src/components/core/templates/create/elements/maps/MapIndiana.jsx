import ElementWrapper from '../../ElementWrapper.jsx';
import { ElementPropTypes } from '@/lib/prop-types.js';
import useMapElement from '@/lib/design/use-map-element.jsx';
import PropTypes from 'prop-types';

const MapIndiana = ({ element, active, highlighted, width, onClick, onChange }) => {
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
      <MapIndianaContent element={element} />
    </ElementWrapper>
  );
};

export const MapIndianaPresent = ({ element }) => {
  return <MapIndianaContent element={element} />;
};

export const MapIndianaPreview = () => {
  return <MapIndianaContent element={{ config: { data: [], fill: '#f9fafb', stroke: '#f9fafb' } }} />;
};

const MapIndianaContent = ({ element }) => {
  const { el, assignColor, renderLabels } = useMapElement(element);

  return (
    <svg ref={el} width="100%" viewBox="0 0 281 441" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M84.9118 317.893L82.4583 320.284L81.3587 324.738L78.4835 324.629L74.4229 328.429L71.8009 334.398L72.3083 337.109L69.6016 341.12L72.5616 346.428L72.731 357.144L68.7552 360.712L65.1183 358.982L53.9524 358.549L50.9077 362.549L44.1404 363.738L41.5184 367.735L37.711 366.547L35.5965 369.354L30.3525 371.298L30.7752 364.278L33.2288 364.062L38.388 360.17L36.6114 357.251L39.0649 353.465L40.8415 346.753L43.5482 343.504L47.7773 342.203L51.161 335.699L50.823 330.384L48.7084 327.344L47.1851 319.631L49.3844 318.11L63.0875 318.219L72.731 317.567L84.9118 317.893Z"
        fill={assignColor('Knox')}
        stroke={element.config.stroke}
        data-name="Knox"
        data-x="84"
        data-y="317"
      />
      <path
        d="M66.3874 389.414V393.829L53.7829 393.936L53.6144 398.133L34.9205 397.703V394.152L25.5312 394.259L25.615 391.244L10.1353 390.921L13.3504 387.69L15.0423 383.596L19.0171 382.518L22.655 384.35L23.1624 379.498L27.8142 375.291L30.3525 371.298L35.5965 369.354L37.711 366.547L41.5183 367.735L44.1403 363.737L50.9077 362.549L53.9524 358.549V365.575L55.5594 368.923H58.7736L58.6889 375.076L66.4711 375.291L66.3874 389.414Z"
        fill={assignColor('Gibson')}
        stroke={element.config.stroke}
        data-name="Gibson"
        data-x="66"
        data-y="389"
      />
      <path
        d="M133.38 38.1017H123.484L118.408 41.8234L115.279 50.7272L111.472 54.8934L101.829 58.2691L99.1221 60.2949L99.2068 28.5051L98.9536 6.6678L107.919 1.11377L133.465 1.22643L133.296 13.6903L136.595 13.803V21.9491L135.41 28.2788L133.38 28.3914V38.1017Z"
        fill={assignColor('LaPorte')}
        stroke={element.config.stroke}
        data-name="LaPorte"
        data-x="133"
        data-y="38"
      />
      <path
        d="M108.343 416.08L105.044 417.475L100.561 422.196L94.3858 423.483L89.7331 426.593L88.5487 434.199L87.1958 437.198L84.1501 439.124L81.8661 438.589L79.0756 433.129L76.0299 432.7L70.5317 429.271V423.805L73.7459 419.621L84.9118 409.744L86.8569 405.554L87.0263 402.758H91.7639V393.721L110.711 393.613L110.119 400.93L112.488 409.1L111.811 412L108.343 416.08Z"
        fill={assignColor('Spencer')}
        stroke={element.config.stroke}
        data-name="Spencer"
        data-x="108"
        data-y="416"
      />
      <path
        d="M175.083 370.867L174.999 380.253L178.213 386.29L181.596 387.798L181.934 395.873L186.333 396.627L185.995 405.876L184.388 413.074L182.865 414.899L176.606 416.295L173.899 420.265L169.923 415.006L163.578 414.899L155.797 410.389L154.021 405.338L154.105 399.746L149.791 396.519L152.582 392.321L154.359 391.46L154.528 385.967L155.797 383.919L153.344 381.871L156.05 377.773L156.981 374.32L156.305 370.435L175.083 370.867Z"
        fill={assignColor('Harrison')}
        stroke={element.config.stroke}
        data-name="Harrison"
        data-x="175"
        data-y="370"
      />
      <path
        d="M226.174 352.707L227.273 356.17L226.597 358.657L222.96 360.927L219.661 365.899L211.794 368.059L210.017 370.435L207.057 380.9L203.927 384.566L199.698 386.937L195.384 384.996L195.13 380.9L198.006 378.204L194.03 372.378L178.212 372.486V370.867L178.297 363.197L181.511 361.684H187.517L189.039 356.927L190.646 355.197L195.299 352.274L195.214 350.651L214.163 350.543L220.338 350.435L221.86 352.599L226.174 352.707Z"
        fill={assignColor('Clark')}
        stroke={element.config.stroke}
        data-name="Clark"
        data-x="226"
        data-y="352"
      />
      <path
        d="M99.122 60.2949L99.0373 67.6026L99.2068 96.5382L94.2161 96.6498L94.3008 104.705L84.742 104.817L84.8267 116.213H70.7857L70.5314 96.6498H69.8545V62.3187L74.7605 59.7316L76.9598 57.1445L82.12 54.7808L88.2104 56.6939L96.0774 62.2061L99.122 60.2949Z"
        fill={assignColor('Jasper')}
        stroke={element.config.stroke}
        data-name="Jasper"
        data-x="99"
        data-y="60"
      />
      <path
        d="M278.873 56.5811L279.041 95.6427L256.118 96.0903L234.041 96.202V86.2324L233.618 66.9284L236.071 66.8158L236.24 57.1443L246.052 57.257L278.873 56.5811Z"
        fill={assignColor('Allen')}
        stroke={element.config.stroke}
        data-name="Allen"
        data-x="271"
        data-y="56"
      />
      <path
        d="M128.729 96.7624L128.559 116.436L114.094 116.213L113.841 124.246H112.487V135.723L85.1659 135.613L84.8269 116.213L84.7422 104.817L94.301 104.705L94.2162 96.6497L99.207 96.5381L128.729 96.7624Z"
        fill={assignColor('White')}
        stroke={element.config.stroke}
        data-name="White"
        data-x="128"
        data-y="96"
      />
      <path
        d="M34.9203 397.703L34.2434 402.328L33.9892 426.913L29.4212 427.342L26.2917 429.165L22.8233 428.842L18.5942 423.805L14.0262 427.45L16.057 432.379L16.3102 436.342L13.096 439.659L5.99075 436.234L6.4982 432.807L3.36876 430.879L1 426.592L7.34361 427.128L5.99075 420.158L7.76732 418.226L5.73653 412.214L11.151 408.777L11.489 404.909L15.8028 398.671L11.489 395.766L10.1351 390.921L25.6148 391.244L25.531 394.259L34.9203 394.152V397.703Z"
        fill={assignColor('Posey')}
        stroke={element.config.stroke}
        data-name="Posey"
        data-x="34"
        data-y="397"
      />
      <path
        d="M194.877 300.372L195.13 328.647L191.155 336.133L187.179 336.675L186.587 334.94L179.058 333.313L176.521 334.181L172.545 331.794L166.37 333.638L160.534 331.36L154.528 333.421L154.189 308.429H150.89V302.442L156.981 302.659L170.938 302.333L171.023 303.857L189.547 303.313L191.155 300.916L194.877 300.372Z"
        fill={assignColor('Jackson')}
        stroke={element.config.stroke}
        data-name="Jackson"
        data-x="194"
        data-y="300"
      />
      <path
        d="M74.4227 16.5195L74.7607 59.7314L69.8547 62.3185L65.7951 66.0292L58.0976 68.7259L55.8983 67.4897L48.7083 68.2763L48.6235 40.9209L48.8768 6.55493L49.8079 8.02743L57.4207 14.3691L66.5557 17.0848L74.4227 16.5195Z"
        fill={assignColor('Lake')}
        stroke={element.config.stroke}
        data-name="Lake"
        data-x="74"
        data-y="16"
      />
      <path
        d="M87.026 390.921V393.721H91.7636V402.758H87.026L86.8566 405.554L84.9115 409.744L73.7456 419.621L70.5314 423.805V429.271L59.873 422.41H55.0517L55.1365 411.892H53.1904L53.6141 398.133L53.7826 393.936L66.3871 393.829V389.414L67.9094 390.921H87.026Z"
        fill={assignColor('Warrick')}
        stroke={element.config.stroke}
        data-name="Warrick"
        data-x="87"
        data-y="390"
      />
      <path
        d="M206.973 37.6499L207.142 53.7676L207.226 66.8158H204.181L204.434 81.7481L182.357 82.1968L176.351 82.3084L176.266 77.2599L171.36 77.3725L171.192 67.3771H173.222L172.799 37.7626L206.973 37.6499Z"
        fill={assignColor('Kosciusko')}
        stroke={element.config.stroke}
        data-name="Kosciusko"
        data-x="206"
        data-y="37"
      />
      <path
        d="M187.179 336.675L187.517 353.79L190.646 355.197L189.039 356.927L187.517 361.684H181.511L178.297 363.197L178.212 370.867H175.083L156.304 370.435H151.651L151.736 341.662L151.482 336.784L154.528 333.421L160.533 331.36L166.369 333.638L172.545 331.794L176.52 334.181L179.058 333.313L186.587 334.94L187.179 336.675Z"
        fill={assignColor('Washington')}
        stroke={element.config.stroke}
        data-name="Washington"
        data-x="187"
        data-y="336"
      />
      <path
        d="M138.625 403.619L141.247 408.347L139.471 410.603L135.242 411.033L133.634 412.752L133.38 418.656L134.819 422.088L133.127 424.662L128.559 424.34L127.037 426.164L126.613 430.879L123.314 433.022L121.369 431.307L122.722 426.807L121.369 425.199L115.956 427.342L113.671 424.984L110.457 417.26L108.343 416.08L111.81 412L112.487 409.1L110.118 400.93L110.711 393.613L110.626 389.091L120.269 389.199V387.583L129.489 387.475L129.404 393.506H138.794L138.625 403.619Z"
        fill={assignColor('Perry')}
        stroke={element.config.stroke}
        data-name="Perry"
        data-x="138"
        data-y="403"
      />
      <path
        d="M245.207 316.806L245.291 341.337L241.231 336.893L237.086 335.917L231.842 337L227.104 336.459L225.159 337.76L223.975 341.987L225.412 345.129L226.174 352.707L221.86 352.6L220.338 350.435L214.163 350.543V342.746L210.949 342.637L210.864 339.495L207.733 337.109L204.435 336.133L204.519 327.887L210.779 326.693L210.694 323.652H213.909L213.824 320.61L216.954 320.502L216.87 317.241L224.737 317.132L245.207 316.806Z"
        fill={assignColor('Jefferson')}
        stroke={element.config.stroke}
        data-name="Jefferson"
        data-x="245"
        data-y="316"
      />
      <path
        d="M101.153 317.893L101.237 327.452H99.7146L99.6298 361.468L98.2769 362.657L93.7089 360.495L87.1111 360.387L84.0664 357.9L81.6976 360.063L76.0299 356.278L72.731 357.144L72.5615 346.428L69.6016 341.12L72.3083 337.109L71.8008 334.398L74.4228 328.429L78.4834 324.629L81.3586 324.738L82.4583 320.284L84.9118 317.893H101.153Z"
        fill={assignColor('Daviess')}
        stroke={element.config.stroke}
        data-name="Daviess"
        data-x="101"
        data-y="317"
      />
      <path
        d="M58.8581 183.782L51.6681 183.671L48.1997 181.568L48.7082 145.071L85.3342 145.405L85.419 157.626L82.0353 160.513L78.7364 161.067L73.6609 163.73L69.3471 167.39L63.7641 174.15L57.7585 176.808L56.0667 180.019L58.8581 183.782Z"
        fill={assignColor('Warren')}
        stroke={element.config.stroke}
        data-name="Warren"
        data-x="58"
        data-y="183"
      />
      <path
        d="M172.545 1L172.799 33.0221L138.287 33.2485V38.1016H133.381V28.3913L135.41 28.2786L136.595 21.949V13.8029L133.296 13.6902L133.465 1.22631L172.545 1Z"
        fill={assignColor('Saint Joseph')}
        stroke={element.config.stroke}
        data-name="Saint Joseph"
        data-x="172"
        data-y="1"
      />
      <path
        d="M224.736 317.132L225.159 286.522L237.255 278.551L243.853 274.179H256.879L252.058 307.668L250.958 313.434L250.62 315.392L245.207 316.806L224.736 317.132Z"
        fill={assignColor('Ripley')}
        stroke={element.config.stroke}
        data-name="Ripley"
        data-x="224"
        data-y="317"
      />
      <path
        d="M120.1 289.578L119.847 308.429L119.932 317.784L101.153 317.893H84.9117L72.731 317.567L73.0689 288.923L88.5486 289.251L110.542 289.688L120.1 289.578Z"
        fill={assignColor('Greene')}
        stroke={element.config.stroke}
        data-name="Greene"
        data-x="120"
        data-y="289"
      />
      <path
        d="M85.5036 203.228V212.601L92.4394 212.712L92.2709 241.751L76.3675 241.312L60.8878 241.202L59.7044 236.589L60.9726 231.974L61.48 220.973L60.8878 216.128L63.0871 213.042L60.7193 208.523L56.4893 205.434L57.5889 203.228H85.5036Z"
        fill={assignColor('Parke')}
        stroke={element.config.stroke}
        data-name="Parke"
        data-x="85"
        data-y="203"
      />
      <path
        d="M73.0688 279.315V288.923L72.7309 317.567L63.0873 318.219L49.3842 318.11L49.8079 312.782L45.8321 309.735L44.3935 307.342L44.9009 301.679L40.8413 297.974L41.4335 296.449L37.8804 292.196L39.1495 289.688L43.3786 286.195L44.4782 281.173L42.3637 279.315H73.0688Z"
        fill={assignColor('Sullivan')}
        stroke={element.config.stroke}
        data-name="Sullivan"
        data-x="73"
        data-y="279"
      />
      <path
        d="M119.17 213.153L119.847 213.042L119.762 238.896H123.653L122.384 242.19L122.554 247.896L119.762 250.31V256.448L98.2767 256.119L92.1016 256.011L92.271 241.751L92.4395 212.712L119.17 213.153Z"
        fill={assignColor('Putnam')}
        stroke={element.config.stroke}
        data-name="Putnam"
        data-x="119"
        data-y="213"
      />
      <path
        d="M163.494 96.9858L163.325 118.669L163.832 135.723L146.069 135.947L146.153 121.346L133.38 121.235L133.465 116.547L128.559 116.436L128.729 96.7625L138.286 97.0974L163.494 96.9858Z"
        fill={assignColor('Cass')}
        stroke={element.config.stroke}
        data-name="Cass"
        data-x="163"
        data-y="96"
      />
      <path
        d="M99.1224 60.2948L96.0777 62.206L88.2107 56.6939L82.1203 54.7807L76.9601 57.1445L74.7608 59.7316L74.4229 16.5196L85.4192 13.2367L98.9539 6.66772L99.2071 28.505L99.1224 60.2948Z"
        fill={assignColor('Porter')}
        stroke={element.config.stroke}
        data-name="Porter"
        data-x="99"
        data-y="60"
      />
      <path
        d="M85.4192 157.626V174.15L85.5039 203.228H57.5892L56.3211 195.5L58.013 191.301L58.8584 183.782L56.0669 180.019L57.7587 176.808L63.7644 174.15L69.3473 167.39L73.6611 163.73L78.7366 161.067L82.0355 160.513L85.4192 157.626Z"
        fill={assignColor('Fountain')}
        stroke={element.config.stroke}
        data-name="Fountain"
        data-x="85"
        data-y="157"
      />
      <path
        d="M76.3678 241.312L76.284 250.858H73.2383L73.0688 279.315H42.3637L41.7715 273.741L43.4633 271.117L48.3693 269.368L48.2846 241.202H60.8881L76.3678 241.312Z"
        fill={assignColor('Vigo')}
        stroke={element.config.stroke}
        data-name="Vigo"
        data-x="76"
        data-y="241"
      />
      <path
        d="M119.085 206.648L119.17 213.153L92.4395 212.712L85.5037 212.601V203.228L85.4189 174.15L118.916 174.483V178.358L119.085 206.648Z"
        fill={assignColor('Montgomery')}
        stroke={element.config.stroke}
        data-name="Montgomery"
        data-x="119"
        data-y="206"
      />
      <path
        d="M112.488 135.723H118.916L119.001 150.296L118.916 174.483L85.4192 174.15V157.626L85.3345 145.405L85.166 135.613L112.488 135.723Z"
        fill={assignColor('Tippecanoe')}
        stroke={element.config.stroke}
        data-name="Tippecanoe"
        data-x="112"
        data-y="135"
      />
      <path
        d="M224.736 317.132L216.87 317.241L216.954 320.502L213.824 320.61L213.909 323.652H210.694L210.779 326.693L204.519 327.887L202.067 326.367L195.13 328.647L194.877 300.372L194.792 293.723L204.181 293.505L214.501 293.287L225.159 286.522L224.736 317.132Z"
        fill={assignColor('Jennings')}
        stroke={element.config.stroke}
        data-name="Jennings"
        data-x="224"
        data-y="317"
      />
      <path
        d="M171.192 67.3772L171.361 77.3727L176.267 77.26L176.351 82.3086L182.357 82.1969L182.273 87.0172L163.578 87.3541L163.495 96.9857L138.287 97.0974V67.7152L171.192 67.3772Z"
        fill={assignColor('Fulton')}
        stroke={element.config.stroke}
        data-name="Fulton"
        data-x="171"
        data-y="67"
      />
      <path
        d="M149.79 396.519L150.721 400.177L146.576 402.006L144.039 404.586L140.824 402.435L138.625 403.619L138.794 393.506H129.404L129.489 387.475L120.269 387.583L120.185 373.025L151.821 373.134L151.651 370.435H156.304L156.98 374.32L156.05 377.773L153.343 381.871L155.797 383.919L154.528 385.967L154.358 391.46L152.582 392.321L149.79 396.519Z"
        fill={assignColor('Crawford')}
        stroke={element.config.stroke}
        data-name="Crawford"
        data-x="149"
        data-y="396"
      />
      <path
        d="M189.294 125.696V135.278L163.833 135.723L163.325 118.668L163.495 96.9856L163.578 87.3541L182.273 87.0171L182.865 125.696H189.294Z"
        fill={assignColor('Miami')}
        stroke={element.config.stroke}
        data-name="Miami"
        data-x="189"
        data-y="125"
      />
      <path
        d="M224.736 135.278L224.482 125.584L234.125 125.473L234.041 96.202L256.118 96.0903L256.541 135.055L245.375 135.167L224.736 135.278Z"
        fill={assignColor('Wells')}
        stroke={element.config.stroke}
        data-name="Wells"
        data-x="224"
        data-y="135"
      />
      <path
        d="M206.973 37.65L172.799 37.7627V33.0221L172.545 1L206.465 1.11365L206.973 27.827V37.65Z"
        fill={assignColor('Elkhart')}
        stroke={element.config.stroke}
        data-name="Elkhart"
        data-x="206"
        data-y="37"
      />
      <path
        d="M92.2712 241.751L92.1017 256.011L98.2768 256.119L98.0226 270.461L88.718 270.352L88.5485 289.251L73.0688 288.923V279.315L73.2383 250.858H76.284L76.3678 241.312L92.2712 241.751Z"
        fill={assignColor('Clay')}
        stroke={element.config.stroke}
        data-name="Clay"
        data-x="92"
        data-y="241"
      />
      <path
        d="M124.414 269.806L119.931 271.008L120.1 289.578L110.542 289.688L88.5483 289.251L88.7178 270.352L98.0224 270.462L98.2766 256.119L119.762 256.448H124.33L124.414 269.806Z"
        fill={assignColor('Owen')}
        stroke={element.config.stroke}
        data-name="Owen"
        data-x="124"
        data-y="269"
      />
      <path
        d="M124.414 269.806L129.321 270.68H145.476L146.323 280.299L146.491 302.551L150.89 302.442V308.43H119.847L120.1 289.578L119.931 271.008L124.414 269.806Z"
        fill={assignColor('Monroe')}
        stroke={element.config.stroke}
        data-name="Monroe"
        data-x="124"
        data-y="269"
      />
      <path
        d="M145.477 270.68H129.321L124.414 269.806L124.33 256.448H119.762V250.31L122.554 247.897L122.384 242.19L138.541 242.08L138.456 238.896L150.129 238.677L156.812 238.567L156.727 270.462L145.477 270.68Z"
        fill={assignColor('Morgan')}
        stroke={element.config.stroke}
        data-name="Morgan"
        data-x="145"
        data-y="270"
      />
      <path
        d="M172.799 33.0222V37.7627L173.222 67.3772H171.192L138.287 67.7152V38.1017V33.2485L172.799 33.0222Z"
        fill={assignColor('Marshall')}
        stroke={element.config.stroke}
        data-name="Marshall"
        data-x="172"
        data-y="33"
      />
      <path
        d="M278.196 197.487L245.375 197.708H244.191L244.107 189.753L243.938 164.173L278.788 163.841L278.196 197.487Z"
        fill={assignColor('Randolph')}
        stroke={element.config.stroke}
        data-name="Randolph"
        data-x="278"
        data-y="197"
      />
      <path
        d="M204.181 293.505L204.434 269.586L209.087 269.476V258.311H237.17L237.255 278.551L225.159 286.522L214.501 293.287L204.181 293.505Z"
        fill={assignColor('Decatur')}
        stroke={element.config.stroke}
        data-name="Decatur"
        data-x="204"
        data-y="293"
      />
      <path
        d="M151.736 341.662L119.931 341.771V317.784L119.847 308.429H150.89H154.189L154.528 333.421L151.482 336.784L151.736 341.662Z"
        fill={assignColor('Lawrence')}
        stroke={element.config.stroke}
        data-name="Lawrence"
        data-x="151"
        data-y="314"
      />
      <path
        d="M87.1108 360.387L87.0261 390.921H67.9095L66.3871 389.414L66.4709 375.291L58.6887 375.076L58.7734 368.923H55.5592L53.9521 365.575V358.549L65.118 358.982L68.7549 360.712L72.7308 357.144L76.0297 356.278L81.6974 360.063L84.0661 357.9L87.1108 360.387Z"
        fill={assignColor('Pike')}
        stroke={element.config.stroke}
        data-name="Pike"
        data-x="87"
        data-y="360"
      />
      <path
        d="M120.1 359.197L120.185 373.025L120.269 387.583V389.199L110.626 389.091L110.711 393.613L91.7634 393.721H87.0259V390.921L87.1106 360.387L93.7085 360.495L98.2765 362.657L99.6294 361.468L103.352 362.549L106.904 359.197H120.1Z"
        fill={assignColor('Dubois')}
        stroke={element.config.stroke}
        data-name="Dubois"
        data-x="120"
        data-y="359"
      />
      <path
        d="M204.434 269.586L204.181 293.505L194.792 293.723L194.876 300.372L191.155 300.916L189.547 303.313L171.022 303.857L170.938 302.333L170.6 270.133L181.849 269.914L204.434 269.586Z"
        fill={assignColor('Bartholomew')}
        stroke={element.config.stroke}
        data-name="Bartholomew"
        data-x="204"
        data-y="269"
      />
      <path
        d="M70.7855 116.213H48.708V68.2764L55.898 67.4898L58.0973 68.726L65.7948 66.0293L69.8544 62.3186V96.6497H70.5313L70.7855 116.213Z"
        fill={assignColor('Newton')}
        stroke={element.config.stroke}
        data-name="Newton"
        data-x="70"
        data-y="116"
      />
      <path
        d="M277.688 274.397L256.879 274.179H243.853L237.255 278.551L237.17 258.311L237.085 250.31L259.332 250.2L260.432 250.529L278.026 250.749L277.688 274.397Z"
        fill={assignColor('Franklin')}
        stroke={element.config.stroke}
        data-name="Franklin"
        data-x="277"
        data-y="274"
      />
      <path
        d="M213.57 204.11L189.463 204.331V173.818V156.295L213.485 156.183L213.655 189.643L213.57 204.11Z"
        fill={assignColor('Madison')}
        stroke={element.config.stroke}
        data-name="Madison"
        data-x="213"
        data-y="204"
      />
      <path
        d="M138.287 38.1016V67.7151L99.0376 67.6024L99.1223 60.2947L101.829 58.2689L111.473 54.8932L115.279 50.727L118.408 41.8232L123.484 38.1016H133.381H138.287Z"
        fill={assignColor('Starke')}
        stroke={element.config.stroke}
        data-name="Starke"
        data-x="138"
        data-y="38"
      />
      <path
        d="M138.287 67.7152V97.0974L128.729 96.7624L99.2071 96.5381L99.0376 67.6025L138.287 67.7152Z"
        fill={assignColor('Pulaski')}
        stroke={element.config.stroke}
        data-name="Pulaski"
        data-x="138"
        data-y="67"
      />
      <path
        d="M245.883 27.488L246.052 57.2571L236.24 57.1444L216.785 57.0318L216.869 53.7677H207.142L206.973 37.65V27.827L245.883 27.488Z"
        fill={assignColor('Noble')}
        stroke={element.config.stroke}
        data-name="Noble"
        data-x="245"
        data-y="27"
      />
      <path
        d="M128.559 116.436L133.465 116.547L133.38 121.235L146.153 121.346L146.069 135.947L145.984 150.296H119L118.916 135.723H112.487V124.246H113.841L114.094 116.213L128.559 116.436Z"
        fill={assignColor('Carroll')}
        stroke={element.config.stroke}
        data-name="Carroll"
        data-x="128"
        data-y="116"
      />
      <path
        d="M189.294 125.696H182.865L182.273 87.0172L182.357 82.1969L204.434 81.7483L204.519 86.6812L207.903 86.7939L208.41 125.584L189.294 125.696Z"
        fill={assignColor('Wabash')}
        stroke={element.config.stroke}
        data-name="Wabash"
        data-x="189"
        data-y="125"
      />
      <path
        d="M278.027 228.236L259.418 228.015L259.502 229.665L246.729 229.555L246.814 221.413L243.684 221.303V211.94H245.375V197.708L278.196 197.488L278.027 228.236Z"
        fill={assignColor('Wayne')}
        stroke={element.config.stroke}
        data-name="Wayne"
        data-x="278"
        data-y="228"
      />
      <path
        d="M150.129 206.537V238.677L138.456 238.896L138.541 242.08L122.384 242.19L123.653 238.896H119.762L119.847 213.042L119.17 213.153L119.085 206.648L150.129 206.537Z"
        fill={assignColor('Wayne')}
        stroke={element.config.stroke}
        data-name="Hendricks"
        data-x="150"
        data-y="206"
      />
      <path
        d="M150.129 206.537L119.085 206.648L118.916 178.358L157.319 178.137L157.572 206.317L150.129 206.537Z"
        fill={assignColor('Boone')}
        stroke={element.config.stroke}
        data-name="Boone"
        data-x="150"
        data-y="206"
      />
      <path
        d="M272.951 304.184L266.268 308.321L262.462 308.212L258.994 310.389L254.257 314.849L250.958 313.434L252.058 307.668L256.879 274.179L277.688 274.398V296.121L271.851 300.699L272.951 304.184Z"
        fill={assignColor('Dearborn')}
        stroke={element.config.stroke}
        data-name="Dearborn"
        data-x="272"
        data-y="304"
      />
      <path
        d="M224.736 156.183H213.486L189.463 156.294V153.073L189.293 135.278V125.696L208.41 125.584H224.482L224.736 135.278V156.183Z"
        fill={assignColor('Grant')}
        stroke={element.config.stroke}
        data-name="Grant"
        data-x="224"
        data-y="156"
      />
      <path
        d="M245.375 197.708V211.94H243.683V221.303L236.832 221.414L211.878 221.743V212.161L213.655 212.05L213.57 204.11L213.655 189.643L244.107 189.753L244.191 197.708H245.375Z"
        fill={assignColor('Henry')}
        stroke={element.config.stroke}
        data-name="Henry"
        data-x="245"
        data-y="197"
      />
      <path
        d="M181.849 231.534V238.018L156.812 238.567L150.129 238.677V206.537L157.573 206.317L183.119 206.207L183.034 212.491H181.681L181.849 231.534Z"
        fill={assignColor('Marion')}
        stroke={element.config.stroke}
        data-name="Marion"
        data-x="181"
        data-y="231"
      />
      <path
        d="M157.319 178.137L118.916 178.358V174.483L119 150.296H145.984H151.567L151.651 155.184L157.319 156.85L157.15 174.371L157.319 178.137Z"
        fill={assignColor('Clinton')}
        stroke={element.config.stroke}
        data-name="Clinton"
        data-x="157"
        data-y="178"
      />
      <path
        d="M70.7855 116.213H84.8266L85.1656 135.613L85.3341 145.405L48.708 145.071V116.213H70.7855Z"
        fill={assignColor('Benton')}
        stroke={element.config.stroke}
        data-name="Benton"
        data-x="70"
        data-y="116"
      />
      <path
        d="M208.749 231.314L209.087 258.311V269.477L204.435 269.586L181.85 269.914V238.018V231.534L208.749 231.314Z"
        fill={assignColor('Shelby')}
        stroke={element.config.stroke}
        data-name="Shelby"
        data-x="208"
        data-y="231"
      />
      <path
        d="M236.832 221.414L237.085 250.31L237.17 258.311H209.087L208.749 231.314L208.834 221.744H211.878L236.832 221.414Z"
        fill={assignColor('Rush')}
        stroke={element.config.stroke}
        data-name="Rush"
        data-x="236"
        data-y="332211"
      />
      <path
        d="M183.119 206.207L157.573 206.317L157.319 178.137L157.15 174.371L189.463 173.818V204.331V205.986L183.119 206.207Z"
        fill={assignColor('Hamilton')}
        stroke={element.config.stroke}
        data-name="Hamilton"
        data-x="183"
        data-y="206"
      />
      <path
        d="M234.041 86.2326L207.903 86.7939L204.519 86.6812L204.434 81.7483L204.181 66.8159H207.226L207.142 53.7678H216.869L216.785 57.0318L236.24 57.1445L236.071 66.8159L233.618 66.9286L234.041 86.2326Z"
        fill={assignColor('Whitley')}
        stroke={element.config.stroke}
        data-name="Whitley"
        data-x="234"
        data-y="86"
      />
      <path
        d="M278.957 134.721L278.788 163.841L243.938 164.173L243.684 156.183H244.868V144.959L245.375 135.167L256.541 135.055L278.957 134.721Z"
        fill={assignColor('Jay')}
        stroke={element.config.stroke}
        data-name="Jay"
        data-x="278"
        data-y="134"
      />
      <path
        d="M206.465 1.11377L245.63 1.22643L245.883 27.4882L206.973 27.8271L206.465 1.11377Z"
        fill={assignColor('LaGrange')}
        stroke={element.config.stroke}
        data-name="LaGrange"
        data-x="206"
        data-y="1"
      />
      <path
        d="M151.652 370.435L151.821 373.134L120.185 373.025L120.1 359.198L119.932 341.771L151.736 341.662L151.652 370.435Z"
        fill={assignColor('Orange')}
        stroke={element.config.stroke}
        data-name="Orange"
        data-x="151"
        data-y="370"
      />
      <path
        d="M244.107 189.753L213.655 189.643L213.486 156.183H224.736H243.684L243.938 164.173L244.107 189.753Z"
        fill={assignColor('Delaware')}
        stroke={element.config.stroke}
        data-name="Delaware"
        data-x="244"
        data-y="189"
      />
      <path
        d="M234.041 96.202L234.126 125.473L224.482 125.584H208.41L207.903 86.7937L234.041 86.2324V96.202Z"
        fill={assignColor('Huntington')}
        stroke={element.config.stroke}
        data-name="Huntington"
        data-x="234"
        data-y="96"
      />
      <path
        d="M246.052 57.2571L245.883 27.488L278.788 27.2617L278.873 56.5811L246.052 57.2571Z"
        fill={assignColor('DeKalb')}
        stroke={element.config.stroke}
        data-name="DeKalb"
        data-x="246"
        data-y="57"
      />
      <path
        d="M99.6294 361.468L99.7141 327.452H101.236L101.153 317.893L119.931 317.784V341.771L120.1 359.197H106.904L103.352 362.549L99.6294 361.468Z"
        fill={assignColor('Martin')}
        stroke={element.config.stroke}
        data-name="Martin"
        data-x="99"
        data-y="361"
      />
      <path
        d="M189.294 135.278L189.463 153.073L157.319 153.518V156.85L151.652 155.184L151.567 150.296H145.984L146.069 135.947L163.832 135.723L189.294 135.278Z"
        fill={assignColor('Cook')}
        stroke={element.config.stroke}
        data-name="Howard"
        data-x="189"
        data-y="135"
      />
      <path
        d="M245.29 341.337L245.207 316.806L250.62 315.392L250.197 318.327L274.22 318.436L277.519 318.653L280.31 320.61L279.888 323.109L276.757 326.475L278.026 330.926L271.175 330.492L267.96 331.903H263.054L254.004 337.435L248.759 341.337H245.29Z"
        fill={assignColor('Switzerland')}
        stroke={element.config.stroke}
        data-name="Switzerland"
        data-x="245"
        data-y="341"
      />
      <path
        d="M256.541 135.055L256.118 96.0905L279.041 95.6428L278.956 134.721L256.541 135.055Z"
        fill={assignColor('Adams')}
        stroke={element.config.stroke}
        data-name="Adams"
        data-x="256"
        data-y="135"
      />
      <path
        d="M57.589 203.228L56.4894 205.434L60.7194 208.523L63.0872 213.042L60.8879 216.128L61.4801 220.973L60.9727 231.974L59.7046 236.589L60.8879 241.202H48.2844L48.1997 211.169V181.568L51.6681 183.671L58.8581 183.781L58.0127 191.3L56.3209 195.5L57.589 203.228Z"
        fill={assignColor('Vermillion')}
        stroke={element.config.stroke}
        data-name="Vermillion"
        data-x="57"
        data-y="203"
      />
      <path
        d="M211.878 221.743H208.834L208.749 231.314L181.849 231.534L181.681 212.491H183.034L183.118 206.207L189.463 205.986V204.331L213.57 204.11L213.655 212.05L211.878 212.161V221.743Z"
        fill={assignColor('Hancock')}
        stroke={element.config.stroke}
        data-name="Hancock"
        data-x="211"
        data-y="211"
      />
      <path
        d="M245.883 27.4881L245.629 1.22632H278.619L278.788 27.2618L245.883 27.4881Z"
        fill={assignColor('Steuben')}
        stroke={element.config.stroke}
        data-name="Steuben"
        data-x="245"
        data-y="27"
      />
      <path
        d="M150.89 302.442L146.491 302.55L146.323 280.298L145.477 270.68L156.727 270.462L170.6 270.134L170.938 302.333L156.98 302.659L150.89 302.442Z"
        fill={assignColor('Brown')}
        stroke={element.config.stroke}
        data-name="Brown"
        data-x="150"
        data-y="302"
      />
      <path
        d="M181.849 269.914L170.6 270.134L156.727 270.462L156.812 238.567L181.849 238.018V269.914Z"
        fill={assignColor('Johnson')}
        stroke={element.config.stroke}
        data-name="Johnson"
        data-x="181"
        data-y="269"
      />
      <path
        d="M53.6143 398.133L53.1906 411.892H55.1366L55.0519 422.41L49.8917 425.842L46.3395 423.59L44.0555 419.514L40.0796 424.019L43.0406 427.664L42.0257 432.914L39.2342 434.628L35.8506 433.664L36.696 427.342L33.9893 426.913L34.2435 402.327L34.9204 397.703L53.6143 398.133Z"
        fill={assignColor('Vanderburgh')}
        stroke={element.config.stroke}
        data-name="Vanderburgh"
        data-x="53"
        data-y="398"
      />
      <path
        d="M204.519 327.887L204.434 336.133L207.733 337.109L210.864 339.495L210.949 342.637L214.163 342.746V350.543L195.215 350.651L195.299 352.275L190.647 355.197L187.517 353.79L187.179 336.675L191.155 336.133L195.13 328.647L202.067 326.367L204.519 327.887Z"
        fill={assignColor('Scott')}
        stroke={element.config.stroke}
        data-name="Scott"
        data-x="204"
        data-y="327"
      />
      <path
        d="M157.15 174.371L157.319 156.85V153.518L189.463 153.073V156.294V173.818L157.15 174.371Z"
        fill={assignColor('Tipton')}
        stroke={element.config.stroke}
        data-name="Tipton"
        data-x="157"
        data-y="174"
      />
      <path
        d="M237.086 250.31L236.833 221.413L243.684 221.303L246.814 221.413L246.729 229.555L259.502 229.665L259.333 250.2L237.086 250.31Z"
        fill={assignColor('Fayette')}
        stroke={element.config.stroke}
        data-name="Fayette"
        data-x="237"
        data-y="250"
      />
      <path
        d="M178.212 370.867V372.486L194.03 372.378L198.006 378.204L195.13 380.9L195.384 384.997L191.915 387.26L190.308 392.213L186.332 396.627L181.934 395.873L181.596 387.798L178.212 386.29L174.998 380.253L175.083 370.867H178.212Z"
        fill={assignColor('Floyd')}
        stroke={element.config.stroke}
        data-name="Floyd"
        data-x="178"
        data-y="370"
      />
      <path
        d="M245.375 135.167L244.868 144.959V156.183H243.683H224.736V135.278L245.375 135.167Z"
        fill={assignColor('Blackford')}
        stroke={element.config.stroke}
        data-name="Blackford"
        data-x="245"
        data-y="135"
      />
      <path
        d="M278.026 250.749L260.432 250.53L259.333 250.201L259.502 229.665L259.417 228.015L278.026 228.236V250.749Z"
        fill={assignColor('Union')}
        stroke={element.config.stroke}
        data-name="Union"
        data-x="278"
        data-y="250"
      />
      <path
        d="M274.22 318.436L250.197 318.327L250.62 315.392L250.958 313.434L254.257 314.849L258.994 310.389L262.462 308.212L266.268 308.321L272.951 304.185L276.166 308.974L276.334 312.021L272.698 316.589L274.22 318.436Z"
        fill={assignColor('Ohio')}
        stroke={element.config.stroke}
        data-name="Ohio"
        data-x="274"
        data-y="318"
      />

      {renderLabels()}
    </svg>
  );
};

MapIndiana.propTypes = ElementPropTypes;
MapIndianaPresent.propTypes = {
  element: PropTypes.object.isRequired,
};
MapIndianaContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default MapIndiana;
