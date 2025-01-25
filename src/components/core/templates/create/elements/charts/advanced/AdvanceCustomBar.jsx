import { cn, getPercentagesMax } from '@/lib/utils';
import { motion } from 'motion/react';
import { Button, Tooltip } from '@heroui/react';
import { Fragment, useMemo } from 'react';
import { TbCircleFilled } from 'react-icons/tb';
import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';

const AdvanceCustomBar = ({ element }) => {
  return <AdvancedCustomBarContent element={element} />;
};

AdvanceCustomBar.propTypes = ElementPropTypes;

export const AdvancedCustomBarContent = ({ element }) => {
  const data = useMemo(() => {
    if (element.config.data.length <= element.config.bars) return element.config.data;
    const visibleData = element.config.data.slice(0, element.config.bars);
    const otherValue = Math.round(
      element.config.data.slice(element.config.bars).reduce((sum, item) => sum + Number(item.value), 0)
    );
    return [...visibleData, { label: 'Others', value: otherValue }];
  }, [element.config.data, element.config.bars]);

  const percentages = getPercentagesMax(element.config.data.map((i) => +i.value));

  const renderBarTooltip = (content, children) => {
    if (element.config.barTooltip) {
      return (
        <Tooltip
          content={
            <div className="w-[150px] p-2">
              <p>{content}</p>
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
    if (element.config.cardTooltip) {
      return (
        <Tooltip
          content={
            <div>
              <div className="w-[150px] p-3">
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
    <>
      {element.config.orientation === 'vertical' && (
        <div
          style={{
            paddingTop: element.config.styles.yPadding,
            paddingLeft: element.config.styles.xPadding,
            paddingBottom: element.config.styles.yPadding,
            paddingRight: element.config.styles.xPadding,
          }}
          className="w-full h-full"
        >
          <div
            className="grid gap-3 items-end h-full w-full"
            style={{ gridTemplateColumns: `repeat(${element.config.bars + 1}, 1fr)` }}
          >
            {data.map((item, index) => (
              <Fragment key={index}>
                {renderBarTooltip(
                  `${item.label}: ${item.value}`,
                  <div className="flex flex-col items-center w-full h-full">
                    <div className="w-full h-full rounded relative flex flex-col items-center justify-end">
                      {element.config.labelPosition === 'start' && (
                        <p
                          style={{
                            fontSize: element.config.styles.labelSize,
                            fontWeight: element.config.styles.lFontWeight,
                            fontStyle: element.config.styles.lFontStyle,
                            color: element.config.styles.valueAndLableColor,
                            left: `calc(${percentages[index]}% + 6px)`,
                          }}
                          key={index}
                          className="text-sm text-center leading-none font-medium mb-2"
                        >
                          {item.label}
                        </p>
                      )}
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{
                          height: `${percentages[index]}%`,
                          backgroundColor: element.config.colors[index % element.config.colors.length],
                        }}
                        transition={{
                          type: 'spring',
                          stiffness: 300,
                          damping: 25,
                          duration: 1,
                          delay: index * 0.1,
                        }}
                        className="w-full rounded-2xl"
                      />
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white text-md font-medium mix-blend-difference flex flex-col items-center space-y-1">
                        <p
                          style={{
                            fontSize: element.config.styles.labelSize,
                            fontWeight: element.config.styles.lFontWeight,
                            fontStyle: element.config.styles.lFontStyle,
                            color: element.config.styles.valueAndLableColor,
                          }}
                        >
                          {item.value}
                        </p>
                        {element.config.isIconVisible && <TbCircleFilled size={16} />}
                      </div>
                    </div>
                  </div>
                )}
              </Fragment>
            ))}
          </div>
          {element.config.labelPosition === 'end' && (
            <div
              className="grid gap-3 w-full mt-2"
              style={{ gridTemplateColumns: `repeat(${element.config.bars + 1}, 1fr)` }}
            >
              {data.map((item, index) => (
                <p key={index} className="text-sm text-center leading-none font-medium">
                  {item.label}
                </p>
              ))}
            </div>
          )}
        </div>
      )}
      {element.config.orientation === 'horizontal' && (
        <div
          style={{
            paddingTop: element.config.styles.yPadding,
            paddingLeft: element.config.styles.xPadding,
            paddingBottom: element.config.styles.yPadding,
            paddingRight: element.config.styles.xPadding,
          }}
          className="flex flex-col items-start h-full space-y-2"
        >
          {data.map((item, index) => (
            <Fragment key={index}>
              {renderBarTooltip(
                `${item.label}: ${item.value}`,
                <div className="grid grid-cols-12 gap-2 items-center w-full h-full">
                  {element.config.labelPosition === 'start' && (
                    <p
                      style={{
                        fontSize: element.config.styles.labelSize,
                        fontWeight: element.config.styles.lFontWeight,
                        fontStyle: element.config.styles.lFontStyle,
                        color: element.config.styles.valueAndLableColor,
                        left: `calc(${percentages[index]}% + 6px)`,
                      }}
                      className="col-span-2 leading-none"
                    >
                      {item.label}
                    </p>
                  )}
                  <div
                    className={cn(
                      'h-full flex flex-row justify-start items-center rounded w-full relative col-span-12',
                      { 'col-span-10': element.config.labelPosition === 'start' }
                    )}
                  >
                    <motion.div
                      initial={{ width: 0, translateY: 20 }}
                      animate={{
                        width: `${percentages[index]}%`,
                        height: '100%',
                        backgroundColor: element.config.colors[index % element.config.colors.length],
                        translateY: 0,
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 25,
                        duration: 1,
                        delay: index * 0.1,
                      }}
                      className={cn('w-1 h-full relative rounded-2xl')}
                    ></motion.div>
                    {element.config.isIconVisible && (
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-md font-medium flex items-center space-x-2">
                        <div className="w-10 h-10 rounded-full !bg-white flex" style={{ backgroundColor: 'white' }}>
                          <div
                            className="z-50 text-center my-auto mx-auto uppercase"
                            style={{ color: element.config.colors[index % element.config.colors.length] }}
                          >
                            {item.label[0]}
                            {item.label[1]}
                          </div>
                        </div>
                        <p
                          style={{
                            fontSize: element.config.styles.valueSize,
                            fontWeight: element.config.styles.lFontWeight,
                            fontStyle: element.config.styles.lFontStyle,
                            color: element.config.styles.valueAndLableColor,
                            left: `calc(${percentages[index]}% + 6px)`,
                          }}
                          className="text-black"
                        >
                          {item.value}
                        </p>
                      </div>
                    )}
                    {element.config.labelPosition === 'end' && (
                      <p
                        style={{
                          fontSize: element.config.styles.labelSize,
                          fontWeight: element.config.styles.lFontWeight,
                          fontStyle: element.config.styles.lFontStyle,
                          color: element.config.styles.valueAndLableColor,
                          left: `calc(${percentages[index]}% + 6px)`,
                        }}
                        key={index}
                        className={cn('text-sm leading-none font-medium absolute top-1/2 -translate-y-1/2')}
                      >
                        {item.label}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </Fragment>
          ))}
        </div>
      )}
    </>
  );
};

AdvancedCustomBarContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default AdvanceCustomBar;
