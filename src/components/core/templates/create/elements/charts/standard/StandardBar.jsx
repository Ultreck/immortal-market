import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis } from 'recharts';
import { ChartContainer } from '@/components/ui/chart.jsx';
import { capitalize } from '@/lib/utils.js';
import PropTypes from 'prop-types';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { ElementPropTypes } from '@/lib/prop-types.js';
import { useEffect, useState } from 'react';
import { Button, useDisclosure } from '@nextui-org/react';
import Drawer from '@/components/ui/Drawer.jsx';

const StandardBar = ({ element, active, highlighted, width, onClick, onChange }) => {
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
      <StandardBarContent element={element} />
    </ElementWrapper>
  );
};

export const StandardBarPresent = ({ element }) => {
  return <StandardBarContent element={element} />;
};

export const StandardBarContent = ({ element }) => {
  const { useBackgroundImage, backgroundImage, useBackgroundColor, backgroundColor } = element.config;
  const [customTooltip, setCustomTooltip] = useState({ visible: false, data: null, position: { x: 0, y: 0 } });
  const { isOpen: isOpen, onOpen: onOpen, onClose: onClose } = useDisclosure();

  const chartData = element.config.data.slice(0, element.config.bars).map((item, index) => {
    const color = element.config.colors?.[index];
    return { ...item, fill: color };
  });

  const handleTooltipShow = (data, e) => {
    if (data && data.activePayload && data.activePayload.length > 0) {
      const payload = data.activePayload[0].payload;
      setCustomTooltip({
        visible: true,
        data: payload,
        position: { x: data.chartX, y: data.chartY },
      });
    }
  };

  useEffect(() => {}, [element]);

  return (
    <div
      style={{
        backgroundColor: useBackgroundColor ? backgroundColor : 'none',
        backgroundImage: useBackgroundImage ? `url(${backgroundImage})` : 'none',
      }}
    >
      <ChartContainer
        config={{}}
        style={{
          height: element.height,
          width: element.width,
          opacity: element.style.opacity,
        }}
      >
        <BarChart
          accessibilityLayer
          data={chartData}
          barGap={5}
          barCategoryGap={5}
          onMouseUp={(data, e) => handleTooltipShow(data, e)}
          // onMouseLeave={handleTooltipHide}
        >
          <CartesianGrid vertical={element.config.showYGridline} horizontal={element.config.showXGridline} />
          <XAxis
            dataKey={element.config.keys.x}
            tickFormatter={(value) => capitalize(value)}
            hide={!element.config.showXaxis}
            fontSize={12}
          />
          <YAxis dataKey={element.config.keys.y} hide={!element.config.showYaxis} fontSize={element.config.fontSize} />
          {element.config.showLegend && <Legend />}
          <Bar dataKey={element.config.keys.y} radius={8} />
        </BarChart>
      </ChartContainer>

      {customTooltip.visible && customTooltip.data && (
        <div
          className="bg-default-100 rounded-xl absolute px-6 py-4 text-white text-sm"
          style={{
            top: customTooltip.position.y + 10,
            left: customTooltip.position.x + 10,
            zIndex: 1000,
          }}
        >
          <p>Label: {customTooltip.data[element.config.keys.x]}</p>
          <p>Value: {customTooltip.data[element.config.keys.y]}</p>
          <div>
            <Button className="mt-6" onClick={() => onOpen()}>
              Drilldown
            </Button>
          </div>
        </div>
      )}

      {isOpen && customTooltip.data && (
        <Drawer isOpen={isOpen} title="Drilldown" onClose={onClose}>
          <p>Label: {customTooltip?.data[element.config.keys.x]}</p>
          <p>Value: {customTooltip?.data[element.config.keys.y]}</p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae placeat voluptates eum modi accusamus, iure exercitationem quis tempore illum alias velit debitis nisi mollitia vero consequatur expedita? Velit, at iure!
        </Drawer>
      )}
    </div>
  );
};

StandardBar.propTypes = ElementPropTypes;
StandardBarContent.propTypes = {
  element: PropTypes.object.isRequired,
};
StandardBarPresent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardBar;

