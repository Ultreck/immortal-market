const shapes = {
  rectangle: {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
  },
  circle: {
    clipPath: 'url(#circle-clip)',
  },
  triangle: {
    clipPath: 'url(#triangle-clip)',
  },
  rhombus: {
    clipPath: 'url(#rhombus-clip)',
  },
  heart: {
    clipPath: 'url(#heart-clip)',
  },
  'arrow-left': {
    clipPath: 'url(#arrow-left-clip)',
  },
  'arrow-right': {
    clipPath: 'url(#arrow-right-clip)',
  },
  'arrow-up': {
    clipPath: 'url(#arrow-up-clip)',
  },
  'arrow-down': {
    clipPath: 'url(#arrow-down-clip)',
  },
  'four-pointed-star': {
    clipPath: 'url(#four-pointed-star-clip)',
  },
  'five-pointed-star': {
    clipPath: 'url(#five-pointed-star-clip)',
  },
  'eight-pointed-star': {
    clipPath: 'url(#inside-eight-pointed-star-clip)',
  },
  'arrow-up-down': {
    clipPath: 'url(#arrow-up-down-clip)',
  },
  'six-pointed-star': {
    clipPath: 'url(#six-pointed-star-clip)',
  },
  parallelogram: {
    clipPath: 'url(#parallelogram-clip)',
  },
  'trapezoid-up': {
    clipPath: 'url(#trapezoid-up-clip)',
  },
  'trapezoid-down': {
    clipPath: 'url(#trapezoid-down-clip)',
  },
  pentagon: {
    clipPath: 'url(#pentagon-clip)',
  },
  hexagon: {
    clipPath: 'url(#hexagon-clip)',
  },
  heptagon: {
    clipPath: 'url(#heptagon-clip)',
  },
  octagon: {
    clipPath: 'url(#octagon-clip)',
  },
  'chevron-left': {
    clipPath: 'url(#chevron-left-clip)',
  },
  'chevron-right': {
    clipPath: 'url(#chevron-right-clip)',
  },
  close: {
    clipPath: 'url(#close-clip)',
  },
  message: {
    clipPath: 'url(#message-clip)',
  },
  plus: {
    clipPath: 'url(#plus-clip)',
  },
  bookmark: {
    clipPath: 'url(#bookmark-clip)',
  },
  banner: {
    clipPath: 'url(#banner-clip)',
  },
  'banner-2': {
    clipPath: 'url(#banner-2-clip)',
  },
  'arrow-concave': {
    clipPath: 'url(#arrow-concave-clip)',
  },
  'arrow-convex': {
    clipPath: 'url(#arrow-convex-clip)',
  },
  rabbet: {
    clipPath: 'url(#rabbet-clip)',
  },
  diamond: {
    clipPath: 'url(#diamond-clip)',
  },
  map: {
    clipPath: 'url(#map-clip)',
  },
  cursor: {
    clipPath: 'url(#cursor-clip)',
  },
  flag: {
    clipPath: 'url(#flag-clip)',
  },
  'left-point': {
    clipPath: 'url(#left-point-clip)',
  },
  'right-point': {
    clipPath: 'url(#right-point-clip)',
  },
  home: {
    clipPath: 'url(#home-clip)',
  },
  bevel: {
    clipPath: 'url(#bevel-clip)',
  },
  crown: {
    clipPath: 'url(#crown-clip)',
  },
  rewind: {
    clipPath: 'url(#rewind-clip)',
  },
  forward: {
    clipPath: 'url(#forward-clip)',
  },
  'envelope-open': {
    clipPath: 'url(#envelope-open-clip)',
  },
  'envelope-close': {
    clipPath: 'url(#envelope-close-clip)',
  },
  calendar: {
    clipPath: 'url(#calendar-clip)',
  },
  display: {
    clipPath: 'url(#display-clip)',
  },
  'wave-high-right': {
    clipPath: 'url(#wave-high-right-clip)',
  },
  'wave-high-left': {
    clipPath: 'url(#wave-high-left-clip)',
  },
  'wave-higher-left': {
    clipPath: 'url(#wave-higher-left-clip)',
  },
  'chat-bubble': {
    clipPath: 'url(#chat-bubble-clip)',
  },
  cloud: {
    clipPath: 'url(#cloud-clip)',
  },
  'bidirectional-arrow': {
    clipPath: 'url(#bidirectional-arrow-clip)',
  },
  'stellated-polygon': {
    clipPath: 'url(#stellated-polygon-clip)',
  },
  'half-round-rectangle': {
    clipPath: 'url(#half-round-rectangle-clip)',
  },
  'inverted-triangle': {
    clipPath: 'url(#inverted-triangle-clip)',
  },
  'letter-a-clip': {
    clipPath: 'url(#letter-a-clip)',
  },
  'letter-b-clip': {
    clipPath: 'url(#letter-b-clip)',
  },
  'letter-c-clip': {
    clipPath: 'url(#letter-c-clip)',
  },
  'letter-d-clip': {
    clipPath: 'url(#letter-d-clip)',
  },
  'letter-e-clip': {
    clipPath: 'url(#letter-e-clip)',
  },
  'letter-f-clip': {
    clipPath: 'url(#letter-f-clip)',
  },
  'letter-g-clip': {
    clipPath: 'url(#letter-g-clip)',
  },
  'letter-h-clip': {
    clipPath: 'url(#letter-h-clip)',
  },
  'letter-i-clip': {
    clipPath: 'url(#letter-i-clip)',
  },
  'letter-j-clip': {
    clipPath: 'url(#letter-j-clip)',
  },
  'letter-k-clip': {
    clipPath: 'url(#letter-k-clip)',
  },
  'letter-l-clip': {
    clipPath: 'url(#letter-l-clip)',
  },
  'letter-m-clip': {
    clipPath: 'url(#letter-m-clip)',
  },
  'letter-n-clip': {
    clipPath: 'url(#letter-n-clip)',
  },
  'letter-o-clip': {
    clipPath: 'url(#letter-o-clip)',
  },
  'letter-p-clip': {
    clipPath: 'url(#letter-p-clip)',
  },
  'letter-q-clip': {
    clipPath: 'url(#letter-q-clip)',
  },
  'letter-r-clip': {
    clipPath: 'url(#letter-r-clip)',
  },
  'letter-s-clip': {
    clipPath: 'url(#letter-s-clip)',
  },
  'letter-t-clip': {
    clipPath: 'url(#letter-t-clip)',
  },
  'letter-u-clip': {
    clipPath: 'url(#letter-u-clip)',
  },
  'letter-v-clip': {
    clipPath: 'url(#letter-v-clip)',
  },
  'letter-w-clip': {
    clipPath: 'url(#letter-w-clip)',
  },
  'letter-x-clip': {
    clipPath: 'url(#letter-x-clip)',
  },
  'letter-y-clip': {
    clipPath: 'url(#letter-y-clip)',
  },
  'letter-z-clip': {
    clipPath: 'url(#letter-z-clip)',
  },
  'number-0-clip': {
    clipPath: 'url(#number-0-clip)',
  },
  'number-1-clip': {
    clipPath: 'url(#number-1-clip)',
  },
  'number-2-clip': {
    clipPath: 'url(#number-2-clip)',
  },
  'number-3-clip': {
    clipPath: 'url(#number-3-clip)',
  },
  'number-4-clip': {
    clipPath: 'url(#number-4-clip)',
  },
  'number-5-clip': {
    clipPath: 'url(#number-5-clip)',
  },
  'number-6-clip': {
    clipPath: 'url(#number-6-clip)',
  },
  'number-7-clip': {
    clipPath: 'url(#number-7-clip)',
  },
  'number-8-clip': {
    clipPath: 'url(#number-8-clip)',
  },
  'number-9-clip': {
    clipPath: 'url(#number-9-clip)',
  },
};

export default shapes;
