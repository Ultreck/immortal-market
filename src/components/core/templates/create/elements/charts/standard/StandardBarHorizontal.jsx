import { Bar, BarChart, XAxis, YAxis } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart.jsx';
import { capitalize } from '@/lib/utils.js';
import PropTypes from 'prop-types';
import { ElementPropTypes } from '@/lib/prop-types.js';
import { useEffect } from 'react';
import ChartBackgroundImage from '@/components/core/templates/create/elements/charts/standard/helpers/ChartBackgroundImage.jsx';
import ElementChartWrapper from '@/components/core/templates/create/elements/charts/standard/helpers/ElementChartWrapper.jsx';

const StandardBarHorizontal = ({ element }) => {
  return <StandardBarHorizontalContent element={element} />;
};

StandardBarHorizontal.propTypes = ElementPropTypes;

export const StandardBarHorizontalContent = ({ element, isChartWrapperDisabled = false }) => {
  const chartData = element.config.data.slice(0, element.config.bars).map((item, index) => {
    const color = element.config.colors?.[index];
    return { ...item, fill: color };
  });

  useEffect(() => {}, [element]);

  return (
    <div
      style={{
        backgroundColor: element.config.useBackgroundColor ? element.config.backgroundColor : 'none',
        position: 'relative',
      }}
    >
      {element.config.useBackgroundImage && <ChartBackgroundImage element={element} />}
      <ElementChartWrapper element={element} isDisabled={isChartWrapperDisabled}>
        <ChartContainer
          config={{}}
          style={{
            height: element.height,
            width: element.width,
            opacity: element.style.opacity,
          }}
        >
          <BarChart accessibilityLayer data={chartData} layout="vertical">
            <XAxis type="number" dataKey={element.config.keys.x} hide fontSize={element.config.fontSize} />
            <YAxis
              dataKey={element.config.keys.y}
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => capitalize(value)}
              fontSize={element.config.fontSize}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Bar dataKey={element.config.keys.y} radius={element.config.styles.borderRadius} />
          </BarChart>
        </ChartContainer>
      </ElementChartWrapper>
    </div>
  );
};

StandardBarHorizontalContent.propTypes = {
  element: PropTypes.object.isRequired,
  isChartWrapperDisabled: PropTypes.bool,
};

export default StandardBarHorizontal;
