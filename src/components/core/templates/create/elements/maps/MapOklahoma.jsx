import { ElementPropTypes } from '@/lib/prop-types.js';
import useMapElement from '@/lib/design/use-map-element.jsx';
import PropTypes from 'prop-types';

const MapOklahoma = ({ element }) => {
  return <MapOklahomaContent element={element} />;
};

export const MapOklahomaPresent = ({ element }) => {
  return <MapOklahomaContent element={element} />;
};

export const MapOklahomaPreview = () => {
  return <MapOklahomaContent element={{ config: { data: [], fill: '#f9fafb', stroke: '#f9fafb' } }} />;
};

export const MapOklahomaContent = ({ element }) => {
  const { el, assignColor, renderLabels } = useMapElement(element);

  return (
    <svg ref={el} width="100%" viewBox="0 0 400 195" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M326.21 1.41895V34.681V50.011L313.389 49.838L314.736 47.651L313.9 46.097L310.556 46.039L308.419 43.793L305.864 42.5829L304.285 40.047L301.73 42.0069L299.732 41.603L300.011 39.181L296.713 34.681L294.297 34.7959L292.579 33.4099L293.043 30.8109L290.813 26.5329L289.002 27.2849L285.75 31.909L281.802 32.7749L279.201 30.06L279.386 29.2509L284.403 27.2849L283.66 24.6239L280.408 25.608L277.11 25.0289L276.924 19.2979L282.173 19.761L284.821 15.821L291.139 14.0229L291.232 1.41895H326.21Z"
        stroke={element.config.stroke}
        data-name="Osage"
        fill={assignColor('Osage')}
        data-x="326"
        data-y="1"
      />
      <path
        d="M365.415 176.162V163.828L365.648 158.942H370.432L370.293 144.196L375.542 144.14L397.56 144.196L397.188 161.975L396.538 192.706L394.68 194.157L389.059 189.301L387.201 190.25L383.903 189.078L382.788 187.179L378.84 186.956L375.124 183.435L374.195 180.527H371.454L365.415 176.162Z"
        stroke={element.config.stroke}
        data-name="McCurtain"
        fill={assignColor('McCurtain')}
        data-x="365"
        data-y="176"
      />
      <path
        d="M46.198 1.88503L45.965 10.193L46.012 30.175L53.537 30.233L39.973 30.407L1 30.349V1.47803L14.889 1.65202L46.198 1.88503Z"
        stroke={element.config.stroke}
        data-name="Cimarron"
        fill={assignColor('Cimarron')}
        data-x="46"
        data-y="1"
      />
      <path
        d="M208.594 32.6019L207.665 35.547L205.574 36.7589L202.601 36.181L200.325 34.103L195.355 32.8909L194.658 30.407L188.712 30.002L188.759 24.6819L185.832 22.0199L184.578 18.95L179.561 13.907L174.87 13.6749L173.104 12.457L171.804 9.55495L169.667 8.33495L165.858 1.41895H207.943L208.176 4.73295V24.9129L208.594 32.6019Z"
        stroke={element.config.stroke}
        data-name="Woods"
        fill={assignColor('Woods')}
        data-x="208"
        data-y="32"
      />
      <path
        d="M399 94.6108L398.35 120.008L397.56 144.196L375.542 144.14L375.449 134.378H369.782L369.875 124.652L372.615 124.595V119.555H375.96V113.033L375.913 104.911L381.255 104.798L381.209 97.7998L385.018 96.1488L389.663 99.6218L391.428 97.6288L396.492 99.1088L396.91 95.0088L399 94.6108Z"
        stroke={element.config.stroke}
        data-name="Le Flore"
        fill={assignColor('Le Flore')}
        data-x="399"
        data-y="94"
      />
      <path
        d="M96.1798 30.407L53.5368 30.233L46.0118 30.175L45.9648 10.193L46.1978 1.88503L68.6798 1.71002L96.5518 1.47803L96.1338 10.251L96.1798 30.407Z"
        stroke={element.config.stroke}
        data-name="Texas"
        fill={assignColor('Texas')}
        data-x="96"
        data-y="30"
      />
      <path
        d="M351.712 99.4509L351.526 107.185H356.45V112.977V114.622H349.111L348.785 134.321L348.739 139.29L341.446 139.233H331.784L331.691 134.265L321.843 134.321L321.89 129.348L322.029 113.544L325.792 107.81L327 107.696L331.459 107.469L332.202 105.707L335.454 105.082L337.173 106.219L344.373 102.068L348.785 101.272L349.25 99.2229L351.712 99.4509Z"
        stroke={element.config.stroke}
        data-name="Pittsburg"
        fill={assignColor('Pittsburg')}
        data-x="351"
        data-y="99"
      />
      <path
        d="M140.309 1.53603L140.216 25.087V30.407L115.039 30.464L96.1798 30.407L96.1338 10.251L96.5518 1.47803H110.952L140.309 1.53603Z"
        stroke={element.config.stroke}
        data-name="Beaver"
        fill={assignColor('Beaver')}
        data-x="140"
        data-y="1"
      />
      <path
        d="M140.216 25.0869H158.751L158.844 45.0599L159.076 49.7809H169.109L169.156 58.2309L166.88 58.2879L163.257 61.2159L162.885 63.3389L160.748 67.1239L158.286 68.3849L155.406 67.9839L150.25 65.1749L149.275 63.5109L149.321 59.4939L147.835 58.5179L145.326 60.6419L143.793 64.5439L140.309 66.2069L140.216 30.4069V25.0869Z"
        stroke={element.config.stroke}
        data-name="Ellis"
        fill={assignColor('Ellis')}
        data-x="140"
        data-y="25"
      />
      <path
        d="M369.782 134.378H375.449L375.542 144.14L370.293 144.196L370.432 158.942H365.648L365.415 163.828H336.429L336.476 144.14H341.446V139.233L348.739 139.29L348.785 134.321L369.782 134.378Z"
        stroke={element.config.stroke}
        data-name="Pushmataha"
        fill={assignColor('Pushmataha')}
        data-x="369"
        data-y="134"
      />
      <path
        d="M360.306 69.932L366.716 69.989L366.669 79.888L366.437 86.456L368.667 89.993L370.293 90.222L367.273 94.782L365.276 95.123L362.349 100.76L360.863 101.329L359.098 99.337L356.682 99.622L356.636 84.858H339.542L339.495 74.912H337.033L337.126 67.468L342.282 67.353L343.072 71.421L344.884 72.566L350.736 70.39L352.409 70.905L355.846 69.473L360.306 69.932Z"
        stroke={element.config.stroke}
        data-name="Muskogee"
        fill={assignColor('Muskogee')}
        data-x="360"
        data-y="69"
      />
      <path
        d="M188.712 30.002L188.898 50.069L169.109 49.781H159.076L158.844 45.06L158.751 25.087L173.104 24.971V12.457L174.87 13.675L179.561 13.907L184.578 18.95L185.832 22.02L188.759 24.682L188.712 30.002Z"
        stroke={element.config.stroke}
        data-name="Woodward"
        fill={assignColor('Woodward')}
        data-x="188"
        data-y="30"
      />
      <path
        d="M182.07 136.75L183.045 139.177L179.236 139.459L177.331 143.182L175.891 149.83L178.028 152.588L177.006 153.826L174.266 150.224L171.804 149.211L169.667 146.901L168.413 151.237L166.74 151.631L163.349 149.717L159.958 149.323L158.658 151.744L154.942 151.35L149.646 146.845L147.556 144.027H156.01L155.917 131.835L166.183 131.779L166.508 129.291L168.041 126.859L175.52 126.519L177.935 124.369L179.84 124.539L179.236 130.761L179.933 133.078L184.299 132.965L182.07 136.75Z"
        stroke={element.config.stroke}
        data-name="Jackson"
        fill={assignColor('Jackson')}
        data-x="182"
        data-y="136"
      />
      <path
        d="M204.599 110.649L204.459 124.369H194.937L195.03 139.177L186.808 139.233V136.75H182.07L184.299 132.965L179.933 133.078L179.236 130.761L179.84 124.539L177.935 124.369L175.52 126.519L172.826 124.595L173.151 121.254L171.293 118.364L171.432 113.828L167.948 109.684H170.131L198.56 109.627L204.599 110.649Z"
        stroke={element.config.stroke}
        data-name="Kiowa"
        fill={assignColor('Kiowa')}
        data-x="204"
        data-y="110"
      />
      <path
        d="M326.535 163.716L329.183 165.793L329.043 175.322L331.645 177.226L333.503 179.632L337.358 179.744L334.06 181.869L330.158 179.296L328.486 180.583L323.934 181.758L321.565 181.086L318.313 182.876L317.57 186.341L315.479 186.788L312.646 185.615L311.345 189.636L308.976 188.408L306.514 185.112L302.891 185.279L301.497 182.652L297.549 181.422L298.803 178.457L298.432 174.09L296.899 172.017L300.661 168.653L298.943 166.073H305.028V163.716H307.211H326.535Z"
        stroke={element.config.stroke}
        data-name="Bryan"
        fill={assignColor('Bryan')}
        data-x="326"
        data-y="163"
      />
      <path
        d="M341.446 139.233V144.14H336.476L336.429 163.828L326.535 163.716H307.211V149.323L319.289 149.267L319.335 144.084H321.983L321.843 134.321L331.691 134.265L331.784 139.233H341.446Z"
        stroke={element.config.stroke}
        data-name="Atoka"
        fill={assignColor('Atoka')}
        data-x="341"
        data-y="139"
      />
      <path
        d="M169.156 58.231L169.481 70.046L169.435 85.029L169.992 87.369L160.144 87.312L160.098 92.388L140.356 92.274L140.309 66.207L143.793 64.544L145.326 60.642L147.835 58.518L149.321 59.494L149.275 63.511L150.25 65.175L155.406 67.984L158.286 68.385L160.748 67.124L162.885 63.339L163.257 61.216L166.88 58.288L169.156 58.231Z"
        stroke={element.config.stroke}
        data-name="Roger Mills"
        fill={assignColor('Roger Mills')}
        data-x="169"
        data-y="58"
      />
      <path
        d="M228.707 94.8389L229.079 124.312L204.459 124.369L204.599 110.649L204.413 104.684L204.459 89.8789L204.506 84.8579L218.534 84.9719L219.138 85.3149V95.0089L228.707 94.8389Z"
        stroke={element.config.stroke}
        data-name="Caddo"
        fill={assignColor('Caddo')}
        data-x="228"
        data-y="94"
      />
      <path
        d="M273.115 120.178L276.042 120.121L279.433 121.311L282.87 118.138L282.824 124.482H248.635L248.496 97.231L254.024 100.76L253.606 102.921L260.759 108.435L260.852 110.876L262.803 111.501L263.5 117.628L268.656 119.668L273.115 120.178Z"
        stroke={element.config.stroke}
        data-name="McClain"
        fill={assignColor('McClain')}
        data-x="173"
        data-y="120"
      />
      <path
        d="M229.172 134.152L226.756 134.208L226.71 144.084H221.972V146.451L219.556 147.296L209.941 147.239L209.894 148.929L205.063 149.042L202.601 149.717V143.914L194.983 143.971L195.03 139.177L194.937 124.369H204.459L229.079 124.312L229.172 134.152Z"
        stroke={element.config.stroke}
        data-name="Comanche"
        fill={assignColor('Comanche')}
        data-x="229"
        data-y="134"
      />
      <path
        d="M313.389 49.838H312.228L297.177 49.953L288.073 50.069L288.026 45.118L283.102 45.06V40.162L278.179 40.047L278.225 30.06H279.201L281.802 32.775L285.75 31.909L289.002 27.285L290.813 26.533L293.043 30.811L292.579 33.41L294.297 34.796L296.713 34.681L300.011 39.181L299.732 41.603L301.73 42.007L304.285 40.047L305.864 42.583L308.419 43.793L310.556 46.039L313.9 46.097L314.736 47.651L313.389 49.838Z"
        stroke={element.config.stroke}
        data-name="Pawnee"
        fill={assignColor('Pawnee')}
        data-x="313"
        data-y="49"
      />
      <path
        d="M195.03 139.177L194.983 143.971L202.601 143.914V149.717V153.826H205.017L204.924 163.772L203.205 163.435L201.301 165.119L198.978 165.512L195.866 163.884L192.15 163.155L189.084 160.684L187.272 160.178L184.903 161.47L178.028 160.515L177.006 153.826L178.028 152.588L175.891 149.83L177.331 143.182L179.236 139.459L183.045 139.177L182.07 136.75H186.808V139.233L195.03 139.177Z"
        stroke={element.config.stroke}
        data-name="Tillman"
        fill={assignColor('Tillman')}
        data-x="195"
        data-y="139"
      />
      <path
        d="M312.228 49.8379L312.321 54.7259L324.909 54.8409L324.723 67.4109L317.245 67.2959L317.198 80.0589L297.27 79.9449V62.4789L297.177 49.9529L312.228 49.8379Z"
        stroke={element.config.stroke}
        data-name="Creek"
        fill={assignColor('Creek')}
        data-x="312"
        data-y="49"
      />
      <path
        d="M169.992 89.822L170.131 109.684H167.948H150.482L150.389 114.679H145.512L140.356 114.565V92.274L160.098 92.388L160.144 87.312L169.992 87.369V89.822Z"
        stroke={element.config.stroke}
        data-name="Beckham"
        fill={assignColor('Beckham')}
        data-x="169"
        data-y="89"
      />
      <path
        d="M337.08 49.7809L337.173 64.7159H334.571L334.618 67.4679L324.723 67.4109L324.909 54.8409L312.321 54.7259L312.228 49.8379H313.389L326.21 50.0109V34.6809L334.85 34.7379L334.711 49.7809H337.08Z"
        stroke={element.config.stroke}
        data-name="Tulsa"
        fill={assignColor('Tulsa')}
        data-x="337"
        data-y="49"
      />
      <path
        d="M248.496 97.2309L248.635 124.482L248.682 134.265L229.172 134.152L229.079 124.312L228.707 94.8389L235.675 95.4079L241.249 97.2309L245.523 97.6289L248.496 97.2309Z"
        stroke={element.config.stroke}
        data-name="Grady"
        fill={assignColor('Grady')}
        data-x="248"
        data-y="87"
      />
      <path
        d="M208.594 32.6019H228.336L228.382 49.666H223.458L203.856 49.7809L188.898 50.069L188.712 30.002L194.658 30.407L195.355 32.8909L200.325 34.103L202.601 36.181L205.574 36.7589L207.665 35.547L208.594 32.6019Z"
        stroke={element.config.stroke}
        data-name="Major"
        fill={assignColor('Major')}
        data-x="208"
        data-y="32"
      />
      <path
        d="M297.177 90.108L297.131 93.471L296.016 94.041L292.114 92.103L290.024 93.015L290.07 121.877L288.863 119.555L285.936 120.405L282.87 118.138L279.433 121.311L276.042 120.121L273.115 120.178L273.069 95.009V89.822H287.794L297.177 90.108Z"
        stroke={element.config.stroke}
        data-name="Pottawatomie"
        fill={assignColor('Pottawatomie')}
        data-x="297"
        data-y="90"
      />
      <path
        d="M291.232 1.41895L291.139 14.0229L284.821 15.821L282.173 19.761L276.924 19.2979L277.11 25.0289H258.251L258.297 1.41895H291.232Z"
        stroke={element.config.stroke}
        data-name="Kay"
        fill={assignColor('Kay')}
        data-x="291"
        data-y="1"
      />
      <path
        d="M173.104 12.457V24.9709L158.751 25.0869H140.216L140.309 1.53595L165.858 1.41895L169.667 8.33495L171.804 9.55495L173.104 12.457Z"
        stroke={element.config.stroke}
        data-name="Harper"
        fill={assignColor('Harper')}
        data-x="173"
        data-y="12"
      />
      <path
        d="M258.251 49.7229L248.356 49.666H228.382L228.336 32.6019L228.289 24.9709L258.251 25.0289V49.7229Z"
        stroke={element.config.stroke}
        data-name="Garfield"
        fill={assignColor('Garfield')}
        data-x="258"
        data-y="49"
      />
      <path
        d="M263.453 143.971L263.36 151.35H277.946L278.364 153.826L282.731 153.882V162.762L281.291 162.705L281.105 168.541L273.162 168.429L253.791 168.541L253.606 156.3L253.745 144.084L263.453 143.971Z"
        stroke={element.config.stroke}
        data-name="Carter"
        fill={assignColor('Carter')}
        data-x="263"
        data-y="143"
      />
      <path
        d="M204.459 89.879L204.413 104.684L204.599 110.649L198.56 109.627L170.131 109.684L169.992 89.822L204.459 89.879Z"
        stroke={element.config.stroke}
        data-name="Washita"
        fill={assignColor('Washita')}
        data-x="204"
        data-y="89"
      />
      <path
        d="M327 107.696L325.792 107.81L322.029 113.544L321.89 129.348H307.257V120.405L305.91 121.651L303.17 121.481L303.309 109.684H305.817L305.725 99.792H327.092L327 107.696Z"
        stroke={element.config.stroke}
        data-name="Hughes"
        fill={assignColor('Hughes')}
        data-x="327"
        data-y="107"
      />
      <path
        d="M258.251 25.0289L228.289 24.9709L228.196 4.73295L227.918 1.41895H258.297L258.251 25.0289Z"
        stroke={element.config.stroke}
        data-name="Grant"
        fill={assignColor('Grant')}
        data-x="258"
        data-y="25"
      />
      <path
        d="M169.109 49.781L188.898 50.069L203.856 49.781L203.995 69.989L169.481 70.046L169.156 58.231L169.109 49.781Z"
        stroke={element.config.stroke}
        data-name="Dewey"
        fill={assignColor('Dewey')}
        data-x="169"
        data-y="49"
      />
      <path
        d="M218.534 84.972L204.506 84.858H203.995V69.989L203.856 49.781L223.458 49.666L223.69 74.97H218.859L218.534 84.972Z"
        stroke={element.config.stroke}
        data-name="Blaine"
        fill={assignColor('Blaine')}
        data-x="218"
        data-y="84"
      />
      <path
        d="M204.506 84.858L204.459 89.879L169.992 89.822V87.369L169.435 85.029L169.481 70.046L203.995 69.989V84.858H204.506Z"
        stroke={element.config.stroke}
        data-name="Custer"
        fill={assignColor('Custer')}
        data-x="204"
        data-y="84"
      />
      <path
        d="M381.209 97.7999L381.255 104.798L375.913 104.911L375.96 113.033L356.45 112.977V107.185H351.526L351.712 99.4509L354.685 97.7429L356.682 99.6219L359.098 99.3369L360.863 101.329L362.349 100.76L365.276 95.1229L367.273 94.7819L370.293 90.2219L372.708 92.9579L377.4 93.8129L377.075 96.5469L380.559 95.4649L381.209 97.7999Z"
        stroke={element.config.stroke}
        data-name="Haskell"
        fill={assignColor('Haskell')}
        data-x="381"
        data-y="97"
      />
      <path
        d="M253.606 156.3L253.791 168.541L253.698 178.233L252.351 175.21L248.403 173.194L243.525 178.345L239.205 180.863L234.932 179.184L234.467 172.689L229.497 172.465L227.639 168.317L228.754 166.971L226.71 164.895L226.756 156.188L234.003 156.356L253.606 156.3Z"
        stroke={element.config.stroke}
        data-name="Jefferson"
        fill={assignColor('Jefferson')}
        data-x="253"
        data-y="256"
      />
      <path
        d="M356.682 99.6219L354.685 97.7429L351.712 99.4509L349.25 99.2229L348.785 101.272L344.373 102.068L337.173 106.219L335.454 105.082L332.202 105.707L331.459 107.469L327 107.696L327.092 99.7919L327.139 94.9529H332.063L332.156 89.9359L334.618 89.9929L334.478 84.8579H339.542H356.636L356.682 99.6219Z"
        stroke={element.config.stroke}
        data-name="McIntosh"
        fill={assignColor('McIntosh')}
        data-x="356"
        data-y="99"
      />
      <path
        d="M248.496 94.896V97.231L245.523 97.629L241.249 97.231L235.675 95.408L228.707 94.839L219.138 95.009V85.315L218.534 84.972L218.859 74.97H223.69H248.356L248.496 94.896Z"
        stroke={element.config.stroke}
        data-name="Canadian"
        fill={assignColor('Canadian')}
        data-x="248"
        data-y="94"
      />
      <path
        d="M282.824 124.482V136.693L273.069 136.75L271.629 140.757L273.022 144.084L263.453 143.971L253.745 144.084L253.559 134.265H248.682L248.635 124.482H282.824Z"
        stroke={element.config.stroke}
        data-name="Garvin"
        fill={assignColor('Garvin')}
        data-x="282"
        data-y="124"
      />
      <path
        d="M357.379 29.7129H352.455L352.176 54.7839L347.02 53.9789L343.769 49.8959L337.08 49.7809H334.711L334.85 34.7379L335.036 24.6819H352.641H357.426L357.379 29.7129Z"
        stroke={element.config.stroke}
        data-name="Rogers"
        fill={assignColor('Rogers')}
        data-x="357"
        data-y="29"
      />
      <path
        d="M382.138 49.8959L382.092 64.8879H381.627L381.581 79.8309L366.669 79.8879L366.716 69.9889L360.306 69.9319L362.024 67.6399L359.516 64.4869L359.702 60.5849L361.792 59.6669L363 54.8989L367.134 54.8409V49.8379H372.151L382.138 49.8959Z"
        stroke={element.config.stroke}
        data-name="Cherokee"
        fill={assignColor('Cherokee')}
        data-x="382"
        data-y="49"
      />
      <path
        d="M167.948 109.684L171.432 113.828L171.293 118.364L173.151 121.254L172.826 124.595L175.52 126.519L168.041 126.859L166.508 129.291L166.183 131.779L155.917 131.835L155.127 129.291H153.455L152.944 119.441L145.512 119.555V114.679H150.389L150.482 109.684H167.948Z"
        stroke={element.config.stroke}
        data-name="Greer"
        fill={assignColor('Greer')}
        data-x="167"
        data-y="109"
      />
      <path
        d="M297.27 62.4789V79.9449L297.177 90.1079L287.794 89.8219H273.069V74.9699L273.115 62.4209L297.27 62.4789Z"
        stroke={element.config.stroke}
        data-name="Lincoln"
        fill={assignColor('Lincoln')}
        data-x="297"
        data-y="62"
      />
      <path
        d="M279.201 30.06H278.225L278.179 40.047L283.102 40.162V45.06L273.162 45.118L273.115 50.069L263.175 50.126L258.251 49.723V25.029H277.11L280.408 25.608L283.66 24.624L284.403 27.285L279.386 29.251L279.201 30.06Z"
        stroke={element.config.stroke}
        data-name="Noble"
        fill={assignColor('Noble')}
        data-x="279"
        data-y="30"
      />
      <path
        d="M326.535 163.716L336.429 163.828H365.415V176.162L362.489 174.874L359.748 177.617L359.609 179.52L353.431 180.08L347.531 179.408L345.394 176.218L340.192 179.072L337.358 179.744L333.503 179.632L331.645 177.226L329.043 175.322L329.183 165.793L326.535 163.716Z"
        stroke={element.config.stroke}
        data-name="Choctaw"
        fill={assignColor('Choctaw')}
        data-x="326"
        data-y="163"
      />
      <path
        d="M381.581 79.8311L397.095 79.8881L399 94.6111L396.91 95.009L396.492 99.1091L391.428 97.6291L389.663 99.6221L385.018 96.149L381.21 97.8L380.559 95.4651L377.076 96.5471L377.4 93.813L372.708 92.9581L370.293 90.2221L368.667 89.9931L366.438 86.4561L366.669 79.8881L381.581 79.8311Z"
        stroke={element.config.stroke}
        data-name="Sequoyah"
        fill={assignColor('Sequoyah')}
        data-x="381"
        data-y="79"
      />
      <path
        d="M352.176 54.784L363 54.899L361.792 59.667L359.702 60.585L359.516 64.487L362.024 67.64L360.306 69.932L355.846 69.473L352.409 70.905L350.736 70.39L344.884 72.566L343.072 71.421L342.282 67.353L337.126 67.468H334.618L334.571 64.716H337.173L337.08 49.781L343.769 49.896L347.02 53.979L352.176 54.784Z"
        stroke={element.config.stroke}
        data-name="Wagoner"
        fill={assignColor('Wagoner')}
        data-x="352"
        data-y="54"
      />
      <path
        d="M290.07 121.877L292.207 124.369L294.204 122.67L300.15 120.858L300.94 123.35L303.17 121.481L305.91 121.651L307.257 120.405V129.348V134.434L302.287 134.378L302.101 144.196L287.562 144.084L287.608 139.29H282.777L282.824 136.693V124.482L282.87 118.138L285.936 120.405L288.863 119.555L290.07 121.877Z"
        stroke={element.config.stroke}
        data-name="Pontotoc"
        fill={assignColor('Pontotoc')}
        data-x="290"
        data-y="121"
      />
      <path
        d="M248.356 74.97H223.69L223.458 49.666H228.382H248.356V74.97Z"
        stroke={element.config.stroke}
        data-name="Kingfisher"
        fill={assignColor('Kingfisher')}
        data-x="248"
        data-y="74"
      />
      <path
        d="M228.289 24.9709L228.336 32.6019H208.594L208.176 24.9129V4.73295L207.943 1.41895H227.918L228.196 4.73295L228.289 24.9709Z"
        stroke={element.config.stroke}
        data-name="Alfalfa"
        fill={assignColor('Alfalfa')}
        data-x="228"
        data-y="24"
      />
      <path
        d="M273.069 95.009L273.115 120.178L268.656 119.668L263.5 117.628L262.803 111.501L260.852 110.876L260.759 108.435L253.606 102.921L254.024 100.76L248.496 97.231V94.896L273.069 95.009Z"
        stroke={element.config.stroke}
        data-name="Cleveland"
        fill={assignColor('Cleveland')}
        data-x="273"
        data-y="95"
      />
      <path
        d="M248.356 49.666L258.251 49.723L263.175 50.126L263.221 60.126L265.915 58.69L266.566 60.528L270.421 62.249L273.115 62.421L273.069 74.97H248.356V49.666Z"
        stroke={element.config.stroke}
        data-name="Logan"
        fill={assignColor('Logan')}
        data-x="248"
        data-y="49"
      />
      <path
        d="M324.723 67.4109L334.618 67.4679H337.126L337.033 74.9119H339.495L339.542 84.8579H334.478L334.618 89.9929L332.156 89.9359L332.063 94.9529H327.139L322.076 94.8959L322.029 84.8009H317.198V80.0589L317.245 67.2959L324.723 67.4109Z"
        stroke={element.config.stroke}
        data-name="Okmulgee"
        fill={assignColor('Okmulgee')}
        data-x="324"
        data-y="67"
      />
      <path
        d="M226.756 156.188L226.71 164.895L225.456 166.241L219.51 165.175L216.258 163.884L214.028 167.868L210.963 169.214L204.924 163.772L205.017 153.826H202.601V149.717L205.063 149.042L209.894 148.929L209.941 147.239L219.556 147.296L221.972 146.451V144.084H226.71L226.756 156.188Z"
        stroke={element.config.stroke}
        data-name="Cotton"
        fill={assignColor('Cotton')}
        data-x="226"
        data-y="156"
      />
      <path
        d="M393.101 49.8961H382.138L372.151 49.8381L372.476 44.8301L372.337 29.7711L372.615 20.4561L390.36 20.6301L390.406 30.522L393.101 49.8961Z"
        stroke={element.config.stroke}
        data-name="Delaware"
        fill={assignColor('Delaware')}
        data-x="393"
        data-y="49"
      />
      <path
        d="M248.682 134.265H253.559L253.745 144.084L253.606 156.3L234.003 156.356L226.756 156.188L226.71 144.084L226.756 134.208L229.172 134.152L248.682 134.265Z"
        stroke={element.config.stroke}
        data-name="Stephens"
        fill={assignColor('Stephens')}
        data-x="248"
        data-y="134"
      />
      <path
        d="M317.198 80.0588V84.8008H322.029L322.076 94.8958L327.139 94.9528L327.092 99.7918H305.725L305.492 90.1078L303.077 91.8748L297.131 93.4708L297.177 90.1078L297.27 79.9448L317.198 80.0588Z"
        stroke={element.config.stroke}
        data-name="Okfuskee"
        fill={assignColor('Okfuskee')}
        data-x="317"
        data-y="80"
      />
      <path
        d="M281.105 168.541V171.737H282.731L282.684 174.986L280.037 176.386L280.269 179.464L277.389 182.876L275.391 183.938L275.531 187.514L274.044 188.52L270.839 185.838L270.328 182.82L271.908 181.478L271.397 178.849L269.585 177.505L268.006 179.968H265.172L261.967 182.82L258.855 182.373L258.669 178.289L256.253 177.282L253.698 178.233L253.791 168.541L273.162 168.429L281.105 168.541Z"
        stroke={element.config.stroke}
        data-name="Love"
        fill={assignColor('Love')}
        data-x="281"
        data-y="168"
      />
      <path
        d="M297.177 49.953L297.27 62.479L273.115 62.4211L270.421 62.2491L266.566 60.5281L265.915 58.69L263.221 60.1261L263.175 50.1261L273.115 50.0691L273.162 45.1181L283.102 45.0601L288.026 45.1181L288.073 50.0691L297.177 49.953Z"
        stroke={element.config.stroke}
        data-name="Payne"
        fill={assignColor('Payne')}
        data-x="297"
        data-y="49"
      />
      <path
        d="M369.782 134.378L348.785 134.321L349.111 114.622H356.45V112.977L375.96 113.033V119.555H372.615V124.595L369.875 124.652L369.782 134.378Z"
        stroke={element.config.stroke}
        data-name="Latimer"
        fill={assignColor('Latimer')}
        data-x="369"
        data-y="134"
      />
      <path
        d="M372.615 20.4559L372.337 29.771L357.379 29.713L357.426 24.6819H352.641L352.595 4.61695L353.756 1.41895L371.082 1.47795L372.662 4.20995L372.615 20.4559Z"
        stroke={element.config.stroke}
        data-name="Craig"
        fill={assignColor('Craig')}
        data-x="372"
        data-y="20"
      />
      <path
        d="M302.101 144.196L302.241 149.042L307.211 149.323V163.716H305.028V166.073H298.943L297.27 163.267L294.901 162.818L282.731 162.762V153.882H285.286L285.193 144.027L287.562 144.084L302.101 144.196Z"
        stroke={element.config.stroke}
        data-name="Johnston"
        fill={assignColor('Johnston')}
        data-x="302"
        data-y="144"
      />
      <path
        d="M305.725 99.7919L305.817 109.684H303.309L303.17 121.481L300.94 123.35L300.15 120.858L294.204 122.67L292.207 124.369L290.07 121.877L290.024 93.0149L292.114 92.1029L296.016 94.0409L297.131 93.4709L303.077 91.8749L305.492 90.1079L305.725 99.7919Z"
        stroke={element.config.stroke}
        data-name="Seminole"
        fill={assignColor('Seminole')}
        data-x="305"
        data-y="99"
      />
      <path
        d="M372.151 49.8379H367.134V54.8409L363 54.8989L352.176 54.7839L352.455 29.7129H357.379L372.337 29.7709L372.476 44.8299L372.151 49.8379Z"
        stroke={element.config.stroke}
        data-name="Mayes"
        fill={assignColor('Mayes')}
        data-x="372"
        data-y="49"
      />
      <path
        d="M273.069 89.822V95.009L248.496 94.896L248.356 74.97H273.069V89.822Z"
        stroke={element.config.stroke}
        data-name="Oklahoma"
        fill={assignColor('Oklahoma')}
        data-x="273"
        data-y="89"
      />
      <path
        d="M145.512 114.679V119.555L152.944 119.441L153.455 129.291H155.127L155.917 131.835L156.01 144.027H147.556L146.58 142.505L142.771 140.023L140.356 141.264V114.565L145.512 114.679Z"
        stroke={element.config.stroke}
        data-name="Harmon"
        fill={assignColor('Harmon')}
        data-x="145"
        data-y="114"
      />
      <path
        d="M381.581 79.831L381.627 64.888H382.092L382.138 49.896H393.101L397.095 79.888L381.581 79.831Z"
        stroke={element.config.stroke}
        data-name="Adair"
        fill={assignColor('Adair')}
        data-x="381"
        data-y="79"
      />
      <path
        d="M353.756 1.41895L352.595 4.61695L352.641 24.6819H335.036V4.67495L336.058 1.41895H353.756Z"
        stroke={element.config.stroke}
        data-name="Nowata"
        fill={assignColor('Nowata')}
        data-x="353"
        data-y="1"
      />
      <path
        d="M282.824 136.693L282.777 139.29H287.608L287.562 144.084L285.193 144.027L285.286 153.882H282.731L278.364 153.826L277.946 151.35H263.36L263.453 143.971L273.022 144.084L271.629 140.757L273.069 136.75L282.824 136.693Z"
        stroke={element.config.stroke}
        data-name="Murray"
        fill={assignColor('Murray')}
        data-x="282"
        data-y="136"
      />
      <path
        d="M321.89 129.348L321.843 134.321L321.983 144.084H319.335L319.289 149.267L307.211 149.323L302.241 149.042L302.101 144.196L302.287 134.378L307.257 134.434V129.348H321.89Z"
        stroke={element.config.stroke}
        data-name="Coal"
        fill={assignColor('Coal')}
        data-x="321"
        data-y="129"
      />
      <path
        d="M298.943 166.073L300.661 168.653L296.899 172.017L298.432 174.09L298.803 178.457L294.808 177.617L293.275 181.869L290.581 182.205L289.745 180.303L285.332 179.912L283.706 175.154L282.684 174.986L282.731 171.737H281.105V168.541L281.291 162.705L282.731 162.762L294.901 162.818L297.27 163.267L298.943 166.073Z"
        stroke={element.config.stroke}
        data-name="Marshall"
        fill={assignColor('Marshall')}
        data-x="298"
        data-y="166"
      />
      <path
        d="M390.36 20.6299L372.615 20.4559L372.662 4.20995L371.082 1.47795L390.36 1.41895V20.6299Z"
        stroke={element.config.stroke}
        data-name="Ottawa"
        fill={assignColor('Ottawa')}
        data-x="390"
        data-y="20"
      />
      <path
        d="M335.036 24.6819L334.85 34.7379L326.21 34.681V1.41895H336.058L335.036 4.67495V24.6819Z"
        stroke={element.config.stroke}
        data-name="Washington"
        fill={assignColor('Washington')}
        data-x="335"
        data-y="24"
      />

      {renderLabels()}
    </svg>
  );
};

MapOklahoma.propTypes = ElementPropTypes;
MapOklahomaPresent.propTypes = {
  element: PropTypes.object.isRequired,
};
MapOklahomaContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default MapOklahoma;
