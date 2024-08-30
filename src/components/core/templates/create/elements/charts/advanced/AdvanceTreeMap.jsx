import { Treemap } from 'recharts';
import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';

const AdvanceTreeMap = ({ element, active, highlighted, width, onClick, onChange }) => {
  return (
    <ElementWrapper
      element={element}
      onClick={onClick}
      onChange={onChange}
      maxWidth={width}
      active={active}
      highlighted={highlighted}
      editable
    >
      <AdvanceTreeMapContent element={element} />
    </ElementWrapper>
  );
};

const CustomizedContent = ({ root, depth, x, y, width, height, index, colors, name }) => {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill: depth < 2 ? colors[Math.floor((index / root.children.length) * 7)] : '#ffffff00',
          stroke: '#fff',
          strokeWidth: 2 / (depth + 1e-10),
          strokeOpacity: 1 / (depth + 1e-10),
        }}
      />
      {depth === 1 && (
        <>
          <text x={x + width / 2} y={y + height / 2 + 7} textAnchor="middle" fill="#fff" fontSize={14}>
            {name}
          </text>
          <text x={x + 4} y={y + 18} fill="#fff" fontSize={16} fillOpacity={0.9}>
            {index + 1}
          </text>
        </>
      )}
    </g>
  );
};

CustomizedContent.propTypes = {
  root: PropTypes.object,
  depth: PropTypes.number,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  index: PropTypes.number,
  colors: PropTypes.array.isRequired,
  name: PropTypes.string,
};

AdvanceTreeMap.propTypes = ElementPropTypes;

export const AdvanceTreeMapContent = ({ element }) => {
  return (
    <Treemap
      width={element.width}
      height={element.height}
      data={element.config.data}
      className="space"
      dataKey="size"
      stroke="#fff"
      fill="#8884d8"
      content={<CustomizedContent colors={element.config.colors} />}
    />
  );
};

AdvanceTreeMapContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default AdvanceTreeMap;
