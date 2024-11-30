import { ElementPropTypes } from '@/lib/prop-types.js';
import useMapElement from '@/lib/design/use-map-element.jsx';
import PropTypes from 'prop-types';

const MapKansas = ({ element }) => {
  return <MapKansasContent element={element} />;
};

export const MapKansasPresent = ({ element }) => {
  return <MapKansasContent element={element} />;
};

export const MapKansasPreview = () => {
  return <MapKansasContent element={{ config: { data: [], fill: '#f9fafb', stroke: '#f9fafb' } }} present={false} />;
};

const MapKansasContent = ({ element, present = true }) => {
  const { el, assignColor, renderLabels, handleMouseMove, handleMouseLeave, renderTooltip } = useMapElement(element);

  return (
    <svg ref={el} width="100%" viewBox="0 0 400 208" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M74.0099 121.133L97.4909 121.269H98.4539V138.949H75.0799V150.542L75.6679 156.904L52.2939 156.836L51.5989 150.542L51.5459 121.065L74.0099 121.133Z"
        fill={assignColor('Finney')}
        stroke={element.config.stroke}
        data-name="Finney"
        data-x="74"
        data-y="121"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Ajlun')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M262.821 133.04L279.616 133.176L296.518 133.108L296.411 165.554V174.391L262.981 174.458L262.874 144.918L262.821 133.04Z"
        fill={assignColor('Butler')}
        stroke={element.config.stroke}
        data-name="Butler"
        data-x="262"
        data-y="133"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Butler')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M233.51 127.192V144.986L233.724 156.972L227.894 157.107L192.592 156.972L192.325 150.813L192.218 127.192H221.743H233.51Z"
        fill={assignColor('Reno')}
        stroke={element.config.stroke}
        data-name="Reno"
        data-x="233"
        data-y="127"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Reno')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M326.738 127.328L326.685 136.233V157.039L326.632 165.891L296.411 165.554L296.518 133.108H305.557L305.397 127.192L326.738 127.328Z"
        fill={assignColor('Greenwood')}
        stroke={element.config.stroke}
        data-name="Greenwood"
        data-x="326"
        data-y="127"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Greenwood')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M192.645 174.727L192.592 180.587H198.85L198.957 206.438L164.03 206.371V180.587H163.334V174.795L192.645 174.727Z"
        fill={assignColor('Barber')}
        stroke={element.config.stroke}
        data-name="Barber"
        data-x="192"
        data-y="174"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Barber')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M263.195 206.438H228.161L227.894 180.453V174.525L262.981 174.458L263.195 206.438Z"
        fill={assignColor('Sumner')}
        stroke={element.config.stroke}
        data-name="Sumner"
        data-x="263"
        data-y="206"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Sumner')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M311.709 31.5571H322.566L322.727 55.6421L322.62 62.1971L320.16 57.4371L318.234 57.9201L314.222 56.1951L311.281 56.6091L309.89 58.5411L307.536 57.6441L306.092 59.9211L303.685 58.8171L299.781 57.5061L297.802 59.2311L295.502 58.1961L294.325 54.0541L291.544 51.8441L285.66 42.5761L286.462 38.9751L288.548 38.0751L290.581 34.1931L293.469 31.5571H311.709Z"
        fill={assignColor('Pottawatomie')}
        stroke={element.config.stroke}
        data-name="Pottawatomie"
        data-x="311"
        data-y="31"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Pottawatomie')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M303.685 58.817L303.578 67.64L297.588 67.778L297.695 65.849L286.783 65.712L284.483 64.747H278.974L279.081 55.573L273.091 55.504L272.984 31.488H281.435L293.469 31.557L290.581 34.193L288.548 38.075L286.462 38.975L285.66 42.576L291.544 51.844L294.325 54.054L295.502 58.196L297.802 59.231L299.781 57.506L303.685 58.817Z"
        fill={assignColor('Riley')}
        stroke={element.config.stroke}
        data-name="Riley"
        data-x="303"
        data-y="58"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Riley')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M98.4541 144.783L133.702 144.851L134.237 156.972L134.344 174.93L104.873 174.525L98.9891 174.458L99.0421 150.678L98.4541 144.783Z"
        fill={assignColor('Ford')}
        stroke={element.config.stroke}
        data-name="Ford"
        data-x="98"
        data-y="144"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Ford')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M296.358 186.104L296.304 206.371L263.195 206.438L262.981 174.458L296.411 174.391L296.358 186.104Z"
        fill={assignColor('Cowley')}
        stroke={element.config.stroke}
        data-name="Cowley"
        data-x="296"
        data-y="186"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Cowley')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M70.9621 31.418L36.2481 31.349L35.0181 31.418L35.1251 1L71.0151 1.14L70.9621 31.418Z"
        fill={assignColor('Rawlins')}
        stroke={element.config.stroke}
        data-name="Rawlins"
        data-x="70"
        data-y="31"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Rawlins')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M67.164 61.5069L66.897 91.0679L50.208 91.2739H31.167L31.541 61.4379L36.195 61.3689L67.164 61.5069Z"
        fill={assignColor('Logan')}
        stroke={element.config.stroke}
        data-name="Logan"
        data-x="67"
        data-y="61"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Logan')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M70.9618 31.4181H71.9778L72.0848 61.4381L67.1638 61.5071L36.1948 61.3691L36.2478 31.3491L70.9618 31.4181Z"
        fill={assignColor('Thomas')}
        stroke={element.config.stroke}
        data-name="Thomas"
        data-x="70"
        data-y="31"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Thomas')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M72.085 61.438L101.824 61.576H102.626L102.359 91.479L97.331 91.411L79.734 91.274L73.796 90.999L66.897 91.068L67.164 61.507L72.085 61.438Z"
        fill={assignColor('Gove')}
        stroke={element.config.stroke}
        data-name="Gove"
        data-x="72"
        data-y="61"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Gove')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M102.359 91.4789L132.098 91.5479H132.793V115.271V121.269H98.4541H97.4911L97.3311 91.4109L102.359 91.4789Z"
        fill={assignColor('Ness')}
        stroke={element.config.stroke}
        data-name="Ness"
        data-x="102"
        data-y="91"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Ness')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M279.616 133.176L262.821 133.04V127.124L251.161 127.192V97.438L274.749 97.506V103.321H280.632V115.271H279.456L279.616 133.176Z"
        fill={assignColor('Marion')}
        stroke={element.config.stroke}
        data-name="Marion"
        data-x="279"
        data-y="133"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Marion')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M262.981 174.458L227.894 174.525V157.107L233.724 156.972L233.51 144.986L262.874 144.918L262.981 174.458Z"
        fill={assignColor('Sedgwick')}
        stroke={element.config.stroke}
        data-name="Sedgwick"
        data-x="262"
        data-y="174"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Sedgwick')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M1.05322 31.3491L35.0182 31.4181L36.2482 31.3491L36.1952 61.3691L31.5412 61.4381H1.16022L1.05322 31.3491Z"
        fill={assignColor('Sherman')}
        stroke={element.config.stroke}
        data-name="Sherman"
        data-x="1"
        data-y="31"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Sherman')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M35.018 31.418L1.053 31.349L1 1.07L35.125 1L35.018 31.418Z"
        fill={assignColor('Cheyenne')}
        stroke={element.config.stroke}
        data-name="Cheyenne"
        data-x="35"
        data-y="31"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Cheyenne')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M28.9201 156.904L1.32109 156.769L1.26709 121.133H26.7811H28.1721L28.2251 150.678L28.9201 156.904Z"
        fill={assignColor('Hamilton')}
        stroke={element.config.stroke}
        data-name="Hamilton"
        data-x="28"
        data-y="156"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Hamilton')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M105.782 206.572V180.52L104.873 174.525L134.344 174.93L134.986 180.722L135.2 206.438L105.782 206.572Z"
        fill={assignColor('Clark')}
        stroke={element.config.stroke}
        data-name="Clark"
        data-x="105"
        data-y="206"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Clark')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M104.873 174.525L105.782 180.52V206.572L76.6852 206.505L76.6312 180.385H75.7222V174.458H98.9892L104.873 174.525Z"
        fill={assignColor('Meade')}
        stroke={element.config.stroke}
        data-name="Meade"
        data-x="104"
        data-y="174"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Meade')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M322.62 62.1971L327.594 64.5401L327.38 79.5401L327.327 88.5311H305.664H303.685V82.5621H297.748V79.4711L297.588 67.7781L303.578 67.6401L303.685 58.8171L306.092 59.9211L307.536 57.6441L309.89 58.5411L311.281 56.6091L314.222 56.1951L318.234 57.9201L320.16 57.4371L322.62 62.1971Z"
        fill={assignColor('Wabaunsee')}
        stroke={element.config.stroke}
        data-name="Wabaunsee"
        data-x="322"
        data-y="62"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Wabaunsee')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M276.888 79.471L276.781 83.523L274.909 83.454L274.749 97.506L251.161 97.438L251.054 73.422L251.161 61.438L273.037 61.507L272.93 72.183L274.856 72.459L274.909 79.471H276.888Z"
        fill={assignColor('Dickinson')}
        stroke={element.config.stroke}
        data-name="Dickinson"
        data-x="276"
        data-y="79"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Dickinson')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M221.315 1.14007V25.3781V31.4181L191.522 31.4881H190.452L190.559 1.07007L221.315 1.14007Z"
        fill={assignColor('Jewell')}
        stroke={element.config.stroke}
        data-name="Jewell"
        data-x="221"
        data-y="1"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Jewell')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M31.5412 61.438L31.1672 91.274H26.6742L1.21416 91.616L1.16016 61.438H31.5412Z"
        fill={assignColor('Wallace')}
        stroke={element.config.stroke}
        data-name="Wallace"
        data-x="31"
        data-y="61"
      />
      <path
        d="M311.815 1.27996L311.709 31.557H293.469L281.435 31.488L281.381 1.20996L311.815 1.27996Z"
        fill={assignColor('Marshall')}
        stroke={element.config.stroke}
        data-name="Marshall"
        data-x="311"
        data-y="1"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Marshall')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M281.435 31.4881H272.984L251.375 31.4181V25.4471L251.321 1.07007L281.381 1.21007L281.435 31.4881Z"
        fill={assignColor('Washington')}
        stroke={element.config.stroke}
        data-name="Washington"
        data-x="281"
        data-y="31"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Washington')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M162.104 61.507L161.944 91.479L132.793 91.548H132.098L132.419 61.507L161.462 61.438L162.104 61.507Z"
        fill={assignColor('Ellis')}
        stroke={element.config.stroke}
        data-name="Ellis"
        data-x="162"
        data-y="61"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Ellis')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M132.419 61.5071L132.098 91.5481L102.359 91.4791L102.626 61.5761L131.723 61.5071H132.419Z"
        fill={assignColor('Trego')}
        stroke={element.config.stroke}
        data-name="Trego"
        data-x="132"
        data-y="61"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Trego')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M190.559 1.07007L190.452 31.4881L161.73 31.3491L160.5 31.4181V1.21007L190.559 1.07007Z"
        fill={assignColor('Smith')}
        stroke={element.config.stroke}
        data-name="Smith"
        data-x="190"
        data-y="1"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Smith')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M101.075 1.13989L100.915 31.4179H71.9779H70.9619L71.0149 1.13989H101.075Z"
        fill={assignColor('Decatur')}
        stroke={element.config.stroke}
        data-name="Decatur"
        data-x="101"
        data-y="1"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Decatur')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M161.73 31.3491L190.452 31.4881H191.522L191.308 55.5041V61.5071H162.104L161.462 61.4381L161.73 31.3491Z"
        fill={assignColor('Osborne')}
        stroke={element.config.stroke}
        data-name="Osborne"
        data-x="161"
        data-y="31"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Osborne')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M130.493 31.488H131.884L131.723 61.507L102.626 61.576H101.824L101.877 31.488H130.493Z"
        fill={assignColor('Graham')}
        stroke={element.config.stroke}
        data-name="Graham"
        data-x="130"
        data-y="31"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Graham')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M160.5 1.20989V31.4179L131.884 31.4879H130.493L130.6 1.13989L160.5 1.20989Z"
        fill={assignColor('Phillips')}
        stroke={element.config.stroke}
        data-name="Phillips"
        data-x="160"
        data-y="1"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Phillips')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M160.5 31.4181L161.73 31.3491L161.462 61.4381L132.419 61.5071H131.723L131.884 31.4881L160.5 31.4181Z"
        fill={assignColor('Rooks')}
        stroke={element.config.stroke}
        data-name="Rooks"
        data-x="160"
        data-y="31"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Rooks')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M100.915 31.418L101.877 31.488L101.824 61.576L72.085 61.438L71.978 31.418H100.915Z"
        fill={assignColor('Sheridan')}
        stroke={element.config.stroke}
        data-name="Sheridan"
        data-x="100"
        data-y="31"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Sheridan')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M130.6 1.13989L130.493 31.4879H101.877L100.915 31.4179L101.075 1.13989H130.6Z"
        fill={assignColor('Norton')}
        stroke={element.config.stroke}
        data-name="Norton"
        data-x="130"
        data-y="1"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Norton')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M162.104 61.5071H191.308H191.629V79.4711L191.522 91.4791H162.318H161.944L162.104 61.5071Z"
        fill={assignColor('Russell')}
        stroke={element.config.stroke}
        data-name="Russell"
        data-x="162"
        data-y="61"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Russell')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M233.51 127.192H221.743L221.529 103.389V97.438H251.161V127.192H233.51Z"
        fill={assignColor('McPherson')}
        stroke={element.config.stroke}
        data-name="McPherson"
        data-x="233"
        data-y="51"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'McPherson')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M191.79 103.526V121.337L168.683 121.269L162.372 121.201L162.318 115.339V91.479H191.522L191.79 103.526Z"
        fill={assignColor('Barton')}
        stroke={element.config.stroke}
        data-name="Barton"
        data-x="191"
        data-y="103"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Barton')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M192.325 150.813H163.334L162.906 150.745L162.853 138.949L168.683 139.017V121.269L191.79 121.337L192.218 127.192L192.325 150.813Z"
        fill={assignColor('Stafford')}
        stroke={element.config.stroke}
        data-name="Stafford"
        data-x="192"
        data-y="150"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Stafford')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M52.2939 156.836L28.9199 156.904L28.2249 150.678L28.1719 121.133L50.4219 121.065H51.5459L51.5989 150.542L52.2939 156.836Z"
        fill={assignColor('Kearny')}
        stroke={element.config.stroke}
        data-name="Kearny"
        data-x="52"
        data-y="156"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Kearny')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M98.9891 174.458H75.7221L75.6681 156.904L75.0801 150.542V138.949H98.4541V144.783L99.0421 150.678L98.9891 174.458Z"
        fill={assignColor('Gray')}
        stroke={element.config.stroke}
        data-name="Gray"
        data-x="98"
        data-y="174"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Gray')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M168.683 121.269V139.017L162.853 138.949H145.363L145.416 133.108H133.649L133.595 121.269H132.793V115.271L162.318 115.339L162.372 121.201L168.683 121.269Z"
        fill={assignColor('Pawnee')}
        stroke={element.config.stroke}
        data-name="Pawnee"
        data-x="168"
        data-y="121"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Pawnee')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M326.738 127.328L305.397 127.192L305.611 103.389L305.664 88.531H327.327L327.113 91.479L327.166 109.334L327.113 121.269L326.738 127.328Z"
        fill={assignColor('Lyon')}
        stroke={element.config.stroke}
        data-name="Lyon"
        data-x="326"
        data-y="127"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Lyon')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M198.85 180.587H192.592L192.645 174.727L192.592 156.972L227.894 157.107V174.525V180.453L198.85 180.587Z"
        fill={assignColor('Kingman')}
        stroke={element.config.stroke}
        data-name="Kingman"
        data-x="198"
        data-y="180"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Kingman')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M133.702 144.851L98.4541 144.783V138.949V121.269H132.793H133.595L133.649 133.108L133.702 144.851Z"
        fill={assignColor('Hodgeman')}
        stroke={element.config.stroke}
        data-name="Hodgeman"
        data-x="133"
        data-y="144"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Hodgeman')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M305.397 127.192L305.557 133.108H296.518L279.616 133.176L279.456 115.271H280.632V103.321L305.611 103.389L305.397 127.192Z"
        fill={assignColor('Chase')}
        stroke={element.config.stroke}
        data-name="Chase"
        data-x="305"
        data-y="127"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Chase')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M198.957 206.438L198.85 180.587L227.894 180.453L228.161 206.438H198.957Z"
        fill={assignColor('Harper')}
        stroke={element.config.stroke}
        data-name="Harper"
        data-x="198"
        data-y="206"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Harper')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M164.03 206.371L135.2 206.438L134.986 180.722L163.334 180.587H164.03V206.371Z"
        fill={assignColor('Comanche')}
        stroke={element.config.stroke}
        data-name="Comanche"
        data-x="164"
        data-y="206"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Comanche')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M26.7809 121.133H1.26687L1.21387 91.6159L26.6739 91.2739L26.7809 121.133Z"
        fill={assignColor('Greeley')}
        stroke={element.config.stroke}
        data-name="Greeley"
        data-x="26"
        data-y="121"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Greeley')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M335.885 25.447H347.866L347.492 41.676H346.475V55.711L322.727 55.642L322.566 31.557L335.831 31.488L335.885 25.447Z"
        fill={assignColor('Jackson')}
        stroke={element.config.stroke}
        data-name="Jackson"
        data-x="335"
        data-y="25"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Jackson')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M305.664 88.531L305.611 103.389L280.632 103.321H274.749V97.506L274.909 83.4539L276.781 83.5229L276.888 79.4709H297.748V82.562H303.685V88.531H305.664Z"
        fill={assignColor('Morris')}
        stroke={element.config.stroke}
        data-name="Morris"
        data-x="305"
        data-y="88"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Morris')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M335.992 1.20996L335.885 25.447L335.831 31.488L322.566 31.557H311.709L311.815 1.27996L335.992 1.20996Z"
        fill={assignColor('Nemaha')}
        stroke={element.config.stroke}
        data-name="Nemaha"
        data-x="335"
        data-y="1"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Nemaha')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M350.754 109.47L327.166 109.334L327.113 91.479L327.327 88.5311L327.38 79.54L351.182 79.609L351.236 88.6691L350.861 91.616L350.754 109.47Z"
        fill={assignColor('Osage')}
        stroke={element.config.stroke}
        data-name="Osage"
        data-x="350"
        data-y="109"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Osage')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M221.422 79.5399L221.529 97.438V103.389L191.79 103.526L191.522 91.479L191.629 79.4709L221.422 79.5399Z"
        fill={assignColor('Ellsworth')}
        stroke={element.config.stroke}
        data-name="Ellsworth"
        data-x="221"
        data-y="79"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Ellsworth')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M251.321 1.07007L251.375 25.4471L221.315 25.3781V1.14007L251.321 1.07007Z"
        fill={assignColor('Republic')}
        stroke={element.config.stroke}
        data-name="Republic"
        data-x="251"
        data-y="1"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Republic')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M221.315 55.5729L221.422 73.4909V79.5399L191.629 79.4709V61.5069H191.308V55.5039L221.315 55.5729Z"
        fill={assignColor('Lincoln')}
        stroke={element.config.stroke}
        data-name="Lincoln"
        data-x="221"
        data-y="55"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Lincoln')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M97.3309 91.411L97.4909 121.269L74.0099 121.133L73.7959 90.999L79.7339 91.274L97.3309 91.411Z"
        fill={assignColor('Lane')}
        stroke={element.config.stroke}
        data-name="Lane"
        data-x="97"
        data-y="91"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Lane')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M73.796 90.999L74.01 121.133L51.546 121.065H50.422L50.208 91.274L66.897 91.068L73.796 90.999Z"
        fill={assignColor('Scott')}
        stroke={element.config.stroke}
        data-name="Scott"
        data-x="73"
        data-y="91"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Scott')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M221.368 49.494L221.315 55.573L191.308 55.504L191.522 31.488L221.315 31.418L221.368 49.494Z"
        fill={assignColor('Mitchell')}
        stroke={element.config.stroke}
        data-name="Mitchell"
        data-x="221"
        data-y="49"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Mitchell')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M162.853 138.949L162.906 150.745L163.334 150.813V157.039L134.237 156.972L133.702 144.851L133.649 133.108H145.416L145.363 138.949H162.853Z"
        fill={assignColor('Edwards')}
        stroke={element.config.stroke}
        data-name="Edwards"
        data-x="162"
        data-y="138"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Edwards')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M251.375 31.4179L251.268 49.4939H221.368L221.315 31.4179V25.3779L251.375 25.4469V31.4179Z"
        fill={assignColor('Cloud')}
        stroke={element.config.stroke}
        data-name="Cloud"
        data-x="251"
        data-y="31"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Cloud')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M192.218 127.192L191.79 121.337V103.526L221.529 103.389L221.743 127.192H192.218Z"
        fill={assignColor('Rush')}
        stroke={element.config.stroke}
        data-name="Rush"
        data-x="192"
        data-y="127"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Rush')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M251.054 73.4219L221.422 73.4909L221.315 55.5729L221.368 49.4939H251.268L251.161 61.4379L251.054 73.4219Z"
        fill={assignColor('Ottawa')}
        stroke={element.config.stroke}
        data-name="Ottawa"
        data-x="251"
        data-y="73"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Ottawa')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M192.645 174.727L163.334 174.795V157.039V150.813H192.325L192.592 156.972L192.645 174.727Z"
        fill={assignColor('Kiowa')}
        stroke={element.config.stroke}
        data-name="Kiowa"
        data-x="192"
        data-y="174"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Kiowa')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M251.054 73.4219L251.161 97.4379H221.529L221.422 79.5399V73.4909L251.054 73.4219Z"
        fill={assignColor('Saline')}
        stroke={element.config.stroke}
        data-name="Saline"
        data-x="251"
        data-y="73"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Saline')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M50.4218 121.065L28.1718 121.133H26.7808L26.6738 91.2739H31.1668H50.2078L50.4218 121.065Z"
        fill={assignColor('Wichita')}
        stroke={element.config.stroke}
        data-name="Wichita"
        data-x="50"
        data-y="121"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Wichita')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M1.3208 180.385L27.2618 180.318L27.4228 206.773L1.3738 206.974L1.3208 180.385Z"
        fill={assignColor('Morton')}
        stroke={element.config.stroke}
        data-name="Morton"
        data-x="1"
        data-y="180"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Morton')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M27.4232 206.773L27.2622 180.318H29.0812L52.4012 180.385H53.4712L53.5252 206.572L27.4232 206.773Z"
        fill={assignColor('Stevens')}
        stroke={element.config.stroke}
        data-name="Stevens"
        data-x="27"
        data-y="206"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Stevens')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M162.318 91.479V115.339L132.793 115.271V91.548L161.944 91.479H162.318Z"
        fill={assignColor('Rice')}
        stroke={element.config.stroke}
        data-name="Rice"
        data-x="162"
        data-y="91"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Rice')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M163.334 180.587L134.986 180.722L134.344 174.93L134.237 156.972L163.334 157.039V174.795V180.587Z"
        fill={assignColor('Pratt')}
        stroke={element.config.stroke}
        data-name="Pratt"
        data-x="163"
        data-y="180"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Pratt')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M389.8 56.8851L383.382 56.7471L382.9 61.8521L382.954 71.2201L380.814 71.7711L376.696 70.9451L375.038 71.9081L373.38 73.6281L369.261 71.9771L367.977 67.6401L368.352 61.7141L368.459 41.7461H379.745L381.724 44.0991L383.489 43.6151L383.221 49.1481L387.233 53.5021L386.805 55.5041L389.8 56.8851Z"
        fill={assignColor('Leavenworth')}
        stroke={element.config.stroke}
        data-name="Leavenworth"
        data-x="389"
        data-y="56"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Leavenworth')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M351.075 66.6071L351.182 79.6091L327.38 79.5401L327.594 64.5401L322.62 62.1971L322.727 55.6421L346.475 55.7111L346.636 60.8861L346.101 66.1251L351.075 66.6071Z"
        fill={assignColor('Shawnee')}
        stroke={element.config.stroke}
        data-name="Shawnee"
        data-x="351"
        data-y="66"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Shawnee')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M350.219 136.437L326.685 136.233L326.738 127.328L327.113 121.269L327.166 109.334L350.754 109.47V112.474L351.289 122.018H350.647L350.219 136.437Z"
        fill={assignColor('Coffey')}
        stroke={element.config.stroke}
        data-name="Coffey"
        data-x="350"
        data-y="136"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Coffey')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M28.9198 156.904L29.0808 180.318H27.2618L1.3208 180.385V156.769L28.9198 156.904Z"
        fill={assignColor('Stanton')}
        stroke={element.config.stroke}
        data-name="Stanton"
        data-x="28"
        data-y="156"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Stanton')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M273.037 61.507L251.161 61.438L251.268 49.494L251.375 31.418L272.984 31.488L273.091 55.504L273.037 61.507Z"
        fill={assignColor('Clay')}
        stroke={element.config.stroke}
        data-name="Clay"
        data-x="273"
        data-y="61"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Clay')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M375.091 27.531L371.828 25.517L359.847 25.586V1.28003L367.015 5.46703V7.56003L369.956 7.76903L370.973 9.93003L375.466 10.766L377.07 8.39603L381.456 8.67503L381.189 11.115L383.756 12.787L384.986 19.608L383.756 20.443L380.6 18.982L379.638 22.598L376.054 25.239L375.091 27.531Z"
        fill={assignColor('Doniphan')}
        stroke={element.config.stroke}
        data-name="Doniphan"
        data-x="375"
        data-y="27"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Doniphan')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M326.525 180.453V186.306L296.358 186.104L296.411 174.391V165.554L326.632 165.891L326.525 180.453Z"
        fill={assignColor('Elk')}
        stroke={element.config.stroke}
        data-name="Elk"
        data-x="326"
        data-y="180"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Elk')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M350.166 180.655H373.38L374.075 183.481L374.182 206.505L350.006 206.371L350.166 180.655Z"
        fill={assignColor('Labette')}
        stroke={element.config.stroke}
        data-name="Labette"
        data-x="350"
        data-y="180"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Labette')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M398.626 136.572L398.572 161.095L373.326 161.028L373.38 157.107L373.914 151.152L373.807 136.437L398.626 136.572Z"
        fill={assignColor('Bourbon')}
        stroke={element.config.stroke}
        data-name="Bourbon"
        data-x="398"
        data-y="136"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Bourbon')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M350.006 206.371L326.418 206.438L326.525 186.306V180.453L349.899 180.655H350.166L350.006 206.371Z"
        fill={assignColor('Montgomery')}
        stroke={element.config.stroke}
        data-name="Montgomery"
        data-x="350"
        data-y="206"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Montgomery')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M326.418 206.438L296.304 206.371L296.358 186.104L326.525 186.306L326.418 206.438Z"
        fill={assignColor('Chautauqua')}
        stroke={element.config.stroke}
        data-name="Chautauqua"
        data-x="326"
        data-y="206"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Chautauqua')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M53.4712 180.385H75.7222H76.6312L76.6852 206.505L53.5252 206.572L53.4712 180.385Z"
        fill={assignColor('Seward')}
        stroke={element.config.stroke}
        data-name="Seward"
        data-x="53"
        data-y="180"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Seward')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M398.626 136.572L373.807 136.437L374.182 121.814L374.717 121.678L374.503 112.406L398.733 112.542L398.626 136.572Z"
        fill={assignColor('Linn')}
        stroke={element.config.stroke}
        data-name="Linn"
        data-x="398"
        data-y="136"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Linn')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M373.807 136.437H350.219L350.647 122.018H351.289L350.754 112.474L374.503 112.406L374.717 121.678L374.182 121.814L373.807 136.437Z"
        fill={assignColor('Somerset')}
        stroke={element.config.stroke}
        data-name="Somerset"
        data-x="373"
        data-y="136"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Somerset')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M297.588 67.7779L297.748 79.4709H276.888H274.909L274.856 72.4589L272.93 72.1829L273.037 61.5069L273.091 55.5039L279.081 55.5729L278.974 64.7469H284.483L286.783 65.7119L297.695 65.8489L297.588 67.7779Z"
        fill={assignColor('Anderson')}
        stroke={element.config.stroke}
        data-name="Anderson"
        data-x="96"
        data-y="92"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Anderson')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M367.977 67.64L362.736 67.571L359.419 68.329L354.766 65.849L351.075 66.607L346.101 66.125L346.636 60.886L346.475 55.711V41.676H347.492L368.459 41.746L368.352 61.714L367.977 67.64Z"
        fill={assignColor('Jefferson')}
        stroke={element.config.stroke}
        data-name="Jefferson"
        data-x="367"
        data-y="67"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Jefferson')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M398.733 112.542L374.503 112.406V91.6161L374.984 88.6001L398.893 88.6691L398.733 112.542Z"
        fill={assignColor('Miami')}
        stroke={element.config.stroke}
        data-name="Miami"
        data-x="398"
        data-y="112"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Miami')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M398.519 183.75L374.075 183.481L373.38 180.655L373.326 161.028L398.572 161.095L398.519 183.75Z"
        fill={assignColor('Crawford')}
        stroke={element.config.stroke}
        data-name="Crawford"
        data-x="398"
        data-y="183"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Crawford')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M374.503 112.406L350.754 112.474V109.47L350.861 91.6161L351.236 88.6691L374.984 88.6001L374.503 91.6161V112.406Z"
        fill={assignColor('Franklin')}
        stroke={element.config.stroke}
        data-name="Franklin"
        data-x="374"
        data-y="112"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Franklin')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M359.847 1.27996V25.586L347.866 25.447H335.885L335.992 1.20996L359.847 1.27996Z"
        fill={assignColor('Brown')}
        stroke={element.config.stroke}
        data-name="Brown"
        data-x="359"
        data-y="1"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Brown')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M374.182 206.505L374.075 183.481L398.519 183.75L398.412 206.438L374.182 206.505Z"
        fill={assignColor('Cherokee')}
        stroke={element.config.stroke}
        data-name="Cherokee"
        data-x="374"
        data-y="206"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Cherokee')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M373.326 161.028L373.38 180.655H350.166H349.899V157.107H373.38L373.326 161.028Z"
        fill={assignColor('Neosho')}
        stroke={element.config.stroke}
        data-name="Neosho"
        data-x="373"
        data-y="161"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Neosho')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M52.2939 156.836L52.4009 180.385L29.0809 180.318L28.9199 156.904L52.2939 156.836Z"
        fill={assignColor('Grant')}
        stroke={element.config.stroke}
        data-name="Grant"
        data-x="52"
        data-y="156"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Grant')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M349.899 157.107V180.655L326.525 180.453L326.632 165.891L326.685 157.039L349.899 157.107Z"
        fill={assignColor('Wilson')}
        stroke={element.config.stroke}
        data-name="Wilson"
        data-x="349"
        data-y="157"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Wilson')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M75.7219 174.458V180.385H53.4709H52.4009L52.2939 156.836L75.6679 156.904L75.7219 174.458Z"
        fill={assignColor('Haskell')}
        stroke={element.config.stroke}
        data-name="Haskell"
        data-x="75"
        data-y="174"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Haskell')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M367.977 67.6401L369.261 71.9771L373.38 73.6281L375.038 71.9081L374.984 88.6001L351.236 88.6691L351.182 79.6091L351.075 66.6071L354.766 65.8491L359.419 68.3291L362.736 67.5711L367.977 67.6401Z"
        fill={assignColor('Douglas')}
        stroke={element.config.stroke}
        data-name="Douglas"
        data-x="367"
        data-y="67"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Douglas')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M262.874 144.918L233.51 144.986V127.192H251.161L262.821 127.124V133.04L262.874 144.918Z"
        fill={assignColor('Harvey')}
        stroke={element.config.stroke}
        data-name="Harvey"
        data-x="262"
        data-y="144"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Harvey')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M399 67.64L398.893 88.669L374.984 88.6L375.038 71.908L376.696 70.945L380.814 71.771L382.954 71.22L385.361 66.814L388.516 67.503L399 67.64Z"
        fill={assignColor('Johnson')}
        stroke={element.config.stroke}
        data-name="Johnson"
        data-x="399"
        data-y="67"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Johnson')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M347.866 25.447L359.847 25.586L371.828 25.517L375.091 27.531L374.931 30.308L372.47 30.516L372.417 33.638L374.984 35.857L376.161 38.768L379.745 41.746H368.459L347.492 41.676L347.866 25.447Z"
        fill={assignColor('Atchison')}
        stroke={element.config.stroke}
        data-name="Atchison"
        data-x="347"
        data-y="25"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Atchison')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M373.38 157.107H349.899L350.273 151.152L350.219 136.437H373.807L373.914 151.152L373.38 157.107Z"
        fill={assignColor('Allen')}
        stroke={element.config.stroke}
        data-name="Allen"
        data-x="373"
        data-y="157"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Allen')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M350.219 136.437L350.273 151.152L349.899 157.107L326.685 157.039V136.233L350.219 136.437Z"
        fill={assignColor('Woodson')}
        stroke={element.config.stroke}
        data-name="Woodson"
        data-x="350"
        data-y="136"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Woodson')}
        onMouseLeave={handleMouseLeave}
      />
      <path
        d="M399 67.6401L388.516 67.5031L385.361 66.8141L382.954 71.2201L382.9 61.8521L383.382 56.7471L389.8 56.8851L391.458 58.8171L394.614 58.1271L399 62.4031V67.6401Z"
        fill={assignColor('Wyandotte')}
        stroke={element.config.stroke}
        data-name="Wyandotte"
        data-x="399"
        data-y="67"
        className="hover:brightness-90"
        onMouseMove={(e) => handleMouseMove(e, 'Wyandotte')}
        onMouseLeave={handleMouseLeave}
      />
      {present && renderTooltip()}
      {renderLabels()}
    </svg>
  );
};

MapKansas.propTypes = ElementPropTypes;
MapKansasPresent.propTypes = {
  element: PropTypes.object.isRequired,
};
MapKansasContent.propTypes = {
  element: PropTypes.object.isRequired,
  present: PropTypes.bool,
};

export default MapKansas;
