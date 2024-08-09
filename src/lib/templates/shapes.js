// prettier-ignore
const shapes = {
  rectangle: { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' },
  circle: { clipPath: 'ellipse(50% 50% at 50% 50%)' },
  triangle: { clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' },
  rhombus: { clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' },
  heart: {
    maskBorder: `radial-gradient(#000 69%,#0000 70%) 84.5%/50%`,
    mask: `radial-gradient(at 70% 31%,#000 29%,#0000 30%), radial-gradient(at 30% 31%,#000 29%,#0000 30%), linear-gradient(#000 0 0) bottom/100% 50% no-repeat`,
    clipPath: `polygon(-41% 0,50% 91%, 141% 0)`,
  },
  diamond: { clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' },
  'arrow-left': { clipPath: 'polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%)' },
  'arrow-right': { clipPath: 'polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)' },
  'arrow-up': { clipPath: 'polygon(20% 100%, 20% 40%, 0% 40%, 50% 0%, 100% 40%, 80% 40%, 80% 100%)' },
  'arrow-down': { clipPath: 'polygon(20% 0%, 20% 60%, 0% 60%, 50% 100%, 100% 60%, 80% 60%, 80% 0%)' },
  'arrow-up-down': {
    clipPath: 'polygon(50% 0%, 100% 40%, 75% 40%, 75% 60%, 100% 60%, 50% 100%, 0% 60%, 25% 60%, 25% 40%, 0% 40%)',
  },
  'four-pointed-star': {
    clipPath: 'polygon(50% 0%, 65% 35%, 100% 50%, 65% 65%, 50% 100%, 35% 65%, 0% 50%, 35% 35%)',
  },
  'five-pointed-star': {
    clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
  },
  'six-pointed-star': {
    clipPath: 'polygon(0 22%, 35% 24%, 50% 0, 65% 24%, 100% 22%, 75% 50%, 100% 78%, 65% 76%, 50% 100%, 35% 76%, 0 78%, 25% 50%)',
  },
  'eight-pointed-star': {
    clipPath: 'polygon(50% 0%, 60% 25%, 90% 25%, 75% 45%, 85% 75%, 50% 60%, 15% 75%, 25% 45%, 10% 25%, 40% 25%)',
  },
  parallelogram: { clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)' },
  trapeziod: { clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)' },
  pentagon: { clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' },
  hexagon: { clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' },
  heptagon: { clipPath: 'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)' },
  octagon: { clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' },
  'chevron-left': { clipPath: 'polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%)' },
  'chevron-right': { clipPath: 'polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)' },
  close: {
    clipPath: 'polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)',
  },
  message: { clipPath: 'polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)' },
  cross: {
    clipPath: 'polygon(10% 25%, 35% 25%, 35% 0%, 65% 0%, 65% 25%, 90% 25%, 90% 50%, 65% 50%, 65% 100%, 35% 100%, 35% 50%, 10% 50%)',
  },
  'book-mark': { clipPath: 'polygon(0 100%, 50% 80%, 100% 100%, 100% 0, 48% 0, 0 0)' },
  rabbet: {
    clipPath: 'polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)',
  },
};

export default shapes;
