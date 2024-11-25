import PropTypes from 'prop-types';
import { ElementPropTypes } from '@/lib/prop-types.js';
import ElementChartWrapper from '@/components/core/templates/create/elements/charts/standard/helpers/ElementChartWrapper.jsx';
import { capitalize } from '@/lib/utils.js';
import { ChartContainer, ChartLegendContent, ChartTooltip } from '@/components/ui/chart.jsx';
import { LabelList, Legend, Pie, PieChart } from 'recharts';
import ChartTooltipContent from '@/components/core/templates/create/elements/charts/standard/helpers/ChartTooltipContent.jsx';

const StandardPie = ({ element }) => {
  return <StandardPieContent element={element} />;
};

export const StandardPiePresent = ({ element, isChartWrapperDisabled }) => {
  return <StandardPieContent element={element} present isChartWrapperDisabled={isChartWrapperDisabled} />;
};

export const StandardPieContent = ({ element, present = false, isChartWrapperDisabled = false }) => {
  const data = element.config.data.slice(0, element.config.pies).map((item, i) => ({
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
        <PieChart>
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
                ? ({ payload, ...args }) => {
                    const total = data.reduce((sum, entry) => sum + entry[element.config.keys.y], 0);
                    let formattedValue;
                    const value = payload[element.config.keys.y];

                    switch (element.config.styles.labelFormat) {
                      case 'value':
                        formattedValue = value;
                        break;
                      case 'percentage':
                        formattedValue = `${((value / total) * 100).toFixed(1)}%`;
                        break;
                      case 'both':
                        formattedValue = `${value} (${((value / total) * 100).toFixed(1)}%)`;
                        break;
                      case 'currency':
                        formattedValue = `${element.config.styles.selectedCurrency} ${value.toFixed(2)}`;
                        break;
                      case 'wholeNumber':
                        formattedValue = Math.round(value);
                        break;
                      case 'decimal':
                        formattedValue = value.toFixed(2);
                        break;
                      default:
                        formattedValue = value;
                    }

                    return (
                      <text
                        cx={args.cx}
                        cy={args.cy}
                        x={args.x}
                        y={args.y}
                        textAnchor={args.textAnchor}
                        dominantBaseline={args.dominantBaseline}
                        fill="#000000"
                        fontSize={element.config.labelFontSize}
                        fontFamily={element.config.fontFamily}
                      >
                        {formattedValue}
                      </text>
                    );
                  }
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
                formatter={(value) => {
                  const total = data.reduce((sum, entry) => sum + entry[element.config.keys.y], 0);
                  switch (element.config.styles.labelFormat) {
                    case 'value':
                      return value;
                    case 'percentage':
                      return `${((value / total) * 100).toFixed(1)}%`;
                    case 'both':
                      return `${value} (${((value / total) * 100).toFixed(1)}%)`;
                    case 'currency':
                      return `${element.config.styles.selectedCurrency} ${value.toFixed(2)}`;
                    case 'wholeNumber':
                      return Math.round(value);
                    case 'decimal':
                      return value.toFixed(2);
                    default:
                      return value;
                  }
                }}
              />
            )}
          </Pie>
          {element.config.showLegend && (
            <Legend
              content={<ChartLegendContent nameKey={element.config.keys.x} />}
              className="-translate-y-2 flex-wrap gap-3"
              wrapperStyle={{
                fontSize: element.config.styles.legendSize,
                color: element.config.styles.legendColor,
              }}
            />
          )}
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
