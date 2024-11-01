import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, XAxis, YAxis } from 'recharts';
import { ChartContainer, ChartTooltip } from '@/components/ui/chart.jsx';
import { capitalize, cn } from '@/lib/utils.js';
import PropTypes from 'prop-types';
import { ElementPropTypes } from '@/lib/prop-types.js';
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';
import Drawer from '@/components/ui/Drawer.jsx';
import { TbEye, TbReplace, TbZoomInArea } from 'react-icons/tb';
import useTemplateStore from '@/store/template.js';

const StandardBar = ({ element }) => {
  return <StandardBarContent element={element} isPresentMode={false} />;
};

export const StandardBarPresent = ({ element }) => {
  return <StandardBarContent element={element} isPresentMode={true} />;
};

export const StandardBarContent = ({ element, isPresentMode = false }) => {
  const { useBackgroundImage, backgroundImage, useBackgroundColor, backgroundColor } = element.config;
  const { isOpen: isOpen, onOpen: onOpen, onClose: onClose } = useDisclosure();
  const { isOpen: isModalOpen, onOpen: onModalOpen, onClose: onModalClose } = useDisclosure();
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);

  const chartData = element.config.data.slice(0, element.config.bars).map((item, index) => {
    const color = element.config.colors?.[index];
    return { ...item, fill: color };
  });

  const items = [
    {
      id: 'insights',
      title: 'Insights',
      icon: <TbEye size="24" />,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      disabled: false,
    },
    {
      id: 'enlarge',
      title: 'Enlarge',
      icon: <TbZoomInArea size="24" />,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      disabled: false,
    },
    {
      id: 'data',
      title: 'Data',
      icon: <TbReplace size="24" />,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      disabled: false,
    },
  ];

  const _chartData = [
    { browser: 'chrome', visitors: 275, fill: '#264A5A' },
    { browser: 'safari', visitors: 200, fill: '#E8C22C' },
    { browser: 'firefox', visitors: 187, fill: '#F6881F' },
    { browser: 'edge', visitors: 173, fill: '#E66B5B' },
    { browser: 'other', visitors: 90, fill: '#1D9085' },
  ];
  const chartConfig = {
    visitors: {
      label: 'Visitors',
    },
    chrome: {
      label: 'Chrome',
      color: 'hsl(var(--chart-1))',
    },
    safari: {
      label: 'Safari',
      color: 'hsl(var(--chart-2))',
    },
    firefox: {
      label: 'Firefox',
      color: 'hsl(var(--chart-3))',
    },
    edge: {
      label: 'Edge',
      color: 'hsl(var(--chart-4))',
    },
    other: {
      label: 'Other',
      color: 'hsl(var(--chart-5))',
    },
  };

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
          paddingTop: element.config.styles.yPadding,
          paddingLeft: element.config.styles.xPadding,
          paddingBottom: element.config.styles.yPadding,
          paddingRight: element.config.styles.xPadding,
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
          onClick={() => {
            if (!isPresentMode) updateTemplate({ openTool: 'chart-data' });
            else onModalOpen();
          }}
        >
          <ChartTooltip
            cursor={false}
            content={(e) => {
              return (
                <div className="bg-default-100 text-default-900 rounded-2xl px-6 py-4  text-sm w-full max-w-[250px] h-full">
                  {e && e.payload && e.payload.length > 0 && (
                    <div>
                      {isPresentMode ? (
                        <div className="h-[150px]">
                          <p>Name : {e?.payload[0].payload.name || ''}</p>
                          <p>Value : {e?.payload[0].payload.value || ''}</p>
                          <div className="w-full h-full">
                            {element.tooltip.type === 'bar' && (
                              <ChartContainer config={chartConfig} className="w-full h-full">
                                <BarChart accessibilityLayer data={_chartData}>
                                  <XAxis
                                    dataKey="browser"
                                    tickLine={false}
                                    tickMargin={10}
                                    axisLine={false}
                                    tickFormatter={(value) => value.slice(0, 3)}
                                  />
                                  <Bar dataKey="visitors" fill="#2673D9" radius={8} />
                                </BarChart>
                              </ChartContainer>
                            )}
                            {element.tooltip.type === 'pie' && (
                              <ChartContainer
                                config={chartConfig}
                                className="mx-auto aspect-square max-h-[250px] w-full"
                              >
                                <PieChart>
                                  <Pie data={_chartData} dataKey="visitors" nameKey="browser" />
                                </PieChart>
                              </ChartContainer>
                            )}
                            {element.tooltip.type === 'line' && (
                              <ChartContainer
                                config={chartConfig}
                                className="mx-auto aspect-square max-h-[250px] w-full"
                              >
                                <LineChart>
                                  <Line data={_chartData} dataKey="visitors" nameKey="browser" />
                                </LineChart>
                              </ChartContainer>
                            )}
                          </div>
                        </div>
                      ) : (
                        <div>
                          <p>Name : {e?.payload[0].payload.name || ''}</p>
                          <p>Value : {e?.payload[0].payload.value || ''}</p>
                          <p>Data Connected</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            }}
          />
          <CartesianGrid vertical={element.config.showYGridline} horizontal={element.config.showXGridline} />
          <XAxis
            dataKey={element.config.keys.x}
            tickFormatter={(value) => capitalize(value)}
            hide={!element.config.showXaxis}
            tick={{
              fontSize: element.config.styles.xGridSize,
              fontWeight: element.config.styles.gFontWeight,
              fontStyle: element.config.styles.gFontStyle,
              fill: element.config.styles.gridAndLegendColor,
            }}
          />
          <YAxis
            dataKey={element.config.keys.y}
            hide={!element.config.showYaxis}
            tick={{
              fontSize: element.config.styles.yGridSize,
              fontWeight: element.config.styles.gFontWeight,
              fontStyle: element.config.styles.gFontStyle,
              fill: element.config.styles.gridAndLegendColor,
            }}
          />
          {element.config.showLegend && (
            <Legend
              wrapperStyle={{
                fontSize: element.config.styles.legendSize,
                color: element.config.styles.legendColor,
              }}
            />
          )}
          <Bar dataKey={element.config.keys.y} radius={8} />
        </BarChart>
      </ChartContainer>

      <Modal isOpen={isModalOpen} onClose={onModalClose}>
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
            <ModalBody>
              <div className="grid grid-cols-3 gap-4">
                {items.map((item, i) => (
                  <div
                    key={i}
                    className={cn(
                      'flex flex-col items-center justify-center text-center border border-default-300 rounded-2xl px-4 py-6 cursor-pointer',
                      { 'opacity-50 cursor-not-allowed': item.disabled }
                    )}
                    onClick={() => onOpen()}
                  >
                    <div>{item.icon}</div>
                    <div className="leading-[1.1] text-base mt-2">{item.title}</div>
                  </div>
                ))}
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onModalClose}>
                Close
              </Button>
              <Button color="primary" onPress={onModalClose}>
                Action
              </Button>
            </ModalFooter>
          </>
        </ModalContent>{' '}
      </Modal>

      {isOpen && (
        <Drawer width="1000" isOpen={isOpen} title="Drilldown" onClose={onClose}>
          <>
            <ChartContainer config={chartConfig} className="">
              <BarChart accessibilityLayer data={_chartData}>
                <XAxis
                  dataKey="browser"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <Bar dataKey="visitors" fill="#2673D9" radius={8} />
              </BarChart>
            </ChartContainer>
            <p>
              lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quia quibusdamlorem ipsum dolor sit
              amet consectetur adipisicing elit. Voluptate quia quibusdamlorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptate quia quibusdamlorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate quia quibusdamlorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quia
              quibusdamlorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quia quibusdamlorem ipsum
              consectetur adipisicing elit. Voluptate quia quibusdamlorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptate quia quibusdamlorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quia
            </p>
          </>
        </Drawer>
      )}
    </div>
  );
};

StandardBar.propTypes = ElementPropTypes;
StandardBarContent.propTypes = {
  element: PropTypes.object.isRequired,
  isPresentMode: PropTypes.bool.isRequired,
};
StandardBarPresent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default StandardBar;
