import React from 'react';
import { ResponsiveContainer, Treemap } from 'recharts';

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

const AdvancedTreeMap = ({ element }) => {
  return (
    <div>
      <ResponsiveContainer width={element.width} height={element.height}>
      <Treemap
          data={element.config.data}
          className="space"
          dataKey="size"
          stroke="#fff"
          fill="#8884d8"
          content={<CustomizedContent colors={element.config.colors} />}
        />
      </ResponsiveContainer>
    </div>
  );
};

export default AdvancedTreeMap;