import { Button, Popover, PopoverContent, PopoverTrigger, useDisclosure } from '@nextui-org/react';
import PropTypes from 'prop-types';
import { TbSettings2 } from 'react-icons/tb';
import StandardStackedBarConfig from '@/components/core/templates/create/tools/elements/specific/standard-config/StandardStackedBarConfig.jsx';
import StandardBarCommonConfig from '@/components/core/templates/create/tools/elements/specific/standard-config/StandardBarCommonConfig.jsx';
import StandardPieCommonConfig from '@/components/core/templates/create/tools/elements/specific/standard-config/StandardPieCommonConfig.jsx';
import StandardAltBarConfig from '@/components/core/templates/create/tools/elements/specific/standard-config/StandardAltBarConfig.jsx';
import StandardMultipleBarConfig from '@/components/core/templates/create/tools/elements/specific/standard-config/StandardMultipleBarConfig.jsx';
import StandardBubbleChartConfig from '@/components/core/templates/create/tools/elements/specific/standard-config/StandardBubbleChartConfig.jsx';

const ChartConfig = ({ element, onChange }) => {
  const { isOpen, onOpenChange } = useDisclosure({ defaultOpen: false });

  return (
    <Popover
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="left"
      showArrow
      offset={10}
      classNames={{ content: 'w-[400px]' }}
    >
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Adjust font size" className="text-base">
          <TbSettings2 size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border border-default-200">
        <div className="px-8 py-6 w-full">
          <ChartData element={element} onChange={onChange} onClose={onOpenChange} />
        </div>
      </PopoverContent>
    </Popover>
  );
};

const ChartData = ({ element, onChange }) => {
  console.log({element});
  
  return (
    <div>
      {element.type === 'stacked-bar' && <StandardStackedBarConfig element={element} onChange={onChange} />}
      {element.type === 'stacked-bar-vertical' && (
        <StandardStackedBarConfig element={element} onChange={onChange} />
      )}
      {element.type === 'line-area' && <StandardMultipleBarConfig element={element} onChange={onChange} />}
      {element.type === 'line-area-vertical' && (
        <StandardMultipleBarConfig element={element} onChange={onChange} />
      )}
      {element.type === 'line-bar' && <StandardMultipleBarConfig element={element} onChange={onChange} />}
      {element.type === 'area-bar' && <StandardMultipleBarConfig element={element} onChange={onChange} />}
      {element.type === 'area-bar-vertical' && (
        <StandardMultipleBarConfig element={element} onChange={onChange} />
      )}
      {element.type === 'line-bar-vertical' && (
        <StandardMultipleBarConfig element={element} onChange={onChange} />
      )}
      {element.type === 'bar' && <StandardBarCommonConfig element={element} onChange={onChange} />}
      {element.type === 'bubble' && <StandardBubbleChartConfig element={element} onChange={onChange} />}
      {element.type === 'area' && <StandardBarCommonConfig element={element} onChange={onChange} />}
      {element.type === 'area-multiple' && <StandardStackedBarConfig element={element} onChange={onChange} />}
      {element.type === 'line' && <StandardBarCommonConfig element={element} onChange={onChange} />}
      {element.type === 'line-multiple' && <StandardStackedBarConfig element={element} onChange={onChange} />}
      {element.type === 'bar-not-sep' && <StandardBarCommonConfig element={element} onChange={onChange} />}
      {element.type === 'vertical-bar' && <StandardBarCommonConfig element={element} onChange={onChange} />}
      {element.type === 'vertical-bar-no-sep' && (
        <StandardBarCommonConfig element={element} onChange={onChange} />
      )}
      {element.type === 'bar-multiple' && <StandardMultipleBarConfig element={element} onChange={onChange} />}
      {element.type === 'bar-multiple-vertical' && (
        <StandardMultipleBarConfig element={element} onChange={onChange} />
      )}
      {element.type === 'pie' && <StandardPieCommonConfig element={element} onChange={onChange} />}
      {element.type === 'semi-pie' && <StandardPieCommonConfig element={element} onChange={onChange} />}
      {element.type === 'semi-circle' && <StandardPieCommonConfig element={element} onChange={onChange} />}
      {element.type === 'doughnut' && <StandardPieCommonConfig element={element} onChange={onChange} />}
      {element.type === 'doughnut-standard' && (
        <StandardPieCommonConfig element={element} onChange={onChange} />
      )}
      {element.type === 'doughnut-crazy' && <StandardPieCommonConfig element={element} onChange={onChange} />}
      {element.config.name === 'alt-bar' && <StandardAltBarConfig element={element} onChange={onChange} />}
    </div>
  );
};

const propTypes = {
  element: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    style: PropTypes.object,
    config: PropTypes.object,
  }),
  onChange: PropTypes.func.isRequired,
};

ChartConfig.propTypes = propTypes;

ChartData.propTypes = { ...propTypes, onBack: PropTypes.func, onClose: PropTypes.func };

export default ChartConfig;
