import { ChartContainer, ChartTooltip } from '@/components/ui/chart.jsx';
import { LabelList, Legend, Pie, PieChart } from 'recharts';
import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';
import ElementChartWrapper from '@/components/core/templates/create/elements/charts/standard/helpers/ElementChartWrapper.jsx';
import CustomChartTooltipContent from '@/components/core/templates/create/elements/charts/standard/helpers/CustomChartTooltipContent.jsx';

const StandardSemiPie = ({ element }) => {
  return <StandardSemiPieContent element={element} />;
};

StandardSemiPie.propTypes = ElementPropTypes;

export const StandardSemiPieContent = ({ element, isChartWrapperDisabled = false }) => {
  const data = element.config.data.slice(0, element.config.points).map((item, i) => ({
    ...item,
    fill: element.config.colors[i],
  }));

  const formatLabel = (value) => {
    const total = data.reduce((sum, entry) => sum + entry[element.config.keys.value], 0);
    const formatMap = {
      value: value.toLocaleString(),
      percentage: `${((value / total) * 100).toFixed(1)}%`,
      both: `${value.toLocaleString()} (${((value / total) * 100).toFixed(1)}%)`,
      currency: `${element.config.label.currency} ${value.toLocaleString()}`,
      wholeNumber: Math.round(value).toLocaleString(),
      decimal: value.toLocaleString(),
    };
    return formatMap[element.config.label.format] || value;
  };

  return (
    <ElementChartWrapper element={element} isDisabled={isChartWrapperDisabled}>
      <ChartContainer
        config={{}}
        style={{ height: element.size.height, width: element.size.width, opacity: element.style.opacity }}
      >
        <PieChart width={element.width} height={element.height}>
          <Pie
            data={data}
            dataKey={element.config.keys.value}
            nameKey={element.config.keys.name}
            startAngle={180}
            endAngle={0}
            cx="50%"
            cy="50%"
          >
            {element.config.label.enabled && (
              <LabelList
                dataKey={element.config.keys.value}
                position={element.config.label.position}
                stroke="none"
                fill={element.config.label.color}
                fontSize={element.config.label.fontSize}
                fontFamily={element.config.label.fontFamily}
                formatter={formatLabel}
              />
            )}
          </Pie>
          {element.config.tooltip.enabled && (
            <ChartTooltip
              cursor={false}
              allowEscapeViewBox={{ x: true, y: true }}
              content={(e) => {
                return (
                  <>
                    {e && e.payload && e.payload.length > 0 && (
                      <CustomChartTooltipContent
                        label={e?.payload[0].payload[element.config.keys.name]}
                        value={e?.payload[0].payload[element.config.keys.value]}
                        element={element}
                      />
                    )}
                  </>
                );
              }}
            />
          )}
          {element.config.legend.enabled && (
            <Legend
              wrapperStyle={{
                fontSize: element.config.legend.fontSize,
                color: element.config.legend.color,
              }}
            />
          )}
        </PieChart>
      </ChartContainer>
    </ElementChartWrapper>
  );
};

StandardSemiPieContent.propTypes = {
  element: PropTypes.object.isRequired,
  isChartWrapperDisabled: PropTypes.bool,
};

export default StandardSemiPie;
