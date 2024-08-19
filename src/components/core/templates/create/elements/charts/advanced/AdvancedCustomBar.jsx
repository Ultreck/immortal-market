import { cn, getPercentagesMax } from '@/lib/utils';
import { motion } from 'framer-motion';
import { TbCircleFilled } from 'react-icons/tb';
import { Button, Tooltip } from '@nextui-org/react';

const AdvancedCustomBar = ({ element }) => {
  const processData = (data, numberOfBarsToShow) => {
    if (data.length <= numberOfBarsToShow) {
      return data;
    }
    const visibleData = data.slice(0, numberOfBarsToShow);
    const otherValue = data.slice(numberOfBarsToShow).reduce((sum, item) => sum + Number(item.value), 0);
    return [...visibleData, { name: 'Others', value: otherValue }];
  };

  const percentages = getPercentagesMax(element.config.data.map((i) => +i.value));
  const processedData = processData(element.config.data, element.config.numberOfBarsToShow);

  const chartStyle = element.config.backgroundImage.enabled
    ? {
        backgroundImage: `
          linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100%),
          url(${element.config.backgroundImage.url})
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : {};

  const renderTooltip = (content, children) => {
    if (element.config.tooltipToEachBar) {
      return (
        <Tooltip
          content={
            <div className="w-[150px] p-2">
              <div className="space-y-4">
                <p>{content}</p>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, cumque vel. Distinctio nam aliquid
                  tenetur! Sit fuga tenetur non deleniti necessitatibus ea maiores libero? Voluptas ut quisquam fugiat
                  reprehenderit mollitia?
                </div>
              </div>
              <Button size="sm" className="bg-white text-black mt-5">
                Details
              </Button>
            </div>
          }
        >
          {children}
        </Tooltip>
      );
    }
    return children;
  };

  const renderCardTooltip = (children) => {
    if (element.config.tooltipToCard) {
      return (
        <Tooltip
          content={
            <div>
              <div className="w-[150px] p-2">
                <div className="space-y-4">
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, cumque vel. Distinctio nam aliquid
                    tenetur! Sit fuga tenetur non deleniti necessitatibus ea maiores libero? Voluptas ut quisquam fugiat
                    reprehenderit mollitia?
                  </div>
                </div>
                <Button size="sm" className="bg-white text-black mt-5">
                  Details
                </Button>
              </div>
            </div>
          }
          placement="right-start"
        >
          {children}
        </Tooltip>
      );
    }
    return children;
  };

  return renderCardTooltip(
    <div className="relative" style={chartStyle}>
      {element.config.backgroundImage.enabled && <div className="absolute inset-0 bg-white bg-opacity-10" />}
      {element.config.haveHeader && (
        <h3 className="text-3xl font-semibold mb-10"> Top 10 Most Capitalized Listed Companies in Nigeria, 2020</h3>
      )}
      {element.config.orientation === 'vertical' && (
        <div className="flex justify-between items-end h-[400px] w-full space-x-4">
          {processedData.map((item, index) =>
            renderTooltip(
              `${item.name}: ${item.value}`,
              <div key={index} className="flex flex-col items-center w-full">
                <div className="w-full h-[350px] bg-opacity-75 rounded relative overflow-hidden">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{
                      height: `${percentages[index]}%`,
                      backgroundColor: '#2673D9',
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 25,
                      duration: 1,
                      delay: index * 0.1,
                    }}
                    className={cn(
                      'w-full absolute bottom-0',
                      element.config.curvedEnd ? 'rounded-t-full' : 'rounded-t'
                    )}
                  >
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white text-sm font-medium bg-opacity-50">
                      <span className="bg-black  px-2 py-1 rounded">{item.value}</span>
                      {element.config.showIcon && <TbCircleFilled color="white" size={20} className="mx-auto mt-3" />}
                    </div>
                  </motion.div>
                </div>
                <p className="mt-2 text-sm text-center font-semibold">{item.name}</p>
              </div>
            )
          )}
        </div>
      )}

      {element.config.orientation === 'horizontal' && (
        <div className="flex flex-col items-start space-y-2">
          {processedData.map((item, index) =>
            renderTooltip(
              `${item.name}: ${item.value}`,
              <div key={index} className="grid grid-cols-12 w-full space-y-2">
                {element.config.axisPosition === 'front' && <p className="col-span-2">{item.name}</p>}
                <div className="h-[50px] flex flex-col justify-end rounded w-full relative overflow-hidden col-span-10">
                  <motion.div
                    initial={{ width: 0, translateY: 20 }}
                    animate={{
                      width: `${percentages[index]}%`,
                      height: '100%',
                      backgroundColor: '#2673D9',
                      translateY: 0,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 25,
                      duration: 1,
                      delay: index * 0.1,
                    }}
                    className={cn('w-1 h-full relative rounded', element.config.curvedEnd && 'rounded-full')}
                  ></motion.div>
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-black text-lg font-medium flex">
                    {element.config.showIcon && <TbCircleFilled color="white" size={30} />}
                    <div className="my-auto px-5">{item.value}</div>
                  </div>
                </div>
                {element.config.axisPosition === 'behind' && <p className="col-span-2">{item.name}</p>}
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default AdvancedCustomBar;
