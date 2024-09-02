import PropTypes from 'prop-types';
import { cn } from '@/lib/utils.js';

const SvgText = ({ x, y, transform, width, height = 'min-content', style, children, className }) => {
  return (
    <switch>
      <foreignObject x={x} y={y} transform={transform} width={width} height={height}>
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{ ...style }}
          className={cn('text-[8px] leading-[1.1]', className)}
        >
          {children}
        </div>
      </foreignObject>
      <text x="20" y="20">
        Your SVG viewer cannot display html.
      </text>
    </switch>
  );
};

SvgText.propTypes = {
  x: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  y: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  style: PropTypes.object,
  children: PropTypes.any.isRequired,
  transform: PropTypes.string,
  className: PropTypes.string,
};

export default SvgText;

