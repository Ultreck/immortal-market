import PropTypes from 'prop-types';
import { ElementPropTypes } from '@/lib/prop-types.js';
import ElementChartWrapper from '@/components/core/templates/create/elements/charts/standard/helpers/ElementChartWrapper.jsx';
import { capitalize } from '@/lib/utils.js';
import { ChartContainer, ChartTooltip } from '@/components/ui/chart.jsx';
import { LabelList, Pie, PieChart } from 'recharts';
import ChartTooltipContent from '@/components/core/templates/create/elements/charts/standard/helpers/ChartTooltipContent.jsx';

const StandardPie = ({ element }) => {
  return <StandardPieContent element={element} />;
};

export const StandardPiePresent = ({ element, isChartWrapperDisabled }) => {
  return <StandardPieContent element={element} present isChartWrapperDisabled={isChartWrapperDisabled} />;
};

export const StandardPieContent = ({ element, present = false, isChartWrapperDisabled = false }) => {
  const data = element.config.data.map((item, i) => ({
    ...item,
    fill: element.config.colors[i],
  }));

  const config = element.config.data.reduce((acc, item, i) => {
    acc[item[element.config.keys.x]] = {
      label: capitalize(item[element.config.keys.x]),
      color: element.config.colors[i],
    };
    return acc;
  }, {});

  return (
    <ElementChartWrapper element={element} isDisabled={isChartWrapperDisabled}>
      <ChartContainer
        config={config}
        style={{ height: element.height, width: element.width, opacity: element.style.opacity }}
      >
        <PieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
          <ChartTooltip
            cursor={false}
            allowEscapeViewBox={{ x: true, y: true }}
            content={(e) => {
              return (
                <>
                  {e && e.payload && e.payload.length > 0 && (
                    <ChartTooltipContent
                      label={e?.payload[0].payload.name}
                      value={e?.payload[0].payload.value}
                      present={present}
                    />
                  )}
                </>
              );
            }}
          />
          <Pie
            data={data}
            dataKey={element.config.keys.y}
            nameKey={element.config.keys.x}
            labelLine={false}
            label={
              element.config.labelPosition === 'outside'
                ? ({ payload, ...args }) => (
                    <text
                      cx={args.cx}
                      cy={args.cy}
                      x={args.x}
                      y={args.y}
                      textAnchor={args.textAnchor}
                      dominantBaseline={args.dominantBaseline}
                      fill="#000000"
                      fontSize={element.config.labelFontSize}
                    >
                      {payload[element.config.keys.y]}
                    </text>
                  )
                : undefined
            }
          >
            {element.config.showLabel && element.config.labelPosition === 'inside' && (
              <LabelList
                dataKey={element.config.keys.y}
                position={element.config.labelPosition}
                fill={element.config.labelFontColor}
                fontSize={element.config.labelFontSize}
                fontFamily={element.config.fontFamily}
              />
            )}
          </Pie>
        </PieChart>
      </ChartContainer>
    </ElementChartWrapper>
  );
};

StandardPie.propTypes = ElementPropTypes;
StandardPiePresent.propTypes = {
  element: PropTypes.object.isRequired,
  isChartWrapperDisabled: PropTypes.bool,
};
StandardPieContent.propTypes = {
  element: PropTypes.object.isRequired,
  present: PropTypes.bool,
  isChartWrapperDisabled: PropTypes.bool,
};

export default StandardPie;
