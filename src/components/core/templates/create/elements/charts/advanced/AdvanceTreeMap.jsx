import { Treemap } from 'recharts';
import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const AdvanceTreeMap = ({ element }) => {
  return <AdvanceTreeMapContent element={element} />;
};

const CustomizedContent = ({ element, root, depth, x, y, width, height, index, colors, name }) => {
  const getValueFromName = element.config.data.find((item) => item.name === name);

  const formatChartValue = (value, element) => {
    const total = element.config.data.reduce((sum, item) => sum + item.children[0].size, 0);

    switch (element.config.labelFormat) {
      case 'value':
        return value.toLocaleString();
      case 'percentage':
        return `${((value / total) * 100).toFixed(1)}%`;
      case 'both':
        return `${value.toLocaleString()} (${Math.round((value / total) * 100)}%)`;
      case 'currency':
        return `${element.config.selectedCurrency || 'N'} ${value.toLocaleString()}`;
      case 'wholeNumber':
        return Math.round(value).toLocaleString();
      case 'decimal':
        return value.toLocaleString();
      default:
        return value;
    }
  };

  return (
    <g
      style={{
        top: element.config.styles.yPadding,
        left: element.config.styles.xPadding,
        bottom: element.config.styles.yPadding,
        right: element.config.styles.xPadding,
      }}
    >
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
          {element.config.showValue && (
            <text
              x={x + width / 2}
              y={y + height / 2}
              textAnchor="middle"
              fill={element.config.labelFontColor}
              fontSize={element.config.labelFontSize}
              fontWeight={element.config.styles.lFontWeight}
              fontStyle={element.config.styles.lFontStyle}
              color={element.config.labelFontColor}
            >
              {name}
            </text>
          )}
          {element.config.showLabel && (
            <text
              x={x + width / 2}
              y={y + height / 2 + 20}
              textAnchor="middle"
              fill={element.config.labelFontColor}
              fontSize={element.config.labelFontSize}
              fontWeight={element.config.styles.lFontWeight}
              fontStyle={element.config.styles.lFontStyle}
              color={element.config.labelFontColor}
            >
              {formatChartValue(getValueFromName.children[0].size, element)}
            </text>
          )}
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
  element: PropTypes.object,
};

AdvanceTreeMap.propTypes = ElementPropTypes;

export const AdvanceTreeMapContent = ({ element }) => {
  useEffect(() => {}, [element]);
  return (
    <Treemap
      width={element.width}
      height={element.height}
      data={element.config.data}
      className="space"
      dataKey="size"
      stroke="#fff"
      content={<CustomizedContent element={element} colors={element.config.colors} />}
    />
  );
};

AdvanceTreeMapContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default AdvanceTreeMap;
